export const addTodo = (setTodos, text) => {
  const add = () => {
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
  return { add };
};
