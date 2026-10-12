// =====================================================================
// config.js - AQUÍ SE CAMBIAN LOS DATOS DEL NEGOCIO
// Reglas: textos entre comillas "así"; cada línea termina en coma ,
// No borres llaves { } ni corchetes [ ] ni dos puntos :
// Los datos de abajo son de DEMOSTRACIÓN (ficticios), salvo el formulario.
// =====================================================================

const CONFIG = {

  // true = muestra aviso amarillo de "demostración". false = lo quita (sin comillas).
  modoDemo: true,

  // Nombre del negocio. Ejemplo: "Barbería El Corte"
  nombreNegocio: "Negocio de Ejemplo (DEMO)",

  // Tipo de negocio: "Barbería", "Estética", "Gimnasio"... ("" para ocultar)
  giro: "Giro de ejemplo",

  // Descripción breve, 1 o 2 frases en una línea ("" para ocultar)
  presentacion: "Este es un texto de ejemplo. Aquí va una presentación breve del negocio.",

  // WhatsApp: solo números, sin espacios ni +. Con código de país ("524771234567")
  // o solo 10 dígitos ("4771234567"). Este número es FALSO.
  telefonoWhatsApp: "525500000000",

  // Mensaje preescrito. {negocio} se reemplaza por el nombre. "" = mensaje por defecto.
  mensajeWhatsApp: "Hola, me gustaría solicitar una cita en {negocio}. ¿Qué horarios tienen disponibles?",

  // Colores: "#" + 6 caracteres. Principal = encabezado y precios. Acento = botones.
  colorPrincipal: "#1f2937",
  colorAcento: "#f59e0b",

  // Logo: ruta del archivo tal como está en GitHub. "" = sin logo.
  logo: "assets/logo.png",

  // Esquinas redondeadas del logo: true o false (sin comillas)
  logoRedondeado: true,

  // Servicios. precio: solo número (150 o 149.5), o null para no mostrarlo.
  // descripcion: texto o "". Para añadir, copia una línea completa. Para quitar, bórrala.
  servicios: [
    { nombre: "Servicio de ejemplo 1", precio: 150, descripcion: "Descripción de ejemplo." },
    { nombre: "Servicio de ejemplo 2", precio: 250, descripcion: "" },
    { nombre: "Servicio de ejemplo 3", precio: 99.5, descripcion: "Otro texto de ejemplo." },
    { nombre: "Servicio de ejemplo 4", precio: null, descripcion: "Este no muestra precio." }
  ],

  // Formulario de Google Forms.
  // formularioUrlIncrustar: el src="..." del código de inserción (termina en ?embedded=true).
  //   Si se llena, el formulario se muestra dentro de la página.
  // formularioUrlPublica: el enlace de compartir. Si solo llenas esta, sale un botón
  //   "Solicitar cita" que abre el formulario en otra pestaña.
  // Si dejas las dos vacías, la página dice que el formulario aún no está configurado.
  // NO pongas aquí el enlace de la hoja de respuestas.
  formularioUrlPublica: "https://docs.google.com/forms/d/e/1FAIpQLSfDXps4rm2HBE6cMAMt-v2ZKn6IDxthkk2sK9IkFZv4KITTfg/viewform",
  formularioUrlIncrustar: "https://docs.google.com/forms/d/e/1FAIpQLSfDXps4rm2HBE6cMAMt-v2ZKn6IDxthkk2sK9IkFZv4KITTfg/viewform?embedded=true",

  // Horario. En "horas": "10:00 - 19:00" o "Cerrado". Para ocultarlo: horario: [],
  horario: [
    { dia: "Lunes a Viernes", horas: "10:00 - 19:00" },
    { dia: "Sábado", horas: "10:00 - 15:00" },
    { dia: "Domingo", horas: "Cerrado" }
  ],

  // Dirección en una línea ("" para ocultar)
  direccion: "Calle de Ejemplo 123, Colonia Ejemplo, Ciudad de Ejemplo (dirección ficticia)",

  // Google Maps: enlace completo que empiece con https:// ("" para ocultar)
  enlaceMaps: "https://www.google.com/maps",

  // Instagram: enlace completo que empiece con https:// ("" para ocultar)
  enlaceInstagram: "https://www.instagram.com/"

};
