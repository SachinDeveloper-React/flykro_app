import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

// Define the type for props
type FlightCardProps = {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  origin: string;
  duration: string;
  layover: string;
  arrivalTime: string;
  destination: string;
  origin_terminal: string;
  destination_terminal: string;
  aircraft_Code: string;
  number: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressOut?: () => void;
  onPressIn?: () => void;
};

const FlightDetail: React.FC<FlightCardProps> = ({
  airlineLogo,
  airlineName,
  departureTime,
  origin,
  duration,
  layover,
  arrivalTime,
  destination,
  origin_terminal,
  destination_terminal,
  aircraft_Code,
  number,
}) => {
  return (
    <View style={styles.card}>
      {/* Airline Logo and Name */}
      <View style={styles.header}>
        <Image source={{uri: airlineLogo}} style={styles.logo} />
        <Text style={styles.airlineName}>
          {airlineName} | {number}
        </Text>
        <Text
          style={[
            styles.stops,
            {
              flex: 1,
              marginLeft: 10,
              fontSize: 10,
            },
          ]}>
          {aircraft_Code}
        </Text>
      </View>
      <Text style={styles.layover}></Text>
      {/* Flight Details */}
      <View style={styles.flightDetails}>
        <View style={styles.left_timeSection}>
          <Text style={styles.time}>{departureTime}</Text>
          <Text style={styles.location}>{origin}</Text>
          {origin_terminal && (
            <Text style={styles.location}>{origin_terminal} Terminal</Text>
          )}
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.duration}>{duration}</Text>
        </View>

        <View style={styles.right_timeSection}>
          <Text style={styles.time}>{arrivalTime}</Text>
          <Text style={styles.location}>{destination}</Text>
          {destination_terminal && (
            <Text style={styles.location}>{destination_terminal} Terminal</Text>
          )}
        </View>
      </View>
      {layover && <Text style={styles.layover}>{layover}</Text>}
    </View>
  );
};

export default FlightDetail;
