import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-gray-900 p-3  mb-8 md:mb-16"
      aria-label="Navegação principal"
    >
      <div className="centralized-container">
        <Link to={"/"} className="flex items-center flex-wrap gap-4 ">
          <img src="/logo.svg" alt="Rick and Morty logo" />
          <span className="text-sm text-gray-50 font-medium md:text-base">
            Rick and Morty
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
