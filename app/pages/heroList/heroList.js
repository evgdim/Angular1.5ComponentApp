(function(){
    var heroCtrl = function(heroServiceFactory){
                            this.heroes = heroServiceFactory.getAllHeroes();
                            this.user = heroServiceFactory.user()
                            .subscribe(function(x){console.log("[rx] "+x.data.name)})
                            
                        }
    heroCtrl.$inject = ['heroServiceFactory'];
    
    angular.module('heroesList', ['heroService', 'auth'])
        .component('heroList', {
            templateUrl: 'app/pages/heroList/heroList.html',
            controller: heroCtrl,
            $canActivate: function(authService){
                console.log('[canActivate] '+ authService.currentUser());
                return true;
            }            
        });
        
}());
    
