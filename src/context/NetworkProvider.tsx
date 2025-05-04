import React, {ReactNode, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SERVER_URL} from '../networking';
import {useNetInfoInstance} from '@react-native-community/netinfo';

type Props = {
  children: ReactNode;
};

const NetworkProvider = ({children}: Props) => {
  const {
    netInfo: {type, isConnected},
    refresh,
  } = useNetInfoInstance();
  const [isServerReachable, setIsServerReachable] = useState(true);
  const [loading, setLoading] = useState(true);
  const checkServerReachability = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds

    try {
      const response = await fetch(SERVER_URL, {signal: controller.signal});
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }
      setIsServerReachable(response.ok);
      return true;
    } catch (error) {
      setIsServerReachable(false);
      return false;
    }
  };

  const handleRetry = async () => {
    await refresh(); // Manually refresh the network status
    console.log(`Network type: ${type}, Connected: ${isConnected}`);
  };
  useLayoutEffect(() => {
    const checkNetwork = async () => {
      setLoading(true);
      await checkServerReachability();

      setLoading(false);
    };

    checkNetwork();
  }, []);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (!isServerReachable || !isConnected) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.errorContent}>
          <Text style={styles.errorIcon}>⚠️</Text>
          {!isConnected ? (
            <Text style={styles.errorTitle}>Internet Error</Text>
          ) : (
            <Text style={styles.errorTitle}>Connection Error</Text>
          )}
          <Text style={styles.errorMessage}>
            We are having trouble connecting to the server. Please check your
            internet connection and try again.
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={!isConnected ? handleRetry : checkServerReachability}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  console.log('isConnected', isConnected);

  return <View style={styles.container}>{children}</View>;
};

export default NetworkProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  errorContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
