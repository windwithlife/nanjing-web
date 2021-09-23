import React,{Component} from 'react';
import { Player } from 'video-react';
import { judgeIsSupportFull, fullScreen, fullExit ,isFulll} from "../utils/fullscreen";
import VideoPalyer from './VideoPlayer';  //先引入子组件
import '../styles/Player.less';

export default class Space extends Component {
  constructor(props) {
    super(props);
  }

  judgeIsSupportFull = () => {
    let isSupportFull = judgeIsSupportFull();
    let isFullScreen = isFulll();
    if((isSupportFull) && (!isFullScreen)){
      fullScreen();
    }
  };
  componentDidMount() {
       //this.player.subscribeToStateChange(this.handleStateChange.bind(this));
       this.judgeIsSupportFull();
   
  }
  handleStateChange=(state, prevState)=> {
    //console.log(state)
    if (state.ended){
      console.log('endeded------------------')
      this.props.history.push('/');
    }
  }
  render(){
  
    const videoJsOptions = {

      //autoplay: true,  //自动播放
      fill: true,
      language: 'zh-CN',
      controls: false,  //控制条
      preload: 'auto',  //自动加载
      errorDisplay: true,  //错误展示
     
      //muted: 'muted',
      onStateChange: this.handleStateChange,
      // userActions: {
      //   hotkeys: true  //是否支持热键
      // },
      sources: [
        {
          src: 'static/space.mp4',
          type: "video/mp4",
        }
      ]
    };

    return (
      <div className="player_box">
        <VideoPalyer {...videoJsOptions} />
        {/* <audio id="myaudio-space" src="static/space.mp4" autoplay="autoplay" controls="" loop="" 
        preload="preload">
   
      </audio> */}
      </div>
    );
  }
}

