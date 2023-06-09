import React, { Component } from 'react'
import img1 from './images/Memogram_font.png';
// import './style/Signupst.css';
import {Box,Card,TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
        <div className='gry'>
        <form>
        <Box>
        <Card elevation={5}>
          <div style={{backgroundColor: "#D9D9D9",paddingBottom:10}}>
            <div>
            <div><center><img style={{width: 250, marginTop: 25}} src={img1} alt="" /></center></div>
            <h6 className='k1'>Email or Phone number</h6>
            <div className='k2'><TextField fullWidth variant="outlined" size='small' /></div>
            <h6 className='k3'>Username</h6>
            <div style={{marginTop:230}} className='k4'><TextField fullWidth variant='outlined' size='small'/></div>
            <h6 className='k51'>Password</h6>
            <div className='k61'><TextField fullWidth variant="outlined" style={{backgroundColor:"White"}} type="password" size='small'/></div>
            <div className='k8' align="center"><Link style={{textDecoration:"none"}} to={'/'}><button className='k7'>Sign up</button></Link></div>
            <div align="center"><h6>Already have an account ?,<Link style={{textDecoration:"none"}} to={'/'}><Button size='small' style={{textTransform:"none",marginLeft: -7}}>Log&nbsp;in</Button></Link></h6></div>
          </div>
          </div>
        </Card>
        </Box>
        </form>
      </div>
    )
  }
}
