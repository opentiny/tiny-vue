import { build, defineConfig } from 'vite4'
import fg from 'fast-glob'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

function createEntry() {
  const entries = fg.sync(
    ['demos/**/*.jsx']
  )
  return entries.reduce((pre, item) => {
    pre[
      item
        .replace('demos/app/', '')
        .replace('.jsx', '')
    ] = item
    return pre
  }, ({}))
}

const entries = createEntry()

function prependPlugin(options) {
  return {
    name: 'prepend-plugin',
    generateBundle(_, bundle) {
      for (const fileName in bundle) {
        const chunk = bundle[fileName];
        if (chunk.isEntry) {
          chunk.code = `${options.code}\n${chunk.code}`;
        }
      }
    },
  };
}

async function buildReact() {
  await build({
    ...defineConfig({
      publicDir: false,
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      plugins: []
    }),
    configFile: false,
    build: {
      outDir: './src/webcomps',
      emptyOutDir: true,
      minify: false,
      rollupOptions: {
        plugins: [
          getBabelOutputPlugin({
            presets: [['@babel/preset-env', { loose: true, modules: false }]]
          }),
          prependPlugin({
            code: `import React from 'react'`
          })
        ],
        output: {
          strict: false,
          manualChunks: {}
        },
        external: [
          /^@pe-3/,
          /^@opentiny/,
          /^react/
        ]
      },
      lib: {
        entry: entries,
        formats: ['es'],
        fileName: (format, entryName) => `${entryName}.js`
      }
    }
  })
}

buildReact()