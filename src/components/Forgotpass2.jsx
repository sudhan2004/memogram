import React, { Component } from 'react'
import img1 from './images/Locked.png'
import './style/Forgotpass2st.css'
import {Box,Card,TextField,Button} from '@mui/material'
import {Link} from 'react-router-dom'

export default class Forgotpass1 extends Component {
  render() {
    return (
        <div className='gry'>
        <form>
        <Box>
        <Card elevation={5}>
        <div style={{backgroundColor: "#D9D9D9",paddingBottom:40}}>
            <div>
            <div><center><img style={{width: 150, marginTop: 8}} src={img1} alt=""/></center></div>
            <h6 className='k11'>ACCOUNT RECOVERY</h6>
            <h6 style={{marginLeft: 40}}>Enter OTP</h6>
            <div className='k2'><TextField fullWidth variant="outlined" size='small'/></div>
            <div align="center"><Link style={{textDecoration:"none"}} to={'/Forgotpass3'}><Button style={{textTransform:"none",color:"black",backgroundColor:"#1E7E44",width: 300}} type='Submit'>Confirm OTP</Button></Link></div>
            <div className='k41'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
            <div><h6 style={{width: '70px', textAlign: 'center'}}>OR</h6></div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} /></div>
            </div>
            <div style={{marginTop: 10,textAlign:"center"}}><Link style={{textDecoration:"none"}} to={'/Signup'}><Button style={{textTransform:"none",color:"black",fontStyle: 'italic'}}>Create new account</Button></Link></div>
            <div style={{marginTop: 25,textAlign:"center"}}><Link style={{textDecoration:"none"}} to={'/'}><Button style={{textTransform:"none"}} >BACK TO LOGIN</Button></Link></div>
          </div>
          </div>
        </Card>
        </Box>
        </form>
      </div>
    )
  }
}
