import React, {Component} from 'react';
import { ActivityIndicator, View  } from 'react-native';
import EventsList from './components/EventsList';
import Header from './components/Header';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={ isLoading: true}
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



  render(){

    if(this.state.isLoading){
      return(
        
        <View style={{flex: 1, padding: 20}}>
          <Header />
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:20}}>
        <Header />
        <EventsList dataSource={this.state.dataSource}  />
      </View>
    );
  }
}

