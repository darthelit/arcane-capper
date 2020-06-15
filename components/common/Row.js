import React from 'react';
import { View } from 'react-native';

const Row = ({ children, style }) => {
  const { rowStyle } = styles;
  return (
    <View style={[rowStyle, style]}>
      {children}
    </View>
  );
}

const styles = {
  rowStyle:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent"
  }
}

export { Row };
