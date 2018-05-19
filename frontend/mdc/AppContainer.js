import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Login from './Login';

export default class AppContainer extends React.Component {
    render() {
        return (
            <Router>
                 <div>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/login">About</Link>
                        </li>
                    </ul>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                </div>
            </Router>
        )    
    }
}