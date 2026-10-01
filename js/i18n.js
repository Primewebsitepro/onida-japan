// ---------------------------------------------------------------------------
// Simple EN / ES dictionary-based translation
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = "50765129615"; // +507 6512-9615

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "header.call": "Call",
    "header.whatsapp": "WhatsApp",

    "hero.eyebrow": "Onida Japan Authorized Distributor · Panama",
    "hero.title": "Technology Beyond Imagination",
    "hero.lead": "From air conditioners and washing machines to refrigerators, air coolers and TVs — browse our catalog and reach us in one tap by phone or WhatsApp.",
    "hero.cta.products": "Browse Products",
    "hero.cta.whatsapp": "Chat on WhatsApp",
    "hero.s2.eyebrow": "Onida Smart TVs",
    "hero.s2.title": "4K Picture That Brings Every Colour to Life",
    "hero.s2.lead": "Ultra HD screens, powerful built-in sound and karaoke — Onida TVs from 43 to 100 inches.",
    "hero.s2.cta": "View Televisions",
    "hero.s3.eyebrow": "Onida Air Conditioners",
    "hero.s3.title": "Cool Comfort Built for Panama's Climate",
    "hero.s3.lead": "Inverter split ACs from 1 to 2 tons, with copper coils and powerful cooling even on the hottest days.",
    "hero.s3.cta": "View Air Conditioners",
    "hero.s4.eyebrow": "Onida Home Appliances",
    "hero.s4.title": "Everything for Your Home, One Brand",
    "hero.s4.lead": "Washing machines, refrigerators and air coolers — ask for price and availability on WhatsApp.",
    "hero.s4.cta": "View All Products",
    "hero.stat1.n": "5",
    "hero.stat1.l": "Product Categories",
    "hero.stat2.n": "95",
    "hero.stat2.l": "Products Listed",
    "hero.stat3.n": "100%",
    "hero.stat3.l": "WhatsApp Support",

    "cats.eyebrow": "Catalog",
    "cats.title": "Shop by category",
    "cats.lead": "Explore the Onida range of air conditioners, washing machines, refrigerators, air coolers and TVs.",
    "cats.viewall": "View all products",

    "spotlight.eyebrow": "Featured",
    "spotlight.title": "Popular picks across our catalog",
    "spotlight.lead": "A quick look at some of the products customers ask about most.",
    "spotlight.viewall": "View all",

    "homeabout.eyebrow": "Who We Are",
    "homeabout.title": "Your Onida Japan partner in Panama",
    "homeabout.lead": "Corporación COER C.A. S.A. brings the Onida Japan catalog to Panama — air conditioners, washing machines, refrigerators, air coolers and TVs, backed by a team you can actually reach by phone or WhatsApp, not a call center.",
    "homeabout.cta": "More About Us",

    "steps.eyebrow": "How It Works",
    "steps.title": "Ordering is simple",
    "steps.lead": "No accounts, no checkout — just a quick conversation with our team.",
    "step1.t": "Browse the Catalog",
    "step1.d": "Find what you need across 5 categories of Onida home appliances and TVs.",
    "step2.t": "Call or WhatsApp Us",
    "step2.d": "Tap the button on any product to reach our team directly.",
    "step3.t": "Confirm & Receive",
    "step3.d": "We confirm availability, pricing and delivery details with you personally.",

    "features.eyebrow": "Why Onida Japan Panama",
    "features.title": "Built around fast, direct service",
    "features.f1.t": "Direct WhatsApp Ordering",
    "features.f1.d": "Every product connects straight to WhatsApp — no accounts, no waiting.",
    "features.f2.t": "Nationwide Coverage",
    "features.f2.d": "We serve customers across Panama from our Costa del Este office.",
    "features.f3.t": "Wide Product Range",
    "features.f3.d": "5 categories: air conditioners, washing machines, refrigerators, air coolers and TVs.",
    "features.f4.t": "Real People, Real Support",
    "features.f4.d": "Call or message us directly — a real person answers, not a bot.",

    "cta.title": "Have a question about a product?",
    "cta.lead": "Our team replies fast on WhatsApp — no forms, no waiting on hold.",
    "cta.button": "Message Us Now",

    "products.eyebrow": "Full Catalog",
    "products.title": "Product Categories",
    "products.lead": "Tap Call or WhatsApp on any item to enquire, or open a product to see its full details.",
    "filter.all": "All",
    "empty.title": "No products in this category yet",
    "empty.lead": "New items are added regularly — message us on WhatsApp and we'll help you find what you need.",
    "product.call": "Call",
    "product.whatsapp": "WhatsApp",
    "product.enquire.msg": "Hello! I'm interested in: ",

    "about.eyebrow": "About Us",
    "about.title": "Corporación COER C.A. S.A.",
    "about.lead": "We are the Onida Japan distributor for the Panamanian market, bringing a wide catalog of air conditioners, washing machines, refrigerators, air coolers and TVs to customers across the country — backed by direct, no-hassle WhatsApp support.",
    "about.stat1.n": "5",
    "about.stat1.l": "Categories Carried",
    "about.stat2.n": "95",
    "about.stat2.l": "Products Available",
    "about.stat3.n": "24/7",
    "about.stat3.l": "WhatsApp Enquiries",
    "about.v.title": "What we stand for",
    "about.v1.t": "Quality First",
    "about.v1.d": "We select products for reliability and everyday performance, not just price.",
    "about.v2.t": "Direct Communication",
    "about.v2.d": "No call centers or ticket queues — talk to us directly by phone or WhatsApp.",
    "about.v3.t": "Local Presence",
    "about.v3.d": "Based in Costa del Este, Panamá, and proud to serve customers nationwide.",
    "about.v4.t": "Growing Catalog",
    "about.v4.d": "We're always expanding our range across every category we carry.",

    "about.story.eyebrow": "Our Story",
    "about.story.title": "Technology Beyond Imagination",
    "about.story.p1": "Onida Japan brings together precision engineering and everyday reliability — a philosophy reflected in every product we bring to Panama, from the compact air cooler to the largest home appliance.",
    "about.story.p2": "Corporación COER C.A. S.A. represents the brand locally, pairing a wide catalog with a service style built for how Panamanians actually shop: a quick call or a WhatsApp message, not a checkout queue.",

    "about.cats.eyebrow": "At a Glance",
    "about.cats.title": "Everything we carry",
    "about.cats.lead": "Five departments, one team to talk to.",

    "faq.eyebrow": "Support",
    "faq.title": "Frequently Asked Questions",
    "faq.lead": "Answers to what customers ask us most. Still have a question? Message us on WhatsApp.",
    "faq.q1": "How do I order a product?",
    "faq.a1": "Browse the catalog and tap Call or WhatsApp on any product card. Our team confirms availability, pricing and delivery with you directly — no online checkout needed.",
    "faq.q2": "Do you deliver across Panama?",
    "faq.a2": "Yes, we coordinate delivery nationwide from our Costa del Este office. Message us on WhatsApp with your location and we'll confirm the details.",
    "faq.q3": "What payment methods do you accept?",
    "faq.a3": "Payment options are confirmed directly with our sales team when you place your order — just ask when you reach out on WhatsApp or by phone.",
    "faq.q4": "Do products come with a warranty?",
    "faq.a4": "Products carry manufacturer warranty coverage. Our team will share the specific terms for each item when you enquire.",
    "faq.q5": "Can I visit your office in person?",
    "faq.a5": "Of course — we're at Peninsula Center, Office 406, Costa del Este, República de Panamá. We recommend messaging ahead on WhatsApp.",
    "faq.q6": "How do I get support after my purchase?",
    "faq.a6": "Write to us at director@onida.shop or message the same WhatsApp number.",
    "faq.q7": "Are prices listed on the website?",
    "faq.a7": "We keep pricing and availability current directly with our team — message us on WhatsApp or call for the latest price on any product.",
    "faq.q8": "Do you ship outside Panama?",
    "faq.a8": "Right now we serve customers within Panama. For special requests, reach out on WhatsApp and we'll see how we can help.",

    "pd.sku": "Product code",
    "pd.price.note": "Price on request — message us for current pricing, stock and delivery.",
    "pd.action.enquire": "Send an Enquiry",
    "pd.specs.title": "Specifications",
    "pd.features.title": "Features",
    "pd.spec.category": "Category",
    "pd.enquiry.title": "Enquire about this product",
    "pd.enquiry.lead": "Send us the details and we will reply on WhatsApp with pricing and availability.",

    "contact.eyebrow": "Get in Touch",
    "contact.title": "Contact Us",
    "contact.lead": "Reach us by phone, WhatsApp or email — or send a message below and we'll open WhatsApp with it ready to send.",
    "contact.address.h": "Office Address",
    "contact.phone.h": "Phone & WhatsApp",
    "contact.email.h": "Email",
    "contact.action.call": "Call Now",
    "contact.form.name": "Full name",
    "contact.form.phone": "Phone number",
    "contact.form.email": "Email (optional)",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Tell us what you're looking for...",
    "contact.form.submit": "Submit",
    "contact.form.note": "This opens WhatsApp with your message pre-filled — nothing is stored on our servers.",

    "footer.about.p": "Onida Japan distributor for Panama. Air conditioners, washing machines, refrigerators, air coolers and TVs — one WhatsApp message away.",
    "footer.pages": "Pages",
    "footer.categories": "Categories",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.devby": "Website Design & Development by",
    "catalog.filters": "Filters",
    "catalog.categories": "Categories",
    "catalog.all": "All categories",
    "catalog.clear": "Clear filters",
    "catalog.showing": "Showing {shown} of {total} products",
    "catalog.showing.one": "Showing 1 of 1 product",
    "catalog.loadmore": "Load more products",
    "catalog.none.title": "No products match these filters",
    "catalog.none.lead": "Try removing a filter, or message us on WhatsApp and we'll help you find it.",
    "pd.msg.prefix": "Hello! I'd like to enquire about: ",
    "pd.msg.code": " — code ",
    "pd.related.title": "Related products",
    "aria.image": "Image",
    "aria.scrollprev": "Scroll left",
    "aria.scrollnext": "Scroll right",
    "product.brand": "Brand",
    "aria.menu": "Menu",
    "aria.prev": "Previous slide",
    "aria.next": "Next slide",
    "aria.slide1": "Slide 1",
    "aria.slide2": "Slide 2",
    "aria.slide3": "Slide 3",
    "aria.slide4": "Slide 4",
    "aria.breadcrumb": "Breadcrumb",
    "aria.thumb1": "Full view",
    "aria.thumb2": "Upright and brace detail",
    "aria.thumb3": "Slotted arm detail",
    "alt.home.appliances": "Onida Japan home appliances",
    "alt.about.hero": "Onida Japan air conditioning in a Panamanian home",
    "alt.about.story": "Onida Japan — Technology Beyond Imagination",
    "alt.pd.main": "Compressor stand for air conditioning, white steel bracket pair",
    "addr.office": "Office 406",
    "footer.cat1": "Air Conditioners",
    "footer.cat2": "Washing Machines",
    "footer.cat3": "Refrigerators",
    "footer.cat4": "Televisions",
    "title.home": "Onida Japan Panamá — Home Appliances & TV Distributor",
    "title.about": "About Us — Onida Japan Panamá",
    "title.products": "Products — Onida Japan Panamá",
    "title.faq": "FAQ — Onida Japan Panamá",
    "title.contact": "Contact — Onida Japan Panamá",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.products": "Productos",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "header.call": "Llamar",
    "header.whatsapp": "WhatsApp",

    "hero.eyebrow": "Distribuidor Autorizado Onida Japan · Panamá",
    "hero.title": "Tecnología Más Allá de la Imaginación",
    "hero.lead": "Desde aires acondicionados y lavadoras hasta neveras, enfriadores de aire y televisores — explora nuestro catálogo y contáctanos al instante por teléfono o WhatsApp.",
    "hero.cta.products": "Ver Productos",
    "hero.cta.whatsapp": "Chatear por WhatsApp",
    "hero.s2.eyebrow": "Televisores Inteligentes Onida",
    "hero.s2.title": "Imagen 4K que Da Vida a Cada Color",
    "hero.s2.lead": "Pantallas Ultra HD, sonido potente integrado y karaoke — televisores Onida de 43 a 100 pulgadas.",
    "hero.s2.cta": "Ver Televisores",
    "hero.s3.eyebrow": "Aires Acondicionados Onida",
    "hero.s3.title": "Frescura Pensada para el Clima de Panamá",
    "hero.s3.lead": "Aires split Inverter de 1 a 2 toneladas, con bobina de cobre y enfriamiento potente incluso en los días más calurosos.",
    "hero.s3.cta": "Ver Aires Acondicionados",
    "hero.s4.eyebrow": "Electrodomésticos Onida",
    "hero.s4.title": "Todo para tu Hogar, una Sola Marca",
    "hero.s4.lead": "Lavadoras, neveras y enfriadores de aire — consulta precio y disponibilidad por WhatsApp.",
    "hero.s4.cta": "Ver Todos los Productos",
    "hero.stat1.n": "5",
    "hero.stat1.l": "Categorías de Productos",
    "hero.stat2.n": "95",
    "hero.stat2.l": "Productos Listados",
    "hero.stat3.n": "100%",
    "hero.stat3.l": "Soporte por WhatsApp",

    "cats.eyebrow": "Catálogo",
    "cats.title": "Compra por categoría",
    "cats.lead": "Explora la gama Onida de aires acondicionados, lavadoras, neveras, enfriadores de aire y televisores.",
    "cats.viewall": "Ver todos los productos",

    "spotlight.eyebrow": "Destacados",
    "spotlight.title": "Selección popular de nuestro catálogo",
    "spotlight.lead": "Un vistazo a algunos de los productos más consultados por nuestros clientes.",
    "spotlight.viewall": "Ver todos",

    "homeabout.eyebrow": "Quiénes Somos",
    "homeabout.title": "Tu socio Onida Japan en Panamá",
    "homeabout.lead": "Corporación COER C.A. S.A. trae el catálogo Onida Japan a Panamá — aires acondicionados, lavadoras, neveras, enfriadores de aire y televisores, respaldados por un equipo al que realmente puedes contactar por teléfono o WhatsApp, no un centro de llamadas.",
    "homeabout.cta": "Más Sobre Nosotros",

    "steps.eyebrow": "Cómo Funciona",
    "steps.title": "Pedir es simple",
    "steps.lead": "Sin cuentas, sin checkout — solo una conversación rápida con nuestro equipo.",
    "step1.t": "Explora el Catálogo",
    "step1.d": "Encuentra lo que necesitas en 5 categorías de electrodomésticos y televisores Onida.",
    "step2.t": "Llámanos o Escríbenos",
    "step2.d": "Toca el botón en cualquier producto para contactar a nuestro equipo directamente.",
    "step3.t": "Confirma y Recibe",
    "step3.d": "Confirmamos disponibilidad, precio y entrega contigo personalmente.",

    "features.eyebrow": "Por qué Onida Japan Panamá",
    "features.title": "Un servicio rápido y directo",
    "features.f1.t": "Pedidos Directos por WhatsApp",
    "features.f1.d": "Cada producto se conecta directo a WhatsApp — sin cuentas, sin esperas.",
    "features.f2.t": "Cobertura Nacional",
    "features.f2.d": "Atendemos a clientes en todo Panamá desde nuestra oficina en Costa del Este.",
    "features.f3.t": "Amplia Variedad",
    "features.f3.d": "5 categorías: aires acondicionados, lavadoras, neveras, enfriadores de aire y televisores.",
    "features.f4.t": "Personas Reales, Soporte Real",
    "features.f4.d": "Llámanos o escríbenos directamente — te atiende una persona, no un bot.",

    "cta.title": "¿Tienes una pregunta sobre un producto?",
    "cta.lead": "Nuestro equipo responde rápido por WhatsApp — sin formularios ni esperas.",
    "cta.button": "Escríbenos Ahora",

    "products.eyebrow": "Catálogo Completo",
    "products.title": "Categorías de Productos",
    "products.lead": "Toca Llamar o WhatsApp en cualquier producto para consultar, o abre un producto para ver todos sus detalles.",
    "filter.all": "Todos",
    "empty.title": "Aún no hay productos en esta categoría",
    "empty.lead": "Agregamos artículos nuevos con frecuencia — escríbenos por WhatsApp y te ayudamos a encontrar lo que buscas.",
    "product.call": "Llamar",
    "product.whatsapp": "WhatsApp",
    "product.enquire.msg": "¡Hola! Estoy interesado en: ",

    "about.eyebrow": "Nosotros",
    "about.title": "Corporación COER C.A. S.A.",
    "about.lead": "Somos el distribuidor Onida Japan para el mercado panameño, llevando un amplio catálogo de aires acondicionados, lavadoras, neveras, enfriadores de aire y televisores a clientes en todo el país — con soporte directo por WhatsApp.",
    "about.stat1.n": "5",
    "about.stat1.l": "Categorías Disponibles",
    "about.stat2.n": "95",
    "about.stat2.l": "Productos Disponibles",
    "about.stat3.n": "24/7",
    "about.stat3.l": "Consultas por WhatsApp",
    "about.v.title": "Lo que nos representa",
    "about.v1.t": "Calidad Primero",
    "about.v1.d": "Seleccionamos productos por su confiabilidad y desempeño diario, no solo por precio.",
    "about.v2.t": "Comunicación Directa",
    "about.v2.d": "Sin centros de llamadas ni tickets — habla con nosotros directo por teléfono o WhatsApp.",
    "about.v3.t": "Presencia Local",
    "about.v3.d": "Con sede en Costa del Este, Panamá, orgullosos de servir a todo el país.",
    "about.v4.t": "Catálogo en Crecimiento",
    "about.v4.d": "Ampliamos constantemente nuestra variedad en cada categoría que manejamos.",

    "about.story.eyebrow": "Nuestra Historia",
    "about.story.title": "Tecnología Más Allá de la Imaginación",
    "about.story.p1": "Onida Japan combina ingeniería de precisión con confiabilidad diaria — una filosofía que se refleja en cada producto que llevamos a Panamá, desde el enfriador de aire más compacto hasta el electrodoméstico más grande.",
    "about.story.p2": "Corporación COER C.A. S.A. representa la marca localmente, combinando un amplio catálogo con un estilo de servicio pensado para cómo compran los panameños: una llamada rápida o un mensaje de WhatsApp, sin filas de checkout.",

    "about.cats.eyebrow": "De un Vistazo",
    "about.cats.title": "Todo lo que ofrecemos",
    "about.cats.lead": "Cinco departamentos, un solo equipo con quien hablar.",

    "faq.eyebrow": "Soporte",
    "faq.title": "Preguntas Frecuentes",
    "faq.lead": "Respuestas a lo que más nos preguntan. ¿Tienes otra duda? Escríbenos por WhatsApp.",
    "faq.q1": "¿Cómo pido un producto?",
    "faq.a1": "Explora el catálogo y toca Llamar o WhatsApp en cualquier tarjeta de producto. Nuestro equipo confirma disponibilidad, precio y entrega directamente contigo — sin checkout en línea.",
    "faq.q2": "¿Hacen entregas en todo Panamá?",
    "faq.a2": "Sí, coordinamos entregas a nivel nacional desde nuestra oficina en Costa del Este. Escríbenos por WhatsApp con tu ubicación y confirmamos los detalles.",
    "faq.q3": "¿Qué métodos de pago aceptan?",
    "faq.a3": "Las opciones de pago se confirman directamente con nuestro equipo de ventas al hacer tu pedido — solo pregunta cuando nos escribas por WhatsApp o llames.",
    "faq.q4": "¿Los productos tienen garantía?",
    "faq.a4": "Los productos cuentan con garantía del fabricante. Nuestro equipo te compartirá los términos específicos de cada artículo cuando consultes.",
    "faq.q5": "¿Puedo visitar su oficina en persona?",
    "faq.a5": "Claro que sí — estamos en Peninsula Center, Oficina 406, Costa del Este, República de Panamá. Te recomendamos escribirnos antes por WhatsApp.",
    "faq.q6": "¿Cómo obtengo soporte después de mi compra?",
    "faq.a6": "Escríbenos a director@onida.shop o por el mismo número de WhatsApp.",
    "faq.q7": "¿Los precios están listados en el sitio web?",
    "faq.a7": "Mantenemos precios y disponibilidad actualizados directamente con nuestro equipo — escríbenos por WhatsApp o llama para conocer el precio vigente de cualquier producto.",
    "faq.q8": "¿Hacen envíos fuera de Panamá?",
    "faq.a8": "Por ahora atendemos solo dentro de Panamá. Para solicitudes especiales, escríbenos por WhatsApp y vemos cómo podemos ayudarte.",

    "pd.sku": "Código de producto",
    "pd.price.note": "Precio a consultar — escríbenos para conocer precio, disponibilidad y entrega.",
    "pd.action.enquire": "Enviar Consulta",
    "pd.specs.title": "Especificaciones",
    "pd.features.title": "Características",
    "pd.spec.category": "Categoría",
    "pd.enquiry.title": "Consulta sobre este producto",
    "pd.enquiry.lead": "Envíanos los datos y te responderemos por WhatsApp con precio y disponibilidad.",

    "contact.eyebrow": "Contáctanos",
    "contact.title": "Contacto",
    "contact.lead": "Contáctanos por teléfono, WhatsApp o correo — o envía un mensaje abajo y abriremos WhatsApp con él listo para enviar.",
    "contact.address.h": "Dirección de Oficina",
    "contact.phone.h": "Teléfono y WhatsApp",
    "contact.email.h": "Correo",
    "contact.action.call": "Llamar Ahora",
    "contact.form.name": "Nombre completo",
    "contact.form.phone": "Número de teléfono",
    "contact.form.email": "Correo (opcional)",
    "contact.form.message": "Mensaje",
    "contact.form.message.ph": "Cuéntanos qué estás buscando...",
    "contact.form.submit": "Enviar",
    "contact.form.note": "Esto abre WhatsApp con tu mensaje ya escrito — no guardamos nada en nuestros servidores.",

    "footer.about.p": "Distribuidor Onida Japan en Panamá. Aires acondicionados, lavadoras, neveras, enfriadores de aire y televisores — a un mensaje de WhatsApp.",
    "footer.pages": "Páginas",
    "footer.categories": "Categorías",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.devby": "Diseño y Desarrollo Web por",
    "catalog.filters": "Filtros",
    "catalog.categories": "Categorías",
    "catalog.all": "Todas las categorías",
    "catalog.clear": "Limpiar filtros",
    "catalog.showing": "Mostrando {shown} de {total} productos",
    "catalog.showing.one": "Mostrando 1 de 1 producto",
    "catalog.loadmore": "Cargar más productos",
    "catalog.none.title": "Ningún producto coincide con estos filtros",
    "catalog.none.lead": "Prueba quitando algún filtro, o escríbenos por WhatsApp y te ayudamos a encontrarlo.",
    "pd.msg.prefix": "¡Hola! Quisiera consultar sobre: ",
    "pd.msg.code": " — código ",
    "pd.related.title": "Productos relacionados",
    "aria.image": "Imagen",
    "aria.scrollprev": "Desplazar a la izquierda",
    "aria.scrollnext": "Desplazar a la derecha",
    "product.brand": "Marca",
    "aria.menu": "Menú",
    "aria.prev": "Diapositiva anterior",
    "aria.next": "Diapositiva siguiente",
    "aria.slide1": "Diapositiva 1",
    "aria.slide2": "Diapositiva 2",
    "aria.slide3": "Diapositiva 3",
    "aria.slide4": "Diapositiva 4",
    "aria.breadcrumb": "Ruta de navegación",
    "aria.thumb1": "Vista completa",
    "aria.thumb2": "Detalle del montante y el refuerzo",
    "aria.thumb3": "Detalle del brazo ranurado",
    "alt.home.appliances": "Electrodomésticos Onida Japan",
    "alt.about.hero": "Aire acondicionado Onida Japan en un hogar panameño",
    "alt.about.story": "Onida Japan — Tecnología Más Allá de la Imaginación",
    "alt.pd.main": "Soporte para compresor de aire acondicionado, par de soportes de acero blanco",
    "addr.office": "Oficina 406",
    "footer.cat1": "Aires acondicionados",
    "footer.cat2": "Lavadoras",
    "footer.cat3": "Neveras",
    "footer.cat4": "Televisores",
    "title.home": "Onida Japan Panamá — Electrodomésticos y Televisores",
    "title.about": "Nosotros — Onida Japan Panamá",
    "title.products": "Productos — Onida Japan Panamá",
    "title.faq": "Preguntas Frecuentes — Onida Japan Panamá",
    "title.contact": "Contacto — Onida Japan Panamá",
  }
};

function getLang() {
  try { return localStorage.getItem("onida_lang") || "es"; } catch (e) { return "es"; }
}

function setLang(lang) {
  try { localStorage.setItem("onida_lang", lang); } catch (e) {}
  applyLang(lang);
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");

  const titleKey = document.documentElement.getAttribute("data-title-key");
  if (titleKey && dict[titleKey] !== undefined) document.title = dict[titleKey];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  // Re-render product grid / category grid if that page provides a hook
  if (typeof window.onLangChange === "function") window.onLangChange(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  if (navToggle && header) {
    navToggle.addEventListener("click", () => header.classList.toggle("is-open"));
  }
});

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
