import React from 'react';
import videojs from 'video.js'
import videozhCN from 'video.js/dist/lang/zh-CN.json'; //播放器中文，不能使用.js文件
import 'video.js/dist/video-js.css';  //样式文件注意要加上
import '../styles/Player.less';
//import 'videojs-flash';  //如果要播放RTMP要使用flash 需要先npm i videojs-flash

export default class VideoPlayer extends React.Component {
    stateObject = {
        ended: false,
        currentTime:0.0,
    }
    constructor(props) {
        super(props);

    }
    handleStateChange = (eventName, eventValue) => {
        let value = eventValue;
        if (!value) {
            value = true;
        }
        let oldState = Object.assign({}, this.stateObject);
        this.stateObject[eventName] = value;
        this.props.onStateChange(this.stateObject, oldState);
        //console.log('OnStateChange.....', oldState, this.stateObject);

    }
    componentDidMount() {
        // instantiate Video.js
        //这里的this.props是上级传进来的video的options

        let that = this;
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
            //that.player.requestFullScreen();
            this.on('progress', function () {//客户端正在请求数据
                console.log("客户端正在请求数据......")
                that.handleStateChange('progress');
                
            });
            this.on('abort', function () {//客户端主动终止下载（不是因为错误引起）
                console.log("客户端主动终止下载")
                that.handleStateChange('abort');
            });
            this.on('error', function () {//请求数据时遇到错误
                console.log("请求数据时遇到错误")
                that.handleStateChange('error');
            });
            this.on('stalled', function () {//网速失速
                console.log("网速失速")
            });
            this.on('play', function () {//开始播放
                console.log("开始播放")
                //this.muted(false);
                //setTimeout(function(){that.player.muted(false)},2000);
                that.handleStateChange('play');
            });
            this.on('pause', function () {//暂停
                console.log("暂停")
                that.handleStateChange('pause');
            });
            this.on('loadedmetadata', function () {//成功获取资源长度
                console.log("成功获取资源长度")
            });
            this.on('loadeddata', function () {//渲染播放画面
                console.log("渲染播放画面")
            });
            this.on('waiting', function () {//等待数据，并非错误
                console.log("等待数据")
            });
            this.on('playing', function () {//开始回放
                console.log("开始回放")
                
                that.handleStateChange('playing');
            });
            this.on('canplay', function () {//可以播放，但中途可能因为加载而暂停
                console.log("可以播放，但中途可能因为加载而暂停")
            });
            this.on('canplaythrough', function () { //可以播放，歌曲全部加载完毕
                console.log("可以播放，歌曲全部加载完毕")
            });
            this.on('seeking', function () { //寻找中
                console.log("寻找中")
            });
            this.on('seeked', function () {//寻找完毕
                console.log("寻找完毕")
            });
            this.on('timeupdate', function () {//播放时间改变
                //console.log("播放时间改变" + this.currentTime())
                that.handleStateChange('currentTime', this.currentTime());
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束")
                that.handleStateChange('ended');

            });
            this.on('ratechange', function () {//播放速率改变
                console.log("播放速率改变")
                that.handleStateChange('ratechange');
            });
            this.on('durationchange', function () {//资源长度改变
                console.log("资源长度改变")
            });
            this.on('volumechange', function () {//音量改变
                console.log("音量改变")
                that.handleStateChange('volumechange');
            });
            this.on('canplay', function () {//请求数据时遇到错误
                console.log("canplay--canplay")
                //this.play();
               
                that.handleStateChange('canplay');
            });
            //this.play();

        });
        ///videojs.addLanguage('zh-CN', videozhCN);
        setTimeout(function(){that.player.play()},500);

    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (

            <video ref={node => this.videoNode = node} poster="static/bg.jpeg" className="video-js" data-setup='{}' webkit-playsinline playsinline ></video>

        )
    }
}
