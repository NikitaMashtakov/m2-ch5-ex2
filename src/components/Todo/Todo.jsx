import PropTypes from 'prop-types';
import styles from './Todo.module.css';
import { useState } from 'react';
import { MdOutlineEdit, MdOutlineDelete, MdDone } from 'react-icons/md';
import { Button } from 'components/Button/Button';
import { useDeleteTodo } from 'utils/deleteTodo';
import { useCompleteTodo } from 'utils/completeTodo';
import { useEditTodo } from 'utils/editTodo';

export const Todo = ({ id, title, completed, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const { deleteTodo } = useDeleteTodo(setTodos);
  const { completeTodo } = useCompleteTodo(completed, setTodos);
  const { editTodo, confirmEditTodo } = useEditTodo(
    title,
    text,
    setText,
    setIsEditing,
    setTodos,
  );

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => completeTodo(id)}
        />

        {isEditing ? (
          <input
            className={styles.editTodo}
            type="text"
            name="edit-todo"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
        ) : (
          <label>{title}</label>
        )}
      </div>
      <div className={styles.buttons}>
        {isEditing ? (
          <Button onClick={() => confirmEditTodo(id)}>
            <MdDone />
          </Button>
        ) : (
          <Button onClick={editTodo}>
            <MdOutlineEdit />
          </Button>
        )}

        <Button onClick={() => deleteTodo(id)}>
          <MdOutlineDelete />
        </Button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
};
