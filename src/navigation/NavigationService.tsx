import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(
  name: keyof RootStackParamList,
  params?: Record<string, any>,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params);
  }
}

export function goBack() {
  return navigationRef?.goBack();
}

function push(routeName: string, params?: Record<string, any>) {
  throw new Error('Missing implementation of push');
}

function reset(routeName: string) {
  throw new Error('Missing implementation of reset');
}

function getCurrentRoute() {
  throw new Error('Missing implementation of getCurrentRoute');
}

const getRouteName = () => {
  return navigationRef.getCurrentRoute()?.name ?? '';
};

const NavigationService = {
  navigate,
  push,
  goBack,
  reset,
  getCurrentRoute,
  getRouteName,
};

export default NavigationService;
