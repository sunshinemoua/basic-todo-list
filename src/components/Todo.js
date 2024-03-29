import classes from "./Todo.module.css";
import moment from "moment";

const Todo = (props) => {
  const todosList = props.todos.map((todo) => (
    <div
      key={Math.random()}
      className={classes.items}
      onClick={() => props.deleteTodo(todo)}
    >
      <ul>
        <li className={classes.todo}>
          {todo.input} <br />
          <span className={classes["todo-date"]}>
            {" "}
            {moment(todo.date).format("MM/DD/YYYY")}
          </span>
        </li>
      </ul>
    </div>
  ));

  return <div>{todosList}</div>;
};
export default Todo;
