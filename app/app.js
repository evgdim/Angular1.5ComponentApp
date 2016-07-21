(function(){
    'use strict';
    var AppController = function(authService, $location){
        this.logout = function(){
            authService.logout();
            $location.path('/login');
        };
    }
    AppController.$inject = ['authService', '$location'];
    angular.module('app', ['ngComponentRouter','heroes','villians','login', 'app.home'])
        .config(['$locationProvider','$httpProvider',function($locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true);
            $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
                return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        if ($localStorage.token) {
                            config.headers.Authorization = 'Bearer ' + $localStorage.token;
                        }
                        return config;
                    },
                    'responseError': function(response) {
                        if(response.status === 401 || response.status === 403) {
                            $location.path('/login');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        }])
        .value('$routerRootComponent', 'app')
        .component('app', {
            templateUrl:'app/app.html',
            controller: AppController,
            $routeConfig: [
                {path: '/login', name: 'Login', component: 'login', useAsDefault: true},
                {path: '/home', name: 'Home', component: 'home'},
                {path: '/heroes', name: 'Heroes', component: 'heroes'},
                {path: '/villians', name: 'Villians', component: 'villians'}               
            ]
            
        });
})();


