import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TodoList from './TodoList'
import Home from './Home';



function TabApp() {
    const [value, setValue] = useState('TodoList');

    const handleChange = (event, value) => {
        setValue(value);
      };

      return (
        <div>
          <Tabs value={value} onChange={handleChange}>
             <Tab value="Home" label="Home" />
             <Tab value="TodoList" label="Todos" />
          </Tabs>
          {value === 'Home' && <Home></Home>}
          {value === 'TodoList' && <TodoList></TodoList>}
          
       </div> );
}
export default TabApp;