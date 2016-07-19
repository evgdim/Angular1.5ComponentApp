
    angular.module('heroes', ['heroesList', 'heroesDetails'])
    .component('heroes', {
    templateUrl: 'app/pages/heroes/heroes.html',
    $routeConfig: [
            {path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true},
            {path: '/:id', name: 'HeroDetails', component: 'heroDetails'},
        ]
    });

