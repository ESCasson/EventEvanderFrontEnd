import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import EventsList from '../components/EventsList';
import Card from '../components/Card';
import  Colors  from '../constants/colors';
import Request from '../helpers/request';



const NotificationScreen = props => {

    const [venues, setVenues] = useState('');

    
        
        const getVenues = Request.get("https://raw.githubusercontent.com/ESCasson/API/master/venues");
        
        getVenues.then((data) => {
          setVenues(data)
        });
    
    
    

return (
    <View>
        <Card style={styles.allEventsButton}>
        <Button color={Colors.darkAccent} title="SIGN UP" onPress={props.moveButton} />
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