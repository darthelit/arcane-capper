import { selector } from 'recoil';
import { textState, todoListFilterState, todoListState } from './Atoms';

const charCountState = selector({
  key: 'charCountState', // uniqueId ( with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete);
      case 'Show Incomplete':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
});

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete). length;
    const totalIncompleteNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalIncompleteNum,
      percentCompleted
    }
  }
})

export { charCountState, filteredTodoListState, todoListStatsState };

export default { charCountState, filteredTodoListState, todoListStatsState };
