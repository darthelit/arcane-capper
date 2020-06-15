import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../Recoil/Selectors';
import { Card, Wrapper } from '../common';

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalIncompleteNum, percentCompleted} = useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return(
    <>
      <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Total items: {totalNum}</Text>
        <Text>Items completed: {totalCompletedNum}</Text>
        <Text>Items not completed: {totalIncompleteNum}</Text>
        <Text>Percent completed: {formattedPercentCompleted}</Text>
    </Card>
    </>
  );
}

export default TodoListStats;