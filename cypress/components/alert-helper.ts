/// <reference types='cypress-xpath' />

export class AlertHelper {
    /**
     * Function: Verify an alert contains a message, with optional wait delay value
     * https://docs.cypress.io/api/events/catalog-of-events#App-Events
     * https://docs.cypress.io/api/commands/then#Raw-HTMLElements-are-wrapped-with-jQuery
     * @param element
     * @param text
     */
    static clickElementAndVerifyAlertMessageContains(element: string, text: string) {
        cy.xpath(element).click().then(() => {
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).to.contains(text);
            });
        });
    }
}
