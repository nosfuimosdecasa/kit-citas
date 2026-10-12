// =====================================================================
// config.js  -  AQUÍ SE CAMBIAN TODOS LOS DATOS DEL NEGOCIO
// =====================================================================
// REGLAS PARA NO ROMPER EL ARCHIVO:
//   1. Los textos van entre comillas dobles:  "así"
//   2. Cada línea termina con una coma:  ,
//   3. NO borres las llaves { } ni los corchetes [ ] ni los dos puntos :
//   4. Solo cambia lo que está DENTRO de las comillas (o el número).
//
// DATOS DE DEMOSTRACIÓN: todo lo que ves aquí es FICTICIO.
// Antes de entregar la web a un cliente, reemplaza todo con sus datos
// reales y cambia "modoDemo" a false.
// =====================================================================

const CONFIG = {

  // ---------------------------------------------------------------
  // MODO DEMOSTRACIÓN
  // true  = muestra una franja amarilla que dice "sitio de demostración".
  // false = quita la franja (úsalo con datos reales del cliente).
  // Escribe solo true o false, SIN comillas.
  // ---------------------------------------------------------------
  modoDemo: true,

  // ---------------------------------------------------------------
  // NOMBRE DEL NEGOCIO
  // Formato: texto entre comillas. Ejemplo: "Barbería El Corte"
  // ---------------------------------------------------------------
  nombreNegocio: "Negocio de Ejemplo (DEMO)",

  // ---------------------------------------------------------------
  // GIRO O TIPO DE NEGOCIO
  // Formato: texto corto. Ejemplos: "Barbería", "Estética", "Gimnasio"
  // Si no lo quieres mostrar, déjalo así: ""
  // ---------------------------------------------------------------
  giro: "Giro de ejemplo",

  // ---------------------------------------------------------------
  // PRESENTACIÓN BREVE (1 o 2 frases)
  // Formato: texto entre comillas, en una sola línea.
  // Si no la quieres mostrar, déjala así: ""
  // ---------------------------------------------------------------
  presentacion: "Este es un texto de ejemplo. Aquí va una presentación breve del negocio, en una o dos frases.",

  // ---------------------------------------------------------------
  // TELÉFONO DE WHATSAPP
  // Formato: SOLO NÚMEROS, entre comillas, sin espacios, guiones, paréntesis ni "+".
  //   - Opción A (recomendada): código de país + 10 dígitos. Ejemplo México: "524771234567"
  //   - Opción B: solo los 10 dígitos. Ejemplo: "4771234567" (la página agrega el 52).
  // El número de abajo es FALSO. Cámbialo por el del negocio.
  // ---------------------------------------------------------------
  telefonoWhatsApp: "525500000000",

  // ---------------------------------------------------------------
  // MENSAJE PREESCRITO DE WHATSAPP
  // Es el texto que aparecerá escrito cuando el cliente abra WhatsApp.
  // Puedes escribir {negocio} y se reemplazará por el nombre del negocio.
  // Si lo dejas vacío (""), se usará un mensaje por defecto.
  // ---------------------------------------------------------------
  mensajeWhatsApp: "Hola, me gustaría solicitar una cita en {negocio}. ¿Qué horarios tienen disponibles?",

  // ---------------------------------------------------------------
  // COLORES
  // Formato: "#" + 6 caracteres (números 0-9 y letras a-f).
  // Ejemplos: "#1f2937" (gris oscuro), "#e11d48" (rojo), "#0d9488" (verde azulado)
  // Para elegir colores: busca "selector de color" en Google y copia el código HEX.
  //   colorPrincipal = color de fondo de la parte superior y de las etiquetas de precio.
  //   colorAcento    = color de los botones (el botón de WhatsApp).
  // Usa dos colores que contrasten entre sí.
  // ---------------------------------------------------------------
  colorPrincipal: "#1f2937",
  colorAcento: "#f59e0b",

  // ---------------------------------------------------------------
  // LOGO
  // Formato: nombre del archivo entre comillas, tal como lo subiste a GitHub.
  // Ejemplo: "logo.png"  (el archivo debe estar en la misma carpeta que index.html)
  // Respeta mayúsculas y minúsculas: "Logo.png" NO es igual a "logo.png".
  // Si todavía no tienes logo, deja: ""
  // ---------------------------------------------------------------
  logo: "",

  // ---------------------------------------------------------------
  // SERVICIOS Y PRECIOS
  // Cada servicio es un bloque entre llaves { } separado por coma.
  //   nombre      : texto entre comillas.
  //   precio      : SOLO el número, SIN comillas, SIN signo $ ni comas.
  //                 Ejemplo: 150   o   149.50
  //                 (la página lo mostrará como $150 o $149.50 MXN)
  //                 Si no quieres mostrar precio, escribe: null
  //   descripcion : texto corto. Es opcional; para omitirla deja: ""
  // PARA AÑADIR un servicio: copia un bloque completo { ... }, y pégalo
  //   después de la coma del bloque anterior.
  // PARA QUITAR uno: borra el bloque completo { ... } y su coma.
  // ---------------------------------------------------------------
  servicios: [
    { nombre: "Servicio de ejemplo 1", precio: 150, descripcion: "Descripción de ejemplo." },
    { nombre: "Servicio de ejemplo 2", precio: 250, descripcion: "" },
    { nombre: "Servicio de ejemplo 3", precio: 99.5, descripcion: "Otro texto de ejemplo." },
    { nombre: "Servicio de ejemplo 4", precio: null, descripcion: "Este no muestra precio." }
  ],

  // ---------------------------------------------------------------
  // HORARIO DE ATENCIÓN
  // Cada línea es un bloque { dia: "...", horas: "..." } separado por coma.
  // En "horas" escribe el horario en texto. Ejemplos: "10:00 - 19:00" o "Cerrado"
  // Puedes agrupar días: dia: "Lunes a Viernes"
  // Para no mostrar horario, deja la lista vacía así:  horario: [],
  // ---------------------------------------------------------------
  horario: [
    { dia: "Lunes a Viernes", horas: "10:00 - 19:00" },
    { dia: "Sábado", horas: "10:00 - 15:00" },
    { dia: "Domingo", horas: "Cerrado" }
  ],

  // ---------------------------------------------------------------
  // DIRECCIÓN
  // Formato: texto entre comillas en una sola línea.
  // Si no quieres mostrarla, deja: ""
  // ---------------------------------------------------------------
  direccion: "Calle de Ejemplo 123, Colonia Ejemplo, Ciudad de Ejemplo (dirección ficticia)",

  // ---------------------------------------------------------------
  // ENLACE DE GOOGLE MAPS
  // Formato: enlace completo que EMPIECE con https://
  // Cómo obtenerlo: en Google Maps busca el negocio > botón "Compartir"
  // > "Copiar vínculo" y pégalo aquí entre comillas.
  // Si no lo tienes, deja: ""  (el botón de Maps no aparecerá)
  // El de abajo es genérico (abre Google Maps, sin ubicación real).
  // ---------------------------------------------------------------
  enlaceMaps: "https://www.google.com/maps",

  // ---------------------------------------------------------------
  // ENLACE DE INSTAGRAM
  // Formato: enlace completo que EMPIECE con https://
  // Ejemplo: "https://www.instagram.com/nombredeusuario/"
  // Si no tiene Instagram, deja: ""  (esa sección desaparece)
  // El de abajo es genérico (abre la portada de Instagram).
  // ---------------------------------------------------------------
  enlaceInstagram: "https://www.instagram.com/"

};
