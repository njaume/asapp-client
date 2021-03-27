import {CITIES_FETCH_FAIL, CITIES_FETCH_SUCCCESS, IS_LOADING} from "../../constants";
const initialState = {
    isLoading: false,
    data: [],
    total: 0, 
    page: 1,
    filter: '',
    hasMore: false,
    error: ''
};

function citiesReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING: {
            const _state = {
                ...state
            };
            _state.isLoading = action.payload.isLoading;
            return _state;
        }
        case CITIES_FETCH_SUCCCESS: {
            const _state = {
                ...state
            };
            _state.data = action.payload.data
            ? [..._state.data, ...action.payload.data]
            : [..._state.data];
            return _state;
        }
        default:
            return state;
    }
}

export default citiesReducer;
