import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import db from '../Config';

class PresentButton extends React.Component{

  componentDidMount() {}

  isStudent1Present=(roll)=>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var year = today.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm < 10){
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + year;
    db.ref("Class/"+roll+"/").update({
      [today]: "Present"
    });
  }

  

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.presentStyles} onPress={()=>{
          this.isStudent1Present(this.props.roll)
          }}>
          <Text style={styles.buttonText}>PRESENT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  presentStyles:{
    backgroundColor:"green",
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:-50,
    marginLeft:200,
    width : 75,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})

export default PresentButton;