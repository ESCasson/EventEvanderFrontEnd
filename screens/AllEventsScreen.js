import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import EventsList from '../components/EventsList';
import Card from '../components/Card';
import  Colors  from '../constants/colors';



const AllEventsScreen = props => {

return (
    <View>
    <EventsList data={props.data} />
    <Card style={styles.allEventsButton}>
        <Button color={Colors.darkShades} title="All Events" onPress={props.allEventsButton} />
    </Card>

    </View>
    
        
    );

};


const styles = StyleSheet.create({
    allEventsButton: {
        width: 300,
        maxWidth: '80%',
        alignSelf: "center",
        backgroundColor: Colors.primary
    },
    button: {
        color: Colors.primary
    }
});

export default AllEventsScreen;