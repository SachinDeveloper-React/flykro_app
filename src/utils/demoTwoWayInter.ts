export const domTwoWayInter = {
  statusCode: 200,
  data: {
    isDomestic: 'false',
    tripType: 'roundTrip',
    departure: {
      meta: {
        count: 20,
        links: {
          self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=DEL&destinationLocationCode=CDG&departureDate=2025-02-26&adults=1&returnDate=2025-03-10&children=1&infants=0&travelClass=ECONOMY&currencyCode=INR&nonStop=false&max=20',
        },
      },
      data: [
        {
          type: 'flight-offer',
          id: '1',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT9H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:55:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T11:20:00',
                  },
                  carrierCode: 'LX',
                  number: '633',
                  aircraft: {
                    code: '32N',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT1H25M',
                  id: '29',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '30',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '99777.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '99777.00',
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '52991.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '46786.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '2',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT13H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T06:40:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T08:00:00',
                  },
                  carrierCode: 'LX',
                  number: '647',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '17',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '18',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '99777.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '99777.00',
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '52991.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '17',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '18',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '46786.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '17',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '18',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '3',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT9H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:55:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T11:20:00',
                  },
                  carrierCode: 'LX',
                  number: '633',
                  aircraft: {
                    code: '32N',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT1H25M',
                  id: '29',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '30',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '99777.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '99777.00',
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '52991.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '46786.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '4',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT13H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T06:40:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T08:00:00',
                  },
                  carrierCode: 'LX',
                  number: '647',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '17',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '18',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '99777.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '99777.00',
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '52991.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '17',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '18',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '46786.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '17',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '18',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '5',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT10H15M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:25:00',
                  },
                  arrival: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-03-10T10:50:00',
                  },
                  carrierCode: 'LH',
                  number: '2227',
                  aircraft: {
                    code: '319',
                  },
                  operating: {
                    carrierCode: 'CL',
                  },
                  duration: 'PT1H25M',
                  id: '21',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-03-10T12:15:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:10:00',
                  },
                  carrierCode: 'LH',
                  number: '762',
                  aircraft: {
                    code: '388',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT7H25M',
                  id: '22',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '100347.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '100347.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53276.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '21',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '22',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47071.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '21',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '22',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '6',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT10H15M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:25:00',
                  },
                  arrival: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-03-10T10:50:00',
                  },
                  carrierCode: 'LH',
                  number: '2227',
                  aircraft: {
                    code: '319',
                  },
                  operating: {
                    carrierCode: 'CL',
                  },
                  duration: 'PT1H25M',
                  id: '21',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-03-10T12:15:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:10:00',
                  },
                  carrierCode: 'LH',
                  number: '762',
                  aircraft: {
                    code: '388',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT7H25M',
                  id: '22',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '100347.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '100347.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53276.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '21',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '22',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47071.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '21',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '22',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '7',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT14H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T07:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'AY',
                  number: '122',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT9H50M',
                  id: '9',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-02-26T16:05:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-02-26T18:10:00',
                  },
                  carrierCode: 'AY',
                  number: '1577',
                  aircraft: {
                    code: '320',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT3H5M',
                  id: '10',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT15H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-03-10T10:30:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-03-10T14:35:00',
                  },
                  carrierCode: 'AY',
                  number: '1572',
                  aircraft: {
                    code: '320',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT3H5M',
                  id: '19',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T06:05:00',
                  },
                  carrierCode: 'AY',
                  number: '121',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT8H35M',
                  id: '20',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101395.00',
            base: '77905.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101395.00',
            additionalServices: [
              {
                amount: '13504',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['AY'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '56538.00',
                base: '44515.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '9',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '10',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '19',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '20',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '44857.00',
                base: '33390.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '9',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '10',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '19',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '20',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '8',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT14H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T07:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'AY',
                  number: '122',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT9H50M',
                  id: '9',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-02-26T16:05:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-02-26T18:10:00',
                  },
                  carrierCode: 'AY',
                  number: '1577',
                  aircraft: {
                    code: '320',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT3H5M',
                  id: '10',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT18H45M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-03-10T06:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-03-10T10:45:00',
                  },
                  carrierCode: 'AY',
                  number: '1582',
                  aircraft: {
                    code: 'E90',
                  },
                  duration: 'PT2H55M',
                  id: '27',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T06:05:00',
                  },
                  carrierCode: 'AY',
                  number: '121',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT8H35M',
                  id: '28',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101395.00',
            base: '77905.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101395.00',
            additionalServices: [
              {
                amount: '13504',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['AY'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '56538.00',
                base: '44515.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '9',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '10',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '27',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '28',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '44857.00',
                base: '33390.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '9',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '10',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '27',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '28',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '9',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT19H15M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T07:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'AY',
                  number: '122',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT9H50M',
                  id: '3',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-02-26T20:30:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-02-26T22:35:00',
                  },
                  carrierCode: 'AY',
                  number: '1581',
                  aircraft: {
                    code: 'E90',
                  },
                  duration: 'PT3H5M',
                  id: '4',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT15H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-03-10T10:30:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-03-10T14:35:00',
                  },
                  carrierCode: 'AY',
                  number: '1572',
                  aircraft: {
                    code: '320',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT3H5M',
                  id: '19',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T06:05:00',
                  },
                  carrierCode: 'AY',
                  number: '121',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT8H35M',
                  id: '20',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101395.00',
            base: '77905.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101395.00',
            additionalServices: [
              {
                amount: '13504',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['AY'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '56538.00',
                base: '44515.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '3',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '4',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '19',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '20',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '44857.00',
                base: '33390.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '3',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '4',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '19',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '20',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '10',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT19H15M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T07:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'AY',
                  number: '122',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT9H50M',
                  id: '3',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-02-26T20:30:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-02-26T22:35:00',
                  },
                  carrierCode: 'AY',
                  number: '1581',
                  aircraft: {
                    code: 'E90',
                  },
                  duration: 'PT3H5M',
                  id: '4',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT18H45M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '2B',
                    at: '2025-03-10T06:50:00',
                  },
                  arrival: {
                    iataCode: 'HEL',
                    at: '2025-03-10T10:45:00',
                  },
                  carrierCode: 'AY',
                  number: '1582',
                  aircraft: {
                    code: 'E90',
                  },
                  duration: 'PT2H55M',
                  id: '27',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'HEL',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T06:05:00',
                  },
                  carrierCode: 'AY',
                  number: '121',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'AY',
                  },
                  duration: 'PT8H35M',
                  id: '28',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101395.00',
            base: '77905.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101395.00',
            additionalServices: [
              {
                amount: '13504',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['AY'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '56538.00',
                base: '44515.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '3',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '4',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '27',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '28',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '44857.00',
                base: '33390.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '3',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '4',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '27',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '28',
                  cabin: 'ECONOMY',
                  fareBasis: 'ZNN0S2CM',
                  brandedFare: 'ECLASSIC',
                  brandedFareLabel: 'ECONOMY CLASSIC',
                  class: 'Z',
                  amenities: [
                    {
                      description: 'MEAL AND BEVERAGE',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CARRY ON BAGGAGE',
                      isChargeable: false,
                      amenityType: 'TRAVEL_SERVICES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '11',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT4H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T14:25:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T15:45:00',
                  },
                  carrierCode: 'LH',
                  number: '1035',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H20M',
                  id: '15',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-10T23:00:00',
                  },
                  carrierCode: 'LH',
                  number: '4524',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT30M',
                  id: '16',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '15',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '16',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '15',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '16',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '12',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT5H30M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    at: '2025-03-10T13:00:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    at: '2025-03-10T14:15:00',
                  },
                  carrierCode: 'LH',
                  number: '4124',
                  aircraft: {
                    code: '777',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H15M',
                  id: '23',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-10T23:00:00',
                  },
                  carrierCode: 'LH',
                  number: '4524',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT30M',
                  id: '24',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '23',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '24',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '23',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '24',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '13',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT8H35M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T14:25:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T15:45:00',
                  },
                  carrierCode: 'LH',
                  number: '1035',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H20M',
                  id: '25',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-11T03:30:00',
                  },
                  carrierCode: 'LH',
                  number: '4791',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT5H',
                  id: '26',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '25',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '26',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '25',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '26',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '14',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT4H5M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T14:25:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T15:45:00',
                  },
                  carrierCode: 'LH',
                  number: '1035',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H20M',
                  id: '15',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-10T23:00:00',
                  },
                  carrierCode: 'LH',
                  number: '4524',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT30M',
                  id: '16',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '15',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '16',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '15',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '16',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '15',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT11H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '5',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T07:25:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T08:55:00',
                  },
                  carrierCode: 'LX',
                  number: '632',
                  aircraft: {
                    code: '295',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H30M',
                  id: '6',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT10H',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    at: '2025-03-10T13:00:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    at: '2025-03-10T14:15:00',
                  },
                  carrierCode: 'LH',
                  number: '4459',
                  aircraft: {
                    code: '777',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H15M',
                  id: '13',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-11T03:30:00',
                  },
                  carrierCode: 'LH',
                  number: '4791',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT5H',
                  id: '14',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '13',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '14',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '5',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '6',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '13',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '14',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '16',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT5H30M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    at: '2025-03-10T13:00:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    at: '2025-03-10T14:15:00',
                  },
                  carrierCode: 'LH',
                  number: '4124',
                  aircraft: {
                    code: '777',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H15M',
                  id: '23',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-10T23:00:00',
                  },
                  carrierCode: 'LH',
                  number: '4524',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT30M',
                  id: '24',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '23',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '24',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '23',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '24',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '17',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT8H35M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T14:25:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T15:45:00',
                  },
                  carrierCode: 'LH',
                  number: '1035',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H20M',
                  id: '25',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-11T03:30:00',
                  },
                  carrierCode: 'LH',
                  number: '4791',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT5H',
                  id: '26',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '25',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '26',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '25',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '26',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '18',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT16H55M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T01:45:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T06:20:00',
                  },
                  carrierCode: 'LX',
                  number: '147',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT9H5M',
                  id: '11',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-02-26T12:50:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T14:10:00',
                  },
                  carrierCode: 'LX',
                  number: '638',
                  aircraft: {
                    code: '290',
                  },
                  operating: {
                    carrierCode: '2L',
                  },
                  duration: 'PT1H20M',
                  id: '12',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT10H',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    at: '2025-03-10T13:00:00',
                  },
                  arrival: {
                    iataCode: 'FRA',
                    at: '2025-03-10T14:15:00',
                  },
                  carrierCode: 'LH',
                  number: '4459',
                  aircraft: {
                    code: '777',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H15M',
                  id: '13',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'FRA',
                    terminal: '1',
                    at: '2025-03-10T18:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    at: '2025-03-11T03:30:00',
                  },
                  carrierCode: 'LH',
                  number: '4791',
                  aircraft: {
                    code: '74H',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT5H',
                  id: '14',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101607.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101607.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LX'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53906.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '13',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '14',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47701.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '11',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '12',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '13',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '14',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '19',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT13H40M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T02:00:00',
                  },
                  arrival: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-02-26T06:25:00',
                  },
                  carrierCode: 'LH',
                  number: '763',
                  aircraft: {
                    code: '388',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT8H55M',
                  id: '7',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-02-26T09:30:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T11:10:00',
                  },
                  carrierCode: 'LH',
                  number: '2228',
                  aircraft: {
                    code: '319',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT1H40M',
                  id: '8',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT9H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:55:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T11:20:00',
                  },
                  carrierCode: 'LX',
                  number: '633',
                  aircraft: {
                    code: '32N',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT1H25M',
                  id: '29',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '30',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101787.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101787.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LH'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53996.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '7',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '8',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47791.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '7',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '8',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'flight-offer',
          id: '20',
          source: 'GDS',
          instantTicketingRequired: false,
          nonHomogeneous: false,
          oneWay: false,
          isUpsellOffer: false,
          lastTicketingDate: '2025-02-06',
          lastTicketingDateTime: '2025-02-06',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT14H',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-02-26T02:00:00',
                  },
                  arrival: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-02-26T06:25:00',
                  },
                  carrierCode: 'LH',
                  number: '763',
                  aircraft: {
                    code: '388',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT8H55M',
                  id: '1',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'MUC',
                    terminal: '2',
                    at: '2025-02-26T09:00:00',
                  },
                  arrival: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-02-26T11:30:00',
                  },
                  carrierCode: 'LH',
                  number: '4741',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'LH',
                  },
                  duration: 'PT2H30M',
                  id: '2',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
            {
              duration: 'PT9H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'CDG',
                    terminal: '1',
                    at: '2025-03-10T09:55:00',
                  },
                  arrival: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T11:20:00',
                  },
                  carrierCode: 'LX',
                  number: '633',
                  aircraft: {
                    code: '32N',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT1H25M',
                  id: '29',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
                {
                  departure: {
                    iataCode: 'ZRH',
                    at: '2025-03-10T12:00:00',
                  },
                  arrival: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2025-03-11T00:15:00',
                  },
                  carrierCode: 'LX',
                  number: '146',
                  aircraft: {
                    code: '333',
                  },
                  operating: {
                    carrierCode: 'LX',
                  },
                  duration: 'PT7H45M',
                  id: '30',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '101787.00',
            base: '41390.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '101787.00',
            additionalServices: [
              {
                amount: '15125',
                type: 'CHECKED_BAGS',
              },
            ],
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: false,
          },
          validatingAirlineCodes: ['LH'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '53996.00',
                base: '23650.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '1',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '2',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  includedCheckedBags: {
                    quantity: 1,
                  },
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
            {
              travelerId: '2',
              fareOption: 'STANDARD',
              travelerType: 'CHILD',
              price: {
                currency: 'INR',
                total: '47791.00',
                base: '17740.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '1',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '2',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'CATERING ON EUROPE FLTS',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGE BEFORE DEPARTURE',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '29',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'LNCAA',
                  brandedFare: 'ECOSAVER',
                  brandedFareLabel: 'ECONOMY SAVER',
                  class: 'L',
                  amenities: [
                    {
                      description: 'EXTRA LEGROOM SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON EUROPE AND CAI FLT',
                      isChargeable: true,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CATERING ON INTERCONT FLTS',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'STANDARD SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MILEAGE ACCRUAL',
                      isChargeable: false,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE ELIGIBILITY',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'PREFERRED SEAT RESERVATION',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      dictionaries: {
        locations: {
          ZRH: {
            cityCode: 'ZRH',
            countryCode: 'CH',
          },
          FRA: {
            cityCode: 'FRA',
            countryCode: 'DE',
          },
          CDG: {
            cityCode: 'PAR',
            countryCode: 'FR',
          },
          DEL: {
            cityCode: 'DEL',
            countryCode: 'IN',
          },
          MUC: {
            cityCode: 'MUC',
            countryCode: 'DE',
          },
          HEL: {
            cityCode: 'HEL',
            countryCode: 'FI',
          },
        },
        aircraft: {
          '290': 'EMBRAER 190 E2',
          '295': 'EMBRAER 195 E2',
          '319': 'AIRBUS A319',
          '320': 'AIRBUS A320',
          '321': 'AIRBUS A321',
          '333': 'AIRBUS A330-300',
          '388': 'AIRBUS A380-800',
          '777': 'BOEING 777-200/300',
          '74H': 'BOEING 747-8',
          E90: 'EMBRAER 190',
          '32N': 'AIRBUS A320NEO',
        },
        currencies: {
          INR: 'INDIAN RUPEE',
        },
        carriers: {
          AY: 'FINNAIR',
          CL: 'LUFTHANSA CITYLINE',
          '2L': 'HELVETIC AIRWAYS',
          LX: 'SWISS INTERNATIONAL AIR LINES',
          LH: 'LUFTHANSA',
        },
      },
    },
    key: 'flightOffers:DEL:CDG:2025-02-26:2025-03-10:1:1:0:ECONOMY:INR:false:roundTrip:false',
  },
  message: 'Retrieve Successful',
  success: true,
};
