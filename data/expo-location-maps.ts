import { ComponentDoc } from '../types';

export const EXPO_LOCATION_MAPS_DATA: ComponentDoc[] = [
  {
    id: 'expo-location',
    name: 'expo-location',
    category: 'Expo: Location & Maps',
    description: 'Allows reading geolocation information from the device.',
    importCode: "import * as Location from 'expo-location';",
    purpose: ['Getting current coordinates', 'Geofencing', 'Reverse geocoding'],
    installation: {
      type: 'npm',
      package: 'expo-location',
      command: 'npx expo install expo-location'
    },
    basicUsage: [
      {
        title: 'Get Position',
        language: 'js',
        code: `let { status } = await Location.requestForegroundPermissionsAsync();
if (status === 'granted') {
  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
}`
      }
    ],
    props: [
      {
        name: 'useBackgroundPermissions',
        type: 'Hook',
        description: 'Check or request permissions for background location access.',
        required: false,
        examples: [{ code: `const [status, requestPermission] = Location.useBackgroundPermissions();`, language: 'js' }]
      },
      {
        name: 'useForegroundPermissions',
        type: 'Hook',
        description: 'Check or request permissions for foreground location access.',
        required: false,
        examples: [{ code: `const [status, requestPermission] = Location.useForegroundPermissions();`, language: 'js' }]
      },
      {
        name: 'enableNetworkProviderAsync',
        type: 'Method',
        description: 'Asks the user to turn on high accuracy location mode which enables network provider.',
        required: false,
        examples: [{ code: `await Location.enableNetworkProviderAsync();`, language: 'js' }]
      },
      {
        name: 'geocodeAsync',
        type: 'Method',
        description: 'Geocode an address string to latitude-longitude location.',
        required: false,
        examples: [{ code: `let geocodedLocations = await Location.geocodeAsync('Baker Street London');`, language: 'js' }]
      },
      {
        name: 'getBackgroundPermissionsAsync',
        type: 'Method',
        description: 'Checks user permissions for accessing location while the app is in the background.',
        required: false,
        examples: [{ code: `let { status } = await Location.getBackgroundPermissionsAsync();`, language: 'js' }]
      },
      {
        name: 'getCurrentPositionAsync',
        type: 'Method',
        description: 'Requests for one-time delivery of the user current location.',
        required: false,
        examples: [{ code: `let location = await Location.getCurrentPositionAsync({});`, language: 'js' }]
      },
      {
        name: 'getForegroundPermissionsAsync',
        type: 'Method',
        description: 'Checks user permissions for accessing location while the app is in the foreground.',
        required: false,
        examples: [{ code: `let { status } = await Location.getForegroundPermissionsAsync();`, language: 'js' }]
      },
      {
        name: 'getHeadingAsync',
        type: 'Method',
        description: 'Gets the current heading information from the device.',
        required: false,
        examples: [{ code: `let heading = await Location.getHeadingAsync();`, language: 'js' }]
      },
      {
        name: 'getLastKnownPositionAsync',
        type: 'Method',
        description: 'Gets the last known position of the device or null if not available.',
        required: false,
        examples: [{ code: `let location = await Location.getLastKnownPositionAsync({});`, language: 'js' }]
      },
      {
        name: 'getProviderStatusAsync',
        type: 'Method',
        description: 'Check status of location providers.',
        required: false,
        examples: [{ code: `let status = await Location.getProviderStatusAsync();`, language: 'js' }]
      },
      {
        name: 'hasServicesEnabledAsync',
        type: 'Method',
        description: 'Checks whether location services are enabled by the user.',
        required: false,
        examples: [{ code: `let enabled = await Location.hasServicesEnabledAsync();`, language: 'js' }]
      },
      {
        name: 'hasStartedGeofencingAsync',
        type: 'Method',
        description: 'Checks whether the geofencing task is started.',
        required: false,
        examples: [{ code: `let started = await Location.hasStartedGeofencingAsync('GEOFENCING_TASK');`, language: 'js' }]
      },
      {
        name: 'hasStartedLocationUpdatesAsync',
        type: 'Method',
        description: 'Checks whether the location task is started.',
        required: false,
        examples: [{ code: `let started = await Location.hasStartedLocationUpdatesAsync('LOCATION_TASK');`, language: 'js' }]
      },
      {
        name: 'installWebGeolocationPolyfill',
        type: 'Method',
        description: 'Polyfills navigator.geolocation for interop with core React Native and Web API.',
        required: false,
        examples: [{ code: `Location.installWebGeolocationPolyfill();`, language: 'js' }]
      },
      {
        name: 'isBackgroundLocationAvailableAsync',
        type: 'Method',
        description: 'Checks if background location is available.',
        required: false,
        examples: [{ code: `let available = await Location.isBackgroundLocationAvailableAsync();`, language: 'js' }]
      },
      {
        name: 'requestBackgroundPermissionsAsync',
        type: 'Method',
        description: 'Asks the user to grant permissions for location while the app is in the background.',
        required: false,
        examples: [{ code: `let { status } = await Location.requestBackgroundPermissionsAsync();`, language: 'js' }]
      },
      {
        name: 'requestForegroundPermissionsAsync',
        type: 'Method',
        description: 'Asks the user to grant permissions for location while the app is in the foreground.',
        required: false,
        examples: [{ code: `let { status } = await Location.requestForegroundPermissionsAsync();`, language: 'js' }]
      },
      {
        name: 'reverseGeocodeAsync',
        type: 'Method',
        description: 'Reverse geocode a location to postal address.',
        required: false,
        examples: [{ code: `let addresses = await Location.reverseGeocodeAsync({ latitude: 37.78825, longitude: -122.4324 });`, language: 'js' }]
      },
      {
        name: 'startGeofencingAsync',
        type: 'Method',
        description: 'Starts geofencing for given regions.',
        required: false,
        examples: [{ code: `await Location.startGeofencingAsync('GEOFENCING_TASK', regions);`, language: 'js' }]
      },
      {
        name: 'startLocationUpdatesAsync',
        type: 'Method',
        description: 'Registers for receiving location updates that can also come when the app is in the background.',
        required: false,
        examples: [{ code: `await Location.startLocationUpdatesAsync('LOCATION_TASK', options);`, language: 'js' }]
      },
      {
        name: 'stopGeofencingAsync',
        type: 'Method',
        description: 'Stops geofencing for specified task.',
        required: false,
        examples: [{ code: `await Location.stopGeofencingAsync('GEOFENCING_TASK');`, language: 'js' }]
      },
      {
        name: 'stopLocationUpdatesAsync',
        type: 'Method',
        description: 'Stops location updates for specified task.',
        required: false,
        examples: [{ code: `await Location.stopLocationUpdatesAsync('LOCATION_TASK');`, language: 'js' }]
      },
      {
        name: 'watchHeadingAsync',
        type: 'Method',
        description: 'Subscribe to compass updates from the device.',
        required: false,
        examples: [{ code: `let subscription = await Location.watchHeadingAsync(callback);`, language: 'js' }]
      },
      {
        name: 'watchPositionAsync',
        type: 'Method',
        description: 'Subscribe to location updates from the device.',
        required: false,
        examples: [{ code: `let subscription = await Location.watchPositionAsync(options, callback);`, language: 'js' }]
      }
    ],
    styles: []
  }
];