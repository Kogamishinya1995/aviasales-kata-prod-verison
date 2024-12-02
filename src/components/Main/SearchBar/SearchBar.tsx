import Filters from "./Filters/Filters";
import SearchResults from "./searchResults/SearchResults";
import Transfers from "../transfers/Transfers";

const SearchBar = () => (
  <div className="search-bar__container">
    <Filters />
    <div className="search-bar__result-field">
    <Transfers />
    <SearchResults />
    </div>
  </div>
);

export default SearchBar;
