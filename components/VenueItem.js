import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/colors';

const VenueItem = props => {

    const [checkedState, setCheckedState] = useState(false);

    handleCheckboxPress = () => {
        if(checkedState === true){
            setCheckedState(false);
            props.checkOff(props.venue)
        } else {
            setCheckedState(true);
            props.checkOn(props.venue)
        }
    };

    return (
   <View style={styles.listItem}>
    <CheckBox checked={checkedState} onPress={handleCheckboxPress} />
    <Text>{props.venue.name}</Text>
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

export default VenueItem;