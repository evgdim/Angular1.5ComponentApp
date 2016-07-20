(function(){
    angular.module('app', ['ngComponentRouter','heroes','villians','login'])
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
            $routeConfig: [
                {path: '/heroes', name: 'Heroes', component: 'heroes', useAsDefault: true},
                {path: '/villians', name: 'Villians', component: 'villians'},
                {path: '/login', name: 'Login', component: 'login'}
            ]
            
        });
}());


