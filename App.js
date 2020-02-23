import React, {Component} from 'react';
import { ActivityIndicator, View, Text  } from 'react-native';
import Header from './components/Header';
import NotificationScreen from './screens/NotificationScreen';
import AllEventsScreen from './screens/AllEventsScreen';
import SignUpScreen from './screens/SignUpScreen';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={ 
      isLoading: true,
      content: 'SignUp'}

      this.handleAllEventsPress = this.handleAllEventsPress.bind(this)
      this.handleNotsPress = this.handleNotsPress.bind(this)
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/ESCasson/API/master/Basic"

    return fetch(url)
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
  <View style={{padding: 20}}>
    <ActivityIndicator/>
  </View>
)
}

if(this.state.content === 'SignUp'){
  return (
    <View style={{paddingTop:20}}>
      <Header />
    <SignUpScreen moveButton={this.handleNotsPress} />
    </View>
    
  )
}

if(this.state.content === 'allEvents'){
  return (
    <View style={{paddingTop:20}}>
      <Header />
    <AllEventsScreen data={this.state.dataSource} moveButton={this.handleNotsPress} />
    </View>
    
  )
}




    return (
    <View style={{paddingTop:20}}>
      <Header />
      <NotificationScreen data={this.state.dataSource} moveButton={this.handleAllEventsPress}  />
    </View>
    );
 
}
}

