(function(){
    'use strict';
    angular.module('heroService',['app.config'])
    .factory('heroServiceFactory', ['__env', '$http',function(__env, $http) {
        return {
            getAllHeroes: function(){
                console.log('[heroService::getAllHeroes]' + __env.apiUrl);
                return  [
                            {name:'a', id: 1},
                            {name:'b', id: 2},
                            {name:'c', id: 3}
                        ];
            },
            user: function(){
                return Rx.Observable.fromPromise(
                            $http.get(__env.apiUrl + '/user')
                        );
            }
        };
    }]);
})();
    

