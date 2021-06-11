import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';

// import {buildOptions} from './esbuild.mjs'

esbuild.serve({
  port: 3000,
  servedir: 'public',
}, {
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'public/build/bundle.js',
  plugins: [sveltePlugin()],
  logLevel: 'info',
  loader: {
    ".woff": "file",
    ".woff2": "file",
  }
})

