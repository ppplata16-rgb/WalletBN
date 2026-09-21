# CATÁLOGO DE INTEGRACIONES EXTERNAS — PLATAFORMA WALLET FINANCIERA INTEGRAL

| Campo | Valor |
|---|---|
| Documento | Catálogo de integraciones externas |
| Versión | 1.2 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Documentos de referencia | `Anexos_Complementarios_Alcance_Wallet.md` (v1.10), Anexo E · `Especificacion_Funcional_Wallet_Financiera_Integral.md` (v1.12) · `Opinion_Juridica_Regulatoria_Wallet_Panama.md` (18/09/2026; marco aplicable determinado en DJ-009) |
| Estructura y reglas de uso | Anexo E, apartado E.1 |
| Artefactos relacionados | `Matriz_Trazabilidad_Wallet.md` · `Registro_Decisiones_Wallet.md` · `Matriz_Reglas_Negocio_Wallet.md` |

## Propósito

Este catálogo desarrolla, para cada integración externa requerida por la plataforma, los campos de definición técnica y de gestión operativa establecidos en el Anexo E.1. Constituye la fuente de consulta para determinar si una integración está confirmada, qué falta obtener de ella y qué capacidades dependen de su disponibilidad.

## Convenciones

- **ID:** `INT-<secuencial>`. Los códigos se asignan en el apartado E.2 del Anexo E y no se reutilizan. Una integración descartada conserva su código y se marca como tal.
- **Estado:** `Confirmada`, `En negociación`, `No confirmada` o `Descartada`. Toda integración con estado distinto de Confirmada es dependencia bloqueante para las capacidades que la requieran, conforme a la sección 28 de la especificación funcional.
- **Dominio:** dominio de la arquitectura conforme a la sección 20. Se utiliza **Transversal** cuando sirve a múltiples dominios.
- **Dependencias:** decisiones del registro de decisiones (`DJ-`) y otras integraciones (`INT-`) de las que depende esta.
- **TBD:** por definir.
- Los campos se mantienen divididos en dos bloques por legibilidad; ambas tablas se relacionan por el campo ID.

## Definición técnica

| ID | Nombre | Propósito | Dominio | Tipo | Dirección | Protocolo | Autenticación |
|---|---|---|---|---|---|---|---|
| INT-001 | Proveedor de identidad | Autenticación e identidad | Identidad y acceso | Identidad | Bidireccional | OIDC 1.0 / OAuth 2.0, JWKS | Cliente público con PKCE; clientes confidenciales para backoffice |
| INT-002 | Proveedor KYC/KYB | Identificación y validación | KYC/AML | Cumplimiento | Bidireccional | API | Credenciales de servicio |
| INT-003 | Biometría y prueba de vida | Validación de identidad y step-up | Identidad y acceso | Cumplimiento | Bidireccional | API / SDK móvil | Credenciales de servicio con alcance por operación |
| INT-004 | AML / sanciones / PEP | Cumplimiento | KYC/AML | Cumplimiento | Saliente | API y listas periódicas | Credenciales de servicio |
| INT-005 | Entidad emisora | Emisión de tarjetas | Tarjetas | Emisión | Bidireccional | API + archivos batch | Credenciales de servicio; certificación de red |
| INT-006 | Procesador de tarjetas | Autorización y procesamiento | Tarjetas | Procesamiento | Bidireccional | API de autorización + archivos | Credenciales de servicio; PCI DSS |
| INT-007 | Red de pagos | Operación de tarjetas | Tarjetas | Red | Bidireccional | Según red | Certificación y credenciales de red |
| INT-008 | Banco custodio / cuenta de respaldo | Custodia de fondos y cuentas de compensación | Transversal | Custodia | Bidireccional | API y conciliación de archivos | Credenciales de servicio |
| INT-009 | Transferencias bancarias | Entrada y salida de fondos | Transferencias | Pagos | Bidireccional | API y/o archivos batch | Credenciales de servicio |
| INT-010 | Adquirencia / QR | Pagos a comercios | Comercios | Adquirencia | Bidireccional | API + webhooks | Credenciales de servicio |
| INT-011 | SMS | Comunicaciones | Notificaciones | Comunicaciones | Saliente | API | Credenciales de servicio |
| INT-012 | Push | Comunicaciones | Notificaciones | Comunicaciones | Saliente | API | Credenciales de servicio |
| INT-013 | Correo electrónico | Comunicaciones | Notificaciones | Comunicaciones | Saliente | API / SMTP | Credenciales de servicio |
| INT-014 | WhatsApp | Comunicaciones, cuando aplique | Notificaciones | Comunicaciones | Saliente | API de plantillas | Credenciales de servicio |
| INT-015 | Sistemas de nómina | EWA | Nómina y EWA | Datos | Bidireccional | Archivos batch y/o API | Credenciales de servicio; acuerdo con la empresa |
| INT-016 | ERP / contabilidad | Wallet empresarial | Wallet Empresarial | Datos | Bidireccional | API / exportación de archivos | Credenciales de servicio |
| INT-017 | Custodio de activos digitales | Crypto | Criptomonedas | Custodia | Bidireccional | API | Credenciales de servicio; segregación de claves |
| INT-018 | Liquidez crypto | Compra/venta/conversión | Criptomonedas | Liquidez | Bidireccional | API | Credenciales de servicio |
| INT-019 | Open Banking | Agregación/iniciación | Integraciones | Datos y pagos | Bidireccional | API del estándar aplicable | Consentimiento del cliente y credenciales de servicio |
| INT-020 | Proveedores de crédito | Marketplace/financiación | Crédito | Producto | Bidireccional | API | Credenciales de servicio |
| INT-021 | Proveedores de seguros | Marketplace | Marketplace | Producto | Bidireccional | API | Credenciales de servicio |
| INT-022 | Bureau de crédito y scoring | Evaluación crediticia | Crédito | Datos | Saliente | API | Credenciales de servicio; base legal de consulta |
| INT-023 | Tokenización de tarjetas | Protección de datos sensibles | Tarjetas | Seguridad | Bidireccional | SDK / API | Credenciales de servicio; PCI DSS |
| INT-024 | Firma electrónica y contratos | Aceptación contractual y evidencias | Transversal | Cumplimiento | Bidireccional | API | Credenciales de servicio |
| INT-025 | Facturación electrónica | Pago de servicios y verticales | Extensibilidad y aliados | Facturación | Bidireccional | API / archivos | Credenciales de servicio |
| INT-026 | Geolocalización | Riesgo, geocercas y geovelocidad | Riesgo | Datos | Entrante | SDK móvil / API | Permiso del dispositivo y consentimiento cuando corresponda |
| INT-027 | Proveedores de remesas | Envío y recepción de remesas | Transferencias | Pagos | Bidireccional | API | Credenciales de servicio |

## Gestión operativa

| ID | Resp. interno | Resp. externo | Ambientes | Documentación | SLA | Restricciones | Estado | Dependencias | Estrategia ante indisponibilidad |
|---|---|---|---|---|---|---|---|---|---|
| INT-001 | TBD | TBD | TBD | TBD | TBD | El proveedor de identidad deberá ser reemplazable: la plataforma depende de OIDC, OAuth 2.0 y JWKS, no del proveedor | No confirmada | — | Aislamiento: sin identidad no se inician sesiones nuevas; las operaciones en curso no se interrumpen |
| INT-002 | TBD | TBD | TBD | TBD | TBD | TBD | No confirmada | DJ-010 | Degradación controlada: el alta queda en pendiente de verificación, sin habilitar operaciones |
| INT-003 | TBD | TBD | TBD | TBD | TBD | Vínculo con el dispositivo; alternativa obligatoria cuando la operación dependa de biometría | No confirmada | — | Alternativa de verificación conforme al Anexo C.9 |
| INT-004 | TBD | TBD | TBD | TBD | TBD | Frecuencia de actualización de listas según normativa | No confirmada | DJ-010 | Bloqueo preventivo ante imposibilidad de validar |
| INT-005 | TBD | TBD | TBD | TBD | TBD | Certificación obligatoria de la red; datos de tarjeta fuera del alcance de la plataforma | No confirmada | DJ-006 | Las tarjetas nuevas no se emiten; las operaciones existentes no se ven afectadas |
| INT-006 | TBD | TBD | TBD | TBD | TBD | PCI DSS; tokenización obligatoria | No confirmada | DJ-006, INT-023 | Rechazo controlado de autorizaciones con reintento |
| INT-007 | TBD | TBD | TBD | TBD | TBD | Reglas y aprobaciones de marca de la red | No confirmada | DJ-006 | Autorizaciones rechazadas de forma controlada y comunicada |
| INT-008 | TBD | TBD | TBD | TBD | TBD | Separación de fondos de clientes y fondos operativos; conciliación diaria | No confirmada | DJ-005 | Bloqueo de nuevas cargas y retiros; las operaciones internas continúan |
| INT-009 | TBD | TBD | TBD | TBD | TBD | Límites por operación y por día de la contraparte | No confirmada | DJ-007 | Fondos en tránsito; conciliación posterior obligatoria |
| INT-010 | TBD | TBD | TBD | TBD | TBD | Estándar de QR y certificación técnica cuando exista integración | No confirmada | DJ-008 | Pago no disponible en la vertical afectada; el resto del ecosistema continúa |
| INT-011 | TBD | TBD | TBD | TBD | TBD | Comunicaciones obligatorias de seguridad no dependen de este canal | No confirmada | DJ-017 | La notificación se encola y se reintenta; no bloquea la operación |
| INT-012 | TBD | TBD | TBD | TBD | TBD | TBD | No confirmada | DJ-017 | La notificación se encola y se reintenta; no bloquea la operación |
| INT-013 | TBD | TBD | TBD | TBD | TBD | TBD | No confirmada | DJ-017 | La notificación se encola y se reintenta; no bloquea la operación |
| INT-014 | TBD | TBD | TBD | TBD | TBD | Solo si el canal se habilita; plantillas aprobadas | No confirmada | DJ-017 | Canal alternativo disponible |
| INT-015 | TBD | TBD | TBD | TBD | TBD | Convenio vigente con la empresa afiliada; frecuencia de reporte acordada | No confirmada | DJ-012 | Sin información de nómina no se ofrecen nuevos adelantos; la recuperación ya comprometida se reintenta |
| INT-016 | TBD | TBD | TBD | TBD | TBD | Formato de exportación contable acordado por empresa | No confirmada | — | La exportación se genera de forma diferida |
| INT-017 | TBD | TBD | TBD | TBD | TBD | Segregación de custodia respecto de los fondos fiat; marco regulatorio aplicable | No confirmada | DJ-014 | Operaciones de activos digitales no disponibles; el resto de la plataforma continúa |
| INT-018 | TBD | TBD | TBD | TBD | TBD | Cotización y horarios de mercado | No confirmada | DJ-014 | Conversiones no disponibles; se informa al cliente |
| INT-019 | TBD | TBD | TBD | TBD | TBD | Consentimiento del cliente y alcance por operación | No confirmada | DJ-021 | Consulta e iniciación no disponibles para las cuentas afectadas |
| INT-020 | TBD | TBD | TBD | TBD | TBD | Marco contractual según DJ-013 | No confirmada | DJ-013 | Oferta no disponible para el producto afectado |
| INT-021 | TBD | TBD | TBD | TBD | TBD | Marco contractual; licencias del aliado | No confirmada | DJ-019 | Oferta no disponible |
| INT-022 | TBD | TBD | TBD | TBD | TBD | Base legal de consulta y retención del resultado | No confirmada | DJ-013 | La evaluación se realiza sin bureau, con reglas internas, o se posterga |
| INT-023 | TBD | TBD | TBD | TBD | TBD | PCI DSS | No confirmada | — | Los datos sensibles permanecen enmascarados; la visualización no está disponible |
| INT-024 | TBD | TBD | TBD | TBD | TBD | Valor probatorio conforme a la Ley 51 de 2008 y su reglamentación (Panamá); conservación de la evidencia | No confirmada | — | Contratación en pendiente, sin habilitar el producto |
| INT-025 | TBD | TBD | TBD | TBD | TBD | Requisitos de facturación aplicables en Panamá, por confirmar con el proveedor | No confirmada | — | Pago no disponible para la vertical afectada |
| INT-026 | TBD | TBD | TBD | TBD | TBD | Permiso del dispositivo y consentimiento cuando corresponda | No confirmada | DJ-021 | Se omiten las señales de geolocalización; el riesgo evalúa con las demás variables |
| INT-027 | TBD | TBD | TBD | TBD | TBD | Actividad sujeta a la Ley 48 de 2003 y, cuando corresponda, a autorización del MICI; corredores habilitados por definir | No confirmada | — | Envío y recepción de remesas no disponibles |

## Reconciliación con la matriz de trazabilidad

- Las integraciones de este catálogo se referencian desde la columna **Dependencias principales** de `Matriz_Trazabilidad_Wallet.md`, mediante su código `INT-`.
- Una integración con estado distinto de Confirmada es dependencia bloqueante: las funcionalidades que la requieran no podrán declararse "Habilitado para desarrollo" mientras no se confirme.
- Las decisiones de las que depende una integración se registran en `Registro_Decisiones_Wallet.md` y se referencian con el prefijo `DJ-`.
- El marco regulatorio aplicable a las restricciones de este catálogo es el de la República de Panamá, conforme al cierre de DJ-009 sustentado en la opinión jurídica regulatoria. Las integraciones que dependían de esa decisión dejan de estar bloqueadas por ella, sin perjuicio de su propio estado y de la revisión jurídica previa exigida a cada módulo con régimen sectorial propio.
- Toda integración nueva deberá recibir su código en el apartado E.2 del Anexo E antes de incorporarse a este catálogo, para preservar un único punto de asignación.

## Control de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 18/09/2026 | Versión inicial: 27 integraciones con definición técnica y gestión operativa, correspondientes al catálogo inicial esperado del apartado E.2 del Anexo E. |
| 1.1 | 18/09/2026 | Renombrado a catálogo de integraciones externas, para deslindarlo de las dependencias del proyecto, clasificadas en la sección 28 de la especificación funcional. |
| 1.2 | 18/09/2026 | Cierre de DJ-009 (jurisdicción inicial): INT-024, INT-025 e INT-027 dejan de depender de esa decisión y sus restricciones se expresan sobre el marco panameño aplicable. Se incorpora la opinión jurídica regulatoria como documento de referencia y se refrescan las versiones de referencia. |