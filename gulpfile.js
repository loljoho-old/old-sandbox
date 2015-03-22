/**
 * Gulp Task File
 * @task    jshint        Lint JavaScript
 * @task    images
 * @task    
 * @task    
 * @task    
 * @task    default     
 */

// Bootstrap GulpJS and Gulp Plugins
// @see https://www.npmjs.com/package/gulp-load-plugins
// @see https://www.npmjs.com/package/gulp-bower-files
// @see https://github.com/BrowserSync/recipes/tree/master/recipes/gulp.sass
var gulp        = require('gulp');
var browserSync = require('browser-sync');

var config      = require('./gulp.config')();
var $           = require('gulp-load-plugins')({lazy: true});

/**
 * Serve from src/
 */
gulp.task('serve', [/*'sass', 'lint'*/], function() {

    browserSync({
        server: {
            baseDir: './app'
        }});

    //gulp.watch(config.sass), ['sass']);
    //gulp.watch(config.html).on('change', reload);

});

/**
 * Compile .scss and inject browser
 *
 gulp.task('sass', function() {
    return gulp.src(config.sass)
        .pipe(sass())
        .pipe(gulp.dest(client + 'assets/styles/'))
        .pipe(reload({stream:true}));
 });*/

/**
 * Lint and Uglify JavaScript
 *
gulp.task('lint', function() {
    return gulp.src(config.js)
        .pipe(uglify())
        .pipe(jshint())
        .pipe(gulp.dest(dest));
});*/

/**
 * Gulp Default
 */
gulp.task('default', ['serve'], function() {
    gulp.watch('./app/**/*.*', browserSync.reload);

});