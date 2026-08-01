import {createContext, useContext, useState} from 'react';
const AuthorContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    function login(username) {
        const loggedInUser = {username};
        setUser(loggedInUser);

        localStorage.setItem('user', JSON.stringify(loggedInUser));
    }

    function logout(){
        setUser(null);

        localStorage.removeItem('user');
    }

    return(
    <AuthorContext.Provider
     value={{user, login, logout}}>{children}</AuthorContext.Provider>);
}

export function useAuth() {
    return useContext(AuthorContext);
}