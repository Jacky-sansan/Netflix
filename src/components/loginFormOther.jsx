import React, { Component } from 'react';
import '../css/loginFormOther.css';

class LoginFormOther
 extends Component {
    state = {  } 
    render() { 
        return (
            <div className='hybrid-login-form-other'>
                <div className='login-signup-now'>
                    <p>
                        New to Netflix?
                        <a target="_self" href="https://www.netflix.com/hk/">Sign up now</a>
                        .
                    </p>
                </div>
                <div className='terms-of-use'>
                    <p>
                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                        <button className='learn-more-button'>Learn more.</button>
                    </p>
                </div>
                <div className='terms-of-use-end'>
                    <p>Hidden</p>
                    <p>Hidden</p>
                    <p>Hidden</p>
                </div>
            </div>
        );
    }
}
 
export default LoginFormOther;