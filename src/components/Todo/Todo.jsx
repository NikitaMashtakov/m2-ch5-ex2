import PropTypes from 'prop-types';
import styles from './Todo.module.css';
import { useEffect, useRef, useState } from 'react';
import { MdOutlineEdit, MdOutlineDelete, MdDone, MdClose } from 'react-icons/md';
import { Button } from 'components/Button/Button';
import { useDeleteTodo } from 'utils/deleteTodo';
import { useCompleteTodo } from 'utils/completeTodo';
import { useEditTodo } from 'utils/editTodo';

export const Todo = ({ id, title, completed, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const editInputRef = useRef(null);

  const { deleteTodo } = useDeleteTodo(setTodos);
  const { completeTodo } = useCompleteTodo(completed, setTodos);
  const { editTodo, confirmEditTodo } = useEditTodo(
    title,
    text,
    setText,
    setIsEditing,
    setTodos,
  );
  useEffect(() => {
    if (isEditing) editInputRef.current.focus();
  }, [isEditing]);
  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <input
          className={`${completed ? styles.checked : ''}`}
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => completeTodo(id)}
        />

        {isEditing ? (
          <input
            ref={editInputRef}
            className={styles.editTodo}
            type="text"
            name="edit-todo"
            value={text}
            onChange={({ target }) => setText(target.value)}
            onBlur={() => {
              editInputRef.current.focus();
            }}
          />
        ) : (
          <label style={{ border: 'none', '&:hover': { border: '1px solid black' } }}>
            {title}
          </label>
        )}
      </div>
      <div className={styles.buttons}>
        {isEditing ? (
          <Button onClick={() => confirmEditTodo(id)}>
            <MdDone size="20" fill="#00c700" />
          </Button>
        ) : (
          <Button onClick={editTodo}>
            <MdOutlineEdit size="20" fill="#6a75fd" />
          </Button>
        )}

        <div className={styles.buttons}>
          {isEditing ? (
            <Button onClick={() => setIsEditing(false)}>
              <MdClose size="20" fill="#ff4e4e" />
            </Button>
          ) : (
            <Button
              onClick={() => deleteTodo(id)}
              style={{
                '& :hover': { border: ' 1px solid black' },
              }}
            >
              <MdOutlineDelete size="20" fill="#ff4e4e" />
            </Button>
          )}
        </div>
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
