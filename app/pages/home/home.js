(function(){
    'use strict'
    
    var homeCtrl = function(authService){
        var vm = this;  
        vm.token = authService.getToken();
        vm.user = authService.getUser();
    }
    homeCtrl.$inject = ['authService'];
    angular.module('app.home',[])
        .component('home', {
            templateUrl: 'app/pages/home/home.html',
            controller: homeCtrl
        });
})();