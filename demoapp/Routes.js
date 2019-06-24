import Register from './src/Register/screens/Register';
import MainScreen from './src/Main/screens/MainScreen';
import DrawerMenu from './src/DrawerMenu';
import AddUser from './src/Register/components/AddUser';
import EditUserScreen from './src/Register/screens/EditUserScreen';
import AddUserScreen from './src/Register/screens/AddUserScreen';
import LoginScreen from './src/Login/screens/LoginScreen';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: MainScreen
    },
    Register: {
      screen: Register
    }
  },
  {
    drawerWidth: 280,
    contentComponent: DrawerMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose'
  }
);

const NavStack = createStackNavigator(
  {
    MainScreen: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    },
    AddUser: {
      screen: AddUserScreen,
      navigationOptions: {
        header: null
      }
    },
    EditUser: {
      screen: EditUserScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const Routes = createAppContainer(NavStack);

export default Routes;
