import React, { Component } from 'react';
import CoffeeImg from '../../Images/coffee2.png'

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
                <img src={CoffeeImg}/>
            </div>
        </button>
          
          <div className={containerClass}>
            <div className='modal-header'>
              <div className="projectName">
                  <h1>ATL X COFFEE</h1>
              </div>
              <div className="projectName">
                  <h1>Font-End Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">
                <img src={CoffeeImg} />
              </div>
              <div className="projectLinks">
                <h3>Technologies used</h3>
                <p>HTML, CSS, Javascript, jQuery</p>
            
                <p>Atlanta X Coffee, one of my very first projects, is the to-go for all coffee lovers.
                    this application will share everything you need to know about any trendy coffee shop in the Atlanta area
                    and is the easiest way to pick your new favorite coffee spot.
                </p>
              </div>
            </div>
            <div className='modal-footer'>
              <div className="sites">
                <a href="https://github.com/brandonhdez7/Coffee-Shops-in-Atlanta" target="_blank"><i className="fab fa-github icon-3d"></i>  Github</a>
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