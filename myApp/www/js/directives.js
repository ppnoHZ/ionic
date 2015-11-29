/**
 * Created by ID on 15/11/27.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
angular.module('starter.directives', [])
    .directive('valueUnique', function (Account) {
        return {
            require: 'ngModel',
            link: function (scope, ele, attrs, ctrl) {
                // console.log('ele', ele)
                // console.log('scope', scope)
                // console.log('attrs', attrs)
                // console.log('c', ctrl)
                scope.$watch(attrs.ngModel, function (n) {
                    if (!n)
                        return;
                    ctrl.$parsers.push(function (val) {
                        if(val)
                        {
                            ctrl.$setValidity('required', true);
                            return;
                        }
                        Account.checkPhoneExist(ctrl.$modelValue).then(function (result) {
                            //有问题，老是返回not-found
                            ctrl.$setValidity('valueUnique', result.use);
                            console.log(!result.use);
                        })

                    })
                })
            }
        }
    })