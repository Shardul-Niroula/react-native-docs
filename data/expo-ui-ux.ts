import { ComponentDoc } from '../types';

export const EXPO_UI_UX_DATA: ComponentDoc[] = [
  {
    id: 'expo-linear-gradient',
    name: 'expo-linear-gradient',
    category: 'Expo: UI & UX',
    description: 'Renders a gradient view.',
    importCode: "import { LinearGradient } from 'expo-linear-gradient';",
    purpose: ['Backgrounds', 'Buttons', 'Masks'],
    installation: {
      type: 'npm',
      package: 'expo-linear-gradient',
      command: 'npx expo install expo-linear-gradient'
    },
    basicUsage: [
      {
        title: 'Gradient Box',
        language: 'jsx',
        code: `<LinearGradient
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={styles.linearGradient}>
  <Text style={styles.buttonText}>Sign in with Facebook</Text>
</LinearGradient>`
      }
    ],
    props: [
      { 
        name: 'colors', 
        type: 'string[]', 
        description: 'An array of colors for the gradient.',
        examples: [{ title: 'Red to Blue', language: 'jsx', code: '<LinearGradient colors={["red", "blue"]} />' }]
      },
      { 
        name: 'start', 
        type: '{x, y}', 
        description: 'Start coordinate (0-1).',
        examples: [{ title: 'Top Left', language: 'jsx', code: '<LinearGradient start={{ x: 0, y: 0 }} />' }]
      },
      { 
        name: 'end', 
        type: '{x, y}', 
        description: 'End coordinate (0-1).',
        examples: [{ title: 'Bottom Right', language: 'jsx', code: '<LinearGradient end={{ x: 1, y: 1 }} />' }]
      }
    ],
    styles: []
  },
  {
    id: 'expo-font',
    name: 'expo-font',
    category: 'Expo: UI & UX',
    description: 'Load fonts from the web or static assets.',
    importCode: "import * as Font from 'expo-font';",
    purpose: ['Using custom fonts'],
    installation: {
      type: 'npm',
      package: 'expo-font',
      command: 'npx expo install expo-font'
    },
    basicUsage: [
      {
        title: 'Load Fonts',
        language: 'js',
        code: `const [fontsLoaded] = useFonts({
  'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
});`
      }
    ],
    props: [],
    styles: []
  },
  {
    id: 'expo-blur',
    name: 'expo-blur',
    category: 'Expo: UI & UX',
    description: 'A component that blurs the content underneath it.',
    importCode: "import { BlurView } from 'expo-blur';",
    purpose: ['Glassmorphism effects', 'Overlays'],
    installation: {
      type: 'npm',
      package: 'expo-blur',
      command: 'npx expo install expo-blur'
    },
    basicUsage: [
      {
        title: 'Blur Effect',
        language: 'jsx',
        code: `<BlurView intensity={50} tint="light" style={styles.absolute}>
  <Text>I'm blurred!</Text>
</BlurView>`
      }
    ],
    props: [
      { 
        name: 'intensity', 
        type: 'number', 
        description: 'The intensity of the blur (0-100).',
        examples: [{ title: 'Strong Blur', language: 'jsx', code: '<BlurView intensity={80} />' }]
      },
      { 
        name: 'tint', 
        type: "'light' | 'dark' | 'default'", 
        description: 'The tint of the blur view.',
        examples: [
            { title: "'light': Light frost", language: 'jsx', code: '<BlurView tint="light" />' },
            { title: "'dark': Dark dimming", language: 'jsx', code: '<BlurView tint="dark" />' },
            { title: "'default': System default", language: 'jsx', code: '<BlurView tint="default" />' }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-splash-screen',
    name: 'expo-splash-screen',
    category: 'Expo: UI & UX',
    description: 'A library that provides access to controlling the visibility behavior of native splash screen.',
    importCode: "import * as SplashScreen from 'expo-splash-screen';",
    purpose: ['Custom splash screens', 'Loading states'],
    installation: {
      type: 'npm',
      package: 'expo-splash-screen',
      command: 'npx expo install expo-splash-screen'
    },
    basicUsage: [
      {
        title: 'Prevent Auto Hide',
        language: 'js',
        code: `SplashScreen.preventAutoHideAsync();`
      },
      {
        title: 'Hide Splash Screen',
        language: 'js',
        code: `SplashScreen.hide();`
      }
    ],
    props: [
      {
        name: 'hide',
        type: '() => void',
        description: 'Hides the native splash screen immediately. Be careful to ensure that your app has content ready to display when you hide the splash screen.',
        examples: [
          {
            title: 'Hide Splash Screen',
            language: 'js',
            code: `SplashScreen.hide();`
          }
        ]
      },
      {
        name: 'hideAsync',
        type: '() => Promise<void>',
        description: 'Hides the native splash screen immediately. This method is provided for backwards compatibility.',
        examples: [
          {
            title: 'Hide Splash Screen Async',
            language: 'js',
            code: `await SplashScreen.hideAsync();`
          }
        ]
      },
      {
        name: 'preventAutoHideAsync',
        type: '() => Promise<boolean>',
        description: 'Makes the native splash screen (configured in app.json) remain visible until hideAsync is called. It is recommended to call this in global scope without awaiting.',
        examples: [
          {
            title: 'Prevent Auto Hide',
            language: 'js',
            code: `SplashScreen.preventAutoHideAsync();`
          }
        ]
      },
      {
        name: 'setOptions',
        type: '(options: SplashScreenOptions) => void',
        description: 'Configures the splash screen\'s default animation behavior.',
        examples: [
          {
            title: 'Set Animation Options',
            language: 'js',
            code: `SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});`
          }
        ]
      }
    ],
    styles: []
  }
];