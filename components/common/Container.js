import React from 'react';
import { SafeAreaView  } from 'react-native';

const Container = ({ children, pointerEvents, style, onResize }) => {

  const { darkContainerStyle, containerStyle } = styles;

  const onLayout = (event) => {
    if (onResize) {
      const width = event.nativeEvent.layout.width;
      const height = event.nativeEvent.layout.height;
      onResize(width, height);
    }
  };

  return (
    <SafeAreaView  style={[containerStyle, style]} pointerEvents={pointerEvents || "auto"} onLayout={onLayout}>
      {children}
    </SafeAreaView >
  );
};

const styles = {

  containerStyle:{
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  darkContainerStyle:{
    flex: 1,
    backgroundColor: "#242526"
  }
}


export { Container };
