import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDN6SZj8cnWGsKHF9ZTXAzS5bcN7E9XWa0",
    authDomain: "contactlist-34d6c.firebaseapp.com",
    projectId: "contactlist-34d6c",
    storageBucket: "contactlist-34d6c.appspot.com",
    databaseURL:"https://contactlist-34d6c-default-rtdb.firebaseio.com/",
    messagingSenderId: "999842854657",
    appId: "1:999842854657:web:ad7a84c633b1302263cd00"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase;
