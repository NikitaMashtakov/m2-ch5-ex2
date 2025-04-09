import { useEffect, useState } from 'react';
// import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((loadedData) => setTodos(loadedData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <TaskList todos={todos} />
    </>
  );
}

export default App;
