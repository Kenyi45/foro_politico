# Configuración de la Sección de Video

## 📹 Sección de Video de Lanzamiento

Se ha agregado una nueva sección para mostrar el video de presentación del lanzamiento del III Foro Panamericano de Jóvenes Políticos.

### 🎯 Características Implementadas

- **Sección dedicada**: Ubicada entre "Sobre Nosotros" y "Organizadores"
- **Thumbnail interactivo**: Con efecto hover y botón de reproducción
- **Modal responsivo**: Se abre al hacer clic en el thumbnail
- **Controles de cierre**: Botón X y tecla Escape
- **Diseño profesional**: Gradientes y animaciones suaves

### 🔧 Personalización

#### 1. Cambiar la URL del Video

En `src/App.tsx`, línea ~280, reemplaza la URL de YouTube:

```tsx
<iframe
  src="https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1"
  title="Video de Lanzamiento - III Foro Panamericano de Jóvenes Políticos"
  className="w-full h-full"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

#### 2. Agregar Thumbnail Personalizado

Reemplaza el div con gradiente por una imagen:

```tsx
{/* Thumbnail Image */}
<img 
  src="/path/to/your/thumbnail.jpg" 
  alt="Video de Lanzamiento"
  className="w-full h-64 sm:h-80 md:h-96 object-cover"
/>
```

#### 3. Personalizar Textos

Modifica los textos en la sección:

```tsx
<h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
  Conoce el{' '}
  <span className="text-primary-700 font-extrabold">Lanzamiento</span>
</h2>

<p className="subtitle-section text-neutral-600 max-w-3xl mx-auto mb-8">
  Tu descripción personalizada aquí...
</p>
```

### 📱 Responsive Design

- **Mobile**: Thumbnail de 256px de altura
- **Tablet**: Thumbnail de 320px de altura  
- **Desktop**: Thumbnail de 384px de altura
- **Modal**: Aspect ratio 16:9 responsivo

### 🎨 Estilos Aplicados

- **Gradiente de fondo**: `from-primary-50 to-accent-50`
- **Sombras**: `shadow-2xl` para profundidad
- **Animaciones**: Hover effects y transiciones suaves
- **Backdrop blur**: Efecto de desenfoque en el modal

### 🔗 Navegación

La sección está incluida en el menú de navegación como "Video" y se puede acceder directamente desde el header.

### 📋 Checklist de Personalización

- [ ] Reemplazar URL del video de YouTube
- [ ] Agregar thumbnail personalizado (opcional)
- [ ] Personalizar textos y descripción
- [ ] Verificar que el video se reproduce correctamente
- [ ] Probar en diferentes dispositivos
- [ ] Verificar accesibilidad (teclado, lectores de pantalla)

### 🚀 Próximos Pasos

1. Sube tu video a YouTube o Vimeo
2. Obtén el ID del video
3. Reemplaza la URL en el código
4. Agrega una imagen thumbnail si lo deseas
5. Personaliza los textos según tu contenido 