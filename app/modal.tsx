import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Stack, router } from 'expo-router';

export default function Modal() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options= {{ title: " Item modal"}} />
       <View style={{ flex: 1, flexDirection: "row", gap: 20}}>
        <TouchableOpacity onPress={() => router.back()}>
         <Text> Cancel </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => router.back()}>
         <Text> Save </Text>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
