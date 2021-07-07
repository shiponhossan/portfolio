let gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    rename = require("gulp-rename"),
    cleanCSS = require('gulp-clean-css');



// gulp.task('minify', () => {
//     return gulp.src('resources/js/*.js', { allowEmpty: true })
//         .pipe(minify({noSource: true,ext:'.js',suffix: ''}))
//         .pipe(gulp.dest('js/'))
// });

gulp.task('build', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min",}))
        .pipe(gulp.dest('assets/style'));
});

gulp.task('cache-clean', () => {
    return del([
        'asset/css-del/.sass-cache/',
    ]);
});


gulp.task('default', gulp.series(['build','cache-clean']));


gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['build','cache-clean'])(done);
    });
});
