const AllProduct = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold pt-5">All Product</h2>
  
        <table className="mt-5 w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Product Quantity</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-2">Sports</td>
              <td className="border px-4 py-2">10</td>
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
  
  export default AllProduct;
  