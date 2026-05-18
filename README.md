# DermaPrep · Examen de Dermatología

Plataforma web de estudio y autoevaluación para dermatología. Genera exámenes personalizados a partir de un banco curado de preguntas basadas en **Dermatología de Bolognia, Schaffer y Cerroni** (Elsevier, 4.ª ed., 2019) y **preguntas oficiales del examen MIR** (España).

## ✨ Características

- **3 modos de estudio**
  - **Examen**: responde y se califica al final
  - **Práctica**: feedback y explicación inmediata después de cada pregunta
  - **Repaso rápido**: recorre el banco viendo pregunta + respuesta correcta + explicación

- **Configuración personalizable**
  - Número de preguntas: 10 / 20 / 30 / 50 / todas / personalizado
  - Filtrado por capítulos y secciones
  - Filtrado por fuente (Bolognia / MIR oficial)
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

- **Bolognia 4.ª ed.** — Capítulos 0–55 procesados (Vol. 1: Ciencia básica, Prurito, Papuloescamosas, Eritemas, Vesiculoampollosas, Anejos, Reumatológica, Metabólicas, Genodermatosis)
- **MIR oficial** — Preguntas dermatológicas seleccionadas de MIR 2025 y MIR 2026, liberadas por el Ministerio de Sanidad

Los capítulos del Vol. 2 (56–158) están declarados en el índice y listos para añadir preguntas cuando se procese el segundo volumen.

## 🚀 Cómo desplegar en GitHub Pages

1. **Crea un repositorio nuevo** en tu cuenta de GitHub (por ejemplo `dermaprep`).
2. **Sube los archivos** de esta carpeta a la raíz del repo (puedes arrastrarlos en la web de GitHub).
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
├── data.js         ← Banco de preguntas y datos
├── images/         ← Figuras clínicas del libro
│   ├── fig_8_psoriasis_placas.jpg
│   ├── fig_29_pemfigo_foliaceo.jpg
│   └── ...
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
  fuente: "bolognia",         // "bolognia" | "mir-2024" | "mir-2025" | "mir-2026"
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
