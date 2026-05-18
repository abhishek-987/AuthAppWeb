import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome Home!</Text>
      <Link href="/login">Go to Login</Link>
      <Link href="/signup">Go to Signup</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
