import { useState } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import { Button } from 'components/Button/Button';
import { addTodo } from 'utils/addTodo';

export const Input = ({ setTodos }) => {
  const [text, setText] = useState('');
  const { add } = addTodo(setTodos, text);

  const onAddClick = () => {
    add();
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
