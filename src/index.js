import SC from "soundcloud";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Stream from "./components/Stream";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";
import { CLIENT_ID, REDIRECT_URI } from "./constants/auth";

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const tracks = [{ title: "Some track" }, { title: "Some other track" }];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById("root")
);

module.hot.accept();