import React, {Component} from 'react';
import { ActivityIndicator, View, Text  } from 'react-native';
import Header from './components/Header';
import NotificationScreen from './screens/NotificationScreen';
import AllEventsScreen from './screens/AllEventsScreen';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={ 
      isLoading: true,
      content: 'notification'}

      this.handleAllEventsPress = this.handleAllEventsPress.bind(this)
      this.handleNotsPress = this.handleNotsPress.bind(this)
  }

  componentDidMount(){
    return fetch("https://raw.githubusercontent.com/ESCasson/API/master/Basic")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
    }

    handleAllEventsPress(){
      this.setState({
        content: 'allEvents'
      })
    }

    handleNotsPress(){
      this.setState({
        content: ''
      })
    }


    render(){

     
  if(this.state.isLoading){

  return(
  <View style={{flex: 1, padding: 20}}>
    <ActivityIndicator/>
  </View>
)
}

if(this.state.content === 'allEvents'){
  return (
    <View style={{flex: 1, paddingTop:20}}>
      <Header />
    <AllEventsScreen data={this.state.dataSource} moveButton={this.handleNotsPress} />
    </View>
    
  )
}




    return (
    <View style={{flex: 1, paddingTop:20}}>
      <Header />
      <NotificationScreen data={this.state.dataSource} moveButton={this.handleAllEventsPress}  />
    </View>
    );
 
}
}

