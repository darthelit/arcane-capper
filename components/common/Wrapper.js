import React from 'react';
import { View } from 'react-native';

const Wrapper = ({ children, style, pointerEvents = "auto" }) => {

  const { wrapperStyle } = styles;
  return (
    <View style={[wrapperStyle, style]} pointerEvents={pointerEvents}>
      {children}
    </View>
  );
}

const styles = {

  wrapperStyle:{
    backgroundColor: "transparent"
  }
}

export { Wrapper };
