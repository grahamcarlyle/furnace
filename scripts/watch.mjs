import * as esbuild from 'esbuild';
import nodemon from 'nodemon';
import { webBuildConfig } from './build-config.mjs';

async function watch(config) {
  const { promise, resolve } = Promise.withResolvers();
  const context = await esbuild.context({
    ...config,
    minify: false, // Disable minification in development
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    plugins: [
      {
        name: 'build-complete',
        setup: (build) => build.onEnd(resolve),
      },
    ],
  });

  context.watch();
  await promise;
}

await watch(webBuildConfig);

// For a web app, we need a static file server instead of nodemon
console.log('React app built successfully!');
console.log('Open public/index.html in your browser to view the app');
console.log('Or serve the public directory with a static file server');
