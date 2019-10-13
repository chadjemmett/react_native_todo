import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import TodoList from './screens/TodoList';
// import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  addTodo = () => {
    console.log("pressing add todo", value)
    if(value.length > 0) {
      setTodos([...todos, {text: value, key: Date.now(), checked: false}]);
      setValue('');
    }

    checkTodo = id => {
      setTodos(
          todos.map(todo => {
            if(todo.key === id) todo.checked = !todo.checked;
            return todo
          })
          )

    }

    deleteTodo = id => {
      setTodos(
          todos.filter(todo => {
            if (todo.key !== id) return true
          })
          )

    }

  }

  return(
      <View style={styles.container}>
        <Text style={styles.header}> Todo List </Text>
        <View style={styles.textInputContainer}>
          <TextInput placeholder="What do you want to do today"
            multiline={true}
            onChangeText={value => setValue(value)}
            value={value}
          />
          <TouchableOpacity onPress={() => addTodo()}>
            <Icon name="plus" size={30} color="blue" style={{marginLeft: 15}} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{width: '100%'}}>
        {todos.map(item => (
          <TodoList 
            text={item.text} 
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
            />
        ))}
        </ScrollView>

      </View>
      )
}




async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
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
