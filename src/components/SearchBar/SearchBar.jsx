import PropTypes from 'prop-types';

export const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      name="search"
      value={search}
      placeholder="Поиск..."
      onChange={({ target }) => setSearch(target.value)}
    />
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
