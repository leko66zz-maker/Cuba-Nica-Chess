# Cuba Nica Chess Academy

**Escuela Virtual de Ajedrez | Virtual Chess School**

Disciplina hoy. Fuerza mañana. | Discipline Today. Strength Tomorrow.

## Descripción / Description

Cuba Nica Chess Academy es una plataforma educativa de ajedrez virtual que ofrece:
- 📚 Artículos y análisis de ajedrez
- 📋 Repertorios para Blancas y Negras
- 🎯 Ejercicios interactivos de táctica, estrategia y finales
- 📖 Partidas model comentadas
- 🚀 Integración futura con IA y Lichess

Cuba Nica Chess Academy is a virtual chess education platform offering:
- 📚 Chess articles and analysis
- 📋 Openings repertoires for White and Black
- 🎯 Interactive training: tactics, strategy, endgames
- 📖 Annotated master games
- 🚀 Future AI and Lichess integration

## 🌐 Sitio Web | Website

**URL:** https://leko66zz-maker.github.io/Cuba-Nica-Chess

El sitio está alojado en GitHub Pages y se actualiza automáticamente con cada push a la rama `main`.

The site is hosted on GitHub Pages and updates automatically with each push to `main` branch.

## 📁 Estructura del Proyecto | Project Structure

```
Cuba-Nica-Chess/
├── index.html           # Página principal
├── articles.html        # Artículos de ajedrez (3 artículos modelo)
├── repertoires.html     # Repertorios para Blancas, Negras y partidas modelo
├── training.html        # Entrenamiento: táctica, estrategia, finales (con Lichess placeholder)
├── about.html           # Acerca de la Academia
├── contact.html         # Contacto y formulario
├── train-with-ai.html   # Sección de entrenamiento con IA (placeholder)
├── assets/
│   ├── css/
│   │   └── styles.css   # Estilos principales (diseño elegante oscuro)
│   └── js/
│       └── main.js      # JavaScript para interactividad
└── README.md            # Este archivo
```

## 🎨 Diseño | Design

- **Tema:** Elegancia oscura con acentos dorados y rojos
- **Responsive:** Compatible con dispositivos de escritorio, tablet y móvil
- **Navegación:** Menú sticky en todas las páginas
- **Social:** Enlaces a Facebook y futuras redes sociales

Design aspects:
- **Theme:** Dark elegance with gold and red accents
- **Responsive:** Desktop, tablet, and mobile compatible
- **Navigation:** Sticky menu on all pages
- **Social:** Facebook links and future social media

## ¿Cómo Editar las Páginas? | How to Edit Pages

### 1. Clonar el Repositorio | Clone the Repository

```bash
git clone https://github.com/leko66zz-maker/Cuba-Nica-Chess.git
cd Cuba-Nica-Chess
```

### 2. Editar Contenido HTML | Edit HTML Content

Abre cualquier archivo `.html` (ej: `articles.html`) con tu editor de texto favorito:

Open any `.html` file (e.g., `articles.html`) with your text editor:

```bash
# Ejemplo / Example
nano articles.html
# o / or
code articles.html  # Si tienes VS Code instalado
```

### 3. Estructura Común de Páginas | Common Page Structure

Cada página tiene:
- **Header** con navegación
- **Main content** con la información
- **Footer** con enlaces

Each page has:
- **Header** with navigation
- **Main content** with information
- **Footer** with links

### 4. Agregar Nuevo Artículo | Add New Article

En `articles.html`, duplica la sección `.card` dentro de `.card-grid`:

In `articles.html`, duplicate a `.card` section within `.card-grid`:

```html
<div class="card">
  <p class="card-meta">📅 Publicado: [FECHA] | ✍️ Por: [AUTOR]</p>
  <h3>[TÍTULO DEL ARTÍCULO]</h3>
  <p>[DESCRIPCIÓN]</p>
  <a href="#" class="btn">Leer Más</a>
</div>
```

### 5. Modificar Estilos | Modify Styles

Edita `assets/css/styles.css`:

Edit `assets/css/styles.css`:

- Colores están en `:root` (variables CSS)
- Cambiar `--primary-color`, `--accent-color`, etc. para nuevo tema
- Responsive design está en `@media` queries

Colors are in `:root` (CSS variables)
- Change `--primary-color`, `--accent-color`, etc.
- Responsive design in `@media` queries

### 6. Agregar Interactividad | Add Interactivity

Edita `assets/js/main.js`:

Edit `assets/js/main.js`:

- El menú activo se resalta automáticamente
- Agregar nueva funcionalidad aquí
- Los comentarios muestran dónde irán Lichess/IA en Phase 2

Active menu highlights automatically
- Add new functionality here
- Comments show where Lichess/AI will go in Phase 2

## 📤 Publicar en GitHub Pages | Publish to GitHub Pages

### 1. Hacer Cambios Locales | Make Local Changes

```bash
# Edita los archivos
vi articles.html
```

### 2. Commit y Push | Commit and Push

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Commit con mensaje descriptivo
git commit -m "Agregar nuevos artículos sobre táctica"

# Push a main rama (se publica automáticamente)
git push origin main
```

### 3. Verificar Publicación | Verify Publication

- Después de 1-2 minutos, los cambios estarán en: 
  https://leko66zz-maker.github.io/Cuba-Nica-Chess
  
- After 1-2 minutes, changes will be at:
  https://leko66zz-maker.github.io/Cuba-Nica-Chess

### 4. Solucionar Problemas | Troubleshooting

Si los cambios no aparecen:
- Espera 2-3 minutos más
- Limpia el cache del navegador (Ctrl+Shift+Delete)
- Revisa que el archivo esté en `main` rama

If changes don't appear:
- Wait 2-3 more minutes
- Clear browser cache (Ctrl+Shift+Delete)
- Check file is in `main` branch

## 🔧 Configuración de GitHub Pages | GitHub Pages Setup

El sitio ya está configurado para publicarse automáticamente desde `/`, que contiene archivos HTML.

The site is already configured to publish automatically from `/` containing HTML files.

Para verificar/cambiar la configuración:
1. Ve a **Settings** en el repositorio
2. Baja a **Pages**
3. Verifica que está en "Deploy from a branch" con `main`

To verify/change settings:
1. Go to **Settings** in the repository
2. Scroll to **Pages**
3. Verify it's set to "Deploy from a branch" with `main`

## 📝 Contenido Actual | Current Content

### ✅ Phase 1 Completado (Actual) | Phase 1 Complete (Current)

- ✅ Sitio estático con HTML/CSS/JS puro
- ✅ 6 páginas principales + 1 sección IA
- ✅ 3 artículos de modelo
- ✅ Repertorios para Blancas y Negras
- ✅ Secciones de entrenamiento (táctica, estrategia, finales)
- ✅ Página de contacto con formulario
- ✅ Diseño responsive y elegante
- ✅ Placeholders visible para Lichess
- ✅ Comentarios HTML para Phase 2 (IA, Lichess)

### 🚀 Phase 2 Planeado | Phase 2 Planned

- 🔲 Integración Lichess (puzzles interactivos)
- 🔲 Backend para análisis de partidas
- 🔲 Sistema de IA para coaching personalizado
- 🔲 Base de datos de usuarios y progreso
- 🔲 Comunidad y torneos en línea

## 🎯 Tareas para Phase 2 | Phase 2 Tasks

En `training.html` líneas 120-145, hay comentarios HTML con las instrucciones detalladas:

In `training.html` lines 120-145, there are HTML comments with detailed instructions:

```html
<!-- FUTURE INTEGRATION: Lichess Puzzle API ... -->
```

En `train-with-ai.html` hay placeholders para:
- Chat con IA
- Análisis automático de partidas
- Motor adaptativo

In `train-with-ai.html` there are placeholders for:
- AI chat
- Automatic game analysis
- Adaptive engine

## 🌍 Localización | Localization

Actualmente el sitio está en **Español**.

Para agregar **Inglés**:
1. Duplicar archivos `.html` con sufijo `_en`
2. Traducir contenido
3. Agregar selector de idioma en header

Site is currently in **Spanish**.

To add **English**:
1. Duplicate `.html` files with `_en` suffix
2. Translate content
3. Add language selector in header

## 📞 Contacto | Contact

- **Email:** (Próximamente | Coming Soon)
- **Facebook:** https://www.facebook.com
- **GitHub:** https://github.com/leko66zz-maker

## 📜 Licencia | License

Todos los derechos reservados © 2026 Cuba Nica Chess Academy

All rights reserved © 2026 Cuba Nica Chess Academy

---

**Lema / Motto:** Disciplina hoy. Fuerza mañana. | Discipline Today. Strength Tomorrow.
