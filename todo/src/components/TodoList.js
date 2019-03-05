import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class TodoList extends React.Component {

  toggleTodo = value => {
    this.props.toggleTodo(value);
  };
  deleteTodo = value => {
    this.props.deleteTodo(value);
  };

  render() {
    return (
      <ListGroup className="todo-list">
        {this.props.todoList.map(todo => (
          <ListGroupItem className='todo'
            color={todo.completed ? 'warning' : 'success'}
            onClick={() => this.toggleTodo(todo.value)}
          >
            {todo.value}
            <Button onClick={() => this.deleteTodo(todo.value)} style={todo.completed ? null : {display: 'none'}} color='danger'>Delete</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
};

const mapStateToProps = state => ({
  todoList: state.todos
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);