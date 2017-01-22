angular.module('app.sms.ctrl', [])

    .controller('smsCtrl', function ($scope, $rootScope, $cordovaSms,$ionicPopover) {

        $scope.messageInfo = {
            phoneNumber: "",
            textMessage: ""
        };


        $ionicPopover.fromTemplateUrl('templates/popover.html', {
            scope: $scope,
        }).then(function (popover) {
            $scope.popover = popover;
        });


        $scope.send = function () {
            var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    intent: 'INTENT'  // send SMS with the native android SMS messaging
                    // intent: '' // send SMS without open any other app
                }
            };

            $cordovaSms
                .send($scope.messageInfo.phoneNumber, $scope.messageInfo.textMessage, options)
                .then(function () {
                    // Success! SMS was sent
                    window.alert('发送成功·')
                }, function (error) {
                    // An error occurred
                    window.alert(error)
                });
        }
    })



