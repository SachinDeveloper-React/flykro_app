import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {theme} from '../../../../../../../utils';

// Define the type for props
type TwoWayFlightCardInternationalProps = {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  origin: string;
  duration: string;
  stops?: string;
  layover: string;
  arrivalTime: string;
  destination: string;
  distanceFromDestination?: string;
  discountText?: string;
  refundable: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressOut?: () => void;
  onPressIn?: () => void;
  selected?: boolean;
};

const TwoWayFlightCardInternational: React.FC<
  TwoWayFlightCardInternationalProps
> = ({
  airlineLogo,
  airlineName,
  departureTime,
  origin,
  duration,
  stops,
  layover,
  arrivalTime,
  destination,
  distanceFromDestination,
  discountText = '',
  refundable,
  onPress,
  onLongPress,
  onPressOut,
  onPressIn,
  selected = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      onPressIn={onPressIn}
      onPress={onPress}
      style={[styles.card]}>
      {/* Airline Logo and Name */}
      <View
        style={[
          styles.header,
          {
            justifyContent: 'space-between',
          },
        ]}>
        <View style={styles.header}>
          <Image source={{uri: airlineLogo}} style={styles.logo} />
          <Text style={styles.airlineName}>{airlineName}</Text>
        </View>
      </View>

      <Text style={styles.layover}>{layover}</Text>

      {/* Flight Details */}
      <View style={styles.flightDetails}>
        <View style={styles.left_timeSection}>
          <Text style={styles.time}>{departureTime}</Text>
          <Text style={styles.location}>{origin}</Text>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.stops}>{stops}</Text>
        </View>

        <View style={styles.right_timeSection}>
          <Text style={styles.time}>{arrivalTime}</Text>
          <Text style={styles.location}>
            {destination}
            {distanceFromDestination && <Text style={styles.subtext}></Text>}
          </Text>
        </View>
      </View>

      {/* Discount Section */}
      {discountText && (
        <View style={styles.discountSection}>
          <Text style={styles.discountText}>{discountText}</Text>
        </View>
      )}

      {/* Refund Policy */}
      {refundable && <Text style={styles.refundPolicy}>{refundable}</Text>}
    </TouchableOpacity>
  );
};

export default TwoWayFlightCardInternational;
