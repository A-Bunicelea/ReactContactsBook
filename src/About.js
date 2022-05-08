import React, {useContext} from "react";
import Navbar from "./Navbar";
import "./page_styles.css";


function About() {

    return(
        <div className="about-container">
            <h2 className="about-title">About</h2>
            <p className="about-content">For the log in process, I used two authentication methods offered by firebase. The user's status (logged in or logged out) and the contacts are saved in local storage by using react storage hooks.<br /><br />
                Throughout this project, I used functional components and multiple hooks, such as: useContext, useReducer, useHistory, useState, useParams.
                To generate unique contact ids, I used the uuid library. In terms of CSS, most of the project was styled using react bootstrap. <br />
            </p>
            
            <p className="about-books">
                As a learning support, I used the following sources:
                <ul className="books-list">
                    <li className="book"><span className="book-title">React Explained</span> by Zac Gordon</li>
                    <li className="book"><span className="book-title">Beginning React with Hooks</span> by Greg Lim</li>
                    <li className="book"><span className="book-title">How To Build a CRUD App with React Hooks and the Context API </span>by Ishan Manandhar (<a className="article-link" href="https://www.digitalocean.com/community/tutorials/react-crud-context-hooks" target="_blank">view article</a>).</li>
                </ul>
                
               
            </p>

        

        </div>
    )
}

export default About;