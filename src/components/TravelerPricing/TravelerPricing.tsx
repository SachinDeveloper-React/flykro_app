import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {styles} from './styles';
import {FareDetail, Price} from './helper';

export type TravelerPricingAllProps = {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: Price;
  fareDetailsBySegment: FareDetail[];
};
type TravelerPricingProps = {
  travelerPricings: TravelerPricingAllProps[];
  index: number | string;
};

const TravelerPricing = ({travelerPricings, index}: TravelerPricingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Traveler Pricing</Text>

      <FlatList
        scrollEnabled={false}
        data={travelerPricings}
        keyExtractor={item => item.travelerId}
        renderItem={({item}) => {
          const abc = item.fareDetailsBySegment.filter(
            (_, i) => _.segmentId === index,
          );
          return (
            <View style={styles.travelerContainer}>
              {/* Traveler Info */}
              <Text style={styles.travelerType}>
                Traveler Type: {item.travelerType}
              </Text>
              <Text style={styles.price}>
                Price: {item.price.currency} {item.price.total} (Base:{' '}
                {item.price.currency} {item.price.base})
              </Text>
              <Text style={styles.fareOption}>
                Fare Option: {item.fareOption}
              </Text>

              {/* Fare Details */}
              {abc.map(segment => (
                <View key={segment.segmentId} style={styles.segmentContainer}>
                  {/* <Text style={styles.segmentHeader}>
                    Segment ID: {segment.segmentId}
                  </Text> */}
                  <Text style={styles.detail}>
                    Cabin: {segment.cabin}, Class: {segment.class}
                  </Text>
                  <Text style={styles.detail}>
                    Fare Basis: {segment.fareBasis}
                  </Text>
                  <Text style={styles.detail}>
                    Branded Fare: {segment.brandedFareLabel} (
                    {segment.brandedFare})
                  </Text>
                  {item.travelerType === 'ADULT' && (
                    <Text style={styles.detail}>
                      Checked Baggage: {segment.includedCheckedBags.weight}{' '}
                      {segment.includedCheckedBags.weightUnit}
                    </Text>
                  )}

                  {/* Amenities */}
                  {segment.amenities &&
                  Array.isArray(segment.amenities) &&
                  segment.amenities.length > 0 ? (
                    <View>
                      <Text style={styles.amenitiesHeader}>Amenities:</Text>
                      {segment.amenities.map((amenity, index) => (
                        <Text key={index} style={styles.amenity}>
                          - {amenity.description}{' '}
                          {amenity.isChargeable ? '(Chargeable)' : '(Free)'}
                        </Text>
                      ))}
                    </View>
                  ) : (
                    <Text style={styles.noAmenities}>
                      No amenities available
                    </Text>
                  )}
                </View>
              ))}
            </View>
          );
        }}
      />
    </View>
  );
};

export default TravelerPricing;
