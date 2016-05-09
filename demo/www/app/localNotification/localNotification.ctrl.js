angular.module('app.localNotification.ctrl', [])

    .controller('LocalNotificationCtrl', function($scope, $rootScope, $cordovaLocalNotification,$ionicPopover) {

        $scope.addNotification = function() {

            var now = new Date();
            var _60_seconds_from_now = new Date(now + 60 * 1000);
            var event = {
                id: 45,
                //at: _60_seconds_from_now,
                title: "Test Event",
                text: "this is a message about the event"
            };

            document.addEventListener("deviceready", function() {
                $cordovaLocalNotification.schedule(event).then(function() {
                    console.log("local add : success");
                }, function(error) {
                    console.log(error)
                });

            }, false);

        };

        document.addEventListener("deviceready", function() {
            $rootScope.$on("$cordovaLocalNotification:trigger", function(event, notification, state) {
                console.log("notification id:" + notification.id + " state: " + state);
            });
        }, false);





        // .fromTemplate() method
        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        // .fromTemplateUrl() method
        // $ionicPopover.fromTemplateUrl('my-popover.html', {
        //     scope: $scope
        // }).then(function(popover) {
        //     $scope.popover = popover;
        // });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });

    });

