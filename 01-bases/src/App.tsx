import './App.css'
import { AuthProvider } from './context/AuthContext';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';
// import { Contador } from './typescript/Contador';
import { LoginPage } from './typescript/LoginPage';

function App() {



  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
        <h1 className='text-4xl mb-5 font-bold'>REACT + VITE + TS</h1>

        {/* <TiposBasicos></TiposBasicos>
      <ObjetosLiterales />
      <Funciones />
        <Contador /> */}
        <LoginPage></LoginPage>

      </div>
    </AuthProvider>
  )
}

export default App
