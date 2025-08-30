import { defineConfig } from "cypress";
import * as ccModule from '@cypress/code-coverage/task.js'
const registerCodeCoverageTaks = ccModule.default

export default defineConfig({
  video: true,
  env: {
    frontURL: "http://127.0.0.1:5173"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      registerCodeCoverageTaks(on, config)
      return config      
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
