import React from 'react'
import { connect } from 'react-redux';
import Main from './Main';

const NewsContainer = (props) => {
   
    return (<Main/>)
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(NewsContainer);
