(function(){
    angular.module('auth',['app.config'])
    .factory('authService',['$http','__env', function($http,__env){
        return {
            authenticate: function(data, success, error) {
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
                //$http.post(__env.apiUrl + '/oauth/token', { headers: headers, data: body }).success(success).error(error);

                $http({
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
                    }).success(success).error(error);
            }
        };
    }]);
}());