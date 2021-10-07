import React from "react";
import { connect } from "react-redux";
import Mainpage from "./Mainpage";


const MainpageContainer = () => {
    return (
        <Mainpage />
    )
}
const mapStateToProps = (state) => {
    
}


export default connect(mapStateToProps, {})(MainpageContainer);