var gulp = require('gulp'),
    less = require('less'),
    npmImport = require('less-plugin-npm-import'),
    fs = require('fs');

gulp.task('default', function() {

    var file = fs.readFileSync('css/styles.less', 'utf8'),
        options = { plugins: [ npmImport ] },
        log = console.log.bind(console);

    // Works with Less 2.0.0 but in 2.1.0 it returns "[TypeError: undefined is not a function]"
    less.render(file, options)
        .then(log)
        .catch(log);


    // Works with Less 2.1.0
    less.render(file, options, function(error, output) {
        log(error || output);
    });

});
