(function(){
    'use strict';
    angular.module('auth',['app.config'])
    .factory('authService',['$http','__env','$localStorage', function($http,__env,$localStorage){
        var token;
        var user;
        var authenticate = function(data, success, error) {
                var headers = {
                                'accept': 'application/json', 
                                "authorization": "Basic Y2xpZW50YXBwOjEyMzQ1Ng==", 
                                "cache-control": "no-cache",
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                var body = {
                    "password": data.password,
                    "username": data.username,
                    "grant_type": "password",
                    "scope": "read",
                    "client_secret": "123456",
                    "client_id": "clientapp"
                };
                var getTokenOptions = {
                    method: 'POST',
                    url: __env.apiUrl + '/oauth/token',
                    headers: headers,
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: body
                };
                var getUserOptions = {
                    method: 'GET',
                    url: __env.apiUrl + '/user'
                };
                $http(getTokenOptions)
                    .success(function(resp){
                        token = resp.access_token;
                        $localStorage.token = resp.access_token;
                        $http(getUserOptions)
                            .success(function(resp){
                                console.log(resp);
                                user = resp;
                                success(resp);
                            }).error(function(err){
                                error(err);
                            });   
                    }).error(function(err){
                        token = null;
                        error(err);
                    });
            };
            var logout = function(){
                token = null;
            }
        return {
            authenticate: authenticate,
            logout: logout,
            getToken: function(){ return token; },
            getUser: function(){ return user; }
        };
    }]);
})();