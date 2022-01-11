import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // /^\s*$/ regular expression identifies a blank line
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = todoid => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = todoid => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const updateTodo = (todoid, value) => {
        if(!value.text || /^\s*$/.test(value.text)) {
            return;
        }
        setTodos(
            prev => prev.map(item => (item.id === todoid ? value : item))
        );
    };

    return(
        // Tip: Inside of wrapping around child components with a div, <> </> can also be used
        <>
            <h1>Write down your todo?</h1>
            <TodoForm
                onSubmit={addTodo}
            />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;