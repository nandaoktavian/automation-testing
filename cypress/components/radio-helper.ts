/// <reference types='cypress-xpath' />

export class RadioHelper {
    /**
     * To select a radio button
     * @param element
     */
    static check(element: string) {
        cy.xpath(element).check();
    }

    /**
     * To verify if a radio button is selected
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
