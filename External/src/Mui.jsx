import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Alert from '@mui/material/Alert';
import './Mui.css';

function Mui(){
    return(
        <div class = "card">
        <h2>MUI Component Example</h2>
        <Button variant='contained'>Click Me</Button><br/><br/>
        <TextField label="Enter Name"></TextField><br/><br/>
        <Checkbox/>Checkbox<br/><br/>
        <Radio/>Radio<br/><br/>
        <Alert severity='success'>Registration Successful!</Alert><br/><br/>
        </div>
    )
}
export default Mui;