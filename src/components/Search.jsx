import React, { Component } from 'react'
import {Grid,Card} from '@mui/material'
import logo from './images/logo.png'
import imaf from './images/homed.png'
import searchd from './images/searchd.png'
import profile from './images/profile.png'
import logout from './images/logout1.png'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default class home extends Component {
    cardstyle={width:"20%",height:"100%",backgroundColor:"#F1E574"}
    // mainstyle={width:"70%",height:"80%",backgroundColor:"red",paddingLeft:"982px",paddingTop:"814px"}
    // icon = { paddingLeft:"80%" ,}
    // wish= { paddingLeft:"3%"}
    newcardstyle={
      marginLeft:"17%",
      // backgroundColor:"red"
      width:"50%",
      marginTop:10,
      marginBottom: 0
    }
  render() {
    return (
      <div>
        <div>

        <Grid container spacing={1}>
        <Card elevation={3} style={this.cardstyle }>
            {/* <img src='./memo.png' alt='Memogram'></img> */}
            <div style={{backgroundColor:'#F1E574',height:"full"}}>

            <img src={logo} alt="Logo" style={{width:"100%",height:"100%"}} />
            <Link to={'/Home1'}><img src={imaf} alt="Logo" style={{width:"100%",height:"100%",marginTop:'10%'}} /></Link>
            <img src={searchd} alt="Logo" style={{width:"100%",height:"100%",marginTop:'10%',}} />
            <Link to={'/Profile'}><img src={profile} alt="Logo" style={{width:"100%",height:"100%",marginTop:'13%',}} /></Link>
            <Link style={{textDecoration:"none"}} to={'/'}><img src={logout} alt="Logo" style={{width:"100%",height:"100%",marginTop:'15%',}} /></Link>
            </div>
      </Card>
      <Card variant="outlined" elevation={3} style={this.newcardstyle}>
        <div align="center" style={{marginTop:30}}><Paper component="form" sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 420 }}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search' }}/>
        <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
      </IconButton>
      </Paper></div>
      <div align="center" style={{marginTop:100}}><h4 style={{color:"grey",fontSize:16}}>No recent searches..</h4></div>
      </Card>      
      </Grid>
      </div>
      </div>  
    )
  }
}