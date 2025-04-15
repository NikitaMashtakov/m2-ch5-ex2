import { SearchBar } from 'components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Selector } from 'components/Selector/Selector';
import { OPTIONS } from 'constants/sortingOptions';
export const Header = ({ search, setSearch, setSelectedSort }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список дел:</h1>
      <SearchBar className={styles.search} search={search} setSearch={setSearch} />
      <Selector
        label={'Сортировка'}
        selectorId={'sortingSelector'}
        options={OPTIONS}
        setSelected={setSelectedSort}
      />
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSelectedSort: PropTypes.func,
};
