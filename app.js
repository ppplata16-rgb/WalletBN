const app = document.querySelector('#app');
const toast = document.querySelector('#toast');
const state = { view: 'home', balanceVisible: true, payMode: null, selectedAccount: null, youthCardBlocked: false, selectedCard: 'main', youthFundsTab: false };

const nav = [['home', '⌂', 'Inicio'], ['wallet', '▣', 'Wallet'], ['pay', '⌗', 'Pagar'], ['activity', '↗', 'Actividad'], ['analysis', '◔', 'Análisis'], ['profile', '♙', 'Perfil']];
const movements = [['↑', 'Juan Pérez', 'Transferencia recibida', '+ B/. 150.00', 'positive'], ['🛒', 'Supermercado Rey', 'Compras · Hoy, 09:12', '- B/. 35.50', ''], ['▣', 'Metro de Panamá', 'Transporte · Ayer, 18:45', '- B/. 2.50', '']];
const accountMovements = {
	'Cuenta Corriente': [['↑', 'Empresa ABC', 'Pago recibido · Hoy, 08:40', '+ B/. 650.00', 'positive'], ['▣', 'Supermercado Rey', 'Compras · Hoy, 09:12', '- B/. 35.50', ''], ['↗', 'Transferencia bancaria', 'Ayer, 14:25', '- B/. 120.00', '']],
	'Cuenta de Ahorros': [['↑', 'Aporte mensual', 'Transferencia recibida · Hoy', '+ B/. 300.00', 'positive'], ['↓', 'Cuenta Corriente', 'Transferencia enviada · 15 sep', '- B/. 80.00', ''], ['↑', 'Intereses', 'Abono mensual · 01 sep', '+ B/. 4.25', 'positive']],
	'Pase U': [['⌁', 'Metro de Panamá', 'Transporte · Hoy, 07:45', '- B/. 2.50', ''], ['▣', 'Pase U', 'Recarga · Ayer, 18:20', '- B/. 10.00', ''], ['↑', 'Juan Pérez', 'Dinero recibido · 12 sep', '+ B/. 25.00', 'positive']],
	'Wallet Dólares': [['↑', 'Pago internacional', 'Depósito recibido · Hoy', '+ USD 45.20', 'positive'], ['▣', 'Servicio digital', 'Suscripción · 18 sep', '- USD 9.99', ''], ['↗', 'Conversión de moneda', 'Cambio realizado · 16 sep', '- USD 20.00', '']],
	'Cuenta de Nómina': [['↑', 'Nómina mensual', 'Depósito recibido · Hoy', '+ B/. 380.00', 'positive'], ['▣', 'Farmacia Arrocha', 'Compras · Ayer, 16:30', '- B/. 28.75', ''], ['↗', 'Transferencia bancaria', '12 sep', '- B/. 50.00', '']]
};

function notify(message) {
	toast.textContent = message;
	toast.classList.add('show');
	clearTimeout(notify.timer);
	notify.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function cardMarkup() {
	return `<div class="card-flip" data-flip tabindex="0" aria-label="Girar tarjeta Visa">
		<article class="payment-card card-front reference-front"><span class="card-holder">PAUL PLATA</span><b class="card-brand">VISA</b></article>
		<article class="payment-card card-back"><div class="magnetic-strip"></div><div class="back-number">4582 &nbsp; •••• &nbsp; •••• &nbsp; 9017</div><div class="back-details"><span>VALID THRU<br><b>09/29</b></span><span>CVV<br><b>•••</b></span><strong>VISA</strong></div><small class="back-note">Tarjeta protegida por PanamaWallet</small></article>
	</div>`;
}

function youthCardMarkup() {
	return `<div class="youth-card-flip card-flip" data-flip tabindex="0" aria-label="Girar tarjeta juvenil"><article class="payment-card card-front"><div class="card-top"><small class="card-tier">TARJETA JUVENIL</small><b>VISA</b></div><div class="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 7788</div><div class="card-bottom"><span>PAUL PLATA</span><small>${state.youthCardBlocked ? 'BLOQUEADA' : 'ACTIVA'}</small></div></article><article class="payment-card card-back"><div class="magnetic-strip"></div><div class="back-number">7788 &nbsp; •••• &nbsp; •••• &nbsp; 7788</div><div class="back-details"><span>VALID THRU<br><b>09/30</b></span><span>CVV<br><b>•••</b></span><strong>VISA</strong></div><small class="back-note">Tarjeta juvenil protegida</small></article></div>`;
}

function cardOptionsMarkup() {
	if (state.selectedCard === 'youth') {
		return `<div class="card-options"><p class="eyebrow">OPCIONES TARJETA JUVENIL</p><div class="settings"><div class="youth-lock-option"><span>▣ <b>Bloqueo de tarjeta</b></span><button class="toggle ${state.youthCardBlocked ? 'on' : ''}" data-action="youth-card-toggle" aria-label="${state.youthCardBlocked ? 'Desbloquear' : 'Bloquear'} tarjeta"><i></i></button></div><button class="profile-row" data-action="manage-fund"><span>◈</span><b>Administración de fondos</b>›</button><div>▣ <b>Retiros en ATM</b><span class="toggle"></span></div></div></div>`;
	}
	return `<div class="card-options"><p class="eyebrow">OPCIONES TARJETA PRINCIPAL</p><div class="settings"><div>◉ <b>Compras en línea</b><span class="toggle on"></span></div><div>⌁ <b>Compras internacionales</b><span class="toggle on"></span></div><div>▣ <b>Retiros en ATM</b><span class="toggle"></span></div></div></div>`;
}

function movementMarkup(items = movements) {
	return items.map(([icon, name, detail, amount, tone]) => `<article class="movement"><span class="movement-icon ${tone}">${icon}</span><div><b>${name}</b><small>${detail}</small></div><strong class="${tone}">${amount}</strong></article>`).join('');
}

function header(title, subtitle) {
	return `<header class="header"><div class="status"><span>9:41</span><span>●●● &nbsp;⌁ &nbsp;▰</span></div><div class="header-row"><button class="menu" data-action="menu">☰</button><div class="header-copy"><p>MARTES, 18 DE SEPTIEMBRE</p><h1>${title}</h1><span>${subtitle}</span></div><div class="header-actions"><button data-action="notifications">♧<i></i></button><button class="avatar">PP</button></div></div></header>`;
}

function navigation() {
	return `<nav class="bottom-nav">${nav.map(([id, icon, label]) => `<button class="nav-item ${state.view === id ? 'active' : ''}" data-view="${id}"><span>${icon}</span>${label}</button>`).join('')}</nav>`;
}

function homeView() {
	return `<section class="content home-content"><article class="balance"><div><small>SALDO DISPONIBLE</small><button data-balance>${state.balanceVisible ? '◉' : '◌'}</button></div><strong>${state.balanceVisible ? 'B/. 2,450.75' : 'B/. ••••••'}</strong><span>En total: 4 cuentas · 2 wallets · 4 tarjetas</span></article><section class="panel accounts-preview"><div class="panel-heading"><b>Mis cuentas</b><button data-view="wallet">Ver todas ›</button></div>${[['Cuenta Corriente','B/. 1,250.00','•••• 1234'],['Cuenta de Ahorros','B/. 820.45','•••• 5678'],['Pase U','B/. 60.30','•••• 9090'],['Cuenta de Nómina','B/. 380.00','•••• 7788']].map(([name, amount, number]) => `<button class="account-preview-row" data-action="account" data-account="${name}"><span>▣</span><div><b>${name}</b><small>${number}</small></div><strong>${state.balanceVisible ? amount : '••••••'}</strong><i>›</i></button>`).join('')}</section><div class="quick-actions">${[['send','➤','Enviar dinero'],['receive','⇩','Recibir dinero'],['pay','⌗','Pagar'],['bank','⌂','Transferir'],['analysis','◔','Análisis']].map(([action, icon, label]) => `<button data-action="${action}"><span>${icon}</span><b>${label}</b></button>`).join('')}</div></section>`;
}

function walletView() {
	const accounts = [['Cuenta Corriente', 'B/. 1,250.00', '•••• 1234'], ['Cuenta de Ahorros', 'B/. 820.45', '•••• 5678'], ['Pase U', 'B/. 60.30', '•••• 9090'], ['Cuenta de Nómina', 'B/. 380.00', '•••• 7788'], ['Wallet Dólares', 'USD 45.20', '•••• 6620']];
	if (state.selectedAccount) {
		const selectedMovements = accountMovements[state.selectedAccount] || movements;
		return `<section class="content wallet-content"><section class="panel account-detail"><div class="panel-heading"><button data-action="accounts-back">‹ Volver a Wallet</button><b>${state.selectedAccount}</b></div><div class="panel-heading"><b>Últimos movimientos</b><button class="filter">Filtrar ˅</button></div>${movementMarkup(selectedMovements)}</section></section>`;
	}
	return `<section class="content wallet-content"><article class="card-panel"><div class="panel-heading"><b>Mis tarjetas</b><span>Selecciona una tarjeta</span></div><div class="apple-pay-cards selected-${state.selectedCard}"><button class="apple-card-main ${state.selectedCard === 'main' ? 'selected' : ''}" data-card="main">${cardMarkup()}</button><button class="apple-card-youth ${state.selectedCard === 'youth' ? 'selected' : ''}" data-card="youth">${youthCardMarkup()}</button></div>${cardOptionsMarkup()}</article><button class="panel pase-u-entry" data-action="pase-u"><span>⌁</span><div><b>Pase U</b><small>Consulta tus fondos y recargas</small></div><i>›</i></button><button class="panel youth-funds-entry" data-action="youth-funds"><span>◈</span><div><b>Fondos Jóvenes</b><small>Crea y administra fondos mancomunados</small></div><i>›</i></button></section>`;
}

function paseUView() {
	return `<section class="content pase-u-content"><button class="back-action" data-action="wallet-back">‹ Volver a Wallet</button><section class="panel pase-u-panel"><p class="eyebrow">TRANSPORTE Y BENEFICIOS</p><h2>Pase U</h2><div class="pase-balance"><small>Fondos disponibles</small><strong>B/. 60.30</strong><span>Saldo para transporte y recargas</span></div><div class="pase-actions"><button class="primary" data-action="pase-recharge">Recargar fondos</button><button class="profile-row" data-action="pase-movements"><span>↗</span><b>Ver movimientos</b>›</button></div></section></section>`;
}

function youthFundsView() {
	if (state.youthFundsTab) return `<section class="content youth-funds-content"><button class="back-action" data-action="funds-back">‹ Volver a tarjeta juvenil</button><section class="panel youth-funds-panel"><p class="eyebrow">ADMINISTRACIÓN DE FONDOS</p><h2>Transferir fondos</h2><p class="description">Ingresa el monto y selecciona la cuenta de destino.</p><label class="fund-field">Monto a transferir<input type="number" min="0" step="0.01" placeholder="B/. 0.00"></label><label class="fund-field">Cuenta de destino<select><option>Cuenta Corriente · •••• 1234</option><option>Cuenta de Ahorros · •••• 5678</option><option>Pase U · •••• 9090</option><option>Cuenta de Nómina · •••• 7788</option></select></label><button class="primary" data-action="transfer-fund">Transferir fondos</button></section></section>`;
	return `<section class="content youth-funds-content"><button class="back-action" data-action="wallet-back">‹ Volver a Wallet</button><section class="panel youth-funds-panel"><p class="eyebrow">NUEVO PRODUCTO</p><h2>Fondos Jóvenes</h2><p class="description">Una forma sencilla de organizar metas compartidas y administrar aportes en grupo.</p>${youthCardMarkup()}<div class="youth-funds-actions"><button class="primary" data-action="create-fund">+ Crear fondo</button><button class="profile-row" data-action="youth-card-block"><span>▣</span><b>Bloquear tarjeta</b>›</button><button class="profile-row" data-action="youth-card-unblock"><span>◉</span><b>Desbloquear tarjeta</b>›</button><button class="profile-row" data-action="manage-fund"><span>▣</span><b>Administrar aportes</b>›</button></div></section></section>`;
}

function payView() {
	const options = [['qr', '⌗', 'Escanear QR', 'Comercio, persona o servicio'], ['link', '↗', 'Crear enlace', 'Solicita o recibe un pago'], ['services', '⌘', 'Pagar servicios', 'Telecomunicaciones y hogar'], ['pase', '◉', 'Pase U', 'Recarga y consulta tu beneficio'], ['yappy', 'Y', 'Yappy', 'Paga y envía dinero con Yappy']];
	if (state.payMode) {
		const modes = { qr: ['Escanear QR', 'Apunta la cámara al código QR del comercio o persona.', '▦'], link: ['Crear enlace', 'Genera un enlace para solicitar o recibir un pago.', '↗'], services: ['Pagar servicios', 'Selecciona el servicio que deseas pagar desde tu Wallet.', '⌘'], pase: ['Pase U', 'Consulta o recarga tu beneficio de transporte.', '◉'], yappy: ['Yappy', 'Envía dinero y paga con Yappy de forma rápida.', 'Y'] };
		const [title, description, icon] = modes[state.payMode];
		return `<section class="content pay-content pay-mode"><button class="back-action" data-action="pay-menu">‹ Volver a pagar</button><div class="qr-card"><div>${icon}</div></div><p class="eyebrow">MODALIDAD DE PAGO</p><h2>${title}</h2><p class="description">${description}</p><button class="primary mode-action" data-action="${state.payMode}-start">Continuar</button></section>`;
	}
	return `<section class="content pay-content"><div class="qr-card"><div>▦<br>▦</div></div><p class="eyebrow">PUNTO DE ENTRADA UNIVERSAL</p><h2>Paga en cualquier lugar</h2><p class="description">Escanea un QR, usa un enlace de pago o selecciona una capacidad del ecosistema.</p><div class="pay-grid">${options.map(([action, icon, label, detail]) => `<button data-action="${action}"><span>${icon}</span><b>${label}</b><small>${detail}</small></button>`).join('')}</div></section>`;
}

function receiveView() {
	return `<section class="content receive-content"><button class="back-action" data-action="receive-back">‹ Volver a Inicio</button><p class="eyebrow">NUEVAS POSIBILIDADES</p><h2>Recibir y hacer crecer tu dinero</h2><p class="description">Explora opciones para invertir o administrar tus activos digitales desde PanamaWallet.</p><div class="pay-grid receive-grid"><button data-action="investments"><span>◈</span><b>Inversiones</b><small>Haz crecer tu dinero con opciones de inversión.</small></button><button data-action="bitcoin"><span>₿</span><b>Wallet Bitcoin</b><small>Recibe, guarda y administra Bitcoin.</small></button></div></section>`;
}

function cardsView() { return `<section class="content"><section class="panel cards-panel"><div class="panel-heading"><div><p class="eyebrow">FUNCIONES DE LA TARJETA</p><h2>Controles</h2></div></div><div class="settings"><div>◉ <b>Compras en línea</b><span class="toggle on"></span></div><div>⌁ <b>Compras internacionales</b><span class="toggle on"></span></div><div>▣ <b>Retiros en ATM</b><span class="toggle"></span></div></div></section></section>`; }

function activityView() { return `<section class="content"><section class="panel activity-panel"><div class="panel-heading"><h2>Actividad</h2><button class="filter">Filtrar ˅</button></div><div class="activity-total"><small>Movimientos de septiembre</small><strong>B/. 1,842.70</strong></div><button class="analysis-link" data-view="analysis"><span>◔</span><div><b>Analiza tus gastos</b><small>Descubre en qué estás gastando más</small></div>›</button>${movementMarkup()}${movementMarkup()}</section></section>`; }

function analysisView() {
	const categories = [['Hogar', 'B/. 420.00', 72, '▦'], ['Alimentación', 'B/. 318.40', 54, '◈'], ['Transporte', 'B/. 186.20', 32, '⌁'], ['Entretenimiento', 'B/. 96.75', 18, '✦']];
	return `<section class="content analysis-content"><section class="panel analysis-summary"><div class="panel-heading"><div><p class="eyebrow">RESUMEN MENSUAL</p><h2>Septiembre 2026</h2></div><button class="filter">Este mes ˅</button></div><strong class="analysis-total">B/. 1,842.70</strong><span class="analysis-change positive">↓ 8.4% vs. agosto</span><div class="analysis-chart"><span style="height:42%"></span><span style="height:57%"></span><span style="height:46%"></span><span style="height:76%"></span><span style="height:61%"></span><span style="height:88%"></span><span class="current" style="height:68%"></span></div><div class="chart-labels"><small>Mar</small><small>Abr</small><small>May</small><small>Jun</small><small>Jul</small><small>Ago</small><small>Sep</small></div></section><section class="panel category-panel"><div class="panel-heading"><h2>Gastos por categoría</h2><button data-action="categories">Ver todos ›</button></div>${categories.map(([name, amount, percent, icon]) => `<div class="category-row"><span class="category-icon">${icon}</span><div class="category-info"><div><b>${name}</b><strong>${amount}</strong></div><div class="progress"><i style="width:${percent}%"></i></div></div></div>`).join('')}</section><section class="panel budget-panel"><div class="panel-heading"><div><p class="eyebrow">CONTROL DE PRESUPUESTO</p><h2>Tu límite mensual</h2></div><button data-action="budget">Editar</button></div><div class="budget-amount"><strong>B/. 1,842.70</strong><small>de B/. 2,500.00</small></div><div class="budget-progress"><i></i></div><small class="budget-note">Te quedan B/. 657.30 para este mes</small></section></section>`;
}

function profileView() { return `<section class="content"><section class="panel profile-panel"><div class="profile"><div class="profile-avatar">PP</div><div><p class="eyebrow">IDENTIDAD VERIFICADA</p><h2>Paul Plata</h2><small>paul.plata@email.com</small></div></div>${[['♙', 'Datos personales'], ['⌾', 'Seguridad y dispositivos'], ['◈', 'Consentimientos y aliados'], ['♧', 'Notificaciones']].map(([icon, label]) => `<button class="profile-row" data-action="profile"><span>${icon}</span><b>${label}</b>›</button>`).join('')}</section></section>`; }

function render() {
	const views = { home: ['Hola, Paul', 'Aquí está el resumen de tus finanzas', homeView], wallet: ['Mi Wallet', 'Tus cuentas, saldos y productos', walletView], 'pase-u': ['Pase U', 'Consulta y administra tus fondos', paseUView], 'youth-funds': ['Fondos Jóvenes', 'Administra fondos mancomunados', youthFundsView], pay: ['Pagar', 'Paga con tu Wallet o tarjeta', payView], receive: ['Recibir dinero', 'Inversiones y activos digitales', receiveView], cards: ['Mis tarjetas', 'Administra tus medios de pago', cardsView], activity: ['Actividad', 'Historial detallado de tus operaciones', activityView], analysis: ['Análisis de gastos', 'Entiende y mejora tus hábitos financieros', analysisView], profile: ['Mi perfil', 'Identidad, seguridad y permisos', profileView] };
	const [title, subtitle, view] = views[state.view];
	app.innerHTML = `<main class="phone"><div class="app-shell">${header(title, subtitle)}${view()}${navigation()}</div></main>`;
	bind();
}

function bind() {
	document.querySelectorAll('[data-view]').forEach((el) => el.addEventListener('click', () => { state.view = el.dataset.view; render(); }));
	document.querySelectorAll('[data-balance]').forEach((el) => el.addEventListener('click', () => { state.balanceVisible = !state.balanceVisible; render(); }));
	document.querySelectorAll('[data-flip]').forEach((el) => el.addEventListener('click', () => el.classList.toggle('flipped')));
	document.querySelectorAll('[data-card]').forEach((el) => el.addEventListener('click', (event) => { event.stopPropagation(); state.selectedCard = el.dataset.card; render(); }));
	document.querySelectorAll('[data-action]').forEach((el) => el.addEventListener('click', () => { const action = el.dataset.action; if (action === 'pay' || action === 'analysis') { state.view = action; state.payMode = null; render(); return; } if (action === 'receive') { state.view = 'receive'; render(); return; } if (action === 'receive-back') { state.view = 'home'; render(); return; } if (action === 'youth-funds') { state.view = 'youth-funds'; state.youthFundsTab = false; render(); return; } if (action === 'pase-u') { state.view = 'pase-u'; render(); return; } if (action === 'wallet-back') { state.view = 'wallet'; render(); return; } if (action === 'funds-back') { state.youthFundsTab = false; render(); return; } if (action === 'manage-fund') { state.view = 'youth-funds'; state.youthFundsTab = true; render(); return; } if (action === 'youth-card-toggle') { state.youthCardBlocked = !state.youthCardBlocked; render(); return; } if (action === 'youth-card-block') { state.youthCardBlocked = true; render(); return; } if (action === 'youth-card-unblock') { state.youthCardBlocked = false; render(); return; } if (action === 'account') { state.view = 'wallet'; state.selectedAccount = el.dataset.account; render(); return; } if (action === 'accounts-back') { state.selectedAccount = null; render(); return; } if (['qr', 'link', 'services', 'pase', 'yappy'].includes(action)) { state.view = 'pay'; state.payMode = action; render(); return; } if (action === 'pay-menu') { state.payMode = null; render(); return; } const labels = { send: 'Flujo de envío iniciado', investments: 'Sección de inversiones abierta', bitcoin: 'Wallet Bitcoin abierta', 'create-fund': 'Nuevo fondo creado', 'transfer-fund': 'Fondos transferidos correctamente', 'pase-recharge': 'Recarga de Pase U iniciada', 'pase-movements': 'Movimientos de Pase U abiertos', bank: 'Transferencia bancaria', more: 'Más servicios', categories: 'Categorías actualizadas', budget: 'Editor de presupuesto abierto', 'qr-start': 'Escáner QR listo', 'link-start': 'Enlace de pago listo', 'services-start': 'Servicios listos para pagar', 'pase-start': 'Pase U listo', 'yappy-start': 'Yappy listo', request: 'Solicitud de tarjeta iniciada', notifications: 'Centro de notificaciones', menu: 'Menú de la aplicación', add: 'Agregar cuenta', profile: 'Perfil' }; notify(labels[action] || 'Acción seleccionada'); }));
}

render();
