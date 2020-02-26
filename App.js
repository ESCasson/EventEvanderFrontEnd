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
      content: 'SignUp',
      focusVenueEvents: []}

      this.handleAllEventsPress = this.handleAllEventsPress.bind(this)
      this.handleNotsPress = this.handleNotsPress.bind(this)
    
  }

  pullOutUsersVenuesEvents = () => {
    const newEventArray = [];
    this.state.userData.venues.map((venue) => {
      venue.events.map((event) => {
        const EventItem =
        {
          "venue": venue.name,
          "title": event.title,
          "timeDate": event.startTime,
          "id": event.id

        }
      newEventArray.push(EventItem)

      })
    });
    this.setState({
      focusVenueEvents: newEventArray
    });
  }

  componentDidMount(){
    const urlEvent = "http://localhost:8080/api/events/next7days"
    const urlUser = "http://localhost:8080/api/users/1"

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
      .then(
        userPromise()
        .then((data) => 
        {
          this.setState({
            userData: data
          });
        }).then(
          this.pullOutUsersVenuesEvents)
        
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
    <AllEventsScreen user={this.state.userData} data={this.state.dataSource} moveButton={this.handleNotsPress} />
    </View>
    
  )
}


    return (
    <View style={{paddingTop:20}}>
      <Header />
      <NotificationScreen data={this.state.focusVenueEvents} moveButton={this.handleAllEventsPress}  />
    </View>
    );
 
}
}


