import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro}></Image>
        <Text style={styles.timer}>0.0</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}> 
            <Text style={styles.btnTexto}>Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}> 
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'

  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});