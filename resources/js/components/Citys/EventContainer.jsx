import React from 'react'
import { connect } from 'react-redux';
import Main from './Main';

const EventContainer = (props) => {
   
    return (<Main/>)
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(EventContainer);
