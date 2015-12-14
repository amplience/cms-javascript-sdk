'use strict';
var pkg = require('./package.json');
var gulp = require('gulp');
var del = require('del');
var path = require('path');

var $ = require('gulp-load-plugins')();

gulp.task('clear', function () {
    return del(pkg.config.dist + '/*');
});

gulp.task('code-quality', function () {
    return gulp.src(path.join(pkg.config.src, '/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.jscs({fix: false, configPath: '.jscsrc'}));
});

gulp.task('jscs-fix', function () {
    return gulp.src(path.join(pkg.config.src, '/**/*.js'))
        .pipe($.jscs({fix: false, configPath: '.jscsrc'}));
});

gulp.task('uglify', function () {
    return gulp.src(path.join(pkg.config.src, '/**/*.js'))
        .pipe($.sourcemaps.init())
        .pipe($.uglify())
        .pipe($.rename(function (path) {
            path.basename = pkg.name;
            path.extname = ".min.js"
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(pkg.config.dist));
});

gulp.task('tests', function () {
    return gulp.src(['tests/*.js'], { read: false })
        .pipe($.mocha({ reporter: 'spec' }));
});

gulp.task('default', ['code-quality', 'tests', 'clear'], function () {
    gulp.start('uglify');
});