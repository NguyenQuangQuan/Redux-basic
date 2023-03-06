import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './features/component/TodoList';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h5">TODO APP WITH REDUX TOOLKIT</Typography>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
