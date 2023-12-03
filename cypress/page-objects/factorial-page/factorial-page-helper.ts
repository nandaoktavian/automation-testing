import { ElementHelper } from '../../components/element-helper';
import { Logger } from '../../components/logger/logger';
import { PageHelper } from '../../components/page-helper';
import { TextboxHelper } from '../../components/textbox-helper';
import { VerificationHelper } from '../../components/verification-helper';
import { FactorialPageConstant } from './factorial-page-constant';
import { FactorialPageElement } from './factorial-page-element';
import { FactorialFunctionHelper } from './factorial-function-helper';

const constant = new FactorialPageConstant();
const elem = FactorialPageElement;

export class FactorialPageHelper {
    static navigate() {
        Logger.helper('Navigate to url');
        PageHelper.navigate(constant.url);
    }

    static navigateFalse() {
        Logger.helper('Navigate to url with additional character');
        PageHelper.navigate(constant.urlFalse);
    }

    static verifyPageTitleIsVisible(isTrue: boolean = true) {
        Logger.helper('Verify page title is visible');
        VerificationHelper.isVisible(elem.pageTitle, isTrue);
    }

    static verifyTextboxNumberIsVisible(isTrue: boolean = true) {
        Logger.helper('Verify textbox number is visible');
        VerificationHelper.isVisible(elem.textboxNumber, isTrue);
    }

    static verifyCountButtonIsVisible(isTrue: boolean = true) {
        Logger.helper('Verify count button is visible');
        VerificationHelper.isVisible(elem.countButton, isTrue);
    }

    static enterTextboxNumber(input: string, clearTextbox: boolean = false) {
        Logger.helper(`Enter textbox number as ${input}`);
        TextboxHelper.type(elem.textboxNumber, input, clearTextbox);
    }

    static clearTextboxNumber() {
        Logger.helper('Clear textbox number');
        TextboxHelper.clear(elem.textboxNumber);
    }

    static clickCountButton() {
        Logger.helper('Click count button');
        ElementHelper.click(elem.countButton);
    }

    static verifyResultOfFactorial(inputNumber: Number, isTrue: boolean = true) {
        const countResult = FactorialFunctionHelper.factorialCount(inputNumber);
        Logger.helper('Verify result of factorial');
        VerificationHelper.findValueNumber(elem.factorialResult, countResult, isTrue);
    }

    static verifyAlertMessageForNonIntegerNumber() {
        Logger.helper('Verify alert message when inputting non-integer numbers');
        VerificationHelper.matchValue(elem.factorialResult, constant.resultValue.resultNonInteger);
    }
}
