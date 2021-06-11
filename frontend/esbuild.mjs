import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';

export const buildOptions = {
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'public/build/bundle.js',
  plugins: [sveltePlugin()],
  logLevel: 'info',
  loader: {
    ".woff": "file",
    ".woff2": "file",
  }
}

esbuild.build(buildOptions).catch(() => process.exit(1))