import React, { Component } from 'react';

class ToDo extends Component {
  deleteToDo(description) {
    this.props.deleteToDo(description);
  }

class ToDo extends Component {
  render() {
    return (
      <div className="wrapper">
        <button
          className="deleteToDo"
          onClick={e => this.deleteToDo(this.props.description)}
        >
          Delete
        </button>
        {this.props.deleteToDo}

      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
