import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainpageContainer from "./Mainpage/MainpageContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
                <MainpageContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
