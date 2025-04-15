import { useEffect, useState } from 'react';
import { TodoList } from 'components/TodoList/TodoList';
import { Input } from 'components/Input/Input';
import useDebouncedValue from 'hooks/useDebouncedValue';
import { Header } from 'components/Header/Header';

import styles from './AllTodoPage.module.css';

const AllTodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('_sort=id&_order=desc');
  const debouncedSearch = useDebouncedValue(search, 250);

  useEffect(() => {
    fetch(`http://localhost:3000/todos?${selectedSort}`)
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
      })
      .catch((error) => console.log(error));
  }, [selectedSort]);

  return (
    <div className={styles.container}>
      <Header search={search} setSearch={setSearch} setSelectedSort={setSelectedSort} />

      <Input setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} debouncedSearch={debouncedSearch} />
    </div>
  );
};

export default AllTodoPage;
