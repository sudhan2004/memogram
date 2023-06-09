import React, { Component } from 'react'
import img1 from './images/Locked.png'
import './style/Forgotpass3st.css'
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
            <div><center><img style={{width: 150, marginTop: 8}} src={img1} alt="" /></center></div>
            <h6 className='k11'>ACCOUNT RECOVERY</h6>
            <h6 style={{marginLeft: 40}}>New Password</h6>
            <div className='k2'><TextField fullWidth variant="outlined" size='small'/></div>
            <h6 style={{marginLeft: 40}}>Confirm New Password</h6>
            <div className='k2'><TextField fullWidth variant="outlined" size='small'/></div>
            <div align="center" style={{marginTop: 30}} ><Link style={{textDecoration:"none"}} to={'/Forgotpass4'}><Button style={{textTransform:"none",color:"black",backgroundColor:"#1E7E44",width: 300,fontStyle:'italic',fontSize: 15}} type='Submit'>Confirm</Button></Link></div>
            <div style={{marginTop: 50,textAlign:"center"}}><Link style={{textDecoration:"none"}} to={'/'}><Button style={{textTransform:"none"}} >BACK TO LOGIN</Button></Link></div>
          </div>
          </div>
        </Card>
        </Box>
        </form>
      </div>
    )
  }
}
