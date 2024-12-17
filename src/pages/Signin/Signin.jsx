import Lottie from "lottie-react"
import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router-dom"
import LoginAnimation from '../../assets/login/login.json'
import { useContext } from "react"
import AuthContext from "../../context/AuthContext/AuthContext"

function Signin() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log('sign up : ',location)
  const from = location.state || '/';
  const {createSignIn,signInWithGoogleee} = useContext(AuthContext)


  const handleHII = () => {
    signInWithGoogleee()
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))
  }

  const handleSignIn = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  const data = {email,password}
  console.log(data)
  createSignIn(email,password)
  .then(result => {
    console.log(result.user)
    navigate(from)
  })
  .catch(error => console.log(error.message))
  }
  return (
   
    <div className="my-32 max-w-4xl mx-auto lg:flex justify-center items-center ">
    <div className="  flex-1 mx-auto p-2 sm:p-0">
     <p className="text-center text-blue-600">Sign Up</p>
     <h2 className="text-4xl font-bold text-center mt-4 mb-8">Start for free Today</h2>
     <button onClick={handleHII} className="py-[10px] rounded px-4 w-full ring-1 ring-slate-300 flex gap-2 items-center justify-center"><FcGoogle className="text-3xl" /> <span className="font-medium hover:text-blue-600">sign up with google</span></button>
     <div className="divider my-10">OR</div>
     
    <form onSubmit={handleSignIn}>
    <div className="flex-col flex gap-10">
  
  <input name='email' className="py-3 px-4 border border-slate-300 rounded" placeholder="Email" type="email" />
  <input name="password" className="py-3 px-4 border border-slate-300 rounded" placeholder="Password" type="password" />
   <button className="py-3  px-4 border border-slate-300 rounded  text-lg bg-slate-900 text-white">Submit</button>
   <p className="text-center">Don't have an Account? <Link to={`/register`} className="text-blue-600">Sign up</Link></p>
 
 </div>
    </form>
    
     </div>



     <div className="flex-1">
     <Lottie animationData={LoginAnimation}></Lottie>
    </div>

   </div>
  )
}

export default Signin