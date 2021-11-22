import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  NativeModules,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';

const {MessagesModule} = NativeModules;

type Sticker = {name: string; source: number};

var stickers: Sticker[] = [
  // {name: '#1(057)', source: require('./stickers/#1(057).png')},
  {name: 'Aha!(093)', source: require('./stickers/Aha!(093).png')},
  {name: 'Alien(048)', source: require('./stickers/Alien(048).png')},
  {name: 'AmericanFootball(101)', source: require('./stickers/AmericanFootball(101).png')},
  {name: 'Angry(015)', source: require('./stickers/Angry(015).png')},
  {name: 'AngryDevil(033)', source: require('./stickers/AngryDevil(033).png')},
  {name: 'Balloon(103)', source: require('./stickers/Balloon(103).png')},
  {name: 'Baseball(099)', source: require('./stickers/Baseball(099).png')},
  {name: 'Basketball(100)', source: require('./stickers/Basketball(100).png')},
  {name: 'Bored(133)', source: require('./stickers/Bored(133).png')},
  {name: 'Crazy(146)', source: require('./stickers/Crazy(146).png')},
  {name: 'CoolGuy(053)', source: require('./stickers/CoolGuy(053).png')},
  {name: 'Dancing(085)', source: require('./stickers/Dancing(085).png')},
  {name: 'Sad(014)', source: require('./stickers/Sad(014).png')},
  {name: 'Santa(105)', source: require('./stickers/Santa(105).png')},
  {name: 'Sick(031)', source: require('./stickers/Sick(031).png')},
];


const firebaseConfig = 
{
  apiKey: 'AIzaSyDfGF4lPEsxoZa3iQzJQIR1p0eIJTPX8k0',
  authDomain: '',
  databaseURL: 'https://ojiis-8b372.firebaseio.com',
  projectId: '',
  storageBucket: 'ojiis-8b372.appspot.com',
  messagingSenderId: '536725110561',
  appId: '1:536725110561:ios:933e366504e8d0fc098860'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const Stickers: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Sticker>>([]);

  const sendSticker = useCallback(async (sticker: Sticker) => {
    const {uri} = Image.resolveAssetSource(sticker.source);
    try {
      await MessagesModule.insertSticker(uri);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderSticker = useCallback(
    (info: ListRenderItemInfo<Sticker>) => {
      return (
        <Pressable onPress={() => sendSticker(info.item)}>
          <Image source={info.item.source} style={styles.image} />
        </Pressable>
      );
    },
    [sendSticker],
  );

  const getKey = useCallback((sticker: Sticker) => {
    return sticker.name;
  }, []);
  
  useEffect(() => {

     database()
      .ref('/Users/xPG640OrBaPXwLHGSEN9lOsOECI2')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const userData = snapshot.val();
        const purchasedOjiisStr = userData.purchasedItem.Ojiis;
        const userOjiis: string[] = purchasedOjiisStr
        .split(",");
        userOjiis.splice(-1,1);

        var userStickers: Sticker[] =  [];
        stickers.forEach(function (item) {
          // console.log(item.name);
          userOjiis.forEach(function(ojiiName) {
            if ( item.name == ojiiName) {
              userStickers.push(item);
            }
          })
        });
        setData(userStickers);
      })
      .catch((error) => console.error(error))
      .finally(() => { console.log("I'm here in finally"); setLoading(false); }); 

      setLoading(false);

  }, []);
  

  return (
    <SafeAreaView style={styles.root}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Ojiis</Text>
      </View> */}
      {isLoading ? <Text>Loading...</Text> : 
      (
      <FlatList style={styles.stickerContainer}
        // data={stickers}
        data = {data}
        renderItem={renderSticker}
        keyExtractor={getKey}
        numColumns={7}
        showsVerticalScrollIndicator={false}
        testID="pack-details-stickers-stickers"
      />
    )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#007DFF'
  },
  stickerContainer: {
    width: '100%',
    display: 'flex',
    // flexWrap: 'wrap',
    height: '100%',
    paddingTop: 5
    // alignItems:'center',
    // justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 46,
    height: 46,
    margin: 5
  },
});

export default Stickers;
