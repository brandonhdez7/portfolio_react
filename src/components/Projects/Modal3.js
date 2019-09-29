import React, { Component } from 'react';
import TravelImg from '../../Images/travel3.png'

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
                    <img src={TravelImg}/>
                </div>
          </button>
          
          <div className={containerClass}>
            <div className='modal-header'>
              <div class="projectName">
                <h1>The Professional Hobo</h1>
              </div>
              <div class="projectName">
                <h1>Front-End Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">
                <img src={TravelImg} alt=""/>
              </div>
              <div className="projectLinks">
                <h3>Technologies used</h3>
                <p>HTML, CSS, Javascript, jQuery, Rest API, AWS</p>

                <p>The Proffesional Hobo intergrates with real time api data where the user can select an origin and a destination, 
                along with a departing and returning date.
                The website will fetch some real flights that fit your needs.
                </p>
              </div>
            </div>
            <div className='modal-footer'>
              <div class="sites">
                  <a href="https://github.com/brandonhdez7/project_front-end" target="_blank"><i className="fab fa-github icon-3d"></i>  Github</a>
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