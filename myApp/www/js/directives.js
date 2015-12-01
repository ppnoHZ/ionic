/**
 * Created by ID on 15/11/27.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
angular.module('starter.directives', [])
    .directive('cUnique', function (Account) {
        return {
            require: 'ngModel',
            link: function (scope, ele, attrs, ctrl) {
                //console.log('ele', ele)
                //console.log('scope', scope)
                //console.log('attrs', attrs)
                //console.log('ctrl', ctrl)
                scope.$watch(attrs.ngModel, function () {
                    scope.Error.too_frequent=false;
                    //if (!n) {
                    //    console.log('return')
                    //    return;
                    //}
                    //ctrl.$parsers.push(function (val) {
                    var val=scope.user.phone;
                        console.log("ctrl.$valid", ctrl.$valid);
                        //if (!val) {
                        //    ctrl.$setValidity('required', false);
                        //    return val;
                        //} else
                        {
                            if (!ctrl.$valid) {
                                ctrl.$setValidity('valueUnique', true);
                                //return val;
                            } else {


                                Account.checkPhoneExist(val).then(function (result) {
                                    if (result.status != "success") {
                                        //ctrl.$setValidity('invalid_format', false);
                                        ctrl.$setValidity('valueUnique', result.data.use);
                                    } else {
                                        //ctrl.$setValidity('invalid_format', true);
                                        ctrl.$setValidity('valueUnique', !result.data.use);
                                        console.log(!result.data.use);
                                    }
                                });
                                //return val;
                            }
                        }
                    //})
                })
            }
        }
    })