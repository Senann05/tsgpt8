import { useState, useCallback, useMemo, useEffect } from "react";
import TodoItem from "./ToDoItem";
import "./todo.css"
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState("");

  useEffect(()=>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
        setTodos(JSON.parse(savedTodos));
    }
  },[])

  const addTodo = useCallback(() => {
    if (task.trim() === "") return;
    const netTodos = [...todos ,task]
    setTodos(netTodos);
    localStorage.setItem("todos", JSON.stringify(netTodos))
    setTask("");
  }, [task, todos]);

  const deleteTodo = useCallback((index: number) => {
    const updatedTodos = todos.filter((_,i)=> i !==index)
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }, [todos]);

  const todoCount = useMemo(() => todos.length, [todos]);

  return (
    <div className="maincard">
      <h2>Todo List ({todoCount} görev)</h2>
      <input className="cardinput"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni görev ekle"
      />
      <button className="addbutton" onClick={addTodo}>Add</button>
      <ol className="cardol">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
