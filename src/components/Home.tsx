
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useJuegoContext } from '../Provider/JuegosProvider';

export default function Home() {
  const navigation = useNavigation();
  const { cantidadPartidas } = useJuegoContext();

  return (
    <View style={styles.container}>
      <Button title="Iniciar Juego" onPress={() => navigation.navigate('Juego')} />

      <FlatList
        data={cantidadPartidas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText2}>Partida #{item.id}</Text>
            <Text style={styles.cardSubText}>Resultado: {item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  listContainer: { paddingTop: 24 },
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  cardText2: { fontSize: 16, fontWeight: '600' },
  cardSubText: { fontSize: 14, color: '#555', marginTop: 4 },
});
