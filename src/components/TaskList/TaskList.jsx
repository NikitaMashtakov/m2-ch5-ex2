import { Task } from '../Task/Task';
import PropTypes from 'prop-types';
import styles from './TaskList.module.css';
export const TaskList = ({ todos }) => {
  return (
    <div className={styles.container}>
      <h1> Список дел:</h1>
      {todos.map(({ id, title, completed }) => (
        <Task key={id} id={id} title={title} completed={completed} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
