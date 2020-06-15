import React from 'react';
import { View } from 'react-native';

const Card = ({ children, style, props }) => {


  const { darkCardStyle, cardStyle, overflowStyle } = styles;
  return (
    <View style={[cardStyle, style]}>
      <View style={overflowStyle}>
      {children}
      </View>
    </View>
  );
}

const styles = {

  cardStyle:{
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5

  },
  darkCardStyle:{
    backgroundColor: "#2B2D30",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5

  },
  overflowStyle:{
    borderRadius: 5,
    overflow: "hidden"
  }
}


export { Card };
