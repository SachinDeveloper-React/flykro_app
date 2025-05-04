import {useContext, useMemo} from 'react';
import {AuthContext} from '../context';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
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

export default useAuth;
