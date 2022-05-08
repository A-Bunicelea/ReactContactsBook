import React, {useState, useContext} from "react";
import {Table, Form, Button} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";
import {ContactsContext} from "./App";
import {v4 as uuidv4} from "uuid";
import "./page_styles.css";

function EditContact() {

  const {contactId} = useParams();
  const {state, dispatch} = useContext(ContactsContext);
  let history = useHistory();

  const contact = state.contacts.find(c => c.id===contactId);
  const [contactName, setContactName] = useState(contact.name);
  const [contactTelephone, setContactTelephone] = useState(contact.telephone);
  const [contactEmail, setContactEmail] = useState(contact.email);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:"edit", payload:{id:contactId, name:contactName, telephone:contactTelephone, email:contactEmail}});
    setContactName("");
    setContactTelephone("");
    setContactEmail("");
    history.push("/contacts");
      
  }

  return(
      
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className="add-form-container">
        <Form.Label className="form-label">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"
            onChange={event => setContactName(event.target.value)} value={contactName} 
            />
        </Form.Group>

        <Form.Group controlId="formBasicTelephone" className="add-form-group">
          <Form.Label className="form-label">Telephone</Form.Label>
            <Form.Control type="text" placeholder="Enter telephone" id="contactEmail"
            onChange={event => setContactTelephone(event.target.value)} value={contactTelephone} 
            />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="add-form-group">
          <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" id="contact"
            onChange={event => setContactEmail(event.target.value)} value={contactEmail}
            />
        </Form.Group>

        <div className="add-btn-container">
          <Button variant="primary" type="submit" className="btn custom save-btn">Save</Button>
          <Link to="/contacts" className="cancel-btn">Cancel</Link>
        </div>
    </Form>
  
  )
}

export default EditContact;

