import {StyleSheet} from 'react-native';
import {theme} from '../../../utils';

export const styles = StyleSheet.create({
  profileImageContainer: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  sectionHeader: {
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {flex: 1, justifyContent: 'center'},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  optionCircleSelected: {backgroundColor: theme.colors.primary},
  optionText: {fontSize: 16},
  optionHeaderText: {fontWeight: 'bold', fontSize: 18},
});
