(function(){
    'use strict'
    
    var homeCtrl = function(authService, $localStorage){
        var vm = this;  
        vm.token = $localStorage.token;
    }
    homeCtrl.$inject = ['authService', '$localStorage'];
    angular.module('app.home',[])
        .component('home', {
            templateUrl: 'app/pages/home/home.html',
            controller: homeCtrl
        });
})();