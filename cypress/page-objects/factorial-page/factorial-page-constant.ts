export class FactorialPageConstant {
    readonly url = 'https://qa.putraprima.id/';

    readonly urlFalse = 'https://qa.putraprima.id/\'';

    inputValue = Object.freeze({
        number0: 0,
        number3: 3,
        number5: 5,
        number7: 7,
        negativeNumber: -3,
        alphabet: 'AB',
        numAlphabetChar: '5Ab#',
        spacing: ' ',
        character: '#',
        decimal: 0.2,
    });

    resultValue = Object.freeze({
        resultNegativeNumber: 'Tidak Terdefinisi',
        resultNonInteger: 'Please enter an integer',
    });
}
