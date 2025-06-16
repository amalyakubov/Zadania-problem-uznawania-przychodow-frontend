import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="bg-[#0A0A0A] text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-md font-semibold text-[#A2A4A4] hover:text-white transition-all duration-300 cursor-pointer">
              Home
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#A2A4A4] hover:text-white transition-all duration-300 cursor-pointer"
            >
              Login
            </Link>
            <form method="post" action="/logout">
              <button
                type="submit"
                className="px-3 py-2 rounded-md text-sm font-medium text-[#A2A4A4] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
