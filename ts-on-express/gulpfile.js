"use strict";

const tsConfig = require('./tsconfig');
const gulp = require('gulp');
const ts = require('gulp-typescript');




gulp.task('dev', ['compilerTs','watchTs']);

gulp.task('watchTs', function () {
  gulp.watch(tsConfig.srcDir, function () {
    compilerTs();
    console.log("1");
  });
});

gulp.task('compilerTs', compilerTs);

function compilerTs() {
  gulp.src(tsConfig.srcDir)
    .pipe(ts(tsConfig.compilerOptions))
    .pipe(gulp.dest(tsConfig.outDir));
}

gulp.task('default', ['compilerTs']);