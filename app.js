// ===== CHARLEE TRADE GROUP — app.js =====
// 5 Idiomas · 5 Monedas · WhatsApp multilingüe · Modales legales

// ——— CONFIG ———
const WA_NUMBER = '56946246760';
let cart = JSON.parse(localStorage.getItem('ctg_cart') || '[]');
let currentLang = localStorage.getItem('ctg_lang') || 'es';
let currentCurrency = localStorage.getItem('ctg_currency') || 'CLP';

const EMOJIS = { ropa:'👕', zapatillas:'👟', electronica:'🎧', telefonia:'📲', accesorios:'📱' };

// ——— TASAS (base CLP) ———
const RATES    = { CLP:1, USD:0.00109, EUR:0.00098, BRL:0.00556, ARS:1.05 };
const SYMBOLS  = { CLP:'$', USD:'US$', EUR:'€', BRL:'R$', ARS:'AR$' };
const DECIMALS = { CLP:0, USD:2, EUR:2, BRL:2, ARS:0 };

// ——— TRADUCCIONES ———
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
    filter_all:'Todos', filter_ropa:'Ropa', filter_zap:'Zapatillas', filter_elec:'Electrónica', filter_tel:'Telefonía', filter_acc:'Accesorios',
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
    step1_t:'Elige tu producto', step1_d:'Navega el catálogo y agrega al carro lo que quieras',
    step2_t:'Paga fácil y seguro', step2_d:'WhatsApp o transferencia bancaria — tú eliges',
    step3_t:'Empacamos para ti', step3_d:'Branding CTG dorado en cada pedido',
    step4_t:'Despacho Starken', step4_d:'A todo Chile en 24–48 horas hábiles con tracking',
    about_p1:'Charlee Trade Group nació en Santiago de Chile en 2026 con una misión clara: llevar moda urbana, zapatillas, electrónica, telefonía y accesorios tech de calidad directamente a ti, sin los sobrecostos del retail tradicional.',
    about_p2:'Operamos 100% online, lo que nos permite ofrecerte precios competitivos y entrega rápida a todo Chile.',
    tag_lines:'5 Líneas de Producto', tag_ship:'Despacho Nacional', tag_pay:'Pago Seguro',
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
    priv_title:'Política de Privacidad', priv_body:'Tus datos personales son usados únicamente para procesar tu pedido y contactarte. No compartimos tu información con terceros. Para eliminar tus datos, escríbenos al correo.',
    ret_title:'Política de Cambios', ret_body:'Aceptamos cambios dentro de 7 días desde la compra. El producto debe estar sin uso y en su empaque original. El cliente cubre el costo de envío del cambio. Contáctanos por WhatsApp para iniciar el proceso.',
    terms_title:'Términos y Condiciones', terms_body:'Al comprar en CTG aceptas que los precios están expresados en pesos chilenos (CLP). Los pedidos se procesan tras confirmación del pago. Los tiempos de despacho son referenciales. CTG se reserva el derecho de rechazar pedidos.',
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
    filter_all:'All', filter_ropa:'Clothing', filter_zap:'Sneakers', filter_elec:'Electronics', filter_tel:'Phones', filter_acc:'Accessories',
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
    step1_t:'Choose your product', step1_d:'Browse the catalog and add what you want to cart',
    step2_t:'Pay easy & secure', step2_d:'WhatsApp or bank transfer — your choice',
    step3_t:'We pack for you', step3_d:'Gold CTG branding on every order',
    step4_t:'Starken Shipping', step4_d:'All across Chile in 24–48 business hours with tracking',
    about_p1:'Charlee Trade Group was born in Santiago, Chile in 2026 with a clear mission: bringing quality urban fashion, sneakers, electronics, phones and tech accessories directly to you, without traditional retail markups.',
    about_p2:'We operate 100% online, allowing us to offer competitive prices and fast delivery across Chile.',
    tag_lines:'5 Product Lines', tag_ship:'National Shipping', tag_pay:'Secure Payment',
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
    priv_title:'Privacy Policy', priv_body:'Your personal data is used only to process your order and contact you. We do not share your information with third parties. To delete your data, email us.',
    ret_title:'Return Policy', ret_body:'We accept returns within 7 days of purchase. The product must be unused and in its original packaging. The customer covers the shipping cost. Contact us via WhatsApp to start the process.',
    terms_title:'Terms & Conditions', terms_body:'By purchasing from CTG you agree that prices are in Chilean pesos (CLP). Orders are processed after payment confirmation. Shipping times are estimates. CTG reserves the right to reject orders.',
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
    filter_all:'Todos', filter_ropa:'Roupas', filter_zap:'Tênis', filter_elec:'Eletrônicos', filter_tel:'Telefonia', filter_acc:'Acessórios',
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
    step1_t:'Escolha seu produto', step1_d:'Navegue pelo catálogo e adicione ao carrinho',
    step2_t:'Pague fácil e seguro', step2_d:'WhatsApp ou transferência bancária — você escolhe',
    step3_t:'Embalamos para você', step3_d:'Branding CTG dourado em cada pedido',
    step4_t:'Envio Starken', step4_d:'Para todo o Chile em 24–48 horas úteis com rastreamento',
    about_p1:'A Charlee Trade Group nasceu em Santiago, Chile em 2026 com uma missão clara: levar moda urbana, tênis, eletrônicos, telefonia e acessórios tech diretamente para você, sem os custos do varejo tradicional.',
    about_p2:'Operamos 100% online, o que nos permite oferecer preços competitivos e entrega rápida para todo o Chile.',
    tag_lines:'5 Linhas de Produto', tag_ship:'Envio Nacional', tag_pay:'Pagamento Seguro',
    ns_roi:'ROI projetado ano 1', ns_buyers:'Compradores online Chile', ns_time:'Tempo de entrega', ns_lines:'Linhas de produto',
    cloc:'Localização', cship:'Entrega', cship_val:'Starken · Todo Chile · 24–48 hrs',
    form_title:'Envie-nos uma mensagem', form_name:'Seu nome', form_email:'Seu email',
    form_help:'Como podemos ajudá-lo?', form_o1:'Consulta de produto', form_o2:'Status do pedido', form_o3:'Trocas e devoluções', form_o4:'Outro',
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
    tr_note:'⚠️ Envie o comprovante via WhatsApp ou email para confirmar seu pedido.',
    tr_confirm:'Transferi — Enviar comprovante',
    toast_add:'adicionado ao carrinho', toast_empty:'Seu carrinho está vazio', toast_sent:'✓ Mensagem enviada.',
    curr_note:'* Preços referenciais. Cobrado em CLP.',
    priv_title:'Política de Privacidade', priv_body:'Seus dados pessoais são usados apenas para processar seu pedido e contatá-lo. Não compartilhamos com terceiros. Para excluir seus dados, entre em contato por email.',
    ret_title:'Política de Trocas', ret_body:'Aceitamos trocas em até 7 dias após a compra. O produto deve estar sem uso na embalagem original. O cliente paga o envio da troca. Entre em contato pelo WhatsApp.',
    terms_title:'Termos e Condições', terms_body:'Ao comprar na CTG você concorda que os preços estão em pesos chilenos (CLP). Pedidos são processados após confirmação do pagamento. Prazos de entrega são estimados. A CTG se reserva o direito de recusar pedidos.',
    wa_order:'Olá CTG! Quero fazer um pedido', wa_total:'TOTAL', wa_ship:'+ Envio Starken',
    wa_trans:'Olá CTG! Acabei de fazer uma transferência', wa_detail:'Detalhe do pedido', wa_attach:'Segue o comprovante.'
  },
  fr:{
    flag:'🇫🇷', code:'FR',
    nav_catalog:'Catalogue', nav_categories:'Catégories', nav_about:'À propos', nav_contact:'Contact',
    hero_badge:'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline:'QUALITÉ · STYLE · CONFIANCE',
    hero_desc:'Vêtements Urbains · Baskets · Électronique · Téléphonie · Accessoires<br>Livraison dans tout le Chili via Starken · 24–48h',
    hero_cta:'Voir le Catalogue',
    stat_lines:'Lignes de Produits', stat_shipping:'Livraison', stat_buyers:'Acheteurs en ligne Chili',
    sec_categories:'CATÉGORIES', sec_catalog:'CATALOGUE', sec_howto:'COMMENT ACHETER?', sec_about:'À PROPOS', sec_contact:'NOUS CONTACTER',
    cat_ropa_name:'Vêtements Urbains', cat_ropa_desc:'T-shirts · Hoodies · Joggers · Casquettes', cat_ropa_label:'VÊTEMENTS URBAINS',
    cat_zap_name:'Baskets', cat_zap_desc:'Urbain · Rétro · Running · Jordan-style', cat_zap_label:'BASKETS',
    cat_elec_name:'Électronique', cat_elec_desc:'Écouteurs · AirPods · Smartwatch', cat_elec_label:'ÉLECTRONIQUE',
    cat_tel_name:'Téléphonie', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'TÉLÉPHONIE',
    cat_acc_name:'Accessoires Tech', cat_acc_desc:'Coques · Chargeurs · Câbles · Power Banks', cat_acc_label:'ACCESSOIRES TECH',
    filter_all:'Tous', filter_ropa:'Vêtements', filter_zap:'Baskets', filter_elec:'Électronique', filter_tel:'Téléphonie', filter_acc:'Accessoires',
    btn_add:'+ Ajouter au Panier',
    pname_polera:'T-shirt CTG Premium', pdesc_polera:'100% coton · Logo CTG brodé · Tailles S–XXL',
    pname_hoodie:'Hoodie CTG Noir/Or', pdesc_hoodie:'Coton premium · Capuche ajustable · Logo CTG',
    pname_gorra:'Casquette CTG Snapback', pdesc_gorra:'Ajustable · Broderie CTG dorée · Édition limitée',
    pname_jogger:'Jogger CTG Urban', pdesc_jogger:'Tissu flexible · Poches latérales · Taille élastique',
    pname_tenis:'Basket Urbaine Classic', pdesc_tenis:'Semelle caoutchouc · Tailles 36–44 · Diverses couleurs',
    pname_retro:'Retro Runner CTG', pdesc_retro:'Style rétro · Semelle chunky · Tailles 36–44',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Cuir synthétique · Tige haute · Tailles 36–45',
    pname_beats:'Casque Beats Studio Pro', pdesc_beats:'Réduction de bruit · BT 5.0 · Batterie 40h',
    pname_airpods:'AirPods Pro 2e Génération', pdesc_airpods:'ANC · Mode transparence · Résistant à l\'eau',
    pname_watch:'Smartwatch Série 8', pdesc_watch:'Moniteur cardiaque · GPS · Compatible iOS/Android',
    pname_ip13:'iPhone 13 128Go', pdesc_ip13:'Puce A15 · Caméra 12MP · 5G · Diverses couleurs',
    pname_ip14:'iPhone 14 128Go', pdesc_ip14:'Puce A15 · Dynamic Island · Crash Detection',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5.000mAh · 5G · Diverses couleurs',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP · 5.000mAh · Charge 33W',
    pname_case:'Coque iPhone Premium', pdesc_case:'Silicone · Compatible MagSafe · Divers modèles',
    pname_charger:'Chargeur 20W USB-C', pdesc_charger:'Charge rapide · Compatible iPhone et Android',
    pname_powerbank:'Power Bank 10.000mAh', pdesc_powerbank:'Double charge · Câble inclus · Indicateur LED',
    step1_t:'Choisissez votre produit', step1_d:'Parcourez le catalogue et ajoutez ce que vous voulez',
    step2_t:'Payez facilement', step2_d:'WhatsApp ou virement bancaire — à vous de choisir',
    step3_t:'Nous emballons pour vous', step3_d:'Branding CTG doré sur chaque commande',
    step4_t:'Livraison Starken', step4_d:'Partout au Chili en 24–48 heures ouvrables avec suivi',
    about_p1:'Charlee Trade Group est né à Santiago du Chili en 2026 avec une mission claire: apporter mode urbaine, baskets, électronique, téléphonie et accessoires tech directement à vous, sans les marges du commerce traditionnel.',
    about_p2:'Nous opérons 100% en ligne, ce qui nous permet d\'offrir des prix compétitifs et une livraison rapide partout au Chili.',
    tag_lines:'5 Lignes de Produits', tag_ship:'Livraison Nationale', tag_pay:'Paiement Sécurisé',
    ns_roi:'ROI projeté an 1', ns_buyers:'Acheteurs en ligne Chili', ns_time:'Délai de livraison', ns_lines:'Lignes de produits',
    cloc:'Localisation', cship:'Livraison', cship_val:'Starken · Tout le Chili · 24–48h',
    form_title:'Envoyez-nous un message', form_name:'Votre nom', form_email:'Votre email',
    form_help:'Comment pouvons-nous vous aider?', form_o1:'Demande produit', form_o2:'Statut commande', form_o3:'Échanges et retours', form_o4:'Autre',
    form_msg:'Votre message...', form_send:'Envoyer le Message',
    footer_store:'BOUTIQUE', footer_legal:'LÉGAL', footer_follow:'SUIVEZ-NOUS',
    footer_privacy:'Politique de Confidentialité', footer_returns:'Politique de Retour', footer_terms:'Conditions Générales',
    footer_email:'Email Corporatif', footer_rights:'Tous droits réservés',
    cart_title:'MON PANIER', cart_empty:'Votre panier est vide', cart_total:'TOTAL :', cart_total_s:'TOTAL',
    cart_ship:'+ Livraison Starken: $3.500 RM / $5.000 Régions',
    btn_pay:'Payer', btn_transfer:'🏦 Virement', btn_continue:'Continuer les Achats',
    btn_wa:'Payer via WhatsApp', btn_bank:'🏦 Virement Bancaire', btn_back:'Retour',
    modal_order:'RÉSUMÉ DE COMMANDE', modal_transfer:'COORDONNÉES BANCAIRES',
    tr_bank:'Banque', tr_type:'Type de Compte', tr_name:'Nom', tr_amount:'MONTANT À VIRER',
    tr_note:'⚠️ Envoyez le reçu par WhatsApp ou email pour confirmer votre commande.',
    tr_confirm:'Viré — Envoyer le reçu',
    toast_add:'ajouté au panier', toast_empty:'Votre panier est vide', toast_sent:'✓ Message envoyé.',
    curr_note:'* Prix indicatifs. Facturé en CLP.',
    priv_title:'Politique de Confidentialité', priv_body:'Vos données personnelles sont utilisées uniquement pour traiter votre commande et vous contacter. Nous ne partageons pas vos informations avec des tiers.',
    ret_title:'Politique de Retour', ret_body:'Nous acceptons les échanges dans les 7 jours suivant l\'achat. Le produit doit être neuf dans son emballage d\'origine. Le client prend en charge les frais d\'envoi.',
    terms_title:'Conditions Générales', terms_body:'En achetant chez CTG, vous acceptez que les prix sont en pesos chiliens (CLP). Les commandes sont traitées après confirmation du paiement. Les délais de livraison sont indicatifs.',
    wa_order:'Bonjour CTG! Je veux passer une commande', wa_total:'TOTAL', wa_ship:'+ Livraison Starken',
    wa_trans:'Bonjour CTG! Je viens d\'effectuer un virement', wa_detail:'Détail de la commande', wa_attach:'Je joins le reçu.'
  },
  ht:{
    flag:'🇭🇹', code:'HT',
    nav_catalog:'Katalòg', nav_categories:'Kategori', nav_about:'Sou Nou', nav_contact:'Kontakte',
    hero_badge:'EST. 2026 · SANTIAGO, CHILI',
    hero_tagline:'KALITE · ESTIL · KONFYANS',
    hero_desc:'Rad Iben · Soulye · Elektwonik · Telefòn · Akseswa<br>Livrezon toupatou nan Chili pa Starken · 24–48 èdtan',
    hero_cta:'Wè Katalòg la',
    stat_lines:'Liy Pwodwi', stat_shipping:'Livrezon', stat_buyers:'Achetè Enlèn nan Chili',
    sec_categories:'KATEGORI', sec_catalog:'KATALÒG', sec_howto:'KIJAN POU ACHTE?', sec_about:'SIFAS CTG', sec_contact:'KONTAKTE NOU',
    cat_ropa_name:'Rad Iben', cat_ropa_desc:'Chemizèt · Hoodies · Joggers · Kaskèt', cat_ropa_label:'RAD IBEN',
    cat_zap_name:'Soulye', cat_zap_desc:'Iben · Retro · Running · Jordan-style', cat_zap_label:'SOULYE',
    cat_elec_name:'Elektwonik', cat_elec_desc:'Ekoutè · AirPods · Smartwatch', cat_elec_label:'ELEKTWONIK',
    cat_tel_name:'Telefòn', cat_tel_desc:'iPhone · Samsung · Xiaomi', cat_tel_label:'TELEFÒN',
    cat_acc_name:'Akseswa Tech', cat_acc_desc:'Kas · Chajè · Kab · Power Banks', cat_acc_label:'AKSESWA TECH',
    filter_all:'Tout', filter_ropa:'Rad', filter_zap:'Soulye', filter_elec:'Elektwonik', filter_tel:'Telefòn', filter_acc:'Akseswa',
    btn_add:'+ Ajoute nan Panye',
    pname_polera:'Chemizèt CTG Premium', pdesc_polera:'100% koton · Logo CTG brode · Tay S–XXL',
    pname_hoodie:'Hoodie CTG Nwa/Dore', pdesc_hoodie:'Koton premium · Chapo ajistab · Logo CTG',
    pname_gorra:'Kaskèt CTG Snapback', pdesc_gorra:'Ajistab · Brodri CTG dore · Edisyon limite',
    pname_jogger:'Jogger CTG Urban', pdesc_jogger:'Twal fleksib · Pòch sou kote · Senti elastik',
    pname_tenis:'Soulye Iben Classic', pdesc_tenis:'Sèmèl kawotchou · Tay 36–44 · Diferan koulè',
    pname_retro:'Retro Runner CTG', pdesc_retro:'Estil retro · Sèmèl chunky · Tay 36–44',
    pname_jordan:'Jordan Style High Top', pdesc_jordan:'Kwi sintetik · Segondè · Tay 36–45',
    pname_beats:'Ekoutè Beats Studio Pro', pdesc_beats:'Redui bri · BT 5.0 · Batri 40h',
    pname_airpods:'AirPods Pro 2yèm Jenerasyon', pdesc_airpods:'ANC · Mod transparans · Rezistan dlo',
    pname_watch:'Smartwatch Seri 8', pdesc_watch:'Monitè kè · GPS · Konpatib iOS/Android',
    pname_ip13:'iPhone 13 128GB', pdesc_ip13:'Chip A15 · Kamera 12MP · 5G · Diferan koulè',
    pname_ip14:'iPhone 14 128GB', pdesc_ip14:'Chip A15 · Dynamic Island · Crash Detection',
    pname_samsung:'Samsung Galaxy A54 5G', pdesc_samsung:'6.4" · 50MP · 5.000mAh · 5G · Diferan koulè',
    pname_xiaomi:'Xiaomi Redmi Note 12', pdesc_xiaomi:'6.67" AMOLED · 50MP · 5.000mAh · Chaj 33W',
    pname_case:'Ka iPhone Premium', pdesc_case:'Silikon · Konpatib MagSafe · Diferan modèl',
    pname_charger:'Chajè 20W USB-C', pdesc_charger:'Chaj rapid · Konpatib iPhone ak Android',
    pname_powerbank:'Power Bank 10.000mAh', pdesc_powerbank:'Doub chaj · Kab enkli · Endikasyon LED',
    step1_t:'Chwazi pwodwi ou', step1_d:'Navige nan katalòg la epi ajoute sa ou vle',
    step2_t:'Peye fasil ak sekirite', step2_d:'WhatsApp oswa vèsman bank — ou chwazi',
    step3_t:'Nou pakete pou ou', step3_d:'Branding CTG dore sou chak kòmand',
    step4_t:'Livrezon Starken', step4_d:'Toupatou nan Chili nan 24–48 èdtan travay ak swivi',
    about_p1:'Charlee Trade Group te fonde nan Santiago, Chili an 2026 ak yon misyon klè: pote mod iben, soulye, elektwonik, telefòn ak akseswa tech kalite dirèkteman ba ou, san mak pri komès tradisyonèl.',
    about_p2:'Nou opere 100% enlèn, sa ki pèmèt nou ofri ou pri konpetitif ak livrezon rapid toupatou nan Chili.',
    tag_lines:'5 Liy Pwodwi', tag_ship:'Livrezon Nasyonal', tag_pay:'Pèman Sekirize',
    ns_roi:'ROI pwojekte ane 1', ns_buyers:'Achetè enlèn Chili', ns_time:'Tan livrezon', ns_lines:'Liy pwodwi',
    cloc:'Kote', cship:'Livrezon', cship_val:'Starken · Tout Chili · 24–48 èdtan',
    form_title:'Voye nou yon mesaj', form_name:'Non ou', form_email:'Email ou',
    form_help:'Kijan nou ka ede ou?', form_o1:'Demann pwodwi', form_o2:'Estati kòmand', form_o3:'Echanj ak retounen', form_o4:'Lòt',
    form_msg:'Mesaj ou...', form_send:'Voye Mesaj',
    footer_store:'BOUTIK', footer_legal:'LEGAL', footer_follow:'SWIV NOU',
    footer_privacy:'Politik Konfidansyalite', footer_returns:'Politik Retou', footer_terms:'Kondisyon Jeneral',
    footer_email:'Email Kòporatif', footer_rights:'Tout dwa rezève',
    cart_title:'PANYE MWEN', cart_empty:'Panye ou vid', cart_total:'TOTAL:', cart_total_s:'TOTAL',
    cart_ship:'+ Livrezon Starken: $3.500 RM / $5.000 Rejyon',
    btn_pay:'Peye', btn_transfer:'🏦 Vèsman', btn_continue:'Kontinye Achte',
    btn_wa:'Peye via WhatsApp', btn_bank:'🏦 Vèsman Bank', btn_back:'Retounen',
    modal_order:'REZIME KÒMAND', modal_transfer:'DONE BANK',
    tr_bank:'Bank', tr_type:'Tip Kont', tr_name:'Non', tr_amount:'MONTAN POU VOYE',
    tr_note:'⚠️ Voye resi a pa WhatsApp oswa email pou konfime kòmand ou.',
    tr_confirm:'Mwen voye — Voye resi',
    toast_add:'ajoute nan panye', toast_empty:'Panye ou vid', toast_sent:'✓ Mesaj voye.',
    curr_note:'* Pri referans. Chaje an CLP.',
    priv_title:'Politik Konfidansyalite', priv_body:'Done pèsonèl ou yo itilize sèlman pou trete kòmand ou ak kontakte ou. Nou pa pataje enfòmasyon ou yo ak twazyèm pati.',
    ret_title:'Politik Retou', ret_body:'Nou aksepte echanj nan 7 jou apre acha. Pwodwi a dwe san itilizasyon ak nan pakèt orijinal la. Kliyan peye frè livrezon echanj.',
    terms_title:'Kondisyon Jeneral', terms_body:'Lè ou achte nan CTG ou dakò ke pri yo an pesos chilyèn (CLP). Kòmand yo trete apre konfirmasyon pèman. Tan livrezon yo se estimasyon.',
    wa_order:'Bonjou CTG! Mwen vle pase yon kòmand', wa_total:'TOTAL', wa_ship:'+ Livrezon Starken',
    wa_trans:'Bonjou CTG! Mwen fenk fè yon vèsman', wa_detail:'Detay kòmand', wa_attach:'Mwen ajoute resi a.'
  }
};

// ——— FORMATO PRECIO ———
function formatPrice(clpAmount) {
  const rate = RATES[currentCurrency] || 1;
  const sym  = SYMBOLS[currentCurrency] || '$';
  const dec  = DECIMALS[currentCurrency] || 0;
  const val  = clpAmount * rate;
  if (dec === 0) return sym + ' ' + Math.round(val).toLocaleString('es-CL');
  return sym + ' ' + val.toFixed(dec).replace('.', ',');
}

// ——— ACTUALIZAR TODOS LOS PRECIOS ———
function updateAllPrices() {
  document.querySelectorAll('[data-price-clp]').forEach(el => {
    el.textContent = formatPrice(parseFloat(el.dataset.priceCLp || el.getAttribute('data-price-clp')));
  });
  const note = document.getElementById('currencyNote');
  if (note) {
    note.style.display = currentCurrency !== 'CLP' ? 'block' : 'none';
    note.textContent = T[currentLang].curr_note;
  }
  updateCartUI();
}

// ——— CAMBIAR MONEDA ———
function switchCurrency(c) {
  currentCurrency = c;
  localStorage.setItem('ctg_currency', c);
  // Actualizar botón visible
  document.getElementById('currBtn').innerHTML = c + ' <span class="lang-arrow">▾</span>';
  // Cerrar menú
  document.getElementById('currMenu').classList.remove('open');
  updateAllPrices();
}

function toggleCurrMenu() {
  document.getElementById('currMenu').classList.toggle('open');
  document.getElementById('langMenu').classList.remove('open');
  // Auto-cambiar moneda segun idioma
  switchCurrency(LANG_CURRENCY[lang]);
}

// ——— APLICAR IDIOMA ———
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
  // Actualizar nota de moneda si visible
  const note = document.getElementById('currencyNote');
  if (note && currentCurrency !== 'CLP') note.textContent = t.curr_note;
}

// ——— MONEDA AUTOMÁTICA POR IDIOMA ———
const LANG_CURRENCY = { es:"CLP", en:"USD", pt:"BRL", fr:"EUR", ht:"CLP" };

// ——— CAMBIAR IDIOMA ———
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

// Cerrar menús al click fuera
document.addEventListener('click', e => {
  const ls = document.getElementById('langSwitcher');
  const cs = document.getElementById('currSwitcher');
  if (ls && !ls.contains(e.target)) document.getElementById('langMenu').classList.remove('open');
  if (cs && !cs.contains(e.target)) document.getElementById('currMenu').classList.remove('open');
});

// ——— MODAL LEGAL ———
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

// ——— INIT ———
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
  showToast(`✓ ${nombre} ${T[currentLang].toast_add}`);
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
    el.innerHTML = `
      <div class="cart-item-emoji">${EMOJIS[item.categoria]||'🛍️'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-price">${formatPrice(item.precio)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
      </div>`;
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
  const t = T[currentLang];
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  document.getElementById('checkoutModalTotal').textContent = formatPrice(total);
  const cont = document.getElementById('checkoutModalItems');
  cont.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'checkout-modal-item';
    el.innerHTML = `
      <div class="co-item-left">
        <span class="co-item-emoji">${EMOJIS[item.categoria]||'🛍️'}</span>
        <div><div class="co-item-name">${item.nombre}</div><div class="co-item-qty">x${item.cantidad}</div></div>
      </div>
      <span class="co-item-price">${formatPrice(item.precio * item.cantidad)}</span>`;
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

// ——— WHATSAPP EN IDIOMA SELECCIONADO ———
function payWithWhatsApp() {
  const t = T[currentLang];
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  const det = cart.map(i => `• ${i.cantidad}x ${i.nombre} — ${formatPrice(i.precio*i.cantidad)}`).join('\n');
  const msg = encodeURIComponent(`${t.wa_order}:\n\n${det}\n\n💰 ${t.wa_total}: ${formatPrice(total)}\n🚚 ${t.wa_ship}`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
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
  const t = T[currentLang];
  const total = cart.reduce((s,i) => s + i.precio * i.cantidad, 0);
  const det = cart.map(i => `• ${i.cantidad}x ${i.nombre}`).join('\n');
  const msg = encodeURIComponent(`${t.wa_trans} ${formatPrice(total)}.\n\n${t.wa_detail}:\n${det}\n\n${t.wa_attach}`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
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
