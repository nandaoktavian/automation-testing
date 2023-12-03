/* eslint-disable max-len */
import { Logger } from '../../../components/logger/logger';
import { FactorialPageConstant } from '../../../page-objects/factorial-page/factorial-page-constant';
import { FactorialPageHelper } from '../../../page-objects/factorial-page/factorial-page-helper';

const testGoal = `
Memastikan validasi field inputan angka hanya dapat diinput bilangan bulat
`;
const testData = new FactorialPageConstant();

describe('TS-01-003: Memastikan validasi field inputan angka hanya dapat diinput bilangan bulat', () => {
    before('Test Goal', () => {
        Logger.testGoal(testGoal);
    });

    beforeEach('Precondition - Navigate to Site', () => {
        FactorialPageHelper.navigate();
    });

    it('TS-01-003-01: Untuk memastikan fungsi validasi, jika field diinputkan huruf maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan huruf ${testData.inputValue.alphabet} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.alphabet.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-02: Untuk memastikan fungsi validasi, jika field diinputkan bilangan desimal maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka desimal ${testData.inputValue.decimal} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.decimal.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-03: Untuk memastikan fungsi validasi, jika field diinputkan dengan karakter maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan karakter ${testData.inputValue.character} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.character.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-04: Untuk memastikan fungsi validasi, jika field tidak diinputkan apa-apa maka akan ada peringatan atau pemberitahuan wajib mengisikan angka pada field yang tersedia', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan informasi wajib menginputkan angka pada field yang tersedia');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-05: Untuk memastikan fungsi validasi, jika field diinputkan spasi maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Mengisikan spasi pada field yang memiliki place holder "Masukkan Angka"');
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.spacing.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-06: Untuk memastikan fungsi validasi, jika field diinputkan bilangan bulat dengan huruf dan karakter maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan ${testData.inputValue.numAlphabetChar} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.numAlphabetChar.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-07: Untuk memastikan fungsi validasi, jika field diinputkan bilangan bulat lalu diberi spasi sebanyak 3x maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Menambahkan spasi sebanyak 3x');
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.spacing.toString());
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.spacing.toString());
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.spacing.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });

    it('TS-01-003-08: Untuk memastikan fungsi validasi, jika field diinputkan bilangan bulat lalu diberi spasi lalu bilangan bulat lagi maka akan ada peringatan atau pemberitahuan hanya boleh menginputkan bilangan bulat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Menambahkan spasi');
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.spacing.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Menambahkan angka ${testData.inputValue.number5}`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
    });
});
