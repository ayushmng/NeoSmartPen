/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  TouchableOpacity,
  Image,
} from 'react-native';

const {VoiceChangingModule} = NativeModules;

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const audioTrackURL =
    'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3';

  const changeToAlein = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToAlien(audioTrackURL);
  };

  const changeToChild = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  };

  const changeToFast = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.speedUpVoice(audioTrackURL);
  };

  const changeToSlow = () => {
    Platform.OS === 'android' &&
      VoiceChangingModule.slowDownVoice(audioTrackURL);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
      <Text style={styles.title}>Voice Changer</Text>
      <Text style={styles.title}> Change Voice Effects </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => changeToAlein()}>
          <Image
            source={{
              uri: 'https://icons.iconarchive.com/icons/google/noto-emoji-smileys/256/10101-alien-icon.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Alien</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToChild()}>
          <Image
            source={{
              uri: 'https://pics.freeicons.io/uploads/icons/png/2793494581535699799-512.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToFast()}>
          <Image
            source={{
              uri: 'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Fast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeToSlow()}>
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/slow-motion-3960666-3303367.png',
            }}
            resizeMode={'contain'}
            style={styles.icon}
          />
          <Text>Slow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  iconsContainer: {
    width: 300,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  title: {fontSize: 26, fontWeight: '500', marginTop: 8},
  icon: {
    height: 40,
    width: 40,
  },
});

export default App;
