var gulp = require('gulp');
//定义路径方便更改
var babel = require("gulp-babel");
var folder = {
	src:"src/",
	dist:"dist/"
}
// var browserify = require("browserify");
//压缩插件
var htmlMin = require("gulp-htmlclean");

var imgMin = require("gulp-imagemin");

var jsMin = require("gulp-uglify");

var cssMin = require("gulp-clean-css");
//去掉断点调试
var jsDebug = require("gulp-strip-debug");
//less
var less = require("gulp-less");
//postcss autoprefixer 自动加css3前缀

var postCss = require("gulp-postcss");

var autoCss = require("autoprefixer");
//开启服务器
var connect = require("gulp-connect");
//环境变量
var devMod = process.env.NODE_ENV == "development";
//设置环境变量的命令  export NODE_ENV=development


gulp.task("html",function(){
		
	let page = gulp.src(folder.src + "index.html")
				   .pipe(connect.reload())
		if(!devMod){
			page.pipe(htmlMin())
		}
		page.pipe(gulp.dest(folder.dist + ""))
})

gulp.task("image",function(){
	gulp.src(folder.src + "image/*")
		.pipe(imgMin())
		.pipe(gulp.dest(folder.dist + "image/"))
})

gulp.task("css",function(){
let page =	gulp.src(folder.src + "css/*")
				.pipe(connect.reload())
				.pipe(less())
				.pipe(postCss([autoCss()]))
				if(!devMod){
					page.pipe(cssMin())
				}
		
				page.pipe(gulp.dest(folder.dist + "css/"))
})

gulp.task("js",function(){
	let page = gulp.src(folder.src + "js/*")
					.pipe(connect.reload())
					.pipe(babel({
						presets: ['es2015']
					}))
		if (!devMod) {
			page.pipe(jsDebug())
			page.pipe(jsMin())
		}
		
		page.pipe(gulp.dest(folder.dist + "js/"))
})

// gulp.task("browserify", function () {
//  var b = browserify({
//   entries: folder.src + "js/*",
//   debug: true
//  });

//  return b.bundle()
//   .pipe(source("index.js"))
//   .pipe(gulp.dest(folder.dist + "js/"));
// });


gulp.task("server",function(){
	connect.server({
		port:"8989",
		livereload:true
	})
})

gulp.task("watch",function(){
	gulp.watch(folder.src + "index.html",["html"])
	gulp.watch(folder.src + "css/*",["css"])
	gulp.watch(folder.src + "js/*",["js"])
})

gulp.task("default",["html","css","js","image","server","watch"])


//gulp.task
//gulp.src
//gulp.dest
//gulp.watch


//gulp webpack