/**
 * Gulp Configuration
 */

module.exports = function() {

    /**
     * Initialise File Paths
     */
    var root        = './';
    var source      = './src/';
    var dest        = './build/';

    var server      = './src/server/';
    var client      = './src/client/';

    var bower       = {
        dir:    './bower_components',
        json:   require('./bower.json'),
    };
    var npm         = {
        dir:    './node_modules',
        json:   require('./package.json')
    };


    /**
     * Object to Return
     */
    var config = {

        build:  dest,
        root:   root,
        source: source,
        client: client,
        server: server,

        /**
         * App JavaScript Files
         */
        js: [
            client + 'app/**/*.module.js',
            client + 'app/**/*.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],

        /**
         * Stylesheet/Preprocessor Files
         */
        sass:   client + 'assets/styles/**/*.scss',
        css:    client + 'assets/styles/**/*.css',

        /**
         * HTML and Template Files
         */
        index:  client + 'index.html',
        html:   client + '**/*.html',
        tpls:   client + 'app/**/*.html',

        /**
         * Static Assets
         */
        images: client + 'assets/images/**/*.*',
        fonts:  client + 'assets/fonts/**/*.*'

    };

    return config;

    ////////////////


}