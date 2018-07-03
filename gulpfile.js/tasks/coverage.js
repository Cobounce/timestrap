const gulp = require('gulp');

const spawn = require('child_process').spawn;


gulp.task('coverage:test', gulp.series('build:webpack:production', () => {
  return spawn(
    'pipenv',
    ['run', 'coverage', 'run', '--source=conf,core,api', 'manage.py', 'test'],
    {stdio: 'inherit'}
  );
}));


gulp.task('coverage:report', () => {
  return spawn(
    'pipenv',
    ['run', 'coverage', 'report', '-m'],
    {stdio: 'inherit'}
  );
});


gulp.task('coverage:coveralls', () => {
  return spawn(
    'pipenv',
    ['run', 'coveralls'],
    {stdio: 'inherit'}
  );
});


gulp.task('coverage:development', gulp.series('lint', 'coverage:test', 'coverage:report'));


gulp.task('coverage:production', gulp.series('lint', 'coverage:test', 'coverage:report', 'coverage:coveralls'));
