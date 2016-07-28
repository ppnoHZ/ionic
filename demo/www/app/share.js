angular.module('app.share.ctrl', [])

    .controller('shareCtrl', function ($scope, $rootScope, $cordovaSms) {
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


        $scope.open = function () {
            deeplink.open($scope.messageInfo.url);
        }

        function clickHandler(uri) {
            deeplink.open(uri);
            return false;
        }


        // window.alert('dd')
    })



