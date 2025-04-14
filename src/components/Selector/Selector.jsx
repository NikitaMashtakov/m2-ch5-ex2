import PropTypes from 'prop-types';
import styles from './Selector.module.css';
export const Selector = ({ label, selectorId, options, selected, setSelected }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={selectorId}>{label}</label>
      <select
        id={selectorId}
        value={selected}
        onChange={({ target }) => setSelected(target.value)}
      >
        {options.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

Selector.propTypes = {
  label: PropTypes.string,
  selectorId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};
