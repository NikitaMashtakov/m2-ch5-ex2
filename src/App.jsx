import { useEffect, useState } from 'react';
// import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';
import { Input } from './components/Input/Input';
import { SearchBar } from './components/Searchbar/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
        console.log(loadedData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Список дел:</h1>
      <Input setTodos={setTodos} />
      <SearchBar search={search} setSearch={setSearch} />
      <TaskList todos={todos} setTodos={setTodos} search={search} />
    </>
  );
}

export default App;
