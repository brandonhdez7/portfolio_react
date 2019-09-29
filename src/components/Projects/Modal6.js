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
                <h1>Black Bird</h1>
              </div>
              <div class="projectName">
                  <h1>Full-Stack Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">               
                <img src={BlackBirdImg} alt=""/>
              </div>
              <div className="projectLinks">
                  <h3>Technologies used</h3>
                  <p>Stripe, HTML, CSS, Javascript, Node.js, Express, MySQL, Sequelize, Redux, React, WebPack, XD Adobe</p>
            
                  <p>There is a wide acceptance that manual brewing methods allow for 
                    better quality control and a superior coffee experience. For many, 
                    it’s more fun and fascinating to have a hands-on approach with their 
                    brewing process rather than hitting a ‘brew’ button on a machine. With this 
                    web application/ecommerce page we help you brew the great coffee.
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