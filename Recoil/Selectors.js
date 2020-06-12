import { selector } from 'recoil';
import { textState } from './Atoms';

const charCountState = selector({
  key: 'charCountState', // uniqueId ( with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export { charCountState };

export default { charCountState };
