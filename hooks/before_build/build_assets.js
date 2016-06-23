#!/usr/bin/env node

require('shelljs/global');

exec('gulp build', code => {
    console.log('Finished, exit code: ', code);
});
