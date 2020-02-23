import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Event = props => {
    return (
      <TouchableOpacity>
        <Text style={styles.title}>{props.event.title}</Text>
        <Text style={styles.item} >Date: {props.event.date}</Text>
        <View style={styles.details}>
        <Text style={styles.item} >Venue: {props.event.venue.name}</Text>
        <Text style={styles.item}>Start Time: {props.event.startTime}</Text>
        </View>
  
      </TouchableOpacity>
  
    )};

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    details: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    item: {
      marginHorizontal: 20
    }
  });

export default Event;