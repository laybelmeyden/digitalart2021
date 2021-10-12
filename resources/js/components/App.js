import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Navbar from "./Navbar/Navbar";
import {HashRouter, Route, Switch } from "react-router-dom";
import MainpageContainer from "./Mainpage/MainpageContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminPageContainer from "./Admin/AdminPageContainer";
import NotFound from "./NotFound/NotFound";
import Login from "./Admin/Login";
import Register from "./Admin/Register";


const App = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Navbar />
                <Switch>
                <Route exact path="/" render={() => <MainpageContainer />} />
                <Route path="/admin" render={() => <AdminPageContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/auth554321" render={() => <Register />} />
                <Route path="" component={NotFound} />
                </Switch>
            </Provider>
        </HashRouter>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
