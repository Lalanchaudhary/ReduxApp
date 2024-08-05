import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../ReduxTool/Action';
import Plus from 'react-native-vector-icons/AntDesign'
const AddTodo = ({ dispatch }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Get Things Done!</Text>
            <TextInput style={styles.input} value={text}   placeholderTextColor={'white'} onChangeText={setText}
                placeholder="Add a new todo" />
            <TouchableOpacity style={styles.add_btn} onPress={() => {
                if (text.trim()) { dispatch(addTodo(text)); setText(''); }
            }}>
                <Text style={styles.btn_text}>Add to do</Text>
                <Plus name='plus' size={22} color={'white'} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: { height: 40,
         borderColor: '#872bff', 
         borderWidth: 1, 
         marginBottom: 10,
          paddingHorizontal: 12,
          color:'white',

         },
         add_btn:{
            height:45,
            width:370,
            backgroundColor:'#872bff',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:7,
            margin:2,
            flexDirection:'row',
            gap:10
         },
         btn_text:{
            color:'white',
            fontSize:18,
            fontWeight:'bold'
         },
         heading:{
            color:'white',
            fontSize:28,
            fontWeight:'900',
            margin:'auto',
            marginVertical:20
         }
});
export default connect()(AddTodo);