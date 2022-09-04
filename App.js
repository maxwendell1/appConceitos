import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Max';
    let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
 
    return(
      <View>
        <Text>Olá Turma novamente!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          React Native
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />
 
        <Text style={{ fontSize: 30 }}>{nome}</Text>
 
      </View>
    )
  }
}
 
export default App;