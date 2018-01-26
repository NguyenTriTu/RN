import DegreeHelper from './DegreeHelper';

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

const VO = 0.0352 / TIME_A_DAY;

export const ANCHOR_DAY = 1;
export const ANCHOR_MONTH = 6;
export const ANCHOR_YEAR = 2009;

const ANCHOR_DATE = new Date(2009, 6, 1);

const ANCHOR_XO = DegreeHelper.toFloatNumber(10 + 10 * 30, 35);

export default class PurpleAirCalculator {
    static getSign(position) {
        return signs[position];
    }

    static calculate(day, month, year) {
        const dt = new Date(year, month, day);
        const different = dt.getTime() - ANCHOR_DATE.getTime();
        let position = ANCHOR_XO + different * VO;
        while (Math.abs(position) >= 360) {
            position = position >= 0 ? position - 360 : position + 360;
        }
        if (position < 0) {
            position = position + 360;
        }
        const signDegree = position % 30;
        const signPosition = Math.floor(position / 30);

        return (
            DegreeHelper.toDegree(signDegree) +
            ' ' +
            PurpleAirCalculator.getSign(signPosition)
        );
    }
}
