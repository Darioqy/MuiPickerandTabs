
import React, { useRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import DatePicker from '@mui/material/Stack';


function TodoTable({ todos, deleteTodo }) {

  const columns = [
    { field: "description", filter: true, sortable: true, floatingFilter: true },
    { field: "date", filter: true, sortable: true, floatingFilter: true },
    { field: "priority", filter: true, sortable: true, floatingFilter: true }
    
  ];

  const gridRef = useRef();

  return (
<div>
    <div className="ag-theme-material"
     style={{height: '700px', width: '70%', margin: 'auto'}} >
    <AgGridReact
        columnDefs={columns}
        rowData={todos}
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        animateRows={true}
        filter={true}
        floatingFilter={true}>
     </AgGridReact>
</div>

    </div>
  );
}

export default TodoTable;