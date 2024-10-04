import { Schema, model } from "mongoose"

const EsquemaAlumnos = new Schema({
    nombre: {
        type: String,
    },
    apepat: {
        type: String,
    },
    apemat: {
        type: String,
    },
    edad: {
        type: Number,
    },
    carrera: {
        type: String,
    },
}, {Collection: 'alumnos'} )

export const modeloAlumnos = model("Registro de Alumnos Reprobados", EsquemaAlumnos)