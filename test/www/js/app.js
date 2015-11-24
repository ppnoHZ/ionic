// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('regBase', ['ionic','ngIOS9UIWebViewPatch'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
    .controller('RegisterCtrl',function($scope,$http){
        //
        $scope.nav = {
            navLeftHref:'./left'
            ,onclick:function(){}
            ,navLeftIco:''
            ,navLeft:'返回'
            ,title:'注册'
            ,navRightHref:'./right'
            ,navRight:'高级'
            ,navRightIco:''
            ,companyName:''
        };
        $scope.islogin=true;
        $scope.displayName='欢迎登录';
        $scope.regmsg ={
            companyName:''
            ,userName:''
            ,type:'trade'
            ,phoneNum:''
            ,getCode:function(){ $scope.regmsg.verification_code='1234'}
            ,verification_code:''
            ,pwd:''
            ,data:''
        }
        $scope.goLogin=function(){

            var data={
                username:$scope.regmsg.userName,
                nickName:$scope.regmsg.userName,
                password:$scope.regmsg.userName
            };


            $scope.regmsg.companyName='测试';

            //console.log(JSON.stringify(data));
            // 将注册数据存储本地，并跳转下一页
            // localStorage['regmsg']=$scope.regmsg;    //存储值为“[object Object]”
            $http.get('http://192.168.3.104:18080/account/test',data
            ).then(function (result) {
                    $scope.regmsg.data=result.data;
                })

            window.localStorage.setItem('regmsg',angular.toJson($scope.regmsg))
        }
        $scope.errorClass={
            companyName:''
            ,name:''
            ,phone:''
            ,verificationCode:''
            ,password:''
        }

    })


