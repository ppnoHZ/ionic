angular.module('app.contacts.ctrl', [])

    .controller('ContactsCtrl', function($scope, $rootScope, $cordovaLocalNotification, $cordovaContacts) {
        $scope.selectContacts = function() {
            $cordovaContacts.pickContact().then(function(contactPicked) {
                $scope.contact = contactPicked;
            })
      }
    });

