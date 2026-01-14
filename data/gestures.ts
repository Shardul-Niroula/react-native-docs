import { ComponentDoc } from '../types';

export const GESTURES_DATA: ComponentDoc[] = [
  {
    id: 'keyboard',
    name: 'Keyboard',
    category: 'Gestures & Interaction',
    description: 'Module to control keyboard events.',
    importCode: "import { Keyboard } from 'react-native';",
    purpose: ['Dismissing keyboard', 'Listening to keyboard show/hide events'],
    basicUsage: [
        {
            title: 'Dismiss',
            language: 'js',
            code: `Keyboard.dismiss()`
        }
    ],
    props: [],
    styles: []
  }
];