import {StyleSheet} from 'react-native';
import {theme} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.card,
  },
  section: {
    borderBottomWidth: 0.5,
  },
  sectionContent: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  notificationDescription: {
    fontSize: 8,
    flexWrap: 'wrap',
  },
  aboutSection: {
    padding: 16,
    flexDirection: 'column',
    gap: 10,
  },
  aboutTitle: {
    fontSize: 10,
    fontWeight: '600',
  },
  aboutItem: {
    fontSize: 12,
    fontWeight: '300',
  },
  appVersion: {
    fontSize: 12,
    fontWeight: '300',
  },
});
