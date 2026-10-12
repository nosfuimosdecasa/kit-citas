# kit-citas

Plantilla web sencilla para negocios locales que reciben citas (barberías, estéticas, gimnasios, etc.).

## 1. ¿Qué hace esta plantilla?

Muestra una página web con:
- Nombre y logo del negocio, y una presentación breve.
- Servicios y precios en pesos mexicanos.
- Un botón de **WhatsApp** que abre una conversación con un mensaje ya escrito.
- Horario de atención, dirección y botón de Google Maps.
- Enlace de Instagram.

Se adapta a celulares y computadoras. **Todos los datos se cambian en un solo archivo: `config.js`.**

⚠️ **Importante:** el botón de WhatsApp solo *inicia una conversación*. No reserva ni confirma citas automáticamente. La cita se confirma cuando el negocio responde.

## 2. ¿Qué archivos contiene?

| Archivo | Para qué sirve | ¿Lo edito? |
|---|---|---|
| `index.html` | La página web (diseño y lógica). | No. |
| `config.js` | Los datos del negocio. | **Sí, es el único que cambias.** |
| `README.md` | Esta guía. | No. |
| `logo.png` (opcional) | El logo del negocio. | Lo subes tú. |

## 3. ¿Cómo modifico cada dato en `config.js`?

Dentro de `config.js` cada dato está explicado con comentarios. Reglas básicas:
- Cambia solo lo que está **dentro de las comillas** `"..."`.
- No borres comillas, comas, llaves `{ }` ni corchetes `[ ]`.
- Cada línea termina con coma `,`.

| Variable | Qué es | Formato |
|---|---|---|
| `modoDemo` | Muestra aviso de "demostración" | `true` o `false` (sin comillas). Pon `false` con datos reales. |
| `nombreNegocio` | Nombre del negocio | `"Barbería El Corte"` |
| `giro` | Tipo de negocio | `"Barbería"` (o `""` para ocultar) |
| `presentacion` | Frase breve de presentación | Texto en una línea (o `""`) |
| `telefonoWhatsApp` | Número de WhatsApp | Solo números: `"524771234567"` o `"4771234567"` |
| `mensajeWhatsApp` | Mensaje preescrito | Texto. `{negocio}` se cambia por el nombre. |
| `colorPrincipal` | Color de cabecera y etiquetas | `"#1f2937"` (# y 6 caracteres) |
| `colorAcento` | Color de botones | `"#f59e0b"` |
| `logo` | Nombre del archivo del logo | `"logo.png"` (o `""` si no hay) |
| `servicios` | Lista de servicios | Ver sección 4 |
| `horario` | Días y horas | `{ dia: "Sábado", horas: "10:00 - 15:00" }` |
| `direccion` | Dirección | Texto (o `""`) |
| `enlaceMaps` | Enlace de Google Maps | Debe empezar con `https://` (o `""`) |
| `enlaceInstagram` | Enlace de Instagram | Debe empezar con `https://` (o `""`) |

**Cómo editar el archivo en GitHub (sin instalar nada):**
1. Entra a tu repositorio y haz clic en `config.js`.
2. Haz clic en el ícono del **lápiz** (Edit this file), arriba a la derecha.
3. Cambia los datos.
4. Haz clic en **Commit changes…** (botón verde) y luego en **Commit changes** otra vez.

## 4. ¿Cómo añado o quito servicios y precios?

Cada servicio es un bloque así:

```
{ nombre: "Corte clásico", precio: 150, descripcion: "Incluye lavado." },
```

- **Añadir:** copia una línea completa (de `{` a `},`) y pégala debajo de otra dentro de `servicios: [ ... ]`.
- **Quitar:** borra la línea completa del servicio.
- **Precio:** solo el número, sin `$` ni comas. Ejemplos: `150` o `149.5`. La página lo muestra como `$150 MXN`.
- **Sin precio:** escribe `precio: null` y la página mostrará "Consultar precio".
- **Sin descripción:** deja `descripcion: ""`.
- Cuidado: **todas las líneas terminan en coma, excepto la última** de la lista.

## 5. ¿Cómo añado el logo?

1. Prepara una imagen en formato PNG o JPG. Cuanto más pequeña, mejor (idealmente menos de 500 KB).
2. Ponle un nombre simple, **todo en minúsculas y sin espacios ni acentos**: `logo.png`.
3. En tu repositorio de GitHub: **Add file → Upload files**, arrastra la imagen y haz clic en **Commit changes**.
4. En `config.js` escribe: `logo: "logo.png",` (el nombre debe ser **idéntico**, incluidas mayúsculas y la extensión).

## 6. ¿Cómo subo los archivos a GitHub?

Sin terminal, desde el navegador:
1. En tu repositorio, haz clic en **Add file → Create new file**.
2. Escribe el nombre exacto del archivo (`index.html`, `config.js` o `README.md`).
3. Pega el contenido completo.
4. Haz clic en **Commit changes…** y luego en **Commit changes**.

## 7. ¿Cómo activo GitHub Pages?

1. Entra a tu repositorio y haz clic en **Settings** (arriba, con ícono de engrane).
2. En el menú izquierdo, haz clic en **Pages**.
3. En **Source** (o "Build and deployment"), elige **Deploy from a branch**.
4. En **Branch**, elige **main** y, en la carpeta, **/ (root)**.
5. Haz clic en **Save**.

Nota: con una cuenta gratuita, el repositorio debe ser **público**.

## 8. ¿Cómo encuentro el enlace público?

Vuelve a **Settings → Pages**. Cuando esté listo, arriba verás: *"Your site is live at …"*. El enlace tiene esta forma:

`https://TU-USUARIO.github.io/kit-citas/`

(Cambia `TU-USUARIO` por tu usuario de GitHub y `kit-citas` por el nombre del repositorio.)

## 9. ¿Cómo compruebo que mis cambios se publicaron?

1. Después de guardar un cambio, espera de **1 a 3 minutos**.
2. Abre el enlace público y recarga con **Ctrl + F5** (en Mac: **Cmd + Shift + R**; en celular, ciérralo y ábrelo de nuevo).
3. Si aún no cambia, entra a la pestaña **Actions** del repositorio: si ves un círculo amarillo, aún se está publicando; si ves una palomita verde, ya está listo.

## 10. ¿Cómo reutilizo la plantilla para otro negocio sin sobrescribir al anterior?

**Regla de oro: cada cliente tiene su propio repositorio, con su propio nombre.** Así cada sitio tiene su propio enlace y no se pisan.

**Opción A (recomendada): usar el repositorio como plantilla**
1. Una sola vez: en `kit-citas`, ve a **Settings** y marca la casilla **Template repository**.
2. Para cada cliente nuevo: abre `kit-citas` y haz clic en **Use this template → Create a new repository**.
3. Ponle un nombre distinto, por ejemplo `barberia-el-corte`. Elige **Public** y haz clic en **Create repository**.
4. En el repositorio nuevo, edita `config.js` con los datos del cliente y sube su logo.
5. Activa GitHub Pages en ese repositorio (sección 7).

**Opción B: copiar a mano**
Crea un repositorio nuevo con otro nombre, crea los tres archivos y pega el contenido de `kit-citas`.

**Nunca** edites el repositorio de un cliente anterior para hacer el sitio de otro.

## 11. Errores comunes y cómo resolverlos

| Problema | Causa probable | Solución |
|---|---|---|
| Veo un error 404 al abrir el enlace | Pages no está activado, o falta `index.html` | Revisa la sección 7. El archivo debe llamarse exactamente `index.html`, en la raíz. |
| La página dice "No se pudieron cargar los datos" | `config.js` no está, tiene otro nombre, o tiene un error de comas/comillas | Revisa que se llame `config.js`. Busca comas o comillas faltantes en lo último que editaste. |
| Hice un cambio y no se ve | Aún se publica, o el navegador guardó la versión vieja | Espera 3 minutos y recarga con Ctrl + F5. |
| El logo no aparece | Nombre distinto o archivo no subido | El nombre en `config.js` debe ser idéntico al archivo (mayúsculas, extensión). Verifica que esté subido. |
| El botón de WhatsApp no aparece | Teléfono inválido | Solo números, sin espacios ni `+`. Ejemplo: `"524771234567"`. |
| El botón de WhatsApp abre un número equivocado | Número mal escrito | Revisa dígito por dígito. |
| No aparece el botón de Maps o Instagram | Enlace vacío o sin `https://` | Copia el enlace completo, empezando con `https://`. |
| Un precio dice "Consultar precio" | El precio es `null` o va entre comillas | Escribe solo el número, sin comillas ni `$`. |
| Los botones no se leen bien | Colores muy parecidos entre sí | Cambia `colorAcento` o `colorPrincipal` por colores que contrasten. |

Si algo no funciona, cambia un solo dato a la vez y revisa el resultado. Si te equivocas, en GitHub puedes abrir `config.js → History` y volver a una versión anterior.
