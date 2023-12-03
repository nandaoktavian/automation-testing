/// <reference types='cypress-xpath' />

export class FactorialPageElement {
    static get pageTitle() {
        return '//div[contains(@class,"card")][.//*[contains(text(),"Kalkulator Faktorial")]]';
    }

    static get textboxNumber() {
        return '//input[@id="input"]';
    }

    static get countButton() {
        return '//button[@id="hitung"]';
    }

    static get footerLink() {
        return {
            get termsOfService() {
                return '//a[contains(text(),"Terms Of Service")]';
            },
            get privacyPolicy() {
                return '//a[contains(text(),"Privacy Policy")]';
            },
        };
    }

    static get factorialResult() {
        return '//div[@id="result"]';
    }
}
