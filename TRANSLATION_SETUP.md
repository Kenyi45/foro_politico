# Sistema de Traducción - Español, Inglés y Portugués

## 🌍 Funcionalidad de Traducción Implementada

Se ha implementado un sistema completo de internacionalización que permite cambiar entre español, inglés y portugués en tiempo real.

### 🎯 Características

- **3 idiomas soportados**: Español (ES), Inglés (EN), Portugués (PT)
- **Selector visual**: Dropdown con banderas y nombres de idiomas
- **Persistencia**: El idioma seleccionado se guarda en localStorage
- **Traducción completa**: Todos los textos de la web están traducidos
- **Responsive**: Funciona en móviles y desktop

### 📍 Ubicación del Selector

El selector de idioma se encuentra en el header, junto al botón de registro:
- **Desktop**: Muestra bandera + nombre del idioma
- **Mobile**: Solo muestra la bandera para ahorrar espacio

### 🔧 Cómo Usar

#### Para Usuarios:
1. **Hacer clic** en el icono del globo 🌍 en el header
2. **Seleccionar** el idioma deseado (🇪🇸 Español, 🇺🇸 English, 🇧🇷 Português)
3. **El cambio es inmediato** y se aplica a toda la web

#### Para Desarrolladores:

##### Agregar Nuevas Traducciones:
En `src/contexts/LanguageContext.tsx`, agregar nuevas claves:

```tsx
// En cada idioma (es, en, pt)
'new.key': 'Traducción en español',
'new.key': 'Translation in English',
'new.key': 'Tradução em português',
```

##### Usar en Componentes:
```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <h1>{t('my.title')}</h1>;
};
```

### 📋 Traducciones Incluidas

#### Secciones Traducidas:
- ✅ **Navbar**: Menú de navegación
- ✅ **Hero Section**: Título, slogan, estadísticas
- ✅ **About Section**: Misión, valores, descripción
- ✅ **Features Section**: Características del foro
- ✅ **Footer**: Enlaces, contacto, copyright

#### Claves de Traducción Principales:
```tsx
// Navegación
'nav.inicio' → 'Home' / 'Início'
'nav.sobre' → 'About' / 'Sobre o Fórum'
'nav.registro' → 'Register Now' / 'Registre-se Agora'

// Hero
'hero.slogan' → 'DEFENDING FREEDOM AGAINST' / 'DEFENDENDO A LIBERDADE CONTRA O'
'hero.cta.participate' → 'Join the Forum' / 'Participe do Fórum'

// About
'about.title' → 'About the' / 'Sobre o'
'about.mission.title' → 'Mission: Defending Freedom' / 'Missão: Defendendo a Liberdade'
```

### 🎨 Personalización del Selector

#### Cambiar Banderas:
En `src/components/common/LanguageSelector.tsx`:

```tsx
const languageFlags = {
  es: '🇪🇸', // Cambiar por otra bandera
  en: '🇺🇸',
  pt: '🇧🇷'
};
```

#### Cambiar Nombres:
```tsx
const languageNames = {
  es: 'Español',
  en: 'English', 
  pt: 'Português'
};
```

### 🔄 Agregar Nuevos Idiomas

1. **Agregar el idioma** al array `availableLanguages`:
```tsx
const availableLanguages = ['es', 'en', 'pt', 'fr']; // Agregar francés
```

2. **Agregar traducciones** en el objeto `translations`:
```tsx
fr: {
  'nav.inicio': 'Accueil',
  'nav.sobre': 'À propos',
  // ... más traducciones
}
```

3. **Agregar bandera y nombre**:
```tsx
const languageFlags = {
  es: '🇪🇸',
  en: '🇺🇸', 
  pt: '🇧🇷',
  fr: '🇫🇷' // Nueva bandera
};
```

### 📱 Responsive Design

- **Desktop**: Muestra bandera + nombre completo
- **Tablet**: Muestra bandera + nombre abreviado
- **Mobile**: Solo muestra bandera

### 🚀 Próximos Pasos

1. **Revisar traducciones**: Verificar que todas las traducciones sean precisas
2. **Agregar más contenido**: Traducir secciones adicionales según se agreguen
3. **Optimizar**: Considerar lazy loading de traducciones para mejor rendimiento
4. **SEO**: Agregar meta tags de idioma para mejor indexación

### 🛠️ Comandos Útiles

```bash
# Buscar claves de traducción no utilizadas
grep -r "t('" src/ --include="*.tsx" | cut -d"'" -f2 | sort | uniq

# Buscar claves faltantes
grep -r "t('" src/ --include="*.tsx" | cut -d"'" -f2 | sort | uniq > used_keys.txt
```

### 📞 Soporte

Para agregar nuevas traducciones o modificar el sistema:
1. Editar `src/contexts/LanguageContext.tsx`
2. Agregar las claves en los 3 idiomas
3. Usar `t('key')` en los componentes
4. Probar en todos los idiomas 