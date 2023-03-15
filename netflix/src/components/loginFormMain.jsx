    import React, { Component } from 'react';
    import '../css/loginFormMain.css'
    import LoginFormId from './loginFormId';


    class LoginFormMain extends Component {

        render() { 
            return (
                <div className='hybrid-login-form-main'>
                    <h1>Sign In</h1>
                    <form method='post' className='login-form' >
                        <LoginFormId />
                        <div className='nfInput nfPasswordInput login-input login-input-password'>
                            <div className='nfInputPlacement'>
                                <div className='nfPasswordControls'>
                                    <label className='input_id' placeholder=''>
                                        <input type='password' name='password' className='nfTextField' id='id_password'
                                                tabIndex='0' autoComplete='password' spellCheck='false' />
                                        <label htmlFor='id_password' className='placeLabel'>Password</label>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className='btn login-button' type='submit' tabIndex='0'>Sign In</button>
                        {/* sdf  */}
                        <div className='hybrid-login-form-help'>
                            <div className='login-remember-me'>
                                <input type='checkbox' className='rememberMe' id='bxid_remember'
                                        value='true' />
                                <label htmlFor='bxid_remember'><span>Remember me</span></label>
                            </div>
                            <a className='login-help-link link' target='_self' href='https://www.netflix.com/hk/LoginHelp'>Need help?</a>
                        </div>
                    </form>
                </div>
            );
        }
    }
    
    export default LoginFormMain;