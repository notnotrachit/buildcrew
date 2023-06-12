export default function Navbar(){
    return (

<nav className="border-gray-200 bg-lvoilet/50 backdrop-blur-md sticky top-0 navmenu">
  <div className="max-w-screen px-16 flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="/Logo_white.png" className="h-16 " alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-center">
      <li>
          <a href="/" className="block py-2 pl-3 pr-4 rounded hover:text-lblue font-bold font-['Inter'] md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 rounded hover:text-lblue font-bold font-['Inter'] md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500">Why BUIDL Crew?</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 rounded hover:text-lblue font-bold font-['Inter'] md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500">Contest/Events</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 rounded hover:text-lblue font-bold font-['Inter'] md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500">Hall of Fame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}