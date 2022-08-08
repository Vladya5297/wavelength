/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const esbuild = require('esbuild');

const serverDirName = path.resolve('./server');
const buildDirName = path.resolve('./build');

const watch = process.argv[2];

esbuild.build({
    entryPoints: [path.join(serverDirName, 'index.ts')],
    outfile: path.join(buildDirName, 'index.js'),
    bundle: true,
    platform: 'node',
    watch: watch ? {
        onRebuild(error) {
            if (error) {
                console.error('rebuild failed:', error);
            } else {
                console.log('rebuild complited');
            }
        },
    } : false,
}).then(() => {
    console.log('build completed');
});
