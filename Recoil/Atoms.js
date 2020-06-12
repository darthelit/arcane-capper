import { atom } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Tyndi Tinkerings', // default value (aka initial value)
});

const todoListState = atom({
  key: 'todoListState',
  default: []
});

export { textState, todoListState };

export default { textState, todoListState };