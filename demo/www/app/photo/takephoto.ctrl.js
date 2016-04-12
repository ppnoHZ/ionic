angular.module('app.TakePhotoCtrl.ctrl', [])

    .controller('TakePhotoCtrl', function($scope, $rootScope, $cordovaCamera) {


        $scope.takePhoto = function() {
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
            };

            $cordovaCamera.getPicture(options).then(function(imageURI) {

                window.alert(imageURI);
                $scope.imgUri = imageURI;
                // var image = document.getElementById('myImage');
                // image.src = imageURI;
            }, function(err) {
                // error
            });

        }
        $scope.takePhotoBaseCode = function() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                window.alert(imageData);
                $scope.imgUri = 'data:image/jpeg;base64,' + imageData;
                // var image = document.getElementById('myImage');
                // image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        }
        $scope.selectPhoto = function() {
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            };

            $cordovaCamera.getPicture(options).then(function(imageURI) {

                window.alert(imageURI);
                $scope.imgUri = imageURI;
                // var image = document.getElementById('myImage');
                // image.src = imageURI;
            }, function(err) {
                // error
            });

        }

    });

