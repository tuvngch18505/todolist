// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo,deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
