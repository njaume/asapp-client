import axios from 'axios';
import {
    CITIES_FETCH_SUCCCESS,
    CITIES_FETCH_FAIL,
    IS_LOADING,
    CITIES_SET_FILTER,
    CITIES_CLEAR,
    CITIES_SELECT_ADD,
    CITIES_SELECT_REMOVE,
    CITIES_GET_MY
} from "../../constants";
import { toast } from 'react-toastify';

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
            }
            dispatch(isLoading(false));
            const errorNorm = CitiesApi.parseRequestError(errors)
            return handleError(errorNorm);
        }

    };
};

const selectCity = (geonameid, checked) => {
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

            if (checked) {
                dispatch(addSelectedCity(geonameid))
            } else {
                dispatch(removeSelectedCity(geonameid))
            }
            selectedCitiesNormalized[geonameid] = checked
            await CitiesApi.selectCity(selectedCitiesNormalized);
            dispatch(isLoading(false));
            return
        } catch (errors) {
            console.log('error', errors)
            dispatch(isLoading(false));
            return handleError(CitiesApi.parseRequestError(errors)
            );
        }

    };
};

function getMyCitiesSuccess(selectedCities) {
    return {
        type: CITIES_GET_MY,
        payload: {
            selectedCities: selectedCities
        }
    };
}
const getMyCities = () => {
    return async (dispatch, getState, { CitiesApi }) => {
        try {
           // dispatch(isLoading(true));
            const response = await CitiesApi.getMyCities();
            console.log('response', response)
            dispatch(getMyCitiesSuccess(response && response.data ? response.data.data : []));
            return
        } catch (errors) {
            console.log('error', errors)
            dispatch(isLoading(false));
            return handleError(CitiesApi.parseRequestError(errors)
            );
        }

    };
};

const handleError = (error) => {
     const notify = () => toast(error && error.message ? error.message : "Wow something happened!", {type: 'error'});
     notify()
     return 
}
export {
    search,
    setFilter,
    clearCities,
    selectCity,
    getMyCities
};
