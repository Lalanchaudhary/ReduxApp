import React from 'react';
import { Provider } from 'react-redux';
import store from './ReduxTool/Store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => (
<Provider store={store}>
<SafeAreaView style={styles.container}>
<AddTodo />
<Filter />
<TodoList />
</SafeAreaView>
</Provider>
);
const styles = StyleSheet.create({
     container: { 
        flex: 1,
        padding: 10,
        backgroundColor:'#1e1647'
     } ,

    });
export default App;