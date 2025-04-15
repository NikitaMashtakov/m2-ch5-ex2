export const useEditTodo = (title, text, setText, setIsEditing, setTodos) => {
  const editTodo = () => {
    setIsEditing(true);
    setText(title);
  };
  const confirmEditTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        title: text,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((updatedTodo) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
        setIsEditing(false);
      });
  };
  return { editTodo, confirmEditTodo };
};
