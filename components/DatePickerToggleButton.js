import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class DatePickerToggleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                title="Set Closed Date"
                onPress={this.props.onToggle}
                icon={
                    <Icon
                        name="calendar"
                        type="font-awesome"
                        size={15}
                        color="#fff"
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#e37222"
    },
    buttonTitle: {
        marginLeft: 10
    }
});
