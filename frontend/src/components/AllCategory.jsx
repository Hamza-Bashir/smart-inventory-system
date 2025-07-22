const AllCategory = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold pt-5">All Category</h2>
  
        <table className="mt-5 w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Category Name</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">Sports</td>
              <div className="border px-4 py-2 flex gap-3">
                <td><button>Delete</button></td>
                <td><button>Edit</button></td>
              </div>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  
  export default AllCategory;
  