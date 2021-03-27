import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import citiesReducer from '../reducers/cities'
import Api from '../../libs/Api'

const CitiesApi = new Api()
const rootReducer = combineReducers({
     cities: citiesReducer
})

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunk.withExtraArgument({
                    CitiesApi
                }),
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ?
            window.devToolsExtension() :
            f => f // add support for Redux dev tools
        )
    );

    return store;
};

export default configureStore