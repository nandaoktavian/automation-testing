/// <reference types='cypress-xpath' />

export class CheckboxHelper {
    /**
     * To check / uncheck a checkbox
     * @param element
     * @param toCheck
     */
    static check(element: string, toCheck: boolean = true) {
        if (toCheck) {
            cy.xpath(element).check();
        } else {
            cy.xpath(element).uncheck();
        }
    }

    /**
     * To verify if a checkbox is checked
     * @param element
     * @param isChecked
     */
    static verifyChecked(element: string, isChecked: boolean = true) {
        if (isChecked) {
            cy.xpath(element).should('be.checked');
        } else {
            cy.xpath(element).should('not.be.checked');
        }
    }
}
