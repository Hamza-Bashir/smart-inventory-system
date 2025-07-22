const BusinessSideBar = () => {
    return (
      <div className="w-64 bg-gray-800 text-white rounded-md min-h-screen p-4 mt-1">
        <h2 className="text-2xl font-bold mb-6">My Business</h2>
        <ul className="space-y-2">
          <li className="block px-4 py-2 rounded hover:bg-gray-700">All Businesses</li>
          <li>Create New Business</li>
        </ul>
      </div>
    );
  };
  
  export default BusinessSideBar;
  