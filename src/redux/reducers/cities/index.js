import { CITIES_FETCH_SUCCCESS, 
    IS_LOADING, 
    CITIES_SET_FILTER, 
    CITIES_CLEAR, 
    CITIES_SELECT_REMOVE, 
    CITIES_SELECT_ADD 
} from "../../constants";
const initialState = {
    isLoading: false,
    data: [],
    total: 0,
    page: 0,
    filter: '',
    hasMore: false,
    error: '',
    selectedCities: []
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

        case CITIES_CLEAR: {
            const _state = {
                ...state,
                data: [],
                page: 0,
                total: 0
            };
            return _state;
        }

        case CITIES_SELECT_ADD: {
            const _state = {
                ...state,
            };
            _state.selectedCities = [..._state.selectedCities, action.payload.geonameid]
            return _state;
        }

        case CITIES_SELECT_REMOVE: {
            const _state = {
                ...state
            };
            _state.selectedCities = _state.selectedCities.filter(c => c.geonameid !== action.payload.geonameid)
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
