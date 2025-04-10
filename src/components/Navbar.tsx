const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-3" aria-label="Navegação principal">
      <div className="px-1 max-w-7xl mx-auto md:px-8">
        <a href="./" className="flex items-center flex-wrap gap-4 ">
          <img src="/logo.svg" alt="Rick and Morty logo" />
          <span className="text-sm text-gray-50 font-medium md:text-base">
            Rick and Morty
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
