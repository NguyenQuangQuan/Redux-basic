import React, { useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addTodo, clearAll, selectTodo } from './todoSlice';
import TodoItem from './TodoItem';

export function TodoList() {
  const dispatch = useAppDispatch()
  const [value,setValue] = useState('')
  const todo = useAppSelector(selectTodo)
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField label="Todo" variant="outlined" onChange={(event)=>setValue(event.target.value)} value={value}/>
    <Stack spacing={2} direction="row">
      <Button onClick={()=>dispatch(addTodo({id: todo.length + 1,todo:value,completed:false}))} variant="outlined">ADD</Button>
      <Button onClick={()=>dispatch(clearAll())} variant="outlined">CLEAR ALL</Button>
    </Stack>
    <TodoItem todo = {todo}/>
  </Box>
  );
}
