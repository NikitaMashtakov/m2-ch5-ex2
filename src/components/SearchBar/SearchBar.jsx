import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export const SearchBar = ({ search, setSearch }) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Поиск..."
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
