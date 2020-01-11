import React from "react";
import {connect} from 'react-redux';
import "./styles.css";
import { loadType } from "../../actions/actions";



const Header = ({loadType}) => {
    const handleClick = (e) => {
        e.persist()
        loadType();
    }
    return (<header onClick={(e) => handleClick(e)}>What the Splash</header>)};


const mapStateToProps = ({reducer}) => ({
    state: reducer
})
export default connect(mapStateToProps, {loadType})(Header);
