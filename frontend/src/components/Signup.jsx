import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [inputs,setInputs] = useState({});

    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const SubmitHandler = ()=>{
        console.log("btn click",inputs);
        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
            console.log(res);
            alert(res.data.message);
        })
    }
  return (
    <div style={{margin:'8%'}}>
      <Typography variant='h3' style={{color:"purple"}}> 
      Signup Form
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Name' 
            fullWidth
            name='name'
            onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Email' 
            fullWidth
            name='email'
            onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField 
            variant='outlined' 
            label='Address'
            name='address'
            multiline
            rows={3} 
            fullWidth
            onChange={inputHandler}>
            </TextField>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Phone' 
            fullWidth
            name='phone'
            onChange={inputHandler}>
            </TextField>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Place' 
            fullWidth
            name='place'
            onChange={inputHandler}>
            </TextField>
        </Grid> */}
        <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Username' 
            fullWidth
            name='username'
            onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField 
            variant='outlined' 
            label='Password' 
            fullWidth
            name='password'
            onChange={inputHandler}>
            </TextField>
        </Grid>
        <Grid item sx={12} sm={12} md={12}>
            <Button variant='contained' color='primary' onClick={SubmitHandler}> Submit </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Link to={'/'}> Back to Login </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup
