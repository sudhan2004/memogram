import React, { Component } from 'react'
import {Grid,Card} from '@mui/material';
import logo from './images/logo.png';
import imaf from './images/homed.png'
import search1 from './images/search1.png'
import profile from './images/pro 2.png'
import logout from './images/logout1.png'
import pro1 from './images/pro1.png'
import { Link } from 'react-router-dom';

export default class home extends Component {
    cardstyle={width:"20%",height:"100%",backgroundColor:"#F1E574"}
    mainstyle={width:"70%",height:"80%",backgroundColor:"red",paddingLeft:"982px",paddingTop:"814px"}
    icon = { paddingLeft:"80%"}
    wish= { paddingLeft:"3%"}
    newcardstyle={
      marginLeft:"17%",
      width:"50%",
      marginTop: 25
    }
  render() {
    return (
      <div>
        <div>
        <Grid container spacing={1}>
        <Card elevation={3} style={this.cardstyle }>
            <div style={{backgroundColor:'#F1E574',height:"full"}}>
            <img src={logo} alt="Logo" style={{width:"100%",height:"100%"}} />
            <Link to={'/Home1'}><img src={imaf} alt="Logo" style={{width:"100%",height:"100%",marginTop:'15%'}} /></Link>
            <Link to={'/Search'}><img src={search1} alt="Logo" style={{width:"100%",height:"100%",marginTop:'13%',}} /></Link>
            <img src={profile} alt="Logo" style={{width:"100%",height:"100%",marginTop:'13%',}} />
            <Link to={'/'}><img src={logout} alt="Logo" style={{width:"100%",height:"100%",marginTop:'10%',}} /></Link>
            </div> 
      </Card>
      <Card  variant="outlined" elevation={3}style={this.newcardstyle}>
       <img src={pro1} alt="Logo" style={{width:"100%",height:"auto"}} />
      </Card>
      </Grid>
      </div>
    </div>    
    )
  }
}