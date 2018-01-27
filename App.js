import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ANCHOR_DAY, ANCHOR_MONTH, ANCHOR_YEAR } from './PurpleAirCalculator';
import PurpleAirCalculator from './PurpleAirCalculator';
import styles from './styles';

const ANCHOR_RESULT = PurpleAirCalculator.calculate(
    ANCHOR_DAY,
    ANCHOR_MONTH,
    ANCHOR_YEAR,
);

export default class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: ANCHOR_DAY,
            month: ANCHOR_MONTH,
            year: ANCHOR_YEAR,
            result: ANCHOR_RESULT,
        };
    }

    render() {
        const { day, month, year, result } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Text>Ngày</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Ngày"
                        onChangeText={text => this.handleDay(text)}
                        value={day.toString()}
                        maxLength={10}
                    />
                    <Text>Tháng</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Tháng"
                        onChangeText={text => this.handleMonth(text)}
                        value={month.toString()}
                        maxLength={10}
                    />
                    <Text>Năm</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Năm"
                        keyboardType="numeric"
                        onChangeText={text => this.handleYear(text)}
                        value={year.toString()}
                        maxLength={10}
                    />
                </View>
                <Text style={styles.result}> Vị trí tử khí: {result} </Text>
            </View>
        );
    }

    handleDay(day) {
        const { year, month } = this.state;
        const result = PurpleAirCalculator.calculate(day, month, year);
        this.setState({ day: day, result: result });
    }

    handleMonth(month) {
        const { day, year } = this.state;
        const result = PurpleAirCalculator.calculate(day, month, year);
        this.setState({ month: month, result: result });
    }

    handleYear(year) {
        const { day, month } = this.state;
        const result = PurpleAirCalculator.calculate(day, month, year);
        this.setState({ year: year, result: result });
    }
}
