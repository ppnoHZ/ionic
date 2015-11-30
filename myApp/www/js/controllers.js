angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {

        $scope.companyName = '';
        $scope.register = function () {
            console.log($scope.companyName);
        }
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('RegisterCtrl', function ($scope, ListConfig, Account) {

        $scope.user = {
            full_name: '斯塔克文化传媒',
            real_name: '斯塔克',
            phone: '18515062000',
            password: '123qaz',
            confirm_password: '123qaz',
            type: "TRADE"
        }
        $scope.companyTypes = ListConfig.getCompanyType();


        $scope.register = function () {
            Account.register($scope.user).then(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error)
            })
        }

        $scope.typeChange = function (item) {
            $scope.user.type = item.value;
        }


        $scope.getCode = function () {
            Account.getCode($scope.user.phone).then(function (result) {
                console.log(result);
                if (result.status != "success") {

                } else {
                    $scope.user.verify_code = result.data.code;
                }
                //$scope.$apply(function () {
                //
                //});
            }, function (error) {
                console.log(error);
            });
            //$event.stopPropagation();
        }
    })
    .controller('BootstrapCtrl', function ($scope, $ionicSlideBoxDelegate, $window) {


        var w = angular.element($window);

        console.log(w);
        // $scope.getWindowDimensions = function () {
        //         return {
        //             'h': w.height(),
        //             'w': w.width()
        //         };
        //     };

        // $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
        //     // scope.windowHeight = newValue.h;
        //     // scope.windowWidth = newValue.w;

        //     if(newValue.w<100)
        //     {
        //          $ionicSlideBoxDelegate.enableSlide(false);
        //      }else
        //      {
        //          $ionicSlideBoxDelegate.enableSlide(true);

        //      }
        //     $scope.style = function () {
        //         return {
        //                 'height': (newValue.h - 100) + 'px',
        //                 'width': (newValue.w - 100) + 'px'
        //         };
        //     };

        // }, true);

        w.bind('resize', function () {
            if (window.innerWidth < 768) {
                $ionicSlideBoxDelegate.enableSlide(true);

            } else if (window.innerWidth >= 992) {
                $ionicSlideBoxDelegate.enableSlide(false);

            }
        });

        $scope.$watch('$viewContentLoaded', function () {
            if (window.innerWidth < 768) {
                $ionicSlideBoxDelegate.enableSlide(true);

            } else if (window.innerWidth >= 992) {
                $ionicSlideBoxDelegate.enableSlide(false);

            }
            // $window.
        });
    })
;


