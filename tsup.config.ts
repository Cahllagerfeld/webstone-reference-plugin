import { defineConfig } from 'tsup';

export default defineConfig([
	{
		entry: ['src/cli/**/*.ts'],
		outDir: './dist/cli',
		splitting: true,
		target: 'es6',
		format: 'cjs',
		clean: true,
		treeshake: true,
		tsconfig: './tsconfig.json',
		bundle: false,
		minify: true
	}
]);
