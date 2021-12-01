import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typical from 'react-typical';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={`${process.env.PUBLIC_URL}/videos/online-marketing.mp4`} autoPlay loop muted />
      <h1>Propel your brands with</h1> <br/><br/><br/>
      <h1><i>RLS Advertising</i> <sup><i class="far fa-copyright"></i></sup>  </h1> 
      <p>We Can Help You To{' '}
        <Typical 
          loop={Infinity}
          wrapper="b"
          steps={[
            'Promote',
            1200,
            'Advertise',
            1200,
            'Aspire',
            1200
          ]}
        />
        Your Business
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <span>Contact Us</span>
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
