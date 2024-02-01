import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LaptopsList } from './screens/LaptopsList.js';
import { LaptopForm } from './screens/LaptopsForms.js'

export default function App() {

  // Tag nuevo
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="LaptopsListNav">
        <StackLaptops.Screen name="LaptopsListNav"
          component={LaptopsList}
        />
        <StackLaptops.Screen name="LaptopFormNav"
          component={LaptopForm}
        />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}


