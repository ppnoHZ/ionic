angular.module('app.controllers.ctrl', [])

    .controller('testCtrl', function ($scope, $rootScope, $cordovaSms, $ionicPopup) {
        // deeplink.setup({
        //     iOS: {
        //         appId: "284882215",
        //         appName: "facebook",
        //     },
        //     android: {
        //         appId: "com.facebook.katana"
        //     }
        // });


        deeplink.setup({
            iOS: {
                appName: "ionic-demo",
                appId: "123456789",
                storeUrl: "http://...",
            },
            android: {
                appId: "com.ionic.demo",
                storeUrl: "http://www.baidu.com",

            },
            // androidDisabled: true,
        });


        $scope.messageInfo = {
            phoneNumber: "",
            url: "myapp://object/xyz"
        };
        $scope.data = {
            wifi: ''
        }

        $scope.open = function () {
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi"><input type="password" ng-model="data.wifi"><input type="password" ng-model="data.wifi"><input type="password" ng-model="data.wifi"><input type="password" ng-model="data.wifi"><input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });
            // deeplink.open($scope.messageInfo.url);
        }

        function clickHandler(uri) {
            deeplink.open(uri);
            return false;
        }


        // window.alert('dd')
    })



