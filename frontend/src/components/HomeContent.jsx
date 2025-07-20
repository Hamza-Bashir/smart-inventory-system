import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        
        {/* 🔷 Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Smart Inventory Management System
        </h1>

        {/* 🔸 Subheading */}
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Effortlessly manage your stock, track inventory, and grow your business with ease.
        </p>

        {/* 🔘 Call-to-Action */}
        <Link to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
