import {Alert} from 'react-native';

interface Traveller {
  id: number;
  name: string;
  limit: string;
  list: {
    id: number;
    number: number;
    select: boolean;
  }[];
}

export const handleTravellerSelection = (
  travellerId: number,
  listId: number,
  travellers: Traveller[],
  adultCount: number,
  childrenCount: number,
  infantCount: number,
  classCount: number,
  getTotalPassengers: () => number,
  setCounts: (counts: {
    adult: number;
    children: number;
    infant: number;
    travelclass: number;
  }) => void,
): Traveller[] => {
  const updatedTravellers = travellers.map(traveller => {
    if (traveller.id === travellerId) {
      return {
        ...traveller,
        list: traveller.list.map(item =>
          item.id === listId
            ? {...item, select: true}
            : {...item, select: false},
        ),
      };
    }
    return traveller;
  });

  const selectedTraveller = updatedTravellers.find(
    traveller => traveller.id === travellerId,
  );

  if (!selectedTraveller) return travellers; // Block the update if not found

  const selectedItem = selectedTraveller.list.find(item => item.select);
  if (!selectedItem) return travellers; // Block the update if not found

  let newAdultCount = adultCount;
  let newChildrenCount = childrenCount;
  let newInfantCount = infantCount;
  let newClassCount = classCount;

  if (travellerId === 1) newAdultCount = selectedItem.number;
  if (travellerId === 2) newChildrenCount = selectedItem.number;
  if (travellerId === 3) newInfantCount = selectedItem.number;
  if (travellerId === 4) newClassCount = selectedItem.number;

  const newTotal = newAdultCount + newChildrenCount + newInfantCount;

  const isIncreasing = newTotal > getTotalPassengers();

  if (isIncreasing && newTotal > 9) {
    Alert.alert('Validation Error', 'Total passengers cannot exceed 9.');
    return travellers; // Block the update
  }

  if (newInfantCount > newAdultCount) {
    Alert.alert('Validation Error', 'Each adult can have only one infant.');
    return travellers; // Block the update
  }

  // Update counts
  setCounts({
    adult: newAdultCount,
    children: newChildrenCount,
    infant: newInfantCount,
    travelclass: newClassCount,
  });

  return updatedTravellers;
};

export const classContext: any = {
  0: 'BUSINESS',
  1: 'ECONOMY',
  2: 'FIRST',
  3: 'PREMIUM ECONOMY',
};
export const classContext2: any = {
  BUSINESS: 0,
  ECONOMY: 1,
  FIRST: 2,
  'PREMIUM ECONOMY': 3,
};
export const initialTravellers = (traveller: {
  adult: number;
  child: number;
  infant: number;
  class: string;
}) => [
  {
    id: 1,
    name: 'Adults',
    limit: '12 yrs or above',
    list: Array.from({length: 9}, (_, i) => ({
      id: i + 1,
      number: i + 1,
      select: i === traveller.adult - 1,
    })),
  },
  {
    id: 2,
    name: 'Children',
    limit: '2 - 12 yrs',
    list: Array.from({length: 9}, (_, i) => ({
      id: i,
      number: i,
      select: i === traveller.child,
    })),
  },
  {
    id: 3,
    name: 'Infants',
    limit: '0 - 2 yrs',
    list: Array.from({length: 5}, (_, i) => ({
      id: i,
      number: i,
      select: i === traveller.infant,
    })),
  },
  {
    id: 4,
    name: 'Class',
    limit: '',
    list: Array.from({length: 4}, (_, i) => ({
      id: i,
      number: i,
      select: i === classContext2[traveller.class],
    })),
  },
];
