import React from "react";
import { connect } from "react-redux";
import AdminPage from "./AdminPage";

export const logout = async () =>{
    const response = await fetch(
        window.document.location.protocol+'//' + window.document.location.host + "/api/logout",
        {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        }
    );
    setRedirect(true);

}

const AdminPageContainer = () => {
    return <AdminPage logout={logout}/>;
};
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(AdminPageContainer);
