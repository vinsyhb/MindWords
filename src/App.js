import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import AddWord from "./client/addWord";
import SearchWord from "./client/searchWord";
import DisplayWord from "./client/displayWord"
//Book routes
import Dashboard from "./client/mindBooks/dashboard";
import AddBook from "./client/mindBooks/addBook";
import EditBook from "./client/mindBooks/editBook";
import ViewBook from "./client/mindBooks/viewBook";

import './App.css';
import "./client/mindBooks/mindBooks.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
  };

  render() {
    return (
      <Router>
        <div className="app">
          
          <Route exact={true} path="/" component={SearchWord} >
            <Route path="search2" component={AddWord} />
            <Route path="view" component={DisplayWord} />
            <Route path="search" component={SearchWord} />
            <Route path="add" component={AddWord} />
          </Route>

          <Route path="/book/" exact={true} component={Dashboard} >
            {/* <Route path="add" component={AddBook} />
            <Route path="edit" component={EditBook} />
            <Route path="view" component={ViewBook} />
            <Route path="dashboard" component={Dashboard} /> */}
          </Route>
          <Route path="/book/add" component={AddBook} />
          <Route path="/book/edit" component={EditBook} />
          <Route path="/book/dashboard" component={Dashboard} />
          <Route path="/book/view/:id" component={ViewBook} />
        </div>
    </Router>
    );
  };
}

export default App;
