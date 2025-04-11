import React, { useState } from 'react';
import { useDebounce } from '../../utils/debounce';

export const SearchBar = ({ search, setSearch }) => {
  const onSearchChange = useDebounce(({ target }) => setSearch(target.value), 250);
  return (
    <input
      type="text"
      name="search"
      value={search}
      placeholder="Поиск..."
      onChange={onSearchChange}
    />
  );
};
