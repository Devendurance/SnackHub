import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import { db } from "../firebase.config"
import { auth } from "../firebase.config"

const Auth = () => {
  const googleHandler = () =>{
    console.log('ishi')
  }


  const handleSubmit = async (e) =>{
    try{
      e.preventDefault()
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      console.log(cred)
      const userRef = doc(db, 'users', cred.user.uid)
      await setDoc(userRef, {
        email: email,
        password: password,
        createdAt: serverTimestamp(),
      })
    }
    catch (error){
      console.error('Error signing up: ',  error)
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className="text-white h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="!bg-black gap-4 flex flex-col h-16">
        <input className="border-red-600 border h-8 text-black" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className="!border-red-600 border h-8 text-black" type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button className="text-black mt-8" type="submit">Login</button>
      </form>

      <div onClick={googleHandler}  className="w-24px text-black bg-white h-10">Google</div>
    </div>
  )
}

export default Auth