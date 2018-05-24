import React, { Component } from 'react';
import ContentLayout from './layouts/ContentLayout';
import WrappedNormalLoginForm from './components/Login';
import LoginOrSignup from './components/LoginOrSignup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginOrSignup />
      </div>
    );
  }
}

export default App;

