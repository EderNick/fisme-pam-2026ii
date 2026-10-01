import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useContador from './hooks/useContador';

export default function App() {
  const { count, aumentar, decrementar, reiniciar } = useContador();

  return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>{count}</Text>

      <Pressable
        style={[styles.botonFlotante, styles.posicionDer]}
        onPress={aumentar}
        onLongPress={reiniciar}
      >
        <Text style={styles.textoBoton}>+1</Text>
      </Pressable>

      <Pressable
        style={[styles.botonFlotante, styles.posicionIzq]}
        onPress={decrementar}
        onLongPress={reiniciar}
      >
        <Text style={styles.textoBoton}>-1</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  textoGrande: {
    fontSize: 120,
    fontWeight: 'bold'
  },
  botonFlotante: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
  },
  posicionDer: {
    right: 20,
  },
  posicionIzq: {
    left: 20,
  }
});
