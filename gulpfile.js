var gulp = require('gulp');
var sass = require('gulp-sass');

/*
What you could add to the sass task:
- Autoprefixer
- (Better) error handling
- Compress file
- rename output file after compression to xyz.min.css
- implement browserify to reload on changes
*/

gulp.task('sass', function() {
    //the source. Where is the stuff to do something with?
    return gulp.src('./scss/**/*.scss')
    //the actual thing(s) to do.
    .pipe(sass())
    //the target. Where to put new stuff after thing(s) have been done.
    .pipe(gulp.dest('./css'));
});