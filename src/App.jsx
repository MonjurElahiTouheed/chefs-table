import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
function App() {

  return (
    <div>
      <div className="container mx-auto">
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        ></ToastContainer>
        <Toaster position="top-right" reverseOrder={false}></Toaster> */}
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </div>
  )
}

export default App
