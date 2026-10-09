# Resumen Interactivo: El Proceso ACS (Pressman Cap. 22.3)

## Integrantes
- **Persona 1**: [Tu Nombre / Integrante 1] — *Secciones: Introducción, Identificación de Objetos (22.3.1), Control de Versión (22.3.2) y Diagrama Interactivo de Capas Concéntricas.*
- **Persona 2**: [Nombre del Integrante 2] — *Secciones: Control de Cambio (22.3.3) y Auditoría de la Configuración (22.3.4).*
- **Persona 3**: [Nombre del Integrante 3] — *Secciones: Reporte de Estado (22.3.5), Conclusiones y Referencias.*

## Descripción
Este proyecto es una guía web interactiva y didáctica basada en la sección 22.3 ("El proceso ACS") del libro *Ingeniería del Software: Un enfoque práctico* (8va edición) de Roger S. Pressman y Bruce R. Maxim. Aborda los conceptos fundamentales de la Administración de la Configuración del Software (ACS / SCM), la identificación de elementos de configuración (ICS), el control de versiones, el control de cambios, las auditorías y los reportes de estado.

## Objetivo
Facilitar la comprensión conceptual y práctica del proceso ACS mediante explicaciones sintetizadas con nuestras propias palabras, tablas comparativas, componentes visuales e interactivos accesibles y responsivos.

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica de la página.
- **CSS3**: Variables CSS (custom properties), Flexbox, CSS Grid y diseño responsivo sin librerías externas.
- **JavaScript (ES6+)**: Manipulación del DOM, programación basada en eventos con IIFE para evitar contaminación del ámbito global.

## Estructura del Proyecto
```text
.
├── index.html          # Estructura principal HTML5 con las 8 secciones
├── css/
│   └── styles.css      # Hoja de estilos compartida con bloques por integrante
├── js/
│   └── script.js       # Lógica JavaScript interactiva modularizada por IIFE
├── assets/
│   └── images/         # Recursos gráficos e imágenes del proyecto
└── README.md           # Documentación del proyecto
```

## Participación de Integrantes
- **Persona 1**:
  - Creación del esqueleto base del proyecto (`index.html`, `styles.css`, `script.js`, `README.md`).
  - Redacción y maquetación de `introduccion`, `identificacion` (22.3.1) y `control-version` (22.3.2).
  - Desarrollo del diagrama interactivo de capas concéntricas (Figura 22.4 de Pressman).
- **Persona 2**:
  - Desarrollo de las secciones `control-cambio` (22.3.3) y `auditoria` (22.3.4).
  - Componentes interactivos correspondientes a flujo de cambio y auditoría.
- **Persona 3**:
  - Desarrollo de las secciones `reporte` (22.3.5), `conclusion` y `referencia`.
  - Integración final y aseguramiento de estilo global.

## Cómo Visualizarlo Localmente
1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/TU-USUARIO/NOMBRE-REPOSITORIO.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari). No requiere servidor local ni dependencias Node.js.

## Enlace a GitHub Pages
[Ver Resumen Interactivo en GitHub Pages](https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/)
