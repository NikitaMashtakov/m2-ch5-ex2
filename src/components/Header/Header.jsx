import { SearchBar } from 'components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export const Header = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список дел:</h1>
      <SearchBar className={styles.search} search={search} setSearch={setSearch} />
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
