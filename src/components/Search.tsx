interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string | ((prev: string) => string)) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <section className="flex centralized-container mb-8">
      <input
        className="border border-gray-500 rounded-l-sm text-sm p-2 w-[250px] text-gray-500 focus:outline-none focus:border-gray-900 rounded-r-none"
        type="text"
        name="search"
        placeholder="Buscar por nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-gray-900 cursor-pointer px-[19px] py-[15px] rounded-r-sm"
        aria-label="Buscar"
      >
        <img src="/search-icon.svg" alt="Icone de busca" />
      </button>
    </section>
  );
};

export default Search;
