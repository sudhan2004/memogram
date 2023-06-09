import React, { Component } from 'react'
import img1 from './images/Locked.png'
import './style/Forgotpass4st.css'
import {Box,Card,Button} from '@mui/material'
import {Link} from 'react-router-dom'

export default class Forgotpass1 extends Component {
  render() {
    return (
        <div className='gry'>
        <form>
        <Box>
        <Card elevation={5}>
          <div style={{backgroundColor: "#D9D9D9"}}>
            <div>
            <div><center><img style={{width: 150, marginTop: 8}} src={img1} alt="" /></center></div>
            <h6 className='k11'>ACCOUNT RECOVERY</h6>
            
            <div><h6 className='k21'>NEW PASSWORD IS SET...</h6></div>
            
            <div className='k31'><Link style={{textDecoration:"none"}} to={'/'}><Button style={{textDecoration:"none"}}>BACK TO LOGIN</Button></Link></div>
          </div>
          </div>
        </Card>
        </Box>
        </form>
      </div>
    )
  }
}
