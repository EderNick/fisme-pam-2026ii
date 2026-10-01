import { useState } from "react";

const useContador = () => {
    const [count, setCount] = useState(10);

    const aumentar = () => {
        setCount(count + 1);
    }

    const decrementar = () => {
        setCount(count - 1);
    }

    const reiniciar = () => {
        // ...................
        // ...por completar...
        // ...................
    }

    return {
        count,
        aumentar,
        decrementar,
        reiniciar,
    }
}

export default useContador