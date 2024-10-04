import { modeloAlumnos } from "../models/almno.model.js";

// Insertar un nuevo alumno
modeloAlumnos.create([
    {
        "nombre": "Diego",
        "apepat": "Salvador",
        "apemat": "Ramirez",
        "edad": 21,
        "carrera": "IT",
    },
    {
        "nombre": "Scarlet",
        "apepat": "Viscencio",
        "apemat": "Rodriguez",
        "edad": 28,
        "carrera": "IT",
    },
    {
        "nombre": "Jorge",
        "apepat": "Motantes",
        "apemat": "Muñoz",
        "edad": 21,
        "carrera": "IT",
    },
    {
        "nombre": "Francisco Javier",
        "apepat": "Melendez",
        "apemat": "Esparza",
        "edad": 21,
        "carrera": "IT",
    },
    {
        "nombre": "Edwin",
        "apepat": "Sedano",
        "apemat": "Ruiz",
        "edad": 21,
        "carrera": "IT",
    },
])

export const test = () => {
    console.log("Se han creado los alumnos");
}