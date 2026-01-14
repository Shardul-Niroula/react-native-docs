import { ComponentDoc } from '../types';

export const FEEDBACK_ALERTS_DATA: ComponentDoc[] = [
  {
    id: 'activityindicator',
    name: 'ActivityIndicator',
    category: 'Feedback & Alerts',
    description: 'Displays a circular loading indicator.',
    importCode: "import { ActivityIndicator } from 'react-native';",
    purpose: ['Loading states'],
    basicUsage: [
        {
            title: 'Loading Spinner',
            language: 'jsx',
            code: `<ActivityIndicator size="large" color="#0000ff" />`
        }
    ],
    props: [
        { 
          name: 'animating', 
          type: 'boolean', 
          description: 'Whether to show the indicator.',
          examples: [{ title: 'Is Visible', language: 'jsx', code: '<ActivityIndicator animating={true} />' }]
        },
        { 
          name: 'color', 
          type: 'string', 
          description: 'The foreground color of the spinner.',
          examples: [{ title: 'Custom Color', language: 'jsx', code: '<ActivityIndicator color="#999999" />' }]
        },
        { 
          name: 'size', 
          type: "'small' | 'large'", 
          description: 'Size of the indicator.',
          examples: [
            { title: "'small': Standard size", language: 'jsx', code: '<ActivityIndicator size="small" />' },
            { title: "'large': Bigger size", language: 'jsx', code: '<ActivityIndicator size="large" />' }
          ]
        }
    ],
    styles: []
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'Feedback & Alerts',
    description: 'Launches an alert dialog with the specified title and message.',
    importCode: "import { Alert } from 'react-native';",
    purpose: ['System dialogs', 'Confirmations', 'Errors'],
    basicUsage: [
        {
            title: 'Simple Alert',
            language: 'js',
            code: `Alert.alert("Title", "Message", [{ text: "OK" }]);`
        }
    ],
    props: [],
    styles: []
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'Modal & Overlays',
    description: 'A component to present content above an enclosing view.',
    importCode: "import { Modal } from 'react-native';",
    purpose: ['Popups', 'Full screen overlays'],
    basicUsage: [
        {
            title: 'Basic Modal',
            language: 'jsx',
            code: `<Modal visible={true} animationType="slide">
  <View><Text>I am a modal</Text></View>
</Modal>`
        }
    ],
    props: [
        { 
          name: 'visible', 
          type: 'boolean', 
          description: 'Determines whether the modal is visible.',
          examples: [{ title: 'Show Modal', language: 'jsx', code: '<Modal visible={showModal} />' }]
        },
        { 
          name: 'animationType', 
          type: "'none' | 'slide' | 'fade'", 
          description: 'Controls how the modal animates.',
          examples: [
            { title: "'none': Instant appearance", language: 'jsx', code: '<Modal animationType="none" />' },
            { title: "'slide': Slides up from bottom", language: 'jsx', code: '<Modal animationType="slide" />' },
            { title: "'fade': Fades in", language: 'jsx', code: '<Modal animationType="fade" />' }
          ]
        }
    ],
    styles: []
  }
];