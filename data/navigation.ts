import { ComponentDoc } from '../types';

export const NAVIGATION_DATA: ComponentDoc[] = [
  {
    id: 'expo-router',
    name: 'expo-router',
    category: 'Navigation',
    description: 'File-based routing for React Native and Web.',
    importCode: "import { Link, Stack } from 'expo-router';",
    purpose: ['Navigation', 'Deep linking', 'Layouts'],
    basicUsage: [
      {
        title: 'Link',
        language: 'jsx',
        code: `<Link href="/details">Go to Details</Link>`
      },
      {
        title: 'Stack Layout',
        language: 'jsx',
        code: `<Stack>
  <Stack.Screen name="index" options={{ title: 'Home' }} />
</Stack>`
      }
    ],
    props: [
      {
        name: 'Link',
        type: 'React.Element<LinkProps>',
        description: 'Component that renders a link using href to another route.',
        examples: [
          {
            title: 'Basic Link',
            language: 'jsx',
            code: `<Link href="/about">About</Link>`
          },
          {
            title: 'Link with Params',
            language: 'jsx',
            code: `<Link href={{
  pathname: '/user/[id]',
  params: { id: 'bacon' }
}}>View user</Link>`
          }
        ]
      },
      {
        name: 'Redirect',
        type: 'React.Element<RedirectProps>',
        description: 'Redirects to the href as soon as the component is mounted.',
        examples: [
          {
            title: 'Redirect Component',
            language: 'jsx',
            code: `<Redirect href="/login" />`
          }
        ]
      },
      {
        name: 'Slot',
        type: 'React.Element',
        description: 'Renders the currently selected content.',
        examples: [
          {
            title: 'Slot in Layout',
            language: 'jsx',
            code: `<Slot />`
          }
        ]
      },
      {
        name: 'useRouter',
        type: '() => Router',
        description: 'Returns the Router object for imperative navigation.',
        examples: [
          {
            title: 'Use Router Hook',
            language: 'js',
            code: `const router = useRouter();
router.push('/home');`
          }
        ]
      },
      {
        name: 'usePathname',
        type: '() => string',
        description: 'Returns the currently selected route location without search parameters.',
        examples: [
          {
            title: 'Get Current Path',
            language: 'js',
            code: `const pathname = usePathname(); // "/profile/baconbrix"`
          }
        ]
      },
      {
        name: 'useLocalSearchParams',
        type: '() => RouteParams & TParams',
        description: 'Returns the URL parameters for the contextually focused route.',
        examples: [
          {
            title: 'Get Search Params',
            language: 'js',
            code: `const { user, extra } = useLocalSearchParams();`
          }
        ]
      },
      {
        name: 'useGlobalSearchParams',
        type: '() => RouteParams & TParams',
        description: 'Returns URL parameters for globally selected route, including dynamic path segments.',
        examples: [
          {
            title: 'Get Global Search Params',
            language: 'js',
            code: `const { user, extra } = useGlobalSearchParams();`
          }
        ]
      },
      {
        name: 'useSegments',
        type: '() => RouteSegments',
        description: 'Returns a list of selected file segments for the currently selected route.',
        examples: [
          {
            title: 'Get Route Segments',
            language: 'js',
            code: `const segments = useSegments(); // ["profile", "[user]"]`
          }
        ]
      },
      {
        name: 'useNavigation',
        type: '(parent?: string | HrefObject) => NavigationObject',
        description: 'Returns the underlying React Navigation navigation object.',
        examples: [
          {
            title: 'Access Navigation',
            language: 'js',
            code: `const navigation = useNavigation();
navigation.openDrawer();`
          }
        ]
      },
      {
        name: 'useFocusEffect',
        type: '(effect: EffectCallback) => void',
        description: 'Hook to run an effect whenever a route is focused.',
        examples: [
          {
            title: 'Focus Effect',
            language: 'js',
            code: `useFocusEffect(
  useCallback(() => {
    console.log("Route focused");
    return () => console.log("Route unfocused");
  }, [])
);`
          }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'react-navigation',
    name: 'React Navigation',
    category: 'Navigation',
    description: 'Routing and navigation for your React Native apps (Stack, Tabs, Drawer).',
    importCode: "import { createStackNavigator } from '@react-navigation/stack';",
    purpose: ['Screen management', 'Tab bars', 'Drawers'],
    basicUsage: [
      {
        title: 'Stack Navigator',
        language: 'jsx',
        code: `<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>`
      }
    ],
    props: [],
    styles: []
  }
];