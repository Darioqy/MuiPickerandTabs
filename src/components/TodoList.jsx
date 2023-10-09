import React, { useState } from 'react';
import './Todolist.css'
import TodoTable from './TodoTable';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function TodoList({children}) {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [prio, setPrio] = useState('');
  const [todos, setTodos] = useState([]);




  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const dateChanged = (event) => {
    setDate(event.target.value);
  }

  const prioChanged = (event) => {
    setPrio(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = { description: desc, date: date, priority: prio };
    setTodos([...todos, newTodo]);
    setDesc('');
    setDate('');
    setPrio('');
  }

  const deleteTodo = (index) => {
    const updateTodos = todos.filter((todo, i) => i !== index);
    setTodos(updateTodos);

  }

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      <div className='todo-Container'>
        
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <h2>Add to Do:</h2>
        <TextField
          label="Description"
          variant="standard"
          name="text" value={desc}
          onChange={inputChanged}
          />

          <DatePicker
            label="Date"
            variant="standard"
            name="date" value={date}
            onChange={dateChanged}/>

            

        <TextField
          label="Priority"
          variant="standard"
          name="prio" value={prio}
          onChange={prioChanged}
         />

        <Button onClick={addTodo} variant="contained">Add</Button>
        

     
        </Stack>
      
      </div>
    
      
      
      
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </LocalizationProvider>
    </>
  );
}

export default TodoList;