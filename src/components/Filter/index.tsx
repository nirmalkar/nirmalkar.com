import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";
type FilterValuesType = {
  category: string;
  sort: string;
};
type FilterPropsType = {
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filteredValues: FilterValuesType;
  handleClearFilters: () => void;
};

const Filter: React.FC<FilterPropsType> = ({
  onFilterChange,
  filteredValues,
  handleClearFilters,
}) => {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  const { category, sort } = filteredValues;
  const { secondary, oppositePrimary } = theme.colors;
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event);
  };

  return (
    <div className="filter-content">
      <div className="filter-group">
        <label htmlFor="sort">Sort By:</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={handleFilterChange}
        >
          <option value="">Select</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleFilterChange}
        >
          <option value="">Select</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      <div onClick={handleClearFilters} className="clear-filter-button">
        <TiDeleteOutline
          style={{ color: theme.colors.oppositeSecondary }}
          size={30}
        />
      </div>
    </div>
  );
};

export default Filter;
