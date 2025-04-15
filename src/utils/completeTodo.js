export const useCompleteTodo = (completed, setTodos) => {
  const completeTodo = (id) => {
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
  return { completeTodo };
};
