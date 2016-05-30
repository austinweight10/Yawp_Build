
	// Gulp
	var gulp = require('gulp');

	// Sass/CSS stuff
	var sass = require('gulp-sass');
	var prefix = require('gulp-autoprefixer');
  var minifycss = require('gulp-clean-css');

	// JavaScript
	var uglify = require('gulp-uglify');

	// Images
	var svgmin = require('gulp-svgmin');
	var imagemin = require('gulp-imagemin');

//

	// compile all your Sass
		gulp.task('sass', function (){
			gulp.src(['./dev/sass/*.scss', '!./dev/sass/base'])
				.pipe(sass({
					includePaths: ['./dev/sass/layout', './dev/sass/base', './dev/sass/utils'],
					outputStyle: 'expanded'
				}))
				.pipe(prefix(
					"last 1 version", "> 1%", "ie 8", "ie 7"
					))
				.pipe(gulp.dest('./dev/css'))
				.pipe(minifycss())
				.pipe(gulp.dest('./prod/css'));
		});

	// Uglify JS
		gulp.task('uglify', function(){
			gulp.src('./dev/js/*.js')
				.pipe(uglify())
				.pipe(gulp.dest('./prod/js'));
		});

	// Images
		gulp.task('svgmin', function() {
			gulp.src('./dev/img/svg/*.svg')
			.pipe(svgmin())
			.pipe(gulp.dest('./dev/img/svg'))
			.pipe(gulp.dest('./prod/img/svg'));
		});

		gulp.task('imagemin', function () {
			gulp.src('./dev/img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest('./dev/img'))
			.pipe(gulp.dest('./prod/img'));
		});

//

	gulp.task('default', function(){

		// watch me getting Sassy
		gulp.watch("./dev/sass/**/*.scss", function(event){
			gulp.run('sass');
		});
		// make my JavaScript ugly
		gulp.watch("./dev/js/**/*.js", function(event){
			gulp.run('uglify');
		});
		// images
		gulp.watch("./dev/img/**/*", function(event){
			gulp.run('imagemin');
			gulp.run('svgmin');
		});
	});
