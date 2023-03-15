import React, { Component } from 'react';

class LoginHelp extends Component {
    state = {  } 
    render() { 
        return (
            <div className='hybrid-login-form-help'>
                <div className='login-remember'>
                    <input type='checkbox' className='rememberMe' id='bxid_remember'
                            value='true' />
                </div>
                <label htmlFor='bxid_remember'></label>
                <a className='login-help-link link' target='_self' href='https://www.netflix.com/hk/LoginHelp'>Need help?</a>
            </div>
        );
    }
}
 
export default LoginHelp;