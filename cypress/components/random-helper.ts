/// <reference types='cypress-xpath' />

export class RandomHelper {
    /**
     * Create a random value between two numbers
     * @param minimum
     * @param maximum
     * @returns a random number
     */
    static getRandomNumber(minimum: number = 10000, maximum: number = 99999) {
        const random = () => Cypress._.random(minimum, maximum);
        return random();
    }

    /**
     * Create random text of specified length
     * @param length
     * @returns a random text
     */
    static getRandomText(length: number = 6) {
        let randomText = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i += 1) {
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return randomText;
    }

    /**
     * Create random email of specified length and domain
     * @param length
     * @param domain
     * @returns a random email
     */
    static getRandomEmail(length: number = 6, domain: string = '@email.com') {
        const randomEmailId = this.getRandomText(length);
        const randomEmail = `${randomEmailId}${domain}`;
        return randomEmail;
    }
}
