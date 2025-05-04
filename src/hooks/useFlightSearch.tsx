import {useContext, useMemo} from 'react';
import {FlightSearchContext} from '../context';

const useFlightSearch = () => {
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      'useFlightSearch must be used within a FlightSearchProvider',
    );
  }

  // Memoize the context value to prevent unnecessary re-renders
  const memoizedContext = useMemo(
    () => ({
      ...context,
    }),
    [context],
  );

  return memoizedContext;
};

export default useFlightSearch;
