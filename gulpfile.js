/*jslint white:true */

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    
    'use strict';

    browserSync.init(['css/*.css', 'js/*.js'], {
        proxy: 'test2.dev'
    });

});


/* Compile scss */
gulp.task('sass', function () {
    
    'use strict';

    gulp.src([
        'sass/app.scss'
    ])
        .pipe(sass())
        .pipe(gulp.dest('css'))
        /* Reload the browser CSS after every change */
        .pipe(reload({stream:true}));

});

/* Reload browser after file changes */
gulp.task('bs-reload', function () {

    'use strict';

    browserSync.reload();

});

/* Watch scss, js and php files */
gulp.task('default', ['sass', 'browser-sync'], function () {

    'use strict';

    /* Watch scss, run the sass task on change. */
    gulp.watch(['sass/**/*.scss'], ['sass']);
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['*.html'], ['bs-reload']);

});