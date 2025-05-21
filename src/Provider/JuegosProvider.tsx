import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla';
import {juegoContexto} from '../Context/JuegoContext'
import { DatoPartida } from '../Modelos/DatoPartida';

export default function JuegosProvider(props:Plantilla) {

    const [cantidadPartidas, setCantidadPartidas] =   useState<DatoPartida[]>([]);
  const [cartas, setCartas] =useState<number[]>([1,2,3,4,1,2,3,4])

  function sumarPartida(partida:DatoPartida){
    setCantidadPartidas( [...cantidadPartidas, partida])
  }
  return (
    <juegoContexto.Provider value={{cantidadPartidas,cartas,sumarPartida}}>
      {props.children}
    </juegoContexto.Provider>
  )
}

export function useJuegoContext(){
    return useContext(juegoContexto)
}