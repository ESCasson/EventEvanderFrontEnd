import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';
import AllEventListItem from '../components/AllEventListItem';

const AllEventsList = props => {



    return (
    <Card style={styles.cardList}>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.list}>
    <FlatList
          data={props.data}
          renderItem={({item}) => 
           <AllEventListItem user={props.user} event={item} />
            }
          keyExtractor={({id}, index) => id.toString()}
        />
    </View>
   
   
    </Card>
    
    )

};

const styles = StyleSheet.create({
    cardList: {
      margin: 10,
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