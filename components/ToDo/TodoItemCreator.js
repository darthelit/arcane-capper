import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../Recoil/Atoms';

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

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={onChange}
        style={{ minWidth: 300, textAlign: 'center', alignSelf: 'center' }}
      />
      <Button title='Add' onPress={addItem} />
    </View>
  );
}

export default TodoItemCreator;
