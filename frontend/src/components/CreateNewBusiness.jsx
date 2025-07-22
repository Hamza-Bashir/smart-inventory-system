const CreateNewBusiness = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold pt-5 mb-4">Create New Business</h2>
  
        <form className="bg-white p-4 rounded shadow max-w-md">
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter Business Name"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </>
    );
  };
  
  export default CreateNewBusiness;
  