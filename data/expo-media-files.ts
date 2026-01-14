import { ComponentDoc } from '../types';

export const EXPO_MEDIA_FILES_DATA: ComponentDoc[] = [
  {
    id: 'expo-image',
    name: 'expo-image',
    category: 'Expo: Media & Files',
    description: 'A high-performance image component designed for Expo and React Native apps. Supports caching, placeholders, and more.',
    importCode: "import { Image } from 'expo-image';",
    purpose: ['Caching images', 'Blurhash placeholders', 'Transition animations'],
    installation: {
      type: 'npm',
      package: 'expo-image',
      command: 'npx expo install expo-image'
    },
    basicUsage: [
      {
        title: 'Cached Image',
        language: 'jsx',
        code: `<Image
  style={{ width: 100, height: 100 }}
  source="https://picsum.photos/seed/696/3000/2000"
  placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
  contentFit="cover"
  transition={1000}
/>`
      }
    ],
    props: [
      { 
        name: 'source', 
        type: 'ImageSource', 
        description: 'The image source (URL, local file, or Blurhash).',
        examples: [{ title: 'Source', language: 'jsx', code: '<Image source="https://example.com/pic.jpg" />' }]
      },
      { 
        name: 'placeholder', 
        type: 'ImageSource', 
        description: 'Image shown while loading.',
        examples: [{ title: 'Blurhash Placeholder', language: 'jsx', code: '<Image placeholder={blurhash} />' }]
      },
      { 
        name: 'contentFit', 
        type: "'cover' | 'contain' | 'fill'", 
        description: 'How the content should be resized.',
        examples: [
            { title: "'cover': Cover area", language: 'jsx', code: '<Image contentFit="cover" />' },
            { title: "'contain': Fit within area", language: 'jsx', code: '<Image contentFit="contain" />' },
            { title: "'fill': Stretch to fill", language: 'jsx', code: '<Image contentFit="fill" />' }
        ]
      },
      { 
        name: 'transition', 
        type: 'number', 
        description: 'Duration of the fade-in transition in ms.',
        examples: [{ title: 'Fade In', language: 'jsx', code: '<Image transition={500} />' }]
      }
    ],
    styles: []
  },
  {
    id: 'expo-av',
    name: 'expo-av',
    category: 'Expo: Media & Files',
    description: 'Provides audio and video playback, recording, and audio mode control.',
    importCode: "import { Video, Audio } from 'expo-av';",
    purpose: ['Playing video files', 'Playing sound/music', 'Recording audio'],
    installation: {
      type: 'npm',
      package: 'expo-av',
      command: 'npx expo install expo-av'
    },
    basicUsage: [
      {
        title: 'Video Player',
        language: 'jsx',
        code: `<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>`
      },
      {
         title: 'Play Sound',
         language: 'js',
         code: `const { sound } = await Audio.Sound.createAsync(
   require('./assets/hello.mp3')
);
await sound.playAsync();`
      }
    ],
    props: [
      { 
        name: 'source', 
        type: 'VideoSource', 
        description: 'Source of the video data.',
        examples: [{ title: 'Video URI', language: 'jsx', code: '<Video source={{ uri: "http://example.com/video.mp4" }} />' }]
      },
      { 
        name: 'useNativeControls', 
        type: 'boolean', 
        description: 'If true, displays native playback controls.',
        examples: [{ title: 'Show Controls', language: 'jsx', code: '<Video useNativeControls />' }]
      },
      { 
        name: 'resizeMode', 
        type: "'contain' | 'cover' | 'stretch'", 
        description: 'How the video should be scaled.',
        examples: [
            { title: "'contain': Fit inside", language: 'jsx', code: '<Video resizeMode="contain" />' },
            { title: "'cover': Fill area", language: 'jsx', code: '<Video resizeMode="cover" />' },
            { title: "'stretch': Distort to fill", language: 'jsx', code: '<Video resizeMode="stretch" />' }
        ]
      },
      { 
        name: 'isLooping', 
        type: 'boolean', 
        description: 'If the video should restart when it ends.',
        examples: [{ title: 'Loop Video', language: 'jsx', code: '<Video isLooping />' }]
      }
    ],
    styles: []
  },
  {
    id: 'expo-file-system',
    name: 'expo-file-system',
    category: 'Expo: Media & Files',
    description: 'Provides access to the local file system on the device.',
    importCode: "import * as FileSystem from 'expo-file-system';",
    purpose: ['Reading/Writing files', 'Downloading files', 'Getting file info'],
    installation: {
      type: 'npm',
      package: 'expo-file-system',
      command: 'npx expo install expo-file-system'
    },
    basicUsage: [
      {
        title: 'Get Info',
        language: 'js',
        code: `const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'data.json');`
      },
      {
        title: 'Write File',
        language: 'js',
        code: `await FileSystem.writeAsStringAsync(fileUri, 'Hello World', { encoding: FileSystem.EncodingType.UTF8 });`
      }
    ],
    props: [
      {
        name: 'File',
        type: 'Class',
        description: 'Represents a file on the filesystem with methods for reading, writing, and managing files.',
        required: false,
        examples: [{ code: `const file = new File(Paths.cache, 'example.txt');`, language: 'js' }]
      },
      {
        name: 'Directory',
        type: 'Class',
        description: 'Represents a directory on the filesystem with methods for creating, listing, and managing directories.',
        required: false,
        examples: [{ code: `const dir = new Directory(Paths.document, 'myFolder');`, language: 'js' }]
      },
      {
        name: 'Paths',
        type: 'Class',
        description: 'Provides access to standard filesystem paths like cache, document, and bundle directories.',
        required: false,
        examples: [{ code: `console.log(Paths.cache.uri);`, language: 'js' }]
      },
      {
        name: 'File.text()',
        type: 'Method',
        description: 'Retrieves text content from a file asynchronously.',
        required: false,
        examples: [{ code: `const content = await file.text();`, language: 'js' }]
      },
      {
        name: 'File.write()',
        type: 'Method',
        description: 'Writes content to a file.',
        required: false,
        examples: [{ code: `file.write('Hello World');`, language: 'js' }]
      },
      {
        name: 'File.copy()',
        type: 'Method',
        description: 'Copies a file to a new location.',
        required: false,
        examples: [{ code: `file.copy(new File(Paths.cache, 'copy.txt'));`, language: 'js' }]
      },
      {
        name: 'File.delete()',
        type: 'Method',
        description: 'Deletes a file from the filesystem.',
        required: false,
        examples: [{ code: `file.delete();`, language: 'js' }]
      },
      {
        name: 'File.downloadFileAsync()',
        type: 'Static Method',
        description: 'Downloads a file from the network to the filesystem.',
        required: false,
        examples: [{ code: `const file = await File.downloadFileAsync(url, destination);`, language: 'js' }]
      },
      {
        name: 'Directory.create()',
        type: 'Method',
        description: 'Creates a directory at the specified path.',
        required: false,
        examples: [{ code: `directory.create();`, language: 'js' }]
      },
      {
        name: 'Directory.list()',
        type: 'Method',
        description: 'Lists the contents of a directory.',
        required: false,
        examples: [{ code: `const contents = directory.list();`, language: 'js' }]
      },
      {
        name: 'Directory.delete()',
        type: 'Method',
        description: 'Deletes a directory and all its contents.',
        required: false,
        examples: [{ code: `directory.delete();`, language: 'js' }]
      },
      {
        name: 'Paths.cache',
        type: 'Property',
        description: 'Directory for storing temporary files that can be deleted by the system.',
        required: false,
        examples: [{ code: `const cacheDir = Paths.cache;`, language: 'js' }]
      },
      {
        name: 'Paths.document',
        type: 'Property',
        description: 'Directory for storing user documents and app data.',
        required: false,
        examples: [{ code: `const docDir = Paths.document;`, language: 'js' }]
      }
    ],
    styles: []
  },
  {
    id: 'expo-document-picker',
    name: 'expo-document-picker',
    category: 'Expo: Media & Files',
    description: 'Provides access to the system\'s UI for selecting documents from the available providers.',
    importCode: "import * as DocumentPicker from 'expo-document-picker';",
    purpose: ['Letting user select PDF, Images, etc.'],
    installation: {
      type: 'npm',
      package: 'expo-document-picker',
      command: 'npx expo install expo-document-picker'
    },
    basicUsage: [
      {
        title: 'Pick Document',
        language: 'js',
        code: `const result = await DocumentPicker.getDocumentAsync({
  type: 'application/pdf',
  copyToCacheDirectory: true
});`
      }
    ],
    props: [
      {
        name: 'getDocumentAsync',
        type: 'Method',
        description: 'Displays the system UI for choosing a document from the available providers.',
        required: false,
        examples: [{ code: `const result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });`, language: 'js' }]
      }
    ],
    styles: []
  }
];