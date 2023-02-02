// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView ,Platform ,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './components/Login/Login'
import  Register  from './components/Rougister/Register'

import TelaProximosDias from './src/telas/TelaProximosDias.js';
import TelaTempoHoje from './src/telas/TelaTempoHoje.js';
import DrawerContent from './src/componentes/DrawerContent';

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;





function Weater() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={DrawerContent}>
      <Drawer.Screen name="Main" component={TelaTempoHoje}/>
    </Drawer.Navigator>
  );
}




const App = () => {
  const Stack = createNativeStackNavigator();
  return (
        
    <NavigationContainer cardStyle={{flex:1}}>
       {/* <StatusBar  barStyle="dark-content" translucent backgroundColor={'transparent'} />  */}
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />    
   
     <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
     <Stack.Screen name="Weater" component={Weater} options={{headerShown: false}}/>
     <Stack.Screen name="Next 7 days" component={TelaProximosDias} options={{headerShown: false}}/>
   
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}




export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    color: 'black',
  },
});
