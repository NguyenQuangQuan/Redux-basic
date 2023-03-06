import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { TTodo } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { deleteTodo, editTodo } from './todoSlice';

type TodoItemProps ={
    todo: TTodo[]
}

function TodoItem( props: TodoItemProps) {
    const dispatch = useAppDispatch()
    const {todo} = props

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo({ id: id }))
    }

    const handleEditTodo = (id:number)=>{
        const newValue = prompt('Enter new todo:')
        dispatch(editTodo({id:id,todo: newValue}))
    }

    return (
        <>
        {todo.map((item:TTodo) => (
            <>
            <Stack spacing={2} direction="row">
                <Typography key={item.id} variant="h5">{item.todo}</Typography>
                <Button onClick={() => handleDeleteTodo(item.id)} variant="outlined">DELETE</Button>
                <Button onClick={() => handleEditTodo(item.id)} variant="outlined">EDIT</Button>
            </Stack>
            </>
            
        ))}
        </>
    )
}

export default TodoItem