import { ComponentDoc } from '../types';

export const USER_INPUT_DATA: ComponentDoc[] = [
  {
    id: 'textinput',
    name: 'TextInput',
    category: 'User Input',
    description: 'A foundational component for inputting text into the app via a keyboard.',
    importCode: "import { TextInput } from 'react-native';",
    purpose: ['Collecting user text', 'Passwords', 'Search bars'],
    basicUsage: [
        {
            title: 'Basic Input',
            language: 'jsx',
            code: `<TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => onChangeText(text)}
  value={value}
  placeholder="Type here..."
/>`
        }
    ],
    props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value to show for the text input.',
          examples: [{ title: 'Controlled Value', language: 'jsx', code: '<TextInput value={text} />' }]
        },
        {
          name: 'onChangeText',
          type: 'function',
          description: 'Callback that is called when the text input\'s text changes.',
          examples: [{ title: 'Update State', language: 'jsx', code: '<TextInput onChangeText={(newText) => setText(newText)} />' }]
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'The string that will be rendered before text input has been entered.',
          examples: [{ title: 'Placeholder', language: 'jsx', code: '<TextInput placeholder="Enter your email..." />' }]
        },
        {
          name: 'secureTextEntry',
          type: 'boolean',
          description: 'If true, the text input obscures the text entered (for passwords).',
          default: 'false',
          examples: [{ title: 'Password Input', language: 'jsx', code: '<TextInput secureTextEntry={true} />' }]
        },
        {
          name: 'keyboardType',
          type: "'default' | 'number-pad' | 'email-address' | 'phone-pad'",
          description: 'Determines which keyboard to open.',
          examples: [
            { title: "'default': Standard keyboard", language: 'jsx', code: '<TextInput keyboardType="default" />' },
            { title: "'number-pad': 0-9 keys", language: 'jsx', code: '<TextInput keyboardType="number-pad" />' },
            { title: "'email-address': Includes @ and .", language: 'jsx', code: '<TextInput keyboardType="email-address" />' },
            { title: "'phone-pad': Phone numbers", language: 'jsx', code: '<TextInput keyboardType="phone-pad" />' }
          ]
        },
        {
          name: 'multiline',
          type: 'boolean',
          description: 'If true, the text input can be multiple lines.',
          default: 'false',
          examples: [{ title: 'Text Area', language: 'jsx', code: '<TextInput multiline numberOfLines={4} />' }]
        },
        {
          name: 'autoCapitalize',
          type: "'none' | 'sentences' | 'words' | 'characters'",
          description: 'Can automatically capitalize characters.',
          examples: [
             { title: "'none': Do not auto-capitalize", language: 'jsx', code: '<TextInput autoCapitalize="none" />' },
             { title: "'sentences': First letter of each sentence", language: 'jsx', code: '<TextInput autoCapitalize="sentences" />' },
             { title: "'words': First letter of each word", language: 'jsx', code: '<TextInput autoCapitalize="words" />' },
             { title: "'characters': All characters", language: 'jsx', code: '<TextInput autoCapitalize="characters" />' }
          ]
        }
    ],
    styles: [{ category: 'Text', properties: ['color', 'fontSize', 'fontFamily'] }]
  },
  {
    id: 'pressable',
    name: 'Pressable',
    category: 'User Input',
    description: 'A core component wrapper that can detect various stages of press interactions on any of its defined children.',
    importCode: "import { Pressable } from 'react-native';",
    purpose: ['Handling taps', 'Creating buttons', 'Custom touch feedback'],
    basicUsage: [
        {
            title: 'Basic Press',
            language: 'jsx',
            code: `<Pressable onPress={() => console.log('Pressed')}>
  <Text>I'm pressable!</Text>
</Pressable>`
        },
        {
            title: 'State Styles',
            language: 'jsx',
            code: `<Pressable
  style={({ pressed }) => [
    { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' }
  ]}>
  <Text>Press Me</Text>
</Pressable>`
        }
    ],
    props: [
        {
          name: 'onPress',
          type: 'function',
          description: 'Called when the touch is released.',
          examples: [{ title: 'Handle Tap', language: 'jsx', code: '<Pressable onPress={() => console.log("Pressed!")}><Text>Button</Text></Pressable>' }]
        },
        {
          name: 'onLongPress',
          type: 'function',
          description: 'Called when the touch is held for more than 500ms.',
          examples: [{ title: 'Handle Long Press', language: 'jsx', code: '<Pressable onLongPress={() => console.log("Long pressed!")}><Text>Hold Me</Text></Pressable>' }]
        },
        {
          name: 'android_ripple',
          type: 'RippleConfig',
          description: 'Enables the Android ripple effect.',
          platform: 'Android',
          examples: [{ title: 'Native Ripple', language: 'jsx', code: '<Pressable android_ripple={{ color: "rgba(0,0,0,0.1)" }}><Text>Ripple</Text></Pressable>' }]
        },
        {
          name: 'hitSlop',
          type: 'number | object',
          description: 'Sets additional distance outside of element in which a press can be detected.',
          examples: [{ title: 'Increase Touch Area', language: 'jsx', code: '<Pressable hitSlop={10}><Text>Easier to tap</Text></Pressable>' }]
        }
    ],
    styles: [],
    notes: ['Preferred over TouchableOpacity/Highlight for newer React Native apps due to more granular control.']
  },
  {
    id: 'touchableopacity',
    name: 'TouchableOpacity',
    category: 'User Input',
    description: 'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.',
    importCode: "import { TouchableOpacity } from 'react-native';",
    purpose: ['Touchable areas with visual feedback', 'Buttons with custom styling'],
    basicUsage: [
        {
            title: 'Simple Touchable',
            language: 'jsx',
            code: `<TouchableOpacity onPress={() => alert('Pressed!')}>
  <Text>Tap me!</Text>
</TouchableOpacity>`
        },
        {
            title: 'Custom Opacity',
            language: 'jsx',
            code: `<TouchableOpacity 
  activeOpacity={0.7}
  onPress={() => console.log('Pressed')}
>
  <View style={{ padding: 10, backgroundColor: 'blue' }}>
    <Text style={{ color: 'white' }}>Custom Button</Text>
  </View>
</TouchableOpacity>`
        }
    ],
    props: [
        {
          name: 'activeOpacity',
          type: 'number',
          description: 'Determines what the opacity of the wrapped view should be when touch is active.',
          default: '0.2',
          examples: [{ title: 'Custom Opacity', language: 'jsx', code: '<TouchableOpacity activeOpacity={0.7} />' }]
        },
        {
          name: 'style',
          type: 'ViewStyle',
          description: 'Styles for the touchable opacity component.',
          examples: [{ title: 'Touchable Styles', language: 'jsx', code: '<TouchableOpacity style={{ padding: 10, backgroundColor: "lightblue" }} />' }]
        },
        {
          name: 'onPress',
          type: 'function',
          description: 'Called when the touch is released.',
          examples: [{ title: 'Press Handler', language: 'jsx', code: '<TouchableOpacity onPress={() => console.log("Pressed")} />' }]
        },
        {
          name: 'onPressIn',
          type: 'function',
          description: 'Called as soon as the touchable element is pressed.',
          examples: [{ title: 'Press In', language: 'jsx', code: '<TouchableOpacity onPressIn={() => console.log("Press started")} />' }]
        },
        {
          name: 'onPressOut',
          type: 'function',
          description: 'Called when the touch is released.',
          examples: [{ title: 'Press Out', language: 'jsx', code: '<TouchableOpacity onPressOut={() => console.log("Press ended")} />' }]
        },
        {
          name: 'onLongPress',
          type: 'function',
          description: 'Called if the touch is held for longer than 500ms.',
          examples: [{ title: 'Long Press', language: 'jsx', code: '<TouchableOpacity onLongPress={() => console.log("Long pressed")} />' }]
        },
        {
          name: 'delayPressIn',
          type: 'number',
          description: 'Delay in ms, from onPressIn, before onPressIn is called.',
          examples: [{ title: 'Delayed Press In', language: 'jsx', code: '<TouchableOpacity delayPressIn={100} />' }]
        },
        {
          name: 'delayPressOut',
          type: 'number',
          description: 'Delay in ms, from the release of the touch, before onPressOut is called.',
          examples: [{ title: 'Delayed Press Out', language: 'jsx', code: '<TouchableOpacity delayPressOut={100} />' }]
        },
        {
          name: 'delayLongPress',
          type: 'number',
          description: 'Delay in ms, from onPressIn, before onLongPress is called.',
          default: '500',
          examples: [{ title: 'Custom Long Press Delay', language: 'jsx', code: '<TouchableOpacity delayLongPress={1000} />' }]
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'If true, disable all interactions for this component.',
          default: 'false',
          examples: [{ title: 'Disabled', language: 'jsx', code: '<TouchableOpacity disabled={true} />' }]
        },
        {
          name: 'hitSlop',
          type: 'object | number',
          description: 'Sets additional distance outside of element in which a press can be detected.',
          examples: [{ title: 'Increase Touch Area', language: 'jsx', code: '<TouchableOpacity hitSlop={10} />' }]
        },
        {
          name: 'pressRetentionOffset',
          type: 'object | number',
          description: 'Additional distance outside of element in which a touch is retained.',
          examples: [{ title: 'Press Retention', language: 'jsx', code: '<TouchableOpacity pressRetentionOffset={{top: 20, left: 20, bottom: 20, right: 20}} />' }]
        },
        {
          name: 'testID',
          type: 'string',
          description: 'Used to locate this view in end-to-end tests.',
          examples: [{ title: 'Test ID', language: 'jsx', code: '<TouchableOpacity testID="my-button" />' }]
        }
    ],
    styles: [],
    notes: ['Provides visual feedback by reducing opacity on press. Consider using Pressable for more control.']
  },
  {
    id: 'button',
    name: 'Button',
    category: 'User Input',
    description: 'A basic button component that should render nicely on any platform.',
    importCode: "import { Button } from 'react-native';",
    purpose: ['Simple, native-looking actions'],
    basicUsage: [
        {
            title: 'Simple Button',
            language: 'jsx',
            code: `<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>`
        }
    ],
    props: [
        {
          name: 'title',
          type: 'string',
          description: 'Text to display inside the button.',
          examples: [{ title: 'Button Label', language: 'jsx', code: '<Button title="Submit" />' }]
        },
        {
          name: 'onPress',
          type: 'function',
          description: 'Handler to be called when the user taps the button.',
          examples: [{ title: 'Click Handler', language: 'jsx', code: '<Button onPress={() => alert("Button tapped!")} />' }]
        },
        {
          name: 'color',
          type: 'string',
          description: 'Color of the text (iOS), or background color of the button (Android).',
          examples: [{ title: 'Custom Color', language: 'jsx', code: '<Button color="red" title="Delete" />' }]
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'If true, disable all interactions for this component.',
          examples: [{ title: 'Disabled State', language: 'jsx', code: '<Button disabled={true} title="Cannot Press" />' }]
        }
    ],
    styles: [],
    notes: ['Limited styling options. Use Pressable or TouchableOpacity for custom designs.']
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'User Input',
    description: 'Renders a boolean input (toggle).',
    importCode: "import { Switch } from 'react-native';",
    purpose: ['Toggle settings', 'On/Off states'],
    basicUsage: [
        {
            title: 'Toggle Switch',
            language: 'jsx',
            code: `<Switch
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
  onValueChange={toggleSwitch}
  value={isEnabled}
/>`
        }
    ],
    props: [
        {
          name: 'value',
          type: 'boolean',
          description: 'The value of the switch.',
          examples: [{ title: 'Controlled Value', language: 'jsx', code: '<Switch value={true} />' }]
        },
        {
          name: 'onValueChange',
          type: 'function',
          description: 'Invoked when the user changes the value.',
          examples: [{ title: 'Handle Change', language: 'jsx', code: '<Switch onValueChange={(val) => setEnabled(val)} />' }]
        },
        {
          name: 'trackColor',
          type: 'object',
          description: 'Custom colors for the track.',
          examples: [{ title: 'Track Colors', language: 'jsx', code: '<Switch trackColor={{ false: "grey", true: "blue" }} />' }]
        },
        {
          name: 'thumbColor',
          type: 'color',
          description: 'Color of the foreground switch grip.',
          examples: [{ title: 'Knob Color', language: 'jsx', code: '<Switch thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} />' }]
        }
    ],
    styles: []
  }
];