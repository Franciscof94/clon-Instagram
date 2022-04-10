import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error ('There is no auth provider')
    return context
}

const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)

    const Signup = (email, password, username) => {
        return createUserWithEmailAndPassword(auth, email, password)     
    }


    const Login =  (email, password) => {
         return signInWithEmailAndPassword(auth, email, password)
       
    }

    const Logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])
    
    
        return(
            <authContext.Provider value={{ Signup, Login, user, Logout, loading }}>
                {children}
            </authContext.Provider>
        )
}

export default AuthProvider