import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Event from './Event';
import Colors from '../constants/colors';

const AllEventsItem = props => {

    const [checkedState, setCheckedState] = useState(false);

    handleCheckboxPress = () => {
        if(checkedState === true){
            setCheckedState(false);
        } else {
            setCheckedState(true);
        }
    };

    return (
   <View style={styles.listItem}>
    <CheckBox checked={checkedState} onPress={handleCheckboxPress} />
    <Event event={props.event}></Event>
   </View>
            
            
    
    )

};

const styles = StyleSheet.create({
    list: {
      margin: 20,
      backgroundColor: Colors.lightAccent
    },
    title: {
      fontFamily: 'monospace',
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    listItem: {
      flexDirection: 'row'
    }
  });
export default AllEventsItem;