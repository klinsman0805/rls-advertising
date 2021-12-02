import React from 'react'
import './Service.css'
import { Button } from './Button' 

function Service () {
  return (
    <div className='service-section'>
      <h1>How We Can Assist You</h1>
      <br /><br /><br />
      <div className='service-container'>
        <table class='center'>
          <tr>
            <th><i class="fab fa-searchengin"></i></th>
            <th><i class="fas fa-mobile-alt"></i></th>
            <th><i class="far fa-lightbulb"></i></th>
          </tr>
          <tr>
            <td class='second__row'>Search Engine Optimization (SEO)</td>
            <td class='second__row'>Social Media</td>
            <td class='second__row'>Brand Design</td>
          </tr>
          <tr>
            <td class='third__row'>We help you increase the online visibility of your business and reachability to the right audience. SEO is a powerful tool to grow your business if it reaches right customers.</td>
            <td class='third__row'>Advertisements are frequently seen on social media like Facebook, YouTube, TikTok and more. We can help your business to get advertised on these platforms.</td>
            <td class='third__row'>​We provide you fully business-customized brand designs such as business logo, name cards, and more. We will gather all your requirements and provide you the designs which suit you the most.</td>
          </tr>
        </table>
        <br/><br/><br/>
        <div className='service-btn'>
          <Button
            className='btns'
            buttonSize='btn--large'
            buttonStyle='btn--dark'
          >
            More Services
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Service