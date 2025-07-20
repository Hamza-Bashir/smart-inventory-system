const Footer = () => {
    return (
      <footer className="bg-blue-100 text-blue-800 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-2 text-center">
          <h3 className="text-lg font-bold">SmartInventory</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SmartInventory. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  