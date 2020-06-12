import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { LinearGradient } from 'expo-linear-gradient';
import { todoListState } from '../../Recoil/Atoms';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList({ navigation }) {
  const todoList = useRecoilValue(todoListState);

  return (
    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8787ED'}}>
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </View>
  );
}

export default TodoList;
