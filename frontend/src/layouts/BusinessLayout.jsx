import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessSideBar from "../components/BusinessSideBar";
import {Outlet} from "react-router-dom"


const BusinessLayout = () => {
    return <>
    <Navbar/>

    <div className="grid grid-cols-12 min-h-screen">
        <aside className="col-span-3">
            <BusinessSideBar/>
            </aside>
            <main className="col-span-9 p-4">
                <Outlet/>
            </main>
        
    </div>
    <Footer/>
    
    </>
}

export default BusinessLayout