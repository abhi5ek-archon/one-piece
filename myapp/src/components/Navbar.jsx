import { AppBar, Button,  Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>haaha</h3>
<Link to='log'>
<Button variant='contained'>Login</Button>
</Link>

<Link to='sign'>
    <Button variant='contained'>Signup</Button>
    </Link>
    <Link to='state'>
    <Button variant='contained'>state</Button>
    </Link>
    <Link to='New'>
    <Button variant='contained'>new</Button>
    </Link>

    
    <Link to='Api'>
    <Button variant='contained'>Api</Button>
    </Link>

    
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar