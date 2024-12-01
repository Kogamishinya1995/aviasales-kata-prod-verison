import Filters from "./Filters/Filters";
import SearchResults from "./searchResults/SearchResults";

const SearchBar = () => (
  <div className="search-bar">
    <Filters />
    <SearchResults />
  </div>
);

export default SearchBar;
