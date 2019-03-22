import React, { Component, Fragment } from 'react';
import autoBind from 'react-autobind';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHeader from './PageHeader';
import Home from './Home';
import Signup from './Signup';
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
  }

  render() {
    const { confNum, date, address, city } = this.state;

    return (
      <Fragment>
        <PageHeader confNum={confNum} date={date} address={address} city={city} />
        <BrowserRouter>
          <Switch>
            <Route exact name="home" path="/" component={Home} />
            <Route exact name="signup" path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
