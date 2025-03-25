import { router, Stack } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Tab() {
  
//displays button on the right side of the header
  const headerRight = () => {
    return (
    <TouchableOpacity
      onPress={() => router.push("/modal")}
      style={{ marginRight: 10 }}
      >
      <FontAwesome name="plus-circle" size={28} color="blue"/>  
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.container}>
     <Stack.Screen options ={{headerRight}} />
       <View>
        <Text>Tab [Home]</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
