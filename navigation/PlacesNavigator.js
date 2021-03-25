import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PlacesListScreen from '../pages/PlacesListScreen';
import PlaceDetailScreen from '../pages/PlaceDetailScreen';
import NewPlaceScreen from '../pages/NewPlaceScreen';
import MapScreen from '../pages/MapScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator(
  {
    PlacesList: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
