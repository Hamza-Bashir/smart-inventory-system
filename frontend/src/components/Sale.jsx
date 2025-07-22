const Sale = () => {
    return (
      <>
        <h2 className="font-semibold text-2xl mt-5 mb-4">Add New Sale</h2>
  
        <div className="bg-white p-4 rounded shadow max-w-md">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <select
              className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="category"
              id="category"
            >
              <option value="sports">Select Product</option>
              <option value="garments">Garments</option>
            </select>
  
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        <h2 className="font-semibold text-2xl mt-5 mb-4">All Sale</h2>

        <table className="mt-5 w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Category Name</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">Sports</td>
              <td className="border px-4 py-2">01/01/2025</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  
  export default Sale;
  