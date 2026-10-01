import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const { isVerificando, isAutenticado, logIn } = useAuthContext();

    if (isVerificando) {
        return <p>Verificando usuario ...</p>;
    }
    return (
        isAutenticado ? (
            <>
                <h1 className="text-2xl mb-5 font-bold">Bienvenido</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-800 text-white rounded-xl p-2 mt-2"
                >Cerrar Sesión</button>
            </>
        ) : (
            <>
                <h1 className="text-2xl mb-5 font-bold">Login</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-800 text-white rounded-xl p-2 mt-2"
                    onClick={() => logIn("admin@admin.com", "123456")}
                >Ingresar</button>
            </>
        )
    )
}
