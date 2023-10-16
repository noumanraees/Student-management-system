import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function Staff() {
  const columns = [
    { field: 'id', headerName: 'S/N', width: 100 },
    {
        field: 'admissionNumber',
        headerName: 'Admission Number',
        flex: 1
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1
    },
    {
        field: 'gender',
        headerName: 'Gender',
        flex: 1
    },
    {
        field: "1",
        headerName: 'Edit Teacher',
        width: 150,
        renderCell: (params) => (
            <div>
                <button className='bg-green-300 p-3 rounded-2xl text-white font-bold text-md hover:scale-125' onClick={() => console.log(params.row)}>Edit</button>
            </div>
        ),
    },
    {
        field: "2",
        headerName: 'Delete Teacher',
        width: 140,
        renderCell: (params) => (
            <div>
                <button className='bg-red-700 p-3 rounded-2xl text-white font-bold text-md hover:scale-125' onClick={() => console.log(params.row)}>Delete</button>
            </div>
        ),
    },
];
const rows = [
    { id: 2, admissionNumber: 6, name: 'Nouman', gender: 'Male' },
    { id: 3, admissionNumber: 2, name: 'Hamza', gender: 'Male' },
    { id: 4, admissionNumber: 8, name: 'Mahnoor', class: 'JSS1', gender: 'Female' },
    { id: 5, admissionNumber: 3, name: 'Aeman', gender: 'Female' },
    { id: 6, admissionNumber: 1, name: 'Amad', class: "JSS2", gender: 'Male' },
    { id: 7, admissionNumber: 9, name: 'Asad', class: "JSS2", gender: 'Male' },
    { id: 8, admissionNumber: 5, name: 'Noor', class: "JSS2", gender: 'female' },
    { id: 9, admissionNumber: 7, name: 'Sami', class: "JSS2", gender: 'Male' },
    { id: 1, admissionNumber: 4, name: 'Samad', gender: 'Male' },
];

return (
<div className='dashboard'><div className='py-1'>
<h1 className='text-2xl font-semibold'> Teachers</h1>
</div>
<div className='p-1 h-[19%] bg-blue-400 '>
    <div className='py-1 flex  '>
        <button className='hover:bg-black hover:text-white rounded-2xl px-3'>
            All Teachers
        </button>
        <button className='hover:bg-black hover:text-white rounded-2xl  px-3'>
            +Add Teacher
        </button>
        <button className='hover:bg-black hover:text-white  rounded-2xl  px-3'>
            Update Teacher
        </button>
    </div>
    <div className='bg-red-200 '>
        <h1 className='p-2 font font-semibold'>Registered Teachers </h1>
    </div>
</div>
<div className='py-20 bg-white  '>
    <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    </Box>
</div>
</div>
)
}

export default Staff
