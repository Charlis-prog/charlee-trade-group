const WA_NUMBER = '56996905789';
let cart = JSON.parse(localStorage.getItem('ctg_cart') || '[]');
let currentLang = localStorage.getItem('ctg_lang') || 'es';
let currentCurrency = localStorage.getItem('ctg_currency') || 'CLP';

const EMOJIS = { 
  ropa:'👕', zapatillas:'👟', electronica:'🎧', 
  telefonia:'📲', accesorios:'📱',
  ninos:'👶', verano:'☀️', invierno:'❄️'
};

const RATES    = { CLP:1, USD:0.00109, EUR:0.00098, BRL:0.00556, ARS:1.05 };
const SYMBOLS  = { CLP:'$', USD:'US$', EUR:'€', BRL:'R$', ARS:'AR$' };
const DECIMALS = { CLP:0, USD:2, EUR:2, BRL:2, ARS:0 };

// ─── GOOGLE SHEETS ────────────────────────────────────────────────────────────
const SHEETS_URL = 'PEGA_TU_URL_APPS_SCRIPT_AQUI';

function saveToSheet(tipo, detalle) {
  if (!SHEETS_URL || SHEETS_URL.includes('PEGA')) return;
  const productos = cart.map(i => i.cantidad + 'x ' + i.nombre).join(', ');
  const total = cart.reduce((s, i) => s + i.precio * i.cantidad, 0);
  fetch(SHEETS_URL, {
    method: 'POST',
    body: JSON.stringify({ cliente: tipo, whatsapp: detalle, productos, total }),
    headers: { 'Content-Type': 'text/plain' }
  }).catch(() => {});
}
// ─────────────────────────────────────────────────────────────────────────────

const T = {
  es:{
    flag:'🇨🇱', code:'ES',
    nav_catalog:'Catálogo', nav_categories:'Categorías', nav_about:'Nosotros', nav_contact:'Contacto',
    hero_badge:'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline:'CALIDAD · ESTILO · CONFIANZA',
    hero_desc:'Ropa Urbana · Zapatillas · Electrónica · Telefonía · Accesorios<br>Despacho a todo Chile por Starken · 24–48 hrs',
    hero_cta:'Ver Catálogo',
    stat_lines:'Líneas de Producto', stat_shipping:'Despacho', stat_buyers:'Compradores Online Chile',
    sec_categories:'CATEGORÍAS', sec_catalog:'CATÁLOGO', sec_howto:'¿CÓMO COMPRAR?', sec_about:'SOBRE CTG', sec_contact:'CONTÁCTANOS',
    cat_ropa_name:'Ropa Urbana', cat_ropa_desc:'Poleras · Hoodies · Joggers · Gorras', cat_ropa_label:'ROPA URBANA',
    cat_zap_name:'Zapatillas', cat_zap_desc:'Urbanas · Retro · Running · Jordan-style', cat_zap_label:'ZAPATILLAS',
    cat_elec_name:'Electrónica', cat_elec_desc:'Audífonos · AirPods · Smartwatch', cat_elec_label:'ELECTRÓNICA',
    cat_tel_name:'Telefonía', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'TELEFONÍA',
    cat_acc_name:'Accesorios Tech', cat_acc_desc:'Cases · Cargadores · Cables · Power Banks', cat_acc_label:'ACCESORIOS TECH',
    cat_ninos_name:'Niños y Bebés', cat_ninos_desc:'Ropa · Sandalias · Pantuflas', cat_ninos_label:'NIÑOS',
    cat_verano_name:'Verano', cat_verano_desc:'Ropa ligera · Chalas · Zapatillas verano', cat_verano_label:'VERANO',
    cat_invierno_name:'Invierno', cat_invierno_desc:'Pijamas · Pantuflas · Ropa abrigada', cat_invierno_label:'INVIERNO',
    filter_all:'Todos', filter_ropa:'Ropa', filter_zap:'Zapatillas', filter_elec:'Electrónica', filter_tel:'Telefonía', filter_acc:'Accesorios',
    filter_ninos:'Niños', filter_verano:'Verano', filter_invierno:'Invierno',
    btn_add:'+ Agregar al Carro',
    pname_polera:'Polera CTG Premium', pdesc_polera:'100% algodón · Logo CTG bordado · Tallas S–XXL',
    pname_hoodie:'Hoodie CTG Negro/Dorado', pdesc_hoodie:'Algodón premium · Capucha ajustable · Logo CTG',
    pname_gorra:'Gorra CTG Snapback', pdesc_gorra:'Ajustable · Bordado CTG dorado · Edición limitada',
    pname_jogger:'Jogger CTG Urban', pdesc_jogger:'Tela flexible · Bolsillos laterales · Cintura elástica',
    pname_tenis:'Tenis Urbano Classic', pdesc_tenis:'Suela rubber · Tallas 36–44 · Varios colores',
    pname_retro:'Retro Runner CTG', pdesc_retro:'Estilo retro · Suela chunky · Tallas 36–44',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Cuero sintético · Caña alta · Tallas 36–45',
    pname_beats:'Audífonos Beats Studio Pro', pdesc_beats:'Cancelación de ruido · BT 5.0 · 40h batería',
    pname_airpods:'AirPods Pro 2da Gen', pdesc_airpods:'ANC · Modo transparencia · Resistente al agua',
    pname_watch:'Smartwatch Serie 8', pdesc_watch:'Monitor cardíaco · GPS · Compatible iOS/Android',
    pname_ip13:'iPhone 13 128GB', pdesc_ip13:'Chip A15 · Cámara 12MP · 5G · Varios colores',
    pname_ip14:'iPhone 14 128GB', pdesc_ip14:'Chip A15 · Dynamic Island · Crash Detection',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5.000mAh · 5G · Varios colores',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP · 5.000mAh · Carga 33W',
    pname_case:'Case iPhone Premium', pdesc_case:'Silicona · MagSafe compatible · Varios modelos',
    pname_charger:'Cargador 20W USB-C', pdesc_charger:'Carga rápida · Compatible iPhone y Android',
    pname_powerbank:'Power Bank 10.000mAh', pdesc_powerbank:'Carga dual · Cable incluido · Indicador LED',
    pname_bodybebe:'Body Bebé Algodón', pdesc_bodybebe:'100% algodón · 1-12 meses · Varios colores',
    pname_conjuntobebe:'Conjunto Bebé 2 piezas', pdesc_conjuntobebe:'Polera + pantalón · 6m a 2 años',
    pname_sandaliasbebe:'Sandalias Bebé', pdesc_sandaliasbebe:'Antideslizantes · 1-3 años · Niño y niña',
    pname_sandaliasninos:'Sandalias Verano Niños', pdesc_sandaliasninos:'Cómodas · Tallas 20-30',
    pname_pantuflasnino:'Pantuflas Niños', pdesc_pantuflasnino:'Diseños animalitos · Suela antideslizante',
    pname_pantuflasnina:'Pantuflas Niñas', pdesc_pantuflasnina:'Diseños princesa · Suave y abrigada',
    pname_poleraverano:'Polera Verano Hombre', pdesc_poleraverano:'100% algodón ligero · Talla S-XXL',
    pname_camisalino:'Camisa Lino Hombre', pdesc_camisalino:'Lino premium · Manga corta · Look elegante',
    pname_shorthombre:'Short Casual Hombre', pdesc_shorthombre:'Algodón fresco · Bolsillos · S-XXL',
    pname_vestidomujer:'Vestido Verano Mujer', pdesc_vestidomujer:'Diseño floral · Talla S-XL',
    pname_blusamujer:'Blusa Verano Mujer', pdesc_blusamujer:'Tela fresca · Diseños modernos',
    pname_faldamujer:'Falda Verano Mujer', pdesc_faldamujer:'Diseño casual · Cintura elástica',
    pname_chalashombre:'Chalas Hombre', pdesc_chalashombre:'Cómodas · Antideslizante · Tallas 39-45',
    pname_chalasmujer:'Chalas Mujer', pdesc_chalasmujer:'Diseño elegante · Cómodas · Tallas 35-41',
    pname_zapatillasveranohombre:'Zapatillas Verano Hombre', pdesc_zapatillasveranohombre:'Tela transpirable · Ligeras',
    pname_zapatillasveranomujer:'Zapatillas Verano Mujer', pdesc_zapatillasveranomujer:'Estilo casual · Suela cómoda',
    pname_pijamapolarhombre:'Pijama Polar Hombre', pdesc_pijamapolarhombre:'Polar abrigado · 2 piezas · S-XXL',
    pname_pijamatermicohombre:'Pijama Térmico Hombre', pdesc_pijamatermicohombre:'Térmico interior · Súper abrigado',
    pname_pijamapolarmujer:'Pijama Polar Mujer', pdesc_pijamapolarmujer:'Polar suave · Diseños femeninos',
    pname_pijamatermicomujer:'Pijama Térmico Mujer', pdesc_pijamatermicomujer:'Térmico premium · Súper abrigado',
    pname_pantuflaspolarhombre:'Pantuflas Polar Hombre', pdesc_pantuflaspolarhombre:'Polar abrigado · Antideslizante',
    pname_pantuflasbotahombre:'Pantuflas Bota Hombre', pdesc_pantuflasbotahombre:'Tipo bota · Súper abrigadas',
    pname_pantuflasmujersuave:'Pantuflas Suaves Mujer', pdesc_pantuflasmujersuave:'Súper suaves · Diseños femeninos',
    pname_pantuflasbotamujer:'Pantuflas Bota Mujer', pdesc_pantuflasbotamujer:'Tipo bota premium · Forro polar',
    step1_t:'Elige tu producto', step1_d:'Navega el catálogo y agrega al carro lo que quieras',
    step2_t:'Paga fácil y seguro', step2_d:'WhatsApp o transferencia bancaria — tú eliges',
    step3_t:'Empacamos para ti', step3_d:'Branding CTG dorado en cada pedido',
    step4_t:'Despacho Starken', step4_d:'A todo Chile en 24–48 horas hábiles con tracking',
    about_p1:'Charlee Trade Group nació en Santiago de Chile en 2026 con una misión clara: llevar moda urbana, zapatillas, electrónica, telefonía y accesorios tech de calidad directamente a ti, sin los sobrecostos del retail tradicional.',
    about_p2:'Operamos 100% online, lo que nos permite ofrecerte precios competitivos y entrega rápida a todo Chile.',
    tag_lines:'8 Líneas de Producto', tag_ship:'Despacho Nacional', tag_pay:'Pago Seguro',
    ns_roi:'ROI proyectado año 1', ns_buyers:'Compradores online Chile', ns_time:'Tiempo de despacho', ns_lines:'Líneas de producto',
    cloc:'Ubicación', cship:'Despacho', cship_val:'Starken · Todo Chile · 24–48 hrs',
    form_title:'Envíanos un mensaje', form_name:'Tu nombre', form_email:'Tu email',
    form_help:'¿En qué podemos ayudarte?', form_o1:'Consulta de producto', form_o2:'Estado de mi pedido', form_o3:'Cambios y devoluciones', form_o4:'Otro',
    form_msg:'Tu mensaje...', form_send:'Enviar Mensaje',
    footer_store:'TIENDA', footer_legal:'LEGAL', footer_follow:'SÍGUENOS',
    footer_privacy:'Política de Privacidad', footer_returns:'Política de Cambios', footer_terms:'Términos y Condiciones',
    footer_email:'Email Corporativo', footer_rights:'Todos los derechos reservados',
    cart_title:'MI CARRO', cart_empty:'Tu carro está vacío', cart_total:'TOTAL:', cart_total_s:'TOTAL',
    cart_ship:'+ Despacho Starken: $3.500 RM / $5.000 Regiones',
    btn_pay:'Pagar', btn_transfer:'🏦 Transferencia', btn_continue:'Seguir Comprando',
    btn_wa:'Pagar vía WhatsApp', btn_bank:'🏦 Transferencia Bancaria', btn_back:'Volver',
    modal_order:'RESUMEN DE PEDIDO', modal_transfer:'DATOS DE TRANSFERENCIA',
    tr_bank:'Banco', tr_type:'Tipo de Cuenta', tr_name:'Nombre', tr_amount:'MONTO A TRANSFERIR',
    tr_note:'⚠️ Envía el comprobante por WhatsApp o email para confirmar tu pedido.',
    tr_confirm:'Ya transferí — Enviar comprobante',
    toast_add:'agregado al carro', toast_empty:'Tu carro está vacío', toast_sent:'✓ Mensaje enviado.',
    curr_note:'* Precios referenciales. Se cobra en CLP.',
    priv_title:'Política de Privacidad', priv_body:'Tus datos personales son usados únicamente para procesar tu pedido y contactarte. No compartimos tu información con terceros.',
    ret_title:'Política de Cambios', ret_body:'Aceptamos cambios dentro de 7 días desde la compra. El producto debe estar sin uso y en su empaque original.',
    terms_title:'Términos y Condiciones', terms_body:'Al comprar en CTG aceptas que los precios están expresados en pesos chilenos (CLP). Los pedidos se procesan tras confirmación del pago.',
    wa_order:'Hola CTG! Quiero hacer un pedido', wa_total:'TOTAL', wa_ship:'+ Despacho Starken',
    wa_trans:'Hola CTG! Acabo de realizar una transferencia', wa_detail:'Detalle del pedido', wa_attach:'Adjunto el comprobante.'
  },
  en:{
    flag:'🇺🇸', code:'EN',
    nav_catalog:'Catalog', nav_categories:'Categories', nav_about:'About Us', nav_contact:'Contact',
    hero_badge:'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline:'QUALITY · STYLE · TRUST',
    hero_desc:'Urban Clothing · Sneakers · Electronics · Phones · Accessories<br>Shipping across Chile via Starken · 24–48 hrs',
    hero_cta:'View Catalog',
    stat_lines:'Product Lines', stat_shipping:'Shipping', stat_buyers:'Online Buyers in Chile',
    sec_categories:'CATEGORIES', sec_catalog:'CATALOG', sec_howto:'HOW TO BUY?', sec_about:'ABOUT CTG', sec_contact:'CONTACT US',
    cat_ropa_name:'Urban Clothing', cat_ropa_desc:'T-Shirts · Hoodies · Joggers · Caps', cat_ropa_label:'URBAN CLOTHING',
    cat_zap_name:'Sneakers', cat_zap_desc:'Urban · Retro · Running · Jordan-style', cat_zap_label:'SNEAKERS',
    cat_elec_name:'Electronics', cat_elec_desc:'Headphones · AirPods · Smartwatch', cat_elec_label:'ELECTRONICS',
    cat_tel_name:'Phones', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'PHONES',
    cat_acc_name:'Tech Accessories', cat_acc_desc:'Cases · Chargers · Cables · Power Banks', cat_acc_label:'TECH ACCESSORIES',
    cat_ninos_name:'Kids & Babies', cat_ninos_desc:'Clothes · Sandals · Slippers', cat_ninos_label:'KIDS',
    cat_verano_name:'Summer', cat_verano_desc:'Light clothes · Flip-flops · Summer shoes', cat_verano_label:'SUMMER',
    cat_invierno_name:'Winter', cat_invierno_desc:'Pajamas · Slippers · Warm clothes', cat_invierno_label:'WINTER',
    filter_all:'All', filter_ropa:'Clothing', filter_zap:'Sneakers', filter_elec:'Electronics', filter_tel:'Phones', filter_acc:'Accessories',
    filter_ninos:'Kids', filter_verano:'Summer', filter_invierno:'Winter',
    btn_add:'+ Add to Cart',
    pname_polera:'CTG Premium T-Shirt', pdesc_polera:'100% cotton · Embroidered CTG logo · Sizes S–XXL',
    pname_hoodie:'CTG Black/Gold Hoodie', pdesc_hoodie:'Premium cotton · Adjustable hood · CTG logo',
    pname_gorra:'CTG Snapback Cap', pdesc_gorra:'Adjustable · Gold CTG embroidery · Limited edition',
    pname_jogger:'CTG Urban Jogger', pdesc_jogger:'Flexible fabric · Side pockets · Elastic waist',
    pname_tenis:'Classic Urban Sneaker', pdesc_tenis:'Rubber sole · Sizes 36–44 · Various colors',
    pname_retro:'CTG Retro Runner', pdesc_retro:'Retro style · Chunky sole · Sizes 36–44',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Synthetic leather · High top · Sizes 36–45',
    pname_beats:'Beats Studio Pro Headphones', pdesc_beats:'Noise cancellation · BT 5.0 · 40h battery',
    pname_airpods:'AirPods Pro 2nd Gen', pdesc_airpods:'ANC · Transparency mode · Water resistant',
    pname_watch:'Smartwatch Series 8', pdesc_watch:'Heart monitor · GPS · iOS/Android compatible',
    pname_ip13:'iPhone 13 128GB', pdesc_ip13:'A15 chip · 12MP camera · 5G · Various colors',
    pname_ip14:'iPhone 14 128GB', pdesc_ip14:'A15 chip · Dynamic Island · Crash Detection',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5,000mAh · 5G · Various colors',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP · 5,000mAh · 33W charging',
    pname_case:'Premium iPhone Case', pdesc_case:'Silicone · MagSafe compatible · Various models',
    pname_charger:'20W USB-C Charger', pdesc_charger:'Fast charging · Compatible iPhone & Android',
    pname_powerbank:'10,000mAh Power Bank', pdesc_powerbank:'Dual charging · Cable included · LED indicator',
    pname_bodybebe:'Baby Cotton Body', pdesc_bodybebe:'100% cotton · 1-12 months · Various colors',
    pname_conjuntobebe:'Baby 2-piece Set', pdesc_conjuntobebe:'Shirt + pants · 6m to 2 years',
    pname_sandaliasbebe:'Baby Sandals', pdesc_sandaliasbebe:'Non-slip · 1-3 years · Boy and girl',
    pname_sandaliasninos:'Kids Summer Sandals', pdesc_sandaliasninos:'Comfortable · Sizes 20-30',
    pname_pantuflasnino:'Boys Slippers', pdesc_pantuflasnino:'Animal designs · Non-slip sole',
    pname_pantuflasnina:'Girls Slippers', pdesc_pantuflasnina:'Princess designs · Soft and warm',
    pname_poleraverano:'Summer T-shirt Men', pdesc_poleraverano:'100% light cotton · Size S-XXL',
    pname_camisalino:'Linen Shirt Men', pdesc_camisalino:'Premium linen · Short sleeve · Elegant look',
    pname_shorthombre:'Casual Shorts Men', pdesc_shorthombre:'Cool cotton · Pockets · S-XXL',
    pname_vestidomujer:'Summer Dress Women', pdesc_vestidomujer:'Floral design · Size S-XL',
    pname_blusamujer:'Summer Blouse Women', pdesc_blusamujer:'Cool fabric · Modern designs',
    pname_faldamujer:'Summer Skirt Women', pdesc_faldamujer:'Casual design · Elastic waist',
    pname_chalashombre:'Men Flip-flops', pdesc_chalashombre:'Comfortable · Non-slip · Sizes 39-45',
    pname_chalasmujer:'Women Flip-flops', pdesc_chalasmujer:'Elegant design · Comfortable · Sizes 35-41',
    pname_zapatillasveranohombre:'Summer Sneakers Men', pdesc_zapatillasveranohombre:'Breathable fabric · Light',
    pname_zapatillasveranomujer:'Summer Sneakers Women', pdesc_zapatillasveranomujer:'Casual style · Comfortable sole',
    pname_pijamapolarhombre:'Fleece Pajama Men', pdesc_pijamapolarhombre:'Warm fleece · 2 pieces · S-XXL',
    pname_pijamatermicohombre:'Thermal Pajama Men', pdesc_pijamatermicohombre:'Thermal lining · Super warm',
    pname_pijamapolarmujer:'Fleece Pajama Women', pdesc_pijamapolarmujer:'Soft fleece · Feminine designs',
    pname_pijamatermicomujer:'Thermal Pajama Women', pdesc_pijamatermicomujer:'Premium thermal · Super warm',
    pname_pantuflaspolarhombre:'Fleece Slippers Men', pdesc_pantuflaspolarhombre:'Warm fleece · Non-slip',
    pname_pantuflasbotahombre:'Boot Slippers Men', pdesc_pantuflasbotahombre:'Boot style · Super warm',
    pname_pantuflasmujersuave:'Soft Slippers Women', pdesc_pantuflasmujersuave:'Super soft · Feminine designs',
    pname_pantuflasbotamujer:'Boot Slippers Women', pdesc_pantuflasbotamujer:'Premium boot style · Fleece lining',
    step1_t:'Choose your product', step1_d:'Browse the catalog and add what you want to cart',
    step2_t:'Pay easy & secure', step2_d:'WhatsApp or bank transfer — your choice',
    step3_t:'We pack for you', step3_d:'Gold CTG branding on every order',
    step4_t:'Starken Shipping', step4_d:'All across Chile in 24–48 business hours with tracking',
    about_p1:'Charlee Trade Group was born in Santiago, Chile in 2026 with a clear mission: bringing quality urban fashion, sneakers, electronics, phones and tech accessories directly to you.',
    about_p2:'We operate 100% online, allowing us to offer competitive prices and fast delivery across Chile.',
    tag_lines:'8 Product Lines', tag_ship:'National Shipping', tag_pay:'Secure Payment',
    ns_roi:'Projected ROI Year 1', ns_buyers:'Online buyers in Chile', ns_time:'Shipping time', ns_lines:'Product lines',
    cloc:'Location', cship:'Shipping', cship_val:'Starken · All Chile · 24–48 hrs',
    form_title:'Send us a message', form_name:'Your name', form_email:'Your email',
    form_help:'How can we help you?', form_o1:'Product inquiry', form_o2:'Order status', form_o3:'Returns & exchanges', form_o4:'Other',
    form_msg:'Your message...', form_send:'Send Message',
    footer_store:'STORE', footer_legal:'LEGAL', footer_follow:'FOLLOW US',
    footer_privacy:'Privacy Policy', footer_returns:'Return Policy', footer_terms:'Terms & Conditions',
    footer_email:'Corporate Email', footer_rights:'All rights reserved',
    cart_title:'MY CART', cart_empty:'Your cart is empty', cart_total:'TOTAL:', cart_total_s:'TOTAL',
    cart_ship:'+ Starken Shipping: $3,500 RM / $5,000 Regions',
    btn_pay:'Pay', btn_transfer:'🏦 Bank Transfer', btn_continue:'Keep Shopping',
    btn_wa:'Pay via WhatsApp', btn_bank:'🏦 Bank Transfer', btn_back:'Back',
    modal_order:'ORDER SUMMARY', modal_transfer:'BANK TRANSFER DETAILS',
    tr_bank:'Bank', tr_type:'Account Type', tr_name:'Name', tr_amount:'AMOUNT TO TRANSFER',
    tr_note:'⚠️ Send the receipt via WhatsApp or email to confirm your order.',
    tr_confirm:'Transferred — Send receipt',
    toast_add:'added to cart', toast_empty:'Your cart is empty', toast_sent:'✓ Message sent.',
    curr_note:'* Reference prices. Charged in CLP.',
    priv_title:'Privacy Policy', priv_body:'Your personal data is used only to process your order and contact you. We do not share your information with third parties.',
    ret_title:'Return Policy', ret_body:'We accept returns within 7 days of purchase. The product must be unused and in its original packaging.',
    terms_title:'Terms & Conditions', terms_body:'By purchasing from CTG you agree that prices are in Chilean pesos (CLP). Orders are processed after payment confirmation.',
    wa_order:'Hello CTG! I want to place an order', wa_total:'TOTAL', wa_ship:'+ Starken Shipping',
    wa_trans:'Hello CTG! I just made a bank transfer', wa_detail:'Order detail', wa_attach:'Attaching the receipt.'
  },
  pt:{
    flag:'🇧🇷', code:'PT',
    nav_catalog:'Catálogo', nav_categories:'Categorias', nav_about:'Sobre Nós', nav_contact:'Contato',
    hero_badge:'EST. 2026 · SANTIAGO, CHILE',
    hero_tagline:'QUALIDADE · ESTILO · CONFIANÇA',
    hero_desc:'Roupa Urbana · Tênis · Eletrônicos · Telefonia · Acessórios<br>Envio para todo o Chile via Starken · 24–48 hrs',
    hero_cta:'Ver Catálogo',
    stat_lines:'Linhas de Produto', stat_shipping:'Entrega', stat_buyers:'Compradores Online Chile',
    sec_categories:'CATEGORIAS', sec_catalog:'CATÁLOGO', sec_howto:'COMO COMPRAR?', sec_about:'SOBRE CTG', sec_contact:'FALE CONOSCO',
    cat_ropa_name:'Roupa Urbana', cat_ropa_desc:'Camisetas · Hoodies · Joggers · Bonés', cat_ropa_label:'ROUPA URBANA',
    cat_zap_name:'Tênis', cat_zap_desc:'Urbano · Retrô · Running · Jordan-style', cat_zap_label:'TÊNIS',
    cat_elec_name:'Eletrônicos', cat_elec_desc:'Fones · AirPods · Smartwatch', cat_elec_label:'ELETRÔNICOS',
    cat_tel_name:'Telefonia', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'TELEFONIA',
    cat_acc_name:'Acessórios Tech', cat_acc_desc:'Cases · Carregadores · Cabos · Power Banks', cat_acc_label:'ACESSÓRIOS TECH',
    cat_ninos_name:'Crianças e Bebês', cat_ninos_desc:'Roupas · Sandálias · Pantufas', cat_ninos_label:'CRIANÇAS',
    cat_verano_name:'Verão', cat_verano_desc:'Roupa leve · Chinelos · Tênis de verão', cat_verano_label:'VERÃO',
    cat_invierno_name:'Inverno', cat_invierno_desc:'Pijamas · Pantufas · Roupa quente', cat_invierno_label:'INVERNO',
    filter_all:'Todos', filter_ropa:'Roupas', filter_zap:'Tênis', filter_elec:'Eletrônicos', filter_tel:'Telefonia', filter_acc:'Acessórios',
    filter_ninos:'Crianças', filter_verano:'Verão', filter_invierno:'Inverno',
    btn_add:'+ Adicionar ao Carrinho',
    pname_polera:'Camiseta CTG Premium', pdesc_polera:'100% algodão · Logo CTG bordado · Tamanhos S–XXL',
    pname_hoodie:'Hoodie CTG Preto/Dourado', pdesc_hoodie:'Algodão premium · Capuz ajustável · Logo CTG',
    pname_gorra:'Boné CTG Snapback', pdesc_gorra:'Ajustável · Bordado CTG dourado · Edição limitada',
    pname_jogger:'Jogger CTG Urban', pdesc_jogger:'Tecido flexível · Bolsos laterais · Cintura elástica',
    pname_tenis:'Tênis Urbano Classic', pdesc_tenis:'Sola de borracha · Tamanhos 36–44 · Várias cores',
    pname_retro:'Retro Runner CTG', pdesc_retro:'Estilo retrô · Sola chunky · Tamanhos 36–44',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Couro sintético · Cano alto · Tamanhos 36–45',
    pname_beats:'Fone Beats Studio Pro', pdesc_beats:'Cancelamento de ruído · BT 5.0 · Bateria 40h',
    pname_airpods:'AirPods Pro 2ª Geração', pdesc_airpods:'ANC · Modo transparência · Resistente à água',
    pname_watch:'Smartwatch Série 8', pdesc_watch:'Monitor cardíaco · GPS · Compatível iOS/Android',
    pname_ip13:'iPhone 13 128GB', pdesc_ip13:'Chip A15 · Câmera 12MP · 5G · Várias cores',
    pname_ip14:'iPhone 14 128GB', pdesc_ip14:'Chip A15 · Dynamic Island · Crash Detection',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5.000mAh · 5G · Várias cores',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP · 5.000mAh · Carga 33W',
    pname_case:'Capinha iPhone Premium', pdesc_case:'Silicone · Compatível MagSafe · Vários modelos',
    pname_charger:'Carregador 20W USB-C', pdesc_charger:'Carga rápida · Compatível iPhone e Android',
    pname_powerbank:'Power Bank 10.000mAh', pdesc_powerbank:'Carga dupla · Cabo incluído · Indicador LED',
    pname_bodybebe:'Body Bebê Algodão', pdesc_bodybebe:'100% algodão · 1-12 meses · Várias cores',
    pname_conjuntobebe:'Conjunto Bebê 2 peças', pdesc_conjuntobebe:'Camiseta + calça · 6m a 2 anos',
    pname_sandaliasbebe:'Sandálias Bebê', pdesc_sandaliasbebe:'Antiderrapantes · 1-3 anos',
    pname_sandaliasninos:'Sandálias Verão Crianças', pdesc_sandaliasninos:'Confortáveis · Tamanhos 20-30',
    pname_pantuflasnino:'Pantufas Meninos', pdesc_pantuflasnino:'Desenhos animais · Antiderrapante',
    pname_pantuflasnina:'Pantufas Meninas', pdesc_pantuflasnina:'Desenhos princesa · Macio e quente',
    pname_poleraverano:'Camiseta Verão Homem', pdesc_poleraverano:'100% algodão leve · Tam S-XXL',
    pname_camisalino:'Camisa Linho Homem', pdesc_camisalino:'Linho premium · Manga curta',
    pname_shorthombre:'Short Casual Homem', pdesc_shorthombre:'Algodão fresco · Bolsos · S-XXL',
    pname_vestidomujer:'Vestido Verão Mulher', pdesc_vestidomujer:'Estampa floral · Tam S-XL',
    pname_blusamujer:'Blusa Verão Mulher', pdesc_blusamujer:'Tecido fresco · Designs modernos',
    pname_faldamujer:'Saia Verão Mulher', pdesc_faldamujer:'Design casual · Cintura elástica',
    pname_chalashombre:'Chinelos Homem', pdesc_chalashombre:'Confortáveis · Antiderrapante',
    pname_chalasmujer:'Chinelos Mulher', pdesc_chalasmujer:'Design elegante · Confortáveis',
    pname_zapatillasveranohombre:'Tênis Verão Homem', pdesc_zapatillasveranohombre:'Tecido respirável · Leves',
    pname_zapatillasveranomujer:'Tênis Verão Mulher', pdesc_zapatillasveranomujer:'Estilo casual',
    pname_pijamapolarhombre:'Pijama Polar Homem', pdesc_pijamapolarhombre:'Polar quente · 2 peças',
    pname_pijamatermicohombre:'Pijama Térmico Homem', pdesc_pijamatermicohombre:'Forro térmico',
    pname_pijamapolarmujer:'Pijama Polar Mulher', pdesc_pijamapolarmujer:'Polar macio',
    pname_pijamatermicomujer:'Pijama Térmico Mulher', pdesc_pijamatermicomujer:'Térmico premium',
    pname_pantuflaspolarhombre:'Pantufas Polar Homem', pdesc_pantuflaspolarhombre:'Polar quente',
    pname_pantuflasbotahombre:'Pantufas Bota Homem', pdesc_pantuflasbotahombre:'Tipo bota',
    pname_pantuflasmujersuave:'Pantufas Macias Mulher', pdesc_pantuflasmujersuave:'Super macias',
    pname_pantuflasbotamujer:'Pantufas Bota Mulher', pdesc_pantuflasbotamujer:'Tipo bota premium',
    step1_t:'Escolha seu produto', step1_d:'Navegue pelo catálogo e adicione ao carrinho',
    step2_t:'Pague fácil e seguro', step2_d:'WhatsApp ou transferência bancária',
    step3_t:'Embalamos para você', step3_d:'Branding CTG dourado em cada pedido',
    step4_t:'Envio Starken', step4_d:'Para todo o Chile em 24–48 horas úteis',
    about_p1:'A Charlee Trade Group nasceu em Santiago, Chile em 2026 com uma missão clara: levar moda urbana de qualidade diretamente para você.',
    about_p2:'Operamos 100% online, o que nos permite oferecer preços competitivos e entrega rápida.',
    tag_lines:'8 Linhas de Produto', tag_ship:'Envio Nacional', tag_pay:'Pagamento Seguro',
    ns_roi:'ROI projetado ano 1', ns_buyers:'Compradores online Chile', ns_time:'Tempo de entrega', ns_lines:'Linhas de produto',
    cloc:'Localização', cship:'Entrega', cship_val:'Starken · Todo Chile · 24–48 hrs',
    form_title:'Envie-nos uma mensagem', form_name:'Seu nome', form_email:'Seu email',
    form_help:'Como podemos ajudar?', form_o1:'Consulta de produto', form_o2:'Status do pedido', form_o3:'Trocas', form_o4:'Outro',
    form_msg:'Sua mensagem...', form_send:'Enviar Mensagem',
    footer_store:'LOJA', footer_legal:'LEGAL', footer_follow:'SIGA-NOS',
    footer_privacy:'Política de Privacidade', footer_returns:'Política de Trocas', footer_terms:'Termos e Condições',
    footer_email:'Email Corporativo', footer_rights:'Todos os direitos reservados',
    cart_title:'MEU CARRINHO', cart_empty:'Seu carrinho está vazio', cart_total:'TOTAL:', cart_total_s:'TOTAL',
    cart_ship:'+ Envio Starken: $3.500 RM / $5.000 Regiões',
    btn_pay:'Pagar', btn_transfer:'🏦 Transferência', btn_continue:'Continuar Comprando',
    btn_wa:'Pagar via WhatsApp', btn_bank:'🏦 Transferência Bancária', btn_back:'Voltar',
    modal_order:'RESUMO DO PEDIDO', modal_transfer:'DADOS DE TRANSFERÊNCIA',
    tr_bank:'Banco', tr_type:'Tipo de Conta', tr_name:'Nome', tr_amount:'VALOR A TRANSFERIR',
    tr_note:'⚠️ Envie o comprovante via WhatsApp ou email.',
    tr_confirm:'Transferi — Enviar comprovante',
    toast_add:'adicionado ao carrinho', toast_empty:'Seu carrinho está vazio', toast_sent:'✓ Mensagem enviada.',
    curr_note:'* Preços referenciais. Cobrado em CLP.',
    priv_title:'Política de Privacidade', priv_body:'Seus dados pessoais são usados apenas para processar seu pedido.',
    ret_title:'Política de Trocas', ret_body:'Aceitamos trocas em até 7 dias após a compra.',
    terms_title:'Termos e Condições', terms_body:'Os preços estão em pesos chilenos (CLP).',
    wa_order:'Olá CTG! Quero fazer um pedido', wa_total:'TOTAL', wa_ship:'+ Envio Starken',
    wa_trans:'Olá CTG! Acabei de fazer uma transferência', wa_detail:'Detalhe do pedido', wa_attach:'Segue o comprovante.'
  },
  fr:{
    flag:'🇫🇷', code:'FR',
    nav_catalog:'Catalogue', nav_categories:'Catégories', nav_about:'À propos', nav_contact:'Contact',
    hero_badge:'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline:'QUALITÉ · STYLE · CONFIANCE',
    hero_desc:'Vêtements Urbains · Baskets · Électronique · Téléphonie · Accessoires<br>Livraison dans tout le Chili via Starken',
    hero_cta:'Voir le Catalogue',
    stat_lines:'Lignes de Produits', stat_shipping:'Livraison', stat_buyers:'Acheteurs en ligne Chili',
    sec_categories:'CATÉGORIES', sec_catalog:'CATALOGUE', sec_howto:'COMMENT ACHETER?', sec_about:'À PROPOS', sec_contact:'CONTACT',
    cat_ropa_name:'Vêtements Urbains', cat_ropa_desc:'T-shirts · Hoodies · Joggers · Casquettes', cat_ropa_label:'VÊTEMENTS',
    cat_zap_name:'Baskets', cat_zap_desc:'Urbain · Rétro · Running', cat_zap_label:'BASKETS',
    cat_elec_name:'Électronique', cat_elec_desc:'Écouteurs · AirPods · Smartwatch', cat_elec_label:'ÉLECTRONIQUE',
    cat_tel_name:'Téléphonie', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'TÉLÉPHONIE',
    cat_acc_name:'Accessoires Tech', cat_acc_desc:'Coques · Chargeurs · Câbles', cat_acc_label:'ACCESSOIRES',
    cat_ninos_name:'Enfants et Bébés', cat_ninos_desc:'Vêtements · Sandales · Chaussons', cat_ninos_label:'ENFANTS',
    cat_verano_name:'Été', cat_verano_desc:'Vêtements légers · Tongs', cat_verano_label:'ÉTÉ',
    cat_invierno_name:'Hiver', cat_invierno_desc:'Pyjamas · Chaussons', cat_invierno_label:'HIVER',
    filter_all:'Tous', filter_ropa:'Vêtements', filter_zap:'Baskets', filter_elec:'Électronique', filter_tel:'Téléphonie', filter_acc:'Accessoires',
    filter_ninos:'Enfants', filter_verano:'Été', filter_invierno:'Hiver',
    btn_add:'+ Ajouter au Panier',
    pname_polera:'T-shirt CTG Premium', pdesc_polera:'100% coton · Logo CTG brodé · Tailles S–XXL',
    pname_hoodie:'Hoodie CTG Noir/Or', pdesc_hoodie:'Coton premium · Capuche ajustable',
    pname_gorra:'Casquette CTG Snapback', pdesc_gorra:'Ajustable · Broderie CTG dorée',
    pname_jogger:'Jogger CTG Urban', pdesc_jogger:'Tissu flexible · Poches latérales',
    pname_tenis:'Basket Urbaine Classic', pdesc_tenis:'Semelle caoutchouc · Tailles 36–44',
    pname_retro:'Retro Runner CTG', pdesc_retro:'Style rétro · Semelle chunky',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Cuir synthétique · Tige haute',
    pname_beats:'Casque Beats Studio Pro', pdesc_beats:'Réduction de bruit · BT 5.0',
    pname_airpods:'AirPods Pro 2e Gen', pdesc_airpods:'ANC · Mode transparence',
    pname_watch:'Smartwatch Série 8', pdesc_watch:'Moniteur cardiaque · GPS',
    pname_ip13:'iPhone 13 128Go', pdesc_ip13:'Puce A15 · Caméra 12MP · 5G',
    pname_ip14:'iPhone 14 128Go', pdesc_ip14:'Puce A15 · Dynamic Island',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5G',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP',
    pname_case:'Coque iPhone Premium', pdesc_case:'Silicone · Compatible MagSafe',
    pname_charger:'Chargeur 20W USB-C', pdesc_charger:'Charge rapide',
    pname_powerbank:'Power Bank 10.000mAh', pdesc_powerbank:'Double charge · Câble inclus',
    pname_bodybebe:'Body Bébé Coton', pdesc_bodybebe:'100% coton · 1-12 mois',
    pname_conjuntobebe:'Ensemble Bébé 2 pièces', pdesc_conjuntobebe:'T-shirt + pantalon',
    pname_sandaliasbebe:'Sandales Bébé', pdesc_sandaliasbebe:'Antidérapantes · 1-3 ans',
    pname_sandaliasninos:'Sandales Été Enfants', pdesc_sandaliasninos:'Confortables · Tailles 20-30',
    pname_pantuflasnino:'Chaussons Garçons', pdesc_pantuflasnino:'Motifs animaux',
    pname_pantuflasnina:'Chaussons Filles', pdesc_pantuflasnina:'Motifs princesse',
    pname_poleraverano:'T-shirt Été Homme', pdesc_poleraverano:'100% coton léger',
    pname_camisalino:'Chemise Lin Homme', pdesc_camisalino:'Lin premium · Manche courte',
    pname_shorthombre:'Short Casual Homme', pdesc_shorthombre:'Coton frais · Poches',
    pname_vestidomujer:'Robe Été Femme', pdesc_vestidomujer:'Motif floral',
    pname_blusamujer:'Blouse Été Femme', pdesc_blusamujer:'Tissu frais',
    pname_faldamujer:'Jupe Été Femme', pdesc_faldamujer:'Design casual',
    pname_chalashombre:'Tongs Homme', pdesc_chalashombre:'Confortables · Antidérapantes',
    pname_chalasmujer:'Tongs Femme', pdesc_chalasmujer:'Design élégant',
    pname_zapatillasveranohombre:'Baskets Été Homme', pdesc_zapatillasveranohombre:'Tissu respirant',
    pname_zapatillasveranomujer:'Baskets Été Femme', pdesc_zapatillasveranomujer:'Style casual',
    pname_pijamapolarhombre:'Pyjama Polaire Homme', pdesc_pijamapolarhombre:'Polaire chaud · 2 pièces',
    pname_pijamatermicohombre:'Pyjama Thermique Homme', pdesc_pijamatermicohombre:'Doublure thermique',
    pname_pijamapolarmujer:'Pyjama Polaire Femme', pdesc_pijamapolarmujer:'Polaire doux',
    pname_pijamatermicomujer:'Pyjama Thermique Femme', pdesc_pijamatermicomujer:'Thermique premium',
    pname_pantuflaspolarhombre:'Chaussons Polaire Homme', pdesc_pantuflaspolarhombre:'Polaire chaud',
    pname_pantuflasbotahombre:'Chaussons Bottes Homme', pdesc_pantuflasbotahombre:'Style botte',
    pname_pantuflasmujersuave:'Chaussons Doux Femme', pdesc_pantuflasmujersuave:'Très doux',
    pname_pantuflasbotamujer:'Chaussons Bottes Femme', pdesc_pantuflasbotamujer:'Style botte premium',
    step1_t:'Choisissez votre produit', step1_d:'Parcourez le catalogue',
    step2_t:'Payez facilement', step2_d:'WhatsApp ou virement bancaire',
    step3_t:'Nous emballons pour vous', step3_d:'Branding CTG doré',
    step4_t:'Livraison Starken', step4_d:'Partout au Chili en 24–48h',
    about_p1:'Charlee Trade Group est né à Santiago du Chili en 2026.',
    about_p2:'Nous opérons 100% en ligne pour offrir des prix compétitifs.',
    tag_lines:'8 Lignes de Produits', tag_ship:'Livraison Nationale', tag_pay:'Paiement Sécurisé',
    ns_roi:'ROI projeté an 1', ns_buyers:'Acheteurs en ligne', ns_time:'Délai de livraison', ns_lines:'Lignes de produits',
    cloc:'Localisation', cship:'Livraison', cship_val:'Starken · Tout le Chili',
    form_title:'Envoyez-nous un message', form_name:'Votre nom', form_email:'Votre email',
    form_help:'Comment vous aider?', form_o1:'Demande produit', form_o2:'Statut commande', form_o3:'Retours', form_o4:'Autre',
    form_msg:'Votre message...', form_send:'Envoyer',
    footer_store:'BOUTIQUE', footer_legal:'LÉGAL', footer_follow:'SUIVEZ-NOUS',
    footer_privacy:'Politique de Confidentialité', footer_returns:'Politique de Retour', footer_terms:'Conditions Générales',
    footer_email:'Email Corporatif', footer_rights:'Tous droits réservés',
    cart_title:'MON PANIER', cart_empty:'Votre panier est vide', cart_total:'TOTAL :', cart_total_s:'TOTAL',
    cart_ship:'+ Livraison Starken: $3.500 RM / $5.000 Régions',
    btn_pay:'Payer', btn_transfer:'🏦 Virement', btn_continue:'Continuer',
    btn_wa:'Payer via WhatsApp', btn_bank:'🏦 Virement Bancaire', btn_back:'Retour',
    modal_order:'RÉSUMÉ DE COMMANDE', modal_transfer:'COORDONNÉES BANCAIRES',
    tr_bank:'Banque', tr_type:'Type de Compte', tr_name:'Nom', tr_amount:'MONTANT À VIRER',
    tr_note:'⚠️ Envoyez le reçu par WhatsApp.',
    tr_confirm:'Viré — Envoyer le reçu',
    toast_add:'ajouté au panier', toast_empty:'Votre panier est vide', toast_sent:'✓ Message envoyé.',
    curr_note:'* Prix indicatifs. Facturé en CLP.',
    priv_title:'Politique de Confidentialité', priv_body:'Vos données personnelles sont utilisées uniquement pour traiter votre commande.',
    ret_title:'Politique de Retour', ret_body:'Nous acceptons les échanges dans les 7 jours.',
    terms_title:'Conditions Générales', terms_body:'Les prix sont en pesos chiliens (CLP).',
    wa_order:'Bonjour CTG! Je veux passer une commande', wa_total:'TOTAL', wa_ship:'+ Livraison Starken',
    wa_trans:'Bonjour CTG! Virement effectué', wa_detail:'Détail commande', wa_attach:'Je joins le reçu.'
  },
  ht:{
    flag:'🇭🇹', code:'HT',
    nav_catalog:'Katalòg', nav_categories:'Kategori', nav_about:'Sou Nou', nav_contact:'Kontak',
    hero_badge:'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline:'KALITE · ESTIL · KONFYANS',
    hero_desc:'Rad Iben · Soulye · Elektwonik<br>Livrezon nan tout Chili',
    hero_cta:'Wè Katalòg',
    stat_lines:'Liy Pwodwi', stat_shipping:'Livrezon', stat_buyers:'Achetè Enlèn',
    sec_categories:'KATEGORI', sec_catalog:'KATALÒG', sec_howto:'KIJAN ACHTE?', sec_about:'SOU CTG', sec_contact:'KONTAKTE',
    cat_ropa_name:'Rad Iben', cat_ropa_desc:'Chemizèt · Hoodies', cat_ropa_label:'RAD',
    cat_zap_name:'Soulye', cat_zap_desc:'Iben · Retro', cat_zap_label:'SOULYE',
    cat_elec_name:'Elektwonik', cat_elec_desc:'Ekoutè · AirPods', cat_elec_label:'ELEKTWONIK',
    cat_tel_name:'Telefòn', cat_tel_desc:'iPhone · Samsung', cat_tel_label:'TELEFÒN',
    cat_acc_name:'Akseswa', cat_acc_desc:'Kas · Chajè', cat_acc_label:'AKSESWA',
    cat_ninos_name:'Timoun', cat_ninos_desc:'Rad · Sandal', cat_ninos_label:'TIMOUN',
    cat_verano_name:'Ete', cat_verano_desc:'Rad lejè', cat_verano_label:'ETE',
    cat_invierno_name:'Ivè', cat_invierno_desc:'Pijama', cat_invierno_label:'IVÈ',
    filter_all:'Tout', filter_ropa:'Rad', filter_zap:'Soulye', filter_elec:'Elektwonik', filter_tel:'Telefòn', filter_acc:'Akseswa',
    filter_ninos:'Timoun', filter_verano:'Ete', filter_invierno:'Ivè',
    btn_add:'+ Ajoute',
    pname_polera:'Chemizèt CTG', pdesc_polera:'100% koton',
    pname_hoodie:'Hoodie CTG', pdesc_hoodie:'Koton premium',
    pname_gorra:'Kaskèt CTG', pdesc_gorra:'Ajistab',
    pname_jogger:'Jogger CTG', pdesc_jogger:'Twal fleksib',
    pname_tenis:'Soulye Iben', pdesc_tenis:'Sèmèl kawotchou',
    pname_retro:'Retro Runner', pdesc_retro:'Estil retro',
    pname_jordan:'Jordan High Top', pdesc_jordan:'Kwi sintetik',
    pname_beats:'Ekoutè Beats', pdesc_beats:'Redui bri',
    pname_airpods:'AirPods Pro', pdesc_airpods:'ANC',
    pname_watch:'Smartwatch', pdesc_watch:'Monitè kè',
    pname_ip13:'iPhone 13', pdesc_ip13:'Chip A15',
    pname_ip14:'iPhone 14', pdesc_ip14:'Chip A15',
    pname_samsung:'Samsung Galaxy', pdesc_samsung:'6.4"',
    pname_xiaomi:'Xiaomi Redmi', pdesc_xiaomi:'AMOLED',
    pname_case:'Ka iPhone', pdesc_case:'Silikon',
    pname_charger:'Chajè 20W', pdesc_charger:'Chaj rapid',
    pname_powerbank:'Power Bank', pdesc_powerbank:'Doub chaj',
    pname_bodybebe:'Body Tibebe', pdesc_bodybebe:'100% koton',
    pname_conjuntobebe:'Konplè Tibebe', pdesc_conjuntobebe:'2 pyès',
    pname_sandaliasbebe:'Sandal Tibebe', pdesc_sandaliasbebe:'Antideplisman',
    pname_sandaliasninos:'Sandal Ete', pdesc_sandaliasninos:'Konfòtab',
    pname_pantuflasnino:'Pantuf Tigason', pdesc_pantuflasnino:'Desen zannimo',
    pname_pantuflasnina:'Pantuf Tifi', pdesc_pantuflasnina:'Desen princès',
    pname_poleraverano:'Chemizèt Ete', pdesc_poleraverano:'Koton lejè',
    pname_camisalino:'Chemiz Lin', pdesc_camisalino:'Lin premium',
    pname_shorthombre:'Short Gason', pdesc_shorthombre:'Koton fre',
    pname_vestidomujer:'Wob Ete', pdesc_vestidomujer:'Desen flè',
    pname_blusamujer:'Bliz Ete', pdesc_blusamujer:'Twal fre',
    pname_faldamujer:'Jip Ete', pdesc_faldamujer:'Desen casual',
    pname_chalashombre:'Tong Gason', pdesc_chalashombre:'Konfòtab',
    pname_chalasmujer:'Tong Fanm', pdesc_chalasmujer:'Desen elegan',
    pname_zapatillasveranohombre:'Soulye Ete Gason', pdesc_zapatillasveranohombre:'Twal ki respire',
    pname_zapatillasveranomujer:'Soulye Ete Fanm', pdesc_zapatillasveranomujer:'Estil casual',
    pname_pijamapolarhombre:'Pijama Polè Gason', pdesc_pijamapolarhombre:'Polè cho',
    pname_pijamatermicohombre:'Pijama Tèmik Gason', pdesc_pijamatermicohombre:'Tèmik anndan',
    pname_pijamapolarmujer:'Pijama Polè Fanm', pdesc_pijamapolarmujer:'Polè dou',
    pname_pijamatermicomujer:'Pijama Tèmik Fanm', pdesc_pijamatermicomujer:'Tèmik premium',
    pname_pantuflaspolarhombre:'Pantuf Polè Gason', pdesc_pantuflaspolarhombre:'Polè cho',
    pname_pantuflasbotahombre:'Pantuf Bòt Gason', pdesc_pantuflasbotahombre:'Estil bòt',
    pname_pantuflasmujersuave:'Pantuf Dou Fanm', pdesc_pantuflasmujersuave:'Trè dou',
    pname_pantuflasbotamujer:'Pantuf Bòt Fanm', pdesc_pantuflasbotamujer:'Estil bòt premium',
    step1_t:'Chwazi pwodwi ou', step1_d:'Navige nan katalòg',
    step2_t:'Peye fasil', step2_d:'WhatsApp oswa vèsman',
    step3_t:'Nou pakete', step3_d:'Branding CTG dore',
    step4_t:'Livrezon Starken', step4_d:'Nan tout Chili',
    about_p1:'Charlee Trade Group te fonde nan Santiago, Chili an 2026.',
    about_p2:'Nou opere 100% enlèn.',
    tag_lines:'8 Liy Pwodwi', tag_ship:'Livrezon', tag_pay:'Pèman Sekirize',
    ns_roi:'ROI ane 1', ns_buyers:'Achetè enlèn', ns_time:'Tan livrezon', ns_lines:'Liy pwodwi',
    cloc:'Kote', cship:'Livrezon', cship_val:'Starken · Tout Chili',
    form_title:'Voye nou mesaj', form_name:'Non ou', form_email:'Email ou',
    form_help:'Kijan ede?', form_o1:'Pwodwi', form_o2:'Estati', form_o3:'Echanj', form_o4:'Lòt',
    form_msg:'Mesaj ou...', form_send:'Voye',
    footer_store:'BOUTIK', footer_legal:'LEGAL', footer_follow:'SWIV NOU',
    footer_privacy:'Konfidansyalite', footer_returns:'Retou', footer_terms:'Kondisyon',
    footer_email:'Email', footer_rights:'Tout dwa rezève',
    cart_title:'PANYE M', cart_empty:'Panye vid', cart_total:'TOTAL:', cart_total_s:'TOTAL',
    cart_ship:'+ Livrezon Starken',
    btn_pay:'Peye', btn_transfer:'🏦 Vèsman', btn_continue:'Kontinye',
    btn_wa:'Peye WhatsApp', btn_bank:'🏦 Vèsman', btn_back:'Retounen',
    modal_order:'REZIME', modal_transfer:'DONE BANK',
    tr_bank:'Bank', tr_type:'Tip Kont', tr_name:'Non', tr_amount:'MONTAN',
    tr_note:'⚠️ Voye resi a.',
    tr_confirm:'Mwen voye',
    toast_add:'ajoute nan panye', toast_empty:'Panye vid', toast_sent:'✓ Mesaj voye.',
    curr_note:'* Pri referans.',
    priv_title:'Konfidansyalite', priv_body:'Done ou yo itilize sèlman pou kòmand ou.',
    ret_title:'Politik Retou', ret_body:'Nou aksepte echanj nan 7 jou.',
    terms_title:'Kondisyon', terms_body:'Pri yo an CLP.',
    wa_order:'Bonjou CTG! Kòmand', wa_total:'TOTAL', wa_ship:'+ Livrezon',
    wa_trans:'Bonjou CTG! Vèsman', wa_detail:'Detay', wa_attach:'Resi a.'
  }
};

function formatPrice(clpAmount) {
  const rate = RATES[currentCurrency] || 1;
  const sym  = SYMBOLS[currentCurrency] || '$';
  const dec  = DECIMALS[currentCurrency] || 0;
  const val  = clpAmount * rate;
  if (dec === 0) return sym + ' ' + Math.round(val).toLocaleString('es-CL');
  return sym + ' ' + val.toFixed(dec).replace('.', ',');
}

function updateAllPrices() {
  document.querySelectorAll('[data-price-clp]').forEach(el => {
    el.textContent = formatPrice(parseFloat(el.getAttribute('data-price-clp')));
  });
  const note = document.getElementById('currencyNote');
  if (note) {
    note.style.display = currentCurrency !== 'CLP' ? 'block' : 'none';
    note.textContent = T[currentLang].curr_note;
  }
  updateCartUI();
}

function switchCurrency(c) {
  currentCurrency = c;
  localStorage.setItem('ctg_currency', c);
  document.getElementById('currBtn').innerHTML = c + ' <span class="lang-arrow">▾</span>';
  document.getElementById('currMenu').classList.remove('open');
  updateAllPrices();
}

function toggleCurrMenu() {
  document.getElementById('currMenu').classList.toggle('open');
  document.getElementById('langMenu').classList.remove('open');
}

function applyLang(lang) {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.documentElement.lang = lang;
  const note = document.getElementById('currencyNote');
  if (note && currentCurrency !== 'CLP') note.textContent = t.curr_note;
}

const LANG_CURRENCY = { es:"CLP", en:"USD", pt:"BRL", fr:"EUR", ht:"CLP" };

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('ctg_lang', lang);
  applyLang(lang);
  document.getElementById('langBtn').innerHTML =
    T[lang].flag + ' ' + T[lang].code + ' <span class="lang-arrow">▾</span>';
  document.getElementById('langMenu').classList.remove('open');
  switchCurrency(LANG_CURRENCY[lang]);
}

function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('open');
  document.getElementById('currMenu').classList.remove('open');
}

document.addEventListener('click', e => {
  const ls = document.getElementById('langSwitcher');
  const cs = document.getElementById('currSwitcher');
  if (ls && !ls.contains(e.target)) document.getElementById('langMenu').classList.remove('open');
  if (cs && !cs.contains(e.target)) document.getElementById('currMenu').classList.remove('open');
});

function openLegal(type) {
  const t = T[currentLang];
  const map = {
    privacy: [t.priv_title, t.priv_body],
    returns: [t.ret_title, t.ret_body],
    terms:   [t.terms_title, t.terms_body]
  };
  document.getElementById('legalTitle').textContent = map[type][0];
  document.getElementById('legalBody').textContent  = map[type][1];
  document.getElementById('legalModal').classList.add('open');
  document.getElementById('legalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  document.getElementById('legalModal').classList.remove('open');
  document.getElementById('legalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  switchCurrency(currentCurrency);
  updateAllPrices();
  updateCartUI();
  initNavbar();
  initHamburger();
  initScrollAnimations();
});

function initNavbar() {
  const nb = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nb.style.background = window.scrollY > 50 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.95)';
  });
}

function initHamburger() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.addEventListener('click', () => m.classList.toggle('open'));
  m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => m.classList.remove('open')));
}

function filterCategory(cat) {
  document.querySelectorAll('.filtro-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat || (cat==='todos' && b.dataset.cat==='todos')));
  document.querySelectorAll('.producto-card').forEach(c =>
    c.classList.toggle('hidden', cat !== 'todos' && c.dataset.cat !== cat));
  if (cat !== 'todos') document.getElementById('catalogo').scrollIntoView({ behavior:'smooth' });
}

function addToCart(nombre, precio, categoria) {
  const ex = cart.find(i => i.nombre === nombre);
  if (ex) ex.cantidad++;
  else cart.push({ id: Date.now(), nombre, precio, categoria, cantidad: 1 });
  saveCart(); updateCartUI();
  showToast('✓ ' + nombre + ' ' + T[currentLang].toast_add);
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartUI();
}

function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartUI(); }

function saveCart() { localStorage.setItem('ctg_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  const items = cart.reduce((s,i) => s + i.cantidad, 0);
  document.getElementById('cartCount').textContent = items;
  document.getElementById('cartTotal').textContent = formatPrice(total);
  const cont = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const foot  = document.getElementById('cartFooter');
  if (!cart.length) {
    empty.style.display = 'block'; foot.style.display = 'none';
    cont.innerHTML = ''; cont.appendChild(empty); return;
  }
  empty.style.display = 'none'; foot.style.display = 'block';
  cont.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = '<div class="cart-item-emoji">' + (EMOJIS[item.categoria]||'🛍️') + '</div>' +
      '<div class="cart-item-info">' +
      '<div class="cart-item-name">' + item.nombre + '</div>' +
      '<div class="cart-item-price">' + formatPrice(item.precio) + '</div>' +
      '<div class="cart-item-qty">' +
      '<button class="qty-btn" onclick="updateQty(' + item.id + ',-1)">−</button>' +
      '<span class="qty-num">' + item.cantidad + '</span>' +
      '<button class="qty-btn" onclick="updateQty(' + item.id + ',1)">+</button>' +
      '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')">✕</button>' +
      '</div></div>';
    cont.appendChild(el);
  });
}

function toggleCart() {
  const p = document.getElementById('cartPanel');
  const o = document.getElementById('cartOverlay');
  p.classList.toggle('open'); o.classList.toggle('open');
  document.body.style.overflow = p.classList.contains('open') ? 'hidden' : '';
}

document.getElementById('cartBtn').addEventListener('click', toggleCart);

function checkout() {
  if (!cart.length) { showToast(T[currentLang].toast_empty); return; }
  toggleCart(); openCheckoutModal();
}

function checkoutTransfer() {
  if (!cart.length) { showToast(T[currentLang].toast_empty); return; }
  toggleCart(); openCheckoutModal();
}

function openCheckoutModal() {
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  document.getElementById('checkoutModalTotal').textContent = formatPrice(total);
  const cont = document.getElementById('checkoutModalItems');
  cont.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'checkout-modal-item';
    el.innerHTML = '<div class="co-item-left">' +
      '<span class="co-item-emoji">' + (EMOJIS[item.categoria]||'🛍️') + '</span>' +
      '<div><div class="co-item-name">' + item.nombre + '</div>' +
      '<div class="co-item-qty">x' + item.cantidad + '</div></div></div>' +
      '<span class="co-item-price">' + formatPrice(item.precio * item.cantidad) + '</span>';
    cont.appendChild(el);
  });
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function payWithWhatsApp() {
  saveToSheet('WhatsApp', '+' + WA_NUMBER); // ← GOOGLE SHEETS
  const t = T[currentLang];
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  const det = cart.map(i => '• ' + i.cantidad + 'x ' + i.nombre + ' — ' + formatPrice(i.precio*i.cantidad)).join('\n');
  const msg = encodeURIComponent(t.wa_order + ':\n\n' + det + '\n\n💰 ' + t.wa_total + ': ' + formatPrice(total) + '\n🚚 ' + t.wa_ship);
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
}

function openTransferModal() {
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  document.getElementById('transferTotal').textContent = formatPrice(total);
  document.getElementById('transferModal').classList.add('open');
  document.getElementById('transferOverlay').classList.add('open');
}

function closeTransferModal() {
  document.getElementById('transferModal').classList.remove('open');
  document.getElementById('transferOverlay').classList.remove('open');
}

function sendTransferConfirmWA() {
  saveToSheet('Transferencia', '+' + WA_NUMBER); // ← GOOGLE SHEETS
  const t = T[currentLang];
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  const det = cart.map(i => '• ' + i.cantidad + 'x ' + i.nombre).join('\n');
  const msg = encodeURIComponent(t.wa_trans + ' ' + formatPrice(total) + '.\n\n' + t.wa_detail + ':\n' + det + '\n\n' + t.wa_attach);
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
}

function submitForm(e) { e.preventDefault(); showToast(T[currentLang].toast_sent); e.target.reset(); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
  }), { threshold:0.1 });
  document.querySelectorAll('.cat-card,.producto-card,.step,.ns-stat').forEach(el => {
    el.style.opacity='0'; el.style.transform='translateY(20px)';
    el.style.transition='opacity 0.5s ease,transform 0.5s ease';
    obs.observe(el);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const p = document.getElementById('cartPanel');
    if (p.classList.contains('open')) toggleCart();
    closeCheckout(); closeTransferModal(); closeLegal();
  }
});
