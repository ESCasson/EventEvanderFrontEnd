import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { CheckBox, Text } from 'react-native-elements';

import Colors from '../constants/colors';

const AllEventsItem = props => {

    const [checkedState, setCheckedState] = useState(false);
    const [focusVenue, setFocusVenue] = useState(false);

    
    props.user.venues.forEach((venue) => {
      if(venue.name === props.event.venue.name) {
        setCheckedState(true);
        setFocusVenue(true);

      }
    }


    )

    handleCheckboxPress = () => {
        if(checkedState === true){
            setCheckedState(focusVenue);
        } else {
            setCheckedState(true);
        }
    };

    return (
   <View style={styles.list}>
     <View style={styles.titleblock}>
     <CheckBox checked={checkedState} onPress={handleCheckboxPress} />
    <Text style={styles.title}>{props.event.title}</Text>
     </View>
    <Text>Date and Time: {props.event.startTime}</Text>
    <Text>Venue: {props.event.venue.name}</Text>
    </View>
            
            
    
    )

};

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
export default AllEventsItem;