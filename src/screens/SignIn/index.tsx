import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import IlluatrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  function handleSingIng() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <Image
        source={IlluatrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entrar com Discord"
          onPress={handleSingIng}
        />
      </View>
    </View>
  );
}