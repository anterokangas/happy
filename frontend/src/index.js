import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// import happyReducer from "./reducers/happyReducer";
import loginReducer from "./reducers/loginReducer";
// import userRegisterReducer from "./reducers/userRegisterReducer";
// import groupRegisterReducer from "./reducers/groupRegisterReducer";
// import groupReducer from "./reducers/groupReducer";
// import rightsReducer from "./reducers/rightsReducer";
// import happeningDefinitionReducer from "./reducers/happeningDefinitionReducer";
// import happeningReportingReducer from "./reducers/happeningReportingReducer";


const rootReducer = combineReducers({
    login: loginReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>    
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
