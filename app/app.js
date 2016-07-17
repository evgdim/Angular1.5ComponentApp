angular.module('app', ['ngComponentRouter','heroes','villians'])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template:
            '<nav>\n' +
            '  <a>Crisis Center</a>\n' +
            '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
            '  <a ng-link="[\'Villians\']">Villians</a>\n' +
            '</nav>\n' +
            '<ng-outlet></ng-outlet>\n',
        $routeConfig: [
            {path: '/heroes', name: 'Heroes', component: 'heroes'},
            {path: '/villians', name: 'Villians', component: 'villians'},
        ]
});

angular.module('heroes', [])
.component('heroes', {
  template: '<h2>Heroes</h2>',
  controller: function(){

  }
});

angular.module('villians', [])
.component('villians', {
  template: '<h2>villians</h2>',
  controller: function(){

  }
});