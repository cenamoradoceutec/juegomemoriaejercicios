import { createContext } from "react";
import { DatoPartida } from "../Modelos/DatoPartida";

export const juegoContexto =createContext({
    cantidadPartidas:[] as DatoPartida[],
    sumarPartida:(partida: DatoPartida)=>{},
    cartas : [] as number[]
})