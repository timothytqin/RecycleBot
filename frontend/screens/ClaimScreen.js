import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoints } from '../actions.js';
import store from '../store';

const data = [
  {
    url: require('../assets/images/walmart.png'),
    name: 'Walmart',
    cost: 100,
    price: 5
  },
  {
    url: require('../assets/images/amazon.png'),
    name: 'Amazon',
    cost: 250,
    price: 10
  },
  {
    url: require('../assets/images/googleplay.png'),
    name: 'Play Store',
    cost: 500,
    price: 20
  },
  {
    url: require('../assets/images/appstore.png'),
    name: 'App Store',
    cost: 500,
    price: 20
  }
]

export class ClaimScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: store.getState().reducer.score
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#F53844', '#42378F']}
          style={styles.background}
        >
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.title}>Recycler</Text>
            </View>
            <View>
              <Text style={styles.title2}>{this.state.score}</Text>
            </View>
          </View>
          <ScrollView>
            {data.map((value, index) => {
              return (
                <TouchableOpacity style={styles.card} key={index} onPress={() => {
                  if (store.getState().reducer.score >= value.cost) {
                    store.dispatch(addPoints(-1 * value.cost))
                    this.setState({ score: store.getState().reducer.score })
                  }
                  else {
                    Alert.alert(
                      'Need more funds',
                      'You do not have enough credits',
                      [
                        { text: 'OK' },
                      ],
                      { cancelable: false }
                    )
                  }
                }}>
                  <View style={styles.cardLeft}>
                    <Image source={value.url} style={{ width: 100, height: 100 }} />
                  </View>
                  <View style={styles.cardRight}>
                    <Text style={styles.cardName}>
                      {value.name}
                    </Text>
                    <Text style={styles.cardMessage}>
                      {value.cost} pts | ${value.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })}

          </ScrollView>

        </LinearGradient>

      </View >
    )
  }
}

const mapStateToProps = (state) => {
  return { score: state.score }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPoints,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClaimScreen);

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: '800'
  },
  title2: {
    fontSize: 28,
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
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardName: {
    fontWeight: '800',
    fontSize: 30,
    color: '#313131',
    textAlign: 'right'
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
    marginTop: 10,
    textAlign: 'right'
  }
});
