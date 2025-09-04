const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js', // Suporte a subpastas
    video: true, // habilita gravação de vídeo
    trashAssetsBeforeRuns: false, // ISSO EVITA QUE OS VÍDEOS SEJAM DELETADOS
    videosFolder: 'cypress/videos', // pasta onde os vídeos serão salvos
    screenshotsFolder: 'cypress/screenshots' // se quiser capturar falhas também
  }
})