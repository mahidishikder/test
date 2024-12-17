import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Logo/Logo.json';
import Lottie from "lottie-react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


function Header() {
  const {user,singOutUser} = useContext(AuthContext)

  const handleSignOut = () => {
     singOutUser()
     .then(result => {
      console.log(result.user)
     })
     .catch(error => console.log(error.message))
  }
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-blue-600 transition duration-200 ${
            isActive ? 'text-blue-600 underline underline-offset-8' : ''
          }`
        }
      >
        Home
      </NavLink>
      
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <nav className="navbar bg-base-100  ">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              aria-label="Menu"
              className="text-gray-900 sm:text-3xl text-2xl mr-3.5"
            >
              <HiMenuAlt1 />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Lottie animationData={logo} className="sm:w-9 w-8" />
            <Link to="/" className="sm:text-3xl text-2xl font-bold">
              JOBCITY
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg text-slate-800 gap-8">
            {links}
          </ul>
        </div>

        {/* Register and Sign In */}
        <div className="navbar-end flex items-center sm:gap-8 gap-2">
          {
            user? <>
            <span>{user?.email}</span>
            <button onClick={handleSignOut} className="bg-red-500 py-2 px-4 rounded text-white"> <Link>Sign out</Link></button>
            </>  : 
            <>
            <Link
            to="/register"
            className="hover:text-blue-600  underline"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="py-2 px-4 sm:px-6 mr-1 bg-[#0000FF] text-white rounded hover:bg-slate-900 transition duration-200"
          >
            Sign in
          </Link>
            </>
          }
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
