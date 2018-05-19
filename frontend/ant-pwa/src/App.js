import React, { Component } from 'react';
import ContentLayout from './layouts/ContentLayout';
import WrappedNormalLoginForm from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

export default App;

