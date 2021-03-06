function Footer() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6 w-screen">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight"></span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Footer;
