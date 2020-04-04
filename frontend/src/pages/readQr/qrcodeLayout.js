import React, {useRef} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

export default ({setBarcodes, ...maskedStyle}) => {
  let camera = useRef().current;
  const renderCamera = () => {
    return (
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={{flex: 1, width: '100%', height: '100%'}}
        type={'back'}
        flashMode={'on'}
        autoFocus={'on'}
        whiteBalance={'auto'}
        focusDepth={0}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={setBarcodes}
        googleVisionBarcodeType={
          RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL
        }>
        <BarcodeMask {...maskedStyle} />
      </RNCamera>
    );
  };
  /////////
  const AuthRender = () => {
    const isFocused = useIsFocused();
    const hasCameraPermission = true;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (isFocused) {
      return renderCamera();
    } else {
      return <View />;
    }
  };

  return <View style={styles.container}>{AuthRender()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
});
