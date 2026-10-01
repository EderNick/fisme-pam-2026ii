import { useContador } from "../hooks/useContador"

export const Contador = () => {

    const { contador, aumentarValor } = useContador();

    return (
        <>
            <h3 className="font-bold">Contador</h3>
            <span>Valor: {contador}</span>
            <button
                className="p-2 bg-blue-500 rounded-xl hover:bg-blue-700 text-white w-10"
                onClick={() => aumentarValor(1)} >
                +1
            </button>
            <button
                className="p-2 bg-blue-500 rounded-xl hover:bg-blue-700 text-white w-10"
                onClick={() => aumentarValor(- 1)} >
                -1
            </button>
        </>
    )
}
