import React from "react";
import { connect } from "react-redux";
import AdminPage from "./AdminPage";


const AdminPageContainer = () => {
    return <AdminPage />;
};
const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(AdminPageContainer);
