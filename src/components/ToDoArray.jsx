import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteForeverTwoTone";
import { Button, Tooltip } from "@material-ui/core/";
// import { Tooltip } from "@material-ui/core";

const ToDoArray = (props) => {
  return (
    <>
      <div className="todo_style">
        {/* <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        /> */}
        <Tooltip title="Delete Item">
          <Button
            onClick={() => {
              props.onSelect(props.id);
            }}
            className="btn_red"
          >
            <DeleteIcon />
          </Button>
        </Tooltip>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoArray;
