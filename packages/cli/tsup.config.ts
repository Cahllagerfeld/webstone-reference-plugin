import { defineConfig } from 'tsup';

export default defineConfig([
	{
		entry: ['src/**/*.ts'],
		outDir: '../../dist/cli',
		splitting: true,
		target: 'es6',
		format: 'cjs',
		clean: true,
		treeshake: true,
		tsconfig: './tsconfig.json',
		bundle: false
	}
]);
