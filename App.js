import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ANCHOR_DAY, ANCHOR_MONTH, ANCHOR_YEAR } from './PurpleAirCalculator';
import PurpleAirCalculator from './PurpleAirCalculator';
import styles from './styles';

export default class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: ANCHOR_DAY,
            month: ANCHOR_MONTH,
            year: ANCHOR_YEAR,
            result: '',
        };
    }

    render() {
        const { day, month, year, result } = this.state;
        return (
            <View style={styles.container}>
                <Text>Ngày</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Ngày"
                    onChangeText={text => this.handleDay(text)}
                    value={day.toString()}
                    maxLength={10} //setting limit of input
                />
                <Text>Tháng</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Tháng"
                    onChangeText={text => this.handleMonth(text)}
                    value={month.toString()}
                    maxLength={10} //setting limit of input
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
                <Text style={styles.result}> {result} </Text>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.calculate()}
                >
                    <Text style={styles.submitButtonText}> Tính </Text>
                </TouchableOpacity>
            </View>
        );
    }

    handleDay(day) {
        this.setState({ day: day });
    }

    handleMonth(month) {
        this.setState({ month: month });
    }

    handleYear(year) {
        this.setState({ year: year });
    }

    calculate() {
        const { day, month, year } = this.state;
        const st = PurpleAirCalculator.calculate(day, month, year);
        this.setState({
            result: st,
        });
    }
}
