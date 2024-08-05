import React from 'react';
import { View, Button, StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../ReduxTool/Action';
const Filter = ({ currentFilter, dispatch }) => {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.btns, { backgroundColor: currentFilter === 'SHOW_ALL' ? '#d3d2d4' : '#842eff' }]} onPress={() => dispatch(setVisibilityFilter('SHOW_ALL'))}
            disabled={currentFilter === 'SHOW_ALL'}>
            <Text style={[styles.btn_text, { color: currentFilter === 'SHOW_ALL' ? 'grey' : 'white' }]}>Show All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btns, { backgroundColor: currentFilter === 'SHOW_COMPLETED' ? '#d3d2d4' : '#842eff' }]} onPress={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}
            disabled={currentFilter === 'SHOW_COMPLETED'}>
            <Text style={[styles.btn_text, { color: currentFilter === 'SHOW_COMPLETED' ? 'grey' : 'white' }]}>Show Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btns, { backgroundColor: currentFilter === 'SHOW_ACTIVE' ? '#d3d2d4' : '#842eff' }]} onPress={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}
            disabled={currentFilter === 'SHOW_ACTIVE'}>
            <Text style={[styles.btn_text, { color: currentFilter === 'SHOW_ACTIVE' ? 'grey' : 'white' }]}>Show Active</Text>
        </TouchableOpacity>
    </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    btns: {
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: '#842eff',
        borderRadius: 5,
        // marginHorizontal:5
    },
    btn_text: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
const mapStateToProps = (state) => ({ currentFilter: state.visibilityFilter });
export default connect(mapStateToProps)(Filter);