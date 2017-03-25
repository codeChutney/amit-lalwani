const browserify = require('browserify');
const reactify = require('reactify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');

module.exports = function (gulp) {
    const b = browserify();
    b.transform(reactify);
    b.add('./dev/src/client/client.js');
    
    return b.bundle()
        .pipe(source('./src/client/client.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
};