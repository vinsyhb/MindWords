import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddWord from "./client/addWord";
import SearchWord from "./client/searchWord";
import DisplayWord from "./client/displayWord"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
  };

  render() {
    return (
      <Router>
        <div className="">
          <Route exact path="/" component={SearchWord} />
          <Route exact path="/view" component={DisplayWord} />
          <Route exact path="/search" component={SearchWord} />
          <Route path="/add" component={AddWord} />
        </div>
    </Router>
    );
    // return( <div>{"aaa"}</div>);
  };
}

export default App;
