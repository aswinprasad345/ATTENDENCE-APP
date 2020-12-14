import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import HomeScreen from './HomeScreen'
import db from '../Config';

export default class SummaryScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      {this.props.navigation.getParam("allAttendenceList").map((Class)=>(
        <View>
          <Text>{Class[1]+" :"+Class[0]}</Text>
        </View>
      ))}
      </View>
    )
  }
}
