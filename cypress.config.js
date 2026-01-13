const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/json',
    charts: true,
    reportPageTitle: 'Relatório Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    html: false,
    json: true,
    overwrite: false
  },

  e2e: {
    baseUrl: 'https://www.saucedemo.com',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },

    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true
    
  },
})
