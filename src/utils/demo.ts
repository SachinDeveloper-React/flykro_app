export const demo = {
  statusCode: 200,
  data: {
    flightOffers: {
      meta: {
        count: 20,
        links: {
          self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=DEL&destinationLocationCode=MAA&departureDate=2024-12-24&adults=1&children=0&infants=0&travelClass=ECONOMY&currencyCode=INR&nonStop=false&max=20',
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
          lastTicketingDate: '2024-12-23',
          lastTicketingDateTime: '2024-12-23',
          numberOfBookableSeats: 9,
          itineraries: [
            {
              duration: 'PT2H50M',
              segments: [
                {
                  departure: {
                    iataCode: 'DEL',
                    terminal: '3',
                    at: '2024-12-24T05:45:00',
                  },
                  arrival: {
                    iataCode: 'MAA',
                    terminal: '4',
                    at: '2024-12-24T08:35:00',
                  },
                  carrierCode: 'AI',
                  number: '439',
                  aircraft: {
                    code: '321',
                  },
                  operating: {
                    carrierCode: 'AI',
                  },
                  duration: 'PT2H50M',
                  id: '30',
                  numberOfStops: 0,
                  blacklistedInEU: false,
                },
              ],
            },
          ],
          price: {
            currency: 'INR',
            total: '7802.00',
            base: '6890.00',
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
            grandTotal: '7802.00',
          },
          pricingOptions: {
            fareType: ['PUBLISHED'],
            includedCheckedBagsOnly: true,
          },
          validatingAirlineCodes: ['AI'],
          travelerPricings: [
            {
              travelerId: '1',
              fareOption: 'STANDARD',
              travelerType: 'ADULT',
              price: {
                currency: 'INR',
                total: '7802.00',
                base: '6890.00',
              },
              fareDetailsBySegment: [
                {
                  segmentId: '30',
                  cabin: 'ECONOMY',
                  fareBasis: 'GU1YXSII',
                  brandedFare: 'ECOVALU',
                  brandedFareLabel: 'ECO VALUE',
                  class: 'G',
                  includedCheckedBags: {
                    weight: 15,
                    weightUnit: 'KG',
                  },
                  amenities: [
                    {
                      description: 'PRE RESERVED SEAT ASSIGNMENT',
                      isChargeable: false,
                      amenityType: 'PRE_RESERVED_SEAT',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'MEAL SERVICES',
                      isChargeable: false,
                      amenityType: 'MEAL',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'REFUNDABLE TICKET',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'CHANGEABLE TICKET',
                      isChargeable: true,
                      amenityType: 'BRANDED_FARES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'UPGRADE',
                      isChargeable: true,
                      amenityType: 'UPGRADES',
                      amenityProvider: {
                        name: 'BrandedFare',
                      },
                    },
                    {
                      description: 'FREE CHECKED BAGGAGE ALLOWANCE',
                      isChargeable: false,
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
          BOM: {
            cityCode: 'BOM',
            countryCode: 'IN',
          },
          HYD: {
            cityCode: 'HYD',
            countryCode: 'IN',
          },
          CCU: {
            cityCode: 'CCU',
            countryCode: 'IN',
          },
          BLR: {
            cityCode: 'BLR',
            countryCode: 'IN',
          },
          DEL: {
            cityCode: 'DEL',
            countryCode: 'IN',
          },
          CJB: {
            cityCode: 'CJB',
            countryCode: 'IN',
          },
          MAA: {
            cityCode: 'MAA',
            countryCode: 'IN',
          },
        },
        aircraft: {
          '319': 'AIRBUS A319',
          '320': 'AIRBUS A320',
          '321': 'AIRBUS A321',
          '737': 'BOEING 737 ALL SERIES PASSENGER',
          '77W': 'BOEING 777-300ER',
          '32N': 'AIRBUS A320NEO',
        },
        currencies: {
          INR: 'INDIAN RUPEE',
        },
        carriers: {
          SG: 'SPICEJET',
          AI: 'AIR INDIA',
        },
      },
    },
    airportsDetails: {
      BOM: {
        address: {
          cityName: 'MUMBAI',
          cityCode: 'BOM',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'MH',
          regionCode: 'ASIA',
        },
        iataCode: 'BOM',
        name: 'CHHATRAPATI S MAHARAJ',
        detailedName: 'MUMBAI/MH/IN:CHHATRAPATI S MAH',
      },
      HYD: {
        address: {
          cityName: 'HYDERABAD',
          cityCode: 'HYD',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'TG',
          regionCode: 'ASIA',
        },
        iataCode: 'HYD',
        name: 'RAJIV GANDHI INTL',
        detailedName: 'HYDERABAD/TG/IN:RAJIV GANDHI I',
      },
      CCU: {
        address: {
          cityName: 'KOLKATA',
          cityCode: 'CCU',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'WB',
          regionCode: 'ASIA',
        },
        iataCode: 'CCU',
        name: 'SUBHAS CHANDRA BOSE',
        detailedName: 'KOLKATA/WB/IN:SUBHAS CHANDRA B',
      },
      BLR: {
        address: {
          cityName: 'BENGALURU',
          cityCode: 'BLR',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'KA',
          regionCode: 'ASIA',
        },
        iataCode: 'BLR',
        name: 'KEMPEGOWDA INTL',
        detailedName: 'BENGALURU/KA/IN:KEMPEGOWDA INT',
      },
      DEL: {
        address: {
          cityName: 'DELHI',
          cityCode: 'DEL',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'DL',
          regionCode: 'ASIA',
        },
        iataCode: 'DEL',
        name: 'INDIRA GANDHI INTL',
        detailedName: 'DELHI/DL/IN:INDIRA GANDHI INTL',
      },
      CJB: {
        address: {
          cityName: 'COIMBATORE',
          cityCode: 'CJB',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'TN',
          regionCode: 'ASIA',
        },
        iataCode: 'CJB',
        name: 'INTERNATIONAL',
        detailedName: 'COIMBATORE/TN/IN:INTERNATIONAL',
      },
      MAA: {
        address: {
          cityName: 'CHENNAI',
          cityCode: 'MAA',
          countryName: 'INDIA',
          countryCode: 'IN',
          stateCode: 'TN',
          regionCode: 'ASIA',
        },
        iataCode: 'MAA',
        name: 'CHENNAI INTERNATIONAL',
        detailedName: 'CHENNAI/TN/IN:CHENNAI INTERNAT',
      },
    },
    key: 'flightOffers:DEL:MAA:2024-12-24::1:0:0:ECONOMY:INR:false',
  },
  message: 'Retrieve Successful',
  success: true,
};
