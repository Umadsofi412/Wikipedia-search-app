import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="Enter Search Term...."
        value={searchTerm}
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />
    </form>
  );
};
export default SearchBar;
