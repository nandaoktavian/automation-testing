/// <reference types='cypress-xpath' />

export class PageHelper {
    /**
     * Visit a remote URL
     * https://docs.cypress.io/api/commands/visit
     * @param url
     */
    static navigate(url: string) {
        cy.visit(url, { failOnStatusCode: false });
    }

    /**
     * Reload the page.
     * https://docs.cypress.io/api/commands/reload#Syntax
     */
    static refreshPage() {
        cy.reload();
    }

    /**
     * Clear all browser cookies for current domain and subdomain.
     * https://docs.cypress.io/api/commands/clearcookies
     */
    static clearCookies() {
        cy.clearCookies();
    }
}
