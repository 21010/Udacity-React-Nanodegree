import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = '@UdaciCard::notification'

function createDailySchedule(hour, minutes) {
    let time = new Date()
    time.setDate(time.getDate() + 1)
    time.setHours(hour)
    time.setMinutes(minutes)
    return { 
        time, 
        repeat: 'day'
    }
}
  
function createMinuteSchedule(minutes) {
    let time = new Date()
    time.setMinutes(time.getMinutes() + minutes)
    return {
        time,
        repeact: 'minute'
    }
}

function createNotification(extra) {
    return {
        title: 'UdaciCards',
        body: `👋 It's time to study. ${extra}`,
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}
 
export function clearNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification(extra = '') {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({ status }) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync()
                        Notifications.scheduleLocalNotificationAsync( 
                            createNotification(extra), 
                            // createDailySchedule(7, 0),
                            createMinuteSchedule(1),
                        )
                        AsyncStorage.setItem(NOTIFICATION_KEY)
                    }
                })
            }
        })
}