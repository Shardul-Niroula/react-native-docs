import { ComponentDoc } from '../types';

export const EXPO_CAMERA_SENSORS_DATA: ComponentDoc[] = [
  {
    id: 'expo-camera',
    name: 'expo-camera',
    category: 'Expo: Camera & Sensors',
    description: 'A React component that renders a preview for the device\'s front or back camera.',
    importCode: "import { Camera } from 'expo-camera';",
    purpose: ['Taking photos', 'Recording videos', 'Scanning QR codes'],
    installation: {
      type: 'npm',
      package: 'expo-camera',
      command: 'npx expo install expo-camera'
    },
    basicUsage: [
      {
        title: 'Basic Camera',
        language: 'jsx',
        code: `<Camera style={{ flex: 1 }} type={type}>
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={toggleCameraType}>
      <Text>Flip</Text>
    </TouchableOpacity>
  </View>
</Camera>`
      }
    ],
    props: [
      { 
        name: 'active', 
        type: 'boolean', 
        description: 'A boolean that determines whether the camera should be active.',
        examples: [
            { title: 'Active camera', language: 'jsx', code: '<CameraView active={true} />' },
            { title: 'Inactive camera', language: 'jsx', code: '<CameraView active={false} />' }
        ]
      },
      { 
        name: 'animateShutter', 
        type: 'boolean', 
        description: 'A boolean that determines whether the camera shutter animation should be enabled.',
        examples: [
            { title: 'Enable shutter animation', language: 'jsx', code: '<CameraView animateShutter={true} />' },
            { title: 'Disable shutter animation', language: 'jsx', code: '<CameraView animateShutter={false} />' }
        ]
      },
      { 
        name: 'autofocus', 
        type: 'FocusMode', 
        description: 'Indicates the focus mode to use.',
        examples: [
            { title: 'Autofocus on', language: 'jsx', code: '<CameraView autofocus="on" />' },
            { title: 'Autofocus off', language: 'jsx', code: '<CameraView autofocus="off" />' }
        ]
      },
      { 
        name: 'barcodeScannerSettings', 
        type: 'BarcodeSettings', 
        description: 'Settings for barcode scanning.',
        examples: [
            { title: 'Scan QR codes only', language: 'jsx', code: '<CameraView barcodeScannerSettings={{ barcodeTypes: ["qr"] }} />' }
        ]
      },
      { 
        name: 'enableTorch', 
        type: 'boolean', 
        description: 'A boolean to enable or disable the torch.',
        examples: [
            { title: 'Enable torch', language: 'jsx', code: '<CameraView enableTorch={true} />' },
            { title: 'Disable torch', language: 'jsx', code: '<CameraView enableTorch={false} />' }
        ]
      },
      { 
        name: 'facing', 
        type: 'CameraType', 
        description: 'Camera facing. Use one of CameraType.',
        examples: [
            { title: "'back': Main camera", language: 'jsx', code: '<CameraView facing="back" />' },
            { title: "'front': Selfie camera", language: 'jsx', code: '<CameraView facing="front" />' }
        ]
      },
      { 
        name: 'flash', 
        type: 'FlashMode', 
        description: 'Camera flash mode. Use one of FlashMode values.',
        examples: [
            { title: "'auto': Automatic flash", language: 'jsx', code: '<CameraView flash="auto" />' },
            { title: "'on': Always flash", language: 'jsx', code: '<CameraView flash="on" />' },
            { title: "'off': No flash", language: 'jsx', code: '<CameraView flash="off" />' }
        ]
      },
      { 
        name: 'mirror', 
        type: 'boolean', 
        description: 'A boolean that determines whether the camera should mirror the image when using the front camera.',
        examples: [
            { title: 'Mirror front camera', language: 'jsx', code: '<CameraView facing="front" mirror={true} />' },
            { title: 'No mirroring', language: 'jsx', code: '<CameraView mirror={false} />' }
        ]
      },
      { 
        name: 'mode', 
        type: 'CameraMode', 
        description: 'Used to select image or video output.',
        examples: [
            { title: 'Picture mode', language: 'jsx', code: '<CameraView mode="picture" />' },
            { title: 'Video mode', language: 'jsx', code: '<CameraView mode="video" />' }
        ]
      },
      { 
        name: 'mute', 
        type: 'boolean', 
        description: 'If present, video will be recorded with no sound.',
        examples: [
            { title: 'Mute video recording', language: 'jsx', code: '<CameraView mute={true} />' },
            { title: 'Record with sound', language: 'jsx', code: '<CameraView mute={false} />' }
        ]
      },
      { 
        name: 'onAvailableLensesChanged', 
        type: '(event: AvailableLenses) => void', 
        description: 'Callback invoked when the cameras available lenses change.',
        examples: [
            { title: 'Handle lens changes', language: 'jsx', code: '<CameraView onAvailableLensesChanged={(event) => console.log(event.lenses)} />' }
        ]
      },
      { 
        name: 'onBarcodeScanned', 
        type: '(scanningResult: BarcodeScanningResult) => void', 
        description: 'Callback that is invoked when a barcode has been successfully scanned.',
        examples: [
            { title: 'Handle barcode scan', language: 'jsx', code: '<CameraView onBarcodeScanned={({ data }) => alert(data)} />' }
        ]
      },
      { 
        name: 'onCameraReady', 
        type: '() => void', 
        description: 'Callback invoked when camera preview has been set.',
        examples: [
            { title: 'Camera ready callback', language: 'jsx', code: '<CameraView onCameraReady={() => console.log("Camera ready")} />' }
        ]
      },
      { 
        name: 'onMountError', 
        type: '(event: CameraMountError) => void', 
        description: 'Callback invoked when camera preview could not start.',
        examples: [
            { title: 'Handle mount error', language: 'jsx', code: '<CameraView onMountError={(event) => console.error(event.message)} />' }
        ]
      },
      { 
        name: 'onResponsiveOrientationChanged', 
        type: '(event: ResponsiveOrientationChanged) => void', 
        description: 'Callback invoked when responsive orientation changes.',
        examples: [
            { title: 'Handle orientation change', language: 'jsx', code: '<CameraView onResponsiveOrientationChanged={(event) => console.log(event.orientation)} />' }
        ]
      },
      { 
        name: 'pictureSize', 
        type: 'string', 
        description: 'A string representing the size of pictures takePictureAsync will take.',
        examples: [
            { title: 'Set picture size', language: 'jsx', code: '<CameraView pictureSize="1920x1080" />' }
        ]
      },
      { 
        name: 'poster', 
        type: 'string', 
        description: 'A URL for an image to be shown while the camera is loading.',
        examples: [
            { title: 'Loading poster image', language: 'jsx', code: '<CameraView poster="https://example.com/loading.png" />' }
        ]
      },
      { 
        name: 'ratio', 
        type: 'CameraRatio', 
        description: 'A string representing the aspect ratio of the preview.',
        examples: [
            { title: '16:9 aspect ratio', language: 'jsx', code: '<CameraView ratio="16:9" />' },
            { title: '4:3 aspect ratio', language: 'jsx', code: '<CameraView ratio="4:3" />' },
            { title: '1:1 aspect ratio', language: 'jsx', code: '<CameraView ratio="1:1" />' }
        ]
      },
      { 
        name: 'responsiveOrientationWhenOrientationLocked', 
        type: 'boolean', 
        description: 'Whether to allow responsive orientation of the camera when the screen orientation is locked.',
        examples: [
            { title: 'Responsive orientation', language: 'jsx', code: '<CameraView responsiveOrientationWhenOrientationLocked={true} />' }
        ]
      },
      { 
        name: 'selectedLens', 
        type: 'string', 
        description: 'Available lenses are emitted to the onAvailableLensesChanged callback.',
        examples: [
            { title: 'Select wide angle lens', language: 'jsx', code: '<CameraView selectedLens="builtInWideAngleCamera" />' }
        ]
      },
      { 
        name: 'videoBitrate', 
        type: 'number', 
        description: 'The bitrate of the video recording in bits per second.',
        examples: [
            { title: 'High bitrate video', language: 'jsx', code: '<CameraView videoBitrate={10000000} />' }
        ]
      },
      { 
        name: 'videoQuality', 
        type: 'VideoQuality', 
        description: 'Specify the quality of the recorded video.',
        examples: [
            { title: '1080p video quality', language: 'jsx', code: '<CameraView videoQuality="1080p" />' },
            { title: '720p video quality', language: 'jsx', code: '<CameraView videoQuality="720p" />' }
        ]
      },
      { 
        name: 'videoStabilizationMode', 
        type: 'VideoStabilization', 
        description: 'The video stabilization mode used for a video recording.',
        examples: [
            { title: 'Cinematic stabilization', language: 'jsx', code: '<CameraView videoStabilizationMode="cinematic" />' },
            { title: 'Auto stabilization', language: 'jsx', code: '<CameraView videoStabilizationMode="auto" />' }
        ]
      },
      { 
        name: 'zoom', 
        type: 'number', 
        description: 'A value between 0 and 1 being a percentage of device\'s max zoom.',
        examples: [
            { title: '50% zoom', language: 'jsx', code: '<CameraView zoom={0.5} />' },
            { title: 'Maximum zoom', language: 'jsx', code: '<CameraView zoom={1} />' }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-sensors',
    name: 'expo-sensors',
    category: 'Expo: Camera & Sensors',
    description: 'A library that provides access to device sensors including accelerometer, gyroscope, magnetometer, barometer, light sensor, pedometer, and device motion.',
    importCode: "import { Accelerometer, Gyroscope, Magnetometer } from 'expo-sensors';",
    purpose: ['Motion detection', 'Device orientation', 'Environmental sensing', 'Step counting'],
    installation: {
      type: 'npm',
      package: 'expo-sensors',
      command: 'npx expo install expo-sensors'
    },
    basicUsage: [
      {
        title: 'Accelerometer - Device acceleration',
        language: 'js',
        code: `import { Accelerometer } from 'expo-sensors';

Accelerometer.addListener(accelerometerData => {
  console.log(accelerometerData);
  // { x: number, y: number, z: number }
});

Accelerometer.setUpdateInterval(100);`
      },
      {
        title: 'Gyroscope - Device rotation',
        language: 'js',
        code: `import { Gyroscope } from 'expo-sensors';

Gyroscope.addListener(gyroscopeData => {
  console.log(gyroscopeData);
  // { x: number, y: number, z: number }
});

Gyroscope.setUpdateInterval(100);`
      },
      {
        title: 'Magnetometer - Magnetic fields',
        language: 'js',
        code: `import { Magnetometer } from 'expo-sensors';

Magnetometer.addListener(magnetometerData => {
  console.log(magnetometerData);
  // { x: number, y: number, z: number }
});

Magnetometer.setUpdateInterval(100);`
      },
      {
        title: 'Device Motion - Combined sensors',
        language: 'js',
        code: `import { DeviceMotion } from 'expo-sensors';

DeviceMotion.addListener(deviceMotionData => {
  console.log(deviceMotionData);
  // { acceleration, accelerationIncludingGravity, rotation, rotationRate, orientation }
});

DeviceMotion.setUpdateInterval(100);`
      },
      {
        title: 'Pedometer - Step counting',
        language: 'js',
        code: `import { Pedometer } from 'expo-sensors';

Pedometer.watchStepCount(result => {
  console.log(result.steps);
});

Pedometer.getStepCountAsync(start, end).then(result => {
  console.log(result.steps);
});`
      }
    ],
    props: [
      {
        name: 'Accelerometer',
        type: 'Sensor API',
        description: 'Measures device acceleration on all platforms.',
        examples: [
          { title: 'Basic accelerometer usage', language: 'js', code: 'Accelerometer.addListener(data => console.log(data.x, data.y, data.z));' },
          { title: 'Set update interval', language: 'js', code: 'Accelerometer.setUpdateInterval(100); // 100ms' }
        ]
      },
      {
        name: 'Gyroscope',
        type: 'Sensor API',
        description: 'Measures device rotation on all platforms.',
        examples: [
          { title: 'Basic gyroscope usage', language: 'js', code: 'Gyroscope.addListener(data => console.log(data.x, data.y, data.z));' },
          { title: 'Set update interval', language: 'js', code: 'Gyroscope.setUpdateInterval(100); // 100ms' }
        ]
      },
      {
        name: 'Magnetometer',
        type: 'Sensor API',
        description: 'Measures magnetic fields on Android and iOS platforms.',
        examples: [
          { title: 'Basic magnetometer usage', language: 'js', code: 'Magnetometer.addListener(data => console.log(data.x, data.y, data.z));' },
          { title: 'Set update interval', language: 'js', code: 'Magnetometer.setUpdateInterval(100); // 100ms' }
        ]
      },
      {
        name: 'DeviceMotion',
        type: 'Sensor API',
        description: 'Measures device motion combining accelerometer, gyroscope, and magnetometer data.',
        examples: [
          { title: 'Basic device motion usage', language: 'js', code: 'DeviceMotion.addListener(data => console.log(data.acceleration, data.rotation));' },
          { title: 'Set update interval', language: 'js', code: 'DeviceMotion.setUpdateInterval(100); // 100ms' }
        ]
      },
      {
        name: 'Barometer',
        type: 'Sensor API',
        description: 'Measures atmospheric pressure on Android and iOS platforms.',
        examples: [
          { title: 'Basic barometer usage', language: 'js', code: 'Barometer.addListener(data => console.log(data.pressure));' },
          { title: 'Set update interval', language: 'js', code: 'Barometer.setUpdateInterval(1000); // 1000ms' }
        ]
      },
      {
        name: 'LightSensor',
        type: 'Sensor API',
        description: 'Measures ambient light levels on Android platform.',
        examples: [
          { title: 'Basic light sensor usage', language: 'js', code: 'LightSensor.addListener(data => console.log(data.illuminance));' },
          { title: 'Set update interval', language: 'js', code: 'LightSensor.setUpdateInterval(1000); // 1000ms' }
        ]
      },
      {
        name: 'Pedometer',
        type: 'Sensor API',
        description: 'Measures step count on Android and iOS platforms.',
        examples: [
          { title: 'Watch step count', language: 'js', code: 'Pedometer.watchStepCount(result => console.log(result.steps));' },
          { title: 'Get step count for date range', language: 'js', code: 'Pedometer.getStepCountAsync(startDate, endDate);' }
        ]
      }
    ],
    styles: []
  }
];