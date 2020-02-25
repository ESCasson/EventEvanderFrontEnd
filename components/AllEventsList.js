import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import AllEventItem from './AllEventItem';
import Card from './Card';
import Colors from '../constants/colors';

const AllEventsList = props => {



    return (
    <Card style={styles.cardList}>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.list}>
    <FlatList
          data={props.data}
          renderItem={({item}) => 
           <AllEventItem event={item}></AllEventItem>
            }
          keyExtractor={({id}, index) => id.toString()}
        />
    </View>
   
   
    </Card>
    
    )

};

const styles = StyleSheet.create({
    cardList: {
      margin: 20,
      backgroundColor: Colors.lightAccent,
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'Arial',
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
   
  });
export default AllEventsList;