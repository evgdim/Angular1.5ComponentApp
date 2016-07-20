(function(){
    var heroCtrl = function(heroServiceFactory){
                            this.heroes = heroServiceFactory.getAllHeroes();
                            this.user = heroServiceFactory.user(
                                    function(data){
                                        console.log(data);
                                    },
                                    function(err){
                                        console.log(err);
                                    }
                            );
                        }
    heroCtrl.$inject = ['heroServiceFactory'];
    
    angular.module('heroesList', ['heroService'])
        .component('heroList', {
            templateUrl: 'app/pages/heroList/heroList.html',
            controller: heroCtrl            
        });
        
}());
    
