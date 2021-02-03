import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

/* eslint-disable no-underscore-dangle */
export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
/* eslint-enable */
