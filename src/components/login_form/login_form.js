import React from "react";
import "./login_form.css";
// import Poligons from "../src/components/login_form/Poligons.jpg";
import { InputBase, TextField } from "@mui/material";
import { makeStyles } from "@mui/material";
import { Button } from "@mui/material";
import { color } from "framer-motion";
import pic from "../login_form/Poligons.jpg";


function LoginForm() {
  return (
    
    <div className="login-body">
      <div className="login-fieldset">
        <div className="login-contain">
          <h1 className="login-header">Login</h1>
          <h5 className="login-desc">
            See your growth and get consultoing support!
          </h5>
          <label className="login-label">Email:</label><br/>
          <input className="outlined-basic"  placeholder="@gmail.com" type="email"   /><br/>
          <label className="login-label">Passwords:</label><br/>
          <input className="outlined-basic"  type="password" placeholder="Enter your password"  /><br/>
          
          <button variant="outlined" className="login-button"  ><span>Sign in</span></button><br/>
        </div>
          <img className="login-pic" src={pic}/>
      </div>
    </div>
  );
}

export default LoginForm