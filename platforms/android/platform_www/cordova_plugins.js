cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-themeablebrowser.themeablebrowser",
        "file": "plugins/cordova-plugin-themeablebrowser/www/themeablebrowser.js",
        "pluginId": "cordova-plugin-themeablebrowser",
        "clobbers": [
            "cordova.ThemeableBrowser"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.Toast",
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-nativestorage.mainHandle",
        "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
        "pluginId": "cordova-plugin-nativestorage",
        "clobbers": [
            "NativeStorage"
        ]
    },
    {
        "id": "cordova-plugin-nativestorage.LocalStorageHandle",
        "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
        "pluginId": "cordova-plugin-nativestorage"
    },
    {
        "id": "cordova-plugin-nativestorage.NativeStorageError",
        "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
        "pluginId": "cordova-plugin-nativestorage"
    },
    {
        "id": "cordova-plugin-apprate.AppRate",
        "file": "plugins/cordova-plugin-apprate/www/AppRate.js",
        "pluginId": "cordova-plugin-apprate",
        "clobbers": [
            "AppRate"
        ]
    },
    {
        "id": "cordova-plugin-apprate.locales",
        "file": "plugins/cordova-plugin-apprate/www/locales.js",
        "pluginId": "cordova-plugin-apprate",
        "runs": true
    },
    {
        "id": "cordova-plugin-apprate.storage",
        "file": "plugins/cordova-plugin-apprate/www/storage.js",
        "pluginId": "cordova-plugin-apprate",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.37.2",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-ionic-keyboard": "2.1.3",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-themeablebrowser": "0.2.17",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-x-toast": "2.7.2",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-apprate": "1.4.0"
};
// BOTTOM OF METADATA
});