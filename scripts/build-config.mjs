export const webBuildConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/index.js',
  platform: 'browser',
  format: 'iife',
  external: [],
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.jsx': 'jsx',
    '.js': 'js',
  },
  jsx: 'automatic',
  logLevel: 'info',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
};

// Legacy server config (keeping for compatibility)
export const serverBuildConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/index.cjs',
  platform: 'node',
  format: 'cjs',
  external: [],
  loader: {
    '.node': 'file',
    '.tsx': 'tsx',
    '.ts': 'ts',
  },
  jsx: 'automatic',
  logLevel: 'info',
};
