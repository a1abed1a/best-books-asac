import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Login from './Login.js';
import Profile from './components/Profile.js';
import {withAuth0} from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  render() {
    const {isAuthenticated} = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <BestBooks /> : <Login />}
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}
export default withAuth0(App);