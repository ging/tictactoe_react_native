import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class IndexScreen extends React.Component {
    render() {
        return(
            <View style={{ flex:1, justifyContent:'center', margin: 30 }}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('GameScreen')} >
                    <Text style={styles.button}>Play</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  }
})