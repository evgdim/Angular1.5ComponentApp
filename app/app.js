angular.module('app', ['ngComponentRouter','heroes','villians'])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl:'app/app.html',
        $routeConfig: [
            {path: '/heroes', name: 'Heroes', component: 'heroes', useAsDefault: true},
            {path: '/villians', name: 'Villians', component: 'villians'},
        ]
});

