import DegreeHelper from "./DegreeHelper";

const signs = [
    'Bạch Dương',
    'Kim Ngưu',
    'Song Tử',
    'Cự Giải',
    'Sư Tử',
    'Xử Nữ',
    'Thiên Bình',
    'Bọ Cạp',
    'Nhân Mã',
    'Ma Kết',
    'Bảo Bình',
    'Song Ngư',
];

const TIME_A_DAY = 1000 * 60 * 60 * 24;

const VO = 0.0352 / TIME_A_DAY ;

export const ANCHOR_DAY = 1;
export const ANCHOR_MONTH = 6;
export const ANCHOR_YEAR = 2009;

const ANCHOR_DATE = new Date(2009, 6, 1);

const ANCHOR_XO = DegreeHelper.toFloatNumber(10  + 10 * 30, 35);

export default class PurpleAirCalculator {
    static getSign(position) {
        return signs[position];
    }

    static calculate(day, month, year) {
        const dt = new Date(year, month, day);
        const different = dt.getTime() - ANCHOR_DATE.getTime();
        const position = ANCHOR_XO + different * VO;
        console.log("result: ",position);
        return DegreeHelper.toDegree(position);
    }
}

//
// login = (ngay, thang, nam) => {
//     let v0 = 0.0352;
//     let s = 360;
//     let x0 = 311;
//     let t1 = new Date(nam, thang, ngay);
//     let t0 = new Date(2009, 6, 1);
//     let one_day = 1000 * 60 * 60 * 24;
//     let date1_ms = t1.getTime();
//     let date2_ms = t0.getTime();
//     let difference_ms = date1_ms - date2_ms;
//     let re = Math.round(difference_ms / one_day);
//     let x1 = x0 + v0 * re;
//     while (x1 > s) {
//         x1 = x1 - s;
//     }
//     let diemchuan = x1 / 30;
//     let toado = x1 % 30;
//     let toadonguyen = parseInt(toado);
//     let phut = (toado - toadonguyen) * 60;
//     phut = parseInt(phut);
//     let cung = '';
//     if (diemchuan < 0) {
//         cung = 'Song Ngu';
//         sodu = 30 + sodu;
//     } else if (diemchuan < 1) {
//         cung = 'Bach duong';
//     } else if (diemchuan < 2) {
//         cung = 'Kim nguu';
//     } else if (diemchuan < 3) {
//         cung = 'Song tu';
//     } else if (diemchuan < 4) {
//         cung = 'Cu Giai';
//     } else if (diemchuan < 5) {
//         cung = 'Su Tu';
//     } else if (diemchuan < 6) {
//         cung = 'Xu Nu';
//     } else if (diemchuan < 7) {
//         cung = 'Thien Binh';
//     } else if (diemchuan < 8) {
//         cung = 'Bo Cap';
//     } else if (diemchuan < 9) {
//         cung = 'Nhan Ma';
//     } else if (diemchuan < 10) {
//         cung = 'Ma Ket';
//     } else if (diemchuan < 11) {
//         cung = 'Bao Binh';
//     }
//     this.setState({
//         giatri:
//         '\nvi tri tu khi : ' +
//         toadonguyen +
//         ' do ' +
//         phut +
//         ' phut' +
//         '\ncung so: ' +
//         cung,
//     });
// };