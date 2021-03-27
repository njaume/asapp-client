import {CITIES_FETCH_FAIL, CITIES_FETCH_SUCCCESS, IS_LOADING, CITIES_SET_FILTER} from "../../constants";
const initialState = {
    isLoading: false,
    data: [],
    total: 0, 
    page: 0,
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
        case CITIES_SET_FILTER: {
            const _state = {
                ...state
            };
            _state.filter = action.payload.filter;
            return _state;
        }
        case CITIES_FETCH_SUCCCESS: {
            const _state = {
                ...state
            };
            _state.data = action.payload.data
            ? [..._state.data, ...action.payload.data]
            : [..._state.data];

            _state.hasMore = action.payload.data && action.payload.data.length === action.payload.size
            _state.isLoading = false;
            _state.page = _state.page + 1;
            return _state;
        }
        default:
            return state;
    }
}

export default citiesReducer;
