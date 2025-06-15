# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Furnace is a GitHub Actions build radiator - a frontend-only web application that creates a visual dashboard showing GitHub repository build statuses. It runs entirely in the browser with no backend required, using React to display real-time build status dashboards.

## Development Commands

### Build System
- `./run build` - Full build pipeline (clean, install, check, compile, test)
- `./run clean` - Remove dist directory
- `./run install` - Install dependencies with bun
- `./run check` - TypeScript type checking (`bun run --bun tsc --noEmit`)
- `./run compile` - Build with esbuild (`bun run --bun scripts/build.mjs`)
- `./run test` - Run Jest tests (`bun run jest`)
- `./run format` - Format code with Prettier

### Development
- `bun scripts/watch.mjs` - Watch mode with hot reload using nodemon
- `./scripts/start-dev.sh` - Start development server

## Architecture

### Build Pipeline
The project uses a custom build system built with Bun and esbuild:
- **Entry Point**: `src/index.ts` (currently empty)
- **Build Config**: `scripts/build-config.mjs` - esbuild configuration for Node.js CJS output
- **Build Script**: `scripts/build.mjs` - executes esbuild with the config
- **Watch Mode**: `scripts/watch.mjs` - development mode with esbuild context and nodemon

### Tool Management
- Uses `mise` for tool version management (Node.js, Bun, Java)
- Tools are installed locally in `tools/` directory
- `commands.sh` script sets up mise environment and delegates to Bun

### Package Management
- **Runtime**: Bun is the primary JavaScript runtime
- **Package Manager**: Bun for dependency management
- **Testing**: Jest with SWC for TypeScript compilation
- **Building**: esbuild for fast compilation
- **Formatting**: Prettier for code formatting

### TypeScript Configuration
- Uses `@tsconfig/node22` base configuration
- Type checking via `tsc --noEmit` (no explicit tsconfig.json found)
- SWC handles TypeScript compilation in Jest

## Key Files
- `run.ts` - Main build orchestration script
- `commands.sh` - Environment setup and tool management
- `scripts/build-config.mjs` - esbuild configuration
- `PROJECT_SUMMARY.md` - Detailed project requirements and scope