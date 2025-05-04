import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {offers} from '../../helper';
import {useTheme} from '@react-navigation/native';
import {styles} from './styles';
import {animatedCards} from './helper';
import {SCREEN_WIDTH, theme} from '../../../../utils';

type Props = {};

const OfferSection = (props: Props) => {
  const {colors, dark, fonts} = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const subListRef = useRef<FlatList>(null);
  const [selectedOffer, setSelectedOffer] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextLeft}>Offers</Text>
        <Text style={styles.headerTextRight}>View All</Text>
      </View>

      <View>
        <FlatList
          data={offers}
          keyExtractor={item => item.id.toString()}
          horizontal
          contentContainerStyle={{
            marginVertical: 10,
            backgroundColor: '#fff',
            minWidth: SCREEN_WIDTH,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderWidth: index === selectedOffer ? 1 : 0,
                  borderColor:
                    index === selectedOffer ? colors.primary : 'transparent',
                  borderRadius: 10,
                }}
                onPress={() => {
                  setSelectedOffer(index);
                  subListRef.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color:
                      index === selectedOffer
                        ? colors.primary
                        : theme.colors.gray,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <Animated.FlatList
          ref={subListRef}
          data={offers[selectedOffer].subList}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SCREEN_WIDTH * 0.6} // Snaps to the size of each card
          decelerationRate="fast"
          // bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          scrollsToTop={true}
          onEndReachedThreshold={0}
          renderItem={({item, index}) => {
            const {scale, opacity} = animatedCards({
              index,
              scrollX,
            });
            return (
              <Animated.View
                style={[
                  styles.card,
                  {
                    transform: [{scale}],
                    opacity,
                  },
                ]}>
                <Image source={{uri: item.image}} style={styles.image} />
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default OfferSection;
