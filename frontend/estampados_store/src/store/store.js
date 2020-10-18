import { createStore, combineReducers, compose } from 'redux';


import { AuthReducer } from '../redux/AuthReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: AuthReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers()
);