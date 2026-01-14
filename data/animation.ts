import { ComponentDoc } from '../types';

export const ANIMATION_DATA: ComponentDoc[] = [
  {
    id: 'animated',
    name: 'Animated',
    category: 'Animation',
    description: 'The Animated library is designed to make animations fluid, powerful, and painless to build and maintain.',
    importCode: "import { Animated } from 'react-native';",
    purpose: ['Declarative animations', 'Timing and spring animations', 'Composing animations'],
    basicUsage: [
      {
        title: 'Fade In Animation',
        language: 'jsx',
        code: `const fadeAnim = useRef(new Animated.Value(0)).current;

React.useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
}, [fadeAnim]);

<Animated.View style={{ opacity: fadeAnim }}>
  <Text>Fading in</Text>
</Animated.View>`
      },
      {
        title: 'Spring Animation',
        language: 'jsx',
        code: `const springAnim = useRef(new Animated.Value(0)).current;

const startSpring = () => {
  Animated.spring(springAnim, {
    toValue: 1,
    friction: 7,
    tension: 40,
    useNativeDriver: true,
  }).start();
};

<Animated.View style={{ transform: [{ scale: springAnim }] }}>
  <TouchableOpacity onPress={startSpring}>
    <Text>Press to Spring</Text>
  </TouchableOpacity>
</Animated.View>`
      }
    ],
    props: [],
    styles: []
  },
  {
    id: 'react-native-reanimated',
    name: 'Reanimated',
    category: 'Animation',
    description: 'A powerful animation library that runs on the UI thread.',
    importCode: "import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';",
    purpose: ['60FPS animations', 'Gesture-based interactions'],
    basicUsage: [
      {
        title: 'Simple Animation',
        language: 'jsx',
        code: `const offset = useSharedValue(0);

const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offset.value }],
  };
});

<Animated.View style={[styles.box, animatedStyles]} />`
      }
    ],
    props: [],
    styles: []
  },
  {
    id: 'react-native-gesture-handler',
    name: 'Gesture Handler',
    category: 'Animation',
    description: 'Declarative API for gestures in React Native.',
    importCode: "import { GestureDetector, Gesture } from 'react-native-gesture-handler';",
    purpose: ['Pan, Tap, Rotation gestures'],
    basicUsage: [
      {
        title: 'Pan Gesture',
        language: 'jsx',
        code: `const gesture = Gesture.Pan().onUpdate((e) => {
  console.log(e.translationX);
});

<GestureDetector gesture={gesture}>
  <Animated.View />
</GestureDetector>`
      }
    ],
    props: [],
    styles: []
  }
];