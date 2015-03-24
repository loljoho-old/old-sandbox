var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
//var config      = require('./gulp.config')();
var $           = require('gulp-load-plugins')({lazy: true});

/**
 * Serve from app/
 */
gulp.task('serve', function() {

    browserSync({
        server: {
            baseDir: './app'
        }
    });
    gulp.watch('app/**/*.html').on('change', reload);
    gulp.watch('app/**/*.js').on('change', reload);

});

gulp.task('default', ['serve']);