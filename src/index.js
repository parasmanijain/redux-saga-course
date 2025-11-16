import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./style.css";
import App from "./components/App";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // we use saga instead of thunk
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
