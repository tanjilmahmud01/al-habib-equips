import React, { createContext, useState } from "react";

export const login_context = createContext();

const LoginProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginInfo ={
        user,
        setUser,
        loading, 
        setLoading
    }
    
    return(
        <login_context.Provider value={loginInfo}>
            {children}
        </login_context.Provider>
    )

};

export default LoginProvider;


