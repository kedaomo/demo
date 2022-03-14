import React, { Fragment, useState } from 'react'
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
const ToDo = () => {
    const [ToDoState, setToDoState] = useState([
        {
            id: 1,
            title: 'Viec 1',
            completed: true
        },
        {
            id: 2,
            title: 'Viec 2',
            completed: false
        },
        {
            id: 3,
            title: 'Viec 3',
            completed: false
        }
    ]);


    const markCompleted = id => {
        const newToDos = ToDoState.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        });

        setToDoState(newToDos);
    }

    const deleteToDo = id => {
        const newToDos = ToDoState.filter(todo => todo.id !== id);
        setToDoState(newToDos);
    };
    return (

        <Fragment>
            <AddToDo />
            {ToDoState.map(todo => {
                return <ToDoItem key={todo.id} todoProps={todo} markCompletedFunc={markCompleted} deleteFunc = {deleteToDo} />
            })}
        </Fragment>

    )
}

export default ToDo