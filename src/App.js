import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <font style={{ color: 'blue' }}>
            The 17<sup>th</sup> New York International Conference on Chinese Teaching
          </font>
        </h1>
        <h1>Online Registration System</h1>
        <h1>第17届纽约中文教学国际研讨会</h1>
        <h1>在线注册系统</h1>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
