import React, { Component } from 'react';
import { Player } from 'video-react';
import VideoPalyer from './VideoPlayer';  //先引入子组件
import '../styles/Player.less';
import { judgeIsSupportFull, fullScreen, fullExit } from "../utils/fullscreen";


export default class Enviroment extends Component {


  constructor(props) {
    super(props);
  }

  // 判断当前浏览器是否支持全屏API
  judgeIsSupportFull = () => {
    let isSupportFull = judgeIsSupportFull();
    if (isSupportFull) {
      fullScreen();
    }
    this.setState({ isSupportFull });
  };

  componentDidMount() {
    this.judgeIsSupportFull();

  }
  componentWillUnmount() {

  }
  handleStateChange = (state, prevState) => {
    if (state.ended) {
      console.log('endeded------------------')
      this.props.history.push('/');
    }
  }

  render() {

    const videoJsOptions = {

      //autoplay: true,  //自动播放
      fill: true,
      language: 'zh-CN',
      controls: false,  //控制条
      preload: 'auto',  //自动加载
      errorDisplay: true,  //错误展示
      // playsinline:true,
      //muted: 'muted',
      onStateChange: this.handleStateChange,
      // userActions: {
      //   hotkeys: true  //是否支持热键
      // },
      sources: [
        {
          src: 'static/air.mp4',
          type: "video/mp4",
        }
      ]
    };

    return (
      <div className="player_box">
        <VideoPalyer {...videoJsOptions} />
        {/* <audio id="myaudio" src="static/air.mp4" autoplay="autoplay" controls="" loop="" 
        preload="preload">
   
      </audio> */}
      </div>
    );
  }
}

