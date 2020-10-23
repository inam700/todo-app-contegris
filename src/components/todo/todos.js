import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos } from "../../actions/todoActions";

class Todos extends Component {
  state = {
    completed: this.props.todos.completed,
  };
  componentDidMount() {
    this.props.getTodos();
  }
  handleCheck = () => {
    this.setState({
      completed: true,
    });
    console.log("Completed");
  };

  render() {
    const { todos, completed } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Todos</span> List
        </h1>
        <Link
          to="add_todo"
          style={{
            textDecoration: "none",
            border: "1px solid #000",
            background: "skyblue",
            color: "#000",
            padding: "7px",
            marginBottom: "10px",
          }}
        >
          Add Todo
        </Link>
        <div style={{ marginTop: "20px" }}>
          {todos.slice(0, 6).map((todo) => (
            <div key={todo.id} className="card" style={{ marginTop: "5px" }}>
              <p style={{ fontWeight: "bold" }}>Todo Name: {todo.title}</p>
              <p>Todo Description: {todo.desc}</p>
              <div>
                Mark as Completed:
                <input type="checkbox" onChange={this.handleCheck} />
                {this.state.completed ? (
                  <div style={{ color: "green" }}>This Task is Completed</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { getTodos })(Todos);
