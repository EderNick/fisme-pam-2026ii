# 📱 Curso Programación de Aplicaciones Móviles (PAM) - Repositorio Central 

¡Bienvenidos al repositorio oficial del curso! Aquí encontrarás de manera organizada todos los proyectos y aplicaciones que desarrollamos paso a paso en las clases semanales.

---

## 🚀 ¿Cómo descargar un proyecto específico para trabajar en tu PC?

GitHub no permite descargar una sola carpeta directamente de forma nativa, pero puedes bajarte **únicamente la app de la clase de hoy** sin necesidad de descargar todo el repositorio completo siguiendo estos sencillos pasos:

### 📥 Paso 1: Descargar la carpeta de la clase
1. Entra a este repositorio y haz clic sobre la carpeta del proyecto que necesitas (por ejemplo, `navegacion-app`).
2. **Copia la URL completa** de la barra de direcciones de tu navegador.
3. Ingresa a la web gratuita [DownGit](https://github.io).
4. Pega la URL que copiaste en el cuadro central y haz clic en el botón **Download**.
5. Descomprime el archivo `.zip` que se descargó en tu computadora.

---

## 🛠️ Configuración inicial en tu PC (¡Obligatorio!)

Una vez que tengas la carpeta del proyecto en tu computadora, debes instalar sus dependencias para poder programar y ejecutar la app. Sigue este orden en tu terminal:

1. **Abre la carpeta del proyecto** en tu terminal o editor de código (Visual Studio Code):
   ```bash
   cd nombre-de-la-carpeta-descargada
   ```
   *(Asegúrate de que tu terminal esté posicionada exactamente donde se encuentra el archivo `package.json`).*

2. **Instala los paquetes y librerías** de Node.js necesarias para el proyecto:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo de Expo**:
   ```bash
   npx expo start
   ```

4. **¡A programar!** 🚀
   Escanea el código QR que aparecerá en tu terminal usando la app **Expo Go** en tu celular (iOS/Android) o presiona `a` si tienes un emulador de Android configurado en tu PC.
