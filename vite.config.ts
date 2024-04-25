import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 8000,
		strictPort: false,
		host: true,
	},
	preview: {
		port: 8000,
		strictPort: false,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});