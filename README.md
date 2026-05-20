# DermaPrep · Examen de Dermatología

Plataforma web de estudio y autoevaluación para dermatología, **enfocada al temario oficial de la especialidad**. Genera exámenes personalizados a partir de un banco curado de preguntas basadas en **Dermatología de Bolognia, Schaffer y Cerroni** (Elsevier, 4.ª ed., 2019), **preguntas oficiales del examen MIR** (España) y **DermNet New Zealand** (temas específicos como psoriasis pustulosa generalizada).

## ✨ Características

- **3 modos de estudio**
  - **Examen**: responde y se califica al final
  - **Práctica**: feedback y explicación inmediata después de cada pregunta
  - **Repaso rápido**: recorre el banco viendo pregunta + respuesta correcta + explicación

- **Temario oficial integrado**
  - 77 temas oficiales mapeados a capítulos del Bolognia
  - Botón "Solo Temario" para filtrar solo capítulos del temario
  - Indicador visual (•) en los capítulos del temario
  - Por defecto, la app selecciona solo capítulos del temario para que el estudio esté enfocado

- **Configuración personalizable**
  - Número de preguntas: 10 / 20 / 30 / 50 / todas / personalizado
  - Filtrado por capítulos y secciones
  - Filtrado por fuente: **Todas / Bolognia / MIR oficial / DermNet**
  - Distribución de dificultad ajustable (Fácil / Medio / Difícil) con presets

- **Calificación detallada**
  - Puntuación global y porcentaje
  - Desglose por nivel de dificultad
  - Desempeño por capítulo (qué temas necesitan refuerzo)
  - Tiempo total
  - Botón "Repasar errores" para reforzar lo fallado

- **Historial local**
  - Tus estadísticas se guardan en el navegador (localStorage)
  - Promedio, mejor puntuación, total respondidas
  - Puedes borrar el historial cuando quieras

- **Soporte para imágenes clínicas**
  - Las preguntas con figuras del libro muestran la imagen sobre el enunciado

## 📚 Contenido del banco

- **Bolognia 4.ª ed.** — Capítulos 0–110 procesados (Vol. 1 y Vol. 2: Ciencia básica, Prurito, Papuloescamosas, Eritemas, Vesiculoampollosas, Anejos, Reumatológica, Metabólicas, Genodermatosis, Pigmentarios, Pelo/uñas/mucosas, Infecciones, Fotodermatosis, Linfomas, Vasculares, Tumores)
- **MIR oficial** — Preguntas dermatológicas seleccionadas de MIR 2025 y MIR 2026, liberadas por el Ministerio de Sanidad
- **DermNet New Zealand** — Preguntas adaptadas sobre psoriasis pustulosa generalizada (von Zumbusch) y otros temas específicos

## 🚀 Cómo desplegar en GitHub Pages

1. **Crea un repositorio nuevo** en tu cuenta de GitHub (por ejemplo `dermaprep`).
2. **Sube los archivos** de esta carpeta a la raíz del repo.
3. **Activa GitHub Pages**:
   - Ve a `Settings` → `Pages` (menú lateral)
   - En "Source" selecciona `Deploy from a branch`
   - Elige la rama `main` y carpeta `/ (root)`
   - Pulsa `Save`
4. En 1-2 minutos tu sitio estará disponible en `https://TU-USUARIO.github.io/dermaprep/`

## 📁 Estructura de archivos

```
dermaprep/
├── index.html      ← Página principal (estructura + estilos)
├── app.js          ← Lógica de la aplicación
├── data.js         ← Banco de preguntas, capítulos, imágenes y temario
├── images/         ← Figuras clínicas del libro
└── README.md       ← Este archivo
```

## ➕ Cómo añadir nuevas preguntas

Las preguntas se añaden al array `preguntas` de `data.js`. Estructura mínima:

```javascript
{
  id: "BOL-C8-99",            // identificador único
  capitulo: 8,                // número de capítulo
  nivel: "medio",             // "facil" | "medio" | "dificil"
  tipo: "opcion_multiple",    // ver tipos disponibles abajo
  fuente: "bolognia",         // "bolognia" | "mir-2024" | "mir-2025" | "mir-2026" | "dermnet"
  enunciado: "Pregunta…",
  opciones: ["A", "B", "C", "D"],
  correcta: 1,                // índice (0-3) de la respuesta correcta
  explicacion: "Razonamiento…",
  imagen: "cap8_psoriasis"    // OPCIONAL — clave en el diccionario `imagenes`
}
```

**Tipos disponibles** y campos específicos:

- `opcion_multiple` → `opciones[]`, `correcta` (índice)
- `verdadero_falso` → `respuesta` (true/false)
- `asociacion` → `pares: [{item, pareja}, ...]`
- `desarrollo` → `respuesta_esperada` (texto, no se autocalifica)

## ⚖️ Aviso legal

- Los contenidos extraídos del libro de Bolognia son citas breves de uso educativo (≤15 palabras por extracto), con fines docentes.
- Las preguntas del MIR son **dominio público** una vez liberadas oficialmente por el Ministerio de Sanidad de España.
- Los comentarios sobre preguntas MIR están adaptados del proyecto colaborativo **MIR 2.0** (Dermapixel · Casimédicos, CC BY-NC-ND).
- Las preguntas basadas en **DermNet New Zealand** son adaptaciones educativas con atribución correspondiente (dermnetnz.org). Las imágenes propietarias de DermNet **no** se reproducen en este sitio.
- Esta es una **herramienta educativa sin ánimo de lucro** dirigida a residentes y especialistas en formación.

## 🛠️ Tecnologías

- HTML5, CSS3, JavaScript vanilla (sin frameworks ni dependencias externas salvo Google Fonts)
- 100% client-side — funciona sin servidor
- Datos persistentes con `localStorage`
- Diseño responsive (móvil / tablet / escritorio)
- Modo impresión (CSS print)

## 🤝 Contribuir

Si encuentras un error en una pregunta, una explicación poco clara, o quieres añadir preguntas de un capítulo no cubierto, puedes:

1. Hacer un fork del repo
2. Editar `data.js` añadiendo o modificando preguntas
3. Abrir un Pull Request

---

*Hecho con cuidado para residentes de dermatología.*
