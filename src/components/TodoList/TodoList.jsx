import { Todo } from 'components/Todo/Todo';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
export const TodoList = ({ todos, setTodos, debouncedSearch }) => {
  return (
    <div className={styles.container}>
      {todos
        .filter(({ title }) =>
          title.toLowerCase().includes(debouncedSearch.toLowerCase()),
        )
        .map(({ id, title, completed }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
  debouncedSearch: PropTypes.string,
};
