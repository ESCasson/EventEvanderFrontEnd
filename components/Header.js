import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Event Evader</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 0,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: Colors.darkShades,
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    }
});


export default Header;