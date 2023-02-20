import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function SpotifyApp(): JSX.Element {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'black'}></StatusBar>
        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginHorizontal: 20,
            }}>
            Good afternoon
          </Text>
        </View>
        <View style={styles.start}>
          <Pressable style={styles.startButton}>
            <Text style={{color: 'white', textAlign: 'center'}}>Music</Text>
          </Pressable>
          <Pressable style={styles.startButton}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Podcasts & shows
            </Text>
          </Pressable>
        </View>
        {/* upper hello cards */}
        <View style={styles.upperCards}>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
          <View style={styles.upperCardsEl}>
            <Image
              source={{
                uri: 'https://i.pngimg.me/thumb/f/720/0019c183982141aebb27.jpg',
              }}
              style={{width: 100, height: 60, borderRadius: 10}}
            />
            <Text style={styles.element}>Hello</Text>
          </View>
        </View>
        {/* Below image cards element */}
        <ScrollView horizontal>
          <View style={styles.cards}>
            <TouchableOpacity onPress={()=>Linking.openSettings()}>
              <Image
                source={{
                  uri: 'https://cdnb.artstation.com/p/assets/images/images/038/735/059/large/utsav-kadyan-noway-8.jpg?1623915747',
                }}
                style={{width: 150, height: 150, marginHorizontal: 10}}
              />
            </TouchableOpacity>

            <Image
              source={{
                uri: 'https://cdnb.artstation.com/p/assets/images/images/038/735/059/large/utsav-kadyan-noway-8.jpg?1623915747',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://cdnb.artstation.com/p/assets/images/images/038/735/059/large/utsav-kadyan-noway-8.jpg?1623915747',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://cdnb.artstation.com/p/assets/images/images/038/735/059/large/utsav-kadyan-noway-8.jpg?1623915747',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://cdnb.artstation.com/p/assets/images/images/038/735/059/large/utsav-kadyan-noway-8.jpg?1623915747',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.cards}>
            <Image
              source={{
                uri: 'https://turkquoise.files.wordpress.com/2015/10/wpid-fb_img_1443861500622.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://turkquoise.files.wordpress.com/2015/10/wpid-fb_img_1443861500622.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://turkquoise.files.wordpress.com/2015/10/wpid-fb_img_1443861500622.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://turkquoise.files.wordpress.com/2015/10/wpid-fb_img_1443861500622.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://turkquoise.files.wordpress.com/2015/10/wpid-fb_img_1443861500622.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.cards}>
            <Image
              source={{
                uri: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/06/Jasmin-Bhasin-shares-poster-of-her-next-Punjabi-track-Tenu-Yaad-Karaan-with-Gurinder-Bawa.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/06/Jasmin-Bhasin-shares-poster-of-her-next-Punjabi-track-Tenu-Yaad-Karaan-with-Gurinder-Bawa.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/06/Jasmin-Bhasin-shares-poster-of-her-next-Punjabi-track-Tenu-Yaad-Karaan-with-Gurinder-Bawa.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/06/Jasmin-Bhasin-shares-poster-of-her-next-Punjabi-track-Tenu-Yaad-Karaan-with-Gurinder-Bawa.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/06/Jasmin-Bhasin-shares-poster-of-her-next-Punjabi-track-Tenu-Yaad-Karaan-with-Gurinder-Bawa.jpg',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.cards}>
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ecdab71336ca522eca0631f7',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ecdab71336ca522eca0631f7',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ecdab71336ca522eca0631f7',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ecdab71336ca522eca0631f7',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ecdab71336ca522eca0631f7',
              }}
              style={{width: 150, height: 150, marginHorizontal: 10}}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  start: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 400,
    // backgroundColor:'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  startButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#282C35',
    marginHorizontal: 10,
  },
  upperCards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    // borderWidth:1,
    // borderColor:'red'
  },
  upperCardsEl: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#282C35',
    marginVertical: 5,
    borderRadius: 10,
    width: 170,
    height: 60,
  },
  element: {
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 10,
    textAlignVertical: 'center',
    color: 'white',
  },
  cards: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // backgroundColor:'red'
  },
});

export default SpotifyApp;
