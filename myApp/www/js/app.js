// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'ui.validate',
    'starter.controllers',
    'starter.services',
    'ngMessages',
    "restangular",
    'starter.directives'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, RestangularProvider) {
        RestangularProvider.setBaseUrl('http://192.168.3.105:18080/api/');

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/demo/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/demo/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/demo/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/demo/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.register', {
                url: '/register',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/general/register.html',
                        controller: 'RegisterCtrl'
                    }
                }
            })
            .state('bootstrap', {
                url: '/bootstrap',
                templateUrl: 'templates/bootstrap.html',
                controller: 'BootstrapCtrl'
            })
            .state('tab.main', {
                url: '/main',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/main.html',
                        controller: 'MainCtrl'
                    }
                }

            })
            .state('tab.me', {
                url: '/me',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/me/me.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('tab.pass', {
                url: '/pass',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/pass/pass.html',
                        controller: 'MainCtrl'
                    }
                }

            })
        $urlRouterProvider.otherwise('/tab/register');

    })
;
