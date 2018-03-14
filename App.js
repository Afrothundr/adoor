import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, NavigatorIOS } from 'react-native';
import { Constants } from 'expo';



// You can import from local files
import HomePg from './components/HomePg';
import Login from './components/Login';
import MyMatches from './components/MyMatches';
import Matching from './components/Matching';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

// class Home extends Component<{}> {
//   render (){
//     return (
//       <View style={styles.container}>
//         <Image style={styles.logo} source={require("./assets/logo.png")}/>
        
//         <Button style={styles.button}
//           title = "Find Your Match!"
//           onPress= {
//             () =>
//             this.props.navigator.push({
//               page: Login,
//             })
//           }
//           backgroundColor="#841586"
//         />
      
//       </View>
//     );
//   }
// }

// const logo = <Image source ={require("./assets/logo.png")}/>

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Matching />
      </View>
    // <NavigatorIOS
    //     initialRoute={{
    //       title: 'Adoor',
    //       component: Home, 
    //     }}>
    //   </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
