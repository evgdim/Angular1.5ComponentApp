(function(){
    angular.module('heroesList', ['heroService'])
        .component('heroList', {
            templateUrl: 'app/pages/heroList/heroList.html',
            controller: function(heroServiceFactory){
                this.heroes = heroServiceFactory.getAllHeroes();
            }
        });
}());
    
