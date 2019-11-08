import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
  text1: {
   backgroundColor: "magenta",
   color: "cyan",
  fontSize: 40
 },
  text2: {
  backgroundColor: "black",
  color: "red",
  fontSize: 28
},
  text3: {
  backgroundColor: "gold"
//  color: "red"
  }

})

class App extends React.Component {
 render() {
   return (
     <View style={styles.text3 }>

       <Text style={styles.text1}>
         My favorite tv show is Street Outlaws
       </Text>
       <Text style={styles.text2}>
          I like this show because I like cars and trucks that go really really fast.
        </Text>

     </View>
   );
 }
}

export default App;
