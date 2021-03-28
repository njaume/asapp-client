import axios from 'axios';
import {
    CITIES_FETCH_SUCCCESS,
    CITIES_FETCH_FAIL,
    IS_LOADING,
    CITIES_SET_FILTER,
    CITIES_CLEAR,
    CITIES_SELECT_ADD,
    CITIES_SELECT_REMOVE
} from "../../constants";
import { SELECT_CITIES_ACTIONS } from '../../../libs/strings'

function isLoading(isLoading) {
    return {
        type: IS_LOADING,
        payload: {
            isLoading: isLoading
        }
    };
}

function fetchSuccess(payload) {
    return {
        type: CITIES_FETCH_SUCCCESS,
        payload
    };
}

function fetchFail(payload) {
    return {
        type: CITIES_FETCH_FAIL,
        payload
    };
}



function setFilter(value) {
    return {
        type: CITIES_SET_FILTER,
        payload: {
            filter: value
        }
    };
}

function clearCities() {
    return {
        type: CITIES_CLEAR,
        payload: {
        }
    };
}

function addSelectedCity(geonameid) {
    return {
        type: CITIES_SELECT_ADD,
        payload: {
            geonameid: geonameid
        }
    };
}

function removeSelectedCity(geonameid) {
    return {
        type: CITIES_SELECT_REMOVE,
        payload: {
            geonameid: geonameid
        }
    };
}

let call;

const search = (text, page, size, first = true) => {
    return async (dispatch, getState, { CitiesApi }) => {
        try {
            dispatch(isLoading(true));
            const tmpText = !text || (text && text.replace(/\s/g, "").length === 0) ? '' : text;
            let response
            if (call) {
                call.cancel();
            }

            call = axios.CancelToken.source();

            if (first) {
                response = await CitiesApi.getCities(0, size, tmpText);
            } else {
                response = await CitiesApi.getCities(page * size, size, tmpText);
            }

            dispatch(fetchSuccess({ ...response.data, size: size }));
            return
        } catch (errors) {
            console.log('error', errors)
            if (!axios.isCancel(errors)) {
                //  dispatch(handleError(errors));
            }
            dispatch(isLoading(false));
            return dispatch(
                fetchFail(CitiesApi.parseRequestError(errors))
            );
        }

    };
};

const selectCity = (geonameid, action) => {
    return async (dispatch, getState, { CitiesApi }) => {
        try {
            dispatch(isLoading(true));
            const selectedCities = getState().cities.selectedCities
            const selectedCitiesNormalized = {}

            if (selectedCities) {
                selectedCities.forEach(c => {
                    selectedCitiesNormalized[c] = true
                })
            }

            if (action === SELECT_CITIES_ACTIONS.ADD) {
                dispatch(addSelectedCity(geonameid))
                selectedCitiesNormalized[geonameid] = true
            } else {
                dispatch(removeSelectedCity(geonameid))
                selectedCitiesNormalized[geonameid] = false
            }

            await CitiesApi.selectCity(selectedCitiesNormalized);
            //  dispatch(fetchSuccess({ ...response.data, size: size }));
            return
        } catch (errors) {
            console.log('error', errors)
            dispatch(isLoading(false));
            return dispatch(
                fetchFail(CitiesApi.parseRequestError(errors))
            );
        }

    };
};


export {
    search,
    setFilter,
    clearCities,
    selectCity
};
