export const TiposBasicos = () => {
    var nombre: string = 'Eder';
    var edad: number = 33;
    var direccion: string = "Jr. Los Jazmines 123";

    const tecnologias: string[] = ["JavaScript", "Python", "TypeScript", "React", "React Native"];

    return (
        <>
            <h1>Tipos Básicos</h1>
            <p>Nombre : {nombre}</p>
            <p>Edad : {edad}</p>
            <p>Direccion : {direccion}</p>
            <p>{tecnologias.join(' - ')}</p>
        </>
    )
}
