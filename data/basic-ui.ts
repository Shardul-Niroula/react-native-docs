import { ComponentDoc } from '../types';

export const BASIC_UI_DATA: ComponentDoc[] = [
  {
    id: 'view',
    name: 'View',
    category: 'Basic UI',
    description: 'The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.',
    importCode: "import { View } from 'react-native';",
    purpose: ['Container for other components', 'Layout with Flexbox', 'Background colors and borders'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
      {
        title: 'Basic Container',
        language: 'jsx',
        code: `<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Centered Text</Text>
</View>`
      },
      {
        title: 'Box with Shadow',
        language: 'jsx',
        code: `<View style={{ 
  width: 100, 
  height: 100, 
  backgroundColor: 'white', 
  elevation: 5, 
  shadowColor: '#000', 
  shadowOffset: {width: 0, height: 2}, 
  shadowOpacity: 0.25 
}} />`
      }
    ],
    props: [
      {
        name: 'style',
        type: 'ViewStyle',
        description: 'Styles for the view (flexbox, borders, colors, etc).',
        examples: [{ title: 'Common Styles', language: 'jsx', code: "<View style={{ backgroundColor: 'blue', borderRadius: 8, padding: 10 }} />" }]
      },
      {
        name: 'onLayout',
        type: 'function',
        description: 'Invoked on mount and layout changes.',
        examples: [{ title: 'Log Dimensions', language: 'jsx', code: '<View onLayout={(event) => console.log(event.nativeEvent.layout)} />' }]
      },
      {
        name: 'testID',
        type: 'string',
        description: 'Used to locate this view in end-to-end tests.',
        examples: [{ title: 'Test ID', language: 'jsx', code: '<View testID="login_screen_container" />' }]
      },
      {
        name: 'pointerEvents',
        type: "'box-none' | 'none' | 'box-only' | 'auto'",
        description: 'Controls whether the View can be the target of touch events.',
        examples: [
            { title: "'box-none': View is transparent to touches, but children receive them", language: 'jsx', code: "<View pointerEvents='box-none' style={styles.overlay} />" },
            { title: "'none': Neither the View nor children receive touches", language: 'jsx', code: "<View pointerEvents='none' style={styles.decoration} />" },
            { title: "'box-only': View receives touches, but children do not", language: 'jsx', code: "<View pointerEvents='box-only' />" },
            { title: "'auto': Default behavior", language: 'jsx', code: "<View pointerEvents='auto' />" }
        ]
      },
      {
        name: 'accessible',
        type: 'boolean',
        description: 'When true, indicates that the view is an accessibility element and discoverable by assistive technologies.',
        examples: [{ title: 'Accessible View', language: 'jsx', code: '<View accessible={true} accessibilityLabel="Main content area" />' }]
      },
      {
        name: 'accessibilityActions',
        type: 'array',
        description: 'Accessibility actions allow an assistive technology to programmatically invoke the actions of a component.',
        examples: [{ title: 'Custom Actions', language: 'jsx', code: '<View accessible={true} accessibilityActions={[{name: "cut", label: "Cut text"}]} onAccessibilityAction={(event) => {}} />' }]
      },
      {
        name: 'accessibilityElementsHidden',
        type: 'boolean',
        description: 'A boolean value indicating whether the given accessibility element, and any accessibility elements it contains, are hidden. (iOS only)',
        examples: [{ title: 'Hide from Screen Reader', language: 'jsx', code: '<View accessibilityElementsHidden={true} />' }]
      },
      {
        name: 'accessibilityHint',
        type: 'string',
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element.',
        examples: [{ title: 'Action Hint', language: 'jsx', code: '<View accessible={true} accessibilityHint="Opens the settings menu" />' }]
      },
      {
        name: 'accessibilityIgnoresInvertColors',
        type: 'boolean',
        description: 'A value indicating this view should or should not be inverted when color inversion is turned on. (iOS only)',
        examples: [{ title: 'Ignore Color Inversion', language: 'jsx', code: '<View accessibilityIgnoresInvertColors={true} />' }]
      },
      {
        name: 'accessibilityLabel',
        type: 'string',
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element.',
        examples: [{ title: 'Custom Label', language: 'jsx', code: '<View accessible={true} accessibilityLabel="Custom button label" />' }]
      },
      {
        name: 'accessibilityLanguage',
        type: 'string',
        description: 'A value indicating which language should be used by the screen reader. Should follow BCP 47 specification. (iOS only)',
        examples: [{ title: 'Language Override', language: 'jsx', code: '<View accessibilityLanguage="en-US" />' }]
      },
      {
        name: 'accessibilityLiveRegion',
        type: "'none' | 'polite' | 'assertive'",
        description: 'Indicates to accessibility services whether the user should be notified when this view changes. (Android only)',
        examples: [{ title: 'Live Region', language: 'jsx', code: '<View accessibilityLiveRegion="polite" />' }]
      },
      {
        name: 'accessibilityRole',
        type: 'string',
        description: 'Communicates the purpose of a component to the user of an assistive technology.',
        examples: [{ title: 'Button Role', language: 'jsx', code: '<View accessible={true} accessibilityRole="button" />' }]
      },
      {
        name: 'accessibilityState',
        type: 'object',
        description: 'Describes the current state of a component to the user of an assistive technology.',
        examples: [{ title: 'State Object', language: 'jsx', code: '<View accessible={true} accessibilityState={{disabled: false, selected: true}} />' }]
      },
      {
        name: 'accessibilityValue',
        type: 'object',
        description: 'Represents the current value of a component. Can be a textual description or range information.',
        examples: [{ title: 'Value Object', language: 'jsx', code: '<View accessible={true} accessibilityValue={{min: 0, max: 100, now: 50}} />' }]
      },
      {
        name: 'accessibilityViewIsModal',
        type: 'boolean',
        description: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. (iOS only)',
        examples: [{ title: 'Modal View', language: 'jsx', code: '<View accessibilityViewIsModal={true} />' }]
      },
      {
        name: 'aria-busy',
        type: 'boolean',
        description: 'Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete.',
        examples: [{ title: 'Busy State', language: 'jsx', code: '<View aria-busy={true} />' }]
      },
      {
        name: 'aria-checked',
        type: 'boolean | "mixed"',
        description: 'Indicates the state of a checkable element.',
        examples: [{ title: 'Checked State', language: 'jsx', code: '<View aria-checked={true} />' }]
      },
      {
        name: 'aria-disabled',
        type: 'boolean',
        description: 'Indicates that the element is perceivable but disabled.',
        examples: [{ title: 'Disabled State', language: 'jsx', code: '<View aria-disabled={true} />' }]
      },
      {
        name: 'aria-expanded',
        type: 'boolean',
        description: 'Indicates whether an expandable element is currently expanded or collapsed.',
        examples: [{ title: 'Expanded State', language: 'jsx', code: '<View aria-expanded={false} />' }]
      },
      {
        name: 'aria-hidden',
        type: 'boolean',
        description: 'Indicates whether the element is hidden from assistive technologies.',
        examples: [{ title: 'Hidden from Screen Reader', language: 'jsx', code: '<View aria-hidden={true} />' }]
      },
      {
        name: 'aria-label',
        type: 'string',
        description: 'Defines a string value that labels an interactive element.',
        examples: [{ title: 'ARIA Label', language: 'jsx', code: '<View aria-label="Descriptive label" />' }]
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'Identifies the element that labels the element it is applied to. (Android only)',
        examples: [{ title: 'Labelled By', language: 'jsx', code: '<View aria-labelledby="labelId" />' }]
      },
      {
        name: 'aria-live',
        type: "'off' | 'polite' | 'assertive'",
        description: 'Indicates that an element will be updated, and describes the types of updates the user can expect. (Android only)',
        examples: [{ title: 'Live Region', language: 'jsx', code: '<View aria-live="polite" />' }]
      },
      {
        name: 'aria-modal',
        type: 'boolean',
        description: 'Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings. (iOS only)',
        examples: [{ title: 'Modal Dialog', language: 'jsx', code: '<View aria-modal={true} />' }]
      },
      {
        name: 'aria-selected',
        type: 'boolean',
        description: 'Indicates whether a selectable element is currently selected or not.',
        examples: [{ title: 'Selected State', language: 'jsx', code: '<View aria-selected={true} />' }]
      },
      {
        name: 'aria-valuemax',
        type: 'number',
        description: 'Represents the maximum value for range-based components.',
        examples: [{ title: 'Max Value', language: 'jsx', code: '<View aria-valuemax={100} />' }]
      },
      {
        name: 'aria-valuemin',
        type: 'number',
        description: 'Represents the minimum value for range-based components.',
        examples: [{ title: 'Min Value', language: 'jsx', code: '<View aria-valuemin={0} />' }]
      },
      {
        name: 'aria-valuenow',
        type: 'number',
        description: 'Represents the current value for range-based components.',
        examples: [{ title: 'Current Value', language: 'jsx', code: '<View aria-valuenow={50} />' }]
      },
      {
        name: 'aria-valuetext',
        type: 'string',
        description: 'Represents the textual description of the component.',
        examples: [{ title: 'Value Text', language: 'jsx', code: '<View aria-valuetext="50 percent" />' }]
      },
      {
        name: 'collapsable',
        type: 'boolean',
        description: 'Views that are only used to layout their children may be automatically removed from the native hierarchy as an optimization.',
        examples: [{ title: 'Prevent Collapsing', language: 'jsx', code: '<View collapsable={false} />' }]
      },
      {
        name: 'collapsableChildren',
        type: 'boolean',
        description: 'Setting to false prevents direct children of the view from being removed from the native view hierarchy.',
        examples: [{ title: 'Keep Children', language: 'jsx', code: '<View collapsableChildren={false} />' }]
      },
      {
        name: 'experimental_accessibilityOrder',
        type: 'array',
        description: 'Indicates the order in which an assistive technology focuses descendants of this View. (Experimental)',
        examples: [{ title: 'Custom Focus Order', language: 'jsx', code: '<View experimental_accessibilityOrder={["child1", "child2"]} />' }]
      },
      {
        name: 'focusable',
        type: 'boolean',
        description: 'Whether this View should be focusable with a non-touch input device. (Android only)',
        examples: [{ title: 'Focusable', language: 'jsx', code: '<View focusable={true} />' }]
      },
      {
        name: 'hitSlop',
        type: 'object',
        description: 'This defines how far a touch event can start away from the view.',
        examples: [{ title: 'Extended Touch Area', language: 'jsx', code: '<View hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} />' }]
      },
      {
        name: 'id',
        type: 'string',
        description: 'Used to locate this view from native classes. Has precedence over nativeID prop.',
        examples: [{ title: 'Native ID', language: 'jsx', code: '<View id="myView" />' }]
      },
      {
        name: 'importantForAccessibility',
        type: "'auto' | 'yes' | 'no' | 'no-hide-descendants'",
        description: 'Controls how view is important for accessibility. (Android only)',
        examples: [{ title: 'Important for Accessibility', language: 'jsx', code: '<View importantForAccessibility="yes" />' }]
      },
      {
        name: 'nativeID',
        type: 'string',
        description: 'Used to locate this view from native classes.',
        examples: [{ title: 'Native ID', language: 'jsx', code: '<View nativeID="myNativeView" />' }]
      },
      {
        name: 'needsOffscreenAlphaCompositing',
        type: 'boolean',
        description: 'Whether this View needs to rendered offscreen and composited with an alpha to preserve correct colors and blending.',
        examples: [{ title: 'Alpha Compositing', language: 'jsx', code: '<View needsOffscreenAlphaCompositing={true} />' }]
      },
      {
        name: 'nextFocusDown',
        type: 'number',
        description: 'Designates the next view to receive focus when the user navigates down. (Android only)',
        examples: [{ title: 'Focus Navigation', language: 'jsx', code: '<View nextFocusDown={nextViewId} />' }]
      },
      {
        name: 'nextFocusForward',
        type: 'number',
        description: 'Designates the next view to receive focus when the user navigates forward. (Android only)',
        examples: [{ title: 'Forward Focus', language: 'jsx', code: '<View nextFocusForward={nextViewId} />' }]
      },
      {
        name: 'nextFocusLeft',
        type: 'number',
        description: 'Designates the next view to receive focus when the user navigates left. (Android only)',
        examples: [{ title: 'Left Focus', language: 'jsx', code: '<View nextFocusLeft={leftViewId} />' }]
      },
      {
        name: 'nextFocusRight',
        type: 'number',
        description: 'Designates the next view to receive focus when the user navigates right. (Android only)',
        examples: [{ title: 'Right Focus', language: 'jsx', code: '<View nextFocusRight={rightViewId} />' }]
      },
      {
        name: 'nextFocusUp',
        type: 'number',
        description: 'Designates the next view to receive focus when the user navigates up. (Android only)',
        examples: [{ title: 'Up Focus', language: 'jsx', code: '<View nextFocusUp={upViewId} />' }]
      },
      {
        name: 'onAccessibilityAction',
        type: 'function',
        description: 'Invoked when the user performs the accessibility actions.',
        examples: [{ title: 'Handle Action', language: 'jsx', code: '<View onAccessibilityAction={(event) => console.log(event)} />' }]
      },
      {
        name: 'onAccessibilityEscape',
        type: 'function',
        description: 'When accessible is true, the system will invoke this function when the user performs the escape gesture. (iOS only)',
        examples: [{ title: 'Escape Handler', language: 'jsx', code: '<View onAccessibilityEscape={() => console.log("Escape")} />' }]
      },
      {
        name: 'onAccessibilityTap',
        type: 'function',
        description: 'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture. (iOS only)',
        examples: [{ title: 'Tap Handler', language: 'jsx', code: '<View onAccessibilityTap={() => console.log("Tap")} />' }]
      },
      {
        name: 'onMagicTap',
        type: 'function',
        description: 'When accessible is true, the system will invoke this function when the user performs the magic tap gesture. (iOS only)',
        examples: [{ title: 'Magic Tap Handler', language: 'jsx', code: '<View onMagicTap={() => console.log("Magic tap")} />' }]
      },
      {
        name: 'onMoveShouldSetResponder',
        type: 'function',
        description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.',
        examples: [{ title: 'Move Responder', language: 'jsx', code: '<View onMoveShouldSetResponder={() => true} />' }]
      },
      {
        name: 'onMoveShouldSetResponderCapture',
        type: 'function',
        description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.',
        examples: [{ title: 'Capture Move', language: 'jsx', code: '<View onMoveShouldSetResponderCapture={() => true} />' }]
      },
      {
        name: 'onResponderGrant',
        type: 'function',
        description: 'The View is now responding for touch events. This is the time to highlight and show the user what is happening.',
        examples: [{ title: 'Grant Responder', language: 'jsx', code: '<View onResponderGrant={() => console.log("Granted")} />' }]
      },
      {
        name: 'onResponderMove',
        type: 'function',
        description: 'The user is moving their finger.',
        examples: [{ title: 'Move Handler', language: 'jsx', code: '<View onResponderMove={(event) => console.log(event)} />' }]
      },
      {
        name: 'onResponderReject',
        type: 'function',
        description: 'Another responder is already active and will not release it to that View asking to be the responder.',
        examples: [{ title: 'Reject Handler', language: 'jsx', code: '<View onResponderReject={() => console.log("Rejected")} />' }]
      },
      {
        name: 'onResponderRelease',
        type: 'function',
        description: 'Fired at the end of the touch.',
        examples: [{ title: 'Release Handler', language: 'jsx', code: '<View onResponderRelease={() => console.log("Released")} />' }]
      },
      {
        name: 'onResponderTerminate',
        type: 'function',
        description: 'The responder has been taken from the View.',
        examples: [{ title: 'Terminate Handler', language: 'jsx', code: '<View onResponderTerminate={() => console.log("Terminated")} />' }]
      },
      {
        name: 'onResponderTerminationRequest',
        type: 'function',
        description: 'Some other View wants to become responder and is asking this View to release its responder.',
        examples: [{ title: 'Termination Request', language: 'jsx', code: '<View onResponderTerminationRequest={() => true} />' }]
      },
      {
        name: 'onStartShouldSetResponder',
        type: 'function',
        description: 'Does this view want to become responder on the start of a touch?',
        examples: [{ title: 'Start Responder', language: 'jsx', code: '<View onStartShouldSetResponder={() => true} />' }]
      },
      {
        name: 'onStartShouldSetResponderCapture',
        type: 'function',
        description: 'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler.',
        examples: [{ title: 'Capture Start', language: 'jsx', code: '<View onStartShouldSetResponderCapture={() => true} />' }]
      },
      {
        name: 'ref',
        type: 'function',
        description: 'A ref setter that will be assigned an element node when mounted.',
        examples: [{ title: 'Ref Usage', language: 'jsx', code: '<View ref={(ref) => this.myView = ref} />' }]
      },
      {
        name: 'removeClippedSubviews',
        type: 'boolean',
        description: 'This is a reserved performance property exposed by RCTView and is useful for scrolling content when there are many subviews.',
        examples: [{ title: 'Performance Optimization', language: 'jsx', code: '<View removeClippedSubviews={true} />' }]
      },
      {
        name: 'renderToHardwareTextureAndroid',
        type: 'boolean',
        description: 'Whether this View should render itself into a single hardware texture on the GPU. (Android only)',
        examples: [{ title: 'Hardware Texture', language: 'jsx', code: '<View renderToHardwareTextureAndroid={true} />' }]
      },
      {
        name: 'role',
        type: 'string',
        description: 'Communicates the purpose of a component to the user of an assistive technology. Has precedence over the accessibilityRole prop.',
        examples: [{ title: 'Role Override', language: 'jsx', code: '<View role="button" />' }]
      },
      {
        name: 'shouldRasterizeIOS',
        type: 'boolean',
        description: 'Whether this View should be rendered as a bitmap before compositing. (iOS only)',
        examples: [{ title: 'Rasterize', language: 'jsx', code: '<View shouldRasterizeIOS={true} />' }]
      },
      {
        name: 'tabIndex',
        type: '0 | -1',
        description: 'Whether this View should be focusable with a non-touch input device. (Android only)',
        examples: [{ title: 'Tab Index', language: 'jsx', code: '<View tabIndex={0} />' }]
      }
    ],
    styles: [
       {
        category: 'Layout (Flexbox)',
        properties: ['flex', 'flexDirection', 'justifyContent', 'alignItems', 'width', 'height', 'margin', 'padding']
       },
       {
         category: 'Appearance',
         properties: ['backgroundColor', 'opacity', 'borderRadius', 'borderWidth', 'borderColor']
       },
       {
         category: 'Shadows',
         properties: ['shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation (Android)']
       }
    ]
  },
  {
    id: 'text',
    name: 'Text',
    category: 'Basic UI',
    description: 'The Text component is one of the most fundamental components in React Native and Expo. It is used to display text and to nest other text components.',
    importCode: "import { Text } from 'react-native';",
    purpose: [
      'Display static or dynamic text',
      'Style text (font, color, size, alignment)',
      'Nest text elements',
      'Handle press events on text'
    ],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
      {
        title: 'Simple Text',
        language: 'jsx',
        code: '<Text>Hello World</Text>'
      },
      {
        title: 'Nested Text',
        language: 'jsx',
        code: `<Text>
  Normal text <Text style={{ fontWeight: 'bold' }}>bold text</Text>
</Text>`
      }
    ],
    props: [
      {
        name: 'numberOfLines',
        type: 'number',
        description: 'Limits the number of lines displayed. Extra text is truncated.',
        examples: [{ title: 'Truncate after 2 lines', language: 'jsx', code: '<Text numberOfLines={2} ellipsizeMode="tail">This long text will be truncated after two lines...</Text>' }]
      },
      {
        name: 'onPress',
        type: 'function',
        description: 'Callback when text is pressed.',
        examples: [{ title: 'Handle Press', language: 'jsx', code: '<Text onPress={() => alert("Text Pressed!")}>Click Me</Text>' }]
      },
      {
        name: 'selectable',
        type: 'boolean',
        description: 'Allows the text to be selectable (copyable).',
        examples: [{ title: 'Copyable Text', language: 'jsx', code: '<Text selectable>You can long-press to copy this text.</Text>' }]
      },
      {
        name: 'accessible',
        type: 'boolean',
        description: 'When set to true, indicates that the view is an accessibility element.',
        examples: [{ title: 'Accessible Text', language: 'jsx', code: '<Text accessible={true}>Screen reader can focus this text</Text>' }]
      },
      {
        name: 'accessibilityActions',
        type: 'array',
        description: 'Accessibility actions allow an assistive technology to programmatically invoke the actions of a component.',
        examples: [{ title: 'Custom Actions', language: 'jsx', code: '<Text accessible={true} accessibilityActions={[{name: "cut", label: "Cut text"}]} onAccessibilityAction={(event) => {}} />' }]
      },
      {
        name: 'accessibilityHint',
        type: 'string',
        description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element.',
        examples: [{ title: 'Action Hint', language: 'jsx', code: '<Text accessible={true} accessibilityHint="Opens the settings menu" />' }]
      },
      {
        name: 'accessibilityLabel',
        type: 'string',
        description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element.',
        examples: [{ title: 'Custom Label', language: 'jsx', code: '<Text accessible={true} accessibilityLabel="Custom button label" />' }]
      },
      {
        name: 'accessibilityLanguage',
        type: 'string',
        description: 'A value indicating which language should be used by the screen reader. Should follow BCP 47 specification. (iOS only)',
        examples: [{ title: 'Language Override', language: 'jsx', code: '<Text accessibilityLanguage="en-US" />' }]
      },
      {
        name: 'accessibilityRole',
        type: 'string',
        description: 'Tells the screen reader to treat the currently focused on element as having a specific role.',
        examples: [{ title: 'Button Role', language: 'jsx', code: '<Text accessible={true} accessibilityRole="button" />' }]
      },
      {
        name: 'accessibilityState',
        type: 'object',
        description: 'Tells the screen reader to treat the currently focused on element as being in a specific state.',
        examples: [{ title: 'State Object', language: 'jsx', code: '<Text accessible={true} accessibilityState={{disabled: false, selected: true}} />' }]
      },
      {
        name: 'adjustsFontSizeToFit',
        type: 'boolean',
        description: 'Specifies whether fonts should be scaled down automatically to fit given style constraints.',
        examples: [{ title: 'Auto-fit Font', language: 'jsx', code: '<Text adjustsFontSizeToFit={true} numberOfLines={1}>Long text that will shrink to fit</Text>' }]
      },
      {
        name: 'allowFontScaling',
        type: 'boolean',
        description: 'Specifies whether fonts should scale to respect Text Size accessibility settings.',
        examples: [{ title: 'Font Scaling', language: 'jsx', code: '<Text allowFontScaling={false}>This text won\'t scale with system font size</Text>' }]
      },
      {
        name: 'android_hyphenationFrequency',
        type: "'none' | 'normal' | 'full'",
        description: 'Sets the frequency of automatic hyphenation to use when determining word breaks on Android API Level 23+.',
        examples: [{ title: 'Hyphenation', language: 'jsx', code: '<Text android_hyphenationFrequency="normal" />' }]
      },
      {
        name: 'aria-busy',
        type: 'boolean',
        description: 'Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete.',
        examples: [{ title: 'Busy State', language: 'jsx', code: '<Text aria-busy={true} />' }]
      },
      {
        name: 'aria-checked',
        type: 'boolean | "mixed"',
        description: 'Indicates the state of a checkable element.',
        examples: [{ title: 'Checked State', language: 'jsx', code: '<Text aria-checked={true} />' }]
      },
      {
        name: 'aria-disabled',
        type: 'boolean',
        description: 'Indicates that the element is perceivable but disabled.',
        examples: [{ title: 'Disabled State', language: 'jsx', code: '<Text aria-disabled={true} />' }]
      },
      {
        name: 'aria-expanded',
        type: 'boolean',
        description: 'Indicates whether an expandable element is currently expanded or collapsed.',
        examples: [{ title: 'Expanded State', language: 'jsx', code: '<Text aria-expanded={false} />' }]
      },
      {
        name: 'aria-label',
        type: 'string',
        description: 'Defines a string value that labels an interactive element.',
        examples: [{ title: 'ARIA Label', language: 'jsx', code: '<Text aria-label="Descriptive label" />' }]
      },
      {
        name: 'aria-selected',
        type: 'boolean',
        description: 'Indicates whether a selectable element is currently selected or not.',
        examples: [{ title: 'Selected State', language: 'jsx', code: '<Text aria-selected={true} />' }]
      },
      {
        name: 'dataDetectorType',
        type: "'phoneNumber' | 'link' | 'email' | 'none' | 'all'",
        description: 'Determines the types of data converted to clickable URLs in the text element. (Android only)',
        examples: [{ title: 'Data Detection', language: 'jsx', code: '<Text dataDetectorType="phoneNumber">Call 555-1234</Text>' }]
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Specifies the disabled state of the text view for testing purposes. (Android only)',
        examples: [{ title: 'Disabled', language: 'jsx', code: '<Text disabled={true} />' }]
      },
      {
        name: 'dynamicTypeRamp',
        type: "'caption2' | 'caption1' | 'footnote' | 'subheadline' | 'callout' | 'body' | 'headline' | 'title3' | 'title2' | 'title1' | 'largeTitle'",
        description: 'The Dynamic Type ramp to apply to this element on iOS.',
        examples: [{ title: 'Dynamic Type', language: 'jsx', code: '<Text dynamicTypeRamp="headline" />' }]
      },
      {
        name: 'ellipsizeMode',
        type: "'head' | 'middle' | 'tail' | 'clip'",
        description: 'When numberOfLines is set, this prop defines how the text will be truncated.',
        examples: [{ title: 'Ellipsis Mode', language: 'jsx', code: '<Text numberOfLines={1} ellipsizeMode="middle">Very long text that will be truncated in the middle</Text>' }]
      },
      {
        name: 'id',
        type: 'string',
        description: 'Used to locate this view from native code. Has precedence over nativeID prop.',
        examples: [{ title: 'Native ID', language: 'jsx', code: '<Text id="myText" />' }]
      },
      {
        name: 'maxFontSizeMultiplier',
        type: 'number',
        description: 'Specifies the largest possible scale a font can reach when allowFontScaling is enabled.',
        examples: [{ title: 'Max Font Scale', language: 'jsx', code: '<Text maxFontSizeMultiplier={2}>Text with max 2x scaling</Text>' }]
      },
      {
        name: 'minimumFontScale',
        type: 'number',
        description: 'Specifies the smallest possible scale a font can reach when adjustsFontSizeToFit is enabled.',
        examples: [{ title: 'Min Font Scale', language: 'jsx', code: '<Text adjustsFontSizeToFit={true} minimumFontScale={0.5}>Text that shrinks to 50% minimum</Text>' }]
      },
      {
        name: 'nativeID',
        type: 'string',
        description: 'Used to locate this view from native code.',
        examples: [{ title: 'Native ID', language: 'jsx', code: '<Text nativeID="myNativeText" />' }]
      },
      {
        name: 'onAccessibilityAction',
        type: 'function',
        description: 'Invoked when the user performs the accessibility actions.',
        examples: [{ title: 'Handle Action', language: 'jsx', code: '<Text onAccessibilityAction={(event) => console.log(event)} />' }]
      },
      {
        name: 'onLayout',
        type: 'function',
        description: 'Invoked on mount and on layout changes.',
        examples: [{ title: 'Layout Callback', language: 'jsx', code: '<Text onLayout={(event) => console.log(event.nativeEvent.layout)} />' }]
      },
      {
        name: 'onLongPress',
        type: 'function',
        description: 'This function is called on long press.',
        examples: [{ title: 'Long Press', language: 'jsx', code: '<Text onLongPress={() => console.log("Long pressed")} />' }]
      },
      {
        name: 'onMoveShouldSetResponder',
        type: 'function',
        description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.',
        examples: [{ title: 'Move Responder', language: 'jsx', code: '<Text onMoveShouldSetResponder={() => true} />' }]
      },
      {
        name: 'onMoveShouldSetResponderCapture',
        type: 'function',
        description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.',
        examples: [{ title: 'Capture Move', language: 'jsx', code: '<Text onMoveShouldSetResponderCapture={() => true} />' }]
      },
      {
        name: 'onPressIn',
        type: 'function',
        description: 'Called immediately when a touch is engaged, before onPressOut and onPress.',
        examples: [{ title: 'Press In', language: 'jsx', code: '<Text onPressIn={() => console.log("Press started")} />' }]
      },
      {
        name: 'onPressOut',
        type: 'function',
        description: 'Called when a touch is released.',
        examples: [{ title: 'Press Out', language: 'jsx', code: '<Text onPressOut={() => console.log("Press ended")} />' }]
      },
      {
        name: 'onResponderGrant',
        type: 'function',
        description: 'The View is now responding to touch events. This is the time to highlight and show the user what is happening.',
        examples: [{ title: 'Grant Responder', language: 'jsx', code: '<Text onResponderGrant={() => console.log("Granted")} />' }]
      },
      {
        name: 'onResponderMove',
        type: 'function',
        description: 'The user is moving their finger.',
        examples: [{ title: 'Move Handler', language: 'jsx', code: '<Text onResponderMove={(event) => console.log(event)} />' }]
      },
      {
        name: 'onResponderRelease',
        type: 'function',
        description: 'Fired at the end of the touch.',
        examples: [{ title: 'Release Handler', language: 'jsx', code: '<Text onResponderRelease={() => console.log("Released")} />' }]
      },
      {
        name: 'onResponderTerminate',
        type: 'function',
        description: 'The responder has been taken from the View.',
        examples: [{ title: 'Terminate Handler', language: 'jsx', code: '<Text onResponderTerminate={() => console.log("Terminated")} />' }]
      },
      {
        name: 'onResponderTerminationRequest',
        type: 'function',
        description: 'Some other View wants to become a responder and is asking this View to release its responder.',
        examples: [{ title: 'Termination Request', language: 'jsx', code: '<Text onResponderTerminationRequest={() => true} />' }]
      },
      {
        name: 'onStartShouldSetResponder',
        type: 'function',
        description: 'Does this view want to become responder on the start of a touch?',
        examples: [{ title: 'Start Responder', language: 'jsx', code: '<Text onStartShouldSetResponder={() => true} />' }]
      },
      {
        name: 'onStartShouldSetResponderCapture',
        type: 'function',
        description: 'If a parent View wants to prevent a child View from becoming a responder on a touch start, it should have this handler.',
        examples: [{ title: 'Capture Start', language: 'jsx', code: '<Text onStartShouldSetResponderCapture={() => true} />' }]
      },
      {
        name: 'onTextLayout',
        type: 'function',
        description: 'Invoked on Text layout change.',
        examples: [{ title: 'Text Layout', language: 'jsx', code: '<Text onTextLayout={(event) => console.log(event.nativeEvent.lines)} />' }]
      },
      {
        name: 'pressRetentionOffset',
        type: 'object | number',
        description: 'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button.',
        examples: [{ title: 'Press Retention', language: 'jsx', code: '<Text pressRetentionOffset={{top: 20, left: 20, bottom: 20, right: 20}} />' }]
      },
      {
        name: 'ref',
        type: 'function',
        description: 'A ref setter that will be assigned an element node when mounted.',
        examples: [{ title: 'Ref Usage', language: 'jsx', code: '<Text ref={(ref) => this.myText = ref} />' }]
      },
      {
        name: 'role',
        type: 'string',
        description: 'Communicates the purpose of a component to the user of an assistive technology. Has precedence over the accessibilityRole prop.',
        examples: [{ title: 'Role Override', language: 'jsx', code: '<Text role="button" />' }]
      },
      {
        name: 'selectionColor',
        type: 'string',
        description: 'The highlight color of the text. (Android only)',
        examples: [{ title: 'Selection Color', language: 'jsx', code: '<Text selectable={true} selectionColor="yellow" />' }]
      },
      {
        name: 'style',
        type: 'object',
        description: 'Styles for the text component.',
        examples: [{ title: 'Text Styles', language: 'jsx', code: '<Text style={{fontSize: 18, color: "blue", fontWeight: "bold"}} />' }]
      },
      {
        name: 'suppressHighlighting',
        type: 'boolean',
        description: 'When true, no visual change is made when text is pressed down. (iOS only)',
        examples: [{ title: 'Suppress Highlight', language: 'jsx', code: '<Text suppressHighlighting={true} />' }]
      },
      {
        name: 'testID',
        type: 'string',
        description: 'Used to locate this view in end-to-end tests.',
        examples: [{ title: 'Test ID', language: 'jsx', code: '<Text testID="welcome_text" />' }]
      },
      {
        name: 'textBreakStrategy',
        type: "'simple' | 'highQuality' | 'balanced'",
        description: 'Set text break strategy on Android API Level 23+.',
        examples: [{ title: 'Break Strategy', language: 'jsx', code: '<Text textBreakStrategy="balanced" />' }]
      },
      {
        name: 'lineBreakStrategyIOS',
        type: "'none' | 'standard' | 'hangul-word' | 'push-out'",
        description: 'Set line break strategy on iOS 14+.',
        examples: [{ title: 'Line Break Strategy', language: 'jsx', code: '<Text lineBreakStrategyIOS="standard" />' }]
      }
    ],
    styles: [
      {
        category: 'Font Properties',
        properties: ['color', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'textAlign']
      }
    ],
    notes: ['Text must be used to display text (no plain strings allowed outside Text)']
  },
  {
    id: 'image',
    name: 'Image',
    category: 'Basic UI',
    description: 'A component for displaying different types of images (local assets, network images, etc).',
    importCode: "import { Image } from 'react-native';",
    purpose: ['Displaying local assets', 'Displaying network images', 'Displaying base64 images'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
      {
        title: 'Network Image',
        language: 'jsx',
        code: `<Image 
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
  style={{ width: 50, height: 50 }} 
/>`
      },
      {
        title: 'Local Image',
        language: 'jsx',
        code: `<Image source={require('./my-icon.png')} />`
      }
    ],
    props: [
      {
        name: 'source',
        type: 'ImageSource',
        description: 'The image source (either a remote URL or a local file resource).',
        examples: [
            { title: 'Remote URL', language: 'jsx', code: "<Image source={{ uri: 'https://example.com/logo.png' }} />" },
            { title: 'Local Require', language: 'jsx', code: "<Image source={require('./assets/logo.png')} />" }
        ]
      },
      {
        name: 'resizeMode',
        type: "'cover' | 'contain' | 'stretch' | 'repeat' | 'center'",
        description: 'Determines how to resize the image when the frame doesn\'t match the raw image dimensions.',
        default: 'cover',
        examples: [
            { title: "'cover': Scale uniformly >= view, crop extra", language: 'jsx', code: "<Image resizeMode='cover' style={{ width: 100, height: 100 }} />" },
            { title: "'contain': Scale uniformly <= view, letterbox", language: 'jsx', code: "<Image resizeMode='contain' style={{ width: 100, height: 100 }} />" },
            { title: "'stretch': Scale independently to fill (may distort)", language: 'jsx', code: "<Image resizeMode='stretch' style={{ width: 100, height: 100 }} />" },
            { title: "'repeat': Repeat image to fill view", language: 'jsx', code: "<Image resizeMode='repeat' style={{ width: 100, height: 100 }} />" },
            { title: "'center': Center image without scaling", language: 'jsx', code: "<Image resizeMode='center' style={{ width: 100, height: 100 }} />" }
        ]
      },
      {
        name: 'onLoad',
        type: 'function',
        description: 'Invoked when load completes successfully.',
        examples: [{ title: 'Log Success', language: 'jsx', code: '<Image onLoad={() => console.log("Image Loaded")} />' }]
      },
      {
        name: 'onError',
        type: 'function',
        description: 'Invoked on load error.',
        examples: [{ title: 'Log Error', language: 'jsx', code: '<Image onError={(e) => console.error("Load failed", e.nativeEvent.error)} />' }]
      },
      {
        name: 'accessible',
        type: 'boolean',
        description: 'When true, indicates the image is an accessibility element.',
        examples: [{ title: 'Accessible Image', language: 'jsx', code: '<Image accessible={true} accessibilityLabel="Company logo" />' }]
      },
      {
        name: 'accessibilityLabel',
        type: 'string',
        description: 'The text that\'s read by the screen reader when the user interacts with the image.',
        examples: [{ title: 'Screen Reader Label', language: 'jsx', code: '<Image accessibilityLabel="Profile picture" />' }]
      },
      {
        name: 'alt',
        type: 'string',
        description: 'A string that defines an alternative text description of the image, which will be read by the screen reader.',
        examples: [{ title: 'Alt Text', language: 'jsx', code: '<Image alt="A beautiful sunset over the mountains" />' }]
      },
      {
        name: 'blurRadius',
        type: 'number',
        description: 'The blur radius of the blur filter added to the image.',
        examples: [{ title: 'Blur Effect', language: 'jsx', code: '<Image blurRadius={5} />' }]
      },
      {
        name: 'capInsets',
        type: 'Rect',
        description: 'When the image is resized, the corners of the size specified by capInsets will stay a fixed size. (iOS only)',
        examples: [{ title: 'Resizable Image', language: 'jsx', code: '<Image capInsets={{top: 10, left: 10, bottom: 10, right: 10}} />' }]
      },
      {
        name: 'crossOrigin',
        type: "'anonymous' | 'use-credentials'",
        description: 'A string of a keyword specifying the CORS mode to use when fetching the image resource.',
        examples: [{ title: 'CORS Mode', language: 'jsx', code: '<Image crossOrigin="anonymous" />' }]
      },
      {
        name: 'defaultSource',
        type: 'ImageSource',
        description: 'A static image to display while loading the image source.',
        examples: [{ title: 'Placeholder Image', language: 'jsx', code: '<Image defaultSource={require("./placeholder.png")} />' }]
      },
      {
        name: 'fadeDuration',
        type: 'number',
        description: 'Fade animation duration in milliseconds. (Android only)',
        examples: [{ title: 'Fade Duration', language: 'jsx', code: '<Image fadeDuration={500} />' }]
      },
      {
        name: 'height',
        type: 'number',
        description: 'Height of the image component.',
        examples: [{ title: 'Fixed Height', language: 'jsx', code: '<Image height={200} />' }]
      },
      {
        name: 'loadingIndicatorSource',
        type: 'ImageSource',
        description: 'The resource used to render the loading indicator for the image.',
        examples: [{ title: 'Loading Indicator', language: 'jsx', code: '<Image loadingIndicatorSource={require("./loading.gif")} />' }]
      },
      {
        name: 'onLayout',
        type: 'function',
        description: 'Invoked on mount and on layout changes.',
        examples: [{ title: 'Layout Callback', language: 'jsx', code: '<Image onLayout={(event) => console.log(event.nativeEvent.layout)} />' }]
      },
      {
        name: 'onLoadEnd',
        type: 'function',
        description: 'Invoked when load either succeeds or fails.',
        examples: [{ title: 'Load End', language: 'jsx', code: '<Image onLoadEnd={() => console.log("Load finished")} />' }]
      },
      {
        name: 'onLoadStart',
        type: 'function',
        description: 'Invoked on load start.',
        examples: [{ title: 'Load Start', language: 'jsx', code: '<Image onLoadStart={() => console.log("Loading started")} />' }]
      },
      {
        name: 'onPartialLoad',
        type: 'function',
        description: 'Invoked when a partial load of the image is complete. (iOS only)',
        examples: [{ title: 'Partial Load', language: 'jsx', code: '<Image onPartialLoad={() => console.log("Partial load complete")} />' }]
      },
      {
        name: 'onProgress',
        type: 'function',
        description: 'Invoked on download progress.',
        examples: [{ title: 'Download Progress', language: 'jsx', code: '<Image onProgress={(event) => console.log(event.nativeEvent.loaded / event.nativeEvent.total)} />' }]
      },
      {
        name: 'progressiveRenderingEnabled',
        type: 'boolean',
        description: 'When true, enables progressive jpeg streaming. (Android only)',
        examples: [{ title: 'Progressive Rendering', language: 'jsx', code: '<Image progressiveRenderingEnabled={true} />' }]
      },
      {
        name: 'referrerPolicy',
        type: 'string',
        description: 'A string indicating which referrer to use when fetching the resource.',
        examples: [{ title: 'Referrer Policy', language: 'jsx', code: '<Image referrerPolicy="no-referrer" />' }]
      },
      {
        name: 'ref',
        type: 'function',
        description: 'A ref setter that will be assigned an element node when mounted.',
        examples: [{ title: 'Ref Usage', language: 'jsx', code: '<Image ref={(ref) => this.imageRef = ref} />' }]
      },
      {
        name: 'resizeMethod',
        type: "'auto' | 'resize' | 'scale' | 'none'",
        description: 'The mechanism that should be used to resize the image. (Android only)',
        examples: [{ title: 'Resize Method', language: 'jsx', code: '<Image resizeMethod="scale" />' }]
      },
      {
        name: 'resizeMultiplier',
        type: 'number',
        description: 'When resizeMethod is set to resize, the destination dimensions are multiplied by this value. (Android only)',
        examples: [{ title: 'Resize Multiplier', language: 'jsx', code: '<Image resizeMultiplier={2.0} />' }]
      },
      {
        name: 'src',
        type: 'string',
        description: 'A string representing the remote URL of the image. This prop has precedence over source prop.',
        examples: [{ title: 'Direct URL', language: 'jsx', code: '<Image src="https://example.com/image.png" />' }]
      },
      {
        name: 'srcSet',
        type: 'string',
        description: 'A string representing comma separated list of possible candidate image source.',
        examples: [{ title: 'SrcSet', language: 'jsx', code: '<Image srcSet="image1x.png 1x, image2x.png 2x" />' }]
      },
      {
        name: 'style',
        type: 'object',
        description: 'Styles for the image component.',
        examples: [{ title: 'Image Styles', language: 'jsx', code: '<Image style={{width: 100, height: 100, borderRadius: 10}} />' }]
      },
      {
        name: 'testID',
        type: 'string',
        description: 'A unique identifier for this element to be used in UI Automation testing scripts.',
        examples: [{ title: 'Test ID', language: 'jsx', code: '<Image testID="profile_image" />' }]
      },
      {
        name: 'tintColor',
        type: 'string',
        description: 'Changes the color of all non-transparent pixels to the tintColor.',
        examples: [{ title: 'Tint Color', language: 'jsx', code: '<Image tintColor="blue" />' }]
      },
      {
        name: 'width',
        type: 'number',
        description: 'Width of the image component.',
        examples: [{ title: 'Fixed Width', language: 'jsx', code: '<Image width={200} />' }]
      }
    ],
    styles: [
       { category: 'Layout', properties: ['width', 'height', 'borderRadius', 'borderWidth', 'borderColor', 'opacity'] }
    ]
  },
  {
    id: 'imagebackground',
    name: 'ImageBackground',
    category: 'Basic UI',
    description: 'A component for displaying an image as a background for other components.',
    importCode: "import { ImageBackground } from 'react-native';",
    purpose: ['Background images for screens or cards'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
       {
        title: 'Background Image',
        language: 'jsx',
        code: `<ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <Text style={styles.text}>Inside</Text>
</ImageBackground>`
       }
    ],
    props: [
       { 
         name: 'imageStyle', 
         type: 'ImageStyle', 
         description: 'Style applied to the inner Image component.',
         examples: [{ title: 'Style Inner Image', language: 'jsx', code: '<ImageBackground imageStyle={{ borderRadius: 10, opacity: 0.8 }} />' }]
       }
    ],
    styles: [{ category: 'Container', properties: ['Same as View'] }]
  },
  {
    id: 'scrollview',
    name: 'ScrollView',
    category: 'Basic UI',
    description: 'A generic scrolling container that can host multiple components and views.',
    importCode: "import { ScrollView } from 'react-native';",
    purpose: ['Scrollable content', 'Lists with few items'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
       {
           title: 'Vertical Scroll',
           language: 'jsx',
           code: `<ScrollView style={{ padding: 20 }}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScrollView>`
       }
    ],
    props: [
        { 
          name: 'contentContainerStyle', 
          type: 'ViewStyle', 
          description: 'Styles applied to the scroll view content container.',
          examples: [{ title: 'Container Style', language: 'jsx', code: '<ScrollView contentContainerStyle={{ paddingBottom: 50, alignItems: "center" }}>' }] 
        },
        { 
          name: 'horizontal', 
          type: 'boolean', 
          description: 'When true, scrolls horizontally.', 
          default: 'false',
          examples: [{ title: 'Horizontal', language: 'jsx', code: '<ScrollView horizontal={true} />' }]
        },
        { 
          name: 'showsVerticalScrollIndicator', 
          type: 'boolean', 
          description: 'Show/Hide vertical scroll bar.',
          examples: [{ title: 'Hide Scrollbar', language: 'jsx', code: '<ScrollView showsVerticalScrollIndicator={false} />' }]
        },
        { 
          name: 'showsHorizontalScrollIndicator', 
          type: 'boolean', 
          description: 'When true, shows a horizontal scroll indicator.',
          examples: [{ title: 'Hide Horizontal Scrollbar', language: 'jsx', code: '<ScrollView showsHorizontalScrollIndicator={false} />' }]
        },
        { 
          name: 'refreshControl', 
          type: 'RefreshControl', 
          description: 'A RefreshControl component, used to provide pull-to-refresh functionality.',
          examples: [{ title: 'Pull to Refresh', language: 'jsx', code: '<ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />} />' }]
        },
        { 
          name: 'scrollEnabled', 
          type: 'boolean', 
          description: 'When false, the view cannot be scrolled via touch interaction.',
          default: 'true',
          examples: [{ title: 'Disable Scrolling', language: 'jsx', code: '<ScrollView scrollEnabled={false} />' }]
        },
        { 
          name: 'pagingEnabled', 
          type: 'boolean', 
          description: 'When true, the scroll view stops on multiples of the scroll view\'s size when scrolling.',
          default: 'false',
          examples: [{ title: 'Pagination', language: 'jsx', code: '<ScrollView pagingEnabled={true} />' }]
        },
        { 
          name: 'keyboardDismissMode', 
          type: "'none' | 'on-drag' | 'interactive'", 
          description: 'Determines whether the keyboard gets dismissed in response to a drag.',
          default: "'none'",
          examples: [{ title: 'Dismiss on Drag', language: 'jsx', code: '<ScrollView keyboardDismissMode="on-drag" />' }]
        },
        { 
          name: 'keyboardShouldPersistTaps', 
          type: "'always' | 'never' | 'handled'", 
          description: 'Determines when the keyboard should stay visible after a tap.',
          default: "'never'",
          examples: [{ title: 'Persist Taps', language: 'jsx', code: '<ScrollView keyboardShouldPersistTaps="handled" />' }]
        },
        { 
          name: 'stickyHeaderIndices', 
          type: 'array', 
          description: 'An array of child indices determining which children get docked to the top of the screen when scrolling.',
          examples: [{ title: 'Sticky Header', language: 'jsx', code: '<ScrollView stickyHeaderIndices={[0]} />' }]
        },
        { 
          name: 'contentOffset', 
          type: 'object', 
          description: 'Used to manually set the starting scroll offset.',
          default: '{x: 0, y: 0}',
          examples: [{ title: 'Initial Offset', language: 'jsx', code: '<ScrollView contentOffset={{x: 0, y: 100}} />' }]
        },
        { 
          name: 'decelerationRate', 
          type: "'fast' | 'normal' | number", 
          description: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger.',
          default: "'normal'",
          examples: [{ title: 'Fast Deceleration', language: 'jsx', code: '<ScrollView decelerationRate="fast" />' }]
        },
        { 
          name: 'scrollEventThrottle', 
          type: 'number', 
          description: 'Limits how often scroll events will be fired while scrolling.',
          default: '0',
          examples: [{ title: 'Throttle Events', language: 'jsx', code: '<ScrollView scrollEventThrottle={16} />' }]
        },
        { 
          name: 'snapToInterval', 
          type: 'number', 
          description: 'When set, causes the scroll view to stop at multiples of the value.',
          examples: [{ title: 'Snap to Interval', language: 'jsx', code: '<ScrollView snapToInterval={200} />' }]
        },
        { 
          name: 'snapToOffsets', 
          type: 'array', 
          description: 'When set, causes the scroll view to stop at the defined offsets.',
          examples: [{ title: 'Snap to Offsets', language: 'jsx', code: '<ScrollView snapToOffsets={[0, 200, 400]} />' }]
        },
        { 
          name: 'bounces', 
          type: 'boolean', 
          description: 'When true, the scroll view bounces when it reaches the end of the content.',
          platform: 'iOS',
          default: 'true',
          examples: [{ title: 'Disable Bounce', language: 'jsx', code: '<ScrollView bounces={false} />' }]
        },
        { 
          name: 'alwaysBounceVertical', 
          type: 'boolean', 
          description: 'When true, the scroll view bounces vertically when it reaches the end.',
          platform: 'iOS',
          examples: [{ title: 'Always Bounce Vertical', language: 'jsx', code: '<ScrollView alwaysBounceVertical={true} />' }]
        },
        { 
          name: 'alwaysBounceHorizontal', 
          type: 'boolean', 
          description: 'When true, the scroll view bounces horizontally when it reaches the end.',
          platform: 'iOS',
          examples: [{ title: 'Always Bounce Horizontal', language: 'jsx', code: '<ScrollView alwaysBounceHorizontal={true} />' }]
        },
        { 
          name: 'contentInset', 
          type: 'object', 
          description: 'The amount by which the scroll view content is inset from the edges.',
          platform: 'iOS',
          default: '{top: 0, left: 0, bottom: 0, right: 0}',
          examples: [{ title: 'Content Inset', language: 'jsx', code: '<ScrollView contentInset={{top: 20, bottom: 20}} />' }]
        },
        { 
          name: 'scrollIndicatorInsets', 
          type: 'object', 
          description: 'The amount by which the scroll view indicators are inset from the edges.',
          platform: 'iOS',
          default: '{top: 0, left: 0, bottom: 0, right: 0}',
          examples: [{ title: 'Indicator Inset', language: 'jsx', code: '<ScrollView scrollIndicatorInsets={{top: 20, bottom: 20}} />' }]
        },
        { 
          name: 'indicatorStyle', 
          type: "'default' | 'black' | 'white'", 
          description: 'The style of the scroll indicators.',
          platform: 'iOS',
          default: "'default'",
          examples: [{ title: 'White Indicators', language: 'jsx', code: '<ScrollView indicatorStyle="white" />' }]
        },
        { 
          name: 'overScrollMode', 
          type: "'auto' | 'always' | 'never'", 
          description: 'Used to override default value of overScroll mode.',
          platform: 'Android',
          default: "'auto'",
          examples: [{ title: 'Never Overscroll', language: 'jsx', code: '<ScrollView overScrollMode="never" />' }]
        },
        { 
          name: 'nestedScrollEnabled', 
          type: 'boolean', 
          description: 'Enables nested scrolling for Android API level 21+.',
          platform: 'Android',
          default: 'false',
          examples: [{ title: 'Nested Scrolling', language: 'jsx', code: '<ScrollView nestedScrollEnabled={true} />' }]
        },
        { 
          name: 'fadingEdgeLength', 
          type: 'number | object', 
          description: 'Fades out the edges of the scroll content.',
          platform: 'Android',
          default: '0',
          examples: [{ title: 'Fade Edges', language: 'jsx', code: '<ScrollView fadingEdgeLength={50} />' }]
        },
        { 
          name: 'endFillColor', 
          type: 'string', 
          description: 'Fills the rest of the scrollview with a color when content is smaller than the view.',
          platform: 'Android',
          examples: [{ title: 'End Fill Color', language: 'jsx', code: '<ScrollView endFillColor="lightgray" />' }]
        },
        { 
          name: 'removeClippedSubviews', 
          type: 'boolean', 
          description: 'When true, offscreen child views are removed from their native backing superview.',
          examples: [{ title: 'Performance Optimization', language: 'jsx', code: '<ScrollView removeClippedSubviews={true} />' }]
        },
        { 
          name: 'onScroll', 
          type: 'function', 
          description: 'Fires at most once per frame during scrolling.',
          examples: [{ title: 'Scroll Handler', language: 'jsx', code: '<ScrollView onScroll={(event) => console.log(event.nativeEvent.contentOffset)} />' }]
        },
        { 
          name: 'onMomentumScrollBegin', 
          type: 'function', 
          description: 'Called when the momentum scroll starts.',
          examples: [{ title: 'Momentum Begin', language: 'jsx', code: '<ScrollView onMomentumScrollBegin={() => console.log("Momentum started")} />' }]
        },
        { 
          name: 'onMomentumScrollEnd', 
          type: 'function', 
          description: 'Called when the momentum scroll ends.',
          examples: [{ title: 'Momentum End', language: 'jsx', code: '<ScrollView onMomentumScrollEnd={() => console.log("Momentum ended")} />' }]
        },
        { 
          name: 'onScrollBeginDrag', 
          type: 'function', 
          description: 'Called when the user begins to drag the scroll view.',
          examples: [{ title: 'Begin Drag', language: 'jsx', code: '<ScrollView onScrollBeginDrag={() => console.log("Drag began")} />' }]
        },
        { 
          name: 'onScrollEndDrag', 
          type: 'function', 
          description: 'Called when the user stops dragging the scroll view.',
          examples: [{ title: 'End Drag', language: 'jsx', code: '<ScrollView onScrollEndDrag={() => console.log("Drag ended")} />' }]
        },
        { 
          name: 'onContentSizeChange', 
          type: 'function', 
          description: 'Called when scrollable content view of the ScrollView changes.',
          examples: [{ title: 'Content Size Change', language: 'jsx', code: '<ScrollView onContentSizeChange={(width, height) => console.log(width, height)} />' }]
        }
    ],
    styles: [],
    notes: ['Not suitable for long lists of data. Use FlatList instead for performance.']
  },
  {
    id: 'keyboardavoidingview',
    name: 'KeyboardAvoidingView',
    category: 'Basic UI',
    description: 'A component to solve the common problem of views that need to move out of the way of the virtual keyboard.',
    importCode: "import { KeyboardAvoidingView } from 'react-native';",
    purpose: ['Moving inputs out of way of keyboard'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [],
    props: [
        { 
          name: 'behavior', 
          type: "'height' | 'position' | 'padding'", 
          description: 'How to react to keyboard.', 
          platform: 'iOS',
          examples: [
              { title: "'padding': Adjusts padding (Best for iOS)", language: 'jsx', code: "<KeyboardAvoidingView behavior='padding' />" },
              { title: "'height': Resizes height", language: 'jsx', code: "<KeyboardAvoidingView behavior='height' />" },
              { title: "'position': Moves absolute position", language: 'jsx', code: "<KeyboardAvoidingView behavior='position' />" }
          ]
        },
        { 
          name: 'keyboardVerticalOffset', 
          type: 'number', 
          description: 'Distance between top of user screen and react native view.',
          examples: [{ title: 'Offset for Header', language: 'jsx', code: '<KeyboardAvoidingView keyboardVerticalOffset={100} />' }]
        }
    ],
    styles: []
  },
  {
    id: 'safeareaview',
    name: 'SafeAreaView',
    category: 'Basic UI',
    description: 'Renders content within the safe area boundaries of a device (avoiding notches, home indicators).',
    importCode: "import { SafeAreaView } from 'react-native';",
    purpose: ['Handling iPhone X+ notch', 'Handling Android status bars'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
        {
            title: 'Wrap Root',
            language: 'jsx',
            code: `<SafeAreaView style={{ flex: 1 }}>
  <View>
      <Text>Safe Content</Text>
  </View>
</SafeAreaView>`
        }
    ],
    props: [],
    styles: [{ category: 'Layout', properties: ['flex', 'backgroundColor'] }],
    notes: ['Only applicable to iOS devices with iOS version 11 or later.']
  },
  {
    id: 'statusbar',
    name: 'StatusBar',
    category: 'Basic UI',
    description: 'Component to control the app status bar.',
    importCode: "import { StatusBar } from 'react-native';",
    purpose: ['Change status bar color', 'Hide/Show status bar', 'Change text content style'],
    installation: {
      type: 'built-in'
    },
    basicUsage: [
        {
            title: 'Config',
            language: 'jsx',
            code: `<StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />`
        }
    ],
    props: [
        { 
          name: 'barStyle', 
          type: "'default' | 'light-content' | 'dark-content'", 
          description: 'Sets the color of the status bar text.',
          examples: [
              { title: "'default': System default", language: 'jsx', code: '<StatusBar barStyle="default" />' },
              { title: "'light-content': White text (for dark backgrounds)", language: 'jsx', code: '<StatusBar barStyle="light-content" />' },
              { title: "'dark-content': Dark text (for light backgrounds)", language: 'jsx', code: '<StatusBar barStyle="dark-content" />' }
          ]
        },
        { 
          name: 'backgroundColor', 
          type: 'string', 
          description: 'The background color of the status bar.', 
          platform: 'Android',
          examples: [{ title: 'Set Color', language: 'jsx', code: '<StatusBar backgroundColor="#61dafb" />' }]
        },
        { 
          name: 'hidden', 
          type: 'boolean', 
          description: 'If the status bar is hidden.',
          examples: [{ title: 'Hide Bar', language: 'jsx', code: '<StatusBar hidden={true} />' }]
        }
    ],
    styles: []
  }
];