import { React, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  //   onChange
  const handleOnchange = (e) => {
    setNewTask(e.target.value);
  };
  // add-task
  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  //   update-task
  const updateTask = () => {
    setTasks(tasks.map((task, index) => (index === editingIndex ? newTask : task)));
    setEditingIndex(null);
    setNewTask("");
  };

  //   edit-task
  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  //   delete-task
  const deleteTask = (id) => {
    const updateItems = tasks.filter((_, index) => {
      return index !== id;
    });
    setTasks(updateItems);
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleOnchange}
            placeholder="Enter a task"
            className="todo-input"
          />
          {editingIndex !== null ? (
            <button onClick={updateTask} className="edit-button todo-button">
              Update
            </button>
          ) : (
            <button onClick={addTask} className="add-button todo-button">
              Add
            </button>
          )}
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{task}</span>
              <div className="todo-buttons">
                <button className="edit-button" onClick={() => editTask(index)}>
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
