import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {theme} from '../../../../../../../utils';

// Define the type for props
type TwoWayFlightCardProps = {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  origin: string;
  duration: string;
  stops: string;
  layover: string;
  arrivalTime: string;
  destination: string;
  distanceFromDestination?: string;
  price: string | number;
  discountText?: string;
  refundable: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressOut?: () => void;
  onPressIn?: () => void;
  selected?: boolean;
};

const TwoWayFlightCard: React.FC<TwoWayFlightCardProps> = ({
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
  price,
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
      style={[
        styles.card,
        {
          backgroundColor: selected
            ? theme.colors.lightprimary
            : theme.colors.card,
        },
      ]}>
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
        {/* Price Section */}
        <View
          style={[
            styles.priceSection,
            {
              alignItems: 'flex-end',
            },
          ]}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.priceLabel}>per adult</Text>
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

export default TwoWayFlightCard;
