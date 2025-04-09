import PropTypes from 'prop-types';
import styles from './Task.module.css';
export const Task = ({ id, title, completed }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={id} checked={completed} />
      <label>{title}</label>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
};
