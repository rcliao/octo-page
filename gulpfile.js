var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

var PATH = {
    DEST: 'build',
    SASS: ['sass/app.scss']
};

// A wrapper to call all other build task
gulp.task(
	'build',
	[
		'stylesheet'
	],
	function() { }
);

gulp.task('clean', function(cb) {
	del([PATH.DEST], cb);
});

gulp.task('stylesheet', ['clean'], function() {
    return gulp.src(PATH.SASS)
        .pipe(sass({
            includePaths: [
                './node_modules/octo-style/',
            ]
        }))
        .pipe(gulp.dest(PATH.DEST));
});
