const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    video: true, // habilita gravação de vídeo
    videosFolder: 'cypress/videos', // pasta onde os vídeos serão salvos
    screenshotsFolder: 'cypress/screenshots' // se quiser capturar falhas também
  }
})