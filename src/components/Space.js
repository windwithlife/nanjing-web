import React,{Component} from 'react';
import { Player } from 'video-react';
import { judgeIsSupportFull, fullScreen, fullExit ,isFulll} from "../utils/fullscreen";

export default class Enviroment extends Component {
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
       this.player.subscribeToStateChange(this.handleStateChange.bind(this));
       this.judgeIsSupportFull();
   
  }
  handleStateChange(state, prevState) {
    //console.log(state)
    if (state.ended){
      console.log('endeded------------------')
      this.props.history.push('/');
    }
  }
  render(){
    return (
      <div>
      <Player
      ref={c => {
        this.player = c;
      }}
      autoPlay
      playsInline
      // poster="/assets/poster.png"
      src="static/space.mp4"
    />
    </div>
    );
  }
}

