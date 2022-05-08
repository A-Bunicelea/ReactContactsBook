import React, {useState, useContext} from "react";
import {Table, Form, Button} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {ContactsContext} from "./App";
import "./page_styles.css";

function AddContact() {
    const {state, dispatch} = useContext(ContactsContext);
    const [contactName, setContactName] = useState("");
    const [contactTelephone, setContactTelephone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    let history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type:"add", payload:{name:contactName, telephone:contactTelephone, email:contactEmail}});
        setContactName("");
        setContactTelephone("");
        setContactEmail("");
        history.push("/contacts");
    }

    return(
       
            <Form onSubmit={handleSubmit} className="add-form-container">
                <Form.Group controlId="formBasicName" className="add-form-group">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" 
                    onChange={event => setContactName(event.target.value)} value={contactName} required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicTelephone" className="add-form-group">
                    <Form.Label className="form-label">Telephone</Form.Label>
                    <Form.Control type="text" placeholder="Enter telephone" 
                    onChange={event => setContactTelephone(event.target.value)} value={contactTelephone} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="add-form-group">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    onChange={event => setContactEmail(event.target.value)} value={contactEmail} required
                    />
                </Form.Group>

                <div className="add-btn-container">
                    <Button variant="primary" type="submit" className="btn custom save-btn">Save</Button>
                    <Link to="/contacts" className="cancel-btn">Cancel</Link>
                </div>
            </Form>
    )

}

export default AddContact;