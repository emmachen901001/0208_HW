const { src, dest, parallel} = require('gulp');
const gulpSass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const purge = require('gulp-purgecss');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

function css(){
    return src('scss/style.scss')
    .pipe(maps.init())
    .pipe(gulpSass({
        outputstyle:'expanded'
    }))
    .pipe(purge({
        content: ['*.html']
    }))
    .pipe(maps.write('./'))
    .pipe(dest('dist/css/'));
}
// function cssm(){
//     return src('scss/style.scss')
//     .pipe(maps.init())
//     .pipe(gulpSass())
//     .pipe(purge({
//         content:['*.html']
//     }))
//     .pipe(csso())
//     .pipi(rename(function(path){
//         path.basename += '.min';
//         path.extname = '.css'
//     }))
//     .pipe(maps.write('./'))
//     .pipe(dest('dist/css/'));
// }

function cssm(){
    return src('scss/style.scss')
    .pipe(maps.init())
    .pipe(gulpSass())
    .pipe(purge({
        content:['*.html']
    }))
    .pipe(csso())
    .pipe(rename(function(path){
        path.basename += '.min';
        path.extname = '.css'
    }))
    .pipe(maps.write('./'))
    .pipe(dest('dist/css/'))
}

exports.css = css;
exports.cssm = cssm;
exports.default = parallel(css,cssm);
