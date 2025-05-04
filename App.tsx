/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from './src/navigation';
import {
  AuthProvider,
  FlightSearchProvider,
  NetworkProvider,
} from './src/context';
import {RootSiblingParent} from 'react-native-root-siblings';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <NetworkProvider>
            <AuthProvider>
              <FlightSearchProvider>
                <NavigationContainer />
              </FlightSearchProvider>
            </AuthProvider>
          </NetworkProvider>
        </RootSiblingParent>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
export default App;
