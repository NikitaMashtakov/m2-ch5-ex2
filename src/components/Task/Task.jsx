import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { useState } from 'react';
export const Task = ({ id, title, completed, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  const changeCompleted = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        completed: !completed,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((updatedTodo) =>
        setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo))),
      );
  };
  const editTask = () => {
    setIsEditing(true);
    setText(title);
  };
  const confirmEditTask = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        title: text,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((updatedTodo) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
        setIsEditing(false);
      });
  };
  const deleteTask = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      // setIsEditing(false);
    });
  };
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => changeCompleted(id)}
      />

      {isEditing ? (
        <input
          type="text"
          name="edit-task"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      ) : (
        <label>{title}</label>
      )}

      {isEditing ? (
        <button onClick={() => confirmEditTask(id)}>Подтвердить</button>
      ) : (
        <button onClick={editTask}>Редактировать</button>
      )}

      <button onClick={() => deleteTask(id)}>Удалить</button>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
};
