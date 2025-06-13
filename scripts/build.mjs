import * as esbuild from 'esbuild';
import { serverBuildConfig } from './build-config.mjs';

await esbuild.build(serverBuildConfig);
