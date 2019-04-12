import React, { Component, Fragment } from 'react';
import autoBind from 'react-autobind';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { notification, Icon } from 'antd';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Register from './Register';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      confNum: 17,
      date: 'May 4, 2019',
      address: 'New York University',
      city: 'NYC'
    };
    notification.config({
      bottom: 80,
      duration: 10
    });
  }

  componentDidMount() {
    notification.open({
      message: <h3>Conference Details</h3>,
      description: (
        <span>
          <div>
            <b>Date: </b>
            {this.state.date}
          </div>
          <p>
            <b>Address: </b>
            {this.state.address}
          </p>
        </span>
      ),
      icon: <Icon type="calendar" />,
      style: {
        width: 300,
        marginLeft: 335 - 240,
        background: 'green'
      },
      placement: 'bottomRight'
    });
  }

  render() {
    const { confNum } = this.state;

    return (
      <Fragment style={{ minHeight: '100%', position: 'relative' }}>
        <PageHeader confNum={confNum} />
        <BrowserRouter>
          <Switch>
            <Route exact name="home" path="/" component={Home} />
            <Route exact name="signup" path="/signup" component={Signup} />
            <Route exact name="signin" path="/signin" component={Signin} />
            <Route exact name="register" path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
        <PageFooter />
      </Fragment>
    );
  }
}

export default App;
