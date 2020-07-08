import React, { Component, Fragment } from 'react'
import $ from "jquery";
import './App.css'
import Card from './card';


export class App extends Component {
  componentDidMount = () => {
    $(".hamburger").click(function(){
      $(".wrapper").toggleClass("collapse");
   });
  }
  render() {
    return (
      
<div className="wrapper">
  
  <div className="top_navbar">
     <div className="hamburger">
      <div className="one"></div>
       <div className="two"></div>
       <div className="three"></div>
    </div>
    <div className="top_menu">
      <div className="logo">
         logo
      </div>
      <ul>
        <li><a href="#">
          <i className="fas fa-search"></i>
          </a></li>
        <li><a href="#">
          <i className="fas fa-bell"></i>
          </a></li>
        <li><a href="#">
          <i className="fas fa-user"></i>
          </a></li>
      </ul>
    </div>
  </div>
  
    <div className="sidebar">
      <ul>
        <li><a href="#" className="active">
          <span className="icon"><i className="fa fa-home"></i></span>
          <span className="title">Home</span>
          </a></li>
        <li><a href="#">
          <span className="icon"><i class="fas fa-layer-group"></i></span>
          <span className="title">Group</span>
          </a></li>
        <li><a href="#">
          <span className="icon"><i className="fas fa-file-video"></i></span>
          <span className="title">Movies</span>
          </a></li>
        <li><a href="#">
          <span className="icon"><i className="fas fa-volleyball-ball"></i></span>
          <span className="title">Sports</span>
          </a></li>
        <li><a href="#" >
          <span className="icon"><i className="fas fa-blog"></i></span>
          <span className="title">Blogs</span>
          </a></li>
        <li><a href="#">
          <span className="icon"><i className="fas fa-leaf"></i></span>
          <span className="title">Nature</span>
          </a></li>
    </ul>
  </div>
  
  <div className="main_container">
    {/* <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div>
    <div className="item">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
    </div> */}
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

  </div>
</div>
    )
  }
}

export default App
