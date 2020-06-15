import React from 'react';
import { Button, TextInput, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../Recoil/Atoms';
import { Row, Wrapper } from '../common';

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
    // <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Wrapper style={{ alignItems: 'center', margin: 5 }}>
        <Row>
          <TextInput
            style={{ height: 45, width: '50%', textAlign: 'center', alignSelf: 'center', backgroundColor: 'grey' }}
            value={item.text}
            onChangeText={editItemText}
          />
          <CheckBox value={item.isComplete} onChange={toggleItemCompletion} />
          <Button title='X' onPress={deleteItem} />
        </Row>
      </Wrapper>
    // </View>
  );
}

export default TodoItem;
