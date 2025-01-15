import { TextField } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[name,setname]=useState("buddy")
    var handleinput=(e)=>{
        setname(e.target.value)
    }
  return (
    <div><h1>home</h1>
    <h2>nice {name}</h2> 
    <TextField onChange={handleinput} id="outlined-basic" label="Name" variant="outlined" />
    </div>
  )
}

export default State
