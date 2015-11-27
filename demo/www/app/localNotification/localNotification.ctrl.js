angular.module('app.localNotification.ctrl', [])

  .controller('LocalNotificationCtrl', function ($scope, $rootScope, $cordovaLocalNotification) {

    $scope.addNotification = function () {

      var now = new Date();
      var _60_seconds_from_now = new Date(now + 60 * 1000);
      var event = {
        id: 45,
        //at: _60_seconds_from_now,
        title: "Test Event",
        text: "this is a message about the event"
      };

      document.addEventListener("deviceready", function () {
        $cordovaLocalNotification.schedule(event).then(function () {
          console.log("local add : success");
        }, function (error) {
          console.log(error)
        });

      }, false);

    };

    document.addEventListener("deviceready", function () {
      $rootScope.$on("$cordovaLocalNotification:trigger", function (event, notification, state) {
        console.log("notification id:" + notification.id + " state: " + state);
      });
    }, false);
  });
