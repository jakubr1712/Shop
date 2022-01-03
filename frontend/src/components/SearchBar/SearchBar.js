import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const SearchBar = () => {
  const { filterData } = useGlobalContext();
  const [value, setValue] = useState("");

  useEffect(() => {
    filterData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Wyszukaj produkt"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <span className="search-icon"></span>
      </form>
    </div>
  );
};

export default SearchBar;
