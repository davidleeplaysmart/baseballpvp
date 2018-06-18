import './App.css';
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Counter from './modules/counter/container';
import About from './modules/about/container';
import { Layout, Menu } from 'antd';
import userIsAuthenticated  from './modules/auth'

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout baseball-layout">
    <Header className="baseball-header">
      <Menu className="baseball-header-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1"><NavLink to="/about">Player</NavLink></Menu.Item>
      </Menu>
    </Header>
    <Content className="baseball-content">
      <div className="baseball-content-div">
        <Route exact path="/" component={Counter} />
        <Route path="/login" component={Counter} />
        <Route path="/xd" component={About} />
        <Route path="/about" component={userIsAuthenticated(About)} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Baseball PvP ©2018 Created by David Lee
    </Footer>
  </Layout>
);

export default App;