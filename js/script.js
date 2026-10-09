/**
 * PROCESO ACS (ADMINISTRACIÓN DE LA CONFIGURACIÓN DEL SOFTWARE)
 * Archivo de scripts interactivos dividido por secciones de trabajo.
 */

// ==========================================================================
// ===== SECCIÓN P1: Introducción, Identificación y Control de Versión =====
// ==========================================================================
(function () {
  'use strict';

  // Datos explicativos para las capas concéntricas del Proceso ACS (Figura 22.4 de Pressman)
  const capasInfo = {
    1: {
      titulo: '1. Identificación de Objetos de Configuración (ICS)',
      descripcion: 'Es el núcleo del proceso ACS. Consiste en definir, nombrar y estructurar organizadamente todos los Elementos de Configuración del Software (documentos, modelos, código, pruebas). Establece las características del objeto y las relaciones <parte de> e <interrelacionado>.'
    },
    2: {
      titulo: '2. Control de Versión',
      descripcion: 'Capa que gestiona las distintas versiones y evoluciones de los ICS creadas durante el ciclo de vida. Combina procedimientos y herramientas para mantener un repositorio, controlar historiales, facilitar la elaboración (build) y rastrear conflictos o problemas.'
    },
    3: {
      titulo: '3. Control de Cambio',
      descripcion: 'Combina la evaluación humana y herramientas automáticas para evaluar el impacto, costo y necesidad de cada solicitud de modificación antes de aplicarla a la línea de referencia (baseline).'
    },
    4: {
      titulo: '4. Auditoría de la Configuración del Software',
      descripcion: 'Proceso de aseguramiento de calidad que inspecciona los cambios realizados para comprobar formalmente que se cumplieron los requisitos, especificaciones y pruebas sin alterar componentes no autorizados.'
    },
    5: {
      titulo: '5. Reporte del Estado de la Configuración (SCSR)',
      descripcion: 'Capa externa que brinda transparencia al proyecto. Genera informaciones periódicas sobre qué cambios se hicieron, quién los solicitó, cuándo se aprobaron y cuál es el estado actual de cada ICS.'
    }
  };

  function initDiagramaConcentrico() {
    const capas = document.querySelectorAll('.p1-capa');
    const infoTitle = document.getElementById('p1-info-title');
    const infoDesc = document.getElementById('p1-info-desc');

    if (!capas.length || !infoTitle || !infoDesc) return;

    function activarCapa(capaElement) {
      const nivel = capaElement.getAttribute('data-capa');
      const data = capasInfo[nivel];

      if (!data) return;

      // Desactivar todas las capas
      capas.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });

      // Activar la capa seleccionada
      capaElement.classList.add('active');
      capaElement.setAttribute('aria-selected', 'true');

      // Actualizar la información visual con animación suave
      infoTitle.textContent = data.titulo;
      infoDesc.textContent = data.descripcion;
    }

    capas.forEach(capa => {
      // Evento de Clic
      capa.addEventListener('click', function () {
        activarCapa(this);
      });

      // Accesibilidad por Teclado (Enter y Espacio)
      capa.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activarCapa(this);
        }
      });
    });
  }

  // Inicializar solo cuando el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', function () {
    initDiagramaConcentrico();
  });
})();

// ==========================================================================
// ===== SECCIÓN P2: Control de Cambio y Auditoría =========================
// ==========================================================================
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Código interactivo de la Persona 2
  });
})();

// ==========================================================================
// ===== SECCIÓN P3: Reporte de Estado, Conclusión y Referencias =============
// ==========================================================================
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Código interactivo de la Persona 3
  });
})();
