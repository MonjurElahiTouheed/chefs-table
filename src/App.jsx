import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
function App() {

  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </div>
  )
}

export default App
