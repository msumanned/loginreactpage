import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

function Login() {
  return <div className='maindiv'>
    <div className="container2">
      <div className='start'>
        <p>Login to continue</p>
        <input className='input' type="text" placeholder="Email" />
        <input className='input' type="password" placeholder="Password" />
      </div>
      <div className='checkbox'>
        <span><input type="checkbox" name="checkbox"/><label>Remember me</label> </span>
        <label>forget password?</label>
      </div>
      <div className = "login">
        <input type="button" value="Login"/>
      </div>
      <div className='end'> 
        <p>or sign up using</p>
      </div>
      <div className='logo'>
        <img className='fb_img' src='https://www.seekpng.com/png/detail/265-2657650_facebook-icon-png-facebook.png' alt=''/>
        <img className='tw_img' src='https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk' alt=''/>  
      </div>
    </div>
  </div>;
}

ReactDOM.render(<Login />, document.querySelector('#root'));