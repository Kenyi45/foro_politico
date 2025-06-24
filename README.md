# Foro de Jóvenes Políticos 🌟

Una plataforma web moderna para conectar y empoderar a jóvenes líderes políticos de todo el mundo.

## 🚀 Características

- ✅ **Diseño Moderno**: Interfaz responsive con Tailwind CSS
- ✅ **Multiidioma**: Soporte para español e inglés
- ✅ **Registro Gratuito**: Sistema de registro simple y accesible
- ✅ **Animaciones**: Experiencia fluida con Framer Motion
- ✅ **Galería Interactiva**: Showcase de eventos anteriores
- ✅ **Countdown Timer**: Contador regresivo para el evento
- ✅ **Testimoniales**: Carrusel de testimonios de participantes

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Icons**: Lucide React
- **Estado**: Zustand
- **Build**: Create React App

## ⚙️ Configuración Inicial

### 1. Clonar el Repositorio

```bash
git clone [URL_DEL_REPO]
cd forum-jovenes-politicos
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

```bash
# Copiar el archivo de ejemplo
cp env.example .env

# Editar .env con tus configuraciones
nano .env
```

**Variables disponibles:**
```env
REACT_APP_APP_NAME=Foro de Jóvenes Políticos
REACT_APP_DEFAULT_LANGUAGE=es
REACT_APP_EVENT_DATE=2024-12-31T23:59:59.000Z
REACT_APP_EVENT_LOCATION=Lima, Perú
```

## 🚀 Comandos Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 💡 Uso del Sistema de Registro

### Ejemplo Básico

```tsx
import PaymentButton from './components/payment/PaymentButton';

function App() {
  const handleRegistrationSuccess = (result) => {
    console.log('¡Registro exitoso!', result);
    // Redirigir a página de confirmación
  };

  return (
    <PaymentButton
      description="Registro al Foro"
      customerEmail="usuario@email.com"
      onSuccess={handleRegistrationSuccess}
    />
  );
}
```

## 📁 Estructura del Proyecto

```
forum-jovenes-politicos/
├── src/
│   ├── components/
│   │   ├── payment/           # 📝 Componentes de registro
│   │   │   └── PaymentButton.tsx
│   │   ├── sections/          # Secciones de la página
│   │   └── common/            # Componentes reutilizables
│   ├── services/
│   │   └── locationService.ts # 🌍 Servicio de localización
│   └── ...
└── env.example               # 🔑 Variables de entorno
```

## 🌟 Funcionalidades Principales

### Registro de Participantes
- Formulario de registro simple
- Validación de email
- Confirmación instantánea
- Acceso completo a materiales

### Interfaz Multiidioma
- Soporte para español e inglés
- Cambio dinámico de idioma
- Contenido localizado

### Diseño Responsive
- Optimizado para móviles
- Experiencia de usuario fluida
- Componentes adaptativos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📚 Recursos

- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Desarrollado con ❤️ para el Foro de Jóvenes Políticos**
