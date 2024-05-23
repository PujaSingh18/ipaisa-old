import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HEIGHT, WIDTH } from "../Dimensions/Dimension";
import Home from "../SvgImages/Home";
import WaterMain from '../WaterPay/Water_Home/WaterMain';
import BroadbandMain from '../broadband/Broadband_Home/BroadbandMain';
import MainDiscovery from '../homeScreen/Discovery/MainDiscovery';
import HomeMainScreen from "../homeScreen/HomeMainScreen";
const Tab = createBottomTabNavigator();
export const IpaisaTab = ({focused}) => {
    return(
    <Tab.Navigator
    initialRouteName="HomeMainScreen"
    backBehavior="BroadbandMain"
    screenOptions={({ route, focused }) => (
        {
            headerShown: false,
            tabBarShowLabel: true,
            Color:"green",
            tabBarStyle: {
                // ...STYLESCONFIG.elevation,
                elevation:7,
                height: HEIGHT * 0.07,
                borderRadius: 15,
                width: WIDTH * 0.9,
                marginHorizontal: WIDTH * 0.05,
                position: 'absolute',
                borderColor: "white",
                bottom: 10,
            },
            tabBarIconStyle: {
                position: 'relative',
            },
            tabBarIcon: ({ focused }) => {
                let icon;
                if (route.name === 'HomeMainScreen') {
                    icon = (
                      <Home style={{height:focused?40:30,width:focused?40:30,tintColor:focused?"red":"gray"}} />
                    );
                }
                else if (route.name === 'MainDiscovery') {
                    icon = (
                      <Home style={{height:focused?40:30,width:focused?40:30,tintColor:focused?"red":"gray"}} />
                    );
                }
                else if (route.name === 'WaterMain') {
                  icon = (
                    <Home style={{height:focused?50:40,width:focused?50:40,tintColor:focused?"red":"gray"}} />
                  );
              }
              else if (route.name === 'BroadbandMain') {
                icon = (
                  <Home style={{height:focused?40:30,width:focused?40:30,tintColor:focused?"red":"gray"}} />
                );
            }
            else if (route.name === 'BroadbandMain') {
              icon = (
                <Home style={{height:focused?40:30,width:focused?40:30,tintColor:focused?"red":"gray"}} />
              );
          }
                return icon;
            },
        })}>
    <Tab.Screen options={{ headerShown: false }} name="HomeMainScreen"  component={HomeMainScreen} />
    <Tab.Screen options={{ headerShown: false }} name="MainDiscovery" component={MainDiscovery} />
    <Tab.Screen options={{ headerShown: false }} name="WaterMain" component={WaterMain} />
    <Tab.Screen options={{ headerShown: false }} name="BroadbandMain" component={BroadbandMain} />
</Tab.Navigator >
    );
  }

