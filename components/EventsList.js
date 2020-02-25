import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Event from './Event';
import Card from './Card';
import Colors from '../constants/colors';

const EventsList = props => {
  console.log(props.data)
    return (
    <Card style={styles.list}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
          data={props.data}
          renderItem={({item}) => <Event event={item}></Event>}
          keyExtractor={({id}, index) => id.toString()}
        />
   
    </Card>
    
    )

};

const styles = StyleSheet.create({
    list: {
      margin: 20,
      backgroundColor: Colors.lightAccent,
      alignItems: 'center'
    },
    title: {
      fontFamily: 'Arial',
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'

    }
  });
export default EventsList;