import { combineReducers } from 'redux';
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false,id : state.length + 1 }];
        case 'TOGGLE_TODO':

          switch(action.submitType)
          {
            case "complete":
                return state.map((todo, index) =>

    
                    index === action.index ? { ...todo, completed: !todo.completed } : todo
                );
                break;
            case "delete":
                return state.filter((todo,index)=>
                   index!==action.index 
                )
                break;
                default:
                    return state
          }

        default:
            return state;
    }
};
const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
export default combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
});