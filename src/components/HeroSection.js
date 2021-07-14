import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import ReactPlayer from "react-player";

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <ReactPlayer 
            url= "https://www.youtube.com/watch?v=XqqdzqDqxsw"
            playing= "true"
            height= "100vh"
            width ="100%"
            volume = "1"
            />
            
            
            
            <p>What are you waiting for? Brob?</p>
            <div className='hero-btns'>
                <Button className ='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                > GET STARTED</Button>
                <Button className ='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'
                > 
                WATCH TRAILER
                <i className ='far fa-play-circle' />
                </Button>
            </div>

        </div>
    )
}
// <video src='https://youtu.be/_m8R9YRukJE' autoPlay loop muted /> 
//<video src='/videos/video-2.mp4' autoPlay loop muted /> 

export default HeroSection
