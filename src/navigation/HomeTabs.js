import BluetoothS from "../Screens/BluetoothS";
import Profile from "../Screens/Profile";
import ServicesCatalog from "../Screens/ServicesCatalog";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LogoTitle from '../utils/LogoTitle';

const Tab = createBottomTabNavigator();
function HomeTabs() {
    return (
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === (screen.home)) {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === (screen.blueetooth)) {
            iconName = focused ? 'bluetooth' : 'bluetooth-outline';
          }
          else if (route.name === (screen.servicesCatalog)) {
            iconName = focused ? 'create' : 'create-outline';
          }
          else if (route.name === (screen.profile)) {
            iconName = focused ? 'person' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabHeaderStyle: {
          backgroundColor: '#D9D9D9',
        },
        tabHeaderTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      
      })}>
        <Tab.Screen name={screen.home} component={Home}
        options={{headerShown: false}} />
        <Tab.Screen name={screen.blueetooth} component={BluetoothS}/>
        <Tab.Screen name={screen.servicesCatalog} component={ServicesCatalog} />
        <Tab.Screen name={screen.profile} 
        component={Profile}
        options={{ headerRight: (props) => <LogoTitle {...props} /> }}
         />
      </Tab.Navigator>
    );
  }

  export default HomeTabs;