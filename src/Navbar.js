import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import {ContactsContext} from "./App";
import "./page_styles.css";

function Navbar() {
    const {userIsAuthenticated, onLogout, signOutGoogle} = useContext(ContactsContext)
    const userIsAuthenticatedBool = Boolean(Object.values(userIsAuthenticated)[0])

    let history = useHistory()

    return(
        <div>
            <ul className="d-flex navbar-container">
                {(!userIsAuthenticatedBool)? 
                <div className="d-lg-inline-flex navbar-inner-container">
                    <Link to="/login" >
                        <li>Log in</li>
                    </Link> 
                    <Link to="/about" >
                        <li>About</li>
                    </Link>                     
                </div>
                    :
                    <div className="d-lg-inline-flex navbar-inner-container">
                        <Link to="/contacts">
                            <li>Contacts</li>
                        </Link>     
                        <Link to="/about" >
                            <li>About</li>
                        </Link> 
                        <li>                                        
                            <div
                                className="linkLike"
                                onClick={(event) => {
                                    event.preventDefault();
                                    onLogout();
                                    signOutGoogle();
                                    history.push("/login")
                                }}
                                >
                            Log out
                            </div>
                         </li>
                    </div>
                }
                </ul>
        </div>
    )
}
export default Navbar;