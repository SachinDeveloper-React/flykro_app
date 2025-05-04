import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  flashContainer: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  cameraContainer: {
    flex: 0.7,
  },
  controlsContainer: {
    flex: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  captureButton: {
    width: 75,
    height: 75,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCaptureButton: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 60,
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cropIconContainer: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  cropIcon: {
    textAlign: 'right',
  },
  previewContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  actionButtons: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    marginRight: 20,
  },
  okText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
