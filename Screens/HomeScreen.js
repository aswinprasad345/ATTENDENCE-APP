import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import AbsentButton from '../components/AbsentButton';
import PresentButton from '../components/PresentButton';
import SummaryScreen from './SummaryScreen';
import db from '../Config';

export default class HomeScreen extends React.Component {
  goToSummaryScreen = (count) => {
    // db.ref("teams/"+count).update({
    //   enabled:true
    // });
    this.sortAttedence();
  };

  todayDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var year = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return (today = dd + '-' + mm + '-' + year);
  };

  sortAttedence = () => {
    var rolls = [];
    var allAttendence = [];
    db.ref('Class').on('value', (data) => {
      rolls = data.val();
      for (var i in rolls) {
        console.log(
          rolls[i][this.todayDate()],
          rolls[i]['Name'],
          this.todayDate()
        );
        allAttendence.push([rolls[i][this.todayDate()], rolls[i]['Name']]);
      }
      console.log(allAttendence);
      this.props.navigation.navigate('SummaryScreen', {
        allAttendenceList: allAttendence,
      });
    });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studentText}>Aswin</Text>
        <AbsentButton roll="01" />
        <PresentButton roll="01" />

        <Text style={styles.studentText}>HOST</Text>
        <AbsentButton roll="02" />
        <PresentButton roll="02" />

        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => {
            this.goToSummaryScreen('count');
          }}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    marginLeft: -20,
    width: 400,
    height: 50,
  },
  submitText: {
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    marginLeft: 30,
  },
  studentText: {
    color: 'black',
    marginTop: 20,
    marginLeft: 30,
  },
});
