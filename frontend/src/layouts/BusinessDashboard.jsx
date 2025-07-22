import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom"
import DashBoard from "../components/DashBoard";


const BusinessDashboard = () => {
    return <>
    <Navbar/>

    <div className="grid grid-cols-12 min-h-screen">
        <aside className="col-span-3">
            <DashBoard/>
            </aside>
            <main className="col-span-9 p-4">
                <Outlet/>
            </main>
        
    </div>
    <Footer/>
    
    </>
}

export default BusinessDashboard