import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {MoreTabs, OfferSection, TopTabs} from './Components';
import {styles} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

type Props = {};

const Home = (props: Props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const handleSheetChange = useCallback((index: number) => {
    if (index === -1) {
      // Close the BottomSheet if it is dragged to the bottom
      sheetRef.current?.close();
    }
    console.log('handleSheetChange', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => sheetRef?.current?.close()}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <GestureHandlerRootView style={styles.container}> */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <TopTabs />
        <MoreTabs />
        <View style={styles.padding}>
          <OfferSection />
        </View>
      </ScrollView>

      {/* <BottomSheet
        ref={sheetRef}
        enableDynamicSizing={true}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        onChange={handleSheetChange}>
        <BottomSheetView style={{}}>
          {Array(20)
            .fill(20)
            .map((_, i) => {
              return <Text key={i}>{_}</Text>;
            })}
        </BottomSheetView>
      </BottomSheet> */}
      {/* </GestureHandlerRootView> */}
    </SafeAreaView>
  );
};

export default Home;
