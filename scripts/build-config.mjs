export const serverBuildConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/index.cjs',
  platform: 'node',
  format: 'cjs',
  external: [],
  loader: {
    '.node': 'file',
  },
  logLevel: 'info',
};
