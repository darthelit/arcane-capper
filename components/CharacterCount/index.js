import React from 'react';
import { Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../Recoil/Selectors';

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <Text>Character Count: {count} </Text>;
}

export default CharacterCount;
