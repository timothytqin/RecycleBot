import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';

const data = [
  {
    name: 'Recycle',
    message: 'These items CAN be recycled:',
    items: ['paper', 'cardboard', 'glass bottles or jars', 'rigid plastic products', 'metal containers(tin, aluminum, steel)']
  },
  {
    name: 'Don\'t Recycle',
    message: 'These items CANNOT be recycled:',
    items: ['greasy paper', 'used towels, tissues, or diapers', 'broken ceramics, light bulbs, or mirrors', 'plastic bags, shrink wrap, or bubble wrap', 'styrofoam', 'electronics']
  }

]

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#F53844', '#42378F']}
        style={styles.background}
      >
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.title}>To recycle</Text>
            <Text style={styles.text}>or not to recycle...</Text>
          </View>
          <View>
            <Image source={require('../assets/images/recycle.png')} style={{ width: 70, height: 70 }} />
          </View>
        </View>
        <ScrollView>
          {data.map((value, index) => {
            return (
              <View style={styles.card} key={index}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardName}>
                    {value.name}
                  </Text>
                  <Text style={styles.boldMessage}>
                    {value.message}
                  </Text>
                  {value.items.map((item, ind) => {
                    return (
                      <Text style={styles.cardMessage} key={ind}>
                        {item}
                      </Text>
                    )
                  })}
                </View>
                <View style={styles.cardRight}>
                </View>

              </View>
            )
          })}

        </ScrollView>
      </LinearGradient>

    </View >
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: '800'
  },
  background: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50
  },
  text: {
    fontSize: 28,
    color: '#EEEEEE',
    fontWeight: '800'
  },
  card: {
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10
  },
  cardName: {
    fontWeight: '800',
    fontSize: 30,
    color: '#313131'
  },
  cardDimension: {
    fontWeight: '900',
    fontSize: 20,
    color: '#B7B7B7'
  },
  boldMessage: {
    fontSize: 16,
    color: '#313131',
    marginTop: 10,
    fontWeight: '800'
  },
  cardMessage: {
    fontSize: 16,
    color: '#313131',
    marginTop: 10
  }
});
