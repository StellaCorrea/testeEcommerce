const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js', // Permite subpastas em e2e/
    video: true, // Ativa gravação de vídeo
    trashAssetsBeforeRuns: false, // NÃO apaga os vídeos antigos
    videosFolder: 'cypress/videos', // Pasta padrão para vídeos
    screenshotsFolder: 'cypress/screenshots' // Pasta para screenshots (em falhas ou chamadas explícitas)
  }
});
