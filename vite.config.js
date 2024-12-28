import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: "transform",
    jsxDev: false,
    jsxImportSource: "@",
    jsxInject: `import { jsx } from 'react/jsx-runtime'`,
    jsxFactory: "jsx.component",
  },
  define: {
    'process.env.NODE_ENV': new String('Production')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.jsx'),
      name: 'VRify',
      // the proper extensions will be added
      fileName: 'vrify'
    },
    target: 'esnext',
    rollupOptions: {
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        },
      },
    },
  },
})
