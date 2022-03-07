import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		//Path alias
		vite: {
			resolve: {
				alias: {
					"svelte-rerendered" : path.resolve("./src/lib")
				}
			}
		},
		package: {
			emitTypes: true,
			exports: path => path === "index.ts"
		}
	},
};

export default config;
