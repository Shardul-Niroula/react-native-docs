import { ComponentDoc } from '../types';

export const EXPO_APP_INFO_DATA: ComponentDoc[] = [
  {
    id: 'expo-constants',
    name: 'expo-constants',
    category: 'Expo: App Info',
    description: 'Provides system information that remains constant throughout the lifetime of your app.',
    importCode: "import Constants from 'expo-constants';",
    purpose: ['Getting app version', 'Manifest info', 'Device ID'],
    installation: {
      type: 'npm',
      package: 'expo-constants',
      command: 'npx expo install expo-constants'
    },
    basicUsage: [
      {
        title: 'Get Version',
        language: 'js',
        code: `console.log(Constants.expoConfig.version);`
      }
    ],
    props: [
      {
        name: 'appOwnership',
        type: 'AppOwnership | null',
        description: 'Returns expo when running in Expo Go, otherwise null.',
        examples: [
          {
            title: 'Check App Ownership',
            language: 'js',
            code: `console.log(Constants.appOwnership); // 'expo' or null`
          }
        ]
      },
      {
        name: 'debugMode',
        type: 'boolean',
        description: 'Returns true when the app is running in debug mode (__DEV__). Otherwise, returns false.',
        examples: [
          {
            title: 'Check Debug Mode',
            language: 'js',
            code: `console.log(Constants.debugMode);`
          }
        ]
      },
      {
        name: 'deviceName',
        type: 'string | undefined',
        description: 'A human-readable name for the device type.',
        examples: [
          {
            title: 'Get Device Name',
            language: 'js',
            code: `console.log(Constants.deviceName);`
          }
        ]
      },
      {
        name: 'deviceYearClass',
        type: 'number | null',
        description: 'The device year class of this device.',
        examples: [
          {
            title: 'Get Device Year Class',
            language: 'js',
            code: `console.log(Constants.deviceYearClass);`
          }
        ]
      },
      {
        name: 'easConfig',
        type: 'ManifestsEASConfig | null',
        description: 'The standard EAS config object populated when using EAS.',
        examples: [
          {
            title: 'Get EAS Config',
            language: 'js',
            code: `console.log(Constants.easConfig);`
          }
        ]
      },
      {
        name: 'executionEnvironment',
        type: 'ExecutionEnvironment',
        description: 'Returns the current execution environment.',
        examples: [
          {
            title: 'Get Execution Environment',
            language: 'js',
            code: `console.log(Constants.executionEnvironment);`
          }
        ]
      },
      {
        name: 'experienceUrl',
        type: 'string',
        description: 'The URL of the experience.',
        examples: [
          {
            title: 'Get Experience URL',
            language: 'js',
            code: `console.log(Constants.experienceUrl);`
          }
        ]
      },
      {
        name: 'expoConfig',
        type: 'ExpoConfig & { hostUri: string} | null',
        description: 'The standard Expo config object defined in app.json and app.config.js files.',
        examples: [
          {
            title: 'Get Expo Config',
            language: 'js',
            code: `console.log(Constants.expoConfig);`
          }
        ]
      },
      {
        name: 'expoGoConfig',
        type: 'ManifestsExpoGoConfig | null',
        description: 'The standard Expo Go config object populated when running in Expo Go.',
        examples: [
          {
            title: 'Get Expo Go Config',
            language: 'js',
            code: `console.log(Constants.expoGoConfig);`
          }
        ]
      },
      {
        name: 'expoRuntimeVersion',
        type: 'string | null',
        description: 'Nullable only on the web.',
        examples: [
          {
            title: 'Get Expo Runtime Version',
            language: 'js',
            code: `console.log(Constants.expoRuntimeVersion);`
          }
        ]
      },
      {
        name: 'expoVersion',
        type: 'string | null',
        description: 'The version string of the Expo Go app currently running. Returns null in bare workflow and web.',
        examples: [
          {
            title: 'Get Expo Version',
            language: 'js',
            code: `console.log(Constants.expoVersion);`
          }
        ]
      },
      {
        name: 'getWebViewUserAgentAsync',
        type: '() => Promise<string | null>',
        description: 'Gets the user agent string which would be included in requests sent by a web view running on this device.',
        examples: [
          {
            title: 'Get WebView User Agent',
            language: 'js',
            code: `const userAgent = await Constants.getWebViewUserAgentAsync();`
          }
        ]
      },
      {
        name: 'intentUri',
        type: 'string | undefined',
        description: 'The intent URI that started the app.',
        examples: [
          {
            title: 'Get Intent URI',
            language: 'js',
            code: `console.log(Constants.intentUri);`
          }
        ]
      },
      {
        name: 'isDetached',
        type: 'boolean | undefined',
        description: 'Whether the app is detached.',
        examples: [
          {
            title: 'Check if Detached',
            language: 'js',
            code: `console.log(Constants.isDetached);`
          }
        ]
      },
      {
        name: 'isHeadless',
        type: 'boolean',
        description: 'Returns true if the app is running in headless mode. Otherwise, returns false.',
        examples: [
          {
            title: 'Check if Headless',
            language: 'js',
            code: `console.log(Constants.isHeadless);`
          }
        ]
      },
      {
        name: 'linkingUri',
        type: 'string',
        description: 'The linking URI.',
        examples: [
          {
            title: 'Get Linking URI',
            language: 'js',
            code: `console.log(Constants.linkingUri);`
          }
        ]
      },
      {
        name: 'manifest2',
        type: 'ExpoUpdatesManifest | null',
        description: 'Manifest for Expo apps using modern Expo Updates from a remote source.',
        examples: [
          {
            title: 'Get Manifest',
            language: 'js',
            code: `console.log(Constants.manifest2);`
          }
        ]
      },
      {
        name: 'platform',
        type: 'PlatformManifest | undefined',
        description: 'Returns the specific platform manifest object.',
        examples: [
          {
            title: 'Get Platform Manifest',
            language: 'js',
            code: `console.log(Constants.platform);`
          }
        ]
      },
      {
        name: 'sessionId',
        type: 'string',
        description: 'A string that is unique to the current session of your app.',
        examples: [
          {
            title: 'Get Session ID',
            language: 'js',
            code: `console.log(Constants.sessionId);`
          }
        ]
      },
      {
        name: 'statusBarHeight',
        type: 'number',
        description: 'The default status bar height for the device.',
        examples: [
          {
            title: 'Get Status Bar Height',
            language: 'js',
            code: `console.log(Constants.statusBarHeight);`
          }
        ]
      },
      {
        name: 'systemFonts',
        type: 'string[]',
        description: 'A list of the system font names available on the current device.',
        examples: [
          {
            title: 'Get System Fonts',
            language: 'js',
            code: `console.log(Constants.systemFonts);`
          }
        ]
      },
      {
        name: 'systemVersion',
        type: 'number | undefined',
        description: 'The system version.',
        examples: [
          {
            title: 'Get System Version',
            language: 'js',
            code: `console.log(Constants.systemVersion);`
          }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-application',
    name: 'expo-application',
    category: 'Expo: App Info',
    description: 'Provides information about the application and utilities for getting the Application ID.',
    importCode: "import * as Application from 'expo-application';",
    purpose: ['Getting Bundle ID', 'App Name'],
    installation: {
      type: 'npm',
      package: 'expo-application',
      command: 'npx expo install expo-application'
    },
    basicUsage: [
      {
        title: 'Get ID',
        language: 'js',
        code: `console.log(Application.applicationId);`
      }
    ],
    props: [
      {
        name: 'applicationId',
        type: 'string | null',
        description: 'The ID of the application. On Android, this is the application ID. On iOS, this is the bundle ID. On web, this is null.',
        examples: [
          {
            title: 'Get Application ID',
            language: 'js',
            code: `console.log(Application.applicationId);`
          }
        ]
      },
      {
        name: 'applicationName',
        type: 'string | null',
        description: 'The human-readable name of the application that is displayed with the app\'s icon on the device\'s home screen or desktop.',
        examples: [
          {
            title: 'Get Application Name',
            language: 'js',
            code: `console.log(Application.applicationName);`
          }
        ]
      },
      {
        name: 'nativeApplicationVersion',
        type: 'string | null',
        description: 'The human-readable version of the native application that may be displayed in the app store.',
        examples: [
          {
            title: 'Get Native Application Version',
            language: 'js',
            code: `console.log(Application.nativeApplicationVersion);`
          }
        ]
      },
      {
        name: 'nativeBuildVersion',
        type: 'string | null',
        description: 'The internal build version of the native application that the app stores may use to distinguish between different binaries.',
        examples: [
          {
            title: 'Get Native Build Version',
            language: 'js',
            code: `console.log(Application.nativeBuildVersion);`
          }
        ]
      },
      {
        name: 'getAndroidId',
        type: '() => Promise<string>',
        description: 'Gets the value of Settings.Secure.ANDROID_ID. This is a hexadecimal string unique to each combination of app-signing key, user, and device.',
        examples: [
          {
            title: 'Get Android ID',
            language: 'js',
            code: `const androidId = await Application.getAndroidId();`
          }
        ]
      },
      {
        name: 'getInstallationTimeAsync',
        type: '() => Promise<Date>',
        description: 'Gets the time the app was installed onto the device, not counting subsequent updates.',
        examples: [
          {
            title: 'Get Installation Time',
            language: 'js',
            code: `const installTime = await Application.getInstallationTimeAsync();`
          }
        ]
      },
      {
        name: 'getInstallReferrerAsync',
        type: '() => Promise<string>',
        description: 'Gets the referrer URL of the installed app with the Install Referrer API from the Google Play Store.',
        examples: [
          {
            title: 'Get Install Referrer',
            language: 'js',
            code: `const referrer = await Application.getInstallReferrerAsync();`
          }
        ]
      },
      {
        name: 'getIosApplicationReleaseTypeAsync',
        type: '() => Promise<ApplicationReleaseType>',
        description: 'Gets the iOS application release type.',
        examples: [
          {
            title: 'Get iOS Application Release Type',
            language: 'js',
            code: `const releaseType = await Application.getIosApplicationReleaseTypeAsync();`
          }
        ]
      },
      {
        name: 'getIosIdForVendorAsync',
        type: '() => Promise<string | null>',
        description: 'Gets the iOS "identifier for vendor" (IDFV) value, a string ID that uniquely identifies a device to the app\'s vendor.',
        examples: [
          {
            title: 'Get iOS ID for Vendor',
            language: 'js',
            code: `const idfv = await Application.getIosIdForVendorAsync();`
          }
        ]
      },
      {
        name: 'getIosPushNotificationServiceEnvironmentAsync',
        type: '() => Promise<PushNotificationServiceEnvironment>',
        description: 'Gets the current Apple Push Notification (APN) service environment.',
        examples: [
          {
            title: 'Get iOS Push Notification Service Environment',
            language: 'js',
            code: `const env = await Application.getIosPushNotificationServiceEnvironmentAsync();`
          }
        ]
      },
      {
        name: 'getLastUpdateTimeAsync',
        type: '() => Promise<Date>',
        description: 'Gets the last time the app was updated from the Google Play Store.',
        examples: [
          {
            title: 'Get Last Update Time',
            language: 'js',
            code: `const updateTime = await Application.getLastUpdateTimeAsync();`
          }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-updates',
    name: 'expo-updates',
    category: 'Expo: App Info',
    description: 'A library that enables your app to manage remote updates to your application code.',
    importCode: "import * as Updates from 'expo-updates';",
    purpose: ['OTA updates', 'CodePush alternative', 'Remote updates'],
    installation: {
      type: 'npm',
      package: 'expo-updates',
      command: 'npx expo install expo-updates'
    },
    basicUsage: [
      {
        title: 'Check for Updates',
        language: 'js',
        code: `const update = await Updates.checkForUpdateAsync();
if (update.isAvailable) {
  await Updates.fetchUpdateAsync();
  await Updates.reloadAsync();
}`
      }
    ],
    props: [
      {
        name: 'channel',
        type: 'string | null',
        description: 'The channel name of the current build, if configured for use with EAS Update.',
        examples: [
          {
            title: 'Get Channel',
            language: 'js',
            code: `console.log(Updates.channel);`
          }
        ]
      },
      {
        name: 'checkAutomatically',
        type: 'UpdatesCheckAutomaticallyValue | null',
        description: 'Determines if and when expo-updates checks for and downloads updates automatically on startup.',
        examples: [
          {
            title: 'Get Check Automatically Setting',
            language: 'js',
            code: `console.log(Updates.checkAutomatically);`
          }
        ]
      },
      {
        name: 'createdAt',
        type: 'Date | null',
        description: 'If expo-updates is enabled, this is a Date object representing the creation time of the update that\'s currently running.',
        examples: [
          {
            title: 'Get Created At',
            language: 'js',
            code: `console.log(Updates.createdAt);`
          }
        ]
      },
      {
        name: 'emergencyLaunchReason',
        type: 'null | string',
        description: 'If isEmergencyLaunch is set to true, this will contain a string error message describing what failed during initialization.',
        examples: [
          {
            title: 'Get Emergency Launch Reason',
            language: 'js',
            code: `console.log(Updates.emergencyLaunchReason);`
          }
        ]
      },
      {
        name: 'isEmbeddedLaunch',
        type: 'boolean',
        description: 'This will be true if the currently running update is the one embedded in the build, and not one downloaded from the updates server.',
        examples: [
          {
            title: 'Check if Embedded Launch',
            language: 'js',
            code: `console.log(Updates.isEmbeddedLaunch);`
          }
        ]
      },
      {
        name: 'isEmergencyLaunch',
        type: 'boolean',
        description: 'True if the app is launching under emergency fallback mechanism.',
        examples: [
          {
            title: 'Check if Emergency Launch',
            language: 'js',
            code: `console.log(Updates.isEmergencyLaunch);`
          }
        ]
      },
      {
        name: 'isEnabled',
        type: 'boolean',
        description: 'Whether expo-updates is enabled.',
        examples: [
          {
            title: 'Check if Enabled',
            language: 'js',
            code: `console.log(Updates.isEnabled);`
          }
        ]
      },
      {
        name: 'launchDuration',
        type: 'null | number',
        description: 'Number of milliseconds it took to launch.',
        examples: [
          {
            title: 'Get Launch Duration',
            language: 'js',
            code: `console.log(Updates.launchDuration);`
          }
        ]
      },
      {
        name: 'manifest',
        type: 'Partial<Manifest>',
        description: 'If expo-updates is enabled, this is the manifest object for the update that\'s currently running.',
        examples: [
          {
            title: 'Get Manifest',
            language: 'js',
            code: `console.log(Updates.manifest);`
          }
        ]
      },
      {
        name: 'runtimeVersion',
        type: 'string | null',
        description: 'The runtime version of the current build.',
        examples: [
          {
            title: 'Get Runtime Version',
            language: 'js',
            code: `console.log(Updates.runtimeVersion);`
          }
        ]
      },
      {
        name: 'updateId',
        type: 'string | null',
        description: 'The UUID that uniquely identifies the currently running update.',
        examples: [
          {
            title: 'Get Update ID',
            language: 'js',
            code: `console.log(Updates.updateId);`
          }
        ]
      },
      {
        name: 'checkForUpdateAsync',
        type: '() => Promise<UpdateCheckResult>',
        description: 'Checks the server to see if a newly deployed update to your project is available.',
        examples: [
          {
            title: 'Check for Update',
            language: 'js',
            code: `const update = await Updates.checkForUpdateAsync();`
          }
        ]
      },
      {
        name: 'clearLogEntriesAsync',
        type: '() => Promise<void>',
        description: 'Clears existing expo-updates log entries.',
        examples: [
          {
            title: 'Clear Log Entries',
            language: 'js',
            code: `await Updates.clearLogEntriesAsync();`
          }
        ]
      },
      {
        name: 'fetchUpdateAsync',
        type: '() => Promise<UpdateFetchResult>',
        description: 'Downloads the most recently deployed update to your project from server to the device\'s local storage.',
        examples: [
          {
            title: 'Fetch Update',
            language: 'js',
            code: `const result = await Updates.fetchUpdateAsync();`
          }
        ]
      },
      {
        name: 'getExtraParamsAsync',
        type: '() => Promise<Record<string, string>>',
        description: 'Retrieves the current extra params.',
        examples: [
          {
            title: 'Get Extra Params',
            language: 'js',
            code: `const params = await Updates.getExtraParamsAsync();`
          }
        ]
      },
      {
        name: 'readLogEntriesAsync',
        type: '(maxAge?: number) => Promise<UpdatesLogEntry[]>',
        description: 'Retrieves the most recent expo-updates log entries.',
        examples: [
          {
            title: 'Read Log Entries',
            language: 'js',
            code: `const logs = await Updates.readLogEntriesAsync();`
          }
        ]
      },
      {
        name: 'reloadAsync',
        type: '(options?: { reloadScreenOptions: ReloadScreenOptions }) => Promise<void>',
        description: 'Instructs the app to reload using the most recently downloaded version.',
        examples: [
          {
            title: 'Reload App',
            language: 'js',
            code: `await Updates.reloadAsync();`
          }
        ]
      },
      {
        name: 'setExtraParamAsync',
        type: '(key: string, value: undefined | null | string) => Promise<void>',
        description: 'Sets an extra param if value is non-null, otherwise unsets the param.',
        examples: [
          {
            title: 'Set Extra Param',
            language: 'js',
            code: `await Updates.setExtraParamAsync('key', 'value');`
          }
        ]
      },
      {
        name: 'setUpdateRequestHeadersOverride',
        type: '(requestHeaders: null | Record<string, string>) => void',
        description: 'Overrides updates request headers in runtime from build time.',
        examples: [
          {
            title: 'Set Request Headers Override',
            language: 'js',
            code: `Updates.setUpdateRequestHeadersOverride({ 'Authorization': 'Bearer token' });`
          }
        ]
      },
      {
        name: 'setUpdateURLAndRequestHeadersOverride',
        type: '(configOverride: null | { requestHeaders: Record<string, string>, updateUrl: string }) => void',
        description: 'Overrides updates URL and request headers in runtime from build time.',
        examples: [
          {
            title: 'Set URL and Headers Override',
            language: 'js',
            code: `Updates.setUpdateURLAndRequestHeadersOverride({
  updateUrl: 'https://example.com/api/manifest',
  requestHeaders: { 'Authorization': 'Bearer token' }
});`
          }
        ]
      }
    ],
    styles: []
  }
];