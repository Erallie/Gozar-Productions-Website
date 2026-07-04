import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
	plugins: [
		sveltekit(),
		sitemap({
			hostname: 'https://gozarproductions.com'
		})
	]
});