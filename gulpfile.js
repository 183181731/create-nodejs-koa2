'use strict'
const { src, dest, series } = require('gulp');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint7');
const nodemon = require('gulp-nodemon')

function babelBuild() {
    return src('./src/**/*.js')
    .pipe(babel())
    .pipe(uglify()) 
    .pipe(dest('./dist/'))
}

function runEslint() {
    return src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.results(results => {
        console.log(`- Total Results: ${results.length}`)
        console.log(`- Total Warnings: ${results.warningCount}`)
        console.log(`- Total Errors: ${results.errorCount}`)
        console.log('Finished eslint')
    }))
    .pipe(eslint.failAfterError())
}

function runNodeMon(done) {
    let stream = nodemon({
        script: './build/dev-server.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' },
        ignore: ['.git/', 'dist/', 'node_modules/', 'gulpfile.js'],
        tasks: ['runEslint'],
        done: done
    })
    return stream
        .on('restart', () => {
            console.log('nodemon restarted project!')
        })
        .on('crash', () => {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)
        })
}
exports.runEslint = runEslint
exports.build = series(babelBuild)
exports.default = series(runEslint, runNodeMon)