import React, { useState } from 'react';
// import { TextInput, , View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { Button, TextInput } from 'react-native-paper';
import { todoListState } from '../../Recoil/Atoms';
import { Wrapper } from '../common';

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <Wrapper>
      <TextInput
        label="Todo Item"
        value={inputValue}
        onChangeText={onChange}
        placeholder="Blah blah blah"
        onSubmitEditing={addItem}
        // style={{ height: 45, minWidth: 300, textAlign: 'center', alignSelf: 'center' }}
      />
      {/* <Button onPress={addItem} mode="contained">Add</Button> */}
    </Wrapper>
  );
}

export default TodoItemCreator;
