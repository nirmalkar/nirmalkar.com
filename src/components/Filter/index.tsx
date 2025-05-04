import { TiDeleteOutline } from '@react-icons/all-files/ti/TiDeleteOutline';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/themeProvider';
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
        <select
          className="blog-filter-select"
          name="sort"
          id="sort"
          value={sort}
          onChange={handleFilterChange}
        >
          <option value="">Select sort by</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="filter-group">
        <select
          className="blog-filter-select"
          id="category"
          name="category"
          value={category}
          onChange={handleFilterChange}
        >
          <option value="">Select category</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      {(category !== '' || sort !== '') && (
        <button
          onClick={handleClearFilters}
          className="clear-filter-button"
          aria-label="Clear filters"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <TiDeleteOutline
            title="Clear filters"
            style={{ color: theme.colors.oppositeSecondary }}
            size={30}
          />
        </button>
      )}
    </div>
  );
};

export default Filter;
