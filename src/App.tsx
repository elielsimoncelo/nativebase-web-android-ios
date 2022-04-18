import * as React from 'react';
import { Button, NativeBaseProvider, ArrowBackIcon, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}>Go to Profile</Button>
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate('Notifications')}>Go to Notifications</Button>
            <Button title="Go back" onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}>Go to Settings</Button>
            <Button title="Go back" onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button variant="link" bg="#fff" onPress={() => navigation.goBack()}>
                            <ArrowBackIcon size="5" mt="0.5" color="black" />
                        </Button>                    
                    ),
                })}
            />
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button variant="link" bg="#fff" onPress={() => navigation.goBack()}>
                            <ArrowBackIcon size="5" mt="0.5" color="black" />
                        </Button>                    
                    ),
                })}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} 
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button variant="link" bg="#fff" onPress={() => navigation.goBack()}>
                            <ArrowBackIcon size="5" mt="0.5" color="black" />
                        </Button>                    
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
