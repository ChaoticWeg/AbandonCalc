import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import { StartDate, EndDate, DatePickerToggleButton } from './components';

export default class App extends React.Component {
  state = {
    isDatePickerVisible: false,
    startDate: null,
    endDate: null,
    localeCode: 'en-US'
  }

  constructor(props) {
    super(props);

    this.addDays = this.addDays.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);

    this.setDatePickerVisibility = this.setDatePickerVisibility.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.isDatePickerVisible = this.isDatePickerVisible.bind(this);

    this.handleDatePicked = this.handleDatePicked.bind(this);

    this.state.startDate = new Date();
    this.state.endDate = this.addDays(this.state.startDate);
  }

  addDays(date, numDays = 120) {
    var result = new Date(date);
    result.setDate(result.getDate() + numDays);
    return result;
  }

  changeStartDate(date) {
    let previousState = new Object(this.state);
    previousState.startDate = date;
    previousState.endDate = this.addDays(date);
    this.setState(previousState);
  }

  handleDatePicked(date) {
    this.changeStartDate(date);
    this.hideDatePicker();
  }

  setDatePickerVisibility(visible) {
    console.log('setting date picker visibility to', visible);
    let previousState = new Object(this.state);
    previousState.isDatePickerVisible = visible;
    this.setState(previousState);
  }

  isDatePickerVisible() {
    return this.state.isDatePickerVisible;
  }

  showDatePicker() { this.setDatePickerVisibility(true); }
  hideDatePicker() { this.setDatePickerVisibility(false); }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.container}>

        <Text style={styles.title}>AbandonCalc</Text>
        
        <StartDate
          style={styles.dateRow}
          date={this.state.startDate}
        />

        <EndDate
          style={styles.dateRow}
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
    backgroundColor: '#252526',
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
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30
  },
  dateRow: {
    paddingBottom: 10
  }
});
