import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottom_tab_container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },

  bottom_tab_indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderTopColor: '#87CEEB',
  },

  bottom_tab_Items: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },

  bottom_tab_icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
