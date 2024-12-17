import { useEffect, useState } from "react"
import AuthContext from "../AuthContext/AuthContext"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase.init"
import { GoogleAuthProvider } from "firebase/auth"

const providerGoogle = new GoogleAuthProvider()

function AuthProvider({children}) {
  const [loading,setLoading] = useState(true)
  const [user,setUser] = useState(null)
  


  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const createSignIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInWithGoogleee = () => {
    setLoading(true)
    return signInWithPopup(auth,providerGoogle)
  }

  const singOutUser = () => {
      setLoading(true)
      return signOut(auth)
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth,currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unSubscribe()
    }
    },[])


  const authInfo = {
    user,
    loading,
    createUser,
    createSignIn,
    signInWithGoogleee,
    singOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider