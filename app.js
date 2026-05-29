// ============================================================
// APP.JS — CHARLEE TRADE GROUP (CTG)
// Versión completa · Conectado con index.html + styles.css
// Número oficial actualizado: +56 9 6905 7891
// ============================================================

// ============================================================
// 1. NAVBAR — SCROLL + HAMBURGER
// ============================================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10,10,10,0.98)';
    navbar.style.boxShadow = '0 4px 24px rgba(212,175,55,0.1)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.95)';
    navbar.style.boxShadow = 'none';
  }
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

hamburger.addEventListener('click', toggleMobileMenu);

// Cerrar menú móvil al hacer click en enlace
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ============================================================
// 2. IDIOMAS — i18n
// ============================================================

const translations = {
  es: {
    nav_catalog: 'Catálogo',
    nav_categories: 'Categorías',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    hero_badge: 'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline: 'CALIDAD · ESTILO · CONFIANZA',
    hero_desc: 'Ropa Urbana · Zapatillas · Electrónica · Telefonía · Accesorios<br>Despacho a todo Chile por Starken · 24–48 hrs',
    hero_cta: 'Ver Catálogo',
    stat_lines: 'Líneas de Producto',
    stat_shipping: 'Despacho',
    stat_buyers: 'Compradores Online Chile',
    sec_categories: 'CATEGORÍAS',
    cat_ropa_name: 'Ropa Urbana',
    cat_ropa_desc: 'Poleras · Hoodies · Joggers · Gorras',
    cat_zap_name: 'Zapatillas',
    cat_zap_desc: 'Urbanas · Retro · Running · Jordan-style',
    cat_elec_name: 'Electrónica',
    cat_elec_desc: 'Audífonos · AirPods · Smartwatch',
    cat_tel_name: 'Telefonía',
    cat_tel_desc: 'iPhone · Samsung · Xiaomi',
    cat_acc_name: 'Accesorios Tech',
    cat_acc_desc: 'Cases · Cargadores · Cables · Power Banks',
    cat_ninos_name: 'Niños y Bebés',
    cat_ninos_desc: 'Ropa · Sandalias · Pantuflas',
    cat_verano_name: 'Verano',
    cat_verano_desc: 'Ropa ligera · Chalas · Zapatillas verano',
    cat_invierno_name: 'Invierno',
    cat_invierno_desc: 'Pijamas · Pantuflas · Ropa abrigada',
    sec_catalog: 'CATÁLOGO',
    filter_all: 'Todos',
    filter_ropa: '👕 Ropa',
    filter_zap: '👟 Zapatillas',
    filter_elec: '🎧 Electrónica',
    filter_tel: '📲 Telefonía',
    filter_acc: '📱 Accesorios',
    filter_ninos: '👶 Niños',
    filter_verano: '☀️ Verano',
    filter_invierno: '❄️ Invierno',
    btn_add: '+ Agregar al Carro',
    cat_ropa_label: 'ROPA URBANA',
    cat_zap_label: 'ZAPATILLAS',
    cat_elec_label: 'ELECTRÓNICA',
    cat_tel_label: 'TELEFONÍA',
    cat_acc_label: 'ACCESORIOS TECH',
    cat_ninos_label: 'NIÑOS',
    cat_verano_label: 'VERANO',
    cat_invierno_label: 'INVIERNO',
    sec_howto: '¿CÓMO COMPRAR?',
    step1_t: 'Elige tu producto',
    step1_d: 'Navega el catálogo y agrega al carro lo que quieras',
    step2_t: 'Paga fácil y seguro',
    step2_d: 'WhatsApp o transferencia bancaria — tú eliges',
    step3_t: 'Empacamos para ti',
    step3_d: 'Branding CTG dorado en cada pedido',
    step4_t: 'Despacho Starken',
    step4_d: 'A todo Chile en 24–48 horas hábiles con tracking',
    sec_about: 'SOBRE CTG',
    about_p1: 'Charlee Trade Group nació en Santiago de Chile en 2026 con una misión clara: llevar moda urbana, zapatillas, electrónica, telefonía y accesorios tech de calidad directamente a ti, sin los sobrecostos del retail tradicional.',
    about_p2: 'Operamos 100% online, lo que nos permite ofrecerte precios competitivos y entrega rápida a todo Chile.',
    tag_lines: '8 Líneas de Producto',
    tag_ship: 'Despacho Nacional',
    tag_pay: 'Pago Seguro',
    ns_roi: 'ROI proyectado año 1',
    ns_buyers: 'Compradores online Chile',
    ns_time: 'Tiempo de despacho',
    ns_lines: 'Líneas de producto',
    sec_contact: 'CONTÁCTANOS',
    cloc: 'Ubicación',
    cship: 'Despacho',
    cship_val: 'Starken · Todo Chile · 24–48 hrs',
    form_title: 'Envíanos un mensaje',
    form_name: 'Tu nombre',
    form_email: 'Tu email',
    form_help: '¿En qué podemos ayudarte?',
    form_o1: 'Consulta de producto',
    form_o2: 'Estado de mi pedido',
    form_o3: 'Cambios y devoluciones',
    form_o4: 'Otro',
    form_msg: 'Tu mensaje...',
    form_send: 'Enviar Mensaje',
    footer_store: 'TIENDA',
    footer_legal: 'LEGAL',
    footer_follow: 'SÍGUENOS',
    footer_privacy: 'Política de Privacidad',
    footer_returns: 'Política de Cambios',
    footer_terms: 'Términos y Condiciones',
    footer_email: 'Email Corporativo',
    footer_rights: 'Todos los derechos reservados',
    cart_title: 'MI CARRO',
    cart_empty: 'Tu carro está vacío',
    cart_total: 'TOTAL:',
    cart_total_s: 'TOTAL',
    cart_ship: '+ Despacho Starken: $3.500 RM / $5.000 Regiones',
    btn_pay: 'Pagar',
    btn_transfer: '🏦 Transferencia',
    btn_continue: 'Seguir Comprando',
    modal_order: 'RESUMEN DE PEDIDO',
    btn_wa: 'Pagar vía WhatsApp',
    btn_bank: '🏦 Transferencia Bancaria',
    modal_transfer: 'DATOS DE TRANSFERENCIA',
    tr_bank: 'Banco',
    tr_type: 'Tipo de Cuenta',
    tr_name: 'Nombre',
    tr_amount: 'MONTO A TRANSFERIR',
    tr_note: '⚠️ Envía el comprobante por WhatsApp o email para confirmar tu pedido.',
    tr_confirm: 'Ya transferí — Enviar comprobante',
    btn_back: 'Volver',
  },
  en: {
    nav_catalog: 'Catalog',
    nav_categories: 'Categories',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: 'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline: 'QUALITY · STYLE · TRUST',
    hero_desc: 'Urban Clothing · Sneakers · Electronics · Phones · Accessories<br>Delivery all over Chile via Starken · 24–48 hrs',
    hero_cta: 'View Catalog',
    stat_lines: 'Product Lines',
    stat_shipping: 'Shipping',
    stat_buyers: 'Online Buyers Chile',
    sec_categories: 'CATEGORIES',
    cat_ropa_name: 'Urban Clothing',
    cat_ropa_desc: 'T-Shirts · Hoodies · Joggers · Caps',
    cat_zap_name: 'Sneakers',
    cat_zap_desc: 'Urban · Retro · Running · Jordan-style',
    cat_elec_name: 'Electronics',
    cat_elec_desc: 'Headphones · AirPods · Smartwatch',
    cat_tel_name: 'Phones',
    cat_tel_desc: 'iPhone · Samsung · Xiaomi',
    cat_acc_name: 'Tech Accessories',
    cat_acc_desc: 'Cases · Chargers · Cables · Power Banks',
    cat_ninos_name: 'Kids & Babies',
    cat_ninos_desc: 'Clothing · Sandals · Slippers',
    cat_verano_name: 'Summer',
    cat_verano_desc: 'Light clothing · Sandals · Summer sneakers',
    cat_invierno_name: 'Winter',
    cat_invierno_desc: 'Pajamas · Slippers · Warm clothing',
    sec_catalog: 'CATALOG',
    filter_all: 'All',
    filter_ropa: '👕 Clothing',
    filter_zap: '👟 Sneakers',
    filter_elec: '🎧 Electronics',
    filter_tel: '📲 Phones',
    filter_acc: '📱 Accessories',
    filter_ninos: '👶 Kids',
    filter_verano: '☀️ Summer',
    filter_invierno: '❄️ Winter',
    btn_add: '+ Add to Cart',
    cat_ropa_label: 'URBAN CLOTHING',
    cat_zap_label: 'SNEAKERS',
    cat_elec_label: 'ELECTRONICS',
    cat_tel_label: 'PHONES',
    cat_acc_label: 'TECH ACCESSORIES',
    cat_ninos_label: 'KIDS',
    cat_verano_label: 'SUMMER',
    cat_invierno_label: 'WINTER',
    sec_howto: 'HOW TO BUY?',
    step1_t: 'Choose your product',
    step1_d: 'Browse the catalog and add items to your cart',
    step2_t: 'Pay easy & secure',
    step2_d: 'WhatsApp or bank transfer — you choose',
    step3_t: 'We pack for you',
    step3_d: 'CTG gold branding on every order',
    step4_t: 'Starken Delivery',
    step4_d: 'All over Chile in 24–48 business hours with tracking',
    sec_about: 'ABOUT CTG',
    about_p1: 'Charlee Trade Group was born in Santiago, Chile in 2026 with a clear mission: to bring quality urban fashion, sneakers, electronics, phones and tech accessories directly to you, without the extra costs of traditional retail.',
    about_p2: 'We operate 100% online, allowing us to offer competitive prices and fast delivery throughout Chile.',
    tag_lines: '8 Product Lines',
    tag_ship: 'National Shipping',
    tag_pay: 'Secure Payment',
    ns_roi: 'Projected ROI year 1',
    ns_buyers: 'Online buyers Chile',
    ns_time: 'Shipping time',
    ns_lines: 'Product lines',
    sec_contact: 'CONTACT US',
    cloc: 'Location',
    cship: 'Shipping',
    cship_val: 'Starken · All Chile · 24–48 hrs',
    form_title: 'Send us a message',
    form_name: 'Your name',
    form_email: 'Your email',
    form_help: 'How can we help you?',
    form_o1: 'Product inquiry',
    form_o2: 'Order status',
    form_o3: 'Returns & exchanges',
    form_o4: 'Other',
    form_msg: 'Your message...',
    form_send: 'Send Message',
    footer_store: 'STORE',
    footer_legal: 'LEGAL',
    footer_follow: 'FOLLOW US',
    footer_privacy: 'Privacy Policy',
    footer_returns: 'Return Policy',
    footer_terms: 'Terms & Conditions',
    footer_email: 'Corporate Email',
    footer_rights: 'All rights reserved',
    cart_title: 'MY CART',
    cart_empty: 'Your cart is empty',
    cart_total: 'TOTAL:',
    cart_total_s: 'TOTAL',
    cart_ship: '+ Starken Shipping: $3,500 RM / $5,000 Regions',
    btn_pay: 'Pay',
    btn_transfer: '🏦 Bank Transfer',
    btn_continue: 'Keep Shopping',
    modal_order: 'ORDER SUMMARY',
    btn_wa: 'Pay via WhatsApp',
    btn_bank: '🏦 Bank Transfer',
    modal_transfer: 'TRANSFER DETAILS',
    tr_bank: 'Bank',
    tr_type: 'Account Type',
    tr_name: 'Name',
    tr_amount: 'AMOUNT TO TRANSFER',
    tr_note: '⚠️ Send the receipt via WhatsApp or email to confirm your order.',
    tr_confirm: 'I already transferred — Send receipt',
    btn_back: 'Back',
  },
  pt: {
    nav_catalog: 'Catálogo',
    nav_categories: 'Categorias',
    nav_about: 'Sobre nós',
    nav_contact: 'Contato',
    hero_badge: 'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline: 'QUALIDADE · ESTILO · CONFIANÇA',
    hero_desc: 'Roupa Urbana · Tênis · Eletrônicos · Telefonia · Acessórios<br>Entrega em todo o Chile pela Starken · 24–48 hrs',
    hero_cta: 'Ver Catálogo',
    stat_lines: 'Linhas de Produto',
    stat_shipping: 'Entrega',
    stat_buyers: 'Compradores Online Chile',
    sec_categories: 'CATEGORIAS',
    cat_ropa_name: 'Roupa Urbana',
    cat_ropa_desc: 'Camisetas · Hoodies · Joggers · Bonés',
    cat_zap_name: 'Tênis',
    cat_zap_desc: 'Urbano · Retrô · Running · Jordan-style',
    cat_elec_name: 'Eletrônicos',
    cat_elec_desc: 'Fones · AirPods · Smartwatch',
    cat_tel_name: 'Telefonia',
    cat_tel_desc: 'iPhone · Samsung · Xiaomi',
    cat_acc_name: 'Acessórios Tech',
    cat_acc_desc: 'Cases · Carregadores · Cabos · Power Banks',
    cat_ninos_name: 'Crianças e Bebês',
    cat_ninos_desc: 'Roupas · Sandálias · Pantufas',
    cat_verano_name: 'Verão',
    cat_verano_desc: 'Roupas leves · Sandálias · Tênis verão',
    cat_invierno_name: 'Inverno',
    cat_invierno_desc: 'Pijamas · Pantufas · Roupas quentes',
    sec_catalog: 'CATÁLOGO',
    filter_all: 'Todos',
    filter_ropa: '👕 Roupas',
    filter_zap: '👟 Tênis',
    filter_elec: '🎧 Eletrônicos',
    filter_tel: '📲 Telefonia',
    filter_acc: '📱 Acessórios',
    filter_ninos: '👶 Crianças',
    filter_verano: '☀️ Verão',
    filter_invierno: '❄️ Inverno',
    btn_add: '+ Adicionar ao Carrinho',
    cat_ropa_label: 'ROUPA URBANA',
    cat_zap_label: 'TÊNIS',
    cat_elec_label: 'ELETRÔNICOS',
    cat_tel_label: 'TELEFONIA',
    cat_acc_label: 'ACESSÓRIOS TECH',
    cat_ninos_label: 'CRIANÇAS',
    cat_verano_label: 'VERÃO',
    cat_invierno_label: 'INVERNO',
    sec_howto: 'COMO COMPRAR?',
    step1_t: 'Escolha seu produto',
    step1_d: 'Navegue pelo catálogo e adicione ao carrinho',
    step2_t: 'Pague fácil e seguro',
    step2_d: 'WhatsApp ou transferência bancária — você escolhe',
    step3_t: 'Embalamos para você',
    step3_d: 'Branding CTG dourado em cada pedido',
    step4_t: 'Entrega Starken',
    step4_d: 'Em todo o Chile em 24–48 horas úteis com rastreamento',
    sec_about: 'SOBRE CTG',
    about_p1: 'Charlee Trade Group nasceu em Santiago do Chile em 2026 com uma missão clara: levar moda urbana, tênis, eletrônicos, telefonia e acessórios tech de qualidade diretamente para você.',
    about_p2: 'Operamos 100% online, o que nos permite oferecer preços competitivos e entrega rápida em todo o Chile.',
    tag_lines: '8 Linhas de Produto',
    tag_ship: 'Entrega Nacional',
    tag_pay: 'Pagamento Seguro',
    ns_roi: 'ROI projetado ano 1',
    ns_buyers: 'Compradores online Chile',
    ns_time: 'Tempo de entrega',
    ns_lines: 'Linhas de produto',
    sec_contact: 'CONTATE-NOS',
    cloc: 'Localização',
    cship: 'Entrega',
    cship_val: 'Starken · Todo Chile · 24–48 hrs',
    form_title: 'Envie uma mensagem',
    form_name: 'Seu nome',
    form_email: 'Seu email',
    form_help: 'Como podemos ajudar?',
    form_o1: 'Consulta de produto',
    form_o2: 'Status do pedido',
    form_o3: 'Trocas e devoluções',
    form_o4: 'Outro',
    form_msg: 'Sua mensagem...',
    form_send: 'Enviar Mensagem',
    footer_store: 'LOJA',
    footer_legal: 'LEGAL',
    footer_follow: 'SIGA-NOS',
    footer_privacy: 'Política de Privacidade',
    footer_returns: 'Política de Trocas',
    footer_terms: 'Termos e Condições',
    footer_email: 'Email Corporativo',
    footer_rights: 'Todos os direitos reservados',
    cart_title: 'MEU CARRINHO',
    cart_empty: 'Seu carrinho está vazio',
    cart_total: 'TOTAL:',
    cart_total_s: 'TOTAL',
    cart_ship: '+ Entrega Starken: $3.500 RM / $5.000 Regiões',
    btn_pay: 'Pagar',
    btn_transfer: '🏦 Transferência',
    btn_continue: 'Continuar Comprando',
    modal_order: 'RESUMO DO PEDIDO',
    btn_wa: 'Pagar via WhatsApp',
    btn_bank: '🏦 Transferência Bancária',
    modal_transfer: 'DADOS DA TRANSFERÊNCIA',
    tr_bank: 'Banco',
    tr_type: 'Tipo de Conta',
    tr_name: 'Nome',
    tr_amount: 'VALOR A TRANSFERIR',
    tr_note: '⚠️ Envie o comprovante via WhatsApp ou email para confirmar seu pedido.',
    tr_confirm: 'Já transferi — Enviar comprovante',
    btn_back: 'Voltar',
  },
  fr: {
    nav_catalog: 'Catalogue',
    nav_categories: 'Catégories',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    hero_badge: 'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline: 'QUALITÉ · STYLE · CONFIANCE',
    hero_desc: 'Mode Urbaine · Baskets · Électronique · Téléphonie · Accessoires<br>Livraison partout au Chili via Starken · 24–48 hrs',
    hero_cta: 'Voir le Catalogue',
    stat_lines: 'Lignes de Produit',
    stat_shipping: 'Livraison',
    stat_buyers: 'Acheteurs en ligne Chili',
    sec_categories: 'CATÉGORIES',
    cat_ropa_name: 'Mode Urbaine',
    cat_ropa_desc: 'T-Shirts · Hoodies · Joggers · Casquettes',
    cat_zap_name: 'Baskets',
    cat_zap_desc: 'Urbain · Rétro · Running · Jordan-style',
    cat_elec_name: 'Électronique',
    cat_elec_desc: 'Casques · AirPods · Smartwatch',
    cat_tel_name: 'Téléphonie',
    cat_tel_desc: 'iPhone · Samsung · Xiaomi',
    cat_acc_name: 'Accessoires Tech',
    cat_acc_desc: 'Coques · Chargeurs · Câbles · Power Banks',
    cat_ninos_name: 'Enfants & Bébés',
    cat_ninos_desc: 'Vêtements · Sandales · Chaussons',
    cat_verano_name: 'Été',
    cat_verano_desc: 'Vêtements légers · Sandales · Baskets été',
    cat_invierno_name: 'Hiver',
    cat_invierno_desc: 'Pyjamas · Chaussons · Vêtements chauds',
    sec_catalog: 'CATALOGUE',
    filter_all: 'Tous',
    filter_ropa: '👕 Vêtements',
    filter_zap: '👟 Baskets',
    filter_elec: '🎧 Électronique',
    filter_tel: '📲 Téléphonie',
    filter_acc: '📱 Accessoires',
    filter_ninos: '👶 Enfants',
    filter_verano: '☀️ Été',
    filter_invierno: '❄️ Hiver',
    btn_add: '+ Ajouter au Panier',
    cat_ropa_label: 'MODE URBAINE',
    cat_zap_label: 'BASKETS',
    cat_elec_label: 'ÉLECTRONIQUE',
    cat_tel_label: 'TÉLÉPHONIE',
    cat_acc_label: 'ACCESSOIRES TECH',
    cat_ninos_label: 'ENFANTS',
    cat_verano_label: 'ÉTÉ',
    cat_invierno_label: 'HIVER',
    sec_howto: 'COMMENT ACHETER ?',
    step1_t: 'Choisissez votre produit',
    step1_d: 'Parcourez le catalogue et ajoutez au panier',
    step2_t: 'Payez facilement',
    step2_d: 'WhatsApp ou virement bancaire — vous choisissez',
    step3_t: 'On emballe pour vous',
    step3_d: 'Emballage CTG doré sur chaque commande',
    step4_t: 'Livraison Starken',
    step4_d: 'Partout au Chili en 24–48 heures ouvrables avec suivi',
    sec_about: 'À PROPOS DE CTG',
    about_p1: 'Charlee Trade Group est né à Santiago du Chili en 2026 avec une mission claire : vous apporter mode urbaine, baskets, électronique et accessoires tech de qualité directement chez vous.',
    about_p2: 'Nous opérons 100% en ligne, ce qui nous permet de vous offrir des prix compétitifs et une livraison rapide dans tout le Chili.',
    tag_lines: '8 Lignes de Produit',
    tag_ship: 'Livraison Nationale',
    tag_pay: 'Paiement Sécurisé',
    ns_roi: 'ROI projeté an 1',
    ns_buyers: 'Acheteurs en ligne Chili',
    ns_time: 'Délai de livraison',
    ns_lines: 'Lignes de produit',
    sec_contact: 'CONTACTEZ-NOUS',
    cloc: 'Localisation',
    cship: 'Livraison',
    cship_val: 'Starken · Tout le Chili · 24–48 hrs',
    form_title: 'Envoyez-nous un message',
    form_name: 'Votre nom',
    form_email: 'Votre email',
    form_help: 'Comment pouvons-nous vous aider ?',
    form_o1: 'Demande produit',
    form_o2: 'Statut de commande',
    form_o3: 'Échanges et retours',
    form_o4: 'Autre',
    form_msg: 'Votre message...',
    form_send: 'Envoyer le Message',
    footer_store: 'BOUTIQUE',
    footer_legal: 'LÉGAL',
    footer_follow: 'SUIVEZ-NOUS',
    footer_privacy: 'Politique de Confidentialité',
    footer_returns: 'Politique de Retour',
    footer_terms: 'Conditions Générales',
    footer_email: 'Email Corporatif',
    footer_rights: 'Tous droits réservés',
    cart_title: 'MON PANIER',
    cart_empty: 'Votre panier est vide',
    cart_total: 'TOTAL :',
    cart_total_s: 'TOTAL',
    cart_ship: '+ Livraison Starken : $3.500 RM / $5.000 Régions',
    btn_pay: 'Payer',
    btn_transfer: '🏦 Virement',
    btn_continue: 'Continuer les achats',
    modal_order: 'RÉSUMÉ DE COMMANDE',
    btn_wa: 'Payer via WhatsApp',
    btn_bank: '🏦 Virement Bancaire',
    modal_transfer: 'DONNÉES DE VIREMENT',
    tr_bank: 'Banque',
    tr_type: 'Type de Compte',
    tr_name: 'Nom',
    tr_amount: 'MONTANT À VIRER',
    tr_note: '⚠️ Envoyez le reçu via WhatsApp ou email pour confirmer votre commande.',
    tr_confirm: 'J\'ai déjà viré — Envoyer le reçu',
    btn_back: 'Retour',
  },
  ht: {
    nav_catalog: 'Katalòg',
    nav_categories: 'Kategori',
    nav_about: 'Sou nou',
    nav_contact: 'Kontakte',
    hero_badge: 'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline: 'KALITE · ESTIL · KONFYANS',
    hero_desc: 'Rad Iben · Soulye · Elektwonik · Telefòn · Akseswa<br>Livrezon nan tout Chili pa Starken · 24–48 hrs',
    hero_cta: 'Wè Katalòg',
    stat_lines: 'Liy Pwodui',
    stat_shipping: 'Livrezon',
    stat_buyers: 'Aketè Anliy Chili',
    sec_categories: 'KATEGORI',
    cat_ropa_name: 'Rad Iben',
    cat_ropa_desc: 'Chemiz · Hoodies · Joggers · Kap',
    cat_zap_name: 'Soulye',
    cat_zap_desc: 'Iben · Retwo · Running · Jordan-style',
    cat_elec_name: 'Elektwonik',
    cat_elec_desc: 'Ekoutè · AirPods · Smartwatch',
    cat_tel_name: 'Telefòn',
    cat_tel_desc: 'iPhone · Samsung · Xiaomi',
    cat_acc_name: 'Akseswa Tech',
    cat_acc_desc: 'Cases · Chajè · Kab · Power Banks',
    cat_ninos_name: 'Timoun ak Bebe',
    cat_ninos_desc: 'Rad · Sandal · Pantouf',
    cat_verano_name: 'Ete',
    cat_verano_desc: 'Rad lejè · Sandal · Soulye ete',
    cat_invierno_name: 'Ivè',
    cat_invierno_desc: 'Pijama · Pantouf · Rad cho',
    sec_catalog: 'KATALÒG',
    filter_all: 'Tout',
    filter_ropa: '👕 Rad',
    filter_zap: '👟 Soulye',
    filter_elec: '🎧 Elektwonik',
    filter_tel: '📲 Telefòn',
    filter_acc: '📱 Akseswa',
    filter_ninos: '👶 Timoun',
    filter_verano: '☀️ Ete',
    filter_invierno: '❄️ Ivè',
    btn_add: '+ Ajoute nan Panye',
    cat_ropa_label: 'RAD IBEN',
    cat_zap_label: 'SOULYE',
    cat_elec_label: 'ELEKTWONIK',
    cat_tel_label: 'TELEFÒN',
    cat_acc_label: 'AKSESWA TECH',
    cat_ninos_label: 'TIMOUN',
    cat_verano_label: 'ETE',
    cat_invierno_label: 'IVÈ',
    sec_howto: 'KIJAN POU ACHTE?',
    step1_t: 'Chwazi pwodui ou',
    step1_d: 'Navige katalòg la epi ajoute nan panye',
    step2_t: 'Peye fasil ak an sekirite',
    step2_d: 'WhatsApp oswa transfè bank — ou chwazi',
    step3_t: 'Nou pakè pou ou',
    step3_d: 'Anbalaj CTG dore sou chak kòmand',
    step4_t: 'Livrezon Starken',
    step4_d: 'Nan tout Chili nan 24–48 zè travay ak swivi',
    sec_about: 'SOU CTG',
    about_p1: 'Charlee Trade Group te fèt nan Santiago, Chili an 2026 ak yon misyon klè: pote mòd iben, soulye, elektwonik ak akseswa tech kalite dirèkteman ba ou.',
    about_p2: 'Nou opere 100% anliy, sa ki pèmèt nou ofri ou pri konpetitif ak livrezon rapid nan tout Chili.',
    tag_lines: '8 Liy Pwodui',
    tag_ship: 'Livrezon Nasyonal',
    tag_pay: 'Peman Sekirize',
    ns_roi: 'ROI pwojete ane 1',
    ns_buyers: 'Aketè anliy Chili',
    ns_time: 'Tan livrezon',
    ns_lines: 'Liy pwodui',
    sec_contact: 'KONTAKTE NOU',
    cloc: 'Kote',
    cship: 'Livrezon',
    cship_val: 'Starken · Tout Chili · 24–48 hrs',
    form_title: 'Voye nou yon mesaj',
    form_name: 'Non ou',
    form_email: 'Imèl ou',
    form_help: 'Kijan nou ka ede ou?',
    form_o1: 'Demann pwodui',
    form_o2: 'Sitiyasyon kòmand',
    form_o3: 'Chanjman ak retounen',
    form_o4: 'Lòt',
    form_msg: 'Mesaj ou...',
    form_send: 'Voye Mesaj',
    footer_store: 'BOUTIK',
    footer_legal: 'LEGAL',
    footer_follow: 'SWIV NOU',
    footer_privacy: 'Politik Konfidansyalite',
    footer_returns: 'Politik Retounen',
    footer_terms: 'Tèm ak Kondisyon',
    footer_email: 'Imèl Korporatif',
    footer_rights: 'Tout dwa rezève',
    cart_title: 'PANYE MWEN',
    cart_empty: 'Panye ou vid',
    cart_total: 'TOTAL:',
    cart_total_s: 'TOTAL',
    cart_ship: '+ Livrezon Starken: $3.500 RM / $5.000 Rejyon',
    btn_pay: 'Peye',
    btn_transfer: '🏦 Transfè',
    btn_continue: 'Kontinye Achte',
    modal_order: 'REZIME KÒMAND',
    btn_wa: 'Peye via WhatsApp',
    btn_bank: '🏦 Transfè Bank',
    modal_transfer: 'DONE TRANSFÈ',
    tr_bank: 'Bank',
    tr_type: 'Tip Kont',
    tr_name: 'Non',
    tr_amount: 'MONTAN POU TRANSFERE',
    tr_note: '⚠️ Voye resi a via WhatsApp oswa imèl pou konfime kòmand ou.',
    tr_confirm: 'Mwen deja transfere — Voye resi',
    btn_back: 'Tounen',
  }
};

let currentLang = 'es';

function switchLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Textos data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholders data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Actualizar botón del idioma
  const flags = { es: '🇨🇱', en: '🇺🇸', pt: '🇧🇷', fr: '🇫🇷', ht: '🇭🇹' };
  const codes = { es: 'ES', en: 'EN', pt: 'PT', fr: 'FR', ht: 'HT' };
  document.getElementById('langBtn').innerHTML =
    `${flags[lang]} ${codes[lang]} <span class="lang-arrow">▾</span>`;

  closeLangMenu();
}

function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  const currMenu = document.getElementById('currMenu');
  currMenu.classList.remove('open');
  menu.classList.toggle('open');
}

function closeLangMenu() {
  document.getElementById('langMenu').classList.remove('open');
}

// ============================================================
// 3. MONEDAS
// ============================================================

const exchangeRates = {
  CLP: 1,
  USD: 0.00105,
  EUR: 0.00097,
  BRL: 0.0053,
  ARS: 0.92
};

const currencySymbols = {
  CLP: '$',
  USD: 'US$',
  EUR: '€',
  BRL: 'R$',
  ARS: '$'
};

const currencyLabels = {
  CLP: '🇨🇱 CLP',
  USD: '🇺🇸 USD',
  EUR: '🇪🇺 EUR',
  BRL: '🇧🇷 BRL',
  ARS: '🇦🇷 ARS'
};

let currentCurrency = 'CLP';

function switchCurrency(currency) {
  currentCurrency = currency;
  const rate = exchangeRates[currency];
  const symbol = currencySymbols[currency];

  // Actualizar precios en cards
  document.querySelectorAll('[data-price-clp]').forEach(el => {
    const clp = parseInt(el.getAttribute('data-price-clp'));
    const converted = clp * rate;
    if (currency === 'CLP') {
      el.textContent = `$${clp.toLocaleString('es-CL')}`;
    } else {
      el.textContent = `${symbol}${converted.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
  });

  // Nota de referencia
  const note = document.getElementById('currencyNote');
  if (currency !== 'CLP') {
    note.style.display = 'block';
  } else {
    note.style.display = 'none';
  }

  // Actualizar botón moneda
  document.getElementById('currBtn').innerHTML =
    `${currencyLabels[currency]} <span class="lang-arrow">▾</span>`;

  // Actualizar total del carro
  renderCartTotal();
  closeCurrMenu();
}

function toggleCurrMenu() {
  const menu = document.getElementById('currMenu');
  const langMenu = document.getElementById('langMenu');
  langMenu.classList.remove('open');
  menu.classList.toggle('open');
}

function closeCurrMenu() {
  document.getElementById('currMenu').classList.remove('open');
}

// Cerrar menús al click fuera
document.addEventListener('click', (e) => {
  const langSwitcher = document.getElementById('langSwitcher');
  const currSwitcher = document.getElementById('currSwitcher');
  if (!langSwitcher.contains(e.target)) {
    document.getElementById('langMenu').classList.remove('open');
  }
  if (!currSwitcher.contains(e.target)) {
    document.getElementById('currMenu').classList.remove('open');
  }
});

// ============================================================
// 4. CARRITO DE COMPRAS
// ============================================================

let cart = [];

const catEmojis = {
  ropa: '👕', zapatillas: '👟', electronica: '🎧',
  telefonia: '📲', accesorios: '🛡️',
  ninos: '👶', verano: '☀️', invierno: '❄️'
};

function addToCart(name, priceCLP, cat) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, priceCLP, cat, qty: 1 });
  }
  updateCartUI();
  showToast(`✅ ${name} agregado al carro`);

  // Abrir carro brevemente si está cerrado
  if (!document.getElementById('cartPanel').classList.contains('open')) {
    openCart();
    setTimeout(() => {
      // Solo cerramos si el usuario no interactuó
    }, 800);
  }
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.priceCLP * i.qty, 0);
}

function formatPrice(clp) {
  const rate = exchangeRates[currentCurrency];
  const symbol = currencySymbols[currentCurrency];
  const converted = clp * rate;
  if (currentCurrency === 'CLP') {
    return `$${clp.toLocaleString('es-CL')}`;
  }
  return `${symbol}${converted.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function renderCartTotal() {
  const total = getCartTotal();
  const el = document.getElementById('cartTotal');
  if (el) el.textContent = formatPrice(total);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsContainer = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    emptyEl.style.display = 'block';
    footerEl.style.display = 'none';
    itemsContainer.innerHTML = '';
    itemsContainer.appendChild(emptyEl);
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  // Renderizar items
  itemsContainer.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-emoji">${catEmojis[item.cat] || '🛍️'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.priceCLP)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.name}')">🗑️</button>
    `;
    itemsContainer.appendChild(div);
  });

  renderCartTotal();
}

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartPanel() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  if (panel.classList.contains('open')) {
    closeCartPanel();
  } else {
    openCart();
  }
}

document.getElementById('cartBtn').addEventListener('click', toggleCart);

// ============================================================
// 5. CHECKOUT — MODAL RESUMEN
// ============================================================

function checkout() {
  if (cart.length === 0) {
    showToast('🛒 Tu carro está vacío');
    return;
  }
  closeCartPanel();
  openCheckoutModal();
}

function checkoutTransfer() {
  if (cart.length === 0) {
    showToast('🛒 Tu carro está vacío');
    return;
  }
  closeCartPanel();
  openTransferModal();
}

function openCheckoutModal() {
  const itemsEl = document.getElementById('checkoutModalItems');
  itemsEl.innerHTML = '';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'checkout-modal-item';
    div.innerHTML = `
      <div class="co-item-left">
        <span class="co-item-emoji">${catEmojis[item.cat] || '🛍️'}</span>
        <div>
          <div class="co-item-name">${item.name}</div>
          <div class="co-item-qty">x${item.qty}</div>
        </div>
      </div>
      <div class="co-item-price">${formatPrice(item.priceCLP * item.qty)}</div>
    `;
    itemsEl.appendChild(div);
  });

  document.getElementById('checkoutModalTotal').textContent = formatPrice(getCartTotal());

  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 6. PAGO POR WHATSAPP
// ============================================================

function payWithWhatsApp() {
  if (cart.length === 0) return;

  // NÚMERO OFICIAL ACTUALIZADO: +56 9 6905 7891
  const phone = '56969057891';

  let msg = '🛍️ *PEDIDO CTG — Charlee Trade Group*\n\n';
  cart.forEach(item => {
    msg += `▸ ${item.name} × ${item.qty} = ${formatPrice(item.priceCLP * item.qty)}\n`;
  });
  msg += `\n💰 *TOTAL: ${formatPrice(getCartTotal())}*\n`;
  msg += `\n📦 Despacho Starken — Adjunta tu dirección de envío.\n`;
  msg += `\n✅ ¡Hola CTG! Quiero realizar este pedido.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeCheckout();
}

// ============================================================
// 7. MODAL DE TRANSFERENCIA
// ============================================================

function openTransferModal() {
  document.getElementById('transferTotal').textContent = formatPrice(getCartTotal());
  document.getElementById('transferOverlay').classList.add('open');
  document.getElementById('transferModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Cerrar checkout si está abierto
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('checkoutModal').classList.remove('open');
}

function closeTransferModal() {
  document.getElementById('transferOverlay').classList.remove('open');
  document.getElementById('transferModal').classList.remove('open');
  document.body.style.overflow = '';
}

function sendTransferConfirmWA() {
  // NÚMERO OFICIAL ACTUALIZADO: +56 9 6905 7891
  const phone = '56969057891';

  let msg = '🏦 *COMPROBANTE DE TRANSFERENCIA — CTG*\n\n';
  cart.forEach(item => {
    msg += `▸ ${item.name} × ${item.qty} = ${formatPrice(item.priceCLP * item.qty)}\n`;
  });
  msg += `\n💰 *TOTAL TRANSFERIDO: ${formatPrice(getCartTotal())}*\n`;
  msg += `\n📎 Adjunto el comprobante de transferencia.\n`;
  msg += `\n📦 Mi dirección de envío: `;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeTransferModal();
}

// ============================================================
// 8. FILTRO DE CATEGORÍAS
// ============================================================

function filterCategory(cat) {
  const cards = document.querySelectorAll('.producto-card');
  const btns = document.querySelectorAll('.filtro-btn');

  // Actualizar botones activos
  btns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-cat') === cat) {
      btn.classList.add('active');
    }
  });

  // Mostrar/ocultar cards
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (cat === 'todos' || cardCat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Scroll al catálogo
  const catalogoSection = document.getElementById('catalogo');
  if (catalogoSection) {
    catalogoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============================================================
// 9. FORMULARIO DE CONTACTO
// ============================================================

function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById('contactoForm');
  const inputs = form.querySelectorAll('input, textarea');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const msg = inputs[3] ? inputs[3].value.trim() : '';

  if (!name || !email) {
    showToast('⚠️ Por favor completa todos los campos');
    return;
  }

  // NÚMERO OFICIAL ACTUALIZADO: +56 9 6905 7891
  const phone = '56969057891';
  const waMsg = `📩 *MENSAJE WEB — CTG*\n\n👤 Nombre: ${name}\n📧 Email: ${email}\n\n💬 Mensaje:\n${msg}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(waMsg)}`;
  window.open(url, '_blank');

  showToast('✅ Mensaje enviado correctamente');
  form.reset();
}

// ============================================================
// 10. MODALES LEGALES
// ============================================================

const legalContent = {
  privacy: {
    title: '🔒 Política de Privacidad',
    body: `
      <strong>Charlee Trade Group — Política de Privacidad</strong><br><br>
      En CTG, la privacidad de nuestros clientes es fundamental.<br><br>
      <strong>1. Datos que recopilamos</strong><br>
      Nombre, email y número de teléfono cuando nos contactas o realizas un pedido.<br><br>
      <strong>2. Uso de los datos</strong><br>
      Usamos tu información únicamente para procesar pedidos, coordinar despachos y brindarte atención al cliente.<br><br>
      <strong>3. Protección de datos</strong><br>
      No vendemos ni compartimos tus datos personales con terceros.<br><br>
      <strong>4. WhatsApp y comunicación</strong><br>
      Al contactarnos, aceptas recibir mensajes relacionados con tu pedido por WhatsApp o email.<br><br>
      <strong>5. Contacto</strong><br>
      Para consultas sobre privacidad escríbenos a: charleetradegroup@gmail.com<br><br>
      <em>Última actualización: 2026 — Santiago, Chile.</em>
    `
  },
  returns: {
    title: '🔄 Política de Cambios y Devoluciones',
    body: `
      <strong>Charlee Trade Group — Política de Cambios</strong><br><br>
      <strong>Plazo para cambios</strong><br>
      Tienes hasta 7 días corridos desde la recepción del producto para solicitar un cambio.<br><br>
      <strong>Condiciones</strong><br>
      ▸ El producto debe estar sin uso y en su embalaje original.<br>
      ▸ Debe presentar el comprobante de compra.<br>
      ▸ No aplica para productos de higiene personal o electrónica con embalaje abierto.<br><br>
      <strong>Procedimiento</strong><br>
      Contáctanos por WhatsApp al +56 9 6905 7891 o por email a charleetradegroup@gmail.com indicando:<br>
      ▸ Número de pedido<br>
      ▸ Producto a cambiar<br>
      ▸ Motivo del cambio<br><br>
      <strong>Costo de envío</strong><br>
      El costo de reenvío por cambio es responsabilidad del cliente, salvo que el producto llegue defectuoso.<br><br>
      <em>Última actualización: 2026 — Santiago, Chile.</em>
    `
  },
  terms: {
    title: '📋 Términos y Condiciones',
    body: `
      <strong>Charlee Trade Group — Términos y Condiciones</strong><br><br>
      <strong>1. Sobre CTG</strong><br>
      Charlee Trade Group es una tienda online de moda urbana, zapatillas, electrónica y accesorios, operada desde Santiago, Chile.<br><br>
      <strong>2. Precios</strong><br>
      Todos los precios están expresados en Pesos Chilenos (CLP). Los precios en otras monedas son referenciales.<br><br>
      <strong>3. Medios de pago</strong><br>
      Aceptamos transferencia bancaria y coordinación de pago vía WhatsApp.<br><br>
      <strong>4. Despacho</strong><br>
      Despachamos por Starken a todo Chile. El tiempo estimado es de 24–48 horas hábiles desde confirmación de pago.<br>
      ▸ Región Metropolitana: $3.500<br>
      ▸ Regiones: $5.000<br><br>
      <strong>5. Disponibilidad</strong><br>
      El stock puede variar. En caso de no disponibilidad, te avisaremos de inmediato.<br><br>
      <strong>6. Responsabilidad</strong><br>
      CTG no se responsabiliza por demoras causadas por Starken u otras circunstancias ajenas a nuestra operación.<br><br>
      <strong>7. Contacto</strong><br>
      WhatsApp: +56 9 6905 7891<br>
      Email: charleetradegroup@gmail.com<br><br>
      <em>Última actualización: 2026 — Santiago, Chile.</em>
    `
  }
};

function openLegal(type) {
  const content = legalContent[type];
  if (!content) return;
  document.getElementById('legalTitle').textContent = content.title;
  document.getElementById('legalBody').innerHTML = content.body;
  document.getElementById('legalOverlay').classList.add('open');
  document.getElementById('legalModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  document.getElementById('legalOverlay').classList.remove('open');
  document.getElementById('legalModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 11. TOAST — NOTIFICACIONES
// ============================================================

function showToast(msg, duration = 2800) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================================
// 12. CERRAR MODALES CON TECLA ESC
// ============================================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCartPanel();
    closeCheckout();
    closeTransferModal();
    closeLegal();
    closeLangMenu();
    closeCurrMenu();
  }
});

// ============================================================
// 13. ANIMACIONES DE SCROLL (Intersection Observer)
// ============================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.producto-card, .cat-card, .step, .ns-stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ============================================================
// 14. BOTÓN CART — INICIALIZAR UI
// ============================================================

updateCartUI();

// ============================================================
// FIN DE APP.JS — CHARLEE TRADE GROUP © 2026
// ============================================================
