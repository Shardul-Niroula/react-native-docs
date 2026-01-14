import { ComponentDoc } from '../types';

export const LAYOUT_STYLING_DATA: ComponentDoc[] = [
  {
    id: 'stylesheet',
    name: 'StyleSheet',
    category: 'Layout & Styling',
    description: 'An abstraction similar to CSS StyleSheets to create styles.',
    importCode: "import { StyleSheet } from 'react-native';",
    purpose: ['Defining styles outside of render', 'Performance optimization'],
    basicUsage: [
        {
            title: 'Create Styles',
            language: 'js',
            code: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});`
        }
    ],
    props: [],
    styles: []
  },
  {
    id: 'platform',
    name: 'Platform',
    category: 'Layout & Styling',
    description: 'A module to detect the platform in which the app is running.',
    importCode: "import { Platform } from 'react-native';",
    purpose: ['Platform specific code', 'Checking OS version'],
    basicUsage: [
        {
            title: 'Platform Select',
            language: 'js',
            code: `const styles = {
  ...Platform.select({
    ios: { backgroundColor: 'red' },
    android: { backgroundColor: 'blue' },
  }),
};`
        }
    ],
    props: [],
    styles: []
  },
  {
    id: 'dimensions',
    name: 'Dimensions',
    category: 'Layout & Styling',
    description: 'Get the application window\'s width and height.',
    importCode: "import { Dimensions } from 'react-native';",
    purpose: ['Responsive layout based on screen size'],
    basicUsage: [
        {
            title: 'Get Width/Height',
            language: 'js',
            code: `const { width, height } = Dimensions.get('window');`
        }
    ],
    props: [],
    styles: [],
    notes: ['Prefer using the "useWindowDimensions" hook for automatic updates on rotation.']
  },
  {
    id: 'linking',
    name: 'Linking',
    category: 'Layout & Styling',
    description: 'Provides a general interface to interact with both incoming and outgoing app links.',
    importCode: "import { Linking } from 'react-native';",
    purpose: ['Opening URLs', 'Deep linking', 'Handling incoming links'],
    basicUsage: [
        {
            title: 'Open URL',
            language: 'js',
            code: `Linking.openURL('https://reactnative.dev');`
        },
        {
            title: 'Handle Deep Links',
            language: 'js',
            code: `useEffect(() => {
  const subscription = Linking.addEventListener('url', ({ url }) => {
    console.log('Incoming URL:', url);
  });
  return () => subscription?.remove();
}, []);`
        }
    ],
    props: [],
    styles: []
  }
];