import { ComponentDoc } from '../types';

export const EXPO_STORAGE_DATA: ComponentDoc[] = [
  {
    id: 'expo-secure-store',
    name: 'expo-secure-store',
    category: 'Expo: Storage',
    description: 'Provides a way to encrypt and securely store key–value pairs locally on the device.',
    importCode: "import * as SecureStore from 'expo-secure-store';",
    purpose: ['Storing tokens', 'Storing passwords'],
    installation: {
      type: 'npm',
      package: 'expo-secure-store',
      command: 'npx expo install expo-secure-store'
    },
    basicUsage: [
      {
        title: 'Save Item',
        language: 'js',
        code: `await SecureStore.setItemAsync('secure_token', 'secret-123');`
      },
      {
        title: 'Get Item',
        language: 'js',
        code: `let result = await SecureStore.getItemAsync('secure_token');`
      }
    ],
    props: [
      {
        name: "canUseBiometricAuthentication",
        type: "() => boolean",
        description: "Checks if the device supports biometric authentication for secure storage.",
        examples: [{ code: "const supportsBiometrics = SecureStore.canUseBiometricAuthentication();", language: 'js' }]
      },
      {
        name: "deleteItemAsync",
        type: "(key: string, options?: SecureStoreOptions) => Promise<void>",
        description: "Deletes the value associated with the provided key from secure storage.",
        examples: [{ code: "await SecureStore.deleteItemAsync('userToken');", language: 'js' }]
      },
      {
        name: "getItem",
        type: "(key: string, options?: SecureStoreOptions) => string | null",
        description: "Synchronously retrieves the value associated with the provided key.",
        examples: [{ code: "const token = SecureStore.getItem('userToken');", language: 'js' }]
      },
      {
        name: "getItemAsync",
        type: "(key: string, options?: SecureStoreOptions) => Promise<string | null>",
        description: "Asynchronously retrieves the value associated with the provided key.",
        examples: [{ code: "const token = await SecureStore.getItemAsync('userToken');", language: 'js' }]
      },
      {
        name: "isAvailableAsync",
        type: "() => Promise<boolean>",
        description: "Returns whether the SecureStore API is enabled on the current device.",
        examples: [{ code: "const available = await SecureStore.isAvailableAsync();", language: 'js' }]
      },
      {
        name: "setItem",
        type: "(key: string, value: string, options?: SecureStoreOptions) => void",
        description: "Synchronously stores a key-value pair in secure storage.",
        examples: [{ code: "SecureStore.setItem('userToken', 'abc123');", language: 'js' }]
      },
      {
        name: "setItemAsync",
        type: "(key: string, value: string, options?: SecureStoreOptions) => Promise<void>",
        description: "Asynchronously stores a key-value pair in secure storage.",
        examples: [{ code: "await SecureStore.setItemAsync('userToken', 'abc123');", language: 'js' }]
      },
      {
        name: "AFTER_FIRST_UNLOCK",
        type: "KeychainAccessibilityConstant",
        description: "Data can be accessed after the device has been unlocked once.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK });", language: 'js' }]
      },
      {
        name: "AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY",
        type: "KeychainAccessibilityConstant",
        description: "Data can be accessed after unlock, not migrated to new devices.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY });", language: 'js' }]
      },
      {
        name: "ALWAYS",
        type: "KeychainAccessibilityConstant",
        description: "Data can always be accessed regardless of device lock state.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.ALWAYS });", language: 'js' }]
      },
      {
        name: "ALWAYS_THIS_DEVICE_ONLY",
        type: "KeychainAccessibilityConstant",
        description: "Data can always be accessed, not migrated to new devices.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY });", language: 'js' }]
      },
      {
        name: "WHEN_PASSCODE_SET_THIS_DEVICE_ONLY",
        type: "KeychainAccessibilityConstant",
        description: "Data accessible only when passcode is set, not migrated.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY });", language: 'js' }]
      },
      {
        name: "WHEN_UNLOCKED",
        type: "KeychainAccessibilityConstant",
        description: "Data can be accessed only while the device is unlocked.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.WHEN_UNLOCKED });", language: 'js' }]
      },
      {
        name: "WHEN_UNLOCKED_THIS_DEVICE_ONLY",
        type: "KeychainAccessibilityConstant",
        description: "Data accessible when unlocked, not migrated to new devices.",
        examples: [{ code: "SecureStore.setItemAsync('key', 'value', { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });", language: 'js' }]
      }
    ],
    styles: []
  },
  {
    id: 'expo-sqlite',
    name: 'expo-sqlite',
    category: 'Expo: Storage',
    description: 'Provides access to a database that can be queried through a WebSQL-like API.',
    importCode: "import * as SQLite from 'expo-sqlite';",
    purpose: ['Local relational database', 'Offline data sync'],
    installation: {
      type: 'npm',
      package: 'expo-sqlite',
      command: 'npx expo install expo-sqlite'
    },
    basicUsage: [
      {
        title: 'Open DB',
        language: 'js',
        code: `const db = SQLite.openDatabase('db.db');`
      }
    ],
    props: [
      {
        name: "openDatabaseAsync",
        type: "(databaseName: string, options?: SQLiteOpenOptions, directory?: string) => Promise<SQLiteDatabase>",
        description: "Opens a SQLite database asynchronously.",
        examples: [{ code: "const db = await SQLite.openDatabaseAsync('myDatabase.db');", language: 'js' }]
      },
      {
        name: "openDatabaseSync",
        type: "(databaseName: string, options?: SQLiteOpenOptions, directory?: string) => SQLiteDatabase",
        description: "Opens a SQLite database synchronously.",
        examples: [{ code: "const db = SQLite.openDatabaseSync('myDatabase.db');", language: 'js' }]
      },
      {
        name: "deleteDatabaseAsync",
        type: "(databaseName: string, directory?: string) => Promise<void>",
        description: "Deletes a SQLite database file asynchronously.",
        examples: [{ code: "await SQLite.deleteDatabaseAsync('myDatabase.db');", language: 'js' }]
      },
      {
        name: "deleteDatabaseSync",
        type: "(databaseName: string, directory?: string) => void",
        description: "Deletes a SQLite database file synchronously.",
        examples: [{ code: "SQLite.deleteDatabaseSync('myDatabase.db');", language: 'js' }]
      },
      {
        name: "backupDatabaseAsync",
        type: "(options: { destDatabase: SQLiteDatabase, destDatabaseName: string, sourceDatabase: SQLiteDatabase, sourceDatabaseName: string }) => Promise<void>",
        description: "Backs up a database to another database asynchronously.",
        examples: [{ code: "await SQLite.backupDatabaseAsync({ sourceDatabase: db1, destDatabase: db2 });", language: 'js' }]
      },
      {
        name: "backupDatabaseSync",
        type: "(options: { destDatabase: SQLiteDatabase, destDatabaseName: string, sourceDatabase: SQLiteDatabase, sourceDatabaseName: string }) => void",
        description: "Backs up a database to another database synchronously.",
        examples: [{ code: "SQLite.backupDatabaseSync({ sourceDatabase: db1, destDatabase: db2 });", language: 'js' }]
      },
      {
        name: "deserializeDatabaseAsync",
        type: "(serializedData: Uint8Array, options?: SQLiteOpenOptions) => Promise<SQLiteDatabase>",
        description: "Creates a database from serialized data asynchronously.",
        examples: [{ code: "const db = await SQLite.deserializeDatabaseAsync(serializedData);", language: 'js' }]
      },
      {
        name: "deserializeDatabaseSync",
        type: "(serializedData: Uint8Array, options?: SQLiteOpenOptions) => SQLiteDatabase",
        description: "Creates a database from serialized data synchronously.",
        examples: [{ code: "const db = SQLite.deserializeDatabaseSync(serializedData);", language: 'js' }]
      },
      {
        name: "deepEqual",
        type: "(a: any, b: any) => boolean",
        description: "Compares two objects deeply for equality.",
        examples: [{ code: "const equal = SQLite.deepEqual(obj1, obj2);", language: 'js' }]
      },
      {
        name: "addDatabaseChangeListener",
        type: "(listener: (event: DatabaseChangeEvent) => void) => EventSubscription",
        description: "Adds a listener for database change events.",
        examples: [{ code: "const subscription = SQLite.addDatabaseChangeListener((event) => console.log(event));", language: 'js' }]
      },
      {
        name: "AsyncStorage",
        type: "SQLiteStorage",
        description: "Key-value storage backed by SQLite, compatible with AsyncStorage API.",
        examples: [{ code: "await SQLite.AsyncStorage.setItem('key', 'value');", language: 'js' }]
      },
      {
        name: "bundledExtensions",
        type: "Record<string, { entryPoint: string, libPath: string } | undefined>",
        description: "Pre-bundled SQLite extensions available for use.",
        examples: [{ code: "const sqliteVec = SQLite.bundledExtensions['sqlite-vec'];", language: 'js' }]
      },
      {
        name: "defaultDatabaseDirectory",
        type: "string",
        description: "The default directory path for SQLite databases.",
        examples: [{ code: "console.log(SQLite.defaultDatabaseDirectory);", language: 'js' }]
      },
      {
        name: "Storage",
        type: "SQLiteStorage",
        description: "Alias for AsyncStorage, provides key-value storage backed by SQLite.",
        examples: [{ code: "await SQLite.Storage.setItem('key', 'value');", language: 'js' }]
      }
    ],
    styles: []
  }
];