import Banner from "./Banner/Banner"

import Category from "./Category/Category"
import Jobs from "./Jobs/Jobs"

function Home() {
  return (
    <div className="max-w-7xl mx-auto my-24 px-2">
      <Banner></Banner>
      <Category></Category>
      <Jobs></Jobs>
    </div>
  )
}

export default Home