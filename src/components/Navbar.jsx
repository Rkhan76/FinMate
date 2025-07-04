const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      {' '}
      {/* Makes navbar sticky */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold tracking-tight hover:text-blue-100 transition-colors cursor-pointer">
                Financely
              </span>
            </div>

            {/* Logout Button */}
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
