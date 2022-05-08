import React from "react"

const AppContext = React.createContext({
    isAuthenticated:false,
    contacts: []

});

export default AppContext;