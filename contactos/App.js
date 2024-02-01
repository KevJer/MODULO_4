import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {ContactList} from './screens/ContacList.js';
import {ContacsForm} from './screens/ContactsForms.js'


export default function App() {

  // Tag nuevo
  const StackContacts = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="ContacListNav">
        <StackContacts.Screen name="ContacListNav"
        component={ContactList}
        />
        <StackContacts.Screen name="ContactsFormNav"
        component={ContacsForm}
        />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}


