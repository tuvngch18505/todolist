import React, { useState } from 'react';
import { Tabs } from 'antd';
import TodoList from './component/TodoList';
import { Button, Input } from 'antd'

const { TabPane } = Tabs;


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    // Add more initial todos here
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: Date.now(), text: newTodoText, completed: false }
      ]);
      setNewTodoText('');
    }
  };


  return (
    <div className="App">
      <h1>Todo App</h1>
      <Input
        placeholder="Enter a new todo"
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onPressEnter={addTodo}
      />
      <Tabs defaultActiveKey="All">
        <TabPane tab="All" key="All">
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </TabPane>
        <TabPane tab="Active" key="Active">
          <TodoList todos={todos.filter(todo => !todo.completed)} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </TabPane>
        <TabPane tab="Completed" key="Completed">
          <TodoList todos={todos.filter(todo => todo.completed)} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </TabPane>
      </Tabs>

      {todos.length > 0 ? (
        <Button type="primary" onClick={() => {
          setTodos([]);
        }} style={{ marginTop: '10px' }}>
          Delete Completed
        </Button>
      ) : null}
    </div>
  );
}



export default App;
