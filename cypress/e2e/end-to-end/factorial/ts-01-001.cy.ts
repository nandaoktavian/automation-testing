import { Logger } from '../../../components/logger/logger';
import { FactorialPageHelper } from '../../../page-objects/factorial-page/factorial-page-helper';

const testGoal = `
Memastikan link dapat dibuka dan menampilkan halaman kalkulator faktorial
`;

describe('TS-01-001: Memastikan link dapat dibuka dan menampilkan halaman kalkulator faktorial', () => {
    before('Test Goal', () => {
        Logger.testGoal(testGoal);
    });

    it('TS-01-001-01: Memastikan user dapat mengakses halaman kalkulator faktorial dengan link https://qa.putraprima.id/', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        FactorialPageHelper.navigate();
        Logger.stepVerification('Verify page title is displayed');
        FactorialPageHelper.verifyPageTitleIsVisible();
        Logger.stepVerification('Verify textbox number is displayed');
        FactorialPageHelper.verifyTextboxNumberIsVisible();
        Logger.stepVerification('Verify count button is displayed');
        FactorialPageHelper.verifyCountButtonIsVisible();
    });

    it('TS-01-001-02: Memastikan tidak ada error dan tidak menampilkan halaman kalkulator faktorial jika link ditambahkan parameter dengan karakter \'', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        FactorialPageHelper.navigateFalse();
        Logger.stepVerification('Verify page title is displayed');
        FactorialPageHelper.verifyPageTitleIsVisible(false);
        Logger.stepVerification('Verify textbox number is displayed');
        FactorialPageHelper.verifyTextboxNumberIsVisible(false);
        Logger.stepVerification('Verify count button is displayed');
        FactorialPageHelper.verifyCountButtonIsVisible(false);
    });
});
