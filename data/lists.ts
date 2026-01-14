import { ComponentDoc } from '../types';

export const LISTS_DATA: ComponentDoc[] = [
  {
    id: 'flatlist',
    name: 'FlatList',
    category: 'Lists',
    description: 'A performant interface for rendering simple, flat lists.',
    importCode: "import { FlatList } from 'react-native';",
    purpose: ['Rendering long lists of data', 'Infinite scrolling', 'Pull to refresh'],
    basicUsage: [
        {
            title: 'Basic List',
            language: 'jsx',
            code: `<FlatList
  data={[{id: '1', title: 'Item 1'}, {id: '2', title: 'Item 2'}]}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id}
/>`
        }
    ],
    props: [
        {
          name: 'data',
          type: 'Array<ItemT>',
          description: 'An array of data items to render.',
          examples: [{ title: 'Data Array', language: 'jsx', code: '<FlatList data={[{ key: "A" }, { key: "B" }]} ... />' }]
        },
        {
          name: 'renderItem',
          type: 'function',
          description: 'Takes an item from data and renders it into the list.',
          examples: [{ title: 'Render Item', language: 'jsx', code: '<FlatList renderItem={({ item }) => <Text>{item.key}</Text>} ... />' }]
        },
        {
          name: 'keyExtractor',
          type: 'function',
          description: 'Used to extract a unique key for a given item.',
          examples: [{ title: 'Key Extractor', language: 'jsx', code: '<FlatList keyExtractor={(item) => item.id.toString()} ... />' }]
        },
        {
          name: 'ItemSeparatorComponent',
          type: 'Component',
          description: 'Rendered in between each item.',
          examples: [{ title: 'Separator', language: 'jsx', code: '<FlatList ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#eee" }} />} ... />' }]
        },
        {
          name: 'ListHeaderComponent',
          type: 'Component',
          description: 'Rendered at the top of all the items.',
          examples: [{ title: 'Header', language: 'jsx', code: '<FlatList ListHeaderComponent={<Text style={{ fontSize: 20 }}>My List</Text>} ... />' }]
        },
        {
          name: 'ListFooterComponent',
          type: 'Component',
          description: 'Rendered at the bottom of all the items.',
          examples: [{ title: 'Footer (Loader)', language: 'jsx', code: '<FlatList ListFooterComponent={<ActivityIndicator />} ... />' }]
        },
        {
          name: 'ListEmptyComponent',
          type: 'Component',
          description: 'Rendered when the list is empty.',
          examples: [{ title: 'Empty State', language: 'jsx', code: '<FlatList ListEmptyComponent={<Text>No items found</Text>} ... />' }]
        },
        {
          name: 'ListHeaderComponentStyle',
          type: 'ViewStyle',
          description: 'Styling for the internal View for ListHeaderComponent.',
          examples: [{ title: 'Header Style', language: 'jsx', code: '<FlatList ListHeaderComponentStyle={{ backgroundColor: "lightblue" }} ... />' }]
        },
        {
          name: 'ListFooterComponentStyle',
          type: 'ViewStyle',
          description: 'Styling for the internal View for ListFooterComponent.',
          examples: [{ title: 'Footer Style', language: 'jsx', code: '<FlatList ListFooterComponentStyle={{ padding: 10 }} ... />' }]
        },
        {
          name: 'horizontal',
          type: 'boolean',
          description: 'If true, renders items next to each other horizontally instead of stacked vertically.',
          default: 'false',
          examples: [{ title: 'Horizontal List', language: 'jsx', code: '<FlatList horizontal={true} ... />' }]
        },
        {
          name: 'numColumns',
          type: 'number',
          description: 'Multiple columns can only be rendered with horizontal={false}.',
          examples: [{ title: 'Two Columns', language: 'jsx', code: '<FlatList numColumns={2} ... />' }]
        },
        {
          name: 'columnWrapperStyle',
          type: 'ViewStyle',
          description: 'Optional custom style for multi-item rows generated when numColumns > 1.',
          examples: [{ title: 'Column Wrapper', language: 'jsx', code: '<FlatList columnWrapperStyle={{ justifyContent: "space-between" }} ... />' }]
        },
        {
          name: 'extraData',
          type: 'any',
          description: 'A marker property for telling the list to re-render when external data changes.',
          examples: [{ title: 'Extra Data', language: 'jsx', code: '<FlatList extraData={selectedId} ... />' }]
        },
        {
          name: 'getItemLayout',
          type: 'function',
          description: 'Optional optimization for skipping measurement of dynamic content.',
          examples: [{ title: 'Fixed Layout', language: 'jsx', code: '<FlatList getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })} ... />' }]
        },
        {
          name: 'initialNumToRender',
          type: 'number',
          description: 'How many items to render in the initial batch.',
          default: '10',
          examples: [{ title: 'Initial Render', language: 'jsx', code: '<FlatList initialNumToRender={20} ... />' }]
        },
        {
          name: 'initialScrollIndex',
          type: 'number',
          description: 'Start at the specified index instead of the top.',
          examples: [{ title: 'Initial Scroll', language: 'jsx', code: '<FlatList initialScrollIndex={10} ... />' }]
        },
        {
          name: 'inverted',
          type: 'boolean',
          description: 'Reverses the direction of scroll.',
          default: 'false',
          examples: [{ title: 'Inverted List', language: 'jsx', code: '<FlatList inverted={true} ... />' }]
        },
        {
          name: 'refreshing',
          type: 'boolean',
          description: 'Set this true while waiting for new data from a refresh.',
          examples: [{ title: 'Refreshing State', language: 'jsx', code: '<FlatList refreshing={isRefreshing} ... />' }]
        },
        {
          name: 'onRefresh',
          type: 'function',
          description: 'Called when the view starts refreshing.',
          examples: [{ title: 'Refresh Handler', language: 'jsx', code: '<FlatList onRefresh={() => fetchData()} ... />' }]
        },
        {
          name: 'onViewableItemsChanged',
          type: 'function',
          description: 'Called when the viewability of rows changes.',
          examples: [{ title: 'Viewability Changed', language: 'jsx', code: '<FlatList onViewableItemsChanged={onViewableItemsChanged} ... />' }]
        },
        {
          name: 'viewabilityConfig',
          type: 'object',
          description: 'Configures when items are considered viewable.',
          examples: [{ title: 'Viewability Config', language: 'jsx', code: '<FlatList viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} ... />' }]
        },
        {
          name: 'removeClippedSubviews',
          type: 'boolean',
          description: 'When true, offscreen child views are removed from their native backing superview.',
          examples: [{ title: 'Performance Optimization', language: 'jsx', code: '<FlatList removeClippedSubviews={true} ... />' }]
        }
    ],
    styles: [],
    notes: ['More performant than ScrollView for long lists because it only renders items currently visible.']
  },
  {
    id: 'sectionlist',
    name: 'SectionList',
    category: 'Lists',
    description: 'A performant interface for rendering sectioned lists.',
    importCode: "import { SectionList } from 'react-native';",
    purpose: ['Lists with headings/sections (e.g. Contacts app)'],
    basicUsage: [
        {
            title: 'Sectioned List',
            language: 'jsx',
            code: `<SectionList
  sections={[
    {title: 'A', data: ['Devin', 'Dan']},
    {title: 'J', data: ['Jackson', 'James']},
  ]}
  renderItem={({item}) => <Text>{item}</Text>}
  renderSectionHeader={({section}) => <Text>{section.title}</Text>}
  keyExtractor={(item, index) => item + index}
/>`
        }
    ],
    props: [
        {
          name: 'sections',
          type: 'Array<SectionT>',
          description: 'The actual data to render, grouped by section.',
          examples: [{ title: 'Sections Data', language: 'jsx', code: "sections={[{ title: 'A', data: ['Apple', 'Apricot'] }]}" }]
        },
        {
          name: 'renderSectionHeader',
          type: 'function',
          description: 'Rendered at the top of each section.',
          examples: [{ title: 'Header Renderer', language: 'jsx', code: "renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold' }}>{title}</Text>}" }]
        }
    ],
    styles: []
  }
];