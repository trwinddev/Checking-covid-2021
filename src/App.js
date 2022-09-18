import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";

const App = () => {
  let [name, setName] = useState("Admin");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Mai", type: "wind" },
    { id: "todo2", title: "iu", type: "wind" },
    { id: "todo3", title: "ems", type: "gnohp" },
    { id: "todo4", title: "nhiuuuu", type: "gnohp" },
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, [address]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("No input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 100000),
      title: address,
      type: "wind",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo); //
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav></Nav> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Checking Covid-19 in 2021</h4>
        <Covid></Covid>

        {/* <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        ></Todo>

        <Todo
          todos={todos.filter((item) => item.type === "wind")}
          title={`wind todo`}
          deleteDataTodo={deleteDataTodo}
        ></Todo>
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Add
        </button> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
};

export default App;
