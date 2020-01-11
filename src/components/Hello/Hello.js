import React from 'react'
import {connect} from 'react-redux';
import { loadType } from '../../actions/actions';


const Hello = ({state: {message, images}, loadType}) => {
    const handleClick = (e) => {
        e.persist();
        loadType()
    }
    return (
        <div>
            <h1>This is how this works!!!! Let's take a look at this state</h1>
            <p onClick={(e) => handleClick(e)}> {message}</p>
        </div>
    )
}

const mapStateToProps = ({reducer, alsoThis}) => ({
    state: reducer,
    another: alsoThis
})

export default connect(mapStateToProps, {loadType})(Hello);
