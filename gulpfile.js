var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxy = require('http-proxy-middleware');


    var apiProxy = {
        port: '8080',
        context: 'stuff_api'
    };

gulp.task('run', function(){
    var apiProxyUrl = 'http://localhost:' + apiProxy.port + '/' + apiProxy.context;
    browserSync.init({
        server: {
            baseDir: "public"
        },
        middleware: [proxy(apiProxyUrl)]
    });
});

gulp.task('runHeroku', function(){
    var apiProxyUrl = 'https://stuffserver.herokuapp.com/' + apiProxy.context;
    browserSync.init({
        server: {
            baseDir: "public"
        },
        middleware: [proxy(apiProxyUrl)]
    });
});