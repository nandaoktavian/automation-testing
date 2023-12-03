/// <reference types='cypress-xpath' />

export class TextboxHelper {
    /**
     * Clear the value of an input or textarea
     * https://docs.cypress.io/api/commands/clear
     * @param element
     */
    static clear(element: string) {
        cy.xpath(element).clear();
    }

    /**
     * Type into a DOM element
     * https://docs.cypress.io/api/commands/type#Syntax
     * @param element
     * @param input
     * @param clearTextbox
     */
    static type(element: string, input: string, clearTextbox: boolean = true) {
        if (clearTextbox) {
            this.clear(element);
        }
        cy.xpath(element).type(input);
    }

    /**
     * Verify a textbox have an exact value(default) / contain value
     * @param element
     * @param value
     * @param exactMatch
     */
    static verifyTextboxValue(element: string, value: string, exactMatch: boolean = true) {
        if (exactMatch) {
            cy.xpath(element).should('have.value', value);
        } else {
            cy.xpath(element).should('contain.value', value);
        }
    }
}
