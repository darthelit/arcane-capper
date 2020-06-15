import React from 'react';
import { useRecoilValue } from 'recoil';
import { LinearGradient } from 'expo-linear-gradient';
import { filteredTodoListState } from '../../Recoil/Selectors';
import {Container} from '../common';
import TodoItemCreator from './TodoItemCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItem from './TodoItem';
import { Wrapper } from '../common';

function TodoList({ navigation }) {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
      <Container style={{ backgroundColor: '#8787ED', height: '100%' }}>
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
        <Wrapper style={{ marginTop: 35}}>
          <TodoListStats />
          <TodoListFilters />
          <TodoItemCreator />
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </Wrapper>
      </Container>
  );
}

export default TodoList;
