import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import EventsList from '../components/EventsList';
import Card from '../components/Card';
import  Colors  from '../constants/colors';



const NotificationScreen = props => {

return (
    <View>
        <Card style={styles.allEventsButton}>
        <Button color={Colors.darkAccent} title="VIEW ALL EVENTS" onPress={props.moveButton} />
    </Card>
    <EventsList data={props.data} title='My Evade List' />
    

    </View>
    
        
    );

};


const styles = StyleSheet.create({
    allEventsButton: {
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
        alignSelf: "center",
        backgroundColor: Colors.primary
    },
    button: {
        color: Colors.primary
    }
});

export default NotificationScreen;