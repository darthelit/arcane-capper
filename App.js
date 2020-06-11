import React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Drawer = createDrawerNavigator();
const Base = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A330C9' }}>
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
      <Button onPress={navigation.openDrawer} title='Open navigation drawer' />
      <Button onPress={() => navigation.navigate('Notifications')} title='Go to notifications' />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C41F3B' }}>
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
      <Button onPress={navigation.openDrawer} title='Open navigation drawer' />
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

function SideBar(props) {
  return (
    <>
      <LinearGradient
        colors={['#5140eb', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
        end={{ x: 0, y: 0 }}
        start={{ x: 1, y: 1 }}
      />
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
}

function Home() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <SideBar navigation={navigation} {...props} />}
      drawerStyle={{ backgroundColor: '#40C7EB' }}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Notifications' component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Base.Navigator headerMode='none'>
        <Base.Screen name='Home' component={Home} />
      </Base.Navigator>
    </NavigationContainer>
  );
}
