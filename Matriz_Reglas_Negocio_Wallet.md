# MATRIZ DE REGLAS DE NEGOCIO — PLATAFORMA WALLET FINANCIERA INTEGRAL

| Campo | Valor |
|---|---|
| Documento | Matriz de reglas de negocio |
| Versión | 1.1 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Documentos de referencia | `Especificacion_Funcional_Wallet_Financiera_Integral.md` (v1.12) · `Anexos_Complementarios_Alcance_Wallet.md` (v1.10) |
| Estructura y reglas de uso | Anexo F, apartado F.1 |
| Artefacto complementario | `Matriz_Trazabilidad_Wallet.md` |

## Propósito

Esta matriz concentra las reglas de negocio que varían por producto, cliente, proveedor o etapa, y las mantiene bajo control y versionado. Cada regla deberá respetar los ámbitos y las reglas de precedencia definidos en la sección 19 de la especificación funcional.

## Convenciones

- **ID:** `RB-<secuencial>`. Los identificadores no se reutilizan.
- **Estado:** `Definida` cuando la regla ya está cerrada por la especificación funcional o los anexos; `TBD` cuando su valor o condición está por definir.
- **Configurable:** indica si el valor de la regla deberá poder modificarse por configuración sin despliegue de código.
- **Fuente/Responsable:** responsable funcional de definir y mantener el valor de la regla.
- Los identificadores RB-001 a RB-010 se conservan sin cambios respecto de las filas de referencia del apartado F.1 del Anexo F.
- Una regla no cerrada deberá considerarse bloqueante para que la funcionalidad asociada alcance el estado "Habilitado para desarrollo".

## Matriz

| ID | Capacidad | Regla | Estado | Configurable | Fuente/Responsable |
|---|---|---|---|---|---|
| RB-001 | P2P | Límite diario de transferencia | TBD | Sí | Negocio |
| RB-002 | Tarjetas | Cantidad máxima de tarjetas activas | TBD | Sí | Producto/Emisor |
| RB-003 | KYC | Edad mínima permitida | TBD | Según normativa | Cumplimiento |
| RB-004 | EWA | Porcentaje máximo de salario disponible | TBD | Sí | Empresa/Producto |
| RB-005 | Riesgo | Umbral que requiere step-up | TBD | Sí | Riesgo |
| RB-006 | Verticales | Límite de uso o exposición por aliado | TBD | Sí | Riesgo/Aliados |
| RB-007 | Campañas | Tope de incentivo por cliente y por campaña | TBD | Sí | Negocio/Crecimiento |
| RB-008 | Aliados | Porcentaje de reparto de ingresos por capacidad | TBD | No, contractual | Negocio/Legal |
| RB-009 | Consentimiento | Alcance y vigencia del consentimiento por capacidad | TBD | Sí | Cumplimiento |
| RB-010 | Pago recurrente | Límite del débito autorizado y reglas de reintento | TBD | Sí | Producto/Riesgo |
| RB-011 | Wallet | Límites diarios, semanales y mensuales por producto, canal y operación | TBD | Sí | Producto/Riesgo |
| RB-012 | Ledger | Inmutabilidad: las correcciones se realizan únicamente mediante asientos compensatorios o de ajuste | Definida | No | Contabilidad |
| RB-013 | Ledger | Procesamiento idempotente de instrucciones financieras ante reintentos, webhooks o mensajes repetidos | Definida | No | Tecnología/Contabilidad |
| RB-014 | Ledger | Atomicidad de los asientos que conforman una misma operación | Definida | No | Tecnología/Contabilidad |
| RB-015 | Ledger | Control de concurrencia: se impide el uso simultáneo de fondos no disponibles | Definida | No | Tecnología/Riesgo |
| RB-016 | Ledger | Ajustes manuales restringidos, justificados y auditados; aprobación independiente cuando el riesgo lo requiera | Definida | No | Operación/Contabilidad |
| RB-017 | Ledger | Tratamiento de moneda, precisión y reglas de redondeo | TBD | No | Contabilidad |
| RB-018 | Custodia | Modelo de custodia o respaldo aplicable por producto, con separación de los fondos de clientes | TBD | No | Legal/Tesorería |
| RB-019 | Tarjetas | Gestión de vencimiento y renovación de tarjetas | TBD | Sí | Producto/Emisor |
| RB-020 | Tarjetas | Datos sensibles enmascarados por defecto; su visualización requiere autenticación reforzada | Definida | No | Seguridad/Producto |
| RB-021 | Tarjetas | La reposición hereda límites, restricciones y alias de la tarjeta anterior | Definida | Sí | Producto |
| RB-022 | Tarjetas | El bloqueo o la reposición no bloquea la Wallet ni otros medios de pago, salvo condición de riesgo o del producto | Definida | No | Riesgo/Producto |
| RB-023 | Disputas | Plazos y estados del ciclo de vida de la disputa o contracargo | TBD | Según red | Operación/Cumplimiento |
| RB-024 | Pagos | Resolución unificada de QR y enlaces: un mismo punto de entrada para comercios, personas, servicios y verticales | Definida | No | Producto |
| RB-025 | Comercios | Esquema de comisiones y de liquidación a comercios | TBD | Sí | Negocio |
| RB-026 | Ledger | Reversos, devoluciones y ajustes preservan el movimiento original | Definida | No | Contabilidad |
| RB-027 | Seguridad | Controles de autenticación por canal y para operaciones sensibles, conforme a la matriz de controles | Definida | No | Seguridad |
| RB-028 | Backoffice | Sesión administrativa con MFA obligatorio y doble control en operaciones sensibles | Definida | No | Seguridad |
| RB-029 | Aliados | Revocación inmediata de credenciales y accesos del aliado ante incidentes, incumplimientos o baja del acuerdo | Definida | No | Seguridad/Aliados |
| RB-030 | Identidad | Estados y transiciones del ciclo de vida de la identidad, con registro de fecha, causa y actor | Definida | No | Cumplimiento |
| RB-031 | Identidad | Recuperación de cuenta y restablecimiento de factores tratados como operaciones de alto riesgo | Definida | No | Riesgo/Seguridad |
| RB-032 | Consentimiento | El consentimiento de datos no habilita por sí mismo movimientos de fondos; requiere autorización transaccional diferenciada | Definida | No | Cumplimiento |
| RB-033 | Consentimiento | La revocación afecta las nuevas solicitudes que dependen de la autorización, sin afectar credenciales vigentes para otros clientes | Definida | No | Cumplimiento |
| RB-034 | Wallet Familiar | Reglas de edad, representación o consentimiento, propiedad de fondos y facultades del titular y del dependiente | TBD | Según normativa | Legal/Cumplimiento |
| RB-035 | Wallet Familiar | Límites por categoría de comercio y restricciones de compra del dependiente | TBD | Sí | Producto/Riesgo |
| RB-036 | Wallet Familiar | Geocercas sujetas a consentimiento, finalidad definida y disponibilidad del dispositivo | Definida | Sí | Cumplimiento |
| RB-037 | Wallet Empresarial | Flujos de aprobación, centros de costo y políticas internas de la empresa | TBD | Sí | Empresa/Producto |
| RB-038 | EWA | Límites porcentuales y monetarios del adelanto, y recuperación durante el proceso de nómina | TBD | Sí | Empresa/Producto |
| RB-039 | EWA | Tratamiento de excepciones que afectan el salario final o la recuperación (correcciones, terminación laboral, ausencias, incapacidades, fallos de recuperación) | TBD | Sí | Empresa/Producto |
| RB-040 | Cripto | Diferenciación de custodia, liquidación, riesgo y tratamiento jurídico de los activos digitales respecto de los fondos fiat | Definida | No | Legal/Cumplimiento |
| RB-041 | Crédito | Reglas de elegibilidad, scoring y evaluación de capacidad de pago | TBD | Sí | Riesgo/Negocio |
| RB-042 | Notificaciones | Preferencias configurables por el usuario, respetando las comunicaciones obligatorias de seguridad y cumplimiento | Definida | Sí | Producto/Cumplimiento |
| RB-043 | Backoffice | Segregación de funciones: un mismo usuario no solicita y aprueba la misma operación cuando el riesgo lo exige | Definida | No | Control interno |
| RB-044 | Backoffice | Bitácora de auditoría append-only, no alterable desde la interfaz administrativa | Definida | No | Auditoría/Seguridad |
| RB-045 | Conciliación | Cierre diario con cuadre de sumas de control y reporte de resultados | TBD | No | Operación/Contabilidad |
| RB-046 | Conciliación | Los asientos de ajuste se generan sobre el ledger sin alterar los movimientos originales | Definida | No | Contabilidad |
| RB-047 | Tesorería | Umbrales mínimos operativos y alertas tempranas ante insuficiencia de fondos | TBD | Sí | Tesorería/Riesgo |
| RB-048 | Configuración | Parámetros versionados con vigencia desde y hasta, e historial consultable | Definida | No | Producto/Tecnología |
| RB-049 | Configuración | Reglas de precedencia y resolución de conflictos entre ámbitos: institución, producto, cliente, aliado, canal y tipo de operación | TBD | No | Producto/Arquitectura |
| RB-050 | Aliados | Certificación técnica obligatoria antes de publicar una capacidad; sin acuerdo vigente la capacidad no se expone | Definida | No | Aliados/Seguridad |
| RB-051 | Aliados | Suspensión inmediata de una capacidad sin requerir la colaboración del aliado | Definida | No | Aliados/Riesgo |
| RB-052 | Aliados | Una capacidad retirada no se reactiva: su reincorporación exige nuevo proceso de admisión y certificación | Definida | No | Aliados |
| RB-053 | Aliados | Acceso a datos por alcance mínimo, sin acceso directo al ledger, a credenciales del cliente ni a tokens de sesión reutilizables | Definida | No | Seguridad/Aliados |
| RB-054 | Marca | Marca única de la plataforma con reglas de co-branding; sin white-label ni personalización de la experiencia base por comercio o institución | Definida | No | Marca/Legal |
| RB-055 | Verticales | Capacidades comunes exigidas a toda vertical: catálogo, pago, comprobante, recurrencia, reversos, conciliación, soporte y métricas | Definida | No | Producto |
| RB-056 | Campañas | Presupuesto, vigencia y tope de exposición por cliente y por campaña | TBD | Sí | Negocio/Crecimiento |
| RB-057 | Gobernanza de datos | Alcance mínimo, vigencia definida, ausencia de cesión no autorizada y trazabilidad de los accesos de aliados a datos del cliente | Definida | No | Cumplimiento/Datos |
| RB-058 | Ingresos | Información previa, clara y versionada al cliente sobre comisiones, precios y cargos | Definida | No | Negocio/Legal |
| RB-059 | Privacidad | Minimización de datos y procedimiento de cierre o eliminación de cuenta, con publicación de qué se elimina y qué se conserva | Definida | No | Cumplimiento |
| RB-060 | Riesgo | Acciones graduadas por reputación de aliado: monitoreo reforzado, retención de liquidaciones, suspensión preventiva y baja del catálogo | Definida | Según riesgo | Riesgo/Aliados |

## Reconciliación con la matriz de trazabilidad

- Las reglas de esta matriz se referencian desde la columna **Reglas asociadas** de `Matriz_Trazabilidad_Wallet.md`.
- Una regla marcada como `TBD` con impacto en una funcionalidad de la fase en curso deberá cerrarse antes de que dicha funcionalidad alcance el estado "Habilitado para desarrollo".
- Las reglas con impacto financiero deberán reflejarse además en los flujos del Anexo B y en los criterios de aceptación del Anexo I cuando corresponda.

## Control de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 18/09/2026 | Versión inicial: 60 reglas. Se conservan RB-001 a RB-010 del apartado F.1 del Anexo F y se incorporan las reglas derivadas de las secciones 1 a 27 de la especificación funcional. |
| 1.1 | 18/09/2026 | Se refresca la versión de referencia de los anexos (v1.10, cierre de DJ-009). Ninguna regla queda condicionada por la jurisdicción inicial, que se resuelve en el registro de decisiones. |
