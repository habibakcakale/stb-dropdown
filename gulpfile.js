var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var concat = require('gulp-concat');

// define tasks here
gulp.task('default', function(){
  gulp.src("stb.dropdown.js").pipe(uglify())   
      .pipe(concat("stb.dropdown.min.js"))  
      .pipe(gulp.dest('.', { overwrite:true}));


  // run tasks here
  // set up watch handlers here
});