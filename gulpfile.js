var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync').create()
var imagemin = require('gulp-imagemin')
var uglify = require('gulp-uglify')
var pump = require('pump')
var ghpages = require('gulp-gh-pages')



sass.compiler = require('node-sass')

gulp.task('sass', function(){
   // We want to run "sass css/app.scss app.css --watch"
   return gulp.src('src/css/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        cleanCss({
            compatability: 'ie8'
        })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
})

gulp.task('html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('images', function(){
    return gulp.src('src/img/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/img'))
})

// gulp.task('jsmini', function(){
//     return gulp.src('src/js/*')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'))
// })

gulp.task('uglify', function (cb) {
    return gulp.src('src/js/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
})


gulp.task('watch', function(){
    browserSync.init({
        server:{
            baseDir:'dist'
        }
    })
    gulp.watch('src/*.html', ['html']).on('change', browserSync.reload)
    gulp.watch('src/fonts/*', ['fonts'])
    gulp.watch('src/images/*', ['images'])
    gulp.watch('src/js/*', ['uglify'])
    gulp.watch('src/css/app.scss', ['sass'])
})

gulp.task('deploy',function(){
    ghpages.publish('dist', function(err) {});
})

gulp.task('default', ['html','images','fonts','uglify','sass', 'watch'])