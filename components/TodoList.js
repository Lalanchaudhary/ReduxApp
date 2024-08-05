import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo } from '../ReduxTool/Action';
import Check from 'react-native-vector-icons/Feather';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoList = ({ todos, dispatch, currentFilter }) => {
    console.log('====================================');
    console.log(currentFilter);
    console.log('====================================');
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'SHOW_ALL') return true;
        if (currentFilter === 'SHOW_COMPLETED') return todo.completed;
        if (currentFilter === 'SHOW_ACTIVE') return !todo.completed;
    });

    return (
        <View>
            {filteredTodos.map((todo, index) => (
                <View
                    key={index}
                    style={styles.todo}
                >
                    <Text style={[{ color: 'white', fontSize: 18 }, todo.completed && styles.completed]}>
                        {todo.id}.{todo.text}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity onPress={() => dispatch(toggleTodo("complete",index))} >
                            <Check name='check-square' size={22} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(toggleTodo("delete",index))}>
                        <Delete name='delete' size={22} color={'white'}  />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#842eff',
        color: 'white',
        paddingHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray'
    }
});

const mapStateToProps = (state) => ({
    todos: state.todos,
    currentFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(TodoList);
