import React, {useState, useCallback, ReactNode} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Alert,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = ({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const maxTranslateY = SCREEN_HEIGHT * 0.3; // Adjust height of the bottom sheet

  const animateTo = useCallback(
    (destination: number) => {
      'worklet';
      translateY.value = withSpring(destination, {damping: 50});
    },
    [translateY],
  );

  // Open or close based on `isVisible`
  React.useEffect(() => {
    if (isVisible) {
      animateTo(maxTranslateY);
    } else {
      animateTo(SCREEN_HEIGHT);
    }
  }, [isVisible, animateTo]);

  const gesture = Gesture.Pan()
    .onUpdate(event => {
      translateY.value = Math.max(
        maxTranslateY,
        translateY.value + event.translationY,
      );
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT * 0.25) {
        runOnJS(onClose)(); // Call onClose on the JavaScript thread
      } else {
        animateTo(maxTranslateY); // Snap back to the open position
      }
    })
    .simultaneousWithExternalGesture(Gesture.Native());

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const backdropOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [maxTranslateY, SCREEN_HEIGHT],
      [0.5, 0],
    ),
  }));

  return (
    <>
      {isVisible && (
        <>
          {/* Backdrop */}
          <TouchableWithoutFeedback onPress={onClose}>
            <Animated.View style={[styles.backdrop, backdropOpacity]} />
          </TouchableWithoutFeedback>
          <View>
            {/* Bottom Sheet */}
            <GestureDetector gesture={gesture}>
              <Animated.View
                style={[styles.bottomSheetContainer, animatedStyle]}>
                <View style={styles.handle} />
                {/* Content */}
                {/* <ScrollView
                  contentContainerStyle={{
                    // flex: 1,
                    paddingBottom: insets.bottom + 200, // Ensure enough space at the bottom
                  }}
                  showsVerticalScrollIndicator={false} // Optional: To hide the scroll bar
                  keyboardShouldPersistTaps="handled"
                  nestedScrollEnabled={true}>
                  {children}
                </ScrollView> */}
                <View style={styles.content}>{children}</View>
              </Animated.View>
            </GestureDetector>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: 1,
  },
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT, // Adjust height as needed
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default BottomSheet;
