/* eslint-disable max-len */
import { Logger } from '../../../components/logger/logger';
import { FactorialFunctionHelper } from '../../../page-objects/factorial-page/factorial-function-helper';
import { FactorialPageConstant } from '../../../page-objects/factorial-page/factorial-page-constant';
import { FactorialPageHelper } from '../../../page-objects/factorial-page/factorial-page-helper';

const testGoal = `
Memastikan fungsi kalkulator faktorial berjalan dengan normal
`;
const testData = new FactorialPageConstant();

describe('TS-01-002: Memastikan fungsi kalkulator faktorial berjalan dengan normal', () => {
    before('Test Goal', () => {
        Logger.testGoal(testGoal);
    });

    beforeEach('Precondition - Navigate to Site', () => {
        FactorialPageHelper.navigate();
    });

    it('TS-01-002-01: Untuk memastikan fungsi perhitungan faktorial menggunakan bilangan bulat mengeluarkan hasil yang tepat', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number5} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number5)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number5);
    });

    it('TS-01-002-02: Untuk memastikan fungsi perhitungan faktorial jika diinpukatkan 0 maka harus bernilai 1', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number0} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number0.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number0} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number0)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number0);
    });

    it('TS-01-002-03: Untuk memastikan fungsi perhitungan faktorial jika diinpukatkan bilangan negatif maka hasilnya adalah tidak terdefinisi', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.negativeNumber} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.negativeNumber.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.negativeNumber} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.negativeNumber)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.negativeNumber);
    });

    it('TS-01-002-04: Untuk memastikan fungsi perhitungan faktorial menggunakan bilangan bulat mengeluarkan hasil yang tepat secara berulang kali', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number5} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number5)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number5);
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Hapus inputan"');
        FactorialPageHelper.clearTextboxNumber();
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number7} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number7.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number7} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number7)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number7);
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Hapus inputan"');
        FactorialPageHelper.clearTextboxNumber();
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number3} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number3.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number3} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number3)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number3);
    });

    it('TS-01-002-05: Untuk memastikan fungsi perhitungan kembali normal setelah mendapatkan hasil yang tidak sesuai akibat faktorial bilangan negatif', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.negativeNumber} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.negativeNumber.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil yang salah faktorial dari ${testData.inputValue.negativeNumber}, seharusnya hasilnya adalah ${FactorialFunctionHelper.factorialCount(testData.inputValue.negativeNumber)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.negativeNumber, false);
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Hapus inputan"');
        FactorialPageHelper.clearTextboxNumber();
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number5} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number5)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number5);
    });

    it('TS-01-002-06: Untuk memastikan fungsi perhitungan kembali normal setelah ada validasi akibat menginputkan karakter #', () => {
        let stepNo = 0;
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan karakter ${testData.inputValue.character} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.character.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification('Menampilkan peringatan/pemberitahuan informasi hanya boleh menginputkan bilangan bulat');
        FactorialPageHelper.verifyAlertMessageForNonIntegerNumber();
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Hapus inputan"');
        FactorialPageHelper.clearTextboxNumber();
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction(`Mengisikan angka ${testData.inputValue.number5} pada field yang memiliki place holder "Masukkan Angka"`);
        FactorialPageHelper.enterTextboxNumber(testData.inputValue.number5.toString());
        Logger.stepNumber(stepNo += 1);
        Logger.stepAction('Klik tombol "Hitung Faktorial"');
        FactorialPageHelper.clickCountButton();
        Logger.stepVerification(`Menampilkan hasil faktorial dari ${testData.inputValue.number5} = ${FactorialFunctionHelper.factorialCount(testData.inputValue.number5)}`);
        FactorialPageHelper.verifyResultOfFactorial(testData.inputValue.number5);
    });
});
