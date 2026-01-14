
import { ComponentDoc } from '../types';

import { BASIC_UI_DATA } from './basic-ui';
import { LAYOUT_STYLING_DATA } from './layout-styling';
import { LISTS_DATA } from './lists';
import { USER_INPUT_DATA } from './user-input';
import { FEEDBACK_ALERTS_DATA } from './feedback-alerts';
import { GESTURES_DATA } from './gestures';
import { EXPO_MEDIA_FILES_DATA } from './expo-media-files';
import { EXPO_CAMERA_SENSORS_DATA } from './expo-camera-sensors';
import { EXPO_LOCATION_MAPS_DATA } from './expo-location-maps';
import { EXPO_DEVICE_SYSTEM_DATA } from './expo-device-system';
import { EXPO_UI_UX_DATA } from './expo-ui-ux';
import { EXPO_AUTH_SECURITY_DATA } from './expo-auth-security';
import { EXPO_NETWORKING_DATA } from './expo-networking';
import { EXPO_STORAGE_DATA } from './expo-storage';
import { EXPO_NOTIFICATIONS_DATA } from './expo-notifications';
import { EXPO_APP_INFO_DATA } from './expo-app-info';
import { NAVIGATION_DATA } from './navigation';
import { ANIMATION_DATA } from './animation';

export const COMPONENT_DATA: ComponentDoc[] = [
  ...BASIC_UI_DATA,
  ...LAYOUT_STYLING_DATA,
  ...LISTS_DATA,
  ...USER_INPUT_DATA,
  ...FEEDBACK_ALERTS_DATA,
  ...GESTURES_DATA,
  ...EXPO_MEDIA_FILES_DATA,
  ...EXPO_CAMERA_SENSORS_DATA,
  ...EXPO_LOCATION_MAPS_DATA,
  ...EXPO_DEVICE_SYSTEM_DATA,
  ...EXPO_UI_UX_DATA,
  ...EXPO_AUTH_SECURITY_DATA,
  ...EXPO_NETWORKING_DATA,
  ...EXPO_STORAGE_DATA,
  ...EXPO_NOTIFICATIONS_DATA,
  ...EXPO_APP_INFO_DATA,
  ...NAVIGATION_DATA,
  ...ANIMATION_DATA,
];
