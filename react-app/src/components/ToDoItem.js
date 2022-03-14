import React from "react";
import PropTypes from "prop-types";


const ToDoItem = props => {
    const ToDo = props.todoProps;
    const mCompleted = props.markCompletedFunc;
    const dToDo = props.deleteFunc;
    const ToDoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: ToDo.completed ? 'line-through' : 'none'
    }

    const deleteBottomStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    return (
        <p style={ToDoItemStyle}>
            <input type="checkbox" onChange={mCompleted.bind(this, ToDo.id)} checked={ToDo.completed} />
            {ToDo.title}
            <button style={deleteBottomStyle} onClick={dToDo.bind(this, ToDo.id)} >Delete</button>
        </p>
    )
}

//PropTypes
ToDoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompletedFunc: PropTypes.func.isRequired,
    deleteFunc: PropTypes.func.isRequired
}


export default ToDoItem;