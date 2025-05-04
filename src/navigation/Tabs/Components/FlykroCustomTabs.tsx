import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import {PlatformPressable} from '@react-navigation/elements';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SCREEN_WIDTH} from '../../../utils';
import {styles} from '../styles';
import {getLabel, ICONS, onLongPress, onPress} from '../helper';

const FlykroCustomTabs = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const translateX = React.useRef(new Animated.Value(0)).current;
  const {colors} = useTheme();
  const tabWidth = SCREEN_WIDTH / state.routes.length;

  // Animate indicator position when active tab changes
  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: tabWidth * state.index,
      duration: 250, // Duration of the animation
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
      }}>
      <View style={styles.bottom_tab_container}>
        {/* Indicator */}
        <Animated.View
          style={[
            styles.bottom_tab_indicator,
            {
              width: tabWidth,
              transform: [{translateX}],
            },
          ]}
        />
        {/* Tabs */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {state.routes.map((route, index: number) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;

            const label = getLabel(options, isFocused, route, colors);

            return (
              <PlatformPressable
                key={index}
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={() => onPress(navigation, route, isFocused)}
                onLongPress={() => onLongPress(navigation, route)}
                style={styles.bottom_tab_Items}>
                <Image
                  source={{
                    uri: ICONS[route.name as keyof typeof ICONS],
                  }}
                  style={[
                    styles.bottom_tab_icon,
                    {
                      tintColor: isFocused ? colors.primary : colors.gray,
                    },
                  ]}
                />
                <Text
                  style={{
                    color: isFocused ? colors.primary : colors.text,
                    textAlign: 'center',
                    fontSize: 10,
                    fontWeight: isFocused ? 'bold' : 'normal',
                  }}>
                  {label}
                </Text>
              </PlatformPressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlykroCustomTabs;
