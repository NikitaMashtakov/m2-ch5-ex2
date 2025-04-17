import { useState } from 'react';
import styles from './NewTodoInput.module.css';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { addTodo } from 'utils/addTodo';

export const NewTodoInput = ({ setTodos }) => {
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
        style={{ border: '1px solid #ccc' }}
      >
        Добавить
      </Button>
    </div>
  );
};
NewTodoInput.propTypes = {
  setTodos: PropTypes.func,
};
