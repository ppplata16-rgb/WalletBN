# REGISTRO DE DECISIONES DEL PROYECTO — PLATAFORMA WALLET FINANCIERA INTEGRAL

| Campo | Valor |
|---|---|
| Documento | Registro de decisiones y supuestos pendientes |
| Versión | 1.2 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Documentos de referencia | `Anexos_Complementarios_Alcance_Wallet.md` (v1.10), Anexo J · `Especificacion_Funcional_Wallet_Financiera_Integral.md` (v1.12) · `Opinion_Juridica_Regulatoria_Wallet_Panama.md` (18/09/2026; sustento del cierre de DJ-009) |
| Estructura y reglas de uso | Anexo J, apartado J.1 |
| Artefactos relacionados | `Matriz_Trazabilidad_Wallet.md` · `Catalogo_Integraciones_Wallet.md` · `Matriz_Reglas_Negocio_Wallet.md` |

## Propósito

Este registro concentra las decisiones que condicionan la materialización de la plataforma, tanto las ya cerradas —cuya resolución existe para evitar reabrir su discusión— como las pendientes, que constituyen dependencias bloqueantes mientras no se cierren. Cada decisión declara su responsable de definición, su fecha objetivo y las capacidades que dependen de ella.

## Convenciones

- **ID:** `DJ-<secuencial>`. Los códigos se asignan en los apartados J.2 y J.3 del Anexo J y no se reutilizan.
- **Estado:** `Pendiente`, `En análisis`, `Cerrada` o `Descartada`.
- **Capacidades afectadas:** identificadores de la matriz de trazabilidad (`TRZ-`) que dependen de la decisión. Las decisiones de alcance transversal se marcan como tales.
- **Impacto:** dimensión afectada por la decisión, conforme al Anexo J.1 (alcance, costo, cronograma o arquitectura).
- **TBD:** por definir.
- Toda decisión con estado distinto de "Cerrada" es dependencia bloqueante para las capacidades que afecte, conforme a la sección 28 de la especificación funcional.

## Decisiones cerradas

| ID | Tema | Descripción | Capacidades afectadas | Resp. definición | Fecha objetivo | Estado | Decisión tomada | Impacto |
|---|---|---|---|---|---|---|---|---|
| DJ-001 | Modelo de aliados | Determinar el modelo de incorporación de terceros al ecosistema | TRZ-21-001, TRZ-21-002, TRZ-12-018 | Producto/Negocio | 16/09/2026 | Cerrada | Modelo curado: no existe publicación abierta ni autoincorporación; toda capacidad requiere evaluación, acuerdo expreso y certificación | Alcance y arquitectura de la Fase 7 |
| DJ-002 | Marca de la plataforma | Definir si los aliados operan bajo marca propia o compartida | TRZ-22-001, TRZ-22-002 | Marca/Legal | 16/09/2026 | Cerrada | Marca única, con presencia de aliados bajo su propia marca dentro de espacios delimitados | Alcance de la Fase 7 |
| DJ-003 | White-label y personalización | Determinar si se ofrece personalización de la experiencia base por comercio o institución | TRZ-22-002 | Producto/Negocio | 16/09/2026 | Cerrada | Exclusión del white-label de la aplicación y de la personalización de la experiencia base por comercio o institución | Alcance; reduce la superficie de la Fase 7 |
| DJ-004 | Mensajería y capacidades sociales | Determinar si la mensajería y las capacidades sociales forman parte del alcance | Transversal | Producto/Negocio | 16/09/2026 | Cerrada | Excluidas del alcance por el momento | Alcance |
| DJ-009 | Jurisdicción inicial | Determinar el país o países de operación inicial y el marco regulatorio aplicable a cada producto | Transversal | Legal/Negocio | 18/09/2026 | Cerrada | República de Panamá como jurisdicción de operación inicial, con marco regulatorio determinado por la actividad efectivamente realizada —Ley 23 de 2015 y régimen PBC/FT/FPADM de la SBP, legislación bancaria y control de captación no autorizada, datos personales, contratación electrónica, protección al consumidor, tarjetas, remesas, financiamiento, fideicomiso y mercado de valores—, sin licencia única fintech, conforme a `Opinion_Juridica_Regulatoria_Wallet_Panama.md`; cada módulo con régimen sectorial propio (remesas, crédito, adelanto salarial, inversiones y activos virtuales) exige revisión jurídica previa a su habilitación | Alcance, cumplimiento y arquitectura |

## Decisiones pendientes

| ID | Tema | Descripción | Capacidades afectadas | Resp. definición | Fecha objetivo | Estado | Decisión tomada | Impacto |
|---|---|---|---|---|---|---|---|---|
| DJ-005 | Modelo de custodia de fondos | Definir quién mantiene legalmente los fondos de los clientes, bajo qué figura contractual, con qué cuentas de salvaguarda y cómo se corresponde con los saldos del ledger | TRZ-02-002, TRZ-02-003, TRZ-02-024, TRZ-02-025, TRZ-17-004, TRZ-20-003 | Legal/Tesorería | TBD | Pendiente | — | Alcance y arquitectura; bloquea el núcleo de la Fase 1 |
| DJ-006 | Entidad emisora y procesador de tarjetas | Seleccionar la entidad emisora, el procesador y el esquema de certificación con la red de pagos | TRZ-03-001, TRZ-03-002, TRZ-03-003, TRZ-03-008, TRZ-03-009 | Producto/Tarjetas | TBD | Pendiente | — | Alcance y cronograma; condición de entrada de la Fase 1 |
| DJ-007 | Mecanismo de transferencias bancarias | Definir el mecanismo de entrada y salida de fondos hacia cuentas bancarias y su liquidación | TRZ-02-013, TRZ-04-004 | Tesorería/Producto | TBD | Pendiente | — | Alcance y arquitectura; condición de entrada de la Fase 1 |
| DJ-008 | Modelo de adquirencia y QR | Definir el modelo de adquirencia, el estándar de QR y las condiciones de liquidación a comercios | TRZ-04-006, TRZ-04-007, TRZ-04-008 | Producto/Negocio | TBD | Pendiente | — | Alcance; condición de entrada de la Fase 2 |
| DJ-010 | Modelo operativo de KYC/AML | Definir el modelo operativo de identificación, validación, monitoreo transaccional y gestión de casos, propio o delegado | TRZ-05-003, TRZ-01-004 | Cumplimiento | TBD | Pendiente | — | Alcance y arquitectura; condición de entrada de la Fase 1 |
| DJ-011 | Modelo operativo de disputas | Definir el circuito de disputas y contracargos, sus plazos y la responsabilidad de cada parte | TRZ-03-021 | Operación/Cumplimiento | TBD | Pendiente | — | Alcance operativo |
| DJ-012 | Fuente y frecuencia de información de nómina para EWA | Definir de dónde y con qué frecuencia se obtiene el salario devengado y cómo se recupera el adelanto | TRZ-09-001, TRZ-09-014, TRZ-09-018 | Producto/Empresa | TBD | Pendiente | — | Alcance; condición de entrada de la Fase 3 |
| DJ-013 | Rol de la plataforma en productos de crédito | Determinar si la plataforma origina, intermedia o solo distribuye productos de crédito y quién asume el riesgo | TRZ-11-001, TRZ-11-003, TRZ-11-005 | Riesgo/Negocio | TBD | Pendiente | — | Alcance, cumplimiento y modelo de ingresos; condición de entrada de la Fase 4 |
| DJ-014 | Modelo de custodia crypto | Definir el modelo de custodia de activos digitales y su separación de los fondos fiat | TRZ-10-012 | Legal/Tesorería | TBD | Pendiente | — | Alcance; condición de entrada de la Fase 5 |
| DJ-015 | Volumetría inicial | Establecer los volúmenes de lanzamiento y de proyección a 12 y 36 meses | Transversal | Negocio/Arquitectura | TBD | Pendiente | — | Dimensionamiento y costo; no bloquea la definición funcional |
| DJ-016 | SLA y objetivos no funcionales | Definir disponibilidad, desempeño, RTO y RPO por dominio crítico | TRZ-20-002 | Arquitectura/Operación | TBD | Pendiente | — | Arquitectura y costo; no bloquea la definición funcional |
| DJ-017 | Proveedores de notificaciones | Seleccionar los proveedores de push, SMS, correo y mensajería | TRZ-15-001 | Producto/Tecnología | TBD | Pendiente | — | Alcance operativo |
| DJ-018 | Capacidades de la primera liberación | Determinar qué capacidades forman parte de la primera entrega y con qué alcance | Transversal | Producto/Negocio | TBD | Pendiente | — | Alcance y cronograma |
| DJ-019 | Modelo de admisión, certificación y reparto de ingresos de aliados | Definir el proceso de admisión, los criterios de certificación y el esquema de reparto de ingresos con aliados | TRZ-02-018, TRZ-12-018, TRZ-14-015, TRZ-21-001, TRZ-21-002 | Aliados/Negocio | TBD | Pendiente | — | Alcance y modelo de ingresos; condición de entrada de la Fase 7 |
| DJ-020 | Verticales y capacidades de la primera liberación del ecosistema | Definir qué verticales y capacidades de aliados se incorporan en la primera liberación del ecosistema | TRZ-24-001 | Producto/Negocio | TBD | Pendiente | — | Alcance y cronograma de la Fase 7 |
| DJ-021 | Alcance, vigencia y evidencia de los consentimientos por capacidad | Definir el alcance, la vigencia, el mecanismo de registro y la evidencia de los consentimientos otorgados a cada capacidad | TRZ-01-013, TRZ-07-018, TRZ-26-001 | Cumplimiento | TBD | Pendiente | — | Alcance y arquitectura; condición de entrada de la Fase 7 |
| DJ-022 | Esquema de autorización transaccional delegada | Definir el esquema de autorización para que una capacidad inicie movimientos de fondos, diferenciado del consentimiento de datos | TRZ-26-001 | Cumplimiento/Riesgo | TBD | Pendiente | — | Alcance y arquitectura |
| DJ-023 | Modelo operativo de aliados | Definir certificación, monitoreo, suspensión, deprecación y baja de aliados y sus capacidades | TRZ-21-003, TRZ-22-001, TRZ-26-003 | Aliados/Operación | TBD | Pendiente | — | Alcance operativo; condición de entrada de la Fase 7 |
| DJ-024 | Retención de información | Establecer los períodos de conservación por tipo de información y las obligaciones aplicables | Transversal | Cumplimiento/Legal | TBD | Pendiente | — | Cumplimiento, dimensionamiento y costo |
| DJ-025 | Asignación de responsables funcionales por dominio | Asignar el responsable funcional de cada dominio y funcionalidad, conforme a la columna correspondiente de la matriz de trazabilidad | Transversal | Producto/Dirección | TBD | Pendiente | — | Requisito del Anexo H.1 para que una capacidad pase a "En definición"; bloquea la ratificación de la madurez |

## Reconciliación con los demás artefactos

- Las decisiones de este registro se referencian desde la columna **Dependencias principales** de `Matriz_Trazabilidad_Wallet.md`, mediante su código `DJ-`.
- Las decisiones que condicionan la disponibilidad de un proveedor se relacionan con las integraciones de `Catalogo_Integraciones_Wallet.md`, mediante su código `INT-`.
- Una decisión cuyo cierre altere reglas de negocio deberá reflejarse en `Matriz_Reglas_Negocio_Wallet.md`; si altera capacidades, reglas, estados o condiciones, incrementa la versión de la especificación funcional conforme a sus reglas de control de cambios.
- El cierre de DJ-009 fija la jurisdicción inicial (República de Panamá) y el marco regulatorio aplicable por producto, y no cierra por sí mismo las decisiones derivadas del mismo análisis legal, que permanecen pendientes: DJ-005 (custodia de fondos), DJ-010 (KYC/AML), DJ-013 (rol en crédito), DJ-014 (custodia crypto) y DJ-024 (retención de información). Los módulos con régimen sectorial propio (remesas, crédito, adelanto salarial, inversiones y activos virtuales) se habilitan únicamente con revisión jurídica previa, conforme a la opinión de referencia.

## Control de versiones

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 18/09/2026 | Versión inicial: 24 decisiones con identificador, responsable y capacidades afectadas. Las decisiones cerradas se incorporan con su resolución y fecha, y las pendientes con su impacto previsto. |
| 1.1 | 18/09/2026 | Se incorpora DJ-025, asignación de responsables funcionales por dominio, requerida por el Anexo H.1. |
| 1.2 | 18/09/2026 | DJ-009 pasa a decisiones cerradas: jurisdicción inicial, República de Panamá, y marco regulatorio aplicable por producto, sustentado en `Opinion_Juridica_Regulatoria_Wallet_Panama.md`, incorporada como documento de referencia. Se explicitan las decisiones derivadas que permanecen pendientes. |