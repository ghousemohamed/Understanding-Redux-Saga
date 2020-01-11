import React from "react";
import {connect} from 'react-redux';
import "./styles.css";
import { loadType, loadImages } from "../../actions/actions";
import { LOAD_TYPE } from "../../actions/types";




const Header = ({load}) => {
    const handleClick = (e) => {
       load();
    }
    return (<header onClick={(e) => handleClick(e)}>What the Splash</header>)};


const mapStateToProps = ({reducer}) => ({
    state: reducer
})

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(loadImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
