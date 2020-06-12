import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../Recoil/Selectors';

function TodoListStats() {
    const { totalNum, totalCompletedNum, totalIncompleteNum, percentCompleted} = useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Total items: {totalNum}</Text>
            <Text>Items completed: {totalCompletedNum}</Text>
            <Text>Items not completed: {totalIncompleteNum}</Text>
            <Text>Percent completed: {formattedPercentCompleted}</Text>
        </View>
    );
}

export default TodoListStats;