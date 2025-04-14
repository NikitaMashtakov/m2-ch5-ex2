import { useState } from 'react';
import styles from './Input.module.css';
// import { useAddTodo } from '../../hooks/useAddTodo';
import PropTypes from 'prop-types';

export const Input = ({ setTodos }) => {
  const [text, setText] = useState('');
  // const { addTodo } = useAddTodo(setTodos, text);
  const addTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        title: text,
        completed: false,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((newTodo) => {
        setTodos((prev) => [newTodo, ...prev]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={text}
        placeholder="Новая задача..."
        onChange={({ target }) => setText(target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text) {
            addTodo();
            setText('');
          }
        }}
      />
      <button
        onClick={() => {
          if (text) {
            addTodo();
            setText('');
          }
        }}
      >
        Добавить
      </button>
    </>
  );
};
Input.propTypes = {
  setTodos: PropTypes.func,
};
