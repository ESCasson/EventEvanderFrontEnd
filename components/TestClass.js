import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Colors from '../constants/colors';

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            ischecked: false,
            isAtFocuseVenue: false }
      }

componentDidMount(){

    this.props.user.venues.forEach((venue) => {
        if(venue.name === this.props.event.venue.name) {
         this.setState({
            ischecked: true,
            isAtFocuseVenue: true 
         })
  
        }
      })
}

handleCheckboxPress = () =>
    {
        if(this.state.ischecked === true){
            this.setState({ischecked: this.state.isAtFocuseVenue});
        } else {
            this.setState({ischecked: true})
        }
    }



  render() {
    return (
        <View style={styles.list}>
        <View style={styles.titleblock}>
        <CheckBox  checked={this.state.ischecked} onPress={() => {this.handleCheckboxPress()}} />
       <Text style={styles.title}>{this.props.event.title}</Text>
        </View>
       <Text>Date and Time: {this.props.event.startTime} </Text>
       <Text>Venue: {this.props.event.venue.name}</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    list: {
      margin: 10,
      backgroundColor: Colors.lightAccent,
    },
  
    titleblock: {
      flexDirection: 'row'
    },
    title: {
      fontFamily: 'Arial',
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'
  
    }
    });
