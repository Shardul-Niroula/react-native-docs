import { ComponentDoc } from '../types';

export const EXPO_DEVICE_SYSTEM_DATA: ComponentDoc[] = [
  {
    id: 'expo-device',
    name: 'expo-device',
    category: 'Expo: Device & System',
    description: 'Provides access to system information about the physical device.',
    importCode: "import * as Device from 'expo-device';",
    purpose: ['Getting model name', 'Checking if it is a tablet', 'OS version'],
    installation: {
      type: 'npm',
      package: 'expo-device',
      command: 'npx expo install expo-device'
    },
    basicUsage: [
      {
        title: 'Get Model',
        language: 'js',
        code: `console.log(Device.modelName); // e.g. "iPhone 13"`
      }
    ],
    props: [
      {
        name: 'modelName',
        type: 'Constant',
        description: 'The human-friendly name of the device model.',
        examples: [
          { title: 'Get device model', language: 'js', code: 'console.log(Device.modelName); // "iPhone 13"' }
        ]
      },
      {
        name: 'manufacturer',
        type: 'Constant',
        description: 'The actual device manufacturer of the product or hardware.',
        examples: [
          { title: 'Get manufacturer', language: 'js', code: 'console.log(Device.manufacturer); // "Apple"' }
        ]
      },
      {
        name: 'deviceType',
        type: 'Constant',
        description: 'The type of the device as a DeviceType enum value.',
        examples: [
          { title: 'Get device type', language: 'js', code: 'console.log(Device.deviceType); // DeviceType.PHONE' }
        ]
      },
      {
        name: 'osName',
        type: 'Constant',
        description: 'The name of the OS running on the device.',
        examples: [
          { title: 'Get OS name', language: 'js', code: 'console.log(Device.osName); // "iOS"' }
        ]
      },
      {
        name: 'osVersion',
        type: 'Constant',
        description: 'The human-readable OS version string.',
        examples: [
          { title: 'Get OS version', language: 'js', code: 'console.log(Device.osVersion); // "16.0"' }
        ]
      },
      {
        name: 'isDevice',
        type: 'Constant',
        description: 'True if running on a real device, false if simulator/emulator.',
        examples: [
          { title: 'Check if real device', language: 'js', code: 'console.log(Device.isDevice); // true' }
        ]
      },
      {
        name: 'totalMemory',
        type: 'Constant',
        description: 'The device\'s total memory in bytes.',
        examples: [
          { title: 'Get total memory', language: 'js', code: 'console.log(Device.totalMemory); // 8589934592' }
        ]
      },
      {
        name: 'getDeviceTypeAsync',
        type: 'Method',
        description: 'Checks the type of the device as a DeviceType enum value.',
        examples: [
          { title: 'Get device type async', language: 'js', code: 'const type = await Device.getDeviceTypeAsync();' }
        ]
      },
      {
        name: 'getUptimeAsync',
        type: 'Method',
        description: 'Gets the uptime since the last reboot of the device in milliseconds.',
        examples: [
          { title: 'Get device uptime', language: 'js', code: 'const uptime = await Device.getUptimeAsync();' }
        ]
      },
      {
        name: 'isRootedExperimentalAsync',
        type: 'Method',
        description: 'Checks whether the device has been rooted (Android) or jailbroken (iOS).',
        examples: [
          { title: 'Check if rooted', language: 'js', code: 'const isRooted = await Device.isRootedExperimentalAsync();' }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-haptics',
    name: 'expo-haptics',
    category: 'Expo: Device & System',
    description: 'Provides haptic feedback (vibration) for user interactions.',
    importCode: "import * as Haptics from 'expo-haptics';",
    purpose: ['Success/Error feedback', 'Selection feedback'],
    installation: {
      type: 'npm',
      package: 'expo-haptics',
      command: 'npx expo install expo-haptics'
    },
    basicUsage: [
      {
        title: 'Selection',
        language: 'js',
        code: `Haptics.selectionAsync();`
      },
      {
        title: 'Impact',
        language: 'js',
        code: `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);`
      }
    ],
    props: [
      {
        name: 'selectionAsync',
        type: 'Method',
        description: 'Used to let a user know when a selection change has been registered.',
        examples: [
          { title: 'Selection feedback', language: 'js', code: 'await Haptics.selectionAsync();' }
        ]
      },
      {
        name: 'impactAsync',
        type: 'Method',
        description: 'Triggers impact feedback with specified style.',
        examples: [
          { title: 'Light impact', language: 'js', code: 'await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);' },
          { title: 'Medium impact', language: 'js', code: 'await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);' },
          { title: 'Heavy impact', language: 'js', code: 'await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);' }
        ]
      },
      {
        name: 'notificationAsync',
        type: 'Method',
        description: 'Triggers notification feedback for success, warning, or error.',
        examples: [
          { title: 'Success feedback', language: 'js', code: 'await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);' },
          { title: 'Error feedback', language: 'js', code: 'await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);' },
          { title: 'Warning feedback', language: 'js', code: 'await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);' }
        ]
      },
      {
        name: 'performAndroidHapticsAsync',
        type: 'Method',
        description: 'Use the device haptics engine to provide physical feedback (Android only).',
        examples: [
          { title: 'Android haptics', language: 'js', code: 'await Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Confirm);' }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-clipboard',
    name: 'expo-clipboard',
    category: 'Expo: Device & System',
    description: 'Interface for getting and setting clipboard content.',
    importCode: "import * as Clipboard from 'expo-clipboard';",
    purpose: ['Copy to clipboard', 'Paste from clipboard'],
    installation: {
      type: 'npm',
      package: 'expo-clipboard',
      command: 'npx expo install expo-clipboard'
    },
    basicUsage: [
      {
        title: 'Copy Text',
        language: 'js',
        code: `await Clipboard.setStringAsync('hello world');`
      }
    ],
    props: [
      {
        name: 'setStringAsync',
        type: 'Method',
        description: 'Sets the content of the user\'s clipboard.',
        examples: [
          { title: 'Copy text to clipboard', language: 'js', code: 'await Clipboard.setStringAsync("Hello World");' }
        ]
      },
      {
        name: 'getStringAsync',
        type: 'Method',
        description: 'Gets the content of the user\'s clipboard.',
        examples: [
          { title: 'Get text from clipboard', language: 'js', code: 'const text = await Clipboard.getStringAsync();' }
        ]
      },
      {
        name: 'hasStringAsync',
        type: 'Method',
        description: 'Returns whether the clipboard has text content.',
        examples: [
          { title: 'Check if clipboard has text', language: 'js', code: 'const hasText = await Clipboard.hasStringAsync();' }
        ]
      },
      {
        name: 'setImageAsync',
        type: 'Method',
        description: 'Sets an image in the user\'s clipboard.',
        examples: [
          { title: 'Copy image to clipboard', language: 'js', code: 'await Clipboard.setImageAsync(base64Image);' }
        ]
      },
      {
        name: 'getImageAsync',
        type: 'Method',
        description: 'Gets the image from the user\'s clipboard.',
        examples: [
          { title: 'Get image from clipboard', language: 'js', code: 'const image = await Clipboard.getImageAsync({ format: "png" });' }
        ]
      },
      {
        name: 'hasImageAsync',
        type: 'Method',
        description: 'Returns whether the clipboard has an image content.',
        examples: [
          { title: 'Check if clipboard has image', language: 'js', code: 'const hasImage = await Clipboard.hasImageAsync();' }
        ]
      },
      {
        name: 'addClipboardListener',
        type: 'Method',
        description: 'Adds a listener that fires when clipboard content changes.',
        examples: [
          { title: 'Listen for clipboard changes', language: 'js', code: 'const subscription = Clipboard.addClipboardListener(({ contentTypes }) => console.log(contentTypes));' }
        ]
      },
      {
        name: 'isPasteButtonAvailable',
        type: 'Constant',
        description: 'Property that determines if the ClipboardPasteButton is available.',
        examples: [
          { title: 'Check paste button availability', language: 'js', code: 'console.log(Clipboard.isPasteButtonAvailable);' }
        ]
      },
      {
        name: 'ClipboardPasteButton',
        type: 'Component',
        description: 'Component that displays a paste button for clipboard content.',
        examples: [
          { title: 'Use paste button component', language: 'jsx', code: '<ClipboardPasteButton onPress={(data) => console.log(data)} style={{ width: 50, height: 50 }} />' }
        ]
      }
    ],
    styles: []
  }
];