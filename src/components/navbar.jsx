const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white p-4 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Whole Slide Image Viewer</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
