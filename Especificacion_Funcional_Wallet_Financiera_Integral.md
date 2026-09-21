# Especificación Funcional -- Plataforma Wallet Financiera Integral

| Campo | Valor |
|---|---|
| Documento | Especificación funcional de la plataforma |
| Versión | 1.12 |
| Fecha | 18/09/2026 |
| Estado | Borrador en revisión |
| Contenido | Cinco partes y 32 secciones, más glosario |
| Naturaleza | Capacidades de la plataforma objetivo, no compromisos de entrega |

## Introducción

Esta plataforma constituye un **ecosistema financiero digital
integral**, diseñado para personas, familias y empresas, que permite
gestionar fondos, medios de pago, tarjetas, transferencias y otros
servicios financieros desde una plataforma unificada.

La solución se materializa en dos aplicaciones complementarias que
comparten una misma infraestructura financiera:

-   Una **aplicación móvil**, orientada a los clientes (personas,
    familias y empresas), desde la cual el usuario se registra, gestiona
    sus fondos, administra tarjetas y ejecuta sus operaciones
    financieras cotidianas.
-   Una **aplicación web administrativa**, orientada principalmente al
    personal interno y operativo y, cuando corresponda, a usuarios
    administrativos delegados de instituciones, empresas o comercios.
    Actúa como backoffice para la gestión de clientes, empresas,
    comercios, aliados del ecosistema, transacciones, cumplimiento,
    riesgo, conciliación y configuración de productos y capacidades
    publicadas, con segregación por ámbito, control de acceso por roles y
    auditoría de las acciones sensibles.

Ambas aplicaciones consumen los mismos servicios financieros comunes,
por lo que las reglas de negocio, los límites, las comisiones y los
controles de seguridad y cumplimiento se definen una sola vez y se
aplican de forma consistente en todos los canales.

Su arquitectura modular y escalable permitirá incorporar progresivamente
nuevas capacidades, como criptomonedas, adelanto salarial, créditos,
inversiones, Open Banking y otros productos financieros, facilitando la
evolución de la solución sin comprometer la operación del núcleo
transaccional.

La plataforma deberá concebirse como una infraestructura financiera
extensible, con componentes especializados para identidad, pagos,
seguridad, cumplimiento, riesgo, conciliación, administración y
analítica.

La visión de producto es la de una **super app financiera**: una sola
aplicación, una sola marca y una identidad unificada, desde la cual el
cliente resuelve tanto sus finanzas como sus servicios cotidianos. La
experiencia deberá presentar de forma consolidada las cuentas, Wallets,
productos y saldos que correspondan al cliente, aunque internamente
puedan existir cuentas financieras, monedas o custodias diferenciadas.
El núcleo financiero y las capacidades de aliados reutilizan identidad,
pagos, notificaciones y controles comunes, evitando sesiones o saldos
paralelos creados de manera independiente por cada vertical.

El ecosistema sigue un **modelo curado de partners**: si bien un tercero
puede publicar capacidades dentro de la aplicación, no existe
publicación abierta ni autoincorporación. Toda capacidad de un aliado se
incorpora previa evaluación, acuerdo expreso, certificación técnica y
monitoreo continuo, y puede suspenderse de forma inmediata. Los aliados
operan bajo su propia marca dentro de espacios delimitados de la
experiencia, con responsabilidades contractuales, operativas y
regulatorias definidas de forma explícita para cada capacidad.

La mensajería y las capacidades sociales quedan explícitamente fuera
del alcance por el momento.

### Control de versiones del documento

| Versión | Fecha | Cambios |
|---|---|---|
| 1.0 | 16/09/2026 | Versión inicial consolidada: núcleo financiero, productos y segmentos, servicios compartidos, arquitectura, ecosistema de aliados y criterios de proyecto. |
| 1.1 | 16/09/2026 | Correcciones de consistencia: naturaleza del alcance, condiciones de entrada de fases y separación entre madurez y ciclo de vida operativo. |
| 1.2 | 16/09/2026 | Unificación del modelo de estados: admisión y ciclo operativo de aliados en la sección 21, definición del estado de ciclo de vida operativo y de las entidades con ciclos propios en el glosario, y alineación del Anexo H. |
| 1.3 | 18/09/2026 | Ajuste de la definición de Wallet en el glosario y en el modelo conceptual de cuentas y saldos: producto financiero con cuenta financiera asociada por moneda y saldos operativos contabilizados en un ledger central de doble entrada. |
| 1.4 | 18/09/2026 | Ampliación de la definición de custodia o respaldo de fondos en el glosario: modelo jurídico, financiero y operativo que garantiza fondos reales suficientes, su disponibilidad y trazabilidad, y la correspondencia con los pasivos registrados. |
| 1.5 | 18/09/2026 | Definición de la estructura mínima de la **matriz de trazabilidad del proyecto** en el Anexo F y referencia cruzada desde la sección 30. |
| 1.6 | 18/09/2026 | Sección 28 reordenada: definiciones de premisa, dependencia y exclusión al inicio de la sección, y reglas de gestión con registro, responsable, reflejo en la **matriz de trazabilidad del proyecto** y efecto bloqueante sobre la madurez. |
| 1.7 | 18/09/2026 | Sección 28 depurada: las dependencias se sustituyen por una taxonomía de tipos con su registro y código, las premisas se limitan a las condiciones asumidas, y se deslindan los conceptos al renombrarse el Anexo E como catálogo de integraciones externas. |
| 1.8 | 18/09/2026 | Sección 30 reordenada: la declaración provisional pasa a ser el listado de fases propuestas, ordenado por número y nombre de fase; la tabla de condiciones de entrada se referencia por nombre en lugar de capacidad habilitante; y la matriz de trazabilidad del proyecto se desplaza al cierre de la sección. |
| 1.9 | 18/09/2026 | Los estados de madurez pasan a constituir la sección 30, con carácter explicativo, y las fases de implementación la sección 31, que incorpora una introducción sobre qué define. Los diferenciadores pasan a la sección 32. |
| 1.10 | 18/09/2026 | Sección 30: unificación de la terminología de los apartados y de las referencias a los estados de madurez admitidos. |
| 1.11 | 18/09/2026 | Se retira el estado de madurez de las fases: la sección 30 declara que la madurez aplica a dominios, capacidades y funcionalidades, y la sección 31 presenta las fases sin declaración de estado, por reunir capacidades con estados distintos. |
| 1.12 | 18/09/2026 | La tabla de condiciones de entrada por fase incorpora la columna de dependencias cuyo cierre se exige, referenciadas por código (`INT-`, `DJ-`, `RB-`), y la fila de dependencias transversales. Se completan las condiciones de la Fase 1 con el mecanismo de transferencias bancarias y el modelo operativo de KYC/AML. |

Reglas de control de cambios:

-   Toda modificación que altere capacidades, reglas de negocio, estados
    o condiciones deberá registrarse e incrementar la versión.
-   Las correcciones editoriales que no alteren el significado no
    requieren cambio de versión, pero deberán conservarse de forma
    trazable.
-   Toda capacidad nueva deberá declarar su estado de madurez conforme a
    la sección 30.
-   El documento y la **matriz de trazabilidad del proyecto** deberán
    mantenerse sincronizados.

### Documentos relacionados

Esta especificación define las capacidades, principios y requisitos
funcionales de la plataforma objetivo. Su incorporación a un compromiso
de desarrollo o entrega dependerá de su estado de madurez, fase
aprobada y alcance contractual correspondiente.

El documento `Anexos_Complementarios_Alcance_Wallet.md` contiene los
artefactos que complementan y permiten acreditar su definición:

-   **Anexo A — Actores y responsabilidades funcionales:** referencia
    canónica de actores del ecosistema.
-   **Anexo B — Flujos funcionales críticos:** flujos end-to-end mínimos
    por capacidad.
-   **Anexo C — Requisitos no funcionales:** disponibilidad, desempeño,
    capacidad, continuidad, integridad, observabilidad, seguridad,
    auditoría, accesibilidad y localización.
-   **Anexo D — Volumetría y supuestos de capacidad.**
-   **Anexo E — Catálogo de integraciones externas.**
-   **Anexo F — Reglas de negocio y trazabilidad.**
-   **Anexo G — Modelo operativo.**
-   **Anexo H — Criterios de habilitación, aceptación y ciclo de vida
    operativo.**
-   **Anexo I — Criterios generales de aceptación funcional.**
-   **Anexo J — Supuestos y decisiones pendientes.**

En caso de discrepancia prevalece esta especificación, y el anexo
correspondiente deberá corregirse. Los anexos no crean capacidades por
sí mismos, pero sus definiciones condicionan la habilitación de las
capacidades descritas aquí.

### Cómo leer este documento

Este documento describe la **plataforma objetivo** en capacidades, no
compromisos de entrega. La madurez de cada capacidad se declara según
los estados definidos en la sección 30; ninguna capacidad en estado
"En definición" debe estimarse en firme. Los criterios objetivos para
transitar entre estados se definen en el Anexo H.

Los términos normativos utilizados en este documento se definen en el
glosario incluido al final de esta introducción.

La organización es por partes:

-   **Parte I — Núcleo financiero y confianza** (secciones 1 a 6):
    identidad, fondos, tarjetas, pagos, seguridad y riesgo.
-   **Parte II — Productos y segmentos** (secciones 7 a 14): wallets
    especializadas, nómina, activos digitales, crédito, distribución,
    integraciones y fidelización.
-   **Parte III — Servicios compartidos y operación** (secciones 15 a
    19): comunicaciones, backoffice, conciliación, analítica y
    configuración.
-   **Parte IV — Arquitectura y ecosistema** (secciones 20 a 27):
    arquitectura funcional y la capa de super app: aliados, marca,
    experiencia unificada, verticales, crecimiento, gobernanza de datos
    e ingresos.
-   **Parte V — Proyecto y cierre** (secciones 28 a 32): premisas,
    privacidad, madurez, fases y diferenciadores.

### Contenido

1. Registro, identidad y vinculación
2. Core Wallet y administración de fondos
3. Tarjetas y medios de pago
4. Pagos y transferencias
5. Seguridad y cumplimiento
6. Motor de riesgo y antifraude
7. Wallet Familiar y Dependientes
8. Wallet Empresarial
9. Adelanto Salarial -- Earned Wage Access (EWA)
10. Criptomonedas y activos digitales
11. Crédito y financiación
12. Marketplace Financiero
13. Open Banking e integraciones financieras
14. Lealtad, beneficios y recompensas
15. Notificaciones y comunicaciones
16. Backoffice administrativo y operativo
17. Conciliación, compensación y liquidación
18. Analítica e inteligencia financiera
19. Administración y configuración de productos
20. Arquitectura funcional
21. Extensibilidad y ecosistema de aliados
22. Modelo de marca y presencia de terceros
23. Experiencia unificada y descubrimiento
24. Verticales y servicios cotidianos
25. Crecimiento, campañas y experimentación
26. Gobernanza de datos y confianza del ecosistema
27. Modelo de ingresos de la plataforma
28. Premisas, dependencias y exclusiones
29. Privacidad, canales y cumplimiento normativo
30. Estados de madurez
31. Fases de implementación recomendadas
32. Diferenciadores de la plataforma

Anexos complementarios, documento aparte: A. Actores y
responsabilidades · B. Flujos funcionales críticos · C. Requisitos no
funcionales · D. Volumetría y supuestos de capacidad · E. Catálogo de
integraciones externas · F. Reglas de negocio y trazabilidad ·
G. Modelo operativo · H. Criterios de habilitación, aceptación y ciclo
de vida operativo · I. Criterios generales de aceptación funcional ·
J. Supuestos y decisiones pendientes.

### Glosario

Los estados de ciclo de vida existen para distintas entidades —identidad,
cuenta, tarjeta, aliado, capacidad— y son específicos de cada una: no
deben considerarse equivalentes ni intercambiables entre sí.

-   **Plataforma:** producto y conjunto de servicios operados bajo una
    misma marca, identidad y controles comunes.
-   **Ecosistema:** conjunto de capacidades nativas y de aliados
    disponibles dentro de la plataforma.
-   **Núcleo financiero:** componentes reutilizables de identidad,
    ledger, pagos, tarjetas, riesgo y cumplimiento sobre los que operan
    todos los productos y verticales.
-   **Cliente o entidad:** persona natural o jurídica vinculada a la
    plataforma.
-   **Wallet:** producto financiero del cliente, al que se asocia una
    cuenta financiera denominada en una moneda específica, en la que se
    mantienen sus saldos operativos. Los movimientos que afectan esa
    cuenta se contabilizan en un ledger central de doble entrada,
    mediante cargos y abonos en las cuentas de ledger correspondientes.
-   **Cuenta financiera:** relación sobre la que se administran fondos,
    obligaciones o posiciones de un producto.
-   **Cuenta de ledger:** representación contable interna utilizada para
    registrar movimientos de doble entrada.
-   **Saldo:** posición resultante para una cuenta, producto y moneda
    determinados, ya sea disponible, retenido o pendiente.
-   **Ledger:** registro contable de doble entrada, inmutable y
    auditable, que constituye la fuente de verdad de los saldos
    administrados.
-   **Custodia o respaldo de fondos:** modelo jurídico, financiero y
    operativo mediante el cual se mantienen y resguardan fondos reales
    suficientes para respaldar las obligaciones económicas representadas
    por los saldos de las cuentas financieras (Wallets) de los clientes,
    garantizando su disponibilidad, trazabilidad y correspondencia con
    los pasivos registrados por la plataforma.
-   **Aliado:** tercero autorizado que provee una capacidad dentro del
    ecosistema, con acuerdo expreso, certificación y monitoreo.
-   **Capacidad:** servicio ofrecido al cliente, ya sea nativo de la
    plataforma o provisto por un aliado.
-   **Mini-app:** capacidad de un aliado que se ejecuta dentro de la
    aplicación, bajo su propia marca y con permisos acotados.
-   **Vertical:** categoría de servicio del ecosistema, como
    telecomunicaciones, servicios públicos o movilidad.
-   **Consentimiento:** autorización del cliente para que una capacidad
    acceda a determinados datos, con alcance y vigencia definidos.
-   **Autorización transaccional:** permiso diferenciado y limitado para
    iniciar movimientos de fondos, acotado por monto, beneficiario,
    vigencia, recurrencia o tipo de operación. No se deriva del
    consentimiento de datos.
-   **Alcance:** conjunto delimitado de datos o acciones que un permiso
    habilita.
-   **Revocación:** retiro de un consentimiento o autorización, con
    efecto sobre las nuevas solicitudes que dependan de él.
-   **Suspensión:** interrupción temporal, con posibilidad de
    reactivación, de una capacidad, una cuenta, una tarjeta o la
    relación con un aliado. **Retirada o baja:** descontinuación
    definitiva conforme al ciclo de vida aplicable.
-   **Certificación:** verificación técnica y funcional previa a la
    publicación de una capacidad de un aliado.
-   **Conciliación:** contraste entre los registros internos y los
    reportados por terceros.
-   **Liquidación o settlement:** transferencia efectiva de fondos entre
    las partes.
-   **Reverso:** anulación de una operación mediante asientos
    compensatorios. **Devolución:** reintegro de fondos al cliente.
    **Disputa o contracargo:** reclamo del titular por una operación.
-   **Tarifa:** precio de un producto o servicio. **Comisión:** cargo por
    una operación. **Cargo:** importe aplicado al cliente por un
    concepto determinado.
-   **Idempotencia:** propiedad por la cual una instrucción repetida
    produce un único efecto financiero.
-   **Append-only:** estructura de registro en la que solo se agregan
    entradas y no se modifica ni elimina lo ya escrito.
-   **IdP:** proveedor de identidad; servicio que autentica y emite
    tokens.
-   **Resource Server:** servicio que valida tokens y autoriza el acceso
    a recursos protegidos.
-   **BFF:** capa intermedia que gestiona la sesión de un canal web y
    media el acceso a las APIs.
-   **Step-up authentication:** exigencia de autenticación adicional
    ante operaciones sensibles o de mayor riesgo.
-   **KYC / KYB / AML:** conocimiento del cliente y del negocio, y
    prevención de legitimación de activos y financiamiento del
    terrorismo. **PEP:** persona expuesta políticamente.
-   **EWA:** acceso al salario devengado o adelanto salarial.
-   **Estado de madurez:** Objetivo, En definición, Habilitado para
    desarrollo u Operativo, conforme a la sección 30.
-   **Estado de ciclo de vida operativo:** estado corriente de una
    capacidad que ya alcanzó el estado de madurez Operativo —activa,
    suspendida, deprecada o retirada—, conforme al Anexo H. Es
    independiente de la madurez alcanzada y no la modifica
    retroactivamente.
-   **Dominio:** agrupación funcional de la arquitectura (sección 20)
    que reúne capacidades relacionadas.
-   **Funcionalidad:** comportamiento o capacidad concreta dentro de un
    dominio.

------------------------------------------------------------------------

## PARTE I — NÚCLEO FINANCIERO Y CONFIANZA

------------------------------------------------------------------------

## 1. Registro, identidad y vinculación

La plataforma deberá permitir el registro y vinculación de personas y
empresas, aplicando los mecanismos de identificación y cumplimiento
requeridos según el tipo de cliente y los productos financieros
utilizados.

### Funcionalidades

-   Registro mediante número de teléfono y/o correo electrónico.
-   Verificación de teléfono y correo electrónico.
-   Creación y administración del perfil del cliente.
-   KYC para personas naturales.
-   KYB para personas jurídicas.
-   Validación de documentos de identidad.
-   Prueba de vida.
-   Validación biométrica facial.
-   Validación contra listas de sanciones, PEP y controles AML.
-   Gestión de beneficiarios.
-   Registro y administración de dispositivos autorizados.
-   Recuperación segura de cuenta.
-   Gestión de consentimientos.
-   Aceptación y versionamiento de contratos, términos y condiciones.
-   Actualización periódica de información de cumplimiento.

### Modelo de identidad y acceso

La autenticación y la gestión de identidad deberán resolverse sobre
protocolos estándar, desacoplados del núcleo financiero:

-   La plataforma deberá integrarse con un Proveedor de Identidad (IdP)
    externo mediante OpenID Connect 1.0 y OAuth 2.0, con flujo de
    autorización y PKCE para clientes públicos.
-   El IdP custodiará únicamente atributos mínimos de identidad y
    credenciales. No almacenará expedientes ni dictámenes KYC/KYB,
    saldos, tarjetas, PIN, datos financieros ni información
    transaccional.
-   El backend actuará como Resource Server: validará los access tokens
    de forma criptográfica contra las claves públicas del IdP (JWKS) y
    vinculará internamente el par `(iss, sub)` con el expediente del
    cliente.
-   La aplicación móvil deberá almacenar los tokens en el almacén
    seguro del sistema operativo (Keystore/Keychain), nunca en
    almacenamiento plano.
-   El portal administrativo deberá proteger la sesión web mediante una
    arquitectura de tipo Backend for Frontend con cookies HttpOnly,
    reduciendo la exposición de tokens a XSS.
-   La identidad será un servicio reutilizable por el resto de los
    dominios: ningún producto futuro deberá implementar su propia
    autenticación.
-   El proveedor de identidad será reemplazable: la plataforma deberá
    depender de los estándares (OIDC, OAuth 2.0, JWKS) y no de las
    particularidades de un proveedor concreto.

### Recuperación y cambios sensibles de identidad

-   La recuperación de cuenta y el restablecimiento de factores de
    autenticación deberán tratarse como operaciones de alto riesgo.
-   Los cambios recientes de teléfono, correo, credenciales, factores de
    autenticación o dispositivos deberán poder elevar el nivel de riesgo
    y activar controles adicionales antes de permitir operaciones
    sensibles.
-   El diseño deberá contemplar controles frente a escenarios como
    suplantación, SIM swap, recuperación fraudulenta y toma de control de
    cuenta, sin depender de un único factor de verificación.

### Ciclo de vida de la identidad

-   Estados: registrado sin verificar, verificado, activo, restringido,
    bloqueado, suspendido y cerrado.
-   Cada transición deberá registrarse con fecha, causa y actor que la
    ejecutó.
-   El cierre de cuenta deberá coordinar la baja en el IdP, la
    invalidación de sesiones y dispositivos, y la retención de la
    información exigida por normativa.

### Identidad y consentimiento en el ecosistema

-   La identidad del cliente es única y reutilizable por todas las
    capacidades del ecosistema, incluidas las provistas por aliados.
-   El acceso de un aliado a los datos del cliente deberá requerir
    autorización explícita del usuario, otorgada por alcance y no de
    forma global.
-   El cliente deberá poder consultar qué capacidades y aliados tiene
    autorizados y revocar el acceso en cualquier momento, con efecto
    inmediato sobre las nuevas solicitudes que dependan de dicha
    autorización.
-   La revocación deberá propagarse a los aliados e invalidar los grants,
    consentimientos, tokens delegados o autorizaciones asociados a ese
    cliente, sin afectar las credenciales generales del aliado cuando
    estas continúen vigentes para otros clientes.
-   La plataforma podrá suspender o dar de baja las credenciales y el
    acceso general de un aliado, sin intervención del cliente, ante
    riesgo, incumplimiento o terminación del acuerdo.
-   El consentimiento para acceder a información no implicará por sí
    mismo autorización para movilizar fondos. Las capacidades que puedan
    iniciar pagos o transferencias deberán contar con una autorización
    transaccional diferenciada y limitada por los parámetros que
    correspondan, tales como monto, beneficiario, vigencia, recurrencia
    o tipo de operación.

------------------------------------------------------------------------

## 2. Core Wallet y administración de fondos

El Core Wallet constituirá el núcleo financiero y transaccional de la
plataforma. Será responsable de mantener los saldos, movimientos y
relaciones entre las distintas cuentas y productos.

### Funcionalidades

-   Creación y administración de Wallets.
-   Saldo disponible.
-   Saldo retenido.
-   Saldo pendiente.
-   Historial detallado de movimientos.
-   Estados de cuenta.
-   Wallets multidivisa, cuando esta capacidad se encuentre habilitada
    conforme a la fase correspondiente.
-   Transferencias entre usuarios de la plataforma.
-   Transferencias entre cuentas propias.
-   Recepción de fondos.
-   Carga de saldo mediante medios habilitados.
-   Retiro de fondos.
-   Transferencias hacia cuentas bancarias.
-   Solicitudes de dinero.
-   División de pagos.
-   Pagos recurrentes.
-   Límites diarios, semanales y mensuales.
-   Comisiones configurables por producto, canal u operación.
-   Retenciones.
-   Reversos.
-   Devoluciones.
-   Bloqueos de fondos.
-   Referencias y conceptos de transacción.

### Modelo conceptual de cuentas y saldos

Para evitar ambigüedad entre experiencia de usuario y representación
financiera, la plataforma deberá distinguir conceptualmente entre:

-   **Cliente o entidad:** persona natural o jurídica vinculada a la
    plataforma.
-   **Wallet o producto:** producto financiero del cliente, al que se
    asocia una cuenta financiera denominada en una moneda específica, en
    la que se mantienen sus saldos operativos.
-   **Cuenta financiera:** relación sobre la que se administran fondos,
    obligaciones o posiciones de un producto.
-   **Cuenta de ledger:** representación contable interna utilizada para
    registrar movimientos de doble entrada.
-   **Saldo:** posición resultante para una cuenta, producto y moneda
    determinados.

La aplicación podrá presentar una vista financiera consolidada, pero
esta no deberá ocultar las diferencias relevantes entre monedas,
productos, custodios, restricciones o naturaleza jurídica de los fondos.

### Ledger financiero

La plataforma deberá implementar un **ledger financiero de doble
entrada**, capaz de garantizar:

-   Integridad contable y balance entre débitos y créditos.
-   Trazabilidad de cada movimiento y relación con la instrucción que lo
    originó.
-   Inmutabilidad del historial financiero: las correcciones se realizan
    mediante asientos compensatorios o de ajuste, sin modificar el
    movimiento original.
-   Identificación del origen y destino de los fondos.
-   Manejo de reservas, retenciones, fondos pendientes y liberaciones.
-   Procesamiento idempotente de instrucciones financieras para evitar
    duplicaciones ante reintentos, webhooks o mensajes repetidos.
-   Atomicidad de los asientos que conforman una misma operación.
-   Control de concurrencia para impedir el uso simultáneo de fondos que
    no estén disponibles.
-   Estados transaccionales consistentes con el ciclo de vida de cada
    operación, tales como iniciada, autorizada, retenida, contabilizada,
    liquidada, rechazada, expirada o revertida, según aplique.
-   Tratamiento explícito de moneda, precisión y reglas de redondeo.
-   Cuentas operativas o transitorias cuando sean necesarias para
    clearing, settlement, comisiones, reservas, fondos en tránsito y
    excepciones.
-   Conciliación con sistemas externos.
-   Auditoría completa de operaciones.
-   Ajustes manuales restringidos, justificados y auditados; cuando su
    riesgo lo requiera, sujetos a aprobación independiente.

### Custodia y respaldo de fondos

El ledger representa la fuente de verdad contable de la plataforma, pero
no sustituye la definición de quién mantiene legalmente los fondos. Para
cada producto deberá identificarse el modelo de custodia o respaldo
aplicable, las entidades financieras o proveedores participantes, las
cuentas de compensación o salvaguarda que correspondan y la relación
entre los saldos del ledger y los fondos mantenidos externamente.

La arquitectura deberá permitir que distintos productos utilicen modelos
de custodia diferentes sin alterar la integridad del núcleo transaccional.

### Uso de fondos en el ecosistema

-   Los fondos disponibles en las Wallets o cuentas habilitadas deberán
    poder utilizarse en las capacidades del ecosistema conforme a las
    reglas del producto, moneda, canal y operación.
-   Una vertical o aliado no deberá crear un saldo financiero paralelo
    que compita con el ledger de la plataforma. Esto no impide que
    existan varias cuentas, monedas o productos legítimamente separados.
-   Toda operación financiera originada en una capacidad de tercero
    deberá pasar por la orquestación financiera de la plataforma y
    generar los asientos, controles de límites, riesgo y comisiones que
    correspondan.
-   La retención de fondos por una operación en curso deberá reflejarse
    de forma consistente en los canales habilitados.
-   El ledger será la fuente de verdad de los saldos administrados por la
    plataforma; los aliados solo podrán conservar referencias o estados
    operativos necesarios para prestar su servicio, nunca un registro
    financiero alterno de los fondos del cliente.

------------------------------------------------------------------------

## 3. Tarjetas y medios de pago

La plataforma deberá permitir administrar diferentes tipos de tarjetas y
medios de pago asociados a las Wallets.

### Tipos de tarjeta

-   Tarjetas virtuales.
-   Tarjetas físicas.
-   Tarjetas de débito.
-   Tarjetas prepagadas.
-   Tarjetas de crédito, cuando el producto financiero lo contemple.
-   Tarjetas corporativas.
-   Tarjetas para dependientes.
-   Tarjetas salariales.

### Funcionalidades

-   Solicitud de tarjeta.
-   Emisión.
-   Activación.
-   Consulta segura de datos de tarjeta.
-   Gestión de PIN.
-   Bloqueo y desbloqueo.
-   Cancelación.
-   Reposición.
-   Gestión de vencimiento.
-   Configuración de límites.
-   Habilitación o restricción de compras físicas.
-   Habilitación o restricción de compras en línea.
-   Habilitación o restricción de compras internacionales.
-   Habilitación o restricción de retiros en ATM.
-   NFC y pagos contactless.
-   Tokenización.
-   Integración con wallets móviles cuando corresponda.
-   Consulta de autorizaciones.
-   Historial de transacciones.
-   Gestión de transacciones rechazadas.
-   Gestión de disputas y contracargos.

### Ciclo de vida de la tarjeta

-   Estados: solicitada, emitida, pendiente de activación, activa,
    bloqueada temporalmente, bloqueada definitivamente, vencida,
    cancelada y repuesta.
-   Toda transición deberá ser explícita, trazable y auditable con
    fecha, causa y actor.
-   La Wallet podrá permanecer operativa aun cuando el cliente no
    disponga temporalmente de una tarjeta activa, siempre que existan
    otros canales habilitados por el producto. La disponibilidad de una
    tarjeta no deberá asumirse como requisito universal de la Wallet.
-   La reposición deberá heredar la configuración de la tarjeta anterior
    (límites, restricciones y alias), salvo indicación contraria del
    cliente.
-   Los datos sensibles de la tarjeta deberán permanecer enmascarados
    por defecto. Su visualización, cuando el producto y el proveedor lo
    permitan, requerirá autenticación reforzada y controles que eviten su
    exposición o persistencia innecesaria. La plataforma deberá reducir
    al mínimo el alcance de datos de tarjeta que procesa o almacena
    directamente.

### Disputas y contracargos

-   Registro de la disputa con evidencia y control de plazos.
-   Estados: registrada, en análisis, escalada a la red o al proveedor,
    resuelta a favor del cliente, rechazada, duplicada, sin respuesta
    del cliente, resuelta fuera del sistema y no procedente por
    políticas.
-   Cuando la resolución produzca un efecto financiero, este deberá
    reflejarse mediante el movimiento, reverso o ajuste correspondiente
    en el ledger, preservando el historial original.

------------------------------------------------------------------------

## 4. Pagos y transferencias

La plataforma deberá soportar múltiples mecanismos para movilizar fondos
entre personas, empresas, comercios e instituciones financieras.

### Modalidades

-   P2P: persona a persona.
-   P2M: persona a comercio.
-   Transferencias entre Wallets.
-   Transferencias bancarias.
-   Transferencias masivas.
-   Pagos mediante QR.
-   QR estático.
-   QR dinámico.
-   Links de pago.
-   Checkout para comercio electrónico.
-   Solicitudes de pago.
-   Pagos recurrentes.
-   Débitos autorizados.
-   API de pagos.

### Operación comercial

-   Registro de comercios.
-   Configuración de comisiones.
-   Liquidación a comercios.
-   Devoluciones.
-   Reversos.
-   Propinas.
-   Reportes de ventas.
-   Conciliación de pagos.
-   Liquidaciones y settlement.

### Pago dentro del ecosistema

-   El pago deberá operar como una capacidad común del ecosistema:
    cualquier capacidad, nativa o de un aliado, deberá utilizar la misma
    capa de orquestación, autorización, riesgo, contabilización y
    trazabilidad, aun cuando el origen de fondos o el mecanismo externo
    utilizado pueda variar.
-   Código QR universal para la experiencia: la plataforma deberá poder
    resolver desde un mismo punto de entrada pagos a comercios, personas,
    servicios y verticales. La experiencia unificada no obliga a que
    todos los proveedores externos utilicen un único estándar técnico;
    podrán existir adaptadores o mecanismos de interoperabilidad bajo la
    capa de resolución de la plataforma.
-   Los cobros y pagos recurrentes deberán poder autorizarse una sola
    vez y ejecutarse de forma automática, con revocación disponible en
    cualquier momento.
-   La experiencia de pago deberá poder iniciarse desde fuera de la
    aplicación y completarse en ella, sin exponer credenciales.

------------------------------------------------------------------------

## 5. Seguridad y cumplimiento

La seguridad deberá ser transversal a todos los módulos y operaciones de
la plataforma.

### Seguridad

-   Cifrado de información en tránsito y reposo.
-   Tokenización de información sensible.
-   Cumplimiento PCI DSS cuando corresponda.
-   MFA.
-   Biometría.
-   Passkeys.
-   Gestión de sesiones.
-   Gestión de dispositivos confiables.
-   Step-up authentication para operaciones sensibles.
-   Políticas de contraseñas.
-   Gestión segura de secretos y credenciales.
-   Registro de eventos de seguridad.
-   Alertas ante comportamientos anómalos.
-   Aislamiento de las capacidades provistas por aliados respecto del
    núcleo financiero, con permisos y recursos acotados.
-   Revisión de seguridad y de dependencias exigida antes de publicar
    una capacidad de tercero, y repetida ante cambios relevantes.
-   Revocación inmediata de credenciales y accesos de un aliado ante
    incidentes, incumplimientos o baja del acuerdo.
-   Registro de todos los accesos de terceros a funciones y datos de la
    plataforma.

### Matriz de controles por canal

Los controles deberán ser proporcionales al canal y a la sensibilidad de
la operación:

| Canal | Autenticación base | Operaciones sensibles |
|---|---|---|
| Aplicación móvil (clientes) | OIDC + OAuth 2.0 con PKCE, sesión vinculada a un dispositivo confiable | Step-up con passkey, PIN o autenticación biométrica ligada a mecanismos seguros del dispositivo y, cuando aplique, a evidencia criptográfica verificable |
| Portal administrativo web | OIDC + MFA obligatorio, sesión en cookies HttpOnly (BFF) | Doble control o aprobación por rol y registro obligatorio en auditoría |
| APIs para comercios y terceros | OAuth 2.0 con credenciales de cliente y alcances mínimos por operación | Autenticidad de solicitudes, protección contra replay, idempotencia, límites por alcance y controles de origen o canal según aplique |
| Capacidades de aliados | Identidad de servicio emitida y gestionada por la plataforma | Alcance mínimo por operación, límites de recursos, registro de accesos y revocación inmediata |
| Procesos internos y batch | Identidad de servicio con privilegios mínimos | Ejecución registrada, idempotente y auditable |

Reglas transversales:

-   Mínimo privilegio y denegación por defecto.
-   Ninguna operación sensible se ejecuta sin rastro de auditoría.
-   La autorización se valida siempre en el backend: las validaciones
    del cliente no son confiables.
-   La autenticación local del dispositivo no deberá aceptarse como una
    afirmación suficiente del cliente cuando la operación requiera
    evidencia verificable por el backend.
-   Las operaciones financieras e integraciones externas deberán diseñarse
    para tolerar reintentos sin producir ejecuciones duplicadas.

### Cumplimiento

-   KYC.
-   KYB.
-   AML.
-   Validación PEP.
-   Listas de sanciones.
-   Monitoreo transaccional.
-   Identificación de operaciones sospechosas.
-   Gestión de casos.
-   Evidencias de consentimiento.
-   Auditoría.
-   Gestión de riesgo operacional.
-   Conservación de evidencias y trazabilidad.

------------------------------------------------------------------------

## 6. Motor de riesgo y antifraude

La plataforma deberá contar con un motor de riesgo capaz de evaluar
eventos y transacciones en tiempo real.

El motor podrá combinar reglas determinísticas, listas, señales de
comportamiento, modelos estadísticos y, cuando exista información y
madurez suficiente, modelos de aprendizaje automático. La operación
inicial del control antifraude no dependerá de disponer desde el primer
día de capacidades avanzadas de inteligencia artificial.

### Variables de evaluación

-   Monto.
-   Frecuencia.
-   Tipo de operación.
-   Ubicación.
-   Geovelocidad.
-   Dirección IP.
-   Dispositivo.
-   Comercio.
-   Horario.
-   Historial transaccional.
-   Comportamiento habitual.
-   Intentos fallidos.
-   Cambios recientes de credenciales.
-   Incorporación de nuevos dispositivos.
-   Patrones de fraude conocidos.

### Resultado

El motor podrá producir un **Risk Score** y ejecutar acciones
configurables:

-   Aprobar.
-   Rechazar.
-   Solicitar autenticación adicional.
-   Solicitar biometría.
-   Retener temporalmente.
-   Limitar la operación.
-   Bloquear preventivamente.
-   Enviar a revisión manual.
-   Generar una alerta o caso de investigación.

### Riesgo de ecosistema

El motor deberá evaluar también los eventos originados en capacidades
provistas por aliados y el comportamiento del propio aliado:

-   Abuso de incentivos: cupones, cashback y promociones utilizados de
    forma fraudulenta o concertada.
-   Colusión entre comercio y cliente.
-   Cuentas múltiples o suplantación para acceder a beneficios.
-   Patrones anómalos de contracargos, disputas y reclamos por aliado,
    comercio o categoría.
-   Incumplimiento operativo del aliado: indisponibilidad,
    inconsistencias de conciliación o desvío de las condiciones
    acordadas.
-   Métricas de reputación por aliado, con acciones graduadas que
    incluyan monitoreo reforzado, retención de liquidaciones,
    suspensión preventiva y baja del catálogo.

------------------------------------------------------------------------

## PARTE II — PRODUCTOS Y SEGMENTOS

------------------------------------------------------------------------

## 7. Wallet Familiar y Dependientes

Permitirá administrar relaciones financieras entre un titular y sus
dependientes.

### Funcionalidades

-   Cuenta principal.
-   Subcuentas para dependientes.
-   Tarjetas individuales.
-   Transferencias entre titular y dependientes.
-   Asignaciones periódicas.
-   Presupuestos.
-   Límites diarios, semanales y mensuales.
-   Límites por categoría de comercio.
-   Restricción de determinados tipos de compra.
-   Solicitudes de aprobación.
-   Aprobación de compras.
-   Monitoreo de gastos en tiempo real.
-   Notificaciones al titular.
-   Geocercas opcionales, sujetas a consentimiento, finalidad definida y disponibilidad del dispositivo.
-   Metas de ahorro.
-   Reglas automáticas de ahorro.
-   Roles y permisos.

### Reglas para dependientes

-   El modelo deberá distinguir los tipos de dependiente que puedan
    existir, incluyendo cuando corresponda menores de edad y adultos
    vinculados al titular.
-   Antes de habilitar el producto deberán definirse las reglas de edad,
    representación o consentimiento, propiedad de los fondos, facultades
    del titular y del dependiente, privacidad y cierre de la relación.
-   Cuando un dependiente alcance una condición que modifique su capacidad
    jurídica o contractual, la plataforma deberá permitir migrar o
    regularizar la relación sin perder la trazabilidad financiera.

------------------------------------------------------------------------

## 8. Wallet Empresarial

La Wallet Empresarial permitirá administrar fondos, medios de pago y
gastos correspondientes a empleados, departamentos y operaciones
corporativas.

### Funcionalidades

-   Cuenta empresarial.
-   Subcuentas por colaborador.
-   Tarjetas corporativas.
-   Administración de empleados.
-   Viáticos.
-   Combustible.
-   Caja menuda.
-   Fondos operativos.
-   Centros de costo.
-   Presupuestos.
-   Límites por colaborador.
-   Límites por categoría.
-   Límites por comercio.
-   Flujos de aprobación.
-   Transferencias individuales y masivas.
-   Carga masiva de colaboradores.
-   Reportes administrativos.
-   Reportes financieros.
-   Exportación contable.
-   Conciliación.
-   Roles y permisos empresariales.
-   Integración mediante APIs con ERP, nómina y sistemas contables.

------------------------------------------------------------------------

## 9. Adelanto Salarial -- Earned Wage Access (EWA)

Este módulo permitirá que empleados de empresas afiliadas accedan
anticipadamente a una porción del salario ya devengado.

### Funcionalidades

-   Integración con sistemas de nómina.
-   Registro de salario.
-   Información de jornadas o días laborados.
-   Cálculo del salario devengado.
-   Determinación del monto disponible.
-   Límites porcentuales.
-   Límites monetarios.
-   Reglas configurables por empresa.
-   Score interno.
-   Solicitud de adelanto.
-   Aprobación automática o manual.
-   Desembolso inmediato a la Wallet.
-   Comisiones configurables.
-   Recuperación durante el proceso de nómina.
-   Historial de adelantos.
-   Reportería para la empresa.
-   Tarjeta salarial asociada a la Wallet.

### Casos operativos a definir antes del desarrollo

El modelo funcional deberá establecer el tratamiento de excepciones que
puedan modificar el salario finalmente pagado o la capacidad de
recuperación, incluyendo como mínimo correcciones de nómina, cambios en
jornadas reportadas, terminación de la relación laboral, ausencias,
incapacidades, descuentos posteriores al adelanto, monto neto inferior al
previsto y fallos de recuperación durante la nómina.

Estas reglas podrán variar por empresa o proveedor, pero deberán quedar
cerradas antes de que la capacidad alcance el estado "Habilitado para
desarrollo".

------------------------------------------------------------------------

## 10. Criptomonedas y activos digitales

El módulo de activos digitales deberá operar de forma desacoplada del
Core Wallet y podrá integrarse con proveedores especializados de
custodia, liquidez y blockchain.

### Activos inicialmente contemplados

-   BTC.
-   ETH.
-   USDT.
-   USDC.

### Funcionalidades

-   Compra.
-   Venta.
-   Conversión crypto-fiat.
-   Conversión entre activos.
-   Recepción mediante blockchain.
-   Envío de activos.
-   Generación y administración de direcciones.
-   Consulta de saldos.
-   Visualización de equivalentes en moneda fiat.
-   Historial de operaciones.
-   Límites de operación.
-   Custodia.
-   Monitoreo AML blockchain.
-   Bóvedas de ahorro.
-   Conversión automática para utilización mediante tarjeta.

La disponibilidad de cada funcionalidad dependerá de las regulaciones
aplicables y de los proveedores financieros utilizados.

Los saldos de activos digitales podrán mostrarse dentro de la vista
financiera consolidada del cliente, pero deberán mantenerse claramente
diferenciados de los fondos fiat cuando su custodia, liquidación, riesgo
o tratamiento jurídico sean distintos.

------------------------------------------------------------------------

## 11. Crédito y financiación

La plataforma deberá permitir incorporar productos de crédito propios o
provistos por terceros.

### Funcionalidades

-   Precalificación.
-   Solicitud de crédito.
-   Scoring.
-   Evaluación de capacidad de pago.
-   Reglas de elegibilidad.
-   Generación de ofertas.
-   Simulación.
-   Aceptación contractual.
-   Desembolso hacia la Wallet.
-   Calendario de pagos.
-   Débitos automáticos.
-   Abonos extraordinarios.
-   Consulta de saldo.
-   Gestión de mora.
-   Refinanciamiento.
-   Gestión de cartera.
-   Reportería.

------------------------------------------------------------------------

## 12. Marketplace Financiero

La plataforma podrá funcionar como canal de distribución de productos y
servicios financieros propios o de terceros. Los productos de terceros
se incorporan bajo el modelo curado de aliados: evaluación previa,
acuerdo expreso, certificación y monitoreo continuo. No existe
publicación abierta ni autoincorporación.

Los productos de terceros distribuidos a través del marketplace
constituyen capacidades provistas por aliados y quedan sujetos al modelo
de incorporación, certificación, ciclo de vida y gobernanza descritos en
las secciones 21 y 26. No deberá existir un proceso paralelo de
incorporación por dominio.

### Productos potenciales

-   Microcréditos.
-   Préstamos personales.
-   BNPL.
-   Seguros.
-   Remesas.
-   Inversiones.
-   Productos de ahorro.
-   Cambio de divisas.
-   Servicios financieros especializados.

### Capacidades

-   Catálogo de productos.
-   Reglas de elegibilidad.
-   Segmentación.
-   Ofertas personalizadas.
-   Contratación digital.
-   Integración con proveedores externos.
-   Seguimiento del estado de solicitudes.
-   Comisiones por originación o intermediación.
-   Publicación de productos por parte de aliados autorizados.
-   Evaluación continua del desempeño y del riesgo del aliado.

------------------------------------------------------------------------

## 13. Open Banking e integraciones financieras

La plataforma deberá disponer de una capa de integración que permita
conectarse con bancos, procesadores, redes de pago, fintech y
proveedores especializados.

### Capacidades

-   Vinculación de cuentas bancarias externas.
-   Consulta de cuentas.
-   Consulta de saldos.
-   Consulta de movimientos.
-   Verificación de cuentas.
-   Iniciación de transferencias.
-   APIs financieras.
-   APIs de pagos.
-   Webhooks.
-   Integración con procesadores de tarjetas.
-   Integración con redes de pago.
-   Integración bancaria.
-   Integración con proveedores KYC/AML.
-   Integración con proveedores de remesas.
-   Integración con proveedores de activos digitales.
-   Integración con sistemas de nómina.
-   Integración con ERP y sistemas contables.

------------------------------------------------------------------------

## 14. Lealtad, beneficios y recompensas

La plataforma podrá incorporar un motor de fidelización transversal a
los distintos productos.

### Funcionalidades

-   Puntos.
-   Cashback.
-   Cupones.
-   Promociones.
-   Beneficios por comercio.
-   Campañas segmentadas.
-   Niveles de usuario.
-   Programa de referidos.
-   Bonificaciones.
-   Reglas por volumen transaccional.
-   Reglas por comportamiento.
-   Canje de recompensas.
-   Beneficios exclusivos asociados a productos o segmentos.
-   Incentivos cruzados para impulsar la adopción de nuevas verticales
    y de capacidades de aliados.
-   Incentivos financiados por aliados y campañas conjuntas.

El motor de incentivos deberá operar como palanca de adopción del
ecosistema: sus reglas deberán poder dirigir demanda hacia una vertical,
un aliado, un comercio o un segmento específico, y medirse por su efecto
real sobre la adopción y la retención.

------------------------------------------------------------------------

## PARTE III — SERVICIOS COMPARTIDOS Y OPERACIÓN

------------------------------------------------------------------------

## 15. Notificaciones y comunicaciones

La plataforma deberá contar con un servicio centralizado de
comunicaciones.

### Canales

-   Push.
-   SMS.
-   Correo electrónico.
-   WhatsApp, cuando corresponda.

### Eventos

-   Compra realizada.
-   Transferencia enviada.
-   Transferencia recibida.
-   Saldo bajo.
-   Inicio de sesión.
-   Registro de nuevo dispositivo.
-   Compra rechazada.
-   Movimiento sospechoso.
-   Bloqueo de cuenta o tarjeta.
-   Adelanto salarial.
-   Pago próximo.
-   Crédito.
-   Promociones.
-   Beneficios.

Las preferencias de comunicación deberán ser configurables por el
usuario, respetando las comunicaciones obligatorias de seguridad y
cumplimiento.

------------------------------------------------------------------------

## 16. Backoffice administrativo y operativo

La solución deberá incluir un portal administrativo independiente de la
aplicación utilizada por los clientes. El portal estará orientado
principalmente al personal interno y operativo y, cuando el modelo lo
contemple, podrá habilitar espacios administrativos segregados para
instituciones, empresas o comercios con permisos limitados a su propio
ámbito.

### Gestión

-   Clientes.
-   Empresas.
-   Comercios.
-   Dependientes.
-   Wallets.
-   Tarjetas.
-   Transacciones.
-   KYC/KYB.
-   Casos AML.
-   Casos de fraude.
-   Contracargos.
-   Límites.
-   Tarifas.
-   Comisiones.
-   Productos.
-   Promociones.
-   Aliados y capacidades publicadas.
-   Consentimientos otorgados y revocados.
-   Campañas e incentivos.
-   Reputación y métricas de aliados.
-   Bloqueos.
-   Reversos autorizados.
-   Conciliaciones.
-   Liquidaciones.
-   Auditoría.
-   Reportes.
-   Roles y permisos.

### Roles administrativos

| Rol | Alcance |
|---|---|
| Administrador de plataforma | Configuración global: instituciones, productos, tarifas, reglas de riesgo, proveedores y parámetros del sistema |
| Administrador de cliente o institución | Gestión de su propia cartera (comercios, usuarios y tarjetas asociadas) dentro de los parámetros definidos por la plataforma |
| Operador interno | Tareas operativas del día a día: consultas, gestión de casos y acciones habilitadas, sin acceso a configuración |
| Analista de cumplimiento | Procesos KYC, KYB, AML y casos asociados |
| Analista de fraude | Alertas, patrones y eventos de riesgo o fraude |
| Operador de conciliación | Diferencias entre ledger, bancos, procesadores, comercios y terceros |
| Operador de tesorería | Posiciones de liquidez, fondeo y cuentas operativas o de compensación |
| Operador de comercio | Consulta y operación acotada a su comercio, cuando el modelo lo contemple |
| Auditor | Acceso de solo lectura a expedientes, casos, evidencias y bitácoras, sin capacidad de modificación |

Los actores del ecosistema y sus responsabilidades funcionales, incluidos
clientes, dependientes, colaboradores, comercios, aliados y proveedores
financieros, se definen en el Anexo A, que constituye la referencia
canónica de actores.

Reglas:

-   El acceso se otorga por rol y permiso explícito bajo mínimo
    privilegio. Las excepciones justificadas deberán ser temporales,
    aprobadas, trazables y retiradas al concluir su necesidad.
-   La segregación de funciones deberá impedir que un mismo usuario
    solicite y apruebe la misma operación cuando el riesgo lo exija.
-   El alta, la baja y la modificación de roles deberán ser auditables.

### Auditoría

Todas las acciones administrativas sensibles deberán quedar registradas
en una bitácora de auditoría que contenga, como mínimo:

-   Usuario y rol con el que actuó.
-   Fecha y hora con zona horaria.
-   Acción ejecutada y recurso afectado.
-   Estado anterior y estado posterior del registro.
-   Origen de la acción: canal, dirección IP y dispositivo.
-   Resultado de la operación.

La bitácora no deberá poder alterarse desde la interfaz administrativa y
su diseño deberá impedir o permitir detectar modificaciones no
autorizadas, mediante un modelo append-only o controles equivalentes de
integridad. Se conservará según la normativa y las políticas de retención
aplicables.

------------------------------------------------------------------------

## 17. Conciliación, compensación y liquidación

La plataforma deberá disponer de procesos especializados para garantizar
que los movimientos registrados internamente coincidan con los
reportados por las distintas instituciones y proveedores externos.

### Procesos

-   Conciliación bancaria.
-   Conciliación de tarjetas.
-   Conciliación con procesadores.
-   Conciliación de comercios.
-   Conciliación de transferencias.
-   Conciliación de remesas.
-   Conciliación de activos digitales.
-   Identificación automática de diferencias.
-   Gestión de excepciones.
-   Settlement.
-   Liquidación de comercios.
-   Cierres diarios.
-   Archivos contables.
-   Reportes de conciliación.

### Actores y fuentes de conciliación

-   Bancos y cuentas de compensación.
-   Procesadores de pago y adquirencia.
-   Redes de pago y entidades emisoras de tarjetas.
-   Proveedores de servicios: remesas, activos digitales, nómina.
-   Registros internos del ledger.

### Ciclo de conciliación

-   Ingesta de archivos y reportes externos.
-   Emparejamiento automático por identificadores de operación.
-   Identificación de diferencias: faltantes, duplicados, montos o
    fechas inconsistentes y movimientos sin contraparte.
-   Clasificación de diferencias y asignación de responsables.
-   Gestión de excepciones con estados, plazos y evidencias.
-   Generación de asientos de ajuste sobre el ledger, sin alterar los
    movimientos originales.
-   Cierre diario con cuadre de sumas de control y reporte de
    resultados.

### Liquidez, tesorería y fondeo

La conciliación garantiza consistencia contable, pero no asegura por sí
misma que existan fondos para honrar las obligaciones registradas. La
plataforma deberá gestionar de forma explícita la posición de tesorería:

-   Separación entre los fondos que respaldan los saldos de los clientes
    y los fondos operativos de la plataforma.
-   Monitoreo de la posición por moneda y por cuenta de compensación o
    salvaguarda, contra las obligaciones registradas en el ledger.
-   Previsión de necesidades de liquidez a partir de estacionalidad,
    liquidaciones pendientes, reversos y contracargos previstos.
-   Umbrales mínimos operativos y alertas tempranas ante insuficiencia.
-   Procedimientos y responsables de fondeo y retiro de las cuentas de
    compensación, con registro y justificación de cada movimiento.
-   Tratamiento de faltantes temporales, demoras de contrapartes y fallos
    de fondeo, con límites de exposición aceptables y planes de
    contingencia.
-   Reporte periódico de la posición de tesorería y de las diferencias
    entre fondos disponibles y obligaciones pendientes.

------------------------------------------------------------------------

## 18. Analítica e inteligencia financiera

La plataforma deberá proporcionar información operacional, financiera y
comercial que permita evaluar el comportamiento del ecosistema.

### Indicadores

-   Usuarios registrados.
-   Usuarios activos.
-   Volumen transaccional.
-   Cantidad de transacciones.
-   Saldos administrados.
-   Uso de tarjetas.
-   Volumen P2P.
-   Volumen P2M.
-   Ingresos por comisiones.
-   Retención.
-   Cohortes.
-   Uso por producto.
-   Indicadores de fraude.
-   Créditos.
-   Adelantos salariales.
-   Actividad empresarial.
-   Rentabilidad por cliente.
-   Rentabilidad por producto.
-   Adopción y uso por vertical.
-   Uso de capacidades de aliados.
-   Ingresos por vertical y por aliado.
-   Retención por vertical.
-   Disputas, reclamos e incidentes por aliado.
-   Resultado de campañas y experimentos.

### Inteligencia artificial

La personalización y la inteligencia financiera forman parte de la visión
de la plataforma. Su incorporación podrá ser progresiva según la madurez
de los datos, los casos de uso y las fases de implementación. Las
funciones críticas de seguridad, riesgo y operación deberán disponer de
controles funcionales aun antes de incorporar modelos avanzados de IA.

Como capacidades previstas:

-   Detección de fraude.
-   Identificación de anomalías.
-   Atención al cliente.
-   Asistencia financiera.
-   Clasificación automática de gastos.
-   Recomendaciones personalizadas.
-   Predicción de necesidades financieras.
-   Segmentación.
-   Evaluación complementaria de riesgo.
-   Ordenamiento del inicio y descubrimiento de capacidades.
-   Incentivos, ofertas y contenidos contextuales.
-   Reputación y evaluación continua de comercios y aliados.

### Gobernanza de modelos y decisiones automatizadas

Cuando modelos analíticos o de inteligencia artificial influyan en
riesgo, fraude, elegibilidad, crédito, límites, ofertas u otras decisiones
con impacto material sobre el cliente, la plataforma deberá mantener
trazabilidad suficiente sobre el modelo y la versión utilizados, las
variables o señales relevantes, el resultado producido y la acción
ejecutada.

Los modelos deberán poder monitorearse y ajustarse cuando su desempeño se
degrade. Los casos que por regulación, política o nivel de impacto lo
requieran deberán admitir revisión humana o un mecanismo equivalente de
reconsideración, sin asumir que toda decisión debe ser manual.

------------------------------------------------------------------------

## 19. Administración y configuración de productos

La plataforma deberá permitir que buena parte de las reglas comerciales
puedan configurarse sin modificaciones directas al código.

### Ámbitos y precedencia de configuración

Los parámetros podrán definirse en distintos ámbitos. Estos ámbitos no
constituyen necesariamente una jerarquía lineal, ya que una operación
puede estar afectada simultáneamente por institución, producto, cliente,
aliado, canal y tipo de operación. La plataforma deberá definir reglas de
precedencia y resolución de conflictos para determinar de forma
reproducible qué configuración resulta aplicable:

| Ámbito | Contenido |
|---|---|
| Institución | País, monedas habilitadas, cumplimiento aplicable y canales permitidos |
| Producto | Tipos de Wallet y de tarjeta, tarifas, comisiones, límites y reglas de elegibilidad |
| Cliente o empresa | Parametrización propia dentro de su contrato: límites, centros de costo, políticas internas y flujos de aprobación |
| Aliado | Capacidades publicadas, permisos, alcances de datos, límites de uso, reparto de ingresos y vigencia del acuerdo |
| Canal u operación | Restricciones específicas por canal transaccional o tipo de operación |

Reglas:

-   Todo parámetro deberá estar versionado, con vigencia desde y hasta,
    e historial consultable.
-   Los cambios deberán ser auditables, reversibles y con responsable
    identificado.
-   Los parámetros y reglas declarados como configurables deberán poder
    modificarse sin despliegues de código. La incorporación de nueva
    lógica de negocio, nuevos tipos de regla o cambios estructurales podrá
    requerir evolución del software.
-   Las reglas de negocio y su trazabilidad deberán mantenerse en la
    matriz controlada y versionada descrita en el Anexo F, respetando
    estos ámbitos y reglas de precedencia.

### Elementos configurables

-   Tipos de Wallet.
-   Productos.
-   Tarifas.
-   Comisiones.
-   Límites.
-   Monedas.
-   Tipos de tarjeta.
-   Reglas de riesgo.
-   Reglas de elegibilidad.
-   Beneficios.
-   Promociones.
-   Parámetros empresariales.
-   Parámetros de EWA.
-   Parámetros de crédito.
-   Proveedores habilitados.
-   Canales transaccionales.
-   Capacidades y mini-apps habilitadas por aliado.
-   Permisos y alcances de datos por aliado.
-   Esquemas de reparto de ingresos.
-   Reglas de campañas e incentivos.
-   Reglas de descubrimiento y ordenamiento del inicio.
-   Parámetros de fraude de incentivos y de fraude del ecosistema.

------------------------------------------------------------------------

## PARTE IV — ARQUITECTURA Y ECOSISTEMA

------------------------------------------------------------------------

## 20. Arquitectura funcional

La solución deberá implementarse bajo una arquitectura modular que
permita evolucionar cada dominio de forma independiente y reduzca el
acoplamiento entre productos financieros.

Como mínimo deberán diferenciarse los siguientes dominios:

-   Identidad y acceso.
-   Clientes.
-   Wallet.
-   Ledger.
-   Pagos.
-   Tarjetas.
-   Transferencias.
-   Comercios.
-   Riesgo.
-   Fraude.
-   KYC/AML.
-   Conciliación.
-   Settlement.
-   Wallet Familiar.
-   Wallet Empresarial.
-   Nómina y EWA.
-   Crédito.
-   Criptomonedas.
-   Marketplace.
-   Loyalty.
-   Notificaciones.
-   Integraciones.
-   Reportes y analítica.
-   Extensibilidad y aliados.
-   Experiencia y descubrimiento.
-   Campañas e incentivos.
-   Consentimiento y acceso de terceros.
-   Reputación de comercios y aliados.
-   Marca y presencia.

La incorporación de nuevos productos deberá realizarse reutilizando los
servicios financieros comunes de la plataforma, evitando crear
soluciones aisladas para cada producto. La misma regla aplica a las
capacidades de aliados: ninguna podrá replicar identidad, ledger, pagos,
notificaciones ni controles de cumplimiento.

Los dominios de extensibilidad, experiencia, campañas, consentimiento,
reputación y marca existen para permitir que el ecosistema crezca sin
duplicar el núcleo ni comprometer su integridad.

### Continuidad y resiliencia operativa

La arquitectura deberá considerar la continuidad de los servicios
financieros como una propiedad transversal, incluyendo:

-   Alta disponibilidad de los componentes críticos según su nivel de
    servicio requerido.
-   Estrategias de respaldo y recuperación, con pruebas periódicas de
    restauración.
-   Objetivos de recuperación y pérdida aceptable de datos definidos de
    acuerdo con la criticidad de cada dominio, sin asumir un mismo nivel
    para toda la plataforma.
-   Procesamiento idempotente, reintentos controlados y recuperación de
    mensajes o eventos sin duplicar operaciones financieras.
-   Degradación controlada ante indisponibilidad de proveedores externos,
    evitando que una dependencia no crítica detenga innecesariamente el
    núcleo.
-   Monitoreo técnico, transaccional y financiero, con gestión de
    incidentes y trazabilidad de la recuperación.

### Modelo de responsabilidades por producto

Antes de habilitar un producto o capacidad deberá identificarse, cuando
corresponda, qué actor contrata con el cliente, custodia o respalda los
fondos, ejecuta la operación, realiza controles KYC/AML, cobra las
comisiones, gestiona reclamos y disputas, liquida, conserva evidencias y
responde por la continuidad del servicio.

Una misma entidad podrá asumir varias funciones y estas podrán variar por
producto; el objetivo es evitar responsabilidades implícitas o ambiguas,
no imponer un modelo operativo único.

La matriz de actores y responsabilidades funcionales se mantiene en el
Anexo A; los requisitos no funcionales de continuidad, disponibilidad y
recuperación, en el Anexo C.

------------------------------------------------------------------------

## 21. Extensibilidad y ecosistema de aliados

La plataforma deberá poder incorporar capacidades provistas por aliados
manteniendo el control sobre la experiencia, la seguridad y el
cumplimiento. El modelo es curado: la plataforma decide qué capacidades
se ofrecen y en qué condiciones, y el aliado no se autoincorpora.

### Modelo de incorporación

-   Catálogo curado de capacidades: toda incorporación requiere
    evaluación previa y aprobación de la plataforma.
-   Due diligence obligatoria del aliado: situación legal y societaria,
    solvencia, cumplimiento, sanciones y PEP de sus representantes.
-   Acuerdo expreso que cubra alcance funcional, niveles de servicio,
    protección de datos, marca, responsabilidad, precios, causales de
    suspensión y forma de terminación.
-   Certificación técnica obligatoria antes de publicar la capacidad.
-   Sin acuerdo vigente y certificación aprobada, la capacidad no se
    expone al cliente.

### Modalidades de integración

-   Integración nativa: la capacidad se incorpora a la experiencia de la
    plataforma bajo las reglas de esta.
-   Mini-app publicada por el aliado: la capacidad se ejecuta dentro de
    la aplicación con marca propia del aliado y alcances acotados.
-   Servicios en segundo plano: el aliado opera como proveedor detrás de
    una capacidad de la plataforma, sin exposición directa al cliente.
-   Contrato de interfaz formal: contrato de APIs, versionado, ambientes
    de prueba y criterios de aceptación.

### Ciclo de vida de un aliado o mini-app

El ciclo de vida de un aliado o de una mini-app distingue dos tramos,
que no deberán confundirse entre sí ni con el ciclo de vida de otros
actores del ecosistema:

-   **Admisión:** propuesto, en evaluación, aprobado y en certificación.
    Culmina con la publicación de la capacidad.
-   **Operación:** una vez publicado, el aliado y su capacidad quedan
    sujetos al ciclo de vida operativo definido en el Anexo H, cuyos
    estados son activa, suspendida, deprecada y retirada.

Reglas:

-   Toda transición deberá registrarse con fecha, causa y responsable.
-   La suspensión deberá ser inmediata y no requerir la colaboración del
    aliado.
-   La retirada deberá contemplar el tratamiento de datos, los saldos y
    compromisos pendientes con el cliente y las obligaciones de
    continuidad del servicio.
-   Una capacidad retirada no podrá reactivarse: su reincorporación
    requerirá un nuevo proceso de admisión y certificación.

### Aislamiento y control

-   Las capacidades de terceros operarán en un dominio lógico aislado,
    con permisos acotados y límites de recursos.
-   Acceso a datos por alcance explícito y mínimo: nunca acceso directo
    al ledger, a las credenciales del cliente ni a tokens de sesión
    reutilizables fuera de la capacidad autorizada.
-   El acceso de una mini-app a funciones de la plataforma deberá pasar
    por interfaces o bridges controlados por la plataforma, evitando que
    código de terceros invoque directamente componentes internos del
    núcleo financiero.
-   Toda versión publicable de una mini-app o componente de tercero
    deberá ser identificable y quedar asociada a su proceso de
    certificación. Los cambios relevantes podrán exigir una nueva
    revisión antes de su publicación.
-   Monitoreo de disponibilidad, errores, desempeño, consumo de recursos
    y comportamiento anómalo por aliado y por capacidad.
-   Capacidad de degradar, deshabilitar o retirar una capacidad mediante
    controles administrados por la plataforma, sin depender de la
    colaboración del aliado y sin afectar al resto de la aplicación.
-   Las integraciones deberán respetar restricciones de origen,
    navegación, permisos y comunicación acordes con la tecnología
    utilizada, sin fijar en esta especificación un mecanismo concreto de
    ejecución de mini-apps.
-   Ambientes separados de desarrollo, certificación y producción, con
    datos no productivos o debidamente protegidos en pruebas.

------------------------------------------------------------------------

## 22. Modelo de marca y presencia de terceros

La aplicación se ofrece bajo una única marca de la plataforma. Los
aliados no sustituyen esa identidad: se presentan dentro de ella con su
propia marca y su propia responsabilidad.

### Reglas de marca

-   Una sola marca para la aplicación y una identidad de acceso
    unificada para el cliente: el ecosistema no se presenta como
    múltiples aplicaciones, aunque pueda contener distintas cuentas,
    productos, monedas o posiciones financieras.
-   El aliado conserva su marca únicamente dentro del espacio que le
    corresponde, con identificación clara de quién provee el servicio.
-   La plataforma define las reglas de co-branding: jerarquía visual,
    uso de logos, tipografías, componentes permitidos y límites de
    intervención sobre la experiencia.
-   La experiencia no deberá inducir confusión sobre quién provee el
    servicio, quién cobra y quién responde por él.
-   Los flujos de pago, comprobantes, reversos y reclamos de un servicio
    de aliado deberán exponerse con lenguaje visual coherente y con
    información clara sobre las condiciones, responsabilidades y
    mecanismos de atención aplicables a dicho servicio.
-   La plataforma podrá retirar la marca y la capacidad de un aliado de
    forma inmediata.

### Límites del modelo

-   No se contempla la personalización de la experiencia base por
    comercio ni por institución, ni el white-label de la aplicación.
-   Las capacidades publicadas se ofrecen dentro de la aplicación, no
    como aplicaciones independientes del aliado.
-   Las comunicaciones presentadas dentro de la aplicación sobre cambios
    en capacidades publicadas deberán coordinarse y mantenerse coherentes
    desde la plataforma, sin perjuicio de las obligaciones de
    comunicación que correspondan al aliado por su propio servicio.

------------------------------------------------------------------------

## 23. Experiencia unificada y descubrimiento

El ecosistema deberá percibirse como un solo producto y no como un
conjunto de servicios yuxtapuestos.

### Continuidad

-   Identidad y sesión unificadas, con una vista financiera consolidada
    de las cuentas, productos y saldos disponibles para el cliente.
-   Consentimiento explícito por alcance cuando una capacidad acceda a
    datos del cliente y autorización transaccional diferenciada cuando
    pueda iniciar movimientos de fondos.
-   Continuidad entre los canales que se encuentren habilitados para el
    cliente: una operación podrá iniciarse en un canal y completarse en
    otro cuando el producto y el flujo lo permitan.
-   Reingreso y recuperación de estado: los procesos deberán diseñarse
    para reanudarse de forma segura ante interrupciones y para evitar la
    duplicación accidental de operaciones mediante identificadores e
    idempotencia.

### Descubrimiento

-   Inicio dinámico que ordene las capacidades por relevancia, uso y
    contexto del cliente, no por catálogo.
-   Buscador transversal que encuentre personas, comercios, servicios,
    movimientos y capacidades.
-   Código QR universal para la experiencia y enlaces directos que
    permitan resolver destinos del ecosistema mediante una capa común de
    interpretación, aun cuando existan estándares externos diferentes.
-   Notificaciones e inbox unificados: transaccionales, de seguridad, de
    aliados y promocionales, con preferencias configurables por el
    usuario.

### Calidad de experiencia

-   Accesibilidad y desempeño como requisitos de la experiencia, no como
    mejoras posteriores.
-   Coherencia de lenguaje, terminología y patrones de interacción en
    todas las capacidades, nativas o de terceros.
-   Degradación controlada: si una capacidad no está disponible, el
    resto de la aplicación deberá seguir operando con normalidad.

------------------------------------------------------------------------

## 24. Verticales y servicios cotidianos

La frecuencia de uso es la condición de sostenibilidad del ecosistema.
La plataforma deberá priorizar la incorporación de verticales de uso
recurrente en función de la demanda, de la disponibilidad de
integraciones y del retorno operativo, antes que del volumen de
facturación.

### Verticales previstas

-   Telecomunicaciones: recargas y pago de servicios móviles y fijos.
-   Servicios públicos: energía, agua, gas, internet y residuos.
-   Movilidad y transporte: recarga de transporte público, peajes,
    estacionamiento, combustible y viajes.
-   Entretenimiento y eventos: entradas, suscripciones y contenido.
-   Comercio y delivery: pedidos, retiro en tienda y suscripciones.
-   Salud: consultas, farmacia y coberturas.
-   Educación: matrículas, cursos y cuotas.
-   Gobierno y trámites: tasas, multas y certificados, cuando la
    integración sea viable.
-   Hogar y servicios: seguros, mantenimiento y suscripciones
    domésticas.

### Capacidades comunes exigidas a toda vertical

-   Catálogo, precios y disponibilidad.
-   Pago con saldo de la Wallet o con tarjeta, con los mismos controles
    de límites y riesgo.
-   Comprobante, estado de la orden y trazabilidad para el cliente.
-   Pago recurrente y débito autorizado, con revocación simple.
-   Reversos, devoluciones y reclamos.
-   Conciliación y liquidación con el aliado.
-   Soporte con trazabilidad entre la plataforma y el aliado.
-   Métricas de uso, errores y reclamos por vertical y por aliado.

------------------------------------------------------------------------

## 25. Crecimiento, campañas y experimentación

### Segmentación y campañas

-   Segmentación por comportamiento, uso, valor y etapa de vida del
    cliente, con reglas configurables.
-   Campañas: cupones, cashback, promociones por aliado, misiones,
    referidos y bonificaciones.
-   Incentivos cruzados para dirigir demanda hacia una vertical, un
    aliado o un comercio específico.
-   Presupuesto, vigencia y tope de exposición por cliente y por
    campaña.
-   Las campañas deberán respetar las preferencias de comunicación y las
    restricciones legales aplicables a cada producto.

### Experimentación

-   Pruebas A/B con cohortes de control y feature flags.
-   Atribución de conversión por campaña, canal, vertical y aliado.
-   Capacidad de medir el efecto real de una capacidad nueva antes de
    generalizarla.
-   Registro de resultados y decisiones para evitar la repetición de
    experimentos ya concluidos.

### Métricas de crecimiento

-   Activación, adopción por vertical, frecuencia de uso y retención.
-   Costo de adquisición y valor del cliente.
-   Profundidad del ecosistema: cantidad de capacidades usadas por
    cliente y tiempo hasta la segunda y tercera capacidad.

------------------------------------------------------------------------

## 26. Gobernanza de datos y confianza del ecosistema

La incorporación de terceros amplía la superficie operativa, de datos y
de cumplimiento del ecosistema. Esta exposición deberá gestionarse con
consentimiento explícito, trazabilidad, controles proporcionales al riesgo
y capacidad de reacción.

### Consentimiento y acceso

-   Los datos del cliente se comparten con aliados solo con
    consentimiento explícito, granular, informado, revocable y
    registrado.
-   El cliente deberá poder ver qué capacidades acceden a qué datos y
    revocar el acceso de forma efectiva y en el momento.
-   Los datos se otorgan por alcance mínimo necesario, con vigencia
    definida, sin cesión a terceros no autorizados y sin finalidades
    distintas a las declaradas.
-   Trazabilidad de accesos: qué aliado accedió a qué dato, cuándo y con
    qué finalidad.
-   El consentimiento de datos y la autorización para iniciar
    transacciones deberán gestionarse como permisos diferenciados. Una
    autorización de lectura no habilita por sí sola movimientos de
    fondos.

### Integridad del ecosistema

-   Antifraude de incentivos: abuso de cupones, colusión entre comercio
    y cliente, cuentas múltiples y manipulación de campañas.
-   Uso del ecosistema para actividades ilícitas o para eludir los
    controles de cumplimiento.
-   Evaluación continua del riesgo de cada aliado con métricas de
    contracargos, disputas, reclamos y comportamiento transaccional.
-   Reputación de aliados y acciones graduadas: monitoreo reforzado,
    retención de liquidaciones, suspensión preventiva y baja.

### Responsabilidad y cumplimiento

-   La plataforma será responsable de la experiencia que controla y de
    presentar de forma clara quién provee cada servicio. La
    responsabilidad contractual, financiera, operativa o regulatoria de
    cada producto deberá distribuirse entre la plataforma y el aliado
    conforme al rol efectivo de cada parte y al acuerdo aplicable, sin
    trasladar al cliente ambigüedades sobre los canales de atención.
-   El aliado deberá mantener licencias, certificaciones y seguros
    exigidos, con actualización periódica y verificable.
-   Conservación de evidencias y disponibilidad de información ante
    requerimientos de autoridades.
-   Registro de decisiones, suspensiones, deprecaciones y retiradas de
    aliados, con causa y responsable identificados.

Para cada capacidad de un tercero deberá existir una definición de roles
que identifique, cuando aplique, al proveedor del servicio, la parte que
contrata con el cliente, la que procesa o custodia fondos, la que ejecuta
controles regulatorios, la que liquida, la que resuelve reclamos y la que
conserva las evidencias.

------------------------------------------------------------------------

## 27. Modelo de ingresos de la plataforma

Los ingresos deberán ser trazables, medibles por unidad de negocio y
consistentes con la propuesta de valor al cliente.

### Fuentes previstas

-   Comisiones por transacción y procesamiento.
-   Comisión por originación o intermediación de productos financieros.
-   Reparto de ingresos con aliados por las capacidades que operan sobre
    la plataforma.
-   Suscripciones y planes de valor agregado.
-   Publicidad, posicionamiento y campañas financiadas por aliados.
-   Intereses y márgenes de productos de crédito y financiación propios.
-   Servicios empresariales, APIs e integraciones.
-   Datos agregados y anonimizados, cuando el consentimiento y la
    normativa aplicable lo permitan.

### Reglas

-   La rentabilidad deberá poder medirse por cliente, producto, vertical
    y aliado.
-   Todo ingreso deberá ser trazable y conciliarse contra la operación
    que lo origina.
-   Los esquemas de reparto con aliados deberán liquidarse de forma
    automática, auditable y con el mismo ciclo de conciliación que el
    resto de la operación.
-   La información al cliente sobre comisiones, precios y cargos deberá
    ser previa, clara y versionada.
-   No se admitirá monetización basada en información personal
    identificable ni en datos obtenidos sin consentimiento.

------------------------------------------------------------------------

## PARTE V — PROYECTO Y CIERRE

------------------------------------------------------------------------

## 28. Premisas, dependencias y exclusiones

Esta especificación describe la plataforma objetivo. Su materialización
dependerá de condiciones externas que deben gestionarse de forma
explícita.

Para efectos de esta sección:

-   **Premisa:** condición que se asume cierta y cuya falsedad
    invalidaría total o parcialmente el alcance previsto. Se verifica y
    se monitorea; si deja de cumplirse, deberá revisarse el alcance, la
    fase o el modelo operativo afectado.
-   **Dependencia:** condición que el proyecto debe obtener de un
    tercero o definir internamente. Se asigna a un responsable, se
    persigue y se cierra.
-   **Exclusión:** capacidad o alcance que la plataforma no contempla,
    salvo acuerdo específico, y que no deberá asumirse como incluido.

### Premisas

-   Acuerdos vigentes con las entidades financieras y certificaciones
    requeridas para operar los productos previstos.
-   Aprobación de diseño y marca por parte de las redes de pago, cuando
    corresponda.
-   Marco regulatorio habilitante para cada producto financiero.

### Tipos de dependencia

Las dependencias no se enumeran en esta sección: se materializan en los
registros del proyecto según su naturaleza y se referencian por código.

| Tipo de dependencia | Registro | Código |
|---|---|---|
| Integración con un proveedor o sistema externo | `Catalogo_Integraciones_Wallet.md` | `INT-` |
| Decisión del proyecto pendiente de cierre | `Registro_Decisiones_Wallet.md` | `DJ-` |
| Valor o regla de negocio pendiente de definición | `Matriz_Reglas_Negocio_Wallet.md` | `RB-` |
| Requisito no funcional y supuesto de volumetría | Anexos C y D | Sin código |

Las condiciones que la plataforma requiere de un tercero —disponibilidad
de proveedores de identidad, tarjetas, adquirencia, custodia y liquidez;
ambientes de prueba; documentación e interfaces; y especificaciones de
intercambio— constituyen atributos de las integraciones del catálogo, y
se registran en sus campos de ambientes, documentación, protocolo y
estado, no como listado aparte.

### Gestión de premisas y dependencias

Las premisas y dependencias no son enunciados declarativos: constituyen
condiciones verificables que deberán gestionarse hasta su cierre.

Reglas de gestión:

-   Toda dependencia deberá registrarse según su tipo, conforme a la
    tabla anterior, antes de considerarse gestionada.
-   Cada registro deberá reflejarse en la fila correspondiente de la
    **matriz de trazabilidad del proyecto**, en la columna de
    dependencias principales, mediante su código.
-   Mientras una dependencia bloqueante permanezca abierta, la
    funcionalidad afectada no podrá declararse "Habilitado para
    desarrollo", conforme a los criterios del Anexo H.
-   Cuando una dependencia condicione una capacidad habilitante completa,
    se considerará condición de entrada de la fase correspondiente,
    conforme a la sección 31.
-   El orden de resolución debería seguir las condiciones de entrada de
    la fase en curso, por ser las que habilitan el resto de las
    capacidades previstas.
-   Las premisas se verifican y se monitorean; si alguna deja de
    cumplirse, deberá revisarse el alcance, la fase o el modelo operativo
    afectado.
-   Los valores cuantitativos pendientes de requisitos no funcionales y
    de volumetría se cierran en los Anexos C y D; no bloquean la
    definición funcional, pero sí el dimensionamiento y la estimación.

### Exclusiones

Quedan fuera del alcance de esta especificación:

-   La operación de caja y la atención presencial en sucursales.
-   La provisión de POS, adquirencia o terminales físicas.
-   La administración de la nómina de las empresas clientes.
-   La contratación de terceros y de aquellos procesos que las
    entidades financieras conserven bajo su responsabilidad.
-   La asesoría legal, contable o impositiva derivada de la operación.
-   La mensajería y las capacidades sociales, evaluadas para una etapa
    posterior.
-   La publicación abierta de aplicaciones de terceros: toda
    incorporación requiere evaluación y acuerdo expreso.
-   La personalización de la experiencia base por comercio o institución
    y el white-label de la aplicación.

------------------------------------------------------------------------

## 29. Privacidad, canales y cumplimiento normativo

### Privacidad de los canales

-   La información sensible que deba almacenarse localmente deberá
    protegerse mediante los mecanismos seguros provistos por el sistema
    operativo y cifrado cuando corresponda, minimizando la persistencia
    de datos financieros o credenciales en el dispositivo.
-   La aplicación deberá permitir solicitar el cierre o eliminación de
    la cuenta mediante un procedimiento claro y accesible, distinguiendo
    entre la desactivación de acceso y la eliminación de información que
    legalmente pueda suprimirse.
-   Deberá publicarse qué datos se eliminan, cuáles se conservan y
    durante cuánto tiempo, según las obligaciones normativas.
-   La política de privacidad y los términos y condiciones deberán estar
    disponibles, versionados y aceptados de forma trazable.
-   La plataforma deberá operar bajo el principio de minimización de
    datos: solo se recopila lo necesario para la finalidad declarada.

### Requisitos de tiendas y canales

-   Cifrado de la información sensible almacenada localmente.
-   Enlace de eliminación de cuenta accesible desde la ficha pública de
    la aplicación.
-   Correspondencia entre el nombre de la aplicación y el del publicador
    en las tiendas.
-   Cumplimiento de las políticas de contenido financiero, permisos y
    tratamiento de datos de las plataformas de distribución.

### Cumplimiento normativo

-   Protección de datos personales y financieros.
-   Prevención de legitimación de activos y financiamiento del
    terrorismo.
-   Normativa de medios de pago, tarjetas y PCI DSS cuando corresponda.
-   Conservación de evidencias, trazabilidad y atención de
    requerimientos de las autoridades.

------------------------------------------------------------------------

## 30. Estados de madurez

Puesto que este documento describe y enumera en sus diferentes secciones
las capacidades previstas y no detalla específicamente el estatus de las
mismas, se introduce el concepto de **estado de madurez** de una
capacidad: qué tan bien definida y materializada se encuentra, de modo
que puede estimarse, planificarse o desarrollarse.

De esta forma debe entenderse en este documento y en sus anexos.

### Estados de madurez admitidos

| Estado | Significado |
|---|---|
| Objetivo | Capacidad prevista en la visión de la plataforma, aún no priorizada |
| En definición | Capacidad priorizada cuyos requisitos funcionales o técnicos todavía no están cerrados |
| Habilitado para desarrollo | Requisitos, reglas de negocio e integraciones definidos y validados |
| Operativo | Capacidad construida, integrada y en operación |

Los estados son acumulativos en exigencia: cada uno supone satisfechas
las condiciones del anterior. Las transiciones no son automáticas ni
declarativas, y requieren criterios objetivos que se definen en el Anexo
H junto con las condiciones de salida.

### Separación respecto del ciclo de vida operativo

De forma separada del estado de madurez, una capacidad que haya alcanzado
el estado Operativo podrá tener un **estado de ciclo de vida operativo**
—por ejemplo, activa, suspendida, deprecada o retirada— sin que ello
modifique retroactivamente su madurez alcanzada. Los estados y
transiciones de ciclo de vida se definen en el Anexo H.

Ambos conceptos son independientes y no deberán confundirse: una
capacidad operativa puede estar suspendida sin perder la madurez
alcanzada, y una capacidad no deja de estar madura porque se deprecie o
se retire.

### Alcance de aplicación

El estado de madurez se declara sobre dominios, capacidades y
funcionalidades, no sobre fases. Una fase agrupa capacidades que pueden
encontrarse en estados distintos, de modo que no existe un estado único
que la represente: su avance se expresa por el cumplimiento de sus
condiciones de entrada, conforme a la sección 31, y por el estado de las
funcionalidades que la componen, declarado en la **matriz de trazabilidad
del proyecto**.

### Implicancias de la madurez declarada

-   Ninguna capacidad en estado "En definición" deberá estimarse en firme
    ni comprometer fechas de entrega hasta alcanzar el estado "Habilitado
    para desarrollo".
-   Una capacidad no deberá declararse "Habilitado para desarrollo"
    mientras mantenga dependencias bloqueantes abiertas, conforme a la
    sección 28.
-   El estado declarado es provisional hasta que se ratifique al iniciar
    la planificación de la fase correspondiente, conforme a la sección
    31.
-   La volumetría que condiciona el dimensionamiento se define en el
    Anexo D: no bloquea la definición funcional, pero sí la estimación.

### Matriz de trazabilidad del proyecto

El estado de madurez de cada dominio y funcionalidad se declara en la
**matriz de trazabilidad del proyecto**. Esta matriz deberá identificar,
como mínimo, cada dominio o capacidad, su estado de madurez, fase
prevista, dependencias principales y responsable funcional, y es la
referencia para distinguir la visión objetivo de aquello que se encuentra
suficientemente definido para ser estimado y desarrollado. Su estructura
mínima y sus reglas de uso se definen en el Anexo F.

------------------------------------------------------------------------

## 31. Fases de implementación recomendadas

Esta sección define **cómo se ordena la materialización de la
plataforma**: agrupa las capacidades en fases según lo que cada una
habilita y establece qué debe estar resuelto antes de iniciar cada una.
El concepto de madurez y los estados admitidos se definen en la sección
30.

Cada fase se organiza por capacidad habilitante y no por producto
terminado, y se identifica por un número y un nombre que se utilizan
como referencia en el resto del documento y en los artefactos del
proyecto. Una fase puede iniciarse únicamente cuando se cumplen sus
condiciones de entrada.

### Fases propuestas

| Fase | Nombre | Secciones comprendidas |
|---|---|---|
| 1 | Fundación financiera | 1 a 6, 15 a 19, 20 |
| 2 | Ecosistema de pagos | 7, 8, 14, 15 a 19 |
| 3 | Payroll y adelanto salarial | 9 |
| 4 | Crédito y Marketplace Financiero | 11, 12 |
| 5 | Criptomonedas y multidivisa | 10 |
| 6 | Open Banking e inteligencia financiera | 13 |
| 7 | Ecosistema de aliados y super app | 21 a 27 |
| No aplica | Marco del proyecto | 28 a 32 |

Las secciones 15 a 19 se habilitan de forma progresiva entre las fases 1
y 2.

La tabla no declara estado de madurez: una fase reúne capacidades que
pueden encontrarse en estados distintos y no admite un estado único que
las represente. Lo que habilita el inicio de una fase son sus
condiciones de entrada, y el estado de cada capacidad se declara en la
**matriz de trazabilidad del proyecto**, conforme a la sección 30.

### Condiciones de entrada por fase

Estas condiciones son dependencias bloqueantes de la fase y se gestionan
conforme a la sección 28.

La columna de dependencias identifica los registros cuyo cierre se exige
para iniciar la fase: integraciones del catálogo (`INT-`), decisiones del
registro (`DJ-`) y reglas de negocio (`RB-`). Una misma dependencia puede
condicionar más de una fase, y su detalle, responsable y fecha objetivo
se consultan en el artefacto correspondiente.

| Fase | Nombre | Condiciones de entrada | Dependencias cuyo cierre se exige |
|---|---|---|---|
| 1 | Fundación financiera | Proveedor de identidad definido o contratado; entidad emisora y procesador seleccionados, con interfaces, documentación y proceso de certificación disponibles; modelo de custodia y responsabilidades definido para el núcleo; mecanismo de transferencias bancarias y modelo operativo de KYC/AML definidos; y reglas de comisiones y límites cerradas | DJ-005, DJ-006, DJ-007, DJ-010 · INT-001, INT-005, INT-006, INT-009 · RB-011, RB-025 |
| 2 | Ecosistema de pagos | Modelo de liquidación a comercios definido y proveedor de adquirencia o QR seleccionado, con interfaces, documentación y ambiente de integración disponibles | DJ-008 · INT-010 · RB-025 |
| 3 | Payroll y adelanto salarial | Convenio con las empresas afiliadas, integración de nómina y reglas de recuperación definidas | DJ-012 · INT-015 · RB-038, RB-039 |
| 4 | Crédito y Marketplace Financiero | Modelo de riesgo, marco contractual y, cuando aplique, aliado financiero habilitado | DJ-013 · INT-020, INT-021, INT-022 · RB-041 |
| 5 | Criptomonedas y multidivisa | Proveedor de custodia y liquidez contratado y marco regulatorio aplicable resuelto | DJ-009, DJ-014 · INT-017, INT-018 · RB-040 |
| 6 | Open Banking e inteligencia financiera | Interfaces bancarias disponibles y base de datos analítica consolidada | INT-019 |
| 7 | Ecosistema de aliados y super app | Modelo curado de aliados definido, criterios de evaluación de riesgo y datos aprobados, fundamentos de aislamiento, autorización y revocación ya disponibles, y procesos de onboarding y certificación listos para operación | DJ-019, DJ-020, DJ-021, DJ-022, DJ-023 · INT-025 · RB-050, RB-053, RB-057 |

#### Dependencias transversales

No se asignan a una fase determinada y deberán gestionarse de forma
continua: su ausencia condiciona la definición, el dimensionamiento o la
operación de cualquier fase. Una dependencia transversal puede además
condicionar una fase concreta, en cuyo caso figura en ambas tablas.

| Dependencia | Tema |
|---|---|
| DJ-009 | Jurisdicción inicial |
| DJ-015 | Volumetría inicial |
| DJ-016 | SLA y objetivos no funcionales |
| DJ-018 | Capacidades que formarán parte de la primera liberación |
| DJ-024 | Retención de información por tipo y obligaciones de conservación aplicables |
| DJ-025 | Asignación de responsables funcionales por dominio |

### Fase 1 — Fundación financiera

Construcción de los componentes esenciales sobre los cuales operará el
resto del ecosistema:

-   Identidad.
-   KYC.
-   Core Wallet.
-   Ledger.
-   Transferencias P2P.
-   Tarjetas.
-   Seguridad.
-   Backoffice.
-   Conciliación.
-   Fundamentos de extensibilidad: identidades de servicio, scopes,
    consentimiento y autorización delegada, contratos de API,
    idempotencia, eventos y mecanismos de revocación necesarios para
    evitar rediseñar el núcleo al incorporar aliados posteriormente.

### Fase 2 — Ecosistema de pagos

Expansión hacia pagos y administración de relaciones financieras:

-   QR.
-   P2M.
-   Comercios.
-   Liquidaciones.
-   Wallet Familiar.
-   Wallet Empresarial.
-   Loyalty.

### Fase 3 — Payroll y adelanto salarial

-   Integración con nómina.
-   Wallet salarial.
-   Tarjeta salarial.
-   Earned Wage Access.
-   Administración empresarial asociada.

### Fase 4 — Crédito y Marketplace Financiero

-   Scoring.
-   Microcréditos.
-   Préstamos.
-   BNPL.
-   Seguros.
-   Marketplace financiero.

### Fase 5 — Criptomonedas y multidivisa

-   Activos digitales.
-   Custodia.
-   Conversión crypto-fiat.
-   Wallets multidivisa.
-   Cambio de divisas.

### Fase 6 — Open Banking e inteligencia financiera

-   Integración con cuentas externas.
-   APIs financieras.
-   Open Banking.
-   Agregación financiera.
-   Inteligencia artificial y modelos avanzados sobre datos consolidados.
-   Personalización financiera avanzada.
-   Evolución de modelos de riesgo y anomalías basados en aprendizaje
    automático cuando la calidad y volumen de datos lo permitan.

### Fase 7 — Ecosistema de aliados y super app

-   Modelo curado de aliados.
-   Capacidades y mini-apps de terceros.
-   Verticales de uso cotidiano.
-   Experiencia unificada y descubrimiento.
-   Campañas e incentivos cruzados.
-   Gobernanza de datos y consentimiento por alcance.
-   Reglas de marca y presencia de aliados.

Esta fase no cierra la evolución de la plataforma: el ecosistema se
gestiona de forma continua mediante el ciclo de vida de aliados
descrito en la sección 21.

------------------------------------------------------------------------

## 32. Diferenciadores de la plataforma

La propuesta busca superar el concepto tradicional de una billetera
electrónica y consolidarse como **super app financiera**: un solo
producto, una sola marca y una identidad financiera unificada, donde los
servicios propios y los de aliados seleccionados comparten una misma
infraestructura de identidad, orquestación financiera, pagos, seguridad
y cumplimiento. La experiencia consolida las posiciones del cliente sin
forzar que productos, monedas o custodias diferentes se representen como
una única cuenta técnica.

Entre sus principales capacidades diferenciadoras se encuentran:

-   Wallet individual.
-   Wallet familiar y dependientes.
-   Wallet empresarial.
-   Tarjetas físicas y virtuales.
-   Pagos P2P y P2M.
-   Adelanto salarial.
-   Tarjeta salarial.
-   Crédito.
-   Criptomonedas.
-   Multidivisa.
-   Marketplace financiero.
-   Lealtad y beneficios.
-   Open Banking.
-   Motor de riesgo y antifraude.
-   Integración mediante APIs.
-   Inteligencia financiera.
-   Ecosistema curado de aliados.
-   Verticales de servicios cotidianos.
-   Experiencia unificada y descubrimiento transversal.
-   Incentivos cruzados entre productos, verticales y aliados.
-   Gobernanza de datos con consentimiento por alcance.
-   Modelo de ingresos diversificado y medible por aliado y vertical.

Esta arquitectura permite iniciar con un conjunto controlado de
productos y evolucionar progresivamente hacia una plataforma financiera
integral, sumando capacidades de aliados bajo un modelo curado que
preserva la integridad del núcleo tecnológico y la confianza del
cliente.
