import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class EndDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.iconText, this.props.style]}>
                <Icon
                    name="trash-o"
                    type="font-awesome"
                    size={20}
                    color="#ddd"
                    underlayColor="#000"
                />
                <Text style={styles.label}>{this.props.date.toLocaleDateString()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 20,
        marginLeft: 10
    }
});
