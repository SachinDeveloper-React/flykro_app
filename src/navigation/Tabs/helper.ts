import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export const ICONS = {
  Home: 'https://img.icons8.com/fluency-systems-filled/50/home.png',
  MyTrip: 'https://img.icons8.com/wired/64/center-direction.png',
  Account: 'https://img.icons8.com/ios/50/globe--v1.png',
};

export const getLabel = (
  options: BottomTabNavigationOptions,
  isFocused: boolean,
  route: {name: string},
  colors: {text: string},
) => {
  return typeof options.tabBarLabel === 'function'
    ? options.tabBarLabel({
        focused: isFocused,
        color: colors.text,
        position: 'below-icon',
        children: route.name,
      })
    : options.tabBarLabel !== undefined
    ? options.tabBarLabel
    : options.title !== undefined
    ? options.title
    : route.name;
};

export const onPress = (
  navigation: {
    emit: Function;
    navigate: Function;
  },
  route: {key: string; name: string; params?: any},
  isFocused: boolean,
) => {
  const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
  });

  if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(route.name, route.params);
  }
};

export const onLongPress = (
  navigation: {
    emit: Function;
    navigate: Function;
  },
  route: {
    key: string;
    name: string;
    params?: any;
  },
) => {
  navigation.emit({
    type: 'tabLongPress',
    target: route.key,
  });
};
