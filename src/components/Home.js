import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import '@styles/Home.less';

import { judgeIsSupportFull, fullScreen, fullExit, isFulll } from "../utils/fullscreen";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


  judgeIsSupportFull = () => {
    let isSupportFull = judgeIsSupportFull();
    let isFullScreen = isFulll();
    if (isSupportFull) {
      console.log('start to full....')
      fullScreen();
    }
  };

  componentDidMount() {
    this.judgeIsSupportFull();
  }

  onClick = () => {
    this.judgeIsSupportFull();
  }
  closeFull = () => {
    fullExit();
  }
  render() {
    return (

      <div className="home_box">

        <div className="class_close" onClick={this.closeFull}>.</div>
        <div className="home_col" ><img className="image_class" src="static/bg0.jpg" onClick={this.onClick} /></div>
        <div className="home_col" ><Link to='/enviroment' > <img className="image_class" src="static/bg1.jpg" /></Link></div>
        <div className="home_col" ><Link to='/air' > <img className="image_class" src="static/bg2.jpg" /> </Link></div>
        <div className="home_col" ><Link to='/space' ><img className="image_class" src="static/bg3.jpg" /></Link></div>
        <img className="home_col,image_class" src="static/bg4.jpg" />

      </div>


    );
  }
}

