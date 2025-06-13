import * as esbuild from 'esbuild';
import nodemon from 'nodemon';
import { serverBuildConfig } from './build-config.mjs';

async function watch(config) {
  const { promise, resolve } = Promise.withResolvers();
  const context = await esbuild.context({
    ...config,
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

await watch(serverBuildConfig);

nodemon({
  watch: ['dist/index.cjs'],
  exec: 'dotenvx run -f .env -- node --enable-source-maps dist/index.cjs',
  delay: 1000,
  env: {
    NODE_ENV: 'development',
    ENVIRONMENT: 'development',
  },
});
