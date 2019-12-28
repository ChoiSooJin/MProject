import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from './screens/MapScreen';

const stackNavigator = createStackNavigator({
  Home: {
    screen: MapScreen,
  },
});

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
