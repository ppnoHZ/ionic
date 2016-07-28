angular.module('app.sms.ctrl', [])

    .controller('smsCtrl', function ($scope, $rootScope, $cordovaSms) {

        $scope.messageInfo = {
            phoneNumber: "",
            textMessage: ""
        };


        


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



