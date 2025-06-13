#!/usr/bin/env ./commands.sh
import { $, file } from 'bun';

process.env.FORCE_COLOR = '1';

export async function clean() {
  await $`rm -rf dist`;
}

export async function install() {
  await $`bun install`;
}

export async function check() {
  await $`bun run --bun tsc --noEmit`;
}

export async function compile() {
  await $`bun run --bun scripts/build.mjs`;
}

export async function test(...args: string[]) {
  await $`bun run jest ${args}`;
}

export async function format() {
  await $`bun run prettier --write 'src/**/*.{ts,tsx,js,jsx,json,md}`;
}

export async function build() {
  await clean();
  await install();
  await check();
  await compile();
  await test('--silent');
}

export async function script(script_name: string) {
  await $`bun run scripts/${script_name}`;
}

const command = process.argv[2] || 'build';
const args = process.argv.slice(3);

try {
  await eval(command)(...args);
} catch (e: any) {
  if (e instanceof ReferenceError) {
    const { exitCode } = await $`${command} ${args}`.nothrow();
    process.exit(exitCode);
  } else {
    console.error('Command failed:', command, ...args, e.message);
    process.exit(1);
  }
}
