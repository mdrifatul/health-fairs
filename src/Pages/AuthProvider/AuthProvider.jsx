import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth,email, password)
  }

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    })
    return () =>{
      unSubscribe();
    }
  },[])

  const userInfo = {
    user,
    createUser,
    login,
    logOut,
  }
  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;