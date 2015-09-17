/**
 * @file gulp file
 * @author junmer
 */


var gulp = require('gulp');
var del = require('del');
var edp = require('gulp-edp');
var gif = require('gulp-if');
var RevAll = require('gulp-rev-all');

var edpConfig = require('./edp-build-config');

gulp.task('clean', function () {
    return del([
        'dist'
    ]);
});

gulp.task('edp', ['clean'], function () {

    var revAll = new RevAll({
        // debug: true,
        dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g]
    });

    return gulp.src(
            [
                'src/**',
                'dep/**',
                '!dep/**/{demo,demo/**}',
                '!dep/**/{test,test/**}',
                '*.html'
            ]
        )
        .pipe(gif(
            [
                '**/src/**',
                '!**/dep/**',
                '**/*.html'
            ],
            revAll.revision()
        ))
        .pipe(edp(edpConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['edp']);
