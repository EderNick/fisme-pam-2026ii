export const Ciudadania = {
    NAC: "nacional",
    EXT: "extranjero",
} as const;
export type Ciudadania = typeof Ciudadania[keyof typeof Ciudadania];

interface Persona {
    nombre: string;
    edad: number;
    apellido: string;
    direccion: Direccion;
    ciudadania: Ciudadania;
}

interface Direccion {
    pais?: string;
    calle: string;
    nro: number;
}

export const ObjetosLiterales = () => {

    const objP: Persona = {
        nombre: "Eder",
        edad: 33,
        apellido: "Figueroa",
        ciudadania: Ciudadania.NAC,
        direccion: {
            //pais: "Perú",
            calle: "Jr. Los Jazminez",
            nro: 123
        }
    };

    return (
        <>
            <h3>Objetos Literales</h3>
            <ul>
                <li>{objP.nombre} {objP.apellido}</li>
                <li>{objP.edad}</li>
                <li>{objP.ciudadania}</li>
                <li>{objP.direccion.calle} {objP.direccion.nro} {objP.direccion.pais}</li>
            </ul>
        </>
    )
}
