//node plugins
const nodemon = require('gulp-nodemon');    

//environments
const dev = require('gulp-environments').development;

//gulp utilities
const gulp = require('gulp'),
    gulpif = require('gulp-if');

const browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    htmlmin = require('gulp-htmlmin'),
    plumber = require('gulp-plumber'),
    sitemap = require('gulp-sitemap'),
    compress = require('gulp-yuicompressor');
    
const postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

const babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    webp = require('gulp-webp'),
    svgmin = require('gulp-svgmin'),
    tinypng = require('gulp-tinypng-compress');

const autoprefixer = require('gulp-autoprefixer');

const cleanCSS = require('gulp-clean-css');
const postcssPlugin = [
    //minification, optimization plugin for css files
    cssnano({
        //Removes unnecessary prefixes based on the browsers option. 
        //Note that by default, it will not add new prefixes to the CSS file.
        autoprefixer:{
            add: true
        },
        //If core is set to TRUE, trims whitespace inside and around rules, selectors & declarations, 
        //plus removes the final semicolon inside every selector.
        core: false
    })
];

const
    dir ={
        dev: 'dev',
        dist: 'dist',
        nm: 'node_modules',
    },
    files ={
        fonts:[
            `${dir.dev}/assets/css/fonts/**/*.*`,
            `${dir.nm}/font-awesome/fonts/*.*`
        ],
        css:[
            `${dir.nm}/normalize.css/normalize.css`,
            // `${dir.nm}/font-awesome/css/font-awesome.css`,
            // `${dir.nm}/animate.css/animate.min.css`,
            // `${dir.dev}/assets/css/fonts.css`
            // `${dir.dev}/assets/css/owl.carousel.css`,
            // `${dir.dev}/assets/css/owl.theme.css`,
            // `${dir.dev}/assets/css/owl.transitionscss`,
            // `${dir.nm}/nivo-slider/nivo-slider.css`,
            // `${dir.dev}/assets/css/nivo/default.css`,
            `${dir.dev}/assets/css/jquery.fancybox.css`,
            `${dir.dev}/assets/css/spop.css`
        ],
        mCSS: 'styles.min.css',
        mJS: 'scripts.min.js',
        JS:[
            // `${dir.dev}/assets/js/blank.js`
            `${dir.nm}/jquery/dist/jquery.js`,
            // `${dir.dev}/assets/js/jquery.slides.js`,
            // `${dir.nm}/shufflejs/dist/shuffle.min.js`,
            // `${dir.dev}/assets/js/ed-grid.js`,
            // `${dir.nm}/nivo-slider/jquery.nivo.slider.pack.js`
            // `${dir.dev}/assets/js/jquery.slides.js`,
            // `${dir.dev}/assets/js/owl.carousel.js`,
            `${dir.dev}/assets/js/jquery.fancybox.js`,
            `${dir.dev}/assets/js/spop.js`
            // `${dir.nm}/wowjs/dist/wow.min.js`
        ]
    },
    opts ={
        pug:{
            pretty : true
        },
        sass:{
            outputStyle: 'nested'
        },
        es6:{
            presets : ['es2015']
        },
        imagemin : {
            progressive : true,
            use : [ pngquant() ]
        },
        svgmin : {
            plugins : [
                { convertColors : false },
                { removeAttrs : { attrs : ['fill'] } }
            ]
        },
        tinypng:{
            key: '0PqPOBC2SstCfn-4sczVUHL6xX4HlHXO',
            // key: 'u5tpRXXm1Fl1oWwZNx6FUqm22u8Y_8H2',
            // key: 'B56RIXdUtQkHzyL7a1JZVYv_ORoJfkG0',
            // key: 'KwgaLkV7lv5GKdcRu_AsiQ3LVbyIAW7I,
            // key:'3-CvmMkbWS83EjCYe1nl806wssAHtaEu',
            // key: 'ETWKxYIFUiknIFOsICwLX79VRnCCoa6e',
            sigFile: 'images/.tinypng-sigs',
            log: true
        },
        htmlmin : {collapseWhitespace: true},
        autoprefixer: {
            browsers: ['last 5 versions'],
            cascade: false
        }
    };

gulp.task('styles', ()=>{
    gulp.src('./dev/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(opts.sass).on('error', sass.logError))
    // .pipe(postcss(postcssPlugin))
    .pipe(autoprefixer(opts.autoprefixer))
    .pipe(sourcemaps.write())
    // .pipe(cachebust())
    // .on("warning", function(message){
    //     // Log missing assets
    //     gutil.log(gutil.colors.red(message));
    // })
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
    // .pipe(gulp.dest('./dev/assets/css/'))
    //.pipe(browserSync.stream());
    .pipe(gulpif( dev(), browserSync.stream()));
});

gulp.task('pug', ()=> {
    gulp.src('./dev/pug/*.pug')
    .pipe(plumber())
    .pipe(pug(opts.pug))
    // .pipe(htmlmin(opts.htmlmin))
    .pipe(gulp.dest('./dist'))
    .on('end', dev() ? browserSync.reload : () => console.log('prod pug task complete'));
});

gulp.task('es6',() => {
    return gulp.src('./dev/es6/*.js')
        // .pipe(sourcemaps.init())
        .pipe(babel(opts.es6))
        // .pipe(uglify())
        .pipe(concat('scripts.js'))
        // .pipe(sourcemaps.write())
        // .pipe(compress({
        //   type: 'js'
        // }))
        .pipe(gulp.dest('./dist/js/'))
        // .pipe(gulp.dest('./dev/assets/js/'))
        .on('end', dev() ? browserSync.reload : () => console.log('prod es6 task complete'));
});

gulp.task('img', () =>
gulp.src(`${dir.dev}/assets/img/**/*.+(png|jpeg|jpg|gif)`)
    .pipe(imagemin({
        progressive : true
    }))
    // .pipe(tinypng(opts.tinypng))
    .pipe(gulp.dest('dist/img'))
);

gulp.task('webp', () => {
    gulp.src(`${dir.dev}/assets/img/**/*.+(png|jpeg|jpg)`)
    .pipe( webp() )
    .pipe( gulp.dest('dist/img/webp') );
});

gulp.task('svg', () => {
    gulp
    .src( `${dir.dev}/assets/img/**/*.svg` )
    .pipe( svgmin(opts.svgmin) )
    .pipe( gulp.dest(`${dir.dist}/img/svg`) );
});

gulp.task('cCSS', ()=>{
    return gulp.src(files.css)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.min.css'))
        .pipe(postcss(postcssPlugin))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('fonts', ()=>{
    return gulp.src(files.fonts)
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('cJS', ()=>{
    return gulp.src(files.JS)
        .pipe(concat(files.mJS))
        // .pipe( uglify() )
        // .pipe(compress({
        //   type: 'js'
        // }))
        .pipe(gulp.dest('./dist/js'))
        .on('end', browserSync.reload);
});

gulp.task('cALL', ['cCSS','cJS','img']);
gulp.task('finalizar', ['cCSS','cJS','html']);
gulp.task('images',['img','webp','svg']);
gulp.task('statics',['sitemap','robots']);

gulp.task('sitemap', function () {
    gulp.src('dist/**/*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'http://corporativolunayasociados.com.mx'
        }))
        .pipe(gulp.dest('./dist'));
});
var robots = require('gulp-robots');

gulp.task('robots', function () {
    gulp.src('dist/index.html')
        .pipe(robots({
            useragent: '*',
            allow: ['/css/*.css','/css/*.css?','/css/*.css$','/js/*.js','/js/*.js?','/js/*.js$','/img/*.jpg','/img/*.png'],
            disallow: ['robots.txt'],
            sitemap: '/sitemap.xml'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sync-browser', ['nodemon'] ,() => {
    browserSync.init(null, {
        proxy:  "http://localhost:4003"
    }); 
});

gulp.task('devDeploy', ['reactification', 'sync-browser'] ,() => {
    gulp.watch('./dev/scss/**/*.scss', ['styles']);
    gulp.watch('./dev/pug/**/*.pug', ['pug']);
    gulp.watch('./dev/es6/**/*.js', ['es6']);
    gulp.watch('./dev/assets/js/*.js', ['cJS']);
});

gulp.task('nodemon', () => {
    var callbackCalled = false;
    return nodemon({script: './index.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});

gulp.task('reactification', function () {
    return require('./tasks/reactification.js')(gulp);
});

gulp.task('deploy', ['styles', 'pug', 'es6', 'cJS', 'reactification']);
gulp.task('default', [ dev() ? 'devDeploy' : 'deploy' ]);