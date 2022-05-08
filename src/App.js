import React, {useReducer} from "react";
import ContactList from "./ContactList";
import {v4 as uuidv4} from "uuid";
import About from "./About";
import Login from "./Login";
import Navbar from './Navbar'

import AddContact from "./AddContact";
import EditContact from "./EditContact";
import {Route, useHistory} from "react-router-dom";
import {useStorageState, useStorageReducer} from "react-storage-hooks"
import firebase from "./firebase";


const contactsInitialState = {
  contacts: []
}

function contactsReducer(state, action){
  switch(action.type) {
    case "add":
      const newContact = {id:uuidv4(), name:action.payload.name, telephone:action.payload.telephone, email:action.payload.email}
      const addedContacts = [...state.contacts, newContact];
      return {...state, contacts:addedContacts};

    case "delete":
      const filteredContactState = state.contacts.filter(contact => contact.id!==action.payload.id)
      return {...state, contacts:filteredContactState};

    case "edit":
      const updateContact = {...action.payload}
      const updatedContactIndex = state.contacts.findIndex(c => c.id===action.payload.id);
      const updatedContacts = [
        ...state.contacts.slice(0,updatedContactIndex), updateContact,...state.contacts.slice(updatedContactIndex+1)
      ];
      return {...state, contacts:updatedContacts}
    default:
      return contactsInitialState;
  }
}

export const ContactsContext = React.createContext({userIsAuthenticated:false, contacts:[]});



function App() {
const [state, dispatch] = useStorageReducer(localStorage, "contacts", contactsReducer, contactsInitialState);
const [userIsAuthenticated, setUserIsAuthenticated] = useStorageState(localStorage, "userIsAuthenticated",false)
const userIsAuthenticatedBool = Boolean(Object.values(userIsAuthenticated)[0])
let history = useHistory();

const onLogin = (email, password) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(user => {
    setUserIsAuthenticated({userIsAuthenticated: true})
    history.push("/contacts")
  })
  .catch(error => {
      setUserIsAuthenticated({userIsAuthenticated: false})
      console.log('error',userIsAuthenticated)
  })
}

const onLogout = () => {
  firebase
  .auth()
  .signOut()
  .then(() => {
    setUserIsAuthenticated(false)
    //history.push("/")
    })
}

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
   .signInWithPopup(provider).then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
     setUserIsAuthenticated({userIsAuthenticated: true})
     //history.push("/contacts");

  }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
   
     console.log(error.code)
     console.log(error.message)
  });

  function signInRedirect(provider) {
    // [START auth_signin_redirect]
    firebase.auth().signInWithRedirect(provider);
    // [END auth_signin_redirect]
  }
}

const signOutGoogle = () => {
  firebase.auth().signOut()
	.then(function() {
     console.log('Signout Succesfull')
  }, function(error) {
     console.log('Signout Failed')  
  });
}

  return (
    <div>

      <ContactsContext.Provider value={{state, dispatch, userIsAuthenticated, onLogin, onLogout, signInWithGoogle, signOutGoogle, signOutGoogle}}>
      
      <Navbar />
         
      <Route exact path="/login" component={userIsAuthenticatedBool ? ContactList: Login}>
      </Route>


       <Route exact path="/about">
         <About />
       </Route>

       <Route exact path="/contacts" component={userIsAuthenticatedBool ? ContactList: Login}>
       </Route>

       <Route exact path="/add" component={userIsAuthenticatedBool ? AddContact: Login}>
       </Route>

       <Route exact path="/edit/:contactId" component={userIsAuthenticatedBool ? EditContact : Login }>
       </Route>

       <Route exact path="/"  component={userIsAuthenticatedBool ? ContactList: Login}>
       </Route> 

    
      </ContactsContext.Provider>
    </div>
  );
}

export default App;
