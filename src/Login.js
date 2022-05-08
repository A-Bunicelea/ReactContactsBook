import React, {useState, useContext, useEffect} from "react";
import {ContactsContext} from "./App";
import {Form, Button, Alert} from "react-bootstrap";
import Navbar from "./Navbar"
import "./styles_form.css";


function Login() {
    const {onLogin, signInWithGoogle} = useContext(ContactsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
 
    const handleSubmit = event => {
        event.preventDefault();
        var emailValid = false;
        if(email.length === 0) {
            setEmailError("Email is required");
        } else if(email.length<6) {
            setEmailError("Email should be minimum 6 characters");
        } else if(email.indexOf(' ')>=0) {
            setEmailError("Email cannot contain spaces");
        } else {
            setEmailError("");
            emailValid = true;
        }

        var passwordValid = false;
        if(password.length === 0) {
            setPasswordError("Password is required");
        } else if(password.length<6) {
            setPasswordError("Password should be minimum 6 characters");
        } else if(password.indexOf(' ')>=0) {
            setPasswordError("Password cannot contain spaces");
        } else {
            setPasswordError("");
            passwordValid = true;
        }

        if(emailValid && passwordValid) {
            setEmail("");
            setPassword("");
        }
        onLogin(email, password)
    }

     return(
         <React.Fragment>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto form-container">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign in</h5>
                        <p className="text-muted  text-center info">Please use the following to log in:<br/>user@contactlist.com<br/>user123</p>
                        <Form onSubmit={handleSubmit} className="form-signin">
                            <Form.Group controlId="formBasicEmail" className="form-label-group">
                                <Form.Control className="user-input-box" type="email" placeholder="Email address" onChange={event => setEmail(event.target.value)} value={email}/>
                            </Form.Group>
                            {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}

                            <Form.Group controlId="formBasicPassword" className="form-label-group">
                                <Form.Control className="user-input-box" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password}/>
                            </Form.Group>
                            {passwordError.length > 0 && <Alert variant="danger">{passwordError}</Alert>}

                            <Button className="btn btn-lg btn-primary btn-block text-uppercase" variant="primary" type="submit">Sign in</Button>
                            <hr className="my-4" />
                            <Button className="btn btn-lg btn-google btn-block text-uppercase" variant="secondary" onClick={signInWithGoogle}>Sign in with Google</Button> 
                        </Form>
                    </div>
                </div>
            </div>
         </React.Fragment>
     
    )
}

export default Login;

