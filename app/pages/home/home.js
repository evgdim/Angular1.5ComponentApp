(function(){
    'use strict'
    
    var homeCtrl = function(authService){
        var vm = this;  
        vm.token = authService.getToken();
    }
    homeCtrl.$inject = ['authService'];
    angular.module('app.home',[])
        .component('home', {
            templateUrl: 'app/pages/home/home.html',
            controller: homeCtrl
        });
})();