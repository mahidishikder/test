import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import logo from '../../assets/Logo/Logo.json'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer justify-between p-4 lg:p-0  bg-red-200 lg:justify-items-center flex-col">
  <aside>
  <div className="flex items-center gap-2">
            <Lottie animationData={logo} className="sm:w-9 w-8" />
            <Link to="/" className="sm:text-3xl text-2xl font-bold">
              JOBCITY
            </Link>
          </div>
    <p className="text-slate-700 font-medium">
    Jobcity is the heart of the design community <br />  and the best resource to discover and connect <br /> with designers and jobs worldwide.

    </p>
    <div className="flex justify-between gap-5">
      <FaFacebook className="w-7 h-7 cursor-pointer"></FaFacebook>
      <FaInstagram className="w-7 h-7 cursor-pointer"></FaInstagram>
      <FaTwitter className="w-7 h-7 cursor-pointer"></FaTwitter>
    </div>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer