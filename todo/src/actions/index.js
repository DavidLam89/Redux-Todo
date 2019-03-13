export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = value => {
  return {
    type: TOGGLE_TODO,
    payload: value
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};

export const deleteTodo = value => {
  return {
    type: DELETE_TODO,
    payload: value
  };
};

