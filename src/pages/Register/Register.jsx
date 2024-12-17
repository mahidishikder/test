import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import RegisterAnimation from '../../assets/registerLogo/register.json'; // Assuming correct path
import { Link} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";



function Register() {

  const {createUser,signInWithGoogleee} = useContext(AuthContext)
  console.log(createUser)

  const handleHII = () => {
    signInWithGoogleee()
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const RePassword = e.target.RePassword.value;

    const data = { name, email, username, password, RePassword };
    console.log(data)

    createUser(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => console.log(error.message))
  

  };


  return (
    <div className="my-32 max-w-4xl mx-auto lg:flex justify-center items-center">
      <div className="flex-1 mx-auto p-2 sm:p-0">
        <p className="text-center text-blue-600">Register</p>
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">Start for free Today</h2>
        <button onClick={handleHII}  className="py-[10px] rounded px-4 w-full ring-1 ring-slate-300 flex gap-2 items-center justify-center">
          <FcGoogle className="text-3xl" />
          <span className="font-medium hover:text-blue-600">Sign up with Google</span>
        </button>
        <div className="divider my-10">OR</div>

        <form onSubmit={handleSubmit}>
          <div className="flex-col flex gap-10">
            <input
              name="name"
              className="py-3 px-4 border border-slate-300 rounded"
              placeholder="Name"
              type="text"
              required // Add required attribute for form validation
            />
            <input
              name="email"
              className="py-3 px-4 border border-slate-300 rounded"
              placeholder="Email"
              type="email"
              required // Add required attribute for form validation
            />
            <input
              name="username"
              className="py-3 px-4 border border-slate-300 rounded"
              placeholder="Username"
              type="text"
              required // Add required attribute for form validation
            />
            <input
              name="password"
              className="py-3 px-4 border border-slate-300 rounded"
              placeholder="Password"
              type="password"
              required // Add required attribute for form validation
            />
            <input
              name="RePassword"
              className="py-3 px-4 border border-slate-300 rounded"
              placeholder="Re-Password"
              type="password"
              required // Add required attribute for form validation
            />
           
            <button className="py-3 px-4 border border-slate-300 rounded text-lg bg-slate-900 text-white">
              Submit
            </button>
            <p className="text-center">
              Already have an account? <Link to="/signin" className="text-blue-600">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="flex-1">
        <Lottie animationData={RegisterAnimation} />
      </div>
    </div>
  );
}

export default Register;