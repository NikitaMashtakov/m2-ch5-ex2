import { useEffect, useState } from 'react';
import { TodoList } from 'components/TodoList/TodoList';
import { Input } from 'components/Input/Input';
import { SearchBar } from 'components/SearchBar/SearchBar';
import useDebounce from 'hooks/useDebounce';

const AllTodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 250);

  useEffect(() => {
    fetch('http://localhost:3000/todos?_sort=id&_order=desc')
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Список дел:</h1>
      <Input setTodos={setTodos} />
      <SearchBar search={search} setSearch={setSearch} />
      <TodoList todos={todos} setTodos={setTodos} debouncedSearch={debouncedSearch} />
    </>
  );
};

export default AllTodoPage;
