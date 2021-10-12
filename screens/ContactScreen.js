import * as React from 'react';
import {View, Text, Button} from 'react-native';

function ContactScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Contact Screen</Text>
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  

export default ContactScreen;
