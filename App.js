import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import { ANCHOR_DAY, ANCHOR_MONTH, ANCHOR_YEAR } from './PurpleAirCalculator';
import PurpleAirCalculator from './PurpleAirCalculator';

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
                <Text style={styles.textresult}> {result} </Text>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.calculate()}
                >
                    <Text style={styles.submitButtonText}> Done </Text>
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
        const { day, month, year, result } = this.state;
        const st = PurpleAirCalculator.calculate(day, month, year);
        console.log("result: ", st);
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
    },
    textresult: {
        margin: 10,
        padding: 10,
        color: 'red',
        fontSize: 15,
    },
});
