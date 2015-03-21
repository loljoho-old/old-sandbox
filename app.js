var browserSync = require('browser-sync');

var src = {
    'html' : 'app/**/*.html',
    'css'  : 'app/styles/**/*.css',
    'js'   : ['!app/**/*.min.js', 'app/**/*.js']
};

var config = {

};

browserSync(config);