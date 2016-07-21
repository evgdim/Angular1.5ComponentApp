(function(){
    'use strict';
    var authCtrl = function(authService, $location, $localStorage){
                var vm = this;
                this.username;
                this.password;
                this.showErrorMessage;
                this.login = function(){
                    authService.authenticate({username: this.username, password: this.password }, 
                    function(resp){
                        $location.path('/home');
                    }, function(err){
                        vm.showErrorMessage = true;
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