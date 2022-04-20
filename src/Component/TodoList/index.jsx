import "./style.module.css";

const TodoList = ({ dataTodos, setDataTodos }) => {
  const handleHapus = (index) => {
    let newInput = [...dataTodos];

    newInput.splice(index, 1);
    
    setDataTodos(newInput);
  };

  return (
    <div className="list">
      <ul>
        {dataTodos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => handleHapus(index)}>Hapus</button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
