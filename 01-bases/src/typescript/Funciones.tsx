export const Funciones = () => {

    // function sumar(a: number, b: number): number {
    //     return a + b;
    // }
    const sumar = (a: number, b: number): number => a + b;


    return (
        <>
            <div className="font-bold">Funciones</div>
            <p>La suma de  5 y 10 es {sumar(5, 10)}</p>
        </>
    )
}
