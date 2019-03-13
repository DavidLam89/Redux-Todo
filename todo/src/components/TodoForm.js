import React from 'react';
import { connect } from 'react-redux';
import { addTodo, clearCompleted } from '../actions';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class TodoForm extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    return (
      <form>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>New Task:</InputGroupText>
          </InputGroupAddon>
          <Input
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder=""
          />
        </InputGroup>
        <Button color="primary" onClick={this.addTodo}>Add Task</Button>
        <Button color="danger" onClick={this.clearCompleted}>Clear Completed Task</Button>
      </form>
    );
  }
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { addTodo, clearCompleted })(TodoForm);