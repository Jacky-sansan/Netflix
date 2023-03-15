import React, { Component } from 'react';
import bkgd_img from '../resources/bkgd_img.png'
import '../css/background.css'

const Background = () => {
    return ( 
        <div className='login-wrapper-background'>
            <img className='concord-img vlv-creative background-img' src={bkgd_img} alt='background image'/>
        </div>
     );
}
 
export default Background;