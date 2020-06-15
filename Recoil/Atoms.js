import { atom } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Tyndi Tinkerings', // default value (aka initial value)
});

const todoListState = atom({
  key: 'todoListState',
  default: []
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
});

const pokemonState = atom({
  key: 'pokemonState',
  default: [],
})

export { textState, todoListState, todoListFilterState, pokemonState };

export default { textState, todoListState, todoListFilterState, pokemonState };