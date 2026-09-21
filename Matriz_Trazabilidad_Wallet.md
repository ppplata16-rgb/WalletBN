# MATRIZ DE TRAZABILIDAD DEL PROYECTO — PLATAFORMA WALLET FINANCIERA INTEGRAL

| Campo | Valor |
|---|---|
| Documento | Matriz de trazabilidad del proyecto |
| Versión | 1.5 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Documentos de referencia | `Especificacion_Funcional_Wallet_Financiera_Integral.md` (v1.12) · `Anexos_Complementarios_Alcance_Wallet.md` (v1.10) · `Catalogo_Integraciones_Wallet.md` (v1.2) · `Registro_Decisiones_Wallet.md` (v1.2) · `Matriz_Reglas_Negocio_Wallet.md` (v1.1) |
| Estructura y reglas de uso | Anexo F, apartado F.2 |
| Granularidad | Una fila por funcionalidad declarada en las secciones 1 a 27 |

## Propósito

Esta matriz es el artefacto donde se declara el estado de madurez de cada dominio y funcionalidad. Constituye la fuente de consulta para determinar qué se encuentra suficientemente definido para ser estimado y desarrollado.

## Convenciones

- **ID:** `TRZ-<sección>-<secuencial>`. Los identificadores no se reutilizan: una funcionalidad retirada conserva su identificador y se marca como tal.
- **Estado de madurez:** Objetivo, En definición, Habilitado para desarrollo u Operativo, conforme a la sección 30 y al Anexo H. Los valores declarados son provisionales y deberán ratificarse al iniciar la planificación de cada fase.
- **Fase prevista:** fase 1 a 7 conforme a la sección 31, o "No aplica".
- **Dominio:** dominio de la arquitectura conforme a la sección 20. Se utiliza **Transversal** para las capacidades que aplican a múltiples dominios y no se asignan a uno único.
- **Dependencias principales:** códigos de las integraciones del catálogo (prefijo `INT-`, definidas en el Anexo E y desarrolladas en `Catalogo_Integraciones_Wallet.md`) y de las decisiones del registro (prefijo `DJ-`, definidas en el Anexo J y desarrolladas en `Registro_Decisiones_Wallet.md`) que condicionan la funcionalidad.
- **Responsable funcional** y **Evidencia:** `TBD` mientras el proyecto no los asigne.
- **Reglas asociadas:** identificadores de la matriz de reglas de negocio mantenida en `Matriz_Reglas_Negocio_Wallet.md`.
- **Criterios de aceptación:** los criterios generales del Anexo I aplican a toda funcionalidad; los criterios específicos se incorporan a esta matriz cuando se definan.
- **TBD:** por definir. Deberá cerrarse antes de que la funcionalidad alcance el estado "Habilitado para desarrollo".

## Resumen por sección

| Sección | Capacidad | Estado de madurez | Fase prevista | Filas |
|---|---|---|---|---|
| 1 | Registro, identidad y vinculación | En definición | 1 | 15 |
| 2 | Core Wallet y administración de fondos | En definición | 1 | 25 |
| 3 | Tarjetas y medios de pago | En definición | 1 | 22 |
| 4 | Pagos y transferencias | En definición | 1 | 23 |
| 5 | Seguridad y cumplimiento | En definición | 1 | 3 |
| 6 | Motor de riesgo y antifraude | En definición | 1 | 3 |
| 7 | Wallet Familiar y Dependientes | En definición | 2 | 18 |
| 8 | Wallet Empresarial | En definición | 2 | 22 |
| 9 | Adelanto Salarial (EWA) | En definición | 3 | 18 |
| 10 | Criptomonedas y activos digitales | Objetivo | 5 | 15 |
| 11 | Crédito y financiación | Objetivo | 4 | 17 |
| 12 | Marketplace Financiero | En definición | 4 | 19 |
| 13 | Open Banking e integraciones financieras | En definición | 6 | 17 |
| 14 | Lealtad, beneficios y recompensas | En definición | 2 | 15 |
| 15 | Notificaciones y comunicaciones | En definición | 1 y 2 | 2 |
| 16 | Backoffice administrativo y operativo | En definición | 1 y 2 | 3 |
| 17 | Conciliación, compensación y liquidación | En definición | 1 y 2 | 4 |
| 18 | Analítica e inteligencia financiera | En definición | 1 y 2 | 3 |
| 19 | Administración y configuración de productos | En definición | 1 y 2 | 2 |
| 20 | Arquitectura funcional | En definición | 1 | 3 |
| 21 | Extensibilidad y ecosistema de aliados | En definición | 7 | 4 |
| 22 | Modelo de marca y presencia de terceros | En definición | 7 | 2 |
| 23 | Experiencia unificada y descubrimiento | En definición | 7 | 3 |
| 24 | Verticales y servicios cotidianos | En definición | 7 | 2 |
| 25 | Crecimiento, campañas y experimentación | En definición | 7 | 3 |
| 26 | Gobernanza de datos y confianza del ecosistema | En definición | 7 | 3 |
| 27 | Modelo de ingresos de la plataforma | En definición | 7 | 2 |
| 28 a 32 | Premisas, privacidad, madurez, fases y diferenciadores | No aplica | No aplica | 5 |
| **Total** | | | | **273** |

El resumen presenta un valor agregado por sección, útil mientras la sección sea homogénea. El estado vigente y exigible es el de cada fila de la matriz: ante cualquier diferencia, prevalece el estado declarado por funcionalidad.

---

## Matriz

### Sección 1 — Registro, identidad y vinculación

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-01-001 | Identidad y acceso | Registro mediante número de teléfono y/o correo electrónico | 1 | En definición | 1 | INT-001 | TBD | — | Anexo I | TBD |
| TRZ-01-002 | Identidad y acceso | Verificación de teléfono y correo electrónico | 1 | En definición | 1 | INT-001, INT-011, INT-013 | TBD | RB-030 | Anexo I | TBD |
| TRZ-01-003 | Clientes | Creación y administración del perfil del cliente | 1 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-01-004 | KYC/AML | KYC para personas naturales | 1 | En definición | 1 | INT-002 | TBD | RB-003 | Anexo I | TBD |
| TRZ-01-005 | KYC/AML | KYB para personas jurídicas | 1 | En definición | 1 | INT-002 | TBD | — | Anexo I | TBD |
| TRZ-01-006 | KYC/AML | Validación de documentos de identidad | 1 | En definición | 1 | INT-002 | TBD | — | Anexo I | TBD |
| TRZ-01-007 | KYC/AML | Prueba de vida | 1 | En definición | 1 | INT-003 | TBD | — | Anexo I | TBD |
| TRZ-01-008 | KYC/AML | Validación biométrica facial | 1 | En definición | 1 | INT-003 | TBD | RB-027 | Anexo I | TBD |
| TRZ-01-009 | KYC/AML | Validación contra listas de sanciones, PEP y controles AML | 1 | En definición | 1 | INT-004 | TBD | — | Anexo I | TBD |
| TRZ-01-010 | Clientes | Gestión de beneficiarios | 1 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-01-011 | Identidad y acceso | Registro y administración de dispositivos autorizados | 1 | En definición | 1 | — | TBD | RB-031 | Anexo I | TBD |
| TRZ-01-012 | Identidad y acceso | Recuperación segura de cuenta | 1 | En definición | 1 | INT-001 | TBD | RB-031 | Anexo I | TBD |
| TRZ-01-013 | Consentimiento y acceso de terceros | Gestión de consentimientos | 1 | En definición | 1 | DJ-021 | TBD | RB-009, RB-032, RB-033 | Anexo I | TBD |
| TRZ-01-014 | Clientes | Aceptación y versionamiento de contratos, términos y condiciones | 1 | En definición | 1 | INT-024 | TBD | — | Anexo I | TBD |
| TRZ-01-015 | KYC/AML | Actualización periódica de información de cumplimiento | 1 | En definición | 1 | — | TBD | RB-003 | Anexo I | TBD |

### Sección 2 — Core Wallet y administración de fondos

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-02-001 | Wallet | Creación y administración de Wallets | 2 | En definición | 1 | — | TBD | RB-011 | Anexo I | TBD |
| TRZ-02-002 | Wallet | Saldo disponible | 2 | En definición | 1 | DJ-005 | TBD | RB-018 | Anexo I | TBD |
| TRZ-02-003 | Wallet | Saldo retenido | 2 | En definición | 1 | DJ-005 | TBD | RB-015 | Anexo I | TBD |
| TRZ-02-004 | Wallet | Saldo pendiente | 2 | En definición | 1 | — | TBD | RB-015 | Anexo I | TBD |
| TRZ-02-005 | Wallet | Historial detallado de movimientos | 2 | En definición | 1 | — | TBD | RB-012 | Anexo I | TBD |
| TRZ-02-006 | Wallet | Estados de cuenta | 2 | En definición | 1 | — | TBD | RB-017 | Anexo I | TBD |
| TRZ-02-007 | Wallet | Wallets multidivisa | 2 | En definición | 5 | INT-018 | TBD | RB-017 | Anexo I | TBD |
| TRZ-02-008 | Transferencias | Transferencias entre usuarios de la plataforma | 2 | En definición | 1 | — | TBD | RB-001, RB-011 | Anexo I | TBD |
| TRZ-02-009 | Transferencias | Transferencias entre cuentas propias | 2 | En definición | 1 | — | TBD | RB-011 | Anexo I | TBD |
| TRZ-02-010 | Wallet | Recepción de fondos | 2 | En definición | 1 | INT-009 | TBD | — | Anexo I | TBD |
| TRZ-02-011 | Wallet | Carga de saldo mediante medios habilitados | 2 | En definición | 1 | INT-010, INT-009 | TBD | RB-013 | Anexo I | TBD |
| TRZ-02-012 | Wallet | Retiro de fondos | 2 | En definición | 1 | INT-009 | TBD | RB-011 | Anexo I | TBD |
| TRZ-02-013 | Transferencias | Transferencias hacia cuentas bancarias | 2 | En definición | 1 | INT-009 · DJ-007 | TBD | RB-011 | Anexo I | TBD |
| TRZ-02-014 | Pagos | Solicitudes de dinero | 2 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-02-015 | Pagos | División de pagos | 2 | En definición | 1 | — | TBD | RB-014 | Anexo I | TBD |
| TRZ-02-016 | Pagos | Pagos recurrentes | 2 | En definición | 1 | — | TBD | RB-010 | Anexo I | TBD |
| TRZ-02-017 | Transversal | Límites diarios, semanales y mensuales | 2 | En definición | 1 | — | TBD | RB-011 | Anexo I | TBD |
| TRZ-02-018 | Transversal | Comisiones configurables por producto, canal u operación | 2 | En definición | 1 | DJ-019 | TBD | RB-025, RB-048 | Anexo I | TBD |
| TRZ-02-019 | Wallet | Retenciones | 2 | En definición | 1 | — | TBD | RB-015 | Anexo I | TBD |
| TRZ-02-020 | Ledger | Reversos | 2 | En definición | 1 | — | TBD | RB-026 | Anexo I | TBD |
| TRZ-02-021 | Ledger | Devoluciones | 2 | En definición | 1 | — | TBD | RB-026 | Anexo I | TBD |
| TRZ-02-022 | Wallet | Bloqueos de fondos | 2 | En definición | 1 | — | TBD | RB-005 | Anexo I | TBD |
| TRZ-02-023 | Wallet | Referencias y conceptos de transacción | 2 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-02-024 | Ledger | Ledger financiero de doble entrada | 2 | En definición | 1 | DJ-005 | TBD | RB-012, RB-013, RB-014, RB-015, RB-016, RB-017 | Anexo I | TBD |
| TRZ-02-025 | Wallet | Custodia y respaldo de fondos | 2 | En definición | 1 | INT-008 · DJ-005 | TBD | RB-018 | Anexo I | TBD |

### Sección 3 — Tarjetas y medios de pago

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-03-001 | Tarjetas | Solicitud de tarjeta | 3 | En definición | 1 | INT-005 · DJ-006 | TBD | RB-002 | Anexo I | TBD |
| TRZ-03-002 | Tarjetas | Emisión | 3 | En definición | 1 | INT-005, INT-006 | TBD | — | Anexo I | TBD |
| TRZ-03-003 | Tarjetas | Activación | 3 | En definición | 1 | INT-005 | TBD | — | Anexo I | TBD |
| TRZ-03-004 | Tarjetas | Consulta segura de datos de tarjeta | 3 | En definición | 1 | INT-023 | TBD | RB-020 | Anexo I | TBD |
| TRZ-03-005 | Tarjetas | Gestión de PIN | 3 | En definición | 1 | INT-005 | TBD | RB-020 | Anexo I | TBD |
| TRZ-03-006 | Tarjetas | Bloqueo y desbloqueo | 3 | En definición | 1 | — | TBD | RB-022 | Anexo I | TBD |
| TRZ-03-007 | Tarjetas | Cancelación | 3 | En definición | 1 | — | TBD | RB-022 | Anexo I | TBD |
| TRZ-03-008 | Tarjetas | Reposición | 3 | En definición | 1 | INT-005 | TBD | RB-021 | Anexo I | TBD |
| TRZ-03-009 | Tarjetas | Gestión de vencimiento | 3 | En definición | 1 | INT-005 | TBD | RB-019 | Anexo I | TBD |
| TRZ-03-010 | Tarjetas | Configuración de límites | 3 | En definición | 1 | — | TBD | RB-002, RB-011 | Anexo I | TBD |
| TRZ-03-011 | Tarjetas | Habilitación o restricción de compras físicas | 3 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-03-012 | Tarjetas | Habilitación o restricción de compras en línea | 3 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-03-013 | Tarjetas | Habilitación o restricción de compras internacionales | 3 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-03-014 | Tarjetas | Habilitación o restricción de retiros en ATM | 3 | En definición | 1 | INT-007 | TBD | — | Anexo I | TBD |
| TRZ-03-015 | Tarjetas | NFC y pagos contactless | 3 | En definición | 1 | INT-007 | TBD | — | Anexo I | TBD |
| TRZ-03-016 | Tarjetas | Tokenización | 3 | En definición | 1 | INT-023 | TBD | RB-020 | Anexo I | TBD |
| TRZ-03-017 | Tarjetas | Integración con wallets móviles | 3 | En definición | 1 | INT-007, INT-023 | TBD | — | Anexo I | TBD |
| TRZ-03-018 | Tarjetas | Consulta de autorizaciones | 3 | En definición | 1 | INT-006 | TBD | — | Anexo I | TBD |
| TRZ-03-019 | Tarjetas | Historial de transacciones | 3 | En definición | 1 | — | TBD | RB-012 | Anexo I | TBD |
| TRZ-03-020 | Tarjetas | Gestión de transacciones rechazadas | 3 | En definición | 1 | INT-006 | TBD | — | Anexo I | TBD |
| TRZ-03-021 | Tarjetas | Gestión de disputas y contracargos | 3 | En definición | 1 | INT-007 · DJ-011 | TBD | RB-023 | Anexo I | TBD |
| TRZ-03-022 | Tarjetas | Ciclo de vida de la tarjeta (estados y transiciones) | 3 | En definición | 1 | — | TBD | RB-019, RB-022 | Anexo I | TBD |

### Sección 4 — Pagos y transferencias

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-04-001 | Pagos | P2P: persona a persona | 4 | En definición | 1 | — | TBD | RB-001 | Anexo I | TBD |
| TRZ-04-002 | Pagos | P2M: persona a comercio | 4 | En definición | 2 | INT-010 | TBD | RB-025 | Anexo I | TBD |
| TRZ-04-003 | Transferencias | Transferencias entre Wallets | 4 | En definición | 1 | — | TBD | RB-001 | Anexo I | TBD |
| TRZ-04-004 | Transferencias | Transferencias bancarias | 4 | En definición | 1 | INT-009 · DJ-007 | TBD | RB-011 | Anexo I | TBD |
| TRZ-04-005 | Transferencias | Transferencias masivas | 4 | En definición | 2 | INT-009 | TBD | RB-011 | Anexo I | TBD |
| TRZ-04-006 | Pagos | Pagos mediante QR | 4 | En definición | 2 | INT-010 · DJ-008 | TBD | RB-024 | Anexo I | TBD |
| TRZ-04-007 | Pagos | QR estático | 4 | En definición | 2 | INT-010 | TBD | RB-024 | Anexo I | TBD |
| TRZ-04-008 | Pagos | QR dinámico | 4 | En definición | 2 | INT-010 | TBD | RB-024 | Anexo I | TBD |
| TRZ-04-009 | Pagos | Links de pago | 4 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-04-010 | Pagos | Checkout para comercio electrónico | 4 | En definición | 2 | INT-010 | TBD | — | Anexo I | TBD |
| TRZ-04-011 | Pagos | Solicitudes de pago | 4 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-04-012 | Pagos | Pagos recurrentes | 4 | En definición | 1 | — | TBD | RB-010 | Anexo I | TBD |
| TRZ-04-013 | Pagos | Débitos autorizados | 4 | En definición | 1 | — | TBD | RB-010 | Anexo I | TBD |
| TRZ-04-014 | Integraciones | API de pagos | 4 | En definición | 2 | — | TBD | RB-027 | Anexo I | TBD |
| TRZ-04-015 | Comercios | Registro de comercios | 4 | En definición | 2 | INT-010 | TBD | — | Anexo I | TBD |
| TRZ-04-016 | Comercios | Configuración de comisiones | 4 | En definición | 2 | — | TBD | RB-025 | Anexo I | TBD |
| TRZ-04-017 | Settlement | Liquidación a comercios | 4 | En definición | 2 | INT-010 | TBD | RB-025 | Anexo I | TBD |
| TRZ-04-018 | Comercios | Devoluciones | 4 | En definición | 2 | — | TBD | RB-026 | Anexo I | TBD |
| TRZ-04-019 | Comercios | Reversos | 4 | En definición | 2 | — | TBD | RB-026 | Anexo I | TBD |
| TRZ-04-020 | Pagos | Propinas | 4 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-04-021 | Reportes y analítica | Reportes de ventas | 4 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-04-022 | Conciliación | Conciliación de pagos | 4 | En definición | 1 | — | TBD | RB-045 | Anexo I | TBD |
| TRZ-04-023 | Settlement | Liquidaciones y settlement | 4 | En definición | 2 | INT-010, INT-007 | TBD | RB-025 | Anexo I | TBD |

### Sección 5 — Seguridad y cumplimiento

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-05-001 | Transversal | Seguridad transversal: cifrado, tokenización, MFA, biometría, passkeys, sesiones, dispositivos confiables, step-up, secretos, alertas y aislamiento de aliados | 5 | En definición | 1 | INT-023 | TBD | RB-027, RB-029 | Anexo I | TBD |
| TRZ-05-002 | Transversal | Matriz de controles por canal | 5 | En definición | 1 | — | TBD | RB-027, RB-028 | Anexo I | TBD |
| TRZ-05-003 | KYC/AML | Cumplimiento: KYC, KYB, AML, PEP, sanciones, monitoreo transaccional, gestión de casos, evidencias y auditoría | 5 | En definición | 1 | INT-004, INT-002 · DJ-010 | TBD | RB-003, RB-030 | Anexo I | TBD |

### Sección 6 — Motor de riesgo y antifraude

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-06-001 | Riesgo | Motor de riesgo con evaluación de eventos y transacciones en tiempo real | 6 | En definición | 1 | INT-026 | TBD | RB-005 | Anexo I | TBD |
| TRZ-06-002 | Riesgo | Acciones configurables a partir del Risk Score (aprobar, rechazar, step-up, retener, limitar, bloquear, revisión manual, caso) | 6 | En definición | 1 | — | TBD | RB-005 | Anexo I | TBD |
| TRZ-06-003 | Fraude | Riesgo de ecosistema: abuso de incentivos, colusión, contracargos anómalos y reputación de aliados | 6 | En definición | 7 | — | TBD | RB-060 | Anexo I | TBD |

### Sección 7 — Wallet Familiar y Dependientes

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-07-001 | Wallet Familiar | Cuenta principal | 7 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-07-002 | Wallet Familiar | Subcuentas para dependientes | 7 | En definición | 2 | — | TBD | RB-034 | Anexo I | TBD |
| TRZ-07-003 | Wallet Familiar | Tarjetas individuales | 7 | En definición | 2 | INT-005 | TBD | RB-002 | Anexo I | TBD |
| TRZ-07-004 | Wallet Familiar | Transferencias entre titular y dependientes | 7 | En definición | 2 | — | TBD | RB-011 | Anexo I | TBD |
| TRZ-07-005 | Wallet Familiar | Asignaciones periódicas | 7 | En definición | 2 | — | TBD | RB-010 | Anexo I | TBD |
| TRZ-07-006 | Wallet Familiar | Presupuestos | 7 | En definición | 2 | — | TBD | RB-035 | Anexo I | TBD |
| TRZ-07-007 | Wallet Familiar | Límites diarios, semanales y mensuales | 7 | En definición | 2 | — | TBD | RB-035 | Anexo I | TBD |
| TRZ-07-008 | Wallet Familiar | Límites por categoría de comercio | 7 | En definición | 2 | — | TBD | RB-035 | Anexo I | TBD |
| TRZ-07-009 | Wallet Familiar | Restricción de determinados tipos de compra | 7 | En definición | 2 | — | TBD | RB-035 | Anexo I | TBD |
| TRZ-07-010 | Wallet Familiar | Solicitudes de aprobación | 7 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-07-011 | Wallet Familiar | Aprobación de compras | 7 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-07-012 | Wallet Familiar | Monitoreo de gastos en tiempo real | 7 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-07-013 | Wallet Familiar | Notificaciones al titular | 7 | En definición | 2 | INT-012, INT-011, INT-013 | TBD | RB-042 | Anexo I | TBD |
| TRZ-07-014 | Wallet Familiar | Geocercas opcionales, sujetas a consentimiento y finalidad definida | 7 | En definición | 2 | INT-026 | TBD | RB-036 | Anexo I | TBD |
| TRZ-07-015 | Wallet Familiar | Metas de ahorro | 7 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-07-016 | Wallet Familiar | Reglas automáticas de ahorro | 7 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-07-017 | Wallet Familiar | Roles y permisos | 7 | En definición | 2 | — | TBD | RB-043 | Anexo I | TBD |
| TRZ-07-018 | Wallet Familiar | Reglas para dependientes: edad, representación o consentimiento, propiedad de fondos, facultades, privacidad y cierre | 7 | En definición | 2 | DJ-021 | TBD | RB-034 | Anexo I | TBD |

### Sección 8 — Wallet Empresarial

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-08-001 | Wallet Empresarial | Cuenta empresarial | 8 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-08-002 | Wallet Empresarial | Subcuentas por colaborador | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-003 | Wallet Empresarial | Tarjetas corporativas | 8 | En definición | 2 | INT-005 | TBD | RB-002 | Anexo I | TBD |
| TRZ-08-004 | Wallet Empresarial | Administración de empleados | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-005 | Wallet Empresarial | Viáticos | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-006 | Wallet Empresarial | Combustible | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-007 | Wallet Empresarial | Caja menuda | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-008 | Wallet Empresarial | Fondos operativos | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-009 | Wallet Empresarial | Centros de costo | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-010 | Wallet Empresarial | Presupuestos | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-011 | Wallet Empresarial | Límites por colaborador | 8 | En definición | 2 | — | TBD | RB-011, RB-037 | Anexo I | TBD |
| TRZ-08-012 | Wallet Empresarial | Límites por categoría | 8 | En definición | 2 | — | TBD | RB-011, RB-037 | Anexo I | TBD |
| TRZ-08-013 | Wallet Empresarial | Límites por comercio | 8 | En definición | 2 | — | TBD | RB-011, RB-037 | Anexo I | TBD |
| TRZ-08-014 | Wallet Empresarial | Flujos de aprobación | 8 | En definición | 2 | — | TBD | RB-037, RB-043 | Anexo I | TBD |
| TRZ-08-015 | Wallet Empresarial | Transferencias individuales y masivas | 8 | En definición | 2 | INT-009 | TBD | RB-011 | Anexo I | TBD |
| TRZ-08-016 | Wallet Empresarial | Carga masiva de colaboradores | 8 | En definición | 2 | — | TBD | RB-037 | Anexo I | TBD |
| TRZ-08-017 | Wallet Empresarial | Reportes administrativos | 8 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-08-018 | Wallet Empresarial | Reportes financieros | 8 | En definición | 2 | — | TBD | RB-017 | Anexo I | TBD |
| TRZ-08-019 | Wallet Empresarial | Exportación contable | 8 | En definición | 2 | INT-016 | TBD | RB-017 | Anexo I | TBD |
| TRZ-08-020 | Wallet Empresarial | Conciliación | 8 | En definición | 2 | — | TBD | RB-045 | Anexo I | TBD |
| TRZ-08-021 | Wallet Empresarial | Roles y permisos empresariales | 8 | En definición | 2 | — | TBD | RB-043 | Anexo I | TBD |
| TRZ-08-022 | Wallet Empresarial | Integración mediante APIs con ERP, nómina y sistemas contables | 8 | En definición | 2 | INT-016, INT-015 | TBD | RB-027 | Anexo I | TBD |

### Sección 9 — Adelanto Salarial (EWA)

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-09-001 | Nómina y EWA | Integración con sistemas de nómina | 9 | En definición | 3 | INT-015 · DJ-012 | TBD | RB-039 | Anexo I | TBD |
| TRZ-09-002 | Nómina y EWA | Registro de salario | 9 | En definición | 3 | INT-015 | TBD | RB-038 | Anexo I | TBD |
| TRZ-09-003 | Nómina y EWA | Información de jornadas o días laborados | 9 | En definición | 3 | INT-015 | TBD | RB-038 | Anexo I | TBD |
| TRZ-09-004 | Nómina y EWA | Cálculo del salario devengado | 9 | En definición | 3 | — | TBD | RB-038 | Anexo I | TBD |
| TRZ-09-005 | Nómina y EWA | Determinación del monto disponible | 9 | En definición | 3 | — | TBD | RB-004, RB-038 | Anexo I | TBD |
| TRZ-09-006 | Nómina y EWA | Límites porcentuales | 9 | En definición | 3 | — | TBD | RB-004 | Anexo I | TBD |
| TRZ-09-007 | Nómina y EWA | Límites monetarios | 9 | En definición | 3 | — | TBD | RB-038 | Anexo I | TBD |
| TRZ-09-008 | Nómina y EWA | Reglas configurables por empresa | 9 | En definición | 3 | — | TBD | RB-038, RB-048 | Anexo I | TBD |
| TRZ-09-009 | Nómina y EWA | Score interno | 9 | En definición | 3 | — | TBD | RB-041 | Anexo I | TBD |
| TRZ-09-010 | Nómina y EWA | Solicitud de adelanto | 9 | En definición | 3 | — | TBD | RB-038 | Anexo I | TBD |
| TRZ-09-011 | Nómina y EWA | Aprobación automática o manual | 9 | En definición | 3 | — | TBD | RB-005, RB-038 | Anexo I | TBD |
| TRZ-09-012 | Nómina y EWA | Desembolso inmediato a la Wallet | 9 | En definición | 3 | — | TBD | RB-014 | Anexo I | TBD |
| TRZ-09-013 | Nómina y EWA | Comisiones configurables | 9 | En definición | 3 | — | TBD | RB-025 | Anexo I | TBD |
| TRZ-09-014 | Nómina y EWA | Recuperación durante el proceso de nómina | 9 | En definición | 3 | INT-015 | TBD | RB-038, RB-039 | Anexo I | TBD |
| TRZ-09-015 | Nómina y EWA | Historial de adelantos | 9 | En definición | 3 | — | TBD | RB-012 | Anexo I | TBD |
| TRZ-09-016 | Nómina y EWA | Reportería para la empresa | 9 | En definición | 3 | — | TBD | — | Anexo I | TBD |
| TRZ-09-017 | Nómina y EWA | Tarjeta salarial asociada a la Wallet | 9 | En definición | 3 | INT-005 | TBD | RB-002 | Anexo I | TBD |
| TRZ-09-018 | Nómina y EWA | Tratamiento de excepciones de nómina (correcciones, terminación laboral, ausencias, incapacidades, fallos de recuperación) | 9 | En definición | 3 | DJ-012 | TBD | RB-039 | Anexo I | TBD |

### Sección 10 — Criptomonedas y activos digitales

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-10-001 | Criptomonedas | Compra | 10 | Objetivo | 5 | INT-017, INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-002 | Criptomonedas | Venta | 10 | Objetivo | 5 | INT-017, INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-003 | Criptomonedas | Conversión crypto-fiat | 10 | Objetivo | 5 | INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-004 | Criptomonedas | Conversión entre activos | 10 | Objetivo | 5 | INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-005 | Criptomonedas | Recepción mediante blockchain | 10 | Objetivo | 5 | INT-017 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-006 | Criptomonedas | Envío de activos | 10 | Objetivo | 5 | INT-017 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-007 | Criptomonedas | Generación y administración de direcciones | 10 | Objetivo | 5 | INT-017 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-008 | Criptomonedas | Consulta de saldos | 10 | Objetivo | 5 | INT-017 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-009 | Criptomonedas | Visualización de equivalentes en moneda fiat | 10 | Objetivo | 5 | INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-10-010 | Criptomonedas | Historial de operaciones | 10 | Objetivo | 5 | — | TBD | RB-012 | Anexo I | TBD |
| TRZ-10-011 | Criptomonedas | Límites de operación | 10 | Objetivo | 5 | — | TBD | RB-011 | Anexo I | TBD |
| TRZ-10-012 | Criptomonedas | Custodia de activos digitales | 10 | Objetivo | 5 | INT-017 · DJ-014 | TBD | RB-018, RB-040 | Anexo I | TBD |
| TRZ-10-013 | Criptomonedas | Monitoreo AML blockchain | 10 | Objetivo | 5 | INT-004 | TBD | RB-003 | Anexo I | TBD |
| TRZ-10-014 | Criptomonedas | Bóvedas de ahorro | 10 | Objetivo | 5 | — | TBD | — | Anexo I | TBD |
| TRZ-10-015 | Criptomonedas | Conversión automática para utilización mediante tarjeta | 10 | Objetivo | 5 | INT-018, INT-006 | TBD | RB-040 | Anexo I | TBD |

### Sección 11 — Crédito y financiación

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-11-001 | Crédito | Precalificación | 11 | Objetivo | 4 | INT-022 · DJ-013 | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-002 | Crédito | Solicitud de crédito | 11 | Objetivo | 4 | — | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-003 | Crédito | Scoring | 11 | Objetivo | 4 | INT-022 | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-004 | Crédito | Evaluación de capacidad de pago | 11 | Objetivo | 4 | — | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-005 | Crédito | Reglas de elegibilidad | 11 | Objetivo | 4 | — | TBD | RB-041, RB-048 | Anexo I | TBD |
| TRZ-11-006 | Crédito | Generación de ofertas | 11 | Objetivo | 4 | — | TBD | RB-056 | Anexo I | TBD |
| TRZ-11-007 | Crédito | Simulación | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-11-008 | Crédito | Aceptación contractual | 11 | Objetivo | 4 | INT-024 | TBD | RB-058 | Anexo I | TBD |
| TRZ-11-009 | Crédito | Desembolso hacia la Wallet | 11 | Objetivo | 4 | — | TBD | RB-014 | Anexo I | TBD |
| TRZ-11-010 | Crédito | Calendario de pagos | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-11-011 | Crédito | Débitos automáticos | 11 | Objetivo | 4 | — | TBD | RB-010 | Anexo I | TBD |
| TRZ-11-012 | Crédito | Abonos extraordinarios | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-11-013 | Crédito | Consulta de saldo | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-11-014 | Crédito | Gestión de mora | 11 | Objetivo | 4 | — | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-015 | Crédito | Refinanciamiento | 11 | Objetivo | 4 | — | TBD | RB-041 | Anexo I | TBD |
| TRZ-11-016 | Crédito | Gestión de cartera | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-11-017 | Crédito | Reportería | 11 | Objetivo | 4 | — | TBD | — | Anexo I | TBD |

### Sección 12 — Marketplace Financiero

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-12-001 | Marketplace | Microcréditos | 12 | En definición | 4 | INT-020 | TBD | RB-008, RB-041 | Anexo I | TBD |
| TRZ-12-002 | Marketplace | Préstamos personales | 12 | En definición | 4 | INT-020 | TBD | RB-008, RB-041 | Anexo I | TBD |
| TRZ-12-003 | Marketplace | BNPL | 12 | En definición | 4 | INT-020 | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-004 | Marketplace | Seguros | 12 | En definición | 4 | INT-021 | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-005 | Marketplace | Remesas | 12 | En definición | 4 | INT-027 | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-006 | Marketplace | Inversiones | 12 | En definición | 4 | — | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-007 | Marketplace | Productos de ahorro | 12 | En definición | 4 | — | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-008 | Marketplace | Cambio de divisas | 12 | En definición | 4 | — | TBD | RB-008, RB-017 | Anexo I | TBD |
| TRZ-12-009 | Marketplace | Servicios financieros especializados | 12 | En definición | 4 | — | TBD | RB-008 | Anexo I | TBD |
| TRZ-12-010 | Marketplace | Catálogo de productos | 12 | En definición | 4 | — | TBD | RB-048 | Anexo I | TBD |
| TRZ-12-011 | Marketplace | Reglas de elegibilidad | 12 | En definición | 4 | — | TBD | RB-041, RB-048 | Anexo I | TBD |
| TRZ-12-012 | Marketplace | Segmentación | 12 | En definición | 4 | — | TBD | RB-056 | Anexo I | TBD |
| TRZ-12-013 | Marketplace | Ofertas personalizadas | 12 | En definición | 4 | — | TBD | RB-056 | Anexo I | TBD |
| TRZ-12-014 | Marketplace | Contratación digital | 12 | En definición | 4 | INT-024 | TBD | RB-058 | Anexo I | TBD |
| TRZ-12-015 | Marketplace | Integración con proveedores externos | 12 | En definición | 4 | INT-020, INT-021 | TBD | RB-027 | Anexo I | TBD |
| TRZ-12-016 | Marketplace | Seguimiento del estado de solicitudes | 12 | En definición | 4 | — | TBD | — | Anexo I | TBD |
| TRZ-12-017 | Marketplace | Comisiones por originación o intermediación | 12 | En definición | 4 | — | TBD | RB-025, RB-058 | Anexo I | TBD |
| TRZ-12-018 | Marketplace | Publicación de productos por parte de aliados autorizados | 12 | En definición | 4 | DJ-019 | TBD | RB-050 | Anexo I | TBD |
| TRZ-12-019 | Marketplace | Evaluación continua del desempeño y del riesgo del aliado | 12 | En definición | 4 | — | TBD | RB-060 | Anexo I | TBD |

### Sección 13 — Open Banking e integraciones financieras

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-13-001 | Integraciones | Vinculación de cuentas bancarias externas | 13 | En definición | 6 | INT-019 | TBD | RB-009 | Anexo I | TBD |
| TRZ-13-002 | Integraciones | Consulta de cuentas | 13 | En definición | 6 | INT-019 | TBD | RB-009 | Anexo I | TBD |
| TRZ-13-003 | Integraciones | Consulta de saldos | 13 | En definición | 6 | INT-019 | TBD | RB-009 | Anexo I | TBD |
| TRZ-13-004 | Integraciones | Consulta de movimientos | 13 | En definición | 6 | INT-019 | TBD | RB-009 | Anexo I | TBD |
| TRZ-13-005 | Integraciones | Verificación de cuentas | 13 | En definición | 6 | INT-019 | TBD | RB-009 | Anexo I | TBD |
| TRZ-13-006 | Integraciones | Iniciación de transferencias | 13 | En definición | 6 | INT-019 | TBD | RB-032 | Anexo I | TBD |
| TRZ-13-007 | Integraciones | APIs financieras | 13 | En definición | 6 | — | TBD | RB-027 | Anexo I | TBD |
| TRZ-13-008 | Integraciones | APIs de pagos | 13 | En definición | 6 | — | TBD | RB-027 | Anexo I | TBD |
| TRZ-13-009 | Integraciones | Webhooks | 13 | En definición | 6 | — | TBD | RB-013 | Anexo I | TBD |
| TRZ-13-010 | Integraciones | Integración con procesadores de tarjetas | 13 | En definición | 6 | INT-006 | TBD | — | Anexo I | TBD |
| TRZ-13-011 | Integraciones | Integración con redes de pago | 13 | En definición | 6 | INT-007 | TBD | — | Anexo I | TBD |
| TRZ-13-012 | Integraciones | Integración bancaria | 13 | En definición | 6 | INT-009 | TBD | — | Anexo I | TBD |
| TRZ-13-013 | Integraciones | Integración con proveedores KYC/AML | 13 | En definición | 6 | INT-002, INT-004 | TBD | RB-003 | Anexo I | TBD |
| TRZ-13-014 | Integraciones | Integración con proveedores de remesas | 13 | En definición | 6 | INT-027 | TBD | — | Anexo I | TBD |
| TRZ-13-015 | Integraciones | Integración con proveedores de activos digitales | 13 | En definición | 6 | INT-017, INT-018 | TBD | RB-040 | Anexo I | TBD |
| TRZ-13-016 | Integraciones | Integración con sistemas de nómina | 13 | En definición | 6 | INT-015 | TBD | RB-039 | Anexo I | TBD |
| TRZ-13-017 | Integraciones | Integración con ERP y sistemas contables | 13 | En definición | 6 | INT-016 | TBD | RB-017 | Anexo I | TBD |

### Sección 14 — Lealtad, beneficios y recompensas

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-14-001 | Loyalty | Puntos | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-002 | Loyalty | Cashback | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-003 | Loyalty | Cupones | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-004 | Loyalty | Promociones | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-005 | Loyalty | Beneficios por comercio | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-006 | Campañas e incentivos | Campañas segmentadas | 14 | En definición | 2 | — | TBD | RB-007, RB-056 | Anexo I | TBD |
| TRZ-14-007 | Loyalty | Niveles de usuario | 14 | En definición | 2 | — | TBD | — | Anexo I | TBD |
| TRZ-14-008 | Loyalty | Programa de referidos | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-009 | Loyalty | Bonificaciones | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-010 | Loyalty | Reglas por volumen transaccional | 14 | En definición | 2 | — | TBD | RB-007, RB-048 | Anexo I | TBD |
| TRZ-14-011 | Loyalty | Reglas por comportamiento | 14 | En definición | 2 | — | TBD | RB-007, RB-048 | Anexo I | TBD |
| TRZ-14-012 | Loyalty | Canje de recompensas | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-013 | Loyalty | Beneficios exclusivos asociados a productos o segmentos | 14 | En definición | 2 | — | TBD | RB-007 | Anexo I | TBD |
| TRZ-14-014 | Campañas e incentivos | Incentivos cruzados para impulsar verticales y capacidades de aliados | 14 | En definición | 7 | — | TBD | RB-007, RB-056 | Anexo I | TBD |
| TRZ-14-015 | Campañas e incentivos | Incentivos financiados por aliados y campañas conjuntas | 14 | En definición | 7 | DJ-019 | TBD | RB-008, RB-056 | Anexo I | TBD |

### Sección 15 — Notificaciones y comunicaciones

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-15-001 | Notificaciones | Servicio centralizado de comunicaciones con canales push, SMS, correo electrónico y WhatsApp | 15 | En definición | 1 y 2 | INT-012, INT-011, INT-013, INT-014 · DJ-017 | TBD | RB-042 | Anexo I | TBD |
| TRZ-15-002 | Notificaciones | Catálogo de eventos notificables y preferencias configurables del usuario | 15 | En definición | 1 y 2 | — | TBD | RB-042 | Anexo I | TBD |

### Sección 16 — Backoffice administrativo y operativo

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-16-001 | Transversal | Gestión administrativa de clientes, empresas, comercios, dependientes, Wallets, tarjetas, transacciones, casos, límites, tarifas, productos, aliados, conciliaciones y liquidaciones | 16 | En definición | 1 y 2 | — | TBD | RB-043 | Anexo I | TBD |
| TRZ-16-002 | Transversal | Roles administrativos y segregación por ámbito, con mínimo privilegio | 16 | En definición | 1 y 2 | — | TBD | RB-043 | Anexo I | TBD |
| TRZ-16-003 | Transversal | Auditoría: bitácora de acciones sensibles append-only con evidencia de origen y resultado | 16 | En definición | 1 y 2 | — | TBD | RB-044 | Anexo I | TBD |

### Sección 17 — Conciliación, compensación y liquidación

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-17-001 | Conciliación | Procesos de conciliación bancaria, de tarjetas, con procesadores, de comercios, de transferencias, de remesas y de activos digitales | 17 | En definición | 1 y 2 | INT-008, INT-009, INT-006, INT-010 | TBD | RB-045 | Anexo I | TBD |
| TRZ-17-002 | Conciliación | Ciclo de conciliación: ingesta, emparejamiento, diferencias, excepciones, ajustes y cierre diario | 17 | En definición | 1 y 2 | — | TBD | RB-045, RB-046 | Anexo I | TBD |
| TRZ-17-003 | Conciliación | Actores y fuentes de conciliación | 17 | En definición | 1 y 2 | INT-008, INT-009, INT-007 | TBD | RB-045 | Anexo I | TBD |
| TRZ-17-004 | Transversal | Liquidez, tesorería y fondeo: separación de fondos, posición por moneda, umbrales y planes de contingencia | 17 | En definición | 1 y 2 | DJ-005 | TBD | RB-018, RB-047 | Anexo I | TBD |

### Sección 18 — Analítica e inteligencia financiera

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-18-001 | Reportes y analítica | Indicadores operacionales, financieros, comerciales y de ecosistema | 18 | En definición | 1 y 2 | — | TBD | — | Anexo I | TBD |
| TRZ-18-002 | Reportes y analítica | Inteligencia artificial y personalización: capacidades previstas de incorporación progresiva | 18 | En definición | 1 y 2 | — | TBD | — | Anexo I | TBD |
| TRZ-18-003 | Reportes y analítica | Gobernanza de modelos y decisiones automatizadas con trazabilidad y revisión humana | 18 | En definición | 1 y 2 | — | TBD | RB-005, RB-041 | Anexo I | TBD |

### Sección 19 — Administración y configuración de productos

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-19-001 | Transversal | Ámbitos de configuración y reglas de precedencia y resolución de conflictos | 19 | En definición | 1 y 2 | — | TBD | RB-048, RB-049 | Anexo I | TBD |
| TRZ-19-002 | Transversal | Elementos configurables: productos, tarifas, comisiones, límites, monedas, reglas, beneficios, parámetros y permisos por aliado | 19 | En definición | 1 y 2 | — | TBD | RB-048 | Anexo I | TBD |

### Sección 20 — Arquitectura funcional

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-20-001 | Transversal | Arquitectura modular por dominios, con reutilización de los servicios financieros comunes | 20 | En definición | 1 | — | TBD | — | Anexo I | TBD |
| TRZ-20-002 | Transversal | Continuidad y resiliencia operativa: disponibilidad, respaldo, RTO/RPO, idempotencia y degradación controlada | 20 | En definición | 1 | DJ-016 | TBD | RB-013 | Anexo I | TBD |
| TRZ-20-003 | Transversal | Modelo de responsabilidades por producto (contratación, custodia, operación, cumplimiento, comisiones, disputas y liquidación) | 20 | En definición | 1 | DJ-005 | TBD | RB-018 | Anexo I | TBD |

### Sección 21 — Extensibilidad y ecosistema de aliados

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-21-001 | Extensibilidad y aliados | Modelo curado de incorporación: due diligence, acuerdo expreso y certificación previa | 21 | En definición | 7 | DJ-019 | TBD | RB-050 | Anexo I | TBD |
| TRZ-21-002 | Extensibilidad y aliados | Modalidades de integración: nativa, mini-app, servicios en segundo plano y contrato de interfaz | 21 | En definición | 7 | — | TBD | RB-050 | Anexo I | TBD |
| TRZ-21-003 | Extensibilidad y aliados | Ciclo de vida de aliado o mini-app: admisión y operación (activa, suspendida, deprecada, retirada) | 21 | En definición | 7 | DJ-023 | TBD | RB-051, RB-052 | Anexo I | TBD |
| TRZ-21-004 | Extensibilidad y aliados | Aislamiento y control de capacidades de terceros, con alcance mínimo y monitoreo por aliado | 21 | En definición | 7 | — | TBD | RB-029, RB-053 | Anexo I | TBD |

### Sección 22 — Modelo de marca y presencia de terceros

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-22-001 | Marca y presencia | Reglas de marca y co-branding, con identificación clara del proveedor del servicio | 22 | En definición | 7 | DJ-023 | TBD | RB-054 | Anexo I | TBD |
| TRZ-22-002 | Marca y presencia | Límites del modelo: sin white-label ni personalización de la experiencia base por comercio o institución | 22 | En definición | 7 | — | TBD | RB-054 | Anexo I | TBD |

### Sección 23 — Experiencia unificada y descubrimiento

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-23-001 | Experiencia y descubrimiento | Continuidad de experiencia: identidad y sesión unificadas, vista financiera consolidada, continuidad entre canales y reingreso | 23 | En definición | 7 | — | TBD | RB-013 | Anexo I | TBD |
| TRZ-23-002 | Experiencia y descubrimiento | Descubrimiento: inicio dinámico, buscador transversal, QR universal e inbox unificado | 23 | En definición | 7 | — | TBD | RB-024, RB-042 | Anexo I | TBD |
| TRZ-23-003 | Experiencia y descubrimiento | Calidad de experiencia: accesibilidad, coherencia de lenguaje y degradación controlada | 23 | En definición | 7 | — | TBD | — | Anexo I | TBD |

### Sección 24 — Verticales y servicios cotidianos

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-24-001 | Extensibilidad y aliados | Verticales previstas de servicios cotidianos (telecomunicaciones, servicios públicos, movilidad, entretenimiento, comercio, salud, educación, gobierno y hogar) | 24 | En definición | 7 | INT-025 · DJ-020 | TBD | RB-008 | Anexo I | TBD |
| TRZ-24-002 | Extensibilidad y aliados | Capacidades comunes exigidas a toda vertical: catálogo, pago, comprobante, recurrencia, reversos, conciliación, soporte y métricas | 24 | En definición | 7 | — | TBD | RB-055 | Anexo I | TBD |

### Sección 25 — Crecimiento, campañas y experimentación

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-25-001 | Campañas e incentivos | Segmentación y campañas con presupuesto, vigencia y tope de exposición | 25 | En definición | 7 | — | TBD | RB-007, RB-056 | Anexo I | TBD |
| TRZ-25-002 | Campañas e incentivos | Experimentación: pruebas A/B, feature flags y atribución de conversión | 25 | En definición | 7 | — | TBD | RB-048 | Anexo I | TBD |
| TRZ-25-003 | Campañas e incentivos | Métricas de crecimiento: activación, adopción, retención, CAC, valor del cliente y profundidad de ecosistema | 25 | En definición | 7 | — | TBD | — | Anexo I | TBD |

### Sección 26 — Gobernanza de datos y confianza del ecosistema

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-26-001 | Consentimiento y acceso de terceros | Consentimiento y acceso: granularidad, vigencia, trazabilidad de accesos y separación respecto de la autorización transaccional | 26 | En definición | 7 | DJ-021, DJ-022 | TBD | RB-009, RB-032, RB-033, RB-057 | Anexo I | TBD |
| TRZ-26-002 | Reputación de comercios y aliados | Integridad del ecosistema: antifraude de incentivos, uso ilícito y evaluación continua del riesgo de aliados | 26 | En definición | 7 | — | TBD | RB-060 | Anexo I | TBD |
| TRZ-26-003 | Reputación de comercios y aliados | Responsabilidad y cumplimiento: licencias, seguros, evidencias y definición de roles por capacidad de tercero | 26 | En definición | 7 | DJ-023 | TBD | RB-050, RB-059 | Anexo I | TBD |

### Sección 27 — Modelo de ingresos de la plataforma

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-27-001 | Transversal | Fuentes de ingresos: comisiones, originación, reparto con aliados, suscripciones, publicidad, intereses, APIs y datos agregados | 27 | En definición | 7 | — | TBD | RB-008, RB-058 | Anexo I | TBD |
| TRZ-27-002 | Transversal | Reglas de ingresos: trazabilidad, conciliación contra la operación, liquidación automática y medición por cliente, producto, vertical y aliado | 27 | En definición | 7 | — | TBD | RB-008, RB-025, RB-058 | Anexo I | TBD |

### Secciones 28 a 32 — Premisas, privacidad, madurez, fases y diferenciadores

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-28-001 | Transversal | Premisas, dependencias y exclusiones del alcance | 28 | No aplica | No aplica | — | TBD | — | No aplica | TBD |
| TRZ-29-001 | Transversal | Privacidad, requisitos de tiendas y canales, y cumplimiento normativo | 29 | No aplica | No aplica | — | TBD | RB-059 | No aplica | TBD |
| TRZ-30-001 | Transversal | Estados de madurez: estados admitidos, separación respecto del ciclo de vida operativo y matriz de trazabilidad | 30 | No aplica | No aplica | — | TBD | — | No aplica | TBD |
| TRZ-31-001 | Transversal | Fases de implementación recomendadas, condiciones de entrada y criterios de madurez | 31 | No aplica | No aplica | — | TBD | — | No aplica | TBD |
| TRZ-32-001 | Transversal | Diferenciadores de la plataforma | 32 | No aplica | No aplica | — | TBD | — | No aplica | TBD |

---

## Notas de mantenimiento

- El estado de madurez se declara por funcionalidad en esta matriz. Ni las fases ni las secciones de la especificación declaran estado propio: agrupan capacidades que pueden encontrarse en estados distintos.
- Una funcionalidad no deberá declararse en estado "Habilitado para desarrollo" mientras sus dependencias bloqueantes permanezcan abiertas.
- El estado de madurez registrado es el vigente de cada funcionalidad, sin perjuicio del estado de ciclo de vida operativo que corresponda conforme al Anexo H.
- Las funcionalidades de las secciones 28 a 32 no declaran capacidades propias: se registran para acreditar la cobertura completa de la especificación y no admiten estados de madurez.
- Toda funcionalidad nueva deberá incorporarse con su identificador, su sección de origen y su estado de madurez conforme a la sección 30.
- Las dependencias se referencian por código (`INT-` y `DJ-`) y no por nombre: los códigos se asignan únicamente en los apartados E.2 y J.2/J.3 del documento de anexos.
- Los estados registrados son provisionales y no implican cumplimiento fila por fila de los criterios de transición del Anexo H. En particular, la asignación de responsables funcionales es una dependencia pendiente (DJ-025): su ausencia impide ratificar la madurez declarada de cada funcionalidad.

## Control de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 18/09/2026 | Versión inicial: 272 filas correspondientes a las funcionalidades declaradas en las secciones 1 a 27, más el registro de cobertura de las secciones 28 a 31. Estado de madurez y fase prevista tomados de la declaración provisional de la sección 30. |
| 1.1 | 18/09/2026 | Columna de dependencias principales migrada de referencias por nombre a códigos: 112 filas referencian ahora integraciones (`INT-`) y decisiones (`DJ-`) con identificador único. Se aclara que el estado provisional no implica cumplimiento fila por fila del Anexo H. |
| 1.2 | 18/09/2026 | Actualización de las referencias al apartado de declaración de madurez de la sección 30 de la especificación, renombrado a *Fases propuestas*, y del resumen por sección. |
| 1.3 | 18/09/2026 | Incorporación de la fila de cobertura de la nueva sección 30 (Estados de madurez) y renumeración de las filas de cobertura de las secciones 31 y 32 tras el desplazamiento de la numeración de la especificación. Total: 273 filas. |
| 1.4 | 18/09/2026 | La matriz pasa a ser el artefacto donde se declara el estado de madurez, al retirarse la declaración de estado de las fases de la sección 31. |
| 1.5 | 18/09/2026 | Se refrescan las versiones de referencia tras el cierre de DJ-009 (jurisdicción inicial) y la actualización de los artefactos. Ninguna capacidad declaraba a DJ-009 como dependencia, por tratarse de una decisión transversal cuyo detalle de estado se mantiene en el registro de decisiones. |
