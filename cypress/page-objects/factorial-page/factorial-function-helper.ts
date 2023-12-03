export class FactorialFunctionHelper {
    static factorialCount(num) {
        if (num === 0) {
            return 1;
        }
        if (num < 0) {
            return 'Tidak Terdefinisi';
        }
        return num * this.factorialCount(num - 1);
    }
}
