export default class DegreeHelper {
    static toDegree(floatNumber) {
        const num = Math.floor(floatNumber);
        const odd = floatNumber - num;
        const minute = Math.floor(odd * 60);
        return num + '\xB0' + ' ' + minute +"'";
    }

    static toFloatNumber(degree, minute) {
        const odd = minute / 60;
        return degree + odd;
    }
}
