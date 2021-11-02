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



const {MessagesModule} = NativeModules;

type Sticker = {name: string; source: number};

const stickers: Sticker[] = [
  // {name: 'apple', source: require('./stickers/#1(057).png')},
  {name: 'avocado', source: require('./stickers/Aha!(093).png')},
  {name: 'banana', source: require('./stickers/Alien(048).png')},
  {name: 'blueberries', source: require('./stickers/AmericanFootball(101).png')},
  {name: 'cherries', source: require('./stickers/Angry(015).png')},
  {name: 'coconut', source: require('./stickers/AngryDevil(033).png')},
  {name: 'grapes', source: require('./stickers/Balloon(103).png')},
  {name: 'lemon', source: require('./stickers/Baseball(099).png')},
  {name: 'mango', source: require('./stickers/Basketball(100).png')},
  {name: 'melon', source: require('./stickers/Bored(133).png')},
  {name: 'olive', source: require('./stickers/Crazy(146).png')},
  {name: 'pear', source: require('./stickers/CoolGuy(053).png')},
  {name: 'pineapple', source: require('./stickers/Dancing(085).png')},
  {name: 'strawberry', source: require('./stickers/Sad(014).png')},
  {name: 'tangerine', source: require('./stickers/Santa(105).png')},
  {name: 'tomato', source: require('./stickers/Sick(031).png')},
  // {name: 'wow', source: require('./stickers/#1(057).png')},
  {name: 'avocado', source: require('./stickers/Aha!(093).png')},
  {name: 'banana', source: require('./stickers/Alien(048).png')},
  {name: 'blueberries', source: require('./stickers/AmericanFootball(101).png')},
  {name: 'cherries', source: require('./stickers/Angry(015).png')},
  {name: 'coconut', source: require('./stickers/AngryDevil(033).png')},
  {name: 'grapes', source: require('./stickers/Balloon(103).png')},
  {name: 'lemon', source: require('./stickers/Baseball(099).png')},
  {name: 'mango', source: require('./stickers/Basketball(100).png')},
  {name: 'melon', source: require('./stickers/Bored(133).png')},
  {name: 'olive', source: require('./stickers/Crazy(146).png')},
  {name: 'pear', source: require('./stickers/CoolGuy(053).png')},
  {name: 'pineapple', source: require('./stickers/Dancing(085).png')},
  {name: 'strawberry', source: require('./stickers/Sad(014).png')},
  {name: 'tangerine', source: require('./stickers/Santa(105).png')},
  {name: 'tomato', source: require('./stickers/Sick(031).png')},
  {name: 'tomato', source: require('./stickers/Sick(031).png')},
  {name: 'strawberry', source: require('./stickers/Sad(014).png')},
];



const Stickers: FunctionComponent = () => {
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
    width: 46,
    height: 46,
    margin: 5
  },
});

export default Stickers;
