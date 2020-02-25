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
    const urlEvent = "http://localhost:8080/api/events"
    const urlUser = "http://localhost:8080/api/users/5"

    const eventPromise = ()=> {
      return fetch(urlEvent)
      .then((res) => res.json());
    }
    const userPromise = ()=> {
      return fetch(urlUser)
      .then((res) => res.json());
    }
   
    return  eventPromise()
      .then((data) => 
      {
        this.setState({
          dataSource: data
        });
      })
      .then(userPromise()
        .then((data) => 
        {
          this.setState({
            userData: data
          });
        })
        
        )
     

    
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
      <NotificationScreen data={this.state.userData} moveButton={this.handleAllEventsPress}  />
    </View>
    );
 
}
}

