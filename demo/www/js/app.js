// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
    'ionic',
    'ngCordova',
    'ionic-timepicker',
    'ionic-datepicker',
    'app.dataPicker.ctrl',
    'app.geolocation.ctrl',
    'app.barcodeScanner.ctrl',
    'app.localNotification.ctrl'

])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            //$cordovaPlugin.someFunction().then(success, error);
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('menu', {
                url: '/menu',
                templateUrl: 'app/menu.html',
            })
            .state('dataPicker', {
                url: '/datePicker',
                templateUrl: 'app/dataPicker/dataPicker.html',
                controller: 'dataPicker'
            })
            .state('geolocation', {
                url: '/geolocation',
                templateUrl: 'app/Geolocation/geolocation.html',
                controller: 'GeolocationCtrl'
            })
            .state('barcodeScanner', {
                url: '/barcodeScanner',
                templateUrl: 'app/barcodeScanner/barcodeScanner.html',
                controller: 'BarcodeScannerCtrl'
            })
            .state('localNotification', {
                url: '/localNotification',
                templateUrl: 'app/localNotification/localNotification.html',
                controller: 'LocalNotificationCtrl'
            })


        $urlRouterProvider.otherwise('/menu')
    })
