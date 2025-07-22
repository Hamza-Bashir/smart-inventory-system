const DashBoard = () => {
    return (
      <div className="w-64 bg-gray-800 text-white rounded-md min-h-screen p-4 mt-1">
        <h2 className="text-2xl font-bold mb-6">My Business</h2>
        <ul className="space-y-2">
          <li className="block px-4 py-2 rounded hover:bg-gray-700">All Category</li>
          <li className="block px-4 py-2 rounded hover:bg-gray-700">Create Category</li>
          <li className="block px-4 py-2 rounded hover:bg-gray-700">All Product</li>
          <li className="block px-4 py-2 rounded hover:bg-gray-700">Create Product</li>
          <li className="block px-4 py-2 rounded hover:bg-gray-700">Sale</li>
          <li className="block px-4 py-2 rounded hover:bg-gray-700">Notification</li>
        </ul>
      </div>
    );
  };
  
  export default DashBoard;
  