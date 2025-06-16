import * as esbuild from 'esbuild';
import { webBuildConfig } from './build-config.mjs';

await esbuild.build(webBuildConfig);
