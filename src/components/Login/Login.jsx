
import React, { Component } from 'react';
import Img1 from '../Assets/Images/user.png';
import Img2 from '../Assets/Images/pass.png';


import './Login.scss';

class Login extends Component {
    render() {
     return (
        <div className="main">
            <div className="submain">
            <div>
                <div className="imgs">
                   <div className="container-image">
                      
                   
                   </div>
                </div>
                <div className="form">
                
                  
                 
                    <h1>Login Form</h1>
                    <p id="h">Enter Your Credentials</p>
                       
                    <div>
                        <label className="userlabel">UserName/Email</label><br/>
                        <img src ={Img1} alt="" className="user"/>
                        <input type="text" placeholder="" className="userinput"/>
                    </div>
                    <div>
                    <label className="userpswd">Password</label><br/>
                        <img src ={Img2} alt="" className="pass"/>
                        <input type="password" placeholder="" className="userinput"/>
                        <p id="pswd"><a href="signup.html">Forgot your password?</a></p>
                    </div>
                    
				<button>Login</button><br/>
		<p id="sub">Dont have an account <a href="signup.html">Signup</a> Here</p>
                </div>
            </div>
                
            </div>
        </div>
    );
            
       
    }
}

export default Login;
