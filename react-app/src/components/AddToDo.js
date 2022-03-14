import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddToDo = props => {
    const [title, setTitle] = useState('');

    const addToDoFormStyle = {
        display: 'flex',

    }

    const addToDoInputStyle = {
        flex: '10',
        padding: '5px'
    }

    const changeTitle = event => {
        setTitle(event.target.value);
    }

    return (
        <form style={addToDoFormStyle}>
            <input type="text" name="title" placeholder="Them viec" style={addToDoInputStyle} onChange={changeTitle}   />
            <input type="submit" value="them" className="btn" />
        </form>
    )
}

AddToDo.protoTypes = {};

export default AddToDo;