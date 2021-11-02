import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

const KeyboardInput = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType='go'
        keyboardAppearance='dark'
        selectionColor='#111'
      />
      <Text style={style.status}>{keyboardStatus}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: 'blue'
  },
  TextInput : {
    backgroundColor: 'blue'
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  status: {
    padding: 10,
    textAlign: "center"
  }
});

export default KeyboardInput;

// import React, { useState } from 'react';
// import { Button, InputAccessoryView, ScrollView, TextInput } from 'react-native';

// const KeyboardInput = () => {
//   const inputAccessoryViewID = 'uniqueID';
//   const initialText = '';
//   const [text, setText] = useState(initialText);

//   return (
//     <>
//       <ScrollView keyboardDismissMode="interactive" style={{backgroundColor: 'red'}}>
//         <TextInput
//           style={{
//             padding: 16,
//             marginTop: 50,
//             color: 'red'
//           }}
//           inputAccessoryViewID={inputAccessoryViewID}
//           onChangeText={setText}
//           value={text}
//           placeholder={'Please type here…'}
//         />
//       </ScrollView>
//       <InputAccessoryView nativeID={inputAccessoryViewID}>
//         <Button
//           onPress={() => setText(initialText)}
//           title="Clear text"
//         />
//       </InputAccessoryView>
//     </>
//   );
// }

// export default KeyboardInput;

// ComponentsConfig.js

// import React, {Component} from 'react';
// import {View, Text, Card, Button} from 'react-native';

// class KeyboardInput extends Component {
//   render() {
//     return (
//       <View flex padding-page>
//         <Text heading marginB-s4>My Screen</Text>
//         <Card height={100} center padding-card marginB-s4>
//           <Text body>This is an example card </Text>
//         </Card>
        
//         <Button label="Button" body bg-primaryColor square></Button>
//       </View>
//     );
//   }
// }

// export default KeyboardInput;