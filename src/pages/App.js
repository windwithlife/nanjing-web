import React, { Component } from 'react';

import { HashRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';

import { Layout, Menu, Avatar, Select } from 'antd';
import { UserOutlined, LaptopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// import Basic from "@components/Basic"
import Home from "@components/Home"
import Enviroment from "@components/Enviroment"
import Air from "@components/Air"
import Space from "@components/Space"
import '@styles/App.less';
import '@styles/Home.css';




// export default class App extends Component {


const AppPage = () => {
//  let location = useLocation();
//   console.log("***********", location);
  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.pathname} timeout={1000} classNames="alert">
    //   <Switch location={location}>
    <Router>
      <Route key="/" exact path="/" component={Home} />
      <Route key="/enviroment" path="/enviroment" component={Enviroment} />
      <Route key="/air" path="/air" component={Air} />
      <Route key="/space" path="/space" component={Space} />
    </Router>
    //     </Switch>
    //   </CSSTransition>
    // </TransitionGroup>
  );
}
//}

export default AppPage;