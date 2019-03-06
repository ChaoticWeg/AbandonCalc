import React from "react";

import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../styles/IconTextRow";

export default class DateRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.iconText, this.props.style]}>
                <Icon
                    iconStyle={styles.icon}
                    name={this.props.iconName}
                    type={this.props.iconType}
                    size={20}
                    color="#ddd"
                    underlayColor="#000"
                />
                <Text style={styles.label}>{this.props.date.toLocaleDateString()}</Text>
            </View>
        );
    }
}
