import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';

// import {buildOptions} from './esbuild.mjs'

const port = 3000

esbuild.serve({
  port: port,
  servedir: 'public',
}, {
  sourcemap: true,
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'public/build/bundle.js',
  plugins: [sveltePlugin()],
  logLevel: 'info',
  loader: {
    ".woff": "file",
    ".woff2": "file",
  }
}).then(() => {
  console.log("Server listening on %d", port)
})

