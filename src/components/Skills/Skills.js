import React, { Component } from 'react';
import Header from '../Header/header'
import DarkModeToggle from '../LightMode/DarkModeToggle';


class Skills extends Component {
    
    render() {
        return (
            <div className="page">
                <Header />
                <div className="skillsPage">
                    <DarkModeToggle />
                    <div className="title">
                        <i className="code2">{`<h1>`}</i>
                            <h1>Skills</h1>
                        <i className="end2">{`</h1>`}</i>
                        <hr/>
                        <p> I enjoy solving problems and turning them into simple solutions. I am passionate about detail design. 
                            I love making clean user friendly experiences. My current toolset includes VSCode, React, Node.js, Express, 
                            Python and other various frameworks related to them.</p>
                    </div>
                        
                    <div className="threeD">
                        <div id="myCanvasContainer">
                            <canvas width="450" height="450"  id="myCanvas">
                            <p>Anything in here will be replaced on browsers that support the canvas element</p>
                            </canvas>
                        </div>
                        {/* <div id="tags">
                            <ul>
                            <li><a href="http://www.google.com"></a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Bootstrap</a></li>
                            <li><a href="#">Node.js</a></li>
                            <li><a href="#">jQuery</a></li>
                            <li><a href="#">Wordpress</a></li>
                            <li><a href="#">SASS</a></li>
                            <li><a href="#">Adobe XD</a></li>
                            <li><a href="#">PostgreSQL</a></li>
                            <li><a href="#">Mysql</a></li>
                            <li><a href="#">AWS</a></li>
                            <li><a href="#">Firebase</a></li>
                            <li><a href="#">Unit Testing</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;