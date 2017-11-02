var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    //the source. Where is the stuff to do something with?
    return gulp.src('./scss/**/*.scss')
    //the actual thing(s) to do.
    .pipe(sass())
    //the target. Where to put new stuff after thing(s) have been done.
    .pipe(gulp.dest('./css'));
});
