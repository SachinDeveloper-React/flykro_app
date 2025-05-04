import {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  useCameraDevice,
  Camera,
  PhotoFile,
  TakePhotoOptions,
  useCameraFormat,
} from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import {goBack} from '../../navigation/NavigationService';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';

const CameraScreen = () => {
  const [cameraType, setCameraType] = useState<'back' | 'front'>('front');
  const device = useCameraDevice(cameraType, {
    physicalDevices: ['ultra-wide-angle-camera'],
  });
  const [isActive, setIsActive] = useState(false);
  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off');
  const [photo, setPhoto] = useState<PhotoFile>();
  const cameraRef = useRef<Camera>(null);
  const format = useCameraFormat(device, [
    {photoResolution: {width: 1000, height: 1000}},
    {photoHdr: true},
  ]);

  const [mode, setMode] = useState('camera');

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      const timeout = setTimeout(() => goBack(), 120000);
      return () => {
        setIsActive(false);
        clearTimeout(timeout);
      };
    }, []),
  );
  const cropPhoto = () => {
    if (!photo) return;
    ImagePicker.openCropper({
      path: `file://${photo.path}`,
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
    })
      .then(croppedImage => {
        setPhoto({
          path: croppedImage.path,
          width: croppedImage.width,
          height: croppedImage.height,
          isRawPhoto: false,
          orientation: 'portrait',
          isMirrored: false,
        });
      })
      .catch(error => console.error('Crop error:', error));
  };

  const toggleCameraType = useCallback(() => {
    setCameraType(prev => (prev === 'back' ? 'front' : 'back'));
    if (cameraType === 'back') setFlash('off');
  }, [cameraType]);

  const onTakePicturePressed = async () => {
    if (!cameraRef.current || !device) return;
    const takenPhoto = await cameraRef.current.takePhoto({
      flash: cameraType === 'back' ? flash : 'off',
      enableShutterSound: true,
    });
    setPhoto(takenPhoto);
  };

  const renderCamera = () => (
    <>
      <View style={styles.flashContainer}>
        <Ionicons
          name={flash === 'off' ? 'flash-off' : 'flash'}
          onPress={() => {
            if (cameraType === 'back') {
              setFlash(current => (current === 'off' ? 'on' : 'off'));
            } else {
              Alert.alert(
                'Flykro Alert',
                'You are using the front camera, so flash is not supported.',
              );
            }
          }}
          size={24}
          color="white"
        />
      </View>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device as any}
          isActive={isActive && !photo && mode === 'camera'}
          photo
          format={format}
          photoHdr={format?.supportsPhotoHdr}
        />
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Pressable onPress={onTakePicturePressed} style={styles.captureButton}>
          <View style={styles.innerCaptureButton} />
        </Pressable>
        <Ionicons
          name="camera-reverse"
          onPress={toggleCameraType}
          size={30}
          color="white"
        />
      </View>
    </>
  );

  const renderPhotoPreview = () => (
    <View style={{flex: 1}}>
      <View style={styles.cropIconContainer}>
        <Ionicons
          name="crop"
          color="white"
          size={24}
          style={styles.cropIcon}
          onPress={cropPhoto}
        />
      </View>
      <View style={styles.previewContainer}>
        {photo && (
          <Image
            source={{uri: `file://${photo.path}`}}
            style={styles.imagePreview}
          />
        )}
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPhoto(undefined)}
          style={styles.backButton}>
          <Ionicons name="reload" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.okText}>OK</Text>
      </View>
    </View>
  );

  if (!device) return <Text>Camera device not found</Text>;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {photo ? renderPhotoPreview() : renderCamera()}
    </View>
  );
};

export default CameraScreen;
