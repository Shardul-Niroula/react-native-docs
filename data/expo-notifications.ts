import { ComponentDoc } from '../types';

export const EXPO_NOTIFICATIONS_DATA: ComponentDoc[] = [
  {
    id: 'expo-notifications',
    name: 'expo-notifications',
    category: 'Expo: Notifications',
    description: 'Provides an API for fetching push notification tokens and presenting notifications.',
    importCode: "import * as Notifications from 'expo-notifications';",
    purpose: ['Push notifications', 'Local scheduled notifications'],
    installation: {
      type: 'npm',
      package: 'expo-notifications',
      command: 'npx expo install expo-notifications'
    },
    basicUsage: [
      {
        title: 'Schedule Notification',
        language: 'js',
        code: `await Notifications.scheduleNotificationAsync({
  content: { title: "Hello", body: "World" },
  trigger: { seconds: 2 },
});`
      }
    ],
    props: [
    {
      name: "addPushTokenListener",
      type: "(listener: PushTokenListener) => EventSubscription",
      description: "Registers a listener function that will be called whenever the push token changes. Useful for handling token updates gracefully.",
      examples: [{ code: "const subscription = Notifications.addPushTokenListener((token) => { console.log('Push token:', token); });", language: 'js' }]
    },
    {
      name: "getDevicePushTokenAsync",
      type: "() => Promise<DevicePushToken>",
      description: "Returns a native FCM, APNs token or PushSubscription data that can be used with another push notification service.",
      examples: [{ code: "const token = await Notifications.getDevicePushTokenAsync();", language: 'js' }]
    },
    {
      name: "getExpoPushTokenAsync",
      type: "(options?: ExpoPushTokenOptions) => Promise<ExpoPushToken>",
      description: "Returns an Expo token that can be used to send push notifications using Expo's push notifications service.",
      examples: [{ code: "const token = await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' });", language: 'js' }]
    },
    {
      name: "addNotificationReceivedListener",
      type: "(listener: (event: Notification) => void) => EventSubscription",
      description: "Registers a listener that will be called whenever a notification is received while the app is running.",
      examples: [{ code: "const subscription = Notifications.addNotificationReceivedListener((notification) => { console.log(notification); });", language: 'js' }]
    },
    {
      name: "addNotificationResponseReceivedListener",
      type: "(listener: (event: NotificationResponse) => void) => EventSubscription",
      description: "Registers a listener that will be called whenever a user interacts with a notification (e.g., taps on it).",
      examples: [{ code: "const subscription = Notifications.addNotificationResponseReceivedListener((response) => { console.log(response); });", language: 'js' }]
    },
    {
      name: "addNotificationsDroppedListener",
      type: "(listener: () => void) => EventSubscription",
      description: "Registers a listener that will be called whenever some notifications have been dropped by the server (Android FCM only).",
      examples: [{ code: "const subscription = Notifications.addNotificationsDroppedListener(() => { console.log('Notifications dropped'); });", language: 'js' }]
    },
    {
      name: "useLastNotificationResponse",
      type: "() => MaybeNotificationResponse",
      description: "A React hook that returns the notification response that was received most recently.",
      examples: [{ code: "const lastResponse = Notifications.useLastNotificationResponse();", language: 'js' }]
    },
    {
      name: "setNotificationHandler",
      type: "(handler: NotificationHandler | null) => void",
      description: "Sets a callback that will decide whether incoming notifications should be shown to the user or not.",
      examples: [{ code: "Notifications.setNotificationHandler({ handleNotification: async () => ({ shouldShowBanner: true, shouldPlaySound: false }) });", language: 'js' }]
    },
    {
      name: "registerTaskAsync",
      type: "(taskName: string) => Promise<void>",
      description: "Registers a background task to run when notifications are received while the app is in background or terminated.",
      examples: [{ code: "await Notifications.registerTaskAsync('BACKGROUND_NOTIFICATION_TASK');", language: 'js' }]
    },
    {
      name: "unregisterTaskAsync",
      type: "(taskName: string) => Promise<void>",
      description: "Unregisters a background notification task.",
      examples: [{ code: "await Notifications.unregisterTaskAsync('BACKGROUND_NOTIFICATION_TASK');", language: 'js' }]
    },
    {
      name: "getPermissionsAsync",
      type: "() => Promise<NotificationPermissionsStatus>",
      description: "Checks current permissions settings related to notifications.",
      examples: [{ code: "const permissions = await Notifications.getPermissionsAsync();", language: 'js' }]
    },
    {
      name: "requestPermissionsAsync",
      type: "(permissions?: NotificationPermissionsRequest) => Promise<NotificationPermissionsStatus>",
      description: "Prompts the user for notification permissions according to the request.",
      examples: [{ code: "const permissions = await Notifications.requestPermissionsAsync({ ios: { allowAlert: true, allowSound: true } });", language: 'js' }]
    },
    {
      name: "getBadgeCountAsync",
      type: "() => Promise<number>",
      description: "Fetches the number currently set as the badge of the app icon.",
      examples: [{ code: "const badgeCount = await Notifications.getBadgeCountAsync();", language: 'js' }]
    },
    {
      name: "setBadgeCountAsync",
      type: "(badgeCount: number, options?: SetBadgeCountOptions) => Promise<boolean>",
      description: "Sets the badge of the app's icon to the specified number.",
      examples: [{ code: "await Notifications.setBadgeCountAsync(5);", language: 'js' }]
    },
    {
      name: "cancelAllScheduledNotificationsAsync",
      type: "() => Promise<void>",
      description: "Cancels all scheduled notifications.",
      examples: [{ code: "await Notifications.cancelAllScheduledNotificationsAsync();", language: 'js' }]
    },
    {
      name: "cancelScheduledNotificationAsync",
      type: "(identifier: string) => Promise<void>",
      description: "Cancels a single scheduled notification by its identifier.",
      examples: [{ code: "await Notifications.cancelScheduledNotificationAsync('notification-id');", language: 'js' }]
    },
    {
      name: "getAllScheduledNotificationsAsync",
      type: "() => Promise<NotificationRequest[]>",
      description: "Fetches information about all scheduled notifications.",
      examples: [{ code: "const scheduled = await Notifications.getAllScheduledNotificationsAsync();", language: 'js' }]
    },
    {
      name: "getNextTriggerDateAsync",
      type: "(trigger: SchedulableNotificationTriggerInput) => Promise<number | null>",
      description: "Allows you to check what will be the next trigger date for a given notification trigger input.",
      examples: [{ code: "const nextDate = await Notifications.getNextTriggerDateAsync({ type: 'timeInterval', seconds: 60 });", language: 'js' }]
    },
    {
      name: "scheduleNotificationAsync",
      type: "(request: NotificationRequestInput) => Promise<string>",
      description: "Schedules a notification to be triggered in the future.",
      examples: [{ code: "const id = await Notifications.scheduleNotificationAsync({ content: { title: 'Hello', body: 'World' }, trigger: { seconds: 10 } });", language: 'js' }]
    },
    {
      name: "dismissAllNotificationsAsync",
      type: "() => Promise<void>",
      description: "Removes all application's notifications displayed in the notification tray.",
      examples: [{ code: "await Notifications.dismissAllNotificationsAsync();", language: 'js' }]
    },
    {
      name: "dismissNotificationAsync",
      type: "(notificationIdentifier: string) => Promise<void>",
      description: "Removes a specific notification displayed in the notification tray.",
      examples: [{ code: "await Notifications.dismissNotificationAsync('notification-id');", language: 'js' }]
    },
    {
      name: "getPresentedNotificationsAsync",
      type: "() => Promise<Notification[]>",
      description: "Fetches information about all notifications present in the notification tray.",
      examples: [{ code: "const presented = await Notifications.getPresentedNotificationsAsync();", language: 'js' }]
    },
    {
      name: "deleteNotificationChannelAsync",
      type: "(channelId: string) => Promise<void>",
      description: "Removes the notification channel (Android only).",
      examples: [{ code: "await Notifications.deleteNotificationChannelAsync('channel-id');", language: 'js' }]
    },
    {
      name: "deleteNotificationChannelGroupAsync",
      type: "(groupId: string) => Promise<void>",
      description: "Removes the notification channel group and all its channels (Android only).",
      examples: [{ code: "await Notifications.deleteNotificationChannelGroupAsync('group-id');", language: 'js' }]
    },
    {
      name: "getNotificationChannelAsync",
      type: "(channelId: string) => Promise<NotificationChannel | null>",
      description: "Fetches information about a single notification channel (Android only).",
      examples: [{ code: "const channel = await Notifications.getNotificationChannelAsync('channel-id');", language: 'js' }]
    },
    {
      name: "getNotificationChannelGroupAsync",
      type: "(groupId: string) => Promise<NotificationChannelGroup | null>",
      description: "Fetches information about a single notification channel group (Android only).",
      examples: [{ code: "const group = await Notifications.getNotificationChannelGroupAsync('group-id');", language: 'js' }]
    },
    {
      name: "getNotificationChannelGroupsAsync",
      type: "() => Promise<NotificationChannelGroup[]>",
      description: "Fetches information about all known notification channel groups (Android only).",
      examples: [{ code: "const groups = await Notifications.getNotificationChannelGroupsAsync();", language: 'js' }]
    },
    {
      name: "getNotificationChannelsAsync",
      type: "() => Promise<NotificationChannel[]>",
      description: "Fetches information about all known notification channels (Android only).",
      examples: [{ code: "const channels = await Notifications.getNotificationChannelsAsync();", language: 'js' }]
    },
    {
      name: "setNotificationChannelAsync",
      type: "(channelId: string, channel: NotificationChannelInput) => Promise<NotificationChannel | null>",
      description: "Assigns the channel configuration to a channel of specified name (Android only).",
      examples: [{ code: "await Notifications.setNotificationChannelAsync('channel-id', { name: 'My Channel', importance: Notifications.AndroidImportance.HIGH });", language: 'js' }]
    },
    {
      name: "setNotificationChannelGroupAsync",
      type: "(groupId: string, group: NotificationChannelGroupInput) => Promise<NotificationChannelGroup | null>",
      description: "Assigns the channel group configuration to a group of specified name (Android only).",
      examples: [{ code: "await Notifications.setNotificationChannelGroupAsync('group-id', { name: 'My Group' });", language: 'js' }]
    },
    {
      name: "deleteNotificationCategoryAsync",
      type: "(identifier: string) => Promise<boolean>",
      description: "Deletes the category associated with the provided identifier.",
      examples: [{ code: "await Notifications.deleteNotificationCategoryAsync('category-id');", language: 'js' }]
    },
    {
      name: "getNotificationCategoriesAsync",
      type: "() => Promise<NotificationCategory[]>",
      description: "Fetches information about all known notification categories.",
      examples: [{ code: "const categories = await Notifications.getNotificationCategoriesAsync();", language: 'js' }]
    },
    {
      name: "setNotificationCategoryAsync",
      type: "(identifier: string, actions: NotificationAction[], options?: NotificationCategoryOptions) => Promise<NotificationCategory>",
      description: "Sets the new notification category with specified actions.",
      examples: [{ code: "await Notifications.setNotificationCategoryAsync('category-id', [{ identifier: 'reply', buttonTitle: 'Reply' }]);", language: 'js' }]
    },
    {
      name: "DEFAULT_ACTION_IDENTIFIER",
      type: "string",
      description: "The default action identifier used when a user taps on a notification.",
      examples: [{ code: "if (response.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER) { /* handle tap */ }", language: 'js' }]
    },
    {
      name: "clearLastNotificationResponse",
      type: "() => void",
      description: "Clears the notification response that was received most recently.",
      examples: [{ code: "Notifications.clearLastNotificationResponse();", language: 'js' }]
    },
    {
      name: "clearLastNotificationResponseAsync",
      type: "() => Promise<void>",
      description: "Clears the notification response that was received most recently (async version).",
      examples: [{ code: "await Notifications.clearLastNotificationResponseAsync();", language: 'js' }]
    },
    {
      name: "getLastNotificationResponse",
      type: "() => NotificationResponse | null",
      description: "Gets the notification response that was received most recently.",
      examples: [{ code: "const response = Notifications.getLastNotificationResponse();", language: 'js' }]
    },
    {
      name: "getLastNotificationResponseAsync",
      type: "() => Promise<NotificationResponse | null>",
      description: "Gets the notification response that was received most recently (async version).",
      examples: [{ code: "const response = await Notifications.getLastNotificationResponseAsync();", language: 'js' }]
    },
    {
      name: "unregisterForNotificationsAsync",
      type: "() => Promise<void>",
      description: "Unregisters the app from receiving push notifications.",
      examples: [{ code: "await Notifications.unregisterForNotificationsAsync();", language: 'js' }]
    }
  ],
    styles: []
  }
];