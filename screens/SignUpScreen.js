import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, TextInput, FlatList} from 'react-native';
import Card from '../components/Card';
import  Colors  from '../constants/colors';
import VenueItem from '../components/VenueItem';



const NotificationScreen = props => {

    const [venues, setVenues] = useState('');
    const [email, setEmail] = useState('');
    const[choosenVenues, setChoosenVenues] = useState([]);
    
    const url = "https://raw.githubusercontent.com/ESCasson/API/master/venues"

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setVenues(responseJson)
    
      })
      .catch((error) =>{
        console.error(error);
      });
    
        
        
    
        const emailInputHandler = (email) => {
            setEmail(email);
          };
    
    const handleVenueCheckboxOn = (venue) => {
            setChoosenVenues(currentVenue => [...choosenVenues, venue] );
          };
    
          

return (
    <View>
        <Card style={styles.allEventsButton}>
        <Button color={Colors.darkAccent} title="SIGN UP" onPress={props.moveButton} />
    </Card>
    <Card style={styles.signUpCard}>
        <Text>Please enter email address: </Text>
        <TextInput onChangeText={emailInputHandler} style={styles.input} value={email}></TextInput>

        <FlatList data={venues}
          renderItem={({item}) => 
           <VenueItem venue={item} checkOn={handleVenueCheckboxOn}></VenueItem>
            }
          keyExtractor={({id}, index) => id.toString()} />
    </Card>
    

    </View>
    
        
    );

};


const styles = StyleSheet.create({
    allEventsButton: {
        marginTop: 10,
        width: 200,
        maxWidth: '80%',
        alignSelf: "center",
        backgroundColor: Colors.primary
    },

    signUpCard: {
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
        alignSelf: 'center', 
        alignItems: "center",
        backgroundColor: Colors.primary
        
    },

    button: {
        color: Colors.primary
    },
    input: {
        width: '80%',
        textAlign: 'center',
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
});

export default NotificationScreen;