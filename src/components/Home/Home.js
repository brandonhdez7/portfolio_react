import React, { Component } from 'react';
import Header from '../Header/header'
import DarkModeToggle from '../LightMode/DarkModeToggle';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <div className="homePage">
                    < DarkModeToggle />
                    <i className="code">{`<h1>`}</i>
                    <h1>
                        Brandon Hernandez
                    </h1>
                    <i className="end">{`</h1>`}</i>

                    {/* <i className="code1">{`<h3>`}</i> */}
                    <h2>Full-Stack Developer</h2>
                    {/* <i className="end1">{`</h3>`}</i> */}
                </div>
            </div>
        );
    }
}

export default Home;