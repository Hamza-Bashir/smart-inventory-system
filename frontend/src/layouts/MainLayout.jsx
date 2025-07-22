import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom"


const MainLayout = ({children}) => {
    return <>
        <div className="flex flex-col min-h-screen">

            <Navbar/>

            <main className="felx-grow">
                {children}
            </main>

            <Footer/>
        </div>
    
    </>
}

export default MainLayout