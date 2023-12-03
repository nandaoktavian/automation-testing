/// <reference types='cypress-xpath' />

export class Logger {
    /**
     * Logging a test goal
     * @param testGoal
     */
    static testGoal(testGoal: string) {
        cy.log(`TEST GOAL: ${testGoal}`);
    }

    /**
     * Logging a step number
     * @param stepNumber
     */
    static stepNumber(stepNumber: number) {
        cy.log(`**************** **STEP ${stepNumber}** ****************`);
    }

    /**
     * Logging an action
     * @param action
     */
    static stepAction(action: string) {
        cy.log(`**STEP ACTION - ${action}**`);
    }

    /**
     * Logging a verification
     * @param verification
     */
    static stepVerification(verification: string) {
        cy.log(`**STEP VERIFICATION - ${verification}**`);
    }

    /**
     * Logging a helper step
     * @param helper
     */
    static helper(helper: string) {
        cy.log(`*HELPER - ${helper}*`);
    }

    /**
     * Pre-condition step
     * @param preCondition
     */
    static preCondition(preCondition: string) {
        cy.log(`**Pre-condition - ${preCondition}**`);
    }

    /**
     * Post-condition step
     * @param postCondition
     */
    static postCondition(postCondition: string) {
        cy.log(`**Post-condition - ${postCondition}**`);
    }
}
