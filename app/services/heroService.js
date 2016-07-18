(function(){
    angular.module('heroService',[])
    .factory('heroServiceFactory', function() {
        return {
            getAllHeroes: function(){
                return  [
                            {name:'a', id: 1},
                            {name:'b', id: 2},
                            {name:'c', id: 3}
                        ];
            }
        };
    });
}())
