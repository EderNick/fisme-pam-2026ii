import { useState } from "react";

export const useContador = () => {

    const [contador, setContador] = useState(10);

    const aumentarValor = (valor: number) => {
        setContador(contador + valor)
    }

    return {
        contador,
        aumentarValor
    }
}
