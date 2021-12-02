import React from 'react'
import './AboutUs.css'
import { Button } from './Button'

function AboutUs() {
    return (
        <div className='about__us'>
            <h1>About Us</h1>
            <h2>Making Your Brand Shine.</h2>
            <p>RLS Advertising has assisted businesses in strategizing and implementing their creative objectives based on customers' needs. Our expanding Online Marketing Team is run by enthusiastic thinkers that collaborate directly with each brand to develop strategies that achieve unrivalled results.</p>
            <br />
            <div className='about__btn'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    <span>Find Out More</span>
                </Button>
            </div>
        </div>
    )
}

export default AboutUs