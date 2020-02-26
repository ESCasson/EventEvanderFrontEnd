import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AllEventsList from '../components/AllEventsList';
import Card from '../components/Card';
import  Colors  from '../constants/colors';



const AllEventsScreen = props => {


return (
    <View>
         <Card style={styles.allEventsButton}>
         <View style={styles.button}>
             <Button color={Colors.darkShades} title="Today"  />
             </View><View style={styles.button}>
             <Button color={Colors.darkShades} title="Tomorrow"  />
             </View><View style={styles.button}>
             <Button color={Colors.darkShades} title="Next 7 Days" onPress={props.moveButton} />
             </View>
             <View style={styles.button}>
             <Button color={Colors.darkShades} title="Next 30 Days"/>
             </View>
             <View>
             <Button color={Colors.darkAccent} title=" Go Back To Front Page " onPress={props.moveButton} />
             </View>
        
    </Card>
    <AllEventsList title='All Events' data={props.data} user={props.user} />
   

    </View>
    
        
    );

};


const styles = StyleSheet.create({
    allEventsButton: {
        marginTop: 20,
        width: 600,
        maxWidth: '90%',
        alignSelf: "center",
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    button: {
        width: 110,
        color: Colors.primary,
        padding: 5
    }
});

export default AllEventsScreen;