import React, { useState } from "react";
import { Firebase } from "../../firebase/config";
import logoW from '../../assets/LogoW.png';
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      window.location.reload("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };


  return (<>
    <div>
      
      <div className="loginParentDiv glass">
      <div className="center">
      <img src={logoW} alt="logo" className="showLogo" />
      <h2>Login</h2>
      </div>
      
        <form onSubmit={handleSubmit}>
          <br/>
          <div className="form-floating mb-6">
            <input
              className="form-control"
              type="email"
              placeholder="johndoe@email.com"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="floatingEmail">Email Address</label>
          </div>
          <br/>
          <br/>
          <div className="form-floating mb-6">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
          </div>
          <br/>
          <br/>
          <button className="btn loginxCreateBtn">Login </button>
        </form>
        <br/>
        <br/>
      </div> 
    </div>
    </>
  );
}

export default Login;
