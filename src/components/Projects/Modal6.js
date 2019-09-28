import React, { Component } from 'react';
import BlackBirdImg from '../../Images/blackbird.png'

class Modal1 extends Component {
    constructor (props) {
      super(props)
      
      this.state = {
        modalOpened: false
      }
      
      this.modalToggle = this.modalToggle.bind(this)
    }
    
    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened })
    }
  
    render () {
      const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
      const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
      return (
        <div className="proModal">
          <button onClick={this.modalToggle} className="zoom-effect-container">
              <div className="image-card">
                  <img src={BlackBirdImg}/>
              </div>
          </button>
          
          <div className={containerClass}>
            <div className='modal-header'>
              <div class="projectName">
                <h1>The Budget Hobo</h1>
              </div>
              <div class="projectName">
                  <h1>Back-End Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">               
                <img src={BlackBirdImg} alt=""/>
              </div>
              <div className="projectLinks">
                  <h3>Technologies used</h3>
                  <p>HTML, CSS, Javascript, jQuery, Node.js, Express, MySQL, Bootstrap, Plaid API</p>
            
                  <p>The Budget Hobo allows the user to create a profile, set up a budget, connect to your bank through my website and
                  download your bank transactions. You can view your budget performance with a budget calculator where 
                  you can keep track of all your expenses. 
                  </p>
              </div>
              </div>
            <div className='modal-footer'>
              <div className="sites">
                  <a href="https://github.com/brandonhdez7/backendProject" target="_blank"><i className="fab fa-github icon-3d"></i>  Github</a>
                  <a href="#" target="_blank"><i className="fas fa-desktop icon-3d"></i>  Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className={coverClass} onClick={this.modalToggle}></div>
        </div>
      )
    }
  }

  export default Modal1;