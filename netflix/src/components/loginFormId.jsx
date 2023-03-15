import React, { Component } from 'react';

class LoginFormId extends Component {
    state = { 
        LoginIdOnFocus : false, 
        hasError   : false,
        LoginIdErrorMessage : "dgdfg",
        hasSelector : false,
        hastext : false,
        LoginIdValue : "",
    } 


    // handleFocus = (event) => {
    //     this.setState({LoginIdOnFocus : !this.state.LoginIdOnFocus});
    // }

    checkInputError(value) {

    }

    handleChange = (event) => {
        this.setState({LoginIdValue : event.target.value});

        if (event.target.value.length > 0) {
            this.setState({hastext : true});
        } 
        else {
            this.setState({hastext : false});
        }

        if (event.target.value.length === 0) {
            this.setState({ hasError : true,
                            LoginIdErrorMessage : "Please input valid email or phone number.",
            })
        }
        else if (event.target.value.length > 0 && !isNaN(Number(event.target.value))) {
            this.setState({ hasError : true,
                            LoginIdErrorMessage : "Please input valid phone number."
            })
        }
        else if (event.target.value.length > 0 && event.target.value.length < 5) {
            this.setState({ hasError : true,
                            LoginIdErrorMessage : "Please input valid email."
            })
        }
        else {  
            this.setState({ hasError : false,
                            LoginIdErrorMessage : "",
            })
        }

        if ((event.target.value.length > 0 && !isNaN(Number(event.target.value))) && this.state.hasSelector === false) {
            this.setState({hasSelector : true});
        }
        else if ((event.target.value == "" || isNaN(Number(event.target.value))) && this.state.hasSelector === true) {
            this.setState({hasSelector : false});
        }
        
    }

    getInputState() {
        let classes = "nfTextField";
        classes += this.state.hasError === true ? " error" : "";
        return classes;
    }

    getInputError() {
        return this.state.hasError === true ? "nfEmailPhoneInError" : "";
    }

    getInputErrorMessage() {
        if (this.state.hasError === true) {
            return (
            <div className="inputError">{this.state.LoginIdErrorMessage}</div>);
        }
        return;
    }

    getSelector() {
        return this.state.hasSelector === true ? " nfEmailPhoneHasSelector" : "";
    }

    render() { 
        return (
            <div className={'nfInput nfEmailPhoneInput login-input login-input-email' + this.getInputError()}>
                <div className='nfInputPlacement'>
                    <div className={"nfEmailPhoneControls" + this.getSelector()}>
                        <label className='input_id' placeholder=''>
                            <input type='text' name='userLoginId' className={this.getInputState()} id='id_userLoginId' 
                                tabIndex='0' autoComplete='email' spellCheck='false' 
                                // onFocus={this.handleFocus} 
                                onChange={this.handleChange}/>
                            <label htmlFor='id_userLoginId' className='placeLabel'>Email or phone number</label>
                        </label>
                        <div className='phone-country-selector'>
                            <p>Todo </p>
                        </div>
                    </div>
                    {this.getInputErrorMessage()}
                </div>
            </div>
        );
    }
}
 
export default LoginFormId;