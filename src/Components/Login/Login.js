import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { Firebase } from "../../firebase/config";
import RoundLoading from "../Loading/RoundLoading";
import logoW from '../../assets/LogoW.png';
import handleCloseLogin from '../Header/Header'
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };


  return (<>
    {loading && <RoundLoading/> }
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
          <label for="floatingEmail">Email Address</label>
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
          <label for="floatingPassword">Password</label>
          </div>
          <br/>
          <br/>
          <button className="btn loginxCreateBtn">Login </button>
        </form>
        <br/>
        <div className="text-center">
        <span>Not Registered? <a href="/#" onClick={handleCloseLogin}> Sign Up!</a> </span>
        </div>
      </div> 
    </div>
    </>
  );
}

export default Login;
