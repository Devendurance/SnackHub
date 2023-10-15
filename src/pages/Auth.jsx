
import GoogleButton from 'react-google-button'
import { auth,provider } from '../firebase.config';
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from '../hooks/useGetUserInfo';

const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      email: results.user.email,
      name: results.user.displayName,
      avatar: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("email", JSON.stringify(authInfo));
    navigate("/home");
  };

  if (isAuth) {
    return <Navigate to="/home" />;
  }



  return (
    <div className="text-white h-[100vh] flex justify-center items-center">
      {/* <form onSubmit={handleSubmit} className="!bg-black gap-4 flex flex-col h-16">
        <input className="border-red-600 border h-8 text-black" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className="!border-red-600 border h-8 text-black" type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button className="text-black mt-8" type="submit">Login</button>
      </form> */}

      <div  className="w-24px text-black bg-white h-10"><GoogleButton
        onClick={signInWithGoogle}
        className='gb'
      /></div>
    </div>
  )
}

export default Auth