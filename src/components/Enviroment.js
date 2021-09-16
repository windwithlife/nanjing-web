import React,{Component} from 'react';
import { Player } from 'video-react';

import { judgeIsSupportFull, fullScreen, fullExit } from "../utils/fullscreen";
export default class Enviroment extends Component {

  state = {
    isSupportFull: false,
    isFull: false
  };
  constructor(props) {
    super(props);
  }

  // 计算当前是否处于全屏
  changeFullStatus = () => {
    // 判断网页的高度或者宽度是否等于屏幕对应大小
    // true: 当前处于全屏状态
    // false: 当前不处于全屏状态
    if (
      document.body.scrollHeight === window.screen.height ||
      document.body.scrollWidth === window.screen.width
    ) {
      this.setState({ isFull: true });
    } else {
      this.setState({ isFull: false });
    }
  };
  // 判断当前浏览器是否支持全屏API
  judgeIsSupportFull = () => {
    let isSupportFull = judgeIsSupportFull();
    if(isSupportFull){
      fullScreen();
    }
    this.setState({ isSupportFull });
  };

  componentDidMount() {
       this.player.subscribeToStateChange(this.handleStateChange.bind(this));
       window.addEventListener("resize", this.changeFullStatus);
       this.judgeIsSupportFull();
   
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.changeFullStatus);
  }
  handleStateChange(state, prevState) {
    console.log(state)
    if (state.ended){
      console.log('endeded------------------')
      this.props.history.push('/');
    }
  }

  handClick = () => {
    console.log("click on player..... and exit fullscreen")
    this.state.isFull ? fullExit() : fullScreen();
  };
  render(){
    return (
      <div >
      <Player
      onClick={this.handClick}   
      ref={c => {
        this.player = c;
      }}
      autoPlay
      playsInline
      // poster="/assets/poster.png"
      src="static/enviroment.mp4"
    />
    </div>
    );
  }
}

