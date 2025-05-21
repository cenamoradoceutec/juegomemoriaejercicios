import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useRef } from 'react';
import { useJuegoContext } from '../Provider/JuegosProvider';

export default function Juego() {
  const { sumarPartida, cartas, cantidadPartidas } = useJuegoContext();
  const cartasSeleccionadas = useRef<number[]>([]);

  function seleccionarCarta(item: number) {
    cartasSeleccionadas.current.push(item);

    if (cartasSeleccionadas.current.length === 2) {
      if (cartasSeleccionadas.current[0] === cartasSeleccionadas.current[1]) {
        Alert.alert('¡Ganaste la partida!');
        sumarPartida({ id: Date.now(), descripcion: 'Partida Ganada' });
      } else {
        Alert.alert('Partida Perdida');
        sumarPartida({ id: Date.now(), descripcion: 'Partida Perdida' });
      }

      setTimeout(() => {
        cartasSeleccionadas.current = [];
      }, 1000);
    }
  }

  return (
    <View>
      <FlatList
        data={cartas}
        keyExtractor={(_, i) => i.toString()}
        numColumns={4}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => seleccionarCarta(item)}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { alignItems: 'center', marginTop: 24 },
  card: {
    width: 70,
    height: 90,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  cardText: { fontSize: 26, color: '#fff' },
});
