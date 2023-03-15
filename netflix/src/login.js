import './login.css';
import './error.css';

import Background from './components/background';
import Header from "./components/header";
import LoginForm from "./components/loginForm";
import Footer from './components/footer';


function Login() {
    return (
        <div id='appMountPoint'>
            <div className="login-wrapper hybrid-login-wrapper">
                <Background />
                <Header />
                <LoginForm />
                <Footer />
            </div>
        </div>
    );
  }
  
  export default Login;