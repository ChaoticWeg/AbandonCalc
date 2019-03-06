import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import DatePickerToggleButton from './components/DatePickerToggleButton';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateRow from './components/DateRow';

export default class App extends React.Component {
  state = {
    isDatePickerVisible: false,
    startDate: null,
    letterDate: null,
    endDate: null
  }

  constructor(props) {
    super(props);

    this.addDays = this.addDays.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);

    this.setDatePickerVisibility = this.setDatePickerVisibility.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);

    this.handleDatePicked = this.handleDatePicked.bind(this);

    this.state.startDate = new Date();
    this.state.letterDate = this.addDays(this.state.startDate, 30);
    this.state.endDate = this.addDays(this.state.letterDate, 60);
  }

  addDays(date, numDays) {
    var result = new Date(date);
    result.setDate(result.getDate() + numDays);
    return result;
  }

  changeStartDate(date) {
    let previousState = new Object(this.state);
    previousState.startDate = date;
    previousState.letterDate = this.addDays(date, 30);
    previousState.endDate = this.addDays(previousState.letterDate, 60);
    this.setState(previousState);
  }

  handleDatePicked(date) {
    this.changeStartDate(date);
    this.hideDatePicker();
  }

  setDatePickerVisibility(visible) {
    let previousState = new Object(this.state);
    previousState.isDatePickerVisible = visible;
    this.setState(previousState);
  }

  showDatePicker() { this.setDatePickerVisibility(true); }
  hideDatePicker() { this.setDatePickerVisibility(false); }

  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Abandonment Calculator
        </Text>
        
        <DateRow
          iconName="folder"
          iconType="font-awesome"
          date={this.state.startDate}
        />

        <DateRow
          iconName="envelope"
          iconType="font-awesome"
          date={this.state.letterDate}
        />

        <DateRow
          iconName="recycle"
          iconType="font-awesome"
          date={this.state.endDate}
        />
        
        <DatePickerToggleButton
          isVisible={this.state.isDatePickerVisible}
          onToggle={this.showDatePicker}
        />

        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1a1a1a',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  normalText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 20
  },
  title: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 28,
    marginBottom: 30
  }
});
