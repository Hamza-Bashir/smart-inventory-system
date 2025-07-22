import {Link} from "react-router-dom"

const Navbar = () => {
    return (
      <nav className="bg-blue-100 shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
  
          
          <Link to="/" className="text-2xl font-bold text-blue-700 cursor-pointer">
            Smart<span className="text-blue-500">Inventory</span>
          </Link>

          
          <div className="space-x-10 ">
            <Link to="/login" className="text-blue-700 font-medium hover:text-blue-900 cursor-pointer transition">
              Login
            </Link>
            <Link to="/register-user" className="text-blue-700 font-medium hover:text-blue-900 cursor-pointer transition">
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  