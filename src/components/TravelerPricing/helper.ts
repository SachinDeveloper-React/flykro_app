export type Amenity = {
  description: string;
  isChargeable: boolean;
  amenityType: string;
  amenityProvider: {
    name: string;
  };
};

export type IncludedCheckedBags = {
  weight: number;
  weightUnit: string;
};

export type FareDetail = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare: string;
  brandedFareLabel: string;
  class: string;
  includedCheckedBags: IncludedCheckedBags;
  amenities?: Amenity[];
};

export type Price = {
  currency: string;
  total: string;
  base: string;
};
