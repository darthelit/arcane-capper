import React from 'react';
import {Text} from 'react-native';
import { useRecoilState } from 'recoil';
import { Picker } from '@react-native-community/picker';
import { todoListFilterState } from '../../Recoil/Atoms';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (itemValue, itemIndex) => {
    setFilter(itemValue);
  }

  return (
    <>
      <Text>Filter:</Text>
      <Picker selectedValue={filter} onValueChange={updateFilter} style={{ width: 200, height: 100 }}>
        <Picker.Item label="Show All" value="Show All" />
        <Picker.Item label="Show Completed" value="Show Completed" />
        <Picker.Item label="Show Incomplete" value="Show Incomplete" />
      </Picker>
    </>
  )
}

export default TodoListFilters;