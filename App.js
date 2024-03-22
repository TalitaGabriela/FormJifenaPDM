import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>
        JIFENA 2024 - Ficha de Cadastro:
      </Text>
    </View>
  )
}

function Footer() {
  return(
    <View style={styles.footer}>
      <Text style={styles.text}>
      PDM1 © 2024
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Nome:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Sobrenome:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Sexo:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Idade:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>
      {'\n'}
      </Text>
      <Pressable style={styles.submit}> ENVIAR </Pressable>

      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: "37px",
    color: "white",
    textAlign: "center",
  },
  header: {
    display: "flex",
    position: 'fixed',
    top: 0,
    backgroundColor: "green",
    width: "100%",
  },
  footer: {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'green',
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
  },
  submit:{
    fontFamily: "Arial",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    width: "162px",
  },
});
