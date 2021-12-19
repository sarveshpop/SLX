import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import SignUpLoading from "../Loading/SignUpLoading";
import signupArt from "../../assets/images/SpacePond.png"

export default function Signup() {
  const history = useHistory();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name }).then(() => {
          Firebase.firestore().collection("users").doc(result.user.uid).set({
            id: result.user.uid,
            name: name,
            phone: phone,
          });
        });
      })
      .then(() => {
        history.push("/");
      });
  };
  return (<>
    {loading && <SignUpLoading/> } <div>
      <div className="signupParentDiv glass">
        <form action="?" method="POST" onSubmit={handleSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-6 order-first SignUpAd ">
        <br/> 
        <br/>
        <h3>Advertise to the world from the comfort of your home.</h3>
        <h4>Join SLX Today</h4>
        <br/>
        <br/>
          <img alt="Sign-up Art" className="SignUpArt fluid" src={signupArt} />
        </div>
        <div className="col-md-1">
          <div className="divider"></div>
        </div>
        <div className="g-recaptcha col-md-6  signupForm order-last" data-sitekey="6Lfulq8dAAAAAMIFYwM9a2Y12U5q0uIYguoFzXjS">
          <br/> 
          <br/>
          <h3 className="text-center">Sign-up</h3>
          <br/>
          <div className="form-floating">
          <input
            className="form-control"
            id="floatingName"
            placeholder="John Doe"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"/>
          <label for="floatingName">Full Name</label>
          </div>
          <br/>
          <div className="form-floating">
          <input
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email" />
          <label for="floatingEmail">Email Address</label>
          </div>
          <br/>
          <div className="form-floating">
          <input
            className="form-control"
            id="floatingPhone"
            placeholder="696969696"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"/>
          <label for="floatingPhone">Phone Number</label>
          </div>
          <br/>
          <div className="form-floating">
          <input
            className="form-control"
            id="floatingPassword"
            placeholder="V3ryH4rdPa55w0rD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"/>
          <label for="floatingPassword">Password</label>
          </div>
          <br/>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheck"/>
            <label className="form-check-label" for="flexCheck">
              I agree to the SLX <a className="d-inline" href="https://www.termsandconditionsgenerator.com/live.php?token=csjj8V5vX9bNfK8ydFXGFOD5Nc1Q8z9Z"> Terms and Conditions</a>.
            </label>
          </div>
          <br/>
          <div className="d-flex justify-content-center">
          <button className="btn loginxxBtn">Sign-up </button>
          </div>
          </div>
          </div>
          <div className="text-center pt-3">
          <br/>
          <br/>
            <span className="d-inline"> Already a member? <a className="d-inline" href="/"> Login</a></span>
          </div>
          </div>
        </form>
        
      </div>
    </div> 
    </>
  );
}
