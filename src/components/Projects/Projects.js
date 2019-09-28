import React, { Component } from 'react';
import Header from '../Header/header'
import DarkModeToggle from '../LightMode/DarkModeToggle';
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import styled from 'styled-components';
import Slider from 'react-slick';
import budgetImg from '../../Images/thebudgethobo.png'

const Wrapper = styled.div`
    width: 90%;
    animation: slide3 1s ease-out;
`




class Projects extends Component {

    render () {
        let settings = {
            centerMode: true,
            centerPadding: '50px',
            arrows: false,
            speed: 500,
            initialSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            focusOnSelect: true,
            autoplaySpeed: 5000,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: { 
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: false,
                    speed: 500,
                    initialSlide: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    autoplay: true,
                    focusOnSelect: true,
                    autoplaySpeed: 5000,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                 }
              },
              {
                breakpoint: 768,
                settings: { 
                    centerMode: true,
                    centerPadding: '50px',
                    arrows: false,
                    speed: 500,
                    initialSlide: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    autoplay: true,
                    focusOnSelect: true,
                    autoplaySpeed: 5000,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                 }
              },
              {
                breakpoint: 480,
                settings: { 
                    centerMode: true,
                    centerPadding: '50px',
                    arrows: false,
                    speed: 500,
                    initialSlide: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    autoplay: true,
                    focusOnSelect: true,
                    autoplaySpeed: 5000,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                 }
              },
            ]
          }; 
      return(
          <div className="page">
            <Header />
            <div className="projectsPage">
            <DarkModeToggle />
                <div className="projectTitle">
                    <i className="code4">{`<h1>`}</i>
                        <h1>Projects</h1>
                    <i className="end4">{`</h1>`}</i>
                    <hr/>
                </div>
                <div className="projects">
                    <Wrapper>
                        <Slider {...settings}>
                                <h1>FULL-STACK</h1>
                            
                                <h1>FULL-STACK</h1>
                            
                                <h1>FRONT-END</h1>
                            
                                <h1>BACK-END</h1>
                            
                                <h1>WORDPRESS</h1>
                        
                        </Slider>
                    </Wrapper>
                </div>
            </div>
          </div>
        ) 
    }
  }

  export default Projects