import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { pink } from '@mui/material/colors';
import {Grid,Card} from '@mui/material';
import logo from './images/logo.png';
import imaf from './images/imaf.png'
import search1 from './images/search1.png'
import profile from './images/profile.png'
import logout from './images/logout1.png'
import home1img from './images/home1img.png'
import previous from './images/previous.png'
import nextmeme from './images/nextmeme.png'
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default class home extends Component {
    cardstyle={width:"20%",height:"100%",backgroundColor:"#F1E574"}
    mainstyle={width:"70%",height:"80%",backgroundColor:"red",paddingLeft:"982px",paddingTop:"814px"}
    icon = { paddingLeft:"80%" ,}
    wish= { paddingLeft:"3%"}
    newcardstyle={
      marginLeft:"17%",
      width:"50%",
      marginBottom: 100
    }
  render() {
    return (
      <div>
        <div>
        <Grid container spacing={1}>
        <Card elevation={3} style={this.cardstyle }>
            <div style={{backgroundColor:'#F1E574',height:"full"}}>
            <img src={logo} alt="Logo" style={{width:"100%",height:"100%"}} />
            <img src={imaf} alt="Logo" style={{width:"100%",height:"100%",marginTop:'15%'}} />
            <Link to={'/Search'}><img src={search1} alt="Logo" style={{width:"100%",height:"100%",marginTop:'13%',}} /></Link>
            <Link to={'/Profile'}><img src={profile} alt="Logo" style={{width:"100%",height:"100%",marginTop:'13%',}} /></Link>
            <Link style={{textDecoration:"none"}} to={'/'}><img src={logout} alt="Logo" style={{width:"100%",height:"100%",marginTop:'15%',}} /></Link>
            </div>         
      </Card>
      <Card variant="outlined" elevation={3}style={this.newcardstyle}>
        <img src={home1img} alt="Logo" style={{width:"100%",height:"auto"}} />
<div style={{height:"20%",marginBottom:-40}}>
<Checkbox style={this.wish }{...label} icon={<FavoriteBorder />}  checkedIcon={<Favorite /> } size="large"sx={{
  color: pink[800],
  '&.Mui-checked': {
    color: pink[600],
  },
}} />
  <Checkbox style={this.icon }
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        size="large"
        />
        </div>
      </Card>
      <div style={{paddingLeft:510,paddingTop: -150,marginTop:-30}}><Link style={{textDecoration:"none"}} to={'/Home1'}><img src={previous} alt="previosmeme" style={{height:"50px",paddingLeft:"5%",marginTop:"-25%",marginBottom:"5%"}} /></Link></div>
      <div style={{paddingLeft:850,paddingTop: -200,marginTop:-40}}><Link to={'/Home3'}><img src={nextmeme} alt="nextmeme" style={{height:"50px",paddingLeft:"70%",marginTop:"-40%"}} /></Link></div>  
        </Grid>
      </div>
        </div>  
    )
  }
}