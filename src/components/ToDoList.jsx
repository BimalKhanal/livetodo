import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ToDoArray from "./ToDoArray";
import "../assets/todoList.css";

const ToDoList = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const eventItem = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />

          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={eventItem}
          />
          <Tooltip title="Add Items">
            <Button onClick={listOfItems} className="btn_green">
              <AddIcon />
            </Button>
          </Tooltip>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoArray
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
