import PropTypes from 'prop-types';
import styles from './Selector.module.css';
import Select from 'react-select';

export const Selector = ({ selectorId, options, setSelected }) => {
  return (
    <div className={styles.container}>
      <Select
        name={selectorId}
        options={options}
        defaultValue={options[0]}
        onChange={({ newValue }) => setSelected(newValue)}
      />
      {/* {console.log(count++)} */}
    </div>
  );
};

Selector.propTypes = {
  selectorId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  setSelected: PropTypes.func,
};
