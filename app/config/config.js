(function(window){
    var config = angular.module('app.config', [])
        .constant('APP_NAME','My Angular App!')
        .constant('APP_VERSION','0.3');

    //__env var is loaded in index.html from env.js
    if(window){  
        Object.assign(__env, window.__env);
    }

    config.constant('__env', __env);
}(window));
