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

// Lógica para el Stepper Interactivo de Control de Cambio (Persona 2)
document.addEventListener('DOMContentLoaded', function() {
  const steps = [
    { title: "Paso 1: Necesidad del cambio", desc: "Se reconoce que el sistema necesita una modificación para corregir un defecto o mejorar su capacidad." },
    { title: "Paso 2: Petición de cambio", desc: "El usuario, desarrollador o gerente levanta una petición formal del cambio." },
    { title: "Paso 3: Evaluación del desarrollador", desc: "Se evalúa el mérito técnico, efectos colaterales, impacto global en otros componentes y el costo proyectado." },
    { title: "Paso 4: Reporte de cambio", desc: "Los resultados de la evaluación se documentan en un reporte para que la ACC pueda evaluarlo." },
    { title: "Paso 5: Decisión de la ACC", desc: "La Autoridad de Control de Cambio (ACC) evalúa el reporte y decide si el cambio procede.", showDecision: true },
    { title: "Paso 6: Orden de Cambio de Ingeniería (OCI)", desc: "Se aprobó el cambio. Se genera la OCI detallando qué se hará, sus restricciones y criterios de revisión." },
    { title: "Paso 7: Asignación y Salida (Check-out)", desc: "Se asignan responsables y se extraen los objetos a modificar (check-out) hacia el entorno del desarrollador." },
    { title: "Paso 8: Implementación y Auditoría", desc: "Se realiza el cambio en el código, seguido de una rigurosa revisión técnica." },
    { title: "Paso 9: Entrada (Check-in) y Pruebas", desc: "El objeto modificado reingresa al repositorio (check-in), creando una línea de referencia para control de calidad." },
    { title: "Paso 10: Integración y Distribución", desc: "Se reconstruye y audita la versión, incorporando finalmente el cambio a la nueva liberación oficial del producto." }
  ];

  const rejectedStep = { 
    title: "Cambio Denegado", 
    desc: "La petición ha sido denegada por la ACC. Se informa al usuario de los motivos y el flujo termina aquí." 
  };

  let currentStep = 0;
  let isRejected = false;

  const titleEl = document.getElementById('p2-step-title');
  const descEl = document.getElementById('p2-step-desc');
  const progressEl = document.getElementById('p2-progress');
  const progressBarEl = document.querySelector('.p2-progress-bar');
  
  const btnPrev = document.getElementById('p2-btn-prev');
  const btnNext = document.getElementById('p2-btn-next');
  const btnApprove = document.getElementById('p2-btn-approve');
  const btnDeny = document.getElementById('p2-btn-deny');

  if (!titleEl || !descEl || !progressEl || !btnPrev || !btnNext) return;

  function updateStepper() {
    if (isRejected) {
      titleEl.textContent = rejectedStep.title;
      descEl.textContent = rejectedStep.desc;
      progressEl.style.width = '100%';
      progressEl.style.backgroundColor = 'var(--color-danger, #dc3545)';
      progressBarEl.setAttribute('aria-valuenow', 100);
      
      btnApprove.style.display = 'none';
      btnDeny.style.display = 'none';
      btnNext.style.display = 'none';
      btnPrev.disabled = false;
      return;
    }

    const step = steps[currentStep];
    titleEl.textContent = step.title;
    descEl.textContent = step.desc;

    const progressPercentage = (currentStep / (steps.length - 1)) * 100;
    progressEl.style.width = progressPercentage + '%';
    progressEl.style.backgroundColor = 'var(--color-primary, #0056b3)';
    progressBarEl.setAttribute('aria-valuenow', Math.round(progressPercentage));

    btnPrev.disabled = currentStep === 0;

    if (step.showDecision) {
      btnNext.style.display = 'none';
      btnApprove.style.display = 'inline-block';
      btnDeny.style.display = 'inline-block';
    } else {
      btnNext.style.display = 'inline-block';
      btnApprove.style.display = 'none';
      btnDeny.style.display = 'none';
      btnNext.disabled = currentStep === steps.length - 1;
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStepper();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (isRejected) {
      isRejected = false;
    } else if (currentStep > 0) {
      currentStep--;
    }
    updateStepper();
  });

  btnApprove.addEventListener('click', () => {
    currentStep++;
    updateStepper();
  });

  btnDeny.addEventListener('click', () => {
    isRejected = true;
    updateStepper();
  });

  updateStepper();
});
// Lógica para Checklist de Auditoría (Persona 2)
document.addEventListener('DOMContentLoaded', function() {
  const auditChecks = document.querySelectorAll('.p2-audit-chk');
  const auditProgress = document.getElementById('p2-audit-progress');
  const auditSuccess = document.getElementById('p2-audit-success');
  const btnResetAudit = document.getElementById('p2-btn-reset-audit');

  if (auditChecks.length > 0 && auditProgress) {
    function updateAudit() {
      let checkedCount = 0;
      auditChecks.forEach(chk => {
        if (chk.checked) checkedCount++;
      });
      
      const percentage = (checkedCount / auditChecks.length) * 100;
      auditProgress.style.width = percentage + '%';
      auditProgress.parentElement.setAttribute('aria-valuenow', Math.round(percentage));

      if (checkedCount === auditChecks.length) {
        auditSuccess.style.display = 'block';
        btnResetAudit.style.display = 'inline-block';
      } else {
        auditSuccess.style.display = 'none';
        btnResetAudit.style.display = 'none';
      }
    }

    auditChecks.forEach(chk => {
      chk.addEventListener('change', updateAudit);
    });

    if (btnResetAudit) {
      btnResetAudit.addEventListener('click', () => {
        auditChecks.forEach(chk => chk.checked = false);
        updateAudit();
      });
    }
  }
});
