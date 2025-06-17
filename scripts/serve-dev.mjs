import * as esbuild from 'esbuild';
import { spawn } from 'child_process';
import { webBuildConfig } from './build-config.mjs';

console.log('🔥 Furnace Development Server Starting...');

// Development build configuration
const devConfig = {
  ...webBuildConfig,
  outfile: 'public/gen/index.js', // Output to public directory
  minify: false,
  define: {
    'process.env.NODE_ENV': '"development"',
  },
};

// Start esbuild in watch mode
async function startWatcher() {
  const context = await esbuild.context({
    ...devConfig,
    plugins: [
      {
        name: 'dev-server',
        setup(build) {
          build.onStart(() => {
            console.log('🔨 Building...');
          });
          build.onEnd((result) => {
            if (result.errors.length === 0) {
              console.log('✅ Build completed successfully');
            } else {
              console.log('❌ Build failed with errors');
            }
          });
        },
      },
    ],
  });

  await context.watch();
  return context;
}

// Start static file server
function startServer() {
  const server = spawn('bun', ['x', 'serve', 'public', '-l', '3000', '--single'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      FORCE_COLOR: '1',
    },
  });

  server.on('error', (error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });

  return server;
}

// Start both watcher and server
try {
  const context = await startWatcher();
  const server = startServer();

  console.log('🚀 Development server running:');
  console.log('   Local:    http://localhost:3000');
  console.log('   Files:    watching src/ for changes');
  console.log('');
  console.log('Press Ctrl+C to stop the development server');

  // Cleanup on exit
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down development server...');
    server.kill();
    await context.dispose();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    server.kill();
    await context.dispose();
    process.exit(0);
  });
} catch (error) {
  console.error('Failed to start development server:', error);
  process.exit(1);
}