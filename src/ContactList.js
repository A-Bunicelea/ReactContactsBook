import React, {useContext, useState} from "react";
import {ContactsContext} from "./App";
import {Table, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./page_styles.css";

function ContactList() {
    const {state, dispatch} = useContext(ContactsContext);
    const [contactName, setContactName] = useState("");
    const [contactTelephone, setContactTelephone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editContact, setEditContact] = useState(null);
    
    return(
        <React.Fragment>
        <div className="add-page-container">
            <div className="d-flex justify-content-between align-items-center contacts-first-container">
                <h1 className="contacts-title">Contacts List</h1>
                <Link to="/add" className="add-btn-link">
                    <Button variant="primary" type="submit" className="btn btn-sm custom add-btn">Add Contact</Button>
                </Link>
            </div>
            {state.contacts.length==0? <div className="list-empty">Contact list empty</div>:
                <Table hover className="table-container">
                    <thead>
                        <tr>
                            <th className="info-header-cell info-cell">Name</th>
                            <th className="info-header-cell info-cell">Telephone</th>
                            <th className="info-header-cell info-cell">Email</th>
                            <th style={{visibility:"hidden"}}></th> 
                            <th style={{visibility:"hidden"}}></th>
                        </tr>
                    </thead>

                    <tbody>
                        {state.contacts.map(contact => (
                            <tr key={contact.id}>
                                <td className="info-cell">{contact.name}</td>
                                <td className="info-cell">{contact.telephone}</td>
                                <td className="info-cell">{contact.email}</td>
                                <td className="edit-btn-container" style={{borderRight:"none"}}>
                                    <Link
                                        to={`/edit/${contact.id}`}
                                        title="Edit Contact"
                                        ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit edit-icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></Link>
                                </td>
                                <td onClick={() => dispatch({type:"delete", payload:contact})}><Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </div>
        </React.Fragment>
    )
}

export default ContactList;
