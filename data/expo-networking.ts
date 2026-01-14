import { ComponentDoc } from '../types';

export const EXPO_NETWORKING_DATA: ComponentDoc[] = [
  {
    id: 'expo-web-browser',
    name: 'expo-web-browser',
    category: 'Expo: Networking',
    description: 'Provides access to the system\'s web browser and supports handling redirects.',
    importCode: "import * as WebBrowser from 'expo-web-browser';",
    purpose: ['Opening websites in-app', 'Auth flows'],
    installation: {
      type: 'npm',
      package: 'expo-web-browser',
      command: 'npx expo install expo-web-browser'
    },
    basicUsage: [
      {
        title: 'Open Browser',
        language: 'js',
        code: `await WebBrowser.openBrowserAsync('https://expo.dev');`
      }
    ],
    props: [
      {
        name: 'openBrowserAsync',
        type: 'Method',
        description: 'Opens the url with Safari in a modal on iOS and Chrome in a new custom tab on Android.',
        required: false,
        example: `await WebBrowser.openBrowserAsync('https://expo.dev');`
      },
      {
        name: 'openAuthSessionAsync',
        type: 'Method',
        description: 'Opens the url with Safari in a modal on iOS using ASWebAuthenticationSession for authentication flows.',
        required: false,
        example: `await WebBrowser.openAuthSessionAsync('https://example.com/auth', 'myapp://');`
      },
      {
        name: 'dismissBrowser',
        type: 'Method',
        description: 'Dismisses the presented web browser on iOS.',
        required: false,
        example: `await WebBrowser.dismissBrowser();`
      },
      {
        name: 'dismissAuthSession',
        type: 'Method',
        description: 'Dismisses the current authentication session.',
        required: false,
        example: `WebBrowser.dismissAuthSession();`
      },
      {
        name: 'warmUpAsync',
        type: 'Method',
        description: 'Prepares the browser for faster opening on Android.',
        required: false,
        example: `await WebBrowser.warmUpAsync();`
      },
      {
        name: 'coolDownAsync',
        type: 'Method',
        description: 'Removes all bindings to services created by warmUpAsync.',
        required: false,
        example: `await WebBrowser.coolDownAsync();`
      },
      {
        name: 'mayInitWithUrlAsync',
        type: 'Method',
        description: 'Initiates CustomTabsSession and calls mayLaunchUrl for faster loading.',
        required: false,
        example: `await WebBrowser.mayInitWithUrlAsync('https://example.com');`
      },
      {
        name: 'getCustomTabsSupportingBrowsersAsync',
        type: 'Method',
        description: 'Returns a list of applications package names supporting Custom Tabs.',
        required: false,
        example: `const browsers = await WebBrowser.getCustomTabsSupportingBrowsersAsync();`
      },
      {
        name: 'maybeCompleteAuthSession',
        type: 'Method',
        description: 'Possibly completes an authentication session on web in a window popup.',
        required: false,
        example: `WebBrowser.maybeCompleteAuthSession();`
      }
    ],
    styles: []
  }
];