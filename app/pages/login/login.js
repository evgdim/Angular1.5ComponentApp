(function(){
    'use strict';
    var authCtrl = function(authService, $location, $localStorage){
                this.username;
                this.password;
                this.login = function(){
                    authService.authenticate({username: this.username, password: this.password }, 
                        function(data){    
                            $localStorage.token = data.access_token;
                            console.log('ok ' + $localStorage.token);
                        },
                        function(err){
                            console.log('err');
                            $localStorage.token = null;
                        });
                }
            };
    authCtrl.$inject = ['authService', '$location', '$localStorage'];
    angular.module('login', ['auth', 'ngStorage'])
        .component('login', {
            templateUrl: 'app/pages/login/login.html',
            controller: authCtrl
        });
})();