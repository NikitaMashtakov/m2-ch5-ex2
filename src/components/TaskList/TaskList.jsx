import { Task } from '../Task/Task';
import PropTypes from 'prop-types';
import styles from './TaskList.module.css';
export const TaskList = ({ todos, setTodos, search }) => {
  return (
    <div className={styles.container}>
      {todos
        .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
        .map(({ id, title, completed }) => (
          <Task
            key={id}
            id={id}
            title={title}
            completed={completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
  search: PropTypes.string,
};
