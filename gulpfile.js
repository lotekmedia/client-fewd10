var gulp = require('gulp');

var config = {
    paths: {
        src: './src',
        dest: './public'

    }
}

gulp.task('default', ['html', 'images', 'CSS', 'scripts', 'fonts']);

gulp.task('fonts', function() {
   gulp.src(config.paths.src + '/fonts/**/*')
   .pipe(gulp.dest(config.paths.dest + '/fonts'));
});

gulp.task('CSS', function() {
   gulp.src(config.paths.src + '/CSS/**/*')
   .pipe(gulp.dest(config.paths.dest + '/css'));
});

gulp.task('images', function() {
   gulp.src(config.paths.src + '/images/**/*')
   .pipe(gulp.dest(config.paths.dest + '/images'));
});

gulp.task('html', function() {
   gulp.src(config.paths.src + '/*.html')
   .pipe(gulp.dest(config.paths.dest));
});

gulp.task('scripts', function() {
   gulp.src(config.paths.src + '/scripts/**/*')
   .pipe(gulp.dest(config.paths.dest + '/scripts'));
});