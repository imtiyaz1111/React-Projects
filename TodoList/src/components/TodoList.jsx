import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const handleInput = (e) => {
    const data = e.target.value;
    setInput(data);
  };
//   add items
  const addItem = () => {
    if(!input)
    {
      toast.error("please fill your task")
    }
    else{
      // const allInputData={id: new Date().getTime().toString(), name:input}
      setItems([...items,input])
      setInput("")
    }
  };
//   delete items
  const deleteItems = (id) => {
    const updateItems = items.filter((curEle, index) => {
      return index !== id;
    });
    toast("Delete Successfully")
    setItems(updateItems);
  };
//   delete all items
  const allDeleteItems = () => {
    toast("All Delete Successfully")
    setItems([]);
  };
  // mark completed
  const mark=()=>{
    toast("Mark As Completed")

  }
  return (
    <div className="TodoWrapper">
          <ToastContainer/>
      <h1>TodoList!</h1>
      <div className="TodoForm">
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          onChange={handleInput}
          value={input}
        />
        <button onClick={addItem} className="todo-btn">
          Add Task
        </button>
      </div>
      {/* todo items */}
      <div className="items">
        {items.map((curEle,index) => {
          return (
            <>
              <div className="Todo" key={index}>
                <input type="checkbox"  onClick={mark} name="" id="" />
                <p> {curEle}</p>
                <div>
                  <FontAwesomeIcon
                    className="delete-icon"
                    onClick={()=>deleteItems(index)}
                    icon={faTrash}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="btn">
        <button type="submit" onClick={allDeleteItems} className="todo-btn">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
