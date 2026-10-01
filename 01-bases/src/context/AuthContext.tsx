import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

export const AuthStatus = {
    CHECK: 'verificando',
    AUTH: 'autenticado',
    NOT_AUTH: 'no-autenticado',
} as const;
export type AuthStatus = typeof AuthStatus[keyof typeof AuthStatus];

interface AuthState {
    status: AuthStatus,
    token?: string,
    user?: User,

    isVerificando: boolean,
    isAutenticado: boolean,

    logIn: (email: string, password: string) => void
};

interface User {
    name: string,
    email: string,
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [estado, setEstado] = useState<AuthStatus>(AuthStatus.CHECK);
    const [usuario, setUsuario] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setEstado(AuthStatus.NOT_AUTH);
        }, 2000);
    }, [])

    const logIn = (email: string, password: string) => {
        setUsuario({
            name: "Eder Figueroa",
            email,  //<---- email: email,
        });
        setEstado(AuthStatus.AUTH);
    };

    const logOut = () => {
        // .......................TAREA PARA EL ESTUDIANTE........................
    }


    return <AuthContext.Provider value={
        {
            status: estado,
            user: usuario,

            //Getter
            isVerificando: estado === AuthStatus.CHECK,
            isAutenticado: estado === AuthStatus.AUTH,

            logIn,  // logIn : logIn,
        }
    } >
        {children}
    </AuthContext.Provider>;

};