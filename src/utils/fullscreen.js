export const judgeIsSupportFull = () => {
    let result = false;
    let element = document.documentElement;
    //IE 10及以下ActiveXObject
    if (window.ActiveXObject) {
      result = true;
    }
    //HTML W3C 提议
    else if (element.requestFullScreen) {
      result = true;
    }
    //IE11
    else if (element.msRequestFullscreen) {
      result = true;
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      result = true;
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      result = true;
    }
  
    return result;
  };
  //显示全屏
  export const fullScreen = () => {
    let element = document.documentElement;
    //IE 10及以下ActiveXObject
    if (window.ActiveXObject) {
      console.log("IE 10及以下ActiveXObject");
      let WsShell = new ActiveXObject("WScript.Shell");
      WsShell.SendKeys("{F11}");
    }
    //HTML W3C 提议
    else if (element.requestFullScreen) {
      console.log("HTML W3C 提议");
      element.requestFullScreen();
    }
    //IE11
    else if (element.msRequestFullscreen) {
      console.log("IE11");
      element.msRequestFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      console.log("Webkit");
      element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      console.log("Firefox");
      element.mozRequestFullScreen();
    }
  };
  //退出全屏
  export const fullExit = () => {
    var element = document.documentElement;
    //IE ActiveXObject
    if (window.ActiveXObject) {
      var WsShell = new ActiveXObject("WScript.Shell");
      WsShell.SendKeys("{F11}");
    }
    //HTML5 W3C 提议
    else if (element.requestFullScreen) {
      document.exitFullscreen();
    }
    //IE 11
    else if (element.msRequestFullscreen) {
      document.msExitFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      document.webkitCancelFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      document.mozCancelFullScreen();
    }
  };
  
  export const isFulll=()=>{
    if (
        document.body.scrollHeight === window.screen.height ||
        document.body.scrollWidth === window.screen.width
      ) {
        return true;
      } else {
        return false;
      }
  }