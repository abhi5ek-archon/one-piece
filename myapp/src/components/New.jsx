import { Button } from '@mui/material'
import React, { useState } from 'react'

const  New= () => {
    const[name,setname]=useState("wow")
  return (
    <div><h2>welcome {name}</h2> 
    <Button onClick ={()=>setname('bro')}variant="contained" color="success">bro</Button>
    <Button onClick ={()=>setname('machu')}variant="contained" color="success">machu</Button>
    <Button onClick ={()=>setname('buddy')}variant="contained" color="success">buddy</Button>
    </div>

  )
}

export default New