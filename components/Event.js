import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Event = props => {
    return (
      <TouchableOpacity>
        <Text style={styles.title}>{props.event.title}</Text>
        <View style={styles.details}>
        <Text style={styles.item}>Start Time: {props.event.timeDate}</Text>
        <Text style={styles.item}>Venue: {props.event.venue}</Text>
        </View>
        
        
  
      </TouchableOpacity>
  
    )};

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    details: {
      justifyContent: 'flex-start'
    },
    item: {
      marginHorizontal: 20
    }
  });

export default Event;