const Notification = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold mt-5 mb-3">New Notification</h2>
  
        <div className="bg-white p-4 rounded shadow flex justify-between items-center mb-6">
          <p className="text-gray-800">You have a new notification.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Read
          </button>
        </div>

        
  
        <h2 className="text-2xl font-semibold mb-3">All Notifications</h2>
  
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
          <p className="text-gray-800">You have a new notification.</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Delete
          </button>
        </div>

        <div className="text-center space-x-5 mt-4">
            <button className="border py-1 px-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg">Pervious</button>
            <button className="border py-1 px-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg">Next</button>
        </div>
      </>
    );
  };
  
  export default Notification;
  