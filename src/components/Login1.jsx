import React, { Component } from 'react'
import img1 from './images/Memogram_font.png';
// import './style/Loginst.css';
import {Box,Card,TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default class Login1 extends Component {


  render() {
    return (
       <div className='gry'>
      <form>
      <Box>
      <Card elevation={5}>
        <div style={{backgroundColor: "#D9D9D9"}}>
          <div>
          <div><center><img style={{width: 250, marginTop: 25}} src={img1} alt="" /></center></div>
          <h6 className='k1'>Email or Phone number or Username</h6>
          <div className='k2'><TextField fullWidth variant="outlined" size='small' /></div>
          <h6 className='k3'>Password</h6>
          <div style={{marginTop:230}} className='k4'><TextField fullWidth variant="outlined" type="password" size='small'/></div>
          <div className='k5'><Link style={{textDecoration:"none"}} to={'/Forgotpass1'}><Button className='k9' style={{textTransform:"none",color:"black",marginLeft: -4,fontSize: 13}} size='small'><h6>Forgot&nbsp;Password?</h6></Button></Link></div>
          <div style={{paddingBottom: 50}} align="center"><Link style={{textDecoration:"none"}} to={'/Home1'}><Button  style={{textTransform:"none",backgroundColor:'#1E7E44',width:80,height:30}} size='medium'><p className='k61' style={{color:"black"}}>Log&nbsp;in</p></Button></Link></div>
          <div className='k71'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
            <div><h6 style={{width: '70px', textAlign: 'center'}}>OR</h6></div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} /></div>
          </div>
          <div className='k81'><h6>Don't have an account ?,<Link style={{textDecoration:"none"}} to={'/Signup'}><Button size='small' style={{textTransform:"none",marginLeft: -7}}>Sign&nbsp;up</Button></Link></h6></div>
        </div>
        </div>
      </Card>
      </Box>
      </form>
    </div>
    )
  }
}
