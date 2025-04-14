import { useState } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import { Button } from 'components/Button/Button';
import { useAddTodo } from 'hooks/useAddTodo';

export const Input = ({ setTodos }) => {
  const [text, setText] = useState('');
  const { addTodo } = useAddTodo(setTodos, text);

  const onAddClick = () => {
    addTodo();
    setText('');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={text}
        placeholder="Новая задача..."
        onChange={({ target }) => setText(target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text) {
            onAddClick();
          }
        }}
      />
      <Button
        onClick={() => {
          if (text) {
            onAddClick();
          }
        }}
      >
        <MdAdd />
      </Button>
    </div>
  );
};
Input.propTypes = {
  setTodos: PropTypes.func,
};
