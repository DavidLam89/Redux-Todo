import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED, DELETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Have fun.',
      completed: false
    },
    {
      value: 'Take some rest.',
      completed: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      const newTodo = {
        value: action.payload,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.value === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.value !== action.payload)
      };

    default:
      return state;
  };
};