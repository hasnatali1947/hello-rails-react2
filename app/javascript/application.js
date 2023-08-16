// Entry point for the build script in your package.json
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import App from "./components/App"
import store from "./store";

function Index() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  ReactDOM.render(<Index />, document.getElementById('root'));