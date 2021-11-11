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
import NavigationMenu from './Navigation'



const {MessagesModule} = NativeModules;

type Sticker = {name: string; source: number};

const stickers: Sticker[] = [
  {name: 'apple', source: {uri:'https://media2.giphy.com/media/MaaaYoyYTMjuIct0wD/giphy.webp'}},
  {name: 'avocado', source: require('./gifs/SampleGIFImage_40kbmb.gif')},
  {name: 'banana', source: require('./gifs/Alien(048).gif')},
  {name: 'blueberries', source: require('./gifs/AmericanFootball(101).gif')},
  {name: 'cherries', source: require('./gifs/Angelic(038).gif')},
  {name: 'coconut', source: require('./gifs/AngryDevil(033).gif')},
  {name: 'grapes', source: require('./gifs/Anxious(091).gif')},
  {name: 'lemon', source: require('./gifs/Applause(050).gif')},
  {name: 'mango', source: require('./gifs/Balloon(103).gif')},
  {name: 'melon', source: require('./gifs/Basketball(100).gif')},
  {name: 'olive', source: require('./gifs/Basketball(100).gif')},
  {name: 'pear', source: require('./gifs/Beaten-Up(122).gif')},
  {name: 'pineapple', source: require('./gifs/BirthdayCake(042).gif')},
  {name: 'strawberry', source: require('./gifs/BlahBlahBlah(144).gif')},
  {name: 'tangerine', source: require('./gifs/BlowAKiss(019).gif')},
  {name: 'tomato', source: require('./gifs/Blushing(148).gif')},
  {name: 'apple', source: require('./gifs/Bored(133).gif')},
  {name: 'avocado', source: require('./gifs/BringIt(112).gif')},
//   {name: 'banana', source: require('./gifs/Celebration(104).gif')},
  {name: 'apple', source: require('./gifs/Angry(015).gif')},
  {name: 'avocado', source: require('./gifs/Aha!(093).gif')},
  {name: 'banana', source: require('./gifs/Alien(048).gif')},
  {name: 'blueberries', source: require('./gifs/AmericanFootball(101).gif')},
  {name: 'cherries', source: require('./gifs/Angelic(038).gif')},
  {name: 'coconut', source: require('./gifs/AngryDevil(033).gif')},
  {name: 'grapes', source: require('./gifs/Anxious(091).gif')},
  {name: 'lemon', source: require('./gifs/Applause(050).gif')},
  {name: 'mango', source: require('./gifs/Balloon(103).gif')},
  {name: 'melon', source: require('./gifs/Basketball(100).gif')},
  {name: 'olive', source: require('./gifs/Basketball(100).gif')},
  {name: 'pear', source: require('./gifs/Beaten-Up(122).gif')},
  {name: 'pineapple', source: require('./gifs/BirthdayCake(042).gif')},
];



const Gifs: FunctionComponent = () => {
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
        
        <Text style={styles.headerText}>Ojiis Gifs</Text>
      </View> */}
      <FlatList style={styles.stickerContainer}
        data={stickers}
        renderItem={renderSticker}
        keyExtractor={getKey}
        numColumns={7}
        showsVerticalScrollIndicator={false}
        testID="pack-details-stickers"
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
    flexWrap: 'wrap',
    height: '100%',
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
    width: 55,
    height: 55,
  },
});

export default Gifs;
