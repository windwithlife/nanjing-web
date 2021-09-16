import React,{Component} from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Menu, Avatar, Select } from 'antd';
import { UserOutlined, LaptopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'

// import Basic from "@components/Basic"
import Home from "@components/Home"
// import Task from "@components/Task"
import Enviroment from "@components/Enviroment"
import Air from "@components/Air"
import Space from "@components/Space"
import '@styles/App.less';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Option = Select.Option;

export default class App extends Component {
  constructor(props) {
    super(props);
    // let themeName = 'light';
    // this.state = {
    //     themeName,
    //     currentLink:location.hash.replace("#/", "")?.split("/")[0] || 'home',
    // };
  }

  componentDidMount(){
    
  }

 
  
  render(){
   
    return (
      <Router >    
        <Route exact path="/" component={Home} />
        <Route path="/enviroment" component={Enviroment} />   
        <Route path="/air" component={Air} />   
        <Route path="/space" component={Space} />   
       
      </Router>
    );
  }
}

