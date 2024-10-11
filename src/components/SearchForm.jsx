import { useState } from "react";
import { PropTypes } from "prop-types";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const formPreventSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={formPreventSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 5,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>Search By : </p>&nbsp;
        <label htmlFor="search" style={{ marginRight: 10 }}>
          Title
        </label>
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter search term..."
          style={{
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 5,
            width: "50%",
          }}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
