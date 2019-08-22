import React, { Component } from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Header from './components/Header/header'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Projects" component={Projects}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Skills" component={Skills}></Route>
                    <Route exact path="/Contact" component={Contact}></Route>
                    <Route exact path="/Header" component={Header}></Route>
                </div>   
            </Router>
        );
    }
}

export default App;

