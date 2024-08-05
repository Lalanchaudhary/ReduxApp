export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
    });
    export const toggleTodo = (submitType,index) => ({
    type: 'TOGGLE_TODO',
    submitType,
    index,
    });
    export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
    });