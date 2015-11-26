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
            }
        }
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
