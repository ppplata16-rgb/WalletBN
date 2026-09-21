# ANEXOS COMPLEMENTARIOS DEL ALCANCE FUNCIONAL

Los siguientes anexos complementan la especificación funcional de la plataforma y forman parte del marco de definición del proyecto.

Su propósito es proporcionar trazabilidad, delimitación y criterios suficientes para estimar, desarrollar, validar y operar cada capacidad, sin convertir la especificación funcional en un diseño técnico detallado.

Los valores, proveedores, volúmenes o reglas que todavía no hayan sido definidos deberán declararse expresamente como **TBD — Por definir**, y cerrarse antes de que la capacidad relacionada alcance el estado **Habilitado para desarrollo**.

| Campo | Valor |
|---|---|
| Documento | Anexos complementarios del alcance funcional |
| Versión | 1.10 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Documento principal | `Especificacion_Funcional_Wallet_Financiera_Integral.md` |
| Anexos | A a J |

## Control de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 16/09/2026 | Versión inicial: actores, flujos críticos, requisitos no funcionales, volumetría, integraciones, reglas de negocio, modelo operativo, criterios de habilitación y aceptación, y decisiones pendientes. |
| 1.1 | 16/09/2026 | Correcciones de consistencia con la especificación principal: naturaleza del alcance, ciclo de vida operativo y tratamiento de Wallet/tarjeta. |
| 1.2 | 16/09/2026 | Anexo H ampliado a ciclo de vida operativo: distinción entre admisión y operación, condiciones de reactivación y reincorporación tras una retirada. |
| 1.3 | 18/09/2026 | Anexo F ampliado con la estructura mínima y las reglas de uso de la **matriz de trazabilidad del proyecto**, referenciada desde la sección 30 de la especificación funcional, y con la referencia a los artefactos vigentes `Matriz_Trazabilidad_Wallet.md` y `Matriz_Reglas_Negocio_Wallet.md`. |
| 1.4 | 18/09/2026 | Anexo F reestructurado: la definición de cada matriz (columnas mínimas y reglas de uso) queda separada del ejemplo de registro, y se explicitan los valores admitidos por la columna Estado. |
| 1.5 | 18/09/2026 | Anexos E y J reestructurados con la definición de estructura separada del ejemplo de registro, y asignación de códigos `INT-` e `DJ-` para permitir la referencia entre matrices del proyecto. Se incorpora la integración de remesas (INT-027) y se referencian los artefactos `Catalogo_Integraciones_Wallet.md` y `Registro_Decisiones_Wallet.md`. |
| 1.6 | 18/09/2026 | Anexo E renombrado a catálogo de integraciones externas, para deslindarlo de las dependencias del proyecto, que se clasifican en la sección 28 de la especificación. Se incorpora DJ-025, asignación de responsables funcionales por dominio. |
| 1.7 | 18/09/2026 | Actualización de las referencias al apartado de declaración de madurez de la sección 30, renombrado a *Fases propuestas*. |
| 1.8 | 18/09/2026 | Actualización de las referencias cruzadas tras la renumeración de la especificación funcional: los estados de madurez pasan a la sección 30 y las fases a la sección 31. |
| 1.9 | 18/09/2026 | Actualización del apartado F.2: la matriz de trazabilidad pasa a ser el artefacto donde se declara el estado de madurez, al retirarse la declaración de estado de las fases. |
| 1.10 | 18/09/2026 | Anexo J: DJ-009 pasa a decisiones cerradas —jurisdicción inicial, República de Panamá, y marco regulatorio aplicable por producto, conforme a la opinión jurídica regulatoria— y se retira de las pendientes. |

## Relación con la especificación funcional

La especificación funcional define las capacidades, principios y requisitos funcionales de la plataforma objetivo; este documento define los artefactos que complementan y permiten acreditar su nivel de definición, validación y operación. La incorporación de una capacidad a un compromiso de desarrollo o entrega dependerá de su estado de madurez, fase aprobada y alcance contractual correspondiente. En caso de discrepancia prevalece la especificación funcional y deberá corregirse el anexo correspondiente.

Los anexos no crean capacidades por sí mismos: describen cómo se definen, validan y operan las capacidades ya descritas en la especificación. Ambos documentos y la **matriz de trazabilidad del proyecto** deberán mantenerse sincronizados.

## Artefactos del proyecto

Este documento define la **estructura** de los artefactos de control del proyecto. Los **datos** se mantienen en artefactos separados, que se actualizan sin modificar la especificación ni estos anexos.

| Artefacto | Contenido | Estructura definida en |
|---|---|---|
| `Matriz_Trazabilidad_Wallet.md` | Una fila por funcionalidad declarada, con su dominio, estado de madurez, fase prevista, dependencias, responsable y evidencia | Anexo F.2 |
| `Matriz_Reglas_Negocio_Wallet.md` | Reglas de negocio que varían por producto, cliente, proveedor o etapa | Anexo F.1 |
| `Catalogo_Integraciones_Wallet.md` | Integraciones externas con su definición técnica y su gestión operativa | Anexo E.1 |
| `Registro_Decisiones_Wallet.md` | Decisiones cerradas y pendientes, con responsable, fecha objetivo e impacto | Anexo J.1 |

Reglas de referencia entre artefactos:

- Los códigos se asignan siempre en este documento de anexos (`RB-` en F.1, `TRZ-` según F.2, `INT-` en E.2 y `DJ-` en J.2 y J.3) y se utilizan como referencia en todos los demás artefactos y en la especificación funcional.
- Las referencias entre artefactos se realizan por código y no por nombre, para preservar la trazabilidad ante cambios de redacción.
- Ningún artefacto deberá definir códigos propios fuera del apartado que le corresponde.

---

# ANEXO A — ACTORES Y RESPONSABILIDADES FUNCIONALES

La plataforma contempla distintos tipos de actores con responsabilidades y permisos diferenciados.

La existencia de un actor en esta matriz no implica que todas sus capacidades se encuentren habilitadas desde la primera fase.

## A.1 Actores principales

| Actor | Responsabilidad funcional |
|---|---|
| Cliente persona natural | Administra su identidad, Wallets, medios de pago, fondos, transferencias, productos y autorizaciones |
| Titular familiar | Administra sus productos y, cuando aplique, relaciones financieras con dependientes |
| Dependiente | Utiliza los productos, fondos y medios de pago habilitados dentro de los permisos establecidos |
| Representante empresarial | Administra la relación de una empresa con la plataforma |
| Administrador empresarial | Gestiona colaboradores, subcuentas, tarjetas, límites, presupuestos y políticas dentro de su ámbito |
| Colaborador | Utiliza productos o fondos empresariales que le hayan sido asignados |
| Comercio | Recibe pagos, consulta operaciones y gestiona las funciones comerciales habilitadas |
| Operador de comercio | Persona que opera las funciones habilitadas de un comercio específico, con permisos acotados a su ámbito |
| Administrador de cliente o institución | Gestiona su propia cartera y usuarios dentro de los parámetros definidos por la plataforma, cuando el modelo lo contemple |
| Operador interno | Ejecuta procesos operativos autorizados sobre clientes, transacciones y casos |
| Analista de cumplimiento | Gestiona procesos KYC, KYB, AML y casos asociados |
| Analista de fraude | Analiza alertas, patrones y eventos de riesgo o fraude |
| Operador de conciliación | Gestiona diferencias entre ledger, bancos, procesadores, comercios y terceros |
| Operador de tesorería | Administra posiciones de liquidez, fondeo y cuentas operativas o de compensación |
| Administrador de plataforma | Configura productos, límites, tarifas, proveedores y parámetros globales |
| Auditor | Consulta evidencias, eventos, decisiones y bitácoras sin capacidad de modificación |
| Aliado | Provee una capacidad o producto integrado dentro del ecosistema |
| Proveedor financiero | Ejecuta funciones especializadas como emisión, adquirencia, custodia, crédito o procesamiento |

Los roles administrativos internos y su alcance se detallan en la sección 16 de la especificación funcional; este anexo constituye la referencia canónica de actores del ecosistema.

## A.2 Principios de responsabilidad

- Todo actor deberá operar únicamente dentro de los permisos correspondientes a su rol y ámbito.
- Los permisos deberán aplicar mínimo privilegio y segregación de funciones.
- Las responsabilidades de operación, aprobación y auditoría deberán separarse cuando el nivel de riesgo lo requiera.
- Ningún actor externo deberá acceder directamente al ledger, credenciales del cliente o infraestructura interna.
- Cada producto deberá identificar las responsabilidades que corresponden a la plataforma y aquellas asumidas por terceros.

---

# ANEXO B — FLUJOS FUNCIONALES CRÍTICOS

Antes de habilitar para desarrollo las capacidades principales deberán existir definiciones funcionales suficientes de sus flujos end-to-end.

Los flujos siguientes constituyen el conjunto mínimo inicial que deberá documentarse.

## B.1 Registro y vinculación de una persona

**Registro → verificación de contacto → autenticación → captura de identidad → KYC → validaciones AML/PEP/sanciones → aceptación contractual → creación de relación financiera → habilitación de productos.**

El flujo deberá contemplar estados pendientes, rechazo, necesidad de información adicional y recuperación del proceso.

## B.2 Registro de empresa

**Registro del representante → validación de identidad → información societaria → KYB → identificación de beneficiarios finales → controles AML → aprobación → creación de la empresa → asignación de roles administrativos.**

## B.3 Fondeo de Wallet

**Solicitud de carga → selección del origen → validaciones → autorización externa → confirmación → contabilización en ledger → actualización de saldo → notificación → conciliación posterior.**

El proceso deberá soportar reintentos e impedir créditos duplicados.

## B.4 Transferencia P2P

**Identificación del destinatario → monto → validación de saldo → límites → riesgo → autorización → contabilización → actualización de saldos → notificación.**

La contabilización deberá ser atómica.

## B.5 Transferencia bancaria

**Solicitud → validación de cuenta destino → límites → riesgo → autorización → reserva o débito de fondos → envío al proveedor → confirmación → liquidación → conciliación.**

Deberán contemplarse estados intermedios cuando la liquidación no sea inmediata.

## B.6 Pago mediante QR

**Lectura o generación del QR → resolución del destinatario y operación → validación del importe → riesgo → autorización → contabilización → confirmación al pagador y receptor → conciliación/liquidación cuando corresponda.**

## B.7 Emisión de tarjeta

**Solicitud → verificación de elegibilidad → selección/configuración del producto → solicitud al emisor/procesador → emisión → asociación con Wallet → activación → habilitación de controles.**

## B.8 Compra con tarjeta

**Solicitud de autorización → validación de tarjeta → saldo/límite → riesgo → autorización o rechazo → retención → clearing → contabilización definitiva → settlement → conciliación.**

## B.9 Reverso y devolución

**Identificación de la operación original → validación de elegibilidad → autorización → creación del movimiento compensatorio → actualización financiera → notificación → conciliación.**

Nunca deberá modificarse la operación financiera original.

## B.10 Disputa o contracargo

**Registro → captura de evidencia → análisis → escalamiento cuando corresponda → seguimiento de plazos → resolución → efecto financiero si aplica → cierre.**

## B.11 Recuperación de cuenta

**Solicitud → evaluación de riesgo → verificación reforzada → recuperación o sustitución de factores → invalidación de sesiones previas cuando corresponda → período de protección o controles adicionales → notificación.**

## B.12 Conciliación diaria

**Ingesta de fuentes externas → normalización → matching automático → identificación de diferencias → clasificación → resolución o ajuste → cuadre → cierre → reporte.**

## B.13 Incorporación de aliado

**Propuesta → due diligence → acuerdo → integración → certificación → aprobación → publicación → monitoreo → suspensión o baja cuando corresponda.**

## B.14 Adelanto salarial

**Consulta de salario devengado → cálculo de disponibilidad → reglas de empresa → evaluación → solicitud → aprobación → desembolso → contabilización → recuperación por nómina → conciliación.**

## B.15 Crédito

**Precalificación → solicitud → evaluación → oferta → aceptación contractual → desembolso → administración de saldo → pagos → mora o cierre.**

## B.16 Consentimiento y autorización transaccional

**Solicitud de acceso de una capacidad → presentación del alcance solicitado → consentimiento explícito del cliente → registro con vigencia y evidencia → uso por parte del aliado → consulta del cliente → revocación → invalidación de las autorizaciones asociadas → confirmación al cliente y al aliado.**

Deberán distinguirse el consentimiento de datos y la autorización para iniciar movimientos de fondos, que constituye un permiso diferenciado y limitado por monto, beneficiario, vigencia, recurrencia y tipo de operación. La revocación deberá tener efecto sobre las nuevas solicitudes que dependan de la autorización y no deberá afectar las credenciales generales del aliado vigentes para otros clientes.

## B.17 Pago de servicios y verticales

**Selección de la vertical o servicio → identificación del cliente o contrato → consulta de obligación o monto → validación → riesgo → autorización → contabilización → confirmación al aliado → confirmación al cliente → liquidación al aliado → conciliación.**

El flujo deberá soportar la consulta de deuda o recarga con el aliado, los estados intermedios mientras el aliado confirma, y el tratamiento de pagos no aplicados o duplicados. Toda operación deberá reutilizar la orquestación de pagos y el ledger de la plataforma.

## B.18 Pago recurrente y débito autorizado

**Alta de la suscripción → presentación de condiciones → autorización del cliente con límites → ejecución programada → validaciones de saldo y riesgo → contabilización → notificación → cancelación o modificación por el cliente.**

La autorización deberá ser revocable en cualquier momento y su alcance deberá quedar registrado. Deberán contemplarse fondos insuficientes, reintentos, suspensión y terminación de la suscripción.

## B.19 Bloqueo, desbloqueo y reposición de tarjeta

**Solicitud del cliente o decisión de riesgo → validación → cambio de estado de la tarjeta → invalidación de credenciales o tokens asociados cuando corresponda → notificación → solicitud de reposición → emisión y asociación → activación.**

El bloqueo o reposición de una tarjeta no deberá implicar por sí mismo el bloqueo de la Wallet ni de otros medios de pago, salvo que una condición de riesgo o del producto así lo requiera. La reposición deberá heredar la configuración de la tarjeta anterior, salvo indicación contraria del cliente.

## B.20 Alta y habilitación de comercio

**Solicitud de alta → validación de identidad y datos del negocio → KYB y controles AML cuando corresponda → verificación de la cuenta de liquidación → aprobación → configuración de comisiones y condiciones → habilitación del cobro → certificación técnica cuando exista integración → monitoreo.**

Deberán contemplarse rechazo, información adicional requerida, suspensión y baja del comercio.

## B.21 Liquidación a comercios

**Cálculo de ventas y comisiones del período → generación del lote de liquidación → validación de retenciones, contracargos y ajustes → aprobación cuando corresponda → transferencia o abono al comercio → confirmación → conciliación → reporte.**

Deberán contemplarse diferencias entre lo vendido y lo liquidado, retenciones por riesgo o disputas y reprocesos.

Los flujos detallados podrán mantenerse en diagramas o documentos separados, pero deberán permanecer trazables respecto de esta especificación.

---

# ANEXO C — REQUISITOS NO FUNCIONALES

Los requisitos no funcionales deberán definirse por nivel de criticidad y no necesariamente mediante un único valor para toda la plataforma.

Los valores cuantitativos podrán permanecer como TBD durante la etapa de definición, pero deberán cerrarse antes de habilitar para desarrollo los componentes a los que correspondan.

## C.1 Disponibilidad

Deberán definirse objetivos de disponibilidad para:

- Identidad y autenticación.
- Core Wallet y ledger.
- Pagos y transferencias.
- Tarjetas.
- Backoffice.
- Integraciones críticas.
- Canales de consulta y notificación.

La falla de una capacidad no crítica deberá evitar afectar innecesariamente al núcleo financiero.

## C.2 Desempeño

Deberán establecerse objetivos para:

- Tiempo de respuesta de operaciones interactivas.
- Tiempo de autorización de pagos.
- Consulta de saldos.
- Consulta de movimientos.
- Procesamiento de transferencias.
- Procesos batch.
- Conciliaciones.
- Reportes.

## C.3 Capacidad y escalabilidad

La arquitectura deberá soportar crecimiento de usuarios, operaciones, productos y aliados sin requerir rediseños estructurales del núcleo.

La capacidad deberá poder escalar de acuerdo con los volúmenes establecidos en el Anexo D.

## C.4 Continuidad

Deberán definirse:

- RTO por dominio crítico.
- RPO por dominio crítico.
- Estrategias de respaldo.
- Recuperación ante pérdida parcial o total de infraestructura.
- Pruebas periódicas de recuperación.
- Procedimientos frente a indisponibilidad de proveedores externos.

## C.5 Integridad transaccional

Las operaciones financieras deberán asegurar:

- Atomicidad.
- Idempotencia.
- Consistencia.
- Protección contra duplicados.
- Trazabilidad.
- Recuperación segura frente a reintentos o interrupciones.

## C.6 Observabilidad

La plataforma deberá permitir:

- Monitoreo de disponibilidad.
- Monitoreo de desempeño.
- Métricas transaccionales.
- Alertas operativas.
- Alertas financieras.
- Registro de errores.
- Correlación de eventos entre componentes.
- Seguimiento de dependencias externas.

## C.7 Seguridad

Deberán mantenerse requisitos diferenciados para:

- Autenticación.
- Autorización.
- Protección de secretos.
- Cifrado.
- Datos financieros.
- Tarjetas.
- Aplicaciones móviles.
- Portal administrativo.
- APIs.
- Integraciones.
- Capacidades de terceros.

## C.8 Auditoría y retención

Los períodos de conservación de registros financieros, seguridad, acceso, cumplimiento y consentimiento deberán establecerse conforme al tipo de información y obligaciones aplicables. La retención resultante alimenta el dimensionamiento definido en el Anexo D.

## C.9 Accesibilidad

La accesibilidad constituye un requisito de la experiencia y no una mejora posterior. Deberán establecerse objetivos para:

- Contraste, tipografía y tamaño mínimo de objetivos táctiles.
- Compatibilidad con lectores de pantalla y con los controles de accesibilidad del sistema operativo.
- Navegación por teclado en el portal administrativo.
- Mensajes de error comprensibles y asociados a su causa.
- Alternativas cuando una capacidad dependa de biometría, cámara o ubicación.

## C.10 Localización y zonas horarias

Deberán definirse:

- Idioma o idiomas soportados y alcance de la traducción.
- Formatos de fecha, hora, moneda y número por país.
- Zona horaria de referencia para registro, cortes, cierres y reportes.
- Tratamiento de operaciones registradas en zonas horarias distintas.
- Requisitos de localización de documentos, comprobantes y comunicaciones.

---

# ANEXO D — VOLUMETRÍA Y SUPUESTOS DE CAPACIDAD

La volumetría constituye una entrada necesaria para dimensionar, estimar y validar la arquitectura.

Mientras los valores no hayan sido definidos deberán mantenerse como TBD y no suponerse unilateralmente durante la estimación.

| Indicador | Lanzamiento | 12 meses | 36 meses |
|---|---:|---:|---:|
| Usuarios registrados | TBD | TBD | TBD |
| Usuarios activos mensuales | TBD | TBD | TBD |
| Usuarios activos diarios | TBD | TBD | TBD |
| Sesiones diarias | TBD | TBD | TBD |
| Operaciones financieras/día | TBD | TBD | TBD |
| Pico de transacciones por segundo | TBD | TBD | TBD |
| Volumen financiero diario | TBD | TBD | TBD |
| Tarjetas emitidas | TBD | TBD | TBD |
| Comercios activos | TBD | TBD | TBD |
| Empresas activas | TBD | TBD | TBD |
| Dependientes | TBD | TBD | TBD |
| Transferencias P2P/día | TBD | TBD | TBD |
| Pagos P2M/día | TBD | TBD | TBD |
| Notificaciones/día | TBD | TBD | TBD |
| Aliados integrados | TBD | TBD | TBD |
| Capacidades/mini-apps publicadas | TBD | TBD | TBD |
| Registros de auditoría/día | TBD | TBD | TBD |
| Almacenamiento de datos y crecimiento anual | TBD | TBD | TBD |

Los escenarios de capacidad deberán incluir comportamiento normal, períodos pico y situaciones excepcionales previsibles.

La retención histórica esperada por tipo de información se define en el apartado C.8 y deberá reflejarse en el dimensionamiento del almacenamiento y del desempeño de las consultas históricas.

---

# ANEXO E — CATÁLOGO DE INTEGRACIONES EXTERNAS

Toda integración externa que sea necesaria para una capacidad deberá formar parte de un catálogo controlado.

El catálogo deberá permitir conocer qué integraciones pueden bloquear o afectar cada fase. Las integraciones aquí definidas son el único tipo de dependencia que la plataforma obtiene de un proveedor o sistema externo; los demás tipos se clasifican en la sección 28 de la especificación funcional.

El artefacto vigente se mantiene en `Catalogo_Integraciones_Wallet.md`, que desarrolla los campos definidos en este anexo.

## E.1 Estructura mínima de una integración

Cada integración del catálogo se identifica con un código `INT-<secuencial>` que no se reutiliza, y deberá registrar los siguientes campos.

**Definición técnica**

| Campo | Contenido |
|---|---|
| Nombre del proveedor o sistema | Denominación de la contraparte o del sistema externo |
| Propósito | Función que cubre dentro de la plataforma |
| Producto o dominio que la utiliza | Dominio de la arquitectura (sección 20) y capacidades que dependen de ella |
| Tipo de integración | Emisión, adquirencia, custodia, comunicaciones, cumplimiento, datos, infraestructura u otro |
| Dirección de comunicación | Entrante, saliente o bidireccional |
| Protocolo o mecanismo de intercambio | API, archivo batch, webhook, mensajería u otro |
| Autenticación | Mecanismo de autenticación y autorización exigido |

**Gestión operativa**

| Campo | Contenido |
|---|---|
| Responsable interno | Rol responsable de la relación y del seguimiento |
| Responsable externo | Contacto de la contraparte |
| Ambientes disponibles | Desarrollo, certificación y producción |
| Documentación | Disponibilidad y ubicación de la documentación técnica |
| SLA conocido | Nivel de servicio comprometido |
| Restricciones | Limitaciones técnicas, contractuales o regulatorias |
| Estado | Confirmada, en negociación, no confirmada o descartada |
| Dependencias | Otras integraciones o decisiones de las que depende |
| Estrategia ante indisponibilidad | Comportamiento previsto ante caída o degradación del proveedor |

Reglas de uso:

- Una integración con estado distinto de "Confirmada" deberá considerarse dependencia bloqueante para las capacidades que la requieran, conforme a la sección 28 de la especificación funcional.
- La sincronía o asincronía del intercambio y su tratamiento idempotente deberán quedar definidos antes de que una capacidad que dependa de la integración alcance el estado "Habilitado para desarrollo".
- Toda integración deberá declarar su estrategia ante indisponibilidad; una dependencia no crítica no deberá detener el núcleo financiero.

## E.2 Catálogo inicial esperado

Las integraciones siguientes constituyen el alcance mínimo que la plataforma espera requerir. Los códigos se asignan en este apartado y se utilizan como referencia desde las demás matrices del proyecto.

| ID | Integración | Propósito | Estado |
|---|---|---|---|
| INT-001 | Proveedor de identidad | Autenticación e identidad | TBD |
| INT-002 | Proveedor KYC/KYB | Identificación y validación | TBD |
| INT-003 | Biometría y prueba de vida | Validación de identidad y step-up | TBD |
| INT-004 | AML / sanciones / PEP | Cumplimiento | TBD |
| INT-005 | Entidad emisora | Emisión de tarjetas | TBD |
| INT-006 | Procesador de tarjetas | Autorización y procesamiento | TBD |
| INT-007 | Red de pagos | Operación de tarjetas | TBD |
| INT-008 | Banco custodio / cuenta de respaldo | Custodia de fondos y cuentas de compensación | TBD |
| INT-009 | Transferencias bancarias | Entrada y salida de fondos | TBD |
| INT-010 | Adquirencia / QR | Pagos a comercios | TBD |
| INT-011 | SMS | Comunicaciones | TBD |
| INT-012 | Push | Comunicaciones | TBD |
| INT-013 | Correo electrónico | Comunicaciones | TBD |
| INT-014 | WhatsApp | Comunicaciones, cuando aplique | TBD |
| INT-015 | Sistemas de nómina | EWA | TBD |
| INT-016 | ERP / contabilidad | Wallet empresarial | TBD |
| INT-017 | Custodio de activos digitales | Crypto | TBD |
| INT-018 | Liquidez crypto | Compra/venta/conversión | TBD |
| INT-019 | Open Banking | Agregación/iniciación | TBD |
| INT-020 | Proveedores de crédito | Marketplace/financiación | TBD |
| INT-021 | Proveedores de seguros | Marketplace | TBD |
| INT-022 | Bureau de crédito y scoring | Evaluación crediticia | TBD |
| INT-023 | Tokenización de tarjetas | Protección de datos sensibles | TBD |
| INT-024 | Firma electrónica y contratos | Aceptación contractual y evidencias | TBD |
| INT-025 | Facturación electrónica | Pago de servicios y verticales | TBD |
| INT-026 | Geolocalización | Riesgo, geocercas y geovelocidad | TBD |
| INT-027 | Proveedores de remesas | Envío y recepción de remesas | TBD |

Una dependencia externa no confirmada deberá considerarse un riesgo o condición pendiente para cualquier capacidad que dependa de ella.

**Ejemplo de registro**

Las filas siguientes ilustran el desarrollo de los campos de E.1 sobre el artefacto vigente, para dos integraciones de criticidad distinta.

| ID | Nombre | Propósito | Dominio | Tipo | Dirección | Protocolo | Autenticación | Resp. interno | Resp. externo | Ambientes | Documentación | SLA | Restricciones | Estado | Dependencias | Estrategia ante indisponibilidad |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| INT-005 | Entidad emisora | Emisión de tarjetas | Tarjetas | Emisión | Bidireccional | API + archivos batch | Credenciales de servicio | Producto/Tarjetas | TBD | TBD | TBD | TBD | Certificación obligatoria de la red; datos de tarjeta fuera del alcance de la plataforma | No confirmada | DJ-006 | Las tarjetas no se emiten; las operaciones existentes no se ven afectadas |
| INT-012 | Push | Comunicaciones | Notificaciones | Comunicaciones | Saliente | API | Credenciales de servicio | Producto/Notificaciones | TBD | TBD | TBD | TBD | Ninguna relevante | No confirmada | DJ-017 | Degradación controlada: la notificación se encola y no bloquea la operación |

---

# ANEXO F — REGLAS DE NEGOCIO Y TRAZABILIDAD

Las reglas funcionales que varíen por producto, cliente, proveedor o etapa deberán mantenerse en una matriz controlada y versionada.

Este anexo define además la estructura mínima y las reglas de uso de la **matriz de trazabilidad del proyecto** exigida por las reglas de control de cambios y por la sección 30 de la especificación funcional.

## F.1 Estructura mínima de la matriz de reglas de negocio

La matriz de reglas de negocio concentra las reglas funcionales que varían por producto, cliente, proveedor o etapa. El artefacto vigente se mantiene en `Matriz_Reglas_Negocio_Wallet.md` y conserva la numeración RB-001 a RB-010.

**Columnas mínimas**

| Columna | Contenido | Origen |
|---|---|---|
| ID | Identificador único y no reutilizable de la regla | Proyecto |
| Capacidad | Capacidad o funcionalidad a la que aplica la regla | Especificación funcional |
| Regla | Condición, valor o comportamiento exigido | Negocio o normativa aplicable |
| Estado | Definida o TBD — Por definir | Proyecto |
| Configurable | Sí, No o condicionado (normativa, riesgo o contrato): indica si el valor deberá poder modificarse sin despliegue de código | Sección 19 |
| Fuente/Responsable | Rol responsable de definir y mantener el valor | Proyecto |

**Reglas de uso**

- Las reglas deberán respetar los ámbitos y las reglas de precedencia definidos en la sección 19 de la especificación funcional.
- Una regla marcada como TBD no deberá considerarse cerrada ni utilizarse como base de estimación.
- Una regla TBD con impacto en una funcionalidad de la fase en curso deberá cerrarse antes de que dicha funcionalidad alcance el estado "Habilitado para desarrollo".

Cada regla deberá vincularse, cuando corresponda, con:

- La capacidad funcional.
- El flujo en el que participa.
- El requisito de negocio.
- El criterio de aceptación.
- La configuración que la implementa.
- La evidencia de validación.

**Ejemplo de registro**

Las filas siguientes ilustran el uso de la estructura. Corresponden a los primeros registros del artefacto vigente y no constituyen un catálogo cerrado.

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

## F.2 Estructura mínima de la matriz de trazabilidad del proyecto

La **matriz de trazabilidad del proyecto** es el artefacto donde se declara el estado de madurez de cada dominio y funcionalidad, y constituye la fuente de consulta para determinar qué se encuentra suficientemente definido para ser estimado y desarrollado.

El artefacto vigente se mantiene en `Matriz_Trazabilidad_Wallet.md`.

**Columnas mínimas**

| Columna | Contenido | Origen |
|---|---|---|
| ID | Identificador único de la fila | Proyecto |
| Dominio | Dominio de la arquitectura al que pertenece | Sección 20 |
| Capacidad o funcionalidad | Grano mínimo: una fila por funcionalidad declarada | Especificación funcional |
| Sección | Sección donde se declara la funcionalidad | Especificación funcional |
| Estado de madurez | Objetivo, En definición, Habilitado para desarrollo u Operativo | Sección 30 y Anexo H |
| Fase prevista | Fase 1 a 7, o "No aplica" | Sección 31 |
| Dependencias principales | Integraciones y decisiones bloqueantes asociadas | Anexos E y J |
| Responsable funcional | Rol responsable de la definición de la funcionalidad | Proyecto |
| Reglas asociadas | Identificadores de la matriz de reglas de negocio aplicables | Apartado F.1 |
| Criterios de aceptación | Criterios específicos aplicables a la funcionalidad | Anexo I |
| Evidencia | Artefacto que acredita la transición de estado alcanzada | Anexo H |

Reglas de uso:

- El estado de madurez se declara por funcionalidad en la matriz. Las fases de la sección 31 agrupan capacidades, pero no declaran estado propio.
- Una funcionalidad no deberá declararse en estado "Habilitado para desarrollo" mientras sus dependencias bloqueantes permanezcan abiertas.
- El estado de madurez registrado es el vigente de la funcionalidad, sin perjuicio del estado de ciclo de vida operativo que corresponda conforme al Anexo H.

**Ejemplo de registro**

Las filas siguientes ilustran el uso de la estructura sobre funcionalidades ya declaradas.

| ID | Dominio | Capacidad o funcionalidad | Sección | Estado de madurez | Fase prevista | Dependencias principales | Responsable funcional | Reglas asociadas | Criterios de aceptación | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| TRZ-04-001 | Pagos | P2P: persona a persona | 4 | En definición | 1 | — | TBD | RB-001 | Anexo I | TBD |
| TRZ-04-006 | Pagos | Pagos mediante QR | 4 | En definición | 2 | E: Adquirencia / QR · J: Modelo de adquirencia y QR | TBD | RB-024 | Anexo I | TBD |
| TRZ-19-002 | Transversal | Elementos configurables: productos, tarifas, comisiones, límites, monedas, reglas, beneficios, parámetros y permisos por aliado | 19 | En definición | 1 y 2 | — | TBD | RB-048 | Anexo I | TBD |

---

# ANEXO G — MODELO OPERATIVO

La especificación funcional deberá complementarse con la definición de quién opera las capacidades una vez habilitadas.

Para cada proceso crítico deberá identificarse un responsable funcional y operativo.

## G.1 Procesos mínimos

| Proceso | Responsabilidad a definir |
|---|---|
| KYC/KYB | Revisión de casos y excepciones |
| AML | Investigación y escalamiento |
| Fraude | Atención de alertas y bloqueos |
| Disputas | Gestión y seguimiento |
| Conciliación | Resolución de diferencias |
| Tesorería | Fondeo, liquidez y posición financiera |
| Soporte al cliente | Atención de consultas e incidentes |
| Seguridad | Gestión de incidentes |
| Tarjetas | Bloqueos, reposiciones y excepciones |
| Aliados | Certificación, monitoreo, suspensión y baja |
| Configuración | Gestión de reglas y parámetros |
| Auditoría | Revisión independiente |
| Operación tecnológica | Disponibilidad y recuperación |

## G.2 Gestión de incidentes

Deberán definirse procedimientos para:

- Incidentes de seguridad.
- Fallas del ledger.
- Duplicación de transacciones.
- Indisponibilidad de proveedores.
- Diferencias de conciliación.
- Fraude.
- Pérdida o exposición de información.
- Errores de liquidación.
- Incidentes con aliados.

Los incidentes deberán conservar trazabilidad desde su identificación hasta su resolución.

---

# ANEXO H — CRITERIOS DE HABILITACIÓN, ACEPTACIÓN Y CICLO DE VIDA OPERATIVO

El estado de madurez definido en la sección 30 deberá complementarse con criterios objetivos de transición. Este anexo define las transiciones de madurez (H.1 a H.3), el estado de ciclo de vida operativo de las capacidades y aliados publicados (H.4) y las transiciones de salida asociadas.

## H.1 Objetivo → En definición

Una capacidad podrá pasar a **En definición** cuando:

- Exista un responsable funcional.
- Su propósito y alcance estén identificados.
- Se conozcan sus principales dependencias.
- Exista intención de incorporarla en una fase del proyecto.

## H.2 En definición → Habilitado para desarrollo

Una capacidad podrá considerarse **Habilitada para desarrollo** cuando, según corresponda:

- Sus flujos principales estén definidos.
- Las reglas críticas de negocio estén cerradas.
- Los actores y permisos estén identificados.
- Las integraciones requeridas estén documentadas.
- Los proveedores necesarios estén confirmados o exista una interfaz suficientemente definida.
- Las responsabilidades operativas y regulatorias estén identificadas.
- Los criterios de aceptación estén definidos.
- Los requisitos no funcionales aplicables estén establecidos.
- Las dependencias bloqueantes estén resueltas.
- Exista aprobación del responsable funcional.

## H.3 Habilitado para desarrollo → Operativo

Una capacidad podrá declararse **Operativa** cuando:

- Se haya completado el desarrollo acordado.
- Los criterios de aceptación funcional hayan sido aprobados.
- Las integraciones necesarias estén certificadas.
- Los controles de seguridad correspondientes hayan sido validados.
- La auditoría y trazabilidad estén habilitadas.
- La conciliación haya sido validada cuando exista impacto financiero.
- El monitoreo y las alertas estén configurados.
- Exista procedimiento de soporte.
- Exista procedimiento de contingencia o recuperación.
- Los responsables operativos estén definidos.
- La documentación necesaria se encuentre disponible.
- Exista aprobación de salida a operación.

La aplicabilidad de cada criterio dependerá de la naturaleza de la capacidad; no todos deberán exigirse a funcionalidades sin impacto financiero, regulatorio u operativo.

## H.4 Estado de ciclo de vida operativo

El estado de ciclo de vida operativo es independiente del estado de madurez. Una capacidad que haya alcanzado el estado de madurez **Operativo** podrá encontrarse en alguno de los siguientes estados de ciclo de vida:

- **Activa:** disponible para los clientes o actores habilitados conforme a las reglas del producto.
- **Suspendida:** temporalmente no disponible por riesgo, incidente, incumplimiento o decisión operativa. Deberá definirse el efecto sobre las operaciones en curso, la comunicación al cliente y las condiciones de reactivación.
- **Deprecada:** deja de ofrecerse a nuevos clientes o usos, pero continúa disponible durante un período controlado para relaciones u obligaciones existentes. Deberá definirse el plazo de continuidad y el tratamiento de las obligaciones pendientes.
- **Retirada:** descontinuada definitivamente. Deberá contemplar el tratamiento de datos, saldos, suscripciones, obligaciones pendientes, evidencia y comunicación al cliente.

Los cambios de ciclo de vida no alteran retroactivamente la madurez alcanzada por la capacidad. Toda transición deberá registrarse con causa y responsable y ser coherente, cuando aplique, con el ciclo de vida de aliados descrito en la sección 21 de la especificación funcional.

Un aliado o una mini-app ya publicada quedan sujetos a este ciclo operativo. Su reincorporación posterior a una capacidad retirada requerirá un nuevo proceso de admisión y certificación; la suspensión, en cambio, admite reactivación conforme a las condiciones que la motivaron.

---

# ANEXO I — CRITERIOS GENERALES DE ACEPTACIÓN FUNCIONAL

Salvo que una capacidad defina criterios específicos, deberán considerarse como mínimo los siguientes principios:

- El flujo principal produce el resultado esperado.
- Los escenarios alternativos y errores previsibles son tratados de forma controlada.
- Una operación repetida no genera efectos financieros duplicados cuando deba ser idempotente.
- Los estados mostrados al cliente son coherentes con el estado real de la operación.
- Toda operación financiera puede trazarse hasta su origen.
- Los movimientos financieros mantienen integridad en el ledger.
- Los permisos impiden que un actor ejecute operaciones fuera de su ámbito.
- Los eventos sensibles generan evidencia de auditoría.
- Los controles de riesgo y cumplimiento requeridos se ejecutan.
- Las fallas de terceros no producen estados financieros inconsistentes.
- Los reversos y ajustes preservan el movimiento original.
- La operación puede conciliarse cuando participe un tercero financiero.
- La información sensible no se expone fuera de los controles definidos.

Los criterios específicos de cada funcionalidad deberán registrarse en la **matriz de trazabilidad del proyecto**.

---

# ANEXO J — SUPUESTOS Y DECISIONES PENDIENTES

Las cuestiones no resueltas deberán administrarse como decisiones pendientes y no quedar implícitas dentro del alcance.

El artefacto vigente se mantiene en `Registro_Decisiones_Wallet.md`.

## J.1 Estructura mínima de una decisión

Cada decisión se identifica con un código `DJ-<secuencial>` que no se reutiliza, y deberá registrar los siguientes campos.

| Campo | Contenido |
|---|---|
| Identificador | Código único de la decisión |
| Tema | Asunto que debe resolverse, en una línea |
| Descripción | Alcance de lo que falta definir y por qué está abierto |
| Capacidades afectadas | Identificadores `TRZ-` de la matriz de trazabilidad que dependen de la decisión |
| Responsable de definición | Rol responsable de cerrarla |
| Fecha objetivo | Fecha comprometida de cierre |
| Estado | Pendiente, En análisis, Cerrada o Descartada |
| Decisión tomada | Resolución adoptada, una vez cerrada |
| Impacto | Alcance, costo, cronograma o arquitectura afectados |

Reglas de uso:

- Toda decisión con estado distinto de "Cerrada" deberá considerarse dependencia bloqueante para las capacidades que afecte, conforme a la sección 28 de la especificación funcional.
- Las decisiones cerradas se conservan con su resolución y su fecha: su registro existe para evitar reabrir su discusión.
- Una decisión podrá convertirse en dependencia bloqueante cuando impida cerrar los requisitos necesarios para que una capacidad alcance el estado "Habilitado para desarrollo".
- Cuando una decisión afecte a una capacidad habilitante completa, deberá tratarse como condición de entrada de la fase correspondiente, conforme a la sección 31.

## J.2 Decisiones cerradas

Se consideran cerradas al momento de esta versión y no admiten reapertura sin pasar por el control de cambios del documento.

| ID | Tema | Decisión tomada | Estado |
|---|---|---|---|
| DJ-001 | Modelo de aliados | Modelo curado: no existe publicación abierta ni autoincorporación; toda capacidad requiere evaluación, acuerdo expreso y certificación | Cerrada |
| DJ-002 | Marca de la plataforma | Marca única, con presencia de aliados bajo su propia marca dentro de espacios delimitados | Cerrada |
| DJ-003 | White-label y personalización | Exclusión del white-label de la aplicación y de la personalización de la experiencia base por comercio o institución | Cerrada |
| DJ-004 | Mensajería y capacidades sociales | Excluidas del alcance por el momento | Cerrada |
| DJ-009 | Jurisdicción inicial | República de Panamá como jurisdicción de operación inicial, con marco regulatorio aplicable por actividad y sin licencia única fintech; cada módulo con régimen sectorial propio exige revisión jurídica previa a su habilitación | Cerrada |

## J.3 Decisiones pendientes

Las decisiones siguientes se registran como pendientes de cierre. Su detalle, responsable, fecha objetivo e impacto se mantienen en el artefacto vigente.

| ID | Tema | Estado |
|---|---|---|
| DJ-005 | Modelo de custodia de fondos | Pendiente |
| DJ-006 | Entidad emisora y procesador de tarjetas | Pendiente |
| DJ-007 | Mecanismo de transferencias bancarias | Pendiente |
| DJ-008 | Modelo de adquirencia y QR | Pendiente |
| DJ-010 | Modelo operativo de KYC/AML | Pendiente |
| DJ-011 | Modelo operativo de disputas | Pendiente |
| DJ-012 | Fuente y frecuencia de información de nómina para EWA | Pendiente |
| DJ-013 | Rol de la plataforma en productos de crédito | Pendiente |
| DJ-014 | Modelo de custodia crypto | Pendiente |
| DJ-015 | Volumetría inicial | Pendiente |
| DJ-016 | SLA y objetivos no funcionales | Pendiente |
| DJ-017 | Proveedores de notificaciones | Pendiente |
| DJ-018 | Capacidades que formarán parte de la primera liberación | Pendiente |
| DJ-019 | Modelo de admisión, certificación y reparto de ingresos de aliados | Pendiente |
| DJ-020 | Verticales y capacidades de la primera liberación del ecosistema | Pendiente |
| DJ-021 | Alcance, vigencia y evidencia de los consentimientos por capacidad | Pendiente |
| DJ-022 | Esquema de autorización transaccional delegada | Pendiente |
| DJ-023 | Modelo operativo de aliados: certificación, monitoreo, suspensión y baja | Pendiente |
| DJ-024 | Retención de información por tipo y obligaciones de conservación aplicables | Pendiente |
| DJ-025 | Asignación de responsables funcionales por dominio | Pendiente |

**Ejemplo de registro**

Las filas siguientes ilustran el desarrollo de los campos de J.1 sobre el artefacto vigente, para una decisión bloqueante de Fase 1 y una decisión de fase posterior.

| ID | Tema | Descripción | Capacidades afectadas | Responsable de definición | Fecha objetivo | Estado | Decisión tomada | Impacto |
|---|---|---|---|---|---|---|---|---|
| DJ-005 | Modelo de custodia de fondos | Definir quién mantiene legalmente los fondos de los clientes, bajo qué figura contractual, con qué cuentas de salvaguarda y cómo se corresponde con los saldos del ledger | TRZ-02-002, TRZ-02-003, TRZ-02-024, TRZ-02-025, TRZ-10-012, TRZ-17-004, TRZ-20-003 | Legal/Tesorería | TBD | Pendiente | — | Alcance y arquitectura; bloquea el núcleo de Fase 1 |
| DJ-020 | Verticales y capacidades de la primera liberación del ecosistema | Definir qué verticales y capacidades de aliados se incorporan en la primera liberación del ecosistema | TRZ-24-001 | Producto/Negocio | TBD | Pendiente | — | Alcance y cronograma de la Fase 7 |
- Esquema de autorización transaccional delegada.
- Modelo operativo de aliados: certificación, monitoreo, suspensión y baja.
- Retención de información por tipo y obligaciones de conservación aplicables.

Una decisión pendiente deberá convertirse en dependencia bloqueante cuando impida cerrar los requisitos necesarios para que una capacidad alcance el estado **Habilitado para desarrollo**.
