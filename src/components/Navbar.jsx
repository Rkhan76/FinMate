const Navbar = () => {
  return (
    <nav className="bg-blue-500 flex justify-center py-3 shadow-md">
      <ul className="w-11/12 flex justify-between items-center text-white text-lg font-semibold">
        <li className="tracking-wide">Financly</li>
        <li>
          <button className="bg-white text-blue-500 px-4 py-1 rounded-md hover:bg-blue-100 transition">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
