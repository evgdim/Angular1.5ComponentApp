(function(){
    angular.module('heroService',['app.config'])
    .factory('heroServiceFactory', ['__env',function(__env) {
        return {
            getAllHeroes: function(){
                console.log('[heroService::getAllHeroes]' + __env.apiUrl);
                return  [
                            {name:'a', id: 1},
                            {name:'b', id: 2},
                            {name:'c', id: 3}
                        ];
            }
        };
    }]);
}());
    

