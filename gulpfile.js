var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })

  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/*.css').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['browser-sync']);
