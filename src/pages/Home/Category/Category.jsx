import Lottie from "lottie-react"
import Banners  from"../../../assets/Banner/Banner.json"
function Category() {
  return (
    <div className="py-32 ">
      <h2 className="text-4xl font-bold text-center">Browse by category</h2>
      <p className="text-lg text-slate-500 mt-5 mb-12 font-medium text-center">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
       <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
        <div className="ring-1 ring-slate-300 rounded-lg p-5  flex justify-center items-center gap-2">
          <img className="w-10" src="https://img.icons8.com/?size=48&id=0PTYqcrrBXka&format=png" alt="" />
          <div className="space-y-2">
          <h3 className="text-xl font-bold">Marketing & Sale</h3>
          <p className="text-sm font-semibold text-slate-500">1526 Jobs Available</p>
          </div>
        </div>
        <div className="ring-1 ring-slate-300 rounded-lg p-5  flex justify-center items-center gap-2 ">
          <img className="w-10" src="https://img.icons8.com/?size=80&id=bGmKLYCK0EQ2&format=png" alt="" />
          <div className="space-y-2">
          <h3 className="text-xl font-bold">Customer Help</h3>
          <p className="text-sm font-semibold text-slate-500">185 Jobs Available</p>
          </div>
        </div>
        <div className="ring-1 ring-slate-300 rounded-lg p-5  flex justify-center items-center gap-2">
          <img className="w-10" src="https://img.icons8.com/?size=80&id=7Zom8WfRFgUn&format=png" alt="" />
          <div className="space-y-2">
          <h3 className="text-xl font-bold">Finance</h3>
          <p className="text-sm font-semibold text-slate-500">6556 Jobs Available</p>
          </div>
        </div>
        <div className="ring-1 ring-slate-300 rounded-lg p-5  flex justify-center items-center gap-2">
          <img className="w-10" src="https://img.icons8.com/?size=80&id=vCgw6BkbTuo1&format=png" alt="" />
          <div className="space-y-2">
          <h3 className="text-xl font-bold">Software</h3>
          <p className="text-sm font-semibold text-slate-500">1526 Jobs Available</p>
          </div>
        </div>
       </div>
       <div className="mt-16 ">
       <Lottie  animationData={Banners}></Lottie>
       </div>
    </div>
  )
}

export default Category