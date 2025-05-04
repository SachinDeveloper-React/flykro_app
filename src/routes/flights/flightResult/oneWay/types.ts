// Base Types
type CurrencyCode = string;
type IATACode = string;

// Price and Fees
type Price = {
  currency: CurrencyCode;
  total: string;
  base: string;
  fees?: Fee[];
  grandTotal?: string;
};

type Fee = {
  amount: string;
  type: string;
};

// Itinerary and Segments
type Itinerary = {
  duration: string;
  segments: Segment[];
};

type Segment = {
  departure: LocationDetail;
  arrival: LocationDetail;
  carrierCode: string;
  number: string;
  aircraft: Aircraft;
  operating: OperatingCarrier;
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
};

type LocationDetail = {
  iataCode: IATACode;
  terminal?: string;
  at: string;
};

type Aircraft = {
  code: string;
};

type OperatingCarrier = {
  carrierCode: string;
};

// Traveler Pricing
type TravelerPricing = {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: Price;
  fareDetailsBySegment: FareDetail[];
};

type FareDetail = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare: string;
  brandedFareLabel: string;
  class: string;
  includedCheckedBags: CheckedBaggage;
  amenities: Amenity[];
};

type CheckedBaggage = {
  weight: number;
  weightUnit: string;
};

type Amenity = {
  description: string;
  isChargeable: boolean;
  amenityType: string;
  amenityProvider: {
    name: string;
  };
};

// Flight Offer
type FlightOffer = {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  isUpsellOffer: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: Itinerary[];
  price: Price;
  pricingOptions: PricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TravelerPricing[];
};

type PricingOptions = {
  fareType: string[];
  includedCheckedBagsOnly: boolean;
};

// Metadata and Links
type Meta = {
  count: number;
  links: Links;
};

type Links = {
  self: string;
};

// Dictionaries
type Dictionaries = {
  locations: Record<IATACode, LocationInfo>;
  aircraft: Record<string, string>;
  currencies: Record<CurrencyCode, string>;
  carriers: Record<string, string>;
};

type LocationInfo = {
  cityCode: string;
  countryCode: string;
};

// Airports Details
type AirportDetails = {
  address: Address;
  iataCode: IATACode;
  name: string;
  detailedName: string;
};

type Address = {
  cityName: string;
  cityCode: IATACode;
  countryName: string;
  countryCode: string;
  stateCode: string;
  regionCode: string;
};

// Main Response Types
export type FlightOffersResponse = {
  statusCode: number;
  data: {
    flightOffers: {
      meta: Meta;
      data: FlightOffer[];
      dictionaries: Dictionaries;
    };
    airportsDetails: Record<IATACode, AirportDetails>;
    key: string;
  };
  message: string;
  success: boolean;
};
