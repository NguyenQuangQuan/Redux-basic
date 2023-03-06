import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TTodo } from '../../types'

type TodoStateType = {
  todoList: TTodo[]
}

const todoList: TTodo[] = [
  {
    id: 1,
    todo: 'AOV',
    completed: false,
  },
  {
    id: 2,
    todo: 'WR',
    completed: true,
  },
  {
    id: 3,
    todo: 'LOL',
    completed: false,
  },
];

const initialState : TodoStateType ={
  todoList
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<TTodo>)=>{
      state.todoList.push(action.payload)
    },
    clearAll: (state) => {
      state.todoList = []
    },
    deleteTodo: (state, action) =>{
      state.todoList = state.todoList.filter((todo)=>todo.id !== action.payload.id)
    },
    editTodo: (state,action) =>{
      const {id, todo} = action.payload
      const index = state.todoList.findIndex(item => item.id === id);
      if (index !== -1) {
        state.todoList[index] = { ...state.todoList[index], todo };
      }
    }
  },

 
});

export const { addTodo,clearAll,deleteTodo,editTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todoList;

export default todoSlice.reducer;
