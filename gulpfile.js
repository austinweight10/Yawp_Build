
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

	// browserSync
	var browserSync = require('browser-sync').create();

	// browserSync
	gulp.task('serve', function() {

	browserSync.init(null, {
		 proxy:"localhost:8888/Yawp_Build/Yawp_Build/"
	});

	gulp.watch(".prod/css/*.css").on('change', browserSync.reload);
	gulp.watch(".*.html").on('change', browserSync.reload);
	});


	// compile all your Sass
		gulp.task('sass', function (){
			gulp.src(['./dev/sass/*.scss', '!./dev/sass/base', '!./dev/sass/layout', '!./dev/sass/utils'])
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
				//.pipe(reload({stream: true}));
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
			gulp.src('./dev/img/png_jpg/*')
			.pipe(imagemin())
			.pipe(gulp.dest('./dev/img'))
			.pipe(gulp.dest('./prod/img'));
		});




		// Defalt watch
	gulp.task('default', ['serve'], function(){

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
