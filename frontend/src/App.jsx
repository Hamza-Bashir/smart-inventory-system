import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import BusinessLayout from "./layouts/BusinessLayout"
import AllBusiness from "./components/AllBusiness"
import CreateNewBusiness from "./components/CreateNewBusiness"
import BusinessDashboard from "./layouts/BusinessDashboard"
import AllCategory from "./components/AllCategory"
import CreateCategory from "./components/CreateCategory"
import AllProduct from "./components/AllProduct"
import CreateProduct from "./components/CreateProduct"
import Sale from "./components/Sale"
import Notification from "./components/Notification"

const App = () => {

  return <>

  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/register-user" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />

    <Route element={<BusinessLayout/>} >
      <Route path="/business/dashboard" element={<AllBusiness/>} />
      <Route path="/business/create-business" element={<CreateNewBusiness/>} />
    </Route>

    <Route element={<BusinessDashboard/>}>
      <Route path="/business/category" element={<AllCategory/>} />
      <Route  path="/business/create-category" element={<CreateCategory/>}/>
      <Route path="/business/product" element={<AllProduct/>}/>
      <Route path="/business/create-product" element={<CreateProduct/>} /> 
      <Route path="/business/sale" element={<Sale/>} />
      <Route path="/business/notification" element={<Notification/>} />

    </Route>

  </Routes>
  
  
  </>
}

export default App