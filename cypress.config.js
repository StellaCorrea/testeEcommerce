const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      // eventos do node (pode ficar vazio)
      return config
    },

    video: true,
    trashAssetsBeforeRuns: false,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
})

