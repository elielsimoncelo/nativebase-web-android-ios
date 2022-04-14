import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";

function AppBar() {
  return <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm"  name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon  name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon  name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>;
}

const App: React.FC = () => {
    const [count, setCount] = useState(0);

  return (
    <NativeBaseProvider>
      <AppBar />
     <View style={styles.container}>
       <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
       <TouchableOpacity
         onPress={() => setCount(count + 1)}
         style={styles.button}>
         <Text>Click me!</Text>
       </TouchableOpacity>
       <Text>You clicked {count} times! XXXEEEEGGG!</Text>
     </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default App;