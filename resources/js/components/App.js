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
import AddNews from "./News/Add";
import EditNews from "./News/Edit";
import News1 from "./Times/News1"
import News2 from "./Times/News2"
import News3 from "./Times/News3"
import Mero1 from "./Times/Mero1"
import Mero2 from "./Times/Mero2"

const App = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Navbar />
                <Switch>
                <Route exact path="/" render={() => <MainpageContainer />} />
                <Route path="/admin" render={() => <AdminPageContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/newsAdd" render={() => <AddNews />} />
                <Route path="/newsEdit/:id" render={() => <EditNews />} />
                <Route path="/news1" render={() => <News1 />} />
                <Route path="/news2" render={() => <News2 />} />
                <Route path="/news3" render={() => <News3 />} />
                <Route path="/mero1" render={() => <Mero1 />} />
                <Route path="/mero2" render={() => <Mero2 />} />
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
