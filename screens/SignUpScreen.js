import React, { useState, Component } from 'react';
import {View, StyleSheet, Button, Text, TextInput, FlatList} from 'react-native';
import Card from '../components/Card';
import  Colors  from '../constants/colors';
import VenueItem from '../components/VenueItem';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            venues: '',
            email: '',
            choosenVenues: '' }
      }

   componentDidMount(){
       console.log('mount');
    const url = "http://localhost:8080/api/venues"

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({venues: responseJson})
    
      })
      .catch((error) =>{
        console.error(error);
      });
   };
  
     

    reMapChoosenVenueArray = () => {
        const newArray = [];

        const newVenues = this.state.choosenVenues.map((venue) =>{
            const newVenue = {
                name: venue.name, 
                capacity: venue.capacity, 
                placeId: venue.placeId,
                id: venue.id
            }
            newArray.push(newVenue);
        } )
        return newArray;
    }
    
   handleSignUp = () => {

    const newUser = { emailAddress:  '',
                        venues: ''   };
                        console.log(newUser);
   
    const urltest = "http://localhost:8080/api/users";

    

        fetch((urltest), {
            method: "POST",
            headers: {
                Accept: 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        }).then(this.setState({
            email: ''}))
        
   }

    
    emailInputHandler = () => {
            this.setState[{email: ''}]
          }
    
    handleVenueCheckboxOn = (venue) => {
        const currentChoosenVenues = this.state.choosenVenues;
            this.setState({choosenVenues: (currentVenue => [...currentChoosenVenues, venue] )});
          };

    handleVenueCheckboxOff = (venue) => {
        const currentChoosenVenues = this.state.choosenVenues;

        const newChoosenVenues = "venues go here"

        this.setState({choosenVenues: newChoosenVenues});
           
    };

    handleClear = () => {
      
    };

    
          
render(){
    return (
        <View>
            
        <Card style={styles.signUpCard}>
            <Text>Please enter email address: </Text>
            <TextInput onChangeText={() => {}} style={styles.input}  ></TextInput>
            <Button title='Clear Email' onPress={this.handleClear()}/>
           
            <FlatList data={this.state.venues} 
            renderItem={({item}) => 
            <VenueItem venue={item}>Venue Here</VenueItem>
             }
           keyExtractor={({id}, index) => id.toString()}
            
            />
            
    
              
        </Card>
        <Card style={styles.allEventsButton}>
            <Button color={Colors.darkAccent} title="SIGN UP"   />
            
            
        </Card>
    
        </View>
           
        );
    };

}



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
