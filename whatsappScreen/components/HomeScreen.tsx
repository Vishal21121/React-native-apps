import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Vishal Singh',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 6,
      name: 'Shubham Kumar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 7,
      name: 'Ajay Kumar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 8,
      name: 'Vijay Kumar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 9,
      name: 'Rohit Kumar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 10,
      name: 'Shubhman Kumar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messenger</Text>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true}>
            {contacts.map(({uid, name, imageUrl}) => (
              <View key={uid} style={styles.headerCard}>
                <Image style={styles.userImages} source={{uri: imageUrl}} />
                <Text>{name.split(' ')[0]}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.classes}>
        <Text style={styles.classText}>Chats</Text>
        <Text style={styles.classText}>Groups</Text>
        <Text style={styles.classText}>Calls</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView >
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.bodyCard}>
              <Image style={styles.userImages} source={{uri: imageUrl}} />
              <View style={styles.textContainer}>
                <Text>{name.split(' ')[0]}</Text>
                <Text>{status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#3C4DEF',
    display: 'flex',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    margin: 20,
  },
  scrollContainer: {
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
  },
  headerCard: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  userImages: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 4,
    borderColor: '#3C4DEF',
  },
  cardText: {
    marginLeft: 10,
  },
  classes: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E4E7EE',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 30,
  },
  classText: {
    color: '#76787A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontWeight: '600',
  },
  bodyContainer: {
    marginHorizontal: 20,
  },
  bodyCard: {
    display:'flex',
    flexDirection:'row',
    marginVertical:10
  },
  textContainer:{
    display:'flex',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
  }
});
