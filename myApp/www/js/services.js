angular.module('starter.services', ['restangular'])

    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Account', function ($q, Restangular) {
        var Account = Restangular.allUrl('/user_trade/signup');
        //var Account = new Restangular.allUrl('one', 'http://192.168.3.104:18080/api/user_trade/');
        return {
            register: function (data) {
                var d = $q.defer();
                Account.post(data).then(function (result) {
                    d.resolve(result);
                }, function (error) {
                    d.reject(error);
                })
                return d.promise;
            },
            checkPhoneExist: function (phone) {
                var promis = $q.defer();
                var Phone = Restangular.one('/phone/exist/', phone);
                Phone.get().then(function (result) {
                    console.log(result)
                    promis.resolve(result);
                }, function (error) {
                    promis.reject(result);
                    console.log(error);
                });
                return promis.promise;
                console.log(phone);
            },
            getCode: function (phone) {
                var Phone = Restangular.one('/phone/get_verify_code/', phone);
                var promis = $q.defer();
                Phone.get().then(function (result) {
                    promis.resolve(result);
                }, function (error) {
                    promis.reject(result);
                })
                return promis.promise;
            }
        }
    })
    .factory('Phone', function ($q, Restangular) {
        var PhoneService = Restangular.allUrl('phone/')
    })
    .factory('ListConfig', function () {
        var companyType = [{
            text: '交易型企业',
            value: 'TRADE'
        }, {
            text: '物流型企业',
            value: 'TRAFFIC'
        }]


        return {
            getCompanyType: function () {
                return companyType;
            }
        }
    })
