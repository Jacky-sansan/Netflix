import React, { Component } from 'react';
import LoginFormMain from './loginFormMain';
import LoginFormOther from './loginFormOther';

import '../css/loginForm.css'

class LoginForm extends Component {
    state = {  } 

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
    }

    render() { 
        return (
            <div className='login-body'>
                <div>
                    <noscript>
                        <div data-uia="error-message-container" className="ui-message-container ui-message-error" role="alert">
                            <div className="ui-message-icon">

                            </div>
                            <div data-uia="text" className="ui-message-contents">
                                Looks like you have disabled JavaScript. Please enable JavaScript to restore full page functionality.
                            </div>
                        </div>
                    </noscript>
                    <div className='login-content login-form hybrid-login-form hybrid-login-form-signup'>
                        <LoginFormMain />
                        <LoginFormOther />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;