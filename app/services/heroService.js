angular.module('heroService',[])
    .factory('heroServiceFactory', function() {
        return {
            getAllHeroes: function(){
                return ['a','b','c'];
            }
        };
    });