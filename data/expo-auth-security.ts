import { ComponentDoc } from '../types';

export const EXPO_AUTH_SECURITY_DATA: ComponentDoc[] = [
  {
    id: 'expo-auth-session',
    name: 'expo-auth-session',
    category: 'Expo: Auth & Security',
    description: 'Browser-based authentication (OAuth) made easy.',
    importCode: "import * as AuthSession from 'expo-auth-session';",
    purpose: ['Login with Google/Facebook', 'OAuth2 flows'],
    installation: {
      type: 'npm',
      package: 'expo-auth-session',
      command: 'npx expo install expo-auth-session'
    },
    basicUsage: [
      {
        title: 'Web Browser Auth',
        language: 'js',
        code: `const result = await AuthSession.startAsync({ authUrl: '...' });`
      }
    ],
    props: [
      {
        name: 'useAuthRequest',
        type: 'Hook',
        description: 'Load an authorization request for a code. Returns request, response, and promptAsync method.',
        examples: [
          { title: 'Basic auth request hook', language: 'js', code: 'const [request, response, promptAsync] = useAuthRequest(config, discovery);' }
        ]
      },
      {
        name: 'useAutoDiscovery',
        type: 'Hook',
        description: 'Fetch DiscoveryDocument from an OpenID Connect issuer URL.',
        examples: [
          { title: 'Auto discovery hook', language: 'js', code: 'const discovery = useAutoDiscovery("https://example.com/auth");' }
        ]
      },
      {
        name: 'startAsync',
        type: 'Method',
        description: 'Start an auth session by opening a web browser.',
        examples: [
          { title: 'Start auth session', language: 'js', code: 'const result = await AuthSession.startAsync({ authUrl: "..." });' }
        ]
      },
      {
        name: 'exchangeCodeAsync',
        type: 'Method',
        description: 'Exchange an authorization code for an access token.',
        examples: [
          { title: 'Exchange code for token', language: 'js', code: 'const tokenResponse = await AuthSession.exchangeCodeAsync(config, discovery);' }
        ]
      },
      {
        name: 'makeRedirectUri',
        type: 'Method',
        description: 'Create a redirect URI for the current platform and environment.',
        examples: [
          { title: 'Create redirect URI', language: 'js', code: 'const redirectUri = AuthSession.makeRedirectUri({ scheme: "myapp" });' }
        ]
      },
      {
        name: 'AuthRequest',
        type: 'Class',
        description: 'Class for managing authorization requests according to OAuth spec.',
        examples: [
          { title: 'Create auth request', language: 'js', code: 'const request = new AuthRequest({ clientId: "...", redirectUri: "..." });' }
        ]
      },
      {
        name: 'TokenResponse',
        type: 'Class',
        description: 'Class representing token responses with refresh capabilities.',
        examples: [
          { title: 'Check if token needs refresh', language: 'js', code: 'if (tokenResponse.shouldRefresh()) { /* refresh */ }' }
        ]
      }
    ],
    styles: []
  },
  {
    id: 'expo-local-authentication',
    name: 'expo-local-authentication',
    category: 'Expo: Auth & Security',
    description: 'Biometric authentication (FaceID, TouchID).',
    importCode: "import * as LocalAuthentication from 'expo-local-authentication';",
    purpose: ['Unlocking app with FaceID', 'Secure actions'],
    installation: {
      type: 'npm',
      package: 'expo-local-authentication',
      command: 'npx expo install expo-local-authentication'
    },
    basicUsage: [
      {
        title: 'Authenticate',
        language: 'js',
        code: `const result = await LocalAuthentication.authenticateAsync();`
      }
    ],
    props: [
      {
        name: 'authenticateAsync',
        type: 'Method',
        description: 'Attempts to authenticate via Fingerprint/TouchID or FaceID.',
        examples: [
          { title: 'Basic authentication', language: 'js', code: 'const result = await LocalAuthentication.authenticateAsync({ promptMessage: "Authenticate" });' },
          { title: 'Authentication with options', language: 'js', code: 'const result = await LocalAuthentication.authenticateAsync({ promptMessage: "Scan fingerprint", fallbackLabel: "Use PIN" });' }
        ]
      },
      {
        name: 'hasHardwareAsync',
        type: 'Method',
        description: 'Determine whether a face or fingerprint scanner is available.',
        examples: [
          { title: 'Check hardware availability', language: 'js', code: 'const hasHardware = await LocalAuthentication.hasHardwareAsync();' }
        ]
      },
      {
        name: 'isEnrolledAsync',
        type: 'Method',
        description: 'Determine whether the device has saved fingerprints or facial data.',
        examples: [
          { title: 'Check if enrolled', language: 'js', code: 'const isEnrolled = await LocalAuthentication.isEnrolledAsync();' }
        ]
      },
      {
        name: 'supportedAuthenticationTypesAsync',
        type: 'Method',
        description: 'Determine what kinds of authentications are available.',
        examples: [
          { title: 'Get supported types', language: 'js', code: 'const types = await LocalAuthentication.supportedAuthenticationTypesAsync();' }
        ]
      },
      {
        name: 'getEnrolledLevelAsync',
        type: 'Method',
        description: 'Determine what kind of authentication is enrolled on the device.',
        examples: [
          { title: 'Get security level', language: 'js', code: 'const level = await LocalAuthentication.getEnrolledLevelAsync();' }
        ]
      },
      {
        name: 'cancelAuthenticate',
        type: 'Method',
        description: 'Cancels authentication flow.',
        examples: [
          { title: 'Cancel authentication', language: 'js', code: 'await LocalAuthentication.cancelAuthenticate();' }
        ]
      }
    ],
    styles: []
  }
];