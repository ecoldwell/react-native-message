import React, {FunctionComponent, useCallback} from 'react';
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
import keyboard_letters from './letters/keyboard'



const {MessagesModule} = NativeModules;



type Sticker = {name: string; source: number};

const stickers: Sticker[] = [
  // {name: 'apple', source: require('./stickers/#1(057).png')},
  {name: 'Q', source: require('./stickers/Aha!(093).png')},
  {name: 'W', source: require('./stickers/Alien(048).png')},
  {name: 'E', source: require('./stickers/AmericanFootball(101).png')},
  {name: 'R', source: require('./stickers/Angry(015).png')},
  {name: 'T', source: require('./stickers/AngryDevil(033).png')},
  {name: 'Y', source: require('./stickers/Balloon(103).png')},
  {name: 'U', source: require('./stickers/Baseball(099).png')},
  {name: 'I', source: require('./stickers/Basketball(100).png')},
  {name: 'O', source: require('./stickers/Bored(133).png')},
  {name: 'P', source: require('./stickers/Crazy(146).png')},
  {name: 'A', source: require('./stickers/CoolGuy(053).png')},
  {name: 'S', source: require('./stickers/Dancing(085).png')},
  {name: 'D', source: require('./stickers/Sad(014).png')},
  {name: 'F', source: require('./stickers/Santa(105).png')},
  {name: 'G', source: require('./stickers/Sick(031).png')},
  // {name: 'wow', source: require('./stickers/#1(057).png')},
  {name: 'H', source: require('./stickers/Aha!(093).png')},
  {name: 'J', source: require('./stickers/Alien(048).png')},
  {name: 'K', source: require('./stickers/AmericanFootball(101).png')},
  {name: 'L', source: require('./stickers/Angry(015).png')},
  {name: 'Z', source: require('./stickers/AngryDevil(033).png')},
  {name: 'X', source: require('./stickers/Balloon(103).png')},
  {name: 'C', source: require('./stickers/Baseball(099).png')},
  {name: 'V', source: require('./stickers/Basketball(100).png')},
  {name: 'B', source: require('./stickers/Bored(133).png')},
  {name: 'N', source: require('./stickers/Crazy(146).png')},
  {name: 'M', source: require('./stickers/CoolGuy(053).png')},
];



const Letters: FunctionComponent = () => {
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
           <Text style={styles.image}>{info.item.name}</Text>
        </Pressable>
      );
    },
    [sendSticker],
  );

  const getKey = useCallback((sticker: Sticker) => {
    return sticker.name;
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Ojiis</Text>
      </View> */}
      <FlatList style={styles.stickerContainer}
        data={stickers}
        renderItem={renderSticker}
        keyExtractor={getKey}
        numColumns={7}
        showsVerticalScrollIndicator={false}
        testID="pack-details-stickers-stickers"
      />
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
    padding:7, 
    height:30, 
    overflow:'hidden', 
    borderRadius:4, 
    margin: 2, 
    backgroundColor: 'white'
  },
});

export default Letters;