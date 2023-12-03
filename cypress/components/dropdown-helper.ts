/// <reference types='cypress-xpath' />

export class DropdownHelper {
    /**
     * Select an <option> within a <select> using value/text/index
     * Example:
     *
     * @param element
     * @param value
     * @param isForce
     */
    static selectDropdownOption(element: string, option: string | number, isForce: boolean = false) {
        if (isForce) {
            cy.xpath(element).select(option, { force: true });
        } else {
            cy.xpath(element).select(option);
        }
    }

    /**
     * Verify if an option is selected
     * @param element
     * @param value
     * @param isSelected
     */
    static verifySelectedDropdownOption(element: string, value: string, isSelected: boolean = true) {
        if (isSelected) {
            cy.xpath(`${element}//option[@selected]`).should('have.text', value);
        } else {
            cy.xpath(`${element}//option[@selected]`).should('not.have.text', value);
        }
    }
}
