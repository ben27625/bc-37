import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import reportWebVitals from './reportWebVitals'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { chairReducer } from './Ex5/redux/chairReducer'
import StudentReducer from './EX6/redux/studentReducer'

const rootReducer = combineReducers({
  

    // EX5
    chair: chairReducer,

    student: StudentReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()