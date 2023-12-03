/// <reference types='cypress-xpath' />

export class WaitHelper {
    /**
     * Wait for a number of milliseconds
     * https://docs.cypress.io/api/commands/wait
     * @param time
     */
    static wait(time: number = 1000) {
        cy.wait(time);
    }
}
