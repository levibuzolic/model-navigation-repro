
import {registerRootComponent} from 'expo'
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Screen = ({text, button}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    }}
  >
    <Text style={{fontSize: 14, textAlign: 'center'}}>{text}</Text>
    {button}
  </View>
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Primary" component={Primary} />
        <Stack.Screen name="Modal" component={Modal} options={{presentation: 'modal', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ModalNavigator = createNativeStackNavigator();

const Modal = () => (
  <ModalNavigator.Navigator>
    <ModalNavigator.Screen name="One" component={One} />
    <ModalNavigator.Screen name="Two" component={Two} />
  </ModalNavigator.Navigator>
);

const Primary = ({navigation}) => (
  <Screen
    text="Primary"
    button={<Button title="Open Modal" onPress={() => navigation.push('Modal', {screen: 'One'})} />}
  />
);

const One = ({navigation}) => (
  <Screen
    text="One"
    button={
      <>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Open second modal" onPress={() => navigation.push('Modal', {screen: 'Two'})} />
      </>
    }
  />
);

const Two = ({navigation}) => (
  <Screen
    text="Two"
    button={
      <>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Pop to top" onPress={() => navigation.popToTop()} />
      </>
    }
  />
);

registerRootComponent(App);
