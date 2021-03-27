import axios from 'axios';
import {
CITIES_FETCH_SUCCCESS, CITIES_FETCH_FAIL, IS_LOADING
} from "../../constants";


function isLoading(isLoading) {
    return {
        type: IS_LOADING,
        payload: {
            loading: isLoading
        }
    };
}

function searchBarSuccess(payload) {
    return {
        type: SEARCHBAR_SUCCESS,
        payload
    };
}

function searchBarFail(payload) {
    return {
        type: SEARCHBAR_FAIL,
        payload
    };
}



function searchValue(value) {
    return {
        type: SEARCHBAR_VALUE,
        payload: {
            value: value
        }
    };
}

function searchClearResults() {
    return {
        type: SEARCHBAR_CLEAR_RESULTS,
        payload: {

        }
    };
}
let call;

const search = (text, page, size, first = true) => {
    return async (dispatch, getState) => {
        try {
            dispatch(searchBarLoading(true));
            dispatch(searchBarShowSuggestions(false))
            const selectedFilters = getState().main.ui.global.searchBar.selectedFilters
            const tmpText = !text || (text && text.replace(/\s/g, "").length === 0) ? '' : text;
            let response

            if (call) {
                call.cancel();
            }

            call = axios.CancelToken.source();

            if (first) {
                response = await cloudfunctions.searchPeople(tmpText, location, 0, size, call, '', locationOrUser, myId);
                const facets = response.data && response.data.facets ? response.data.facets : {}
                newFilters = SearchBussiness.normalizeFilters(facets, userTypes)

            } else {

                const filtersQueryString = SearchBussiness.buildSearchFiltersQueryString(selectedFilters)
                response = await cloudfunctions.searchPeople(tmpText, location, page, size, call, filtersQueryString, locationOrUser, myId);

            }

            //  lastSearchThread = tmpText;

          //  console.log('response', response)
            dispatch(searchBarSuccess({ ...response.data, size: size, filters: newFilters }));
            return
        } catch (errors) {
            console.log('error', errors)
            if (!axios.isCancel(errors)) {
                dispatch(handleError(errors));

            }
            dispatch(searchBarLoading(false));
            return dispatch(
                searchBarFail(cloudfunctions.parseRequestError(errors))
            );
        }

    };
};

const searchLocation = (text) => {
    return async (dispatch) => {
        try {

            // If string is just spaces, keep it clean.
            const tmp = !text || (text && text.replace(/\s/g, "").length === 0) ? '' : text;
            if (!tmp || tmp === '') return dispatch(searchBarLocationLoading(false));

            dispatch(searchBarLocationLoading(true));
            const states = await Utils.getStates(text);

            const cities = await Utils.getCities(text);

            dispatch(searchBarLocationSuccess(states.concat(cities)));
            dispatch(searchBarLocationLoading(false));
        } catch (errors) {
            dispatch(searchBarLocationLoading(false));
            return dispatch(searchBarLocationFail(errors));
        }
    };
};

export {
    searchFilterSet,
    searchBarShowSuggestions,
    searchFilterOpen,
    setLocationOrProfile,
    toggleSearchBar,
    searchBarLoading,
    searchBarSuccess,
    searchBarFail,
    search,
    clearSearch,
    searchValue,
    searchBlurValue,
    searchLocation,
    searchSetLocationValue,
    searchClearResults
};
