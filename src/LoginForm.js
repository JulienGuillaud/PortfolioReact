import React, { useState } from 'react';


const LoginForm = ({ isShowLogin, setIsShowLogin }) => {
   const closeLoginPage = () => {
      setIsShowLogin(false);
   };
   return (
      <div className={`${isShowLogin ? "active" : ""} show login-form`} >
         <form>
            <p className="login-text">Login</p>
            <input type="text" name="username" className="login-box" placeholder='Email' />
            <input type="password" name="password" className="login-box" placeholder='Password' />
            <input type="submit" value="LOGIN" className="login-btn" />
         </form>
         <div class="drops">
            <div class="drop drop-1"></div>
            <div class="drop drop-2"></div>
            <div class="drop drop-3"></div>
            <div class="drop drop-4"></div>
            <div class="drop drop-5"></div>
         </div>
         <div className="close-btn" onClick={closeLoginPage}>
            <div className="close">
               <img src="icons8-close-48.png" alt="close" className="close-icon"></img>
            </div>
         </div>
      </div>
   );
};


export default LoginForm;
