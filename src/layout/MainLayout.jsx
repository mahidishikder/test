import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function MainLayout() {
  return (
    <div>
      <div className="shadow py-2">
        <Header></Header>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout