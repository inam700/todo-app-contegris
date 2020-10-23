import React, { Component } from "react";
import TextInputGroup from "./TextInputGroup";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todoActions";

class AddTodo extends Component {
  state = {
    title: "",
    desc: "",
    completed: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, desc, completed } = this.state;

    const newTodo = {
      title,
      desc,
      completed,
    };

    this.props.addTodo(newTodo);

    // Clear State
    this.setState({
      title: "",
      desc: "",
      completed: false,
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, completed, desc } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Todo</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Todo"
              name="title"
              placeholder="Enter Todo Name"
              value={title}
              onChange={this.onChange}
            />
            <TextInputGroup
              label="Description"
              name="desc"
              placeholder="Enter Todo Description"
              value={desc}
              onChange={this.onChange}
            />
            <TextInputGroup
              type="checkbox"
              label="Completed"
              name="completed"
              value={completed}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Add Todo"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
