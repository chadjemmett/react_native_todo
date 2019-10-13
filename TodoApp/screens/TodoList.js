import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'


export default function TodoList(props) {
  console.log(props)
  return (
      <View style={styles.listContainer}>
        <Icon
          name={props.checked ? 'check' : 'square'}
          size={30}
          color='black'
          style={{marginLeft: 15}}
          onPress={props.setChecked}
          />
        <View>
        {props.checked && <View style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
        </View>
        <Icon 
          name='trash-2'
          size={38}
          color='red'
          style={{marginLeft: 'auto'}}
          onPress={props.deleteTodo}
        />
      </View>
      )
}



const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },

  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'green',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',

  },

  verticalLine: {
    borderBottomColor: "green",
    borderBottomWidth: 4,
    marginLeft: 10,
    width: "100%",
    position: 'absolute',
    marginTop: 15,
    fontWeight: 'bold',

  },

  header: {
    marginTop: '15%',
    fontSize: 20,
    color: 'red',
    paddingBottom: 10,
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },

  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%',
  }
});
