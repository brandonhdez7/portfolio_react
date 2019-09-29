import React, { Component } from 'react';
import TalasHarbor from '../../Images/talasharbor.png'

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
                  <img src={TalasHarbor}/>
              </div>
          </button>
          
          <div className={containerClass}>
            <div className='modal-header'>
              <div class="projectName">
                <h1>Talas Harbor</h1>
              </div>
              <div class="projectName">
                  <h1>Wordpress Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">               
                <img src={TalasHarbor} alt=""/>
              </div>
              <div className="projectLinks">
                  <h3>Technologies used</h3>
                  <p>Wordpress, Web Hosting, Slick-slider</p>
            
                  <p>Talas Harbor is devoted to helping generetic patients heal mentally and emotionally
                    by proving expectionallyby proving psychatric care to expedite the recoveryof elderly patients
                    in distress.
                  </p>
              </div>
              </div>
            <div className='modal-footer'>
              <div className="sites">
                  <a href="#" target="_blank"><i className="fab fa-github icon-3d"></i>  Github</a>
                  <a href="http://talasharborbullheadcity.com/" target="_blank"><i className="fas fa-desktop icon-3d"></i>  Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className={coverClass} onClick={this.modalToggle}></div>
        </div>
      )
    }
  }

  export default Modal1;