// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 20000,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        // setupNodeEvents(on, config) {
        //     return require('./cypress/plugins/index.js')(on, config);
        // },
        baseUrl: 'https://qa.putraprima.id/',
    },
});
