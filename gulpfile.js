const gulp = require('gulp');
const watch = require('gulp-watch');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');

var cssFiles = [
  './src/css/Owl-carousel/owl.carousel.css',
  './src/css/Owl-carousel/owl.theme.default.css',
  './src/css/style.css',
  './src/css/Header.css',
  './src/css/Services.css',
  './src/css/Waxom is Realization of your Ideas.css',
  './src/css/Purchase now.css',
  './src/css/Our Latest Projects.css',
  './src/css/Waxom Video Presentation.css',
  './src/css/Excellent for Mobile Devices.css',
  './src/css/Statistics.css',
  './src/css/Recent Posts.css',
  './src/css/Logos.css',
  './src/css/Footer.css',
  './src/css/Copyright.css'
];

var jsFiles = [
  './src/js/HeaderMenuAndsSlider.js',
  './src/js/OurLatestProjects.js',
  './src/js/RecentPostsOwl.js',
  './src/js/owl.carousel.js',
  './src/js/jquery-3.4.1.min.js',
];

gulp.task('style', function(){
  return gulp.src(cssFiles)
   .pipe(concat('all.css'))
   .pipe(cleanCSS({
        level: 2
    }))
   .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
   .pipe(gcmq())
   .pipe(gulp.dest('./build/css'))
});

gulp.task('script', function(){
  return gulp.src(jsFiles)
   .pipe(concat('all.js'))
   .pipe(uglify({
    toplevel: true
   }))   
   .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', ['less'], function() {

    browserSync.init({
        port: 3002,
        server: "./"
    });

    gulp.watch("./src/less/*.less", ['less']);
    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('less', function(){
   gulp.src('./src/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('./src/css/'))
  .pipe(browserSync.stream());
});

gulp.task('clean',function(){
  return del(['build/*']);
})

gulp.task('build', ['clean', 'script' , 'style'])
