/// <reference types='cypress-xpath' />

export class VerificationHelper {
    /**
     * Verify an element is visible / not
     * https://docs.cypress.io/guides/references/assertions#Visibility
     * @param element
     * @param isVisible
     */
    static isVisible(element: string, isVisible: boolean = true) {
        if (isVisible) {
            cy.xpath(element).should('be.visible');
        } else {
            cy.xpath(element).should('not.exist');
        }
    }

    /**
     * Verify if an element has a particular value
     * https://docs.cypress.io/guides/references/assertions#Text-Content
     * @param element
     * @param value
     * @param isMatch
     */
    static matchValue(element: string, value: string, isMatch: boolean = true) {
        if (isMatch) {
            cy.xpath(element).should('have.text', value);
        } else {
            cy.xpath(element).should('not.have.text', value);
        }
    }

    /**
     * Verify if an element has a particular value
     * https://docs.cypress.io/guides/references/assertions#Text-Content
     * @param element
     * @param value
     * @param isFind
     */
    static findValueNumber(element: string, value: string, isFind: boolean = true) {
        if (isFind) {
            cy.xpath(element).contains(value);
        } else {
            cy.xpath(element).should('not.have.text', value);
        }
    }
}
