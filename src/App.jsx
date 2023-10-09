import { useState } from 'react'
import './App.css'

import Todolist from './components/TodoList'
import './components/Todolist.css' 

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LocalizationProvider>
      <div>
        <Todolist></Todolist>
        
      </div>
      </LocalizationProvider>
    </>
  )
}

export default App