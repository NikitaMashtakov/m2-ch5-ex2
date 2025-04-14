export const useDeleteTodo = (setTodos) => {
  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  };
  return { deleteTodo };
};
