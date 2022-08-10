/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

const clientDirName = path.resolve('./client');
const buildDirName = path.resolve('./build/public');

const copyPublic = () => {
    const publicDirName = path.join(clientDirName, 'public');
    const files = fs.readdirSync(publicDirName);

    files.forEach(fileName => {
        fs.copyFileSync(
            path.join(publicDirName, fileName),
            path.join(buildDirName, fileName),
        );
        console.log('copied', fileName);
    });
};

const watch = process.argv[2];

esbuild.build({
    entryPoints: [path.join(clientDirName, 'index.tsx')],
    outfile: path.join(buildDirName, 'index.js'),
    loader: {'.png': 'file', '.svg': 'file'},
    bundle: true,
    sourcemap: true,
    watch: watch ? {
        onRebuild(error) {
            if (error) {
                console.error('rebuild failed:', error);
            } else {
                copyPublic();
                console.log('rebuild complited');
            }
        },
    } : false,
    plugins: [cssModulesPlugin({v2: true})],
}).then(() => {
    copyPublic();
    console.log('build completed');
});
