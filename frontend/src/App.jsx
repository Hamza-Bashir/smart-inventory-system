import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

const App = () => {

  return <>

  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/register-user" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />

  </Routes>
  
  
  </>
}

export default App