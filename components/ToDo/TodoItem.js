import React from 'react';
import { Button, CheckBox, TextInput, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../Recoil/Atoms';

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (value) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <View>
      <TextInput
        style={{ minWidth: 300, textAlign: 'center', alignSelf: 'center' }}
        value={item.text}
        onChangeText={editItemText}
      />
      <CheckBox checked={item.isComplete} onPress={toggleItemCompletion} />
      <Button title='X' onPress={deleteItem} />
    </View>
  );
}

export default TodoItem;
