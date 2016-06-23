const gulp = require('gulp');
const path = require('path');
const webpack = require('gulp-webpack');
const shell = require('gulp-shell');
const _ = require('lodash');

gulp.task('build', () => gulp.src('./src/app.ts')
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('www'))
);

gulp.task('watch', () => gulp.src('./src/app.ts')
  .pipe(webpack(_.assign(require('./webpack.config'), { watch: true })))
  .pipe(gulp.dest('www'))
);

gulp.task('run:ui', shell.task([
  `${path.join(__dirname, 'node_modules/electron-prebuilt/dist/electron.exe')} ${path.join(__dirname, 'www/main.js')}`,
]));
