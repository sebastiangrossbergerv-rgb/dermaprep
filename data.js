/**
 * BANCO DE PREGUNTAS — DERMAPREP
 * ───────────────────────────────────────────────────────────────
 * Fuentes:
 *   • bolognia → Texto del PDF de Dermatología de Bolognia, Schaffer, Cerroni
 *                (Elsevier, 4ª ed., 2019). Volumen 1 (caps. 0-55) procesado.
 *   • mir-2024 → Examen MIR oficial 2024 (Ministerio de Sanidad, España).
 *   • mir-2025 → Examen MIR oficial 2025.
 *   • mir-2026 → Examen MIR oficial 2026.
 *
 *   Los enunciados de las preguntas MIR son de dominio público una vez
 *   liberados oficialmente por el Ministerio. Los comentarios proceden del
 *   proyecto colaborativo MIR 2.0 (CC BY-NC-ND), adaptados.
 *
 * Niveles Bloom:
 *   facil   = Recuerdo (definiciones, datos concretos)
 *   medio   = Comprensión (V/F razonado, asociaciones)
 *   dificil = Aplicación/Análisis (casos clínicos, integración)
 */

window.DERMAPREP_DATA = {

  /* ════════ SECCIONES (22 — esquema completo Bolognia) ════════ */
  secciones: [
    { id:1,  nombre:"Revisión de la ciencia básica",                  color:"#C8B6E2" },
    { id:2,  nombre:"Prurito",                                        color:"#7FB8D9" },
    { id:3,  nombre:"Dermatosis papuloescamosas y eccematosas",       color:"#F4B582" },
    { id:4,  nombre:"Urticarias, eritemas y púrpuras",                color:"#E58B7D" },
    { id:5,  nombre:"Enfermedades vesiculoampollosas",                color:"#D17A92" },
    { id:6,  nombre:"Enfermedades de los anejos",                     color:"#88C99A" },
    { id:7,  nombre:"Dermatología reumatológica",                     color:"#F2D479" },
    { id:8,  nombre:"Enfermedades metabólicas y sistémicas",          color:"#B5D6A6" },
    { id:9,  nombre:"Genodermatosis",                                 color:"#A8C9E0" },
    { id:10, nombre:"Trastornos pigmentarios",                        color:"#D4B996" },
    { id:11, nombre:"Pelo, uñas y mucosas",                           color:"#C4A484" },
    { id:12, nombre:"Infecciones, infestaciones y mordeduras",        color:"#D89696" },
    { id:13, nombre:"Trastornos por factores físicos",                color:"#A8C8B8" },
    { id:14, nombre:"Cél. de Langerhans, macrófagos y linfomas",      color:"#B8A8D8" },
    { id:15, nombre:"Atrofias y tejidos conjuntivos",                 color:"#C8C8A8" },
    { id:16, nombre:"Trastornos de la grasa subcutánea",              color:"#E0C8B8" },
    { id:17, nombre:"Trastornos vasculares",                          color:"#D08888" },
    { id:18, nombre:"Neoplasias cutáneas",                            color:"#B89898" },
    { id:19, nombre:"Tratamiento médico",                             color:"#98B8C8" },
    { id:20, nombre:"Modalidades de tratamiento físico",              color:"#98C8B0" },
    { id:21, nombre:"Cirugía dermatológica",                          color:"#A8B0C8" },
    { id:22, nombre:"Cirugía estética",                               color:"#C8A0B8" }
  ],

  /* ════════ CAPÍTULOS — ÍNDICE COMPLETO Bolognia (158 caps.) ════════
     • presente:true  → procesado a partir del PDF subido
     • presente:false → solo declarado en el índice (para futura expansión)
  */
  capitulos: [
    // ───────── SECCIÓN 1 — Ciencia básica ─────────
    { num:0,  titulo:"Principios básicos de dermatología",                  seccion:1,  presente:true  },
    { num:1,  titulo:"Anatomía y fisiología",                                seccion:1,  presente:true  },
    { num:2,  titulo:"Desarrollo y mantenimiento de la piel",                seccion:1,  presente:true  },
    { num:3,  titulo:"Biología molecular",                                   seccion:1,  presente:true  },
    { num:4,  titulo:"Inmunología cutánea",                                  seccion:1,  presente:true  },
    { num:5,  titulo:"Neurobiología cutánea",                                seccion:1,  presente:true  },
    { num:6,  titulo:"Valoración del paciente con dermatosis",               seccion:1,  presente:true  },
    // ───────── SECCIÓN 2 — Prurito ─────────
    { num:7,  titulo:"Prurito y disestesia",                                 seccion:2,  presente:true  },
    // ───────── SECCIÓN 3 — Dermatosis papuloescamosas/eccematosas ─────────
    { num:8,  titulo:"Psoriasis",                                            seccion:3,  presente:true  },
    { num:9,  titulo:"Otras dermatosis papuloescamosas",                     seccion:3,  presente:false },
    { num:10, titulo:"Pitiriasis rubra pilar",                               seccion:3,  presente:false },
    { num:11, titulo:"Liquen plano y dermatosis liquenoides",                seccion:3,  presente:true  },
    { num:12, titulo:"Dermatitis atópica",                                   seccion:3,  presente:true  },
    { num:13, titulo:"Otras dermatitis eccematosas",                         seccion:3,  presente:true  },
    { num:14, titulo:"Dermatitis de contacto alérgica",                      seccion:3,  presente:true  },
    { num:15, titulo:"Dermatitis de contacto irritativa",                    seccion:3,  presente:true  },
    { num:16, titulo:"Dermatitis ocupacional",                               seccion:3,  presente:true  },
    { num:17, titulo:"Dermatitis de plantas",                                seccion:3,  presente:true  },
    // ───────── SECCIÓN 4 — Urticarias, eritemas y púrpuras ─────────
    { num:18, titulo:"Urticaria y angioedema",                               seccion:4,  presente:true  },
    { num:19, titulo:"Eritemas figurados",                                   seccion:4,  presente:true  },
    { num:20, titulo:"Eritema multiforme, Stevens-Johnson y NET",            seccion:4,  presente:true  },
    { num:21, titulo:"Eritema nudoso y otras paniculitis septales",          seccion:4,  presente:true  },
    { num:22, titulo:"Púrpura: mecanismos y dx diferencial",                 seccion:4,  presente:true  },
    { num:23, titulo:"Trastornos vasculares (vasculitis)",                   seccion:4,  presente:true  },
    { num:24, titulo:"Embolia cutánea",                                      seccion:4,  presente:true  },
    { num:25, titulo:"Eosinofilias",                                         seccion:4,  presente:true  },
    { num:26, titulo:"Dermatosis neutrófilas (Sweet, pioderma)",             seccion:4,  presente:true  },
    { num:27, titulo:"Enfermedad injerto-contra-huésped",                    seccion:4,  presente:true  },
    // ───────── SECCIÓN 5 — Vesiculoampollosas ─────────
    { num:28, titulo:"Biología de las enfermedades ampollosas",              seccion:5,  presente:true  },
    { num:29, titulo:"Pénfigo",                                              seccion:5,  presente:true  },
    { num:30, titulo:"Penfigoide ampolloso",                                 seccion:5,  presente:true  },
    { num:31, titulo:"Dermatitis herpetiforme y enf. por IgA lineal",        seccion:5,  presente:true  },
    { num:32, titulo:"Epidermólisis ampollosa adquirida",                    seccion:5,  presente:true  },
    { num:33, titulo:"Epidermólisis ampollosa hereditaria",                  seccion:5,  presente:true  },
    // ───────── SECCIÓN 6 — Anejos ─────────
    { num:34, titulo:"Trastornos glándulas ecrinas y apocrinas",             seccion:6,  presente:true  },
    { num:35, titulo:"Hidradenitis supurativa",                              seccion:6,  presente:true  },
    { num:36, titulo:"Acné vulgar",                                          seccion:6,  presente:true  },
    { num:37, titulo:"Rosácea y trastornos relacionados",                    seccion:6,  presente:true  },
    { num:38, titulo:"Foliculitis y otros trastornos foliculares",           seccion:6,  presente:true  },
    { num:39, titulo:"Trastornos perforantes",                               seccion:6,  presente:true  },
    // ───────── SECCIÓN 7 — Reumatológica ─────────
    { num:40, titulo:"Lupus eritematoso",                                    seccion:7,  presente:true  },
    { num:41, titulo:"Dermatomiositis",                                      seccion:7,  presente:true  },
    { num:42, titulo:"Esclerosis sistémica (esclerodermia)",                 seccion:7,  presente:true  },
    { num:43, titulo:"Síndrome de Raynaud",                                  seccion:7,  presente:true  },
    { num:44, titulo:"Morfea y liquen escleroso",                            seccion:7,  presente:true  },
    { num:45, titulo:"Otras enfermedades reumatológicas",                    seccion:7,  presente:true  },
    // ───────── SECCIÓN 8 — Metabólicas/sistémicas ─────────
    { num:46, titulo:"Manif. cutáneas de enfermedad endocrina",              seccion:8,  presente:true  },
    { num:47, titulo:"Manif. cutáneas de la nefropatía",                     seccion:8,  presente:true  },
    { num:48, titulo:"Amiloidosis cutáneas",                                 seccion:8,  presente:true  },
    { num:49, titulo:"Mucinosis cutáneas",                                   seccion:8,  presente:false },
    { num:50, titulo:"Calcificaciones y osificaciones cutáneas",             seccion:8,  presente:true  },
    { num:51, titulo:"Trastornos nutricionales",                             seccion:8,  presente:true  },
    { num:52, titulo:"Porfirias",                                            seccion:8,  presente:true  },
    { num:53, titulo:"Otras enf. sistémicas con manif. cutáneas",            seccion:8,  presente:true  },
    // ───────── SECCIÓN 9 — Genodermatosis ─────────
    { num:54, titulo:"Bases genéticas de las dermopatías",                   seccion:9,  presente:true  },
    { num:55, titulo:"Genodermatosis específicas",                           seccion:9,  presente:true  },
    { num:56, titulo:"Genodermatosis adicionales (Vol. 2)",                  seccion:9,  presente:false },
    { num:57, titulo:"Trastornos del colágeno",                              seccion:9,  presente:false },
    { num:58, titulo:"Errores innatos del metabolismo",                      seccion:9,  presente:false },
    { num:59, titulo:"Trastornos de queratinización",                        seccion:9,  presente:false },
    { num:60, titulo:"Trastornos eritrodérmicos hereditarios",               seccion:9,  presente:false },
    // ───────── SECCIÓN 10 — Pigmentarios ─────────
    { num:61, titulo:"Biología del pigmento melánico",                       seccion:10, presente:false },
    { num:62, titulo:"Vitíligo y trastornos hipopigmentarios",               seccion:10, presente:false },
    { num:63, titulo:"Trastornos pigmentarios mixtos",                       seccion:10, presente:false },
    { num:64, titulo:"Hiperpigmentaciones adquiridas",                       seccion:10, presente:false },
    { num:65, titulo:"Melasma, lentigos y alt. pigmentarias",                seccion:10, presente:false },
    { num:66, titulo:"Tumores melanocíticos: nevus",                         seccion:10, presente:false },
    { num:67, titulo:"Melanoma cutáneo",                                     seccion:10, presente:false },
    // ───────── SECCIÓN 11 — Pelo, uñas, mucosas ─────────
    { num:68, titulo:"Biología del pelo",                                    seccion:11, presente:false },
    { num:69, titulo:"Alopecias no cicatriciales",                           seccion:11, presente:false },
    { num:70, titulo:"Alopecias cicatriciales",                              seccion:11, presente:false },
    { num:71, titulo:"Trastornos ungueales",                                 seccion:11, presente:false },
    { num:72, titulo:"Enfermedades de las mucosas",                          seccion:11, presente:false },
    { num:73, titulo:"Hipertricosis e hirsutismo",                           seccion:11, presente:false },
    // ───────── SECCIÓN 12 — Infecciones ─────────
    { num:74, titulo:"Infecciones bacterianas (piodermitis)",                seccion:12, presente:false },
    { num:75, titulo:"Micobacteriosis cutáneas",                             seccion:12, presente:false },
    { num:76, titulo:"Lepra",                                                seccion:12, presente:false },
    { num:77, titulo:"Sífilis y otras treponematosis",                       seccion:12, presente:false },
    { num:78, titulo:"Otras ETS (excluyendo VIH)",                           seccion:12, presente:false },
    { num:79, titulo:"Infecciones por VIH",                                  seccion:12, presente:false },
    { num:80, titulo:"Herpesvirus (HSV, VZV)",                               seccion:12, presente:false },
    { num:81, titulo:"Verrugas e infecciones por VPH",                       seccion:12, presente:false },
    { num:82, titulo:"Exantemas virales y otras infecciones víricas",        seccion:12, presente:false },
    { num:83, titulo:"Otras infecciones víricas (Mpox)",                     seccion:12, presente:false },
    { num:84, titulo:"Micosis superficiales (dermatofitosis)",               seccion:12, presente:false },
    { num:85, titulo:"Candidiasis",                                          seccion:12, presente:false },
    { num:86, titulo:"Micosis profundas y subcutáneas",                      seccion:12, presente:false },
    { num:87, titulo:"Leishmaniasis y parasitosis cutáneas",                 seccion:12, presente:false },
    { num:88, titulo:"Escabiosis y pediculosis",                             seccion:12, presente:false },
    { num:89, titulo:"Picaduras, mordeduras y enf. de Lyme",                 seccion:12, presente:false },
    // ───────── SECCIÓN 13 — Factores físicos ─────────
    { num:90, titulo:"Fotodermatosis y trastornos por UV",                   seccion:13, presente:false },
    { num:91, titulo:"Trastornos por frío y por calor",                      seccion:13, presente:false },
    { num:92, titulo:"Daños cutáneos por agentes físicos",                   seccion:13, presente:false },
    { num:93, titulo:"Patomimia y trastornos facticios",                     seccion:13, presente:false },
    { num:94, titulo:"Trastornos psicocutáneos",                             seccion:13, presente:false },
    // ───────── SECCIÓN 14 — Langerhans/Linfomas ─────────
    { num:95, titulo:"Histiocitosis de células de Langerhans",               seccion:14, presente:false },
    { num:96, titulo:"Histiocitosis no Langerhans",                          seccion:14, presente:false },
    { num:97, titulo:"Mastocitosis",                                         seccion:14, presente:false },
    { num:98, titulo:"Linfomas cutáneos de células T",                       seccion:14, presente:false },
    { num:99, titulo:"Linfomas cutáneos de células B",                       seccion:14, presente:false },
    { num:120,titulo:"Otros infiltrados linfoides cutáneos",                 seccion:14, presente:false },
    // ───────── SECCIÓN 15 — Conjuntivos ─────────
    { num:100,titulo:"Atrofias y trastornos del colágeno",                   seccion:15, presente:false },
    { num:101,titulo:"Trastornos de las fibras elásticas",                   seccion:15, presente:false },
    { num:102,titulo:"Estrías de distensión, anetodermia",                   seccion:15, presente:false },
    { num:103,titulo:"Granuloma anular y dermatosis granulomatosas",         seccion:15, presente:false },
    // ───────── SECCIÓN 16 — Grasa subcutánea ─────────
    { num:104,titulo:"Paniculitis (lobulillares y mixtas)",                  seccion:16, presente:false },
    { num:105,titulo:"Lipodistrofias",                                       seccion:16, presente:false },
    // ───────── SECCIÓN 17 — Vasculares ─────────
    { num:106,titulo:"Hemangiomas infantiles",                               seccion:17, presente:false },
    { num:107,titulo:"Malformaciones vasculares",                            seccion:17, presente:false },
    { num:108,titulo:"Telangiectasias y trastornos vasculares",              seccion:17, presente:false },
    { num:109,titulo:"Tumores vasculares benignos y malignos",               seccion:17, presente:false },
    { num:110,titulo:"Sarcoma de Kaposi y angiosarcoma",                     seccion:17, presente:false },
    { num:111,titulo:"Trastornos linfáticos cutáneos",                       seccion:17, presente:false },
    // ───────── SECCIÓN 18 — Neoplasias ─────────
    { num:112,titulo:"Quistes cutáneos",                                     seccion:18, presente:false },
    { num:113,titulo:"Tumores anexiales benignos",                           seccion:18, presente:false },
    { num:114,titulo:"Tumores anexiales malignos",                           seccion:18, presente:false },
    { num:115,titulo:"Queratosis y queilitis actínicas",                     seccion:18, presente:false },
    { num:116,titulo:"Carcinoma basocelular",                                seccion:18, presente:false },
    { num:117,titulo:"Carcinoma epidermoide / escamoso",                     seccion:18, presente:false },
    { num:118,titulo:"Otros tumores epiteliales malignos",                   seccion:18, presente:false },
    { num:119,titulo:"Tumores neuroendocrinos (Merkel)",                     seccion:18, presente:false },
    { num:121,titulo:"Tumores fibrohistiocíticos benignos",                  seccion:18, presente:false },
    { num:122,titulo:"DFSP y otros sarcomas",                                seccion:18, presente:false },
    { num:123,titulo:"Tumores neurales y musculares",                        seccion:18, presente:false },
    { num:124,titulo:"Metástasis cutáneas",                                  seccion:18, presente:false },
    { num:125,titulo:"Síndromes paraneoplásicos",                            seccion:18, presente:false },
    { num:126,titulo:"Trasplantes de órganos y piel",                        seccion:18, presente:false },
    { num:127,titulo:"Tumores epidérmicos benignos (queratosis seborr.)",    seccion:18, presente:false },
    { num:128,titulo:"Tumores benignos misceláneos",                         seccion:18, presente:false },
    // ───────── SECCIÓN 19 — Tratamiento médico ─────────
    { num:129,titulo:"Glucocorticoides y otros tratamientos tópicos",        seccion:19, presente:false },
    { num:130,titulo:"Inmunomoduladores tópicos",                            seccion:19, presente:false },
    { num:131,titulo:"Retinoides sistémicos",                                seccion:19, presente:false },
    { num:132,titulo:"Inmunosupresores e inmunomoduladores sistémicos",      seccion:19, presente:false },
    { num:133,titulo:"Terapias biológicas",                                  seccion:19, presente:false },
    { num:134,titulo:"Antihistamínicos y antialérgicos",                     seccion:19, presente:false },
    { num:135,titulo:"Antibióticos sistémicos",                              seccion:19, presente:false },
    { num:136,titulo:"Antivirales sistémicos",                               seccion:19, presente:false },
    { num:137,titulo:"Antifúngicos sistémicos",                              seccion:19, presente:false },
    { num:138,titulo:"Reacciones adversas a fármacos",                       seccion:19, presente:false },
    // ───────── SECCIÓN 20 — Tratamiento físico ─────────
    { num:139,titulo:"Fototerapia UVB y PUVA",                               seccion:20, presente:false },
    { num:140,titulo:"Terapia fotodinámica",                                 seccion:20, presente:false },
    { num:141,titulo:"Radioterapia dermatológica",                           seccion:20, presente:false },
    { num:142,titulo:"Láseres y luz pulsada intensa",                        seccion:20, presente:false },
    // ───────── SECCIÓN 21 — Cirugía ─────────
    { num:143,titulo:"Anestesia y preoperatorio en cirugía dermatológica",   seccion:21, presente:false },
    { num:144,titulo:"Técnica quirúrgica básica y suturas",                  seccion:21, presente:false },
    { num:145,titulo:"Reconstrucción con colgajos cutáneos",                 seccion:21, presente:false },
    { num:146,titulo:"Reconstrucción con injertos cutáneos",                 seccion:21, presente:false },
    { num:147,titulo:"Cirugía de Mohs",                                      seccion:21, presente:false },
    { num:148,titulo:"Crioterapia y electrocirugía",                         seccion:21, presente:false },
    { num:149,titulo:"Cirugía de la uña",                                    seccion:21, presente:false },
    { num:150,titulo:"Complicaciones quirúrgicas y cicatrización",           seccion:21, presente:false },
    // ───────── SECCIÓN 22 — Cirugía estética ─────────
    { num:151,titulo:"Toxina botulínica",                                    seccion:22, presente:false },
    { num:152,titulo:"Materiales de relleno (fillers)",                      seccion:22, presente:false },
    { num:153,titulo:"Esclerosis de varices",                                seccion:22, presente:false },
    { num:154,titulo:"Peelings químicos",                                    seccion:22, presente:false },
    { num:155,titulo:"Liposucción y lipoescultura",                          seccion:22, presente:false },
    { num:156,titulo:"Trasplante capilar",                                   seccion:22, presente:false },
    { num:157,titulo:"Cosmecéuticos",                                        seccion:22, presente:false },
    { num:158,titulo:"Tatuajes y eliminación de tatuajes",                   seccion:22, presente:false }
  ],

  /* ════════ IMÁGENES extraídas del PDF ════════ */
  imagenes: {
    "cap0_principios":     { src:"images/fig_0_principios_dermatologia.jpg", caption:"Capítulo 0 — Patrones clínicos: Koebernización (respuesta isomorfa) en liquen plano." },
    "cap0_lesiones":       { src:"images/fig_0_lesiones_clinicas.jpg",       caption:"Capítulo 0 — Lesión cutánea: ejemplo del libro." },
    "cap8_psoriasis":      { src:"images/fig_8_psoriasis_placas.jpg",        caption:"Capítulo 8 — Psoriasis: manifestaciones clínicas y tratamientos tópicos." },
    "cap12_atopica":       { src:"images/fig_12_dermatitis_atopica.jpg",     caption:"Capítulo 12 — Dermatitis atópica: presentación clínica." },
    "cap17_apiaceae":      { src:"images/fig_17_apiaceae.jpg",               caption:"Capítulo 17 — Familia Apiaceae (perejil/zanahoria silvestre); causa frecuente de fitofotodermatitis." },
    "cap29_foliaceo":      { src:"images/fig_29_pemfigo_foliaceo.jpg",       caption:"Figura 29-8 — Pénfigo foliáceo: erosiones con escamocostras; escamas «en copos de maíz»." },
    "cap29_eritematoso":   { src:"images/fig_29_pemfigo_eritematoso.jpg",    caption:"Figura 29-9 — Pénfigo eritematoso: placas en nariz y área malar (solapamiento con LE)." },
    "cap30_penfigoide":    { src:"images/fig_30_penfigoide.jpg",             caption:"Capítulo 30 — Lesiones vegetantes y ampollosas en pliegues y palmas/plantas." },
    "cap44_parry_romberg": { src:"images/fig_44_parry_romberg.jpg",          caption:"Figura 44-7/8 — Síndrome de Parry-Romberg / morfea lineal." },
    "cap44_morfea_lineal": { src:"images/fig_44_morfea_lineal.jpg",          caption:"Figura 44-8 — Morfea lineal de una extremidad: banda esclerótica con hiper/hipopigmentación." }
  },

  /* ════════════════════════════════════════════════════
   *  BANCO DE PREGUNTAS
   * ════════════════════════════════════════════════════ */
  preguntas: [

    /* ─── CAP 0 — PRINCIPIOS BÁSICOS ─── */
    { id:"BOL-C0-01", capitulo:0, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Según la escala de Fitzpatrick, ¿cuántos fototipos cutáneos se reconocen?",
      opciones:["III","IV","V","VI"], correcta:3,
      explicacion:"Escala de Fitzpatrick: seis fototipos (I-VI), tabla 0-6." },

    { id:"BOL-C0-02", capitulo:0, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Pigmento predominante en personas pelirrojas con pecas:",
      opciones:["Eumelanina (negro parduzco)","Feomelanina (rojo amarillento)","Carotenoides","Hemosiderina"], correcta:1,
      explicacion:"Texto literal: «la feomelanina es el pigmento predominante entre las personas pelirrojas con pecas»." },

    { id:"BOL-C0-03", capitulo:0, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la palpación de lesiones cutáneas, un nevo intradérmico se describe como:",
      opciones:["Duro (como una calcinosis)","Blando","Firme (como un dermatofibroma)","Compresible (como un lago venoso)"], correcta:1,
      explicacion:"Tabla 0-4: blandas (nevo intradérmico), firmes (dermatofibroma), duras (calcinosis cutánea)." },

    { id:"BOL-C0-04", capitulo:0, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"El fenómeno de Koebner (respuesta isomorfa) consiste en la aparición de lesiones de una dermatosis preexistente en zonas de traumatismo cutáneo. La psoriasis, el liquen plano y el vitíligo son ejemplos clásicos.",
      respuesta:true,
      explicacion:"Tabla 0-7: psoriasis, vitíligo, liquen plano, liquen nítido, vasculitis cutánea de pequeño vaso, enfermedad de Still." },

    { id:"BOL-C0-05", capitulo:0, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"La cianosis es más fácil de apreciar sobre piel con pigmentación oscura.",
      respuesta:false,
      explicacion:"Falso. El libro afirma lo contrario: la cianosis es más DIFÍCIL de apreciar sobre piel oscura." },

    { id:"BOL-C0-06", capitulo:0, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap0_principios",
      enunciado:"Lesiones papulosas lineales en sitio de agresión exógena (rascado, tatuaje) — fenómeno de Koebner. ¿Cuál afirmación es CORRECTA?",
      opciones:[
        "Es exclusiva de la psoriasis",
        "Debe diferenciarse de la respuesta isotópica de Wolf (segunda dermatosis sobre lugar de otra ya curada)",
        "Solo aparece tras traumatismos quirúrgicos",
        "Siempre desaparece espontáneamente"
      ], correcta:1,
      explicacion:"Diferenciar de Wolf (p. ej., granuloma anular en lugar de herpes zóster curado)." },

    /* ─── CAP 1 — ANATOMÍA Y FISIOLOGÍA ─── */
    { id:"BOL-C1-01", capitulo:1, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"La dermatoscopia (cap. 1) es una técnica útil principalmente para:",
      opciones:["Diagnóstico de trastornos vasculares sistémicos","Lesiones cutáneas melanocíticas y no melanocíticas","Exploración endoscópica de mucosas digestivas","Cuantificación de melanina sérica"], correcta:1,
      explicacion:"Basada en análisis de patrones; referenciada para lesiones melanocíticas y no melanocíticas." },

    { id:"BOL-C1-02", capitulo:1, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"La microscopia confocal de reflectancia permite imágenes in vivo con resolución casi histológica sin biopsia.",
      respuesta:true,
      explicacion:"Herramienta no invasiva referenciada en cap. 1." },

    /* ─── CAP 2 — DESARROLLO ─── */
    { id:"BOL-C2-01", capitulo:2, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Queratoacantomas y CE inducidos por inhibidores de BRAF V600E se han reducido al combinarlos con inhibidores de:",
      opciones:["EGFR","MEK","mTOR","JAK"], correcta:1,
      explicacion:"Combinación BRAF + MEK reduce significativamente la incidencia de queratoacantomas/CE." },

    /* ─── CAP 3 — BIOLOGÍA MOLECULAR ─── */
    { id:"BOL-C3-01", capitulo:3, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Cuál NO es una palabra clave del resumen del capítulo 3 (Biología molecular)?",
      opciones:["PCR","FISH","Citometría de flujo","Inmunoprecipitación de cromatina (ChIP)"], correcta:3,
      explicacion:"El resumen lista PCR, RT-PCR, FISH, citometría, secuenciación, micromatrices, proteoma, ratones transgénicos, terapia génica — pero no ChIP." },

    /* ─── CAP 8 — PSORIASIS ─── */
    { id:"BOL-C8-01", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Porcentaje de pacientes con psoriasis que presentan artritis psoriásica:",
      opciones:["1-3%","5-30%","40-60%","60-80%"], correcta:1,
      explicacion:"Texto: «La artritis psoriásica está presente en el 5-30%»." },

    { id:"BOL-C8-02", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Cuál NO es un análogo de la vitamina D₃ (tabla 8-6)?",
      opciones:["Calcipotrieno/calcipotriol","Calcitriol","Tacalcitol","Tacrolimus"], correcta:3,
      explicacion:"Tacrolimus es inhibidor de calcineurina, no análogo de vit. D." },

    { id:"BOL-C8-03", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Cantidad máxima semanal recomendada de calcipotrieno/calcipotriol tópico:",
      opciones:["50 g","70 g","100 g","200 g"], correcta:2,
      explicacion:"Tabla 8-6: 100 g/semana (para evitar hipercalcemia)." },

    { id:"BOL-C8-04", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"La «mancha de aceite» o «parche color salmón» en psoriasis ungueal se debe a:",
      opciones:["Paraqueratosis del lecho distal","Exocitosis de leucocitos bajo la lámina","Afectación matricial central","Fragilidad capilar"], correcta:1,
      explicacion:"Texto: mancha de aceite por exocitosis de leucocitos bajo la lámina." },

    { id:"BOL-C8-05", capitulo:8, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"El tazaroteno tópico está indicado como primera línea en la psoriasis eritrodérmica.",
      respuesta:false,
      explicacion:"Falso. Tabla 8-8: la eritrodérmica es CONTRAINDICACIÓN del tazaroteno." },

    { id:"BOL-C8-06", capitulo:8, nivel:"medio", tipo:"asociacion", fuente:"bolognia",
      enunciado:"Asocie cada tipo de artritis psoriásica con su característica clínica clave:",
      pares:[
        { item:"Artritis IFD",                       pareja:"Solo articulaciones interfalángicas distales" },
        { item:"Artritis mutilante",                 pareja:"Osteólisis y telescopaje" },
        { item:"Mono/oligoartritis asimétrica",      pareja:"Más frecuente; dedo en salchicha (IFD+IFP)" },
        { item:"Espondilitis/sacroilitis",           pareja:"Como espondilitis anquilosante; HLA-B27+" },
        { item:"Poliartritis simétrica símil-AR",    pareja:"Afecta IFP, MCF, muñeca; difícil dx vs AR" }
      ],
      explicacion:"Cinco tipos principales de artritis psoriásica del cap. 8." },

    { id:"BOL-C8-07", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Causa de las hemorragias lineales subungueales en la psoriasis:",
      opciones:["Paraqueratosis del lecho","Afectación matricial proximal","Aumento de fragilidad capilar","Exocitosis bajo la lámina"], correcta:2,
      explicacion:"Texto literal: aumento de fragilidad capilar." },

    { id:"BOL-C8-08", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap8_psoriasis",
      enunciado:"Placas eritematodescamativas plateadas en codos, rodillas y cuero cabelludo. Si las placas presentan hiperqueratosis notable («psoriasis rupioide»), considerar EN PARTICULAR:",
      opciones:["Diabetes tipo 2","Hipotiroidismo concomitante","Hipertensión maligna","Síndrome de Cushing"], correcta:1,
      explicacion:"Cita literal del cap. 8." },

    { id:"BOL-C8-09", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Por qué los pacientes con psoriasis tratados con metotrexato tienen mayor potencial hepatotóxico que los pacientes con AR?",
      opciones:[
        "Mayor metabolismo hepático del MTX en piel inflamada",
        "Predisposición genética + mayor consumo de alcohol + hepatopatía grasa no alcohólica",
        "Interacción con análogos de vitamina D₃",
        "Reducción de excreción renal"
      ], correcta:1,
      explicacion:"Texto del cap. 8: tres explicaciones propuestas." },

    { id:"BOL-C8-10", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Diagnóstico diferencial con PEGA en psoriasis pustulosa: la presencia histológica de eosinófilos favorece:",
      opciones:["Psoriasis pustulosa","Erupción medicamentosa (PEGA)","Síndrome de Sneddon-Wilkinson","Pénfigo IgA"], correcta:1,
      explicacion:"Texto: «La presencia de eosinófilos va a favor de una erupción medicamentosa»." },

    /* ─── CAP 11 — LIQUEN PLANO ─── */
    { id:"BOL-C11-01", capitulo:11, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Las estrías blancas en encaje del liquen plano se denominan:",
      opciones:["Líneas de Beau","Estrías de Wickham","Líneas de Pastia","Signo de Auspitz"], correcta:1,
      explicacion:"Estrías de Wickham — patrón en encaje blanco." },

    /* ─── CAP 12 — DERMATITIS ATÓPICA ─── */
    { id:"BOL-C12-01", capitulo:12, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Localización clásica de la dermatitis atópica en LACTANTES:",
      opciones:["Pliegues antecubitales y poplíteos","Mejillas, cuero cabelludo y superficies extensoras","Solo palmas y plantas","Región sacra y nalgas"], correcta:1,
      explicacion:"Patrón clásico infantil; las flexuras predominan en niños mayores/adultos." },

    /* ─── CAP 14 — DERMATITIS DE CONTACTO ─── */
    { id:"BOL-C14-01", capitulo:14, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la dermatitis de los párpados, alérgeno EXÓGENO frecuente (tabla 14-2):",
      opciones:["Dermatitis atópica","Dermatitis seborreica","Bálsamo del Perú (Myroxylon pereirae)","Liquenización flexural"], correcta:2,
      explicacion:"Tabla 14-2 lista: Myroxylon pereirae, conservantes (cuaternio-15, DMDM hidantoína, etc.)." },

    /* ─── CAP 17 — FITODERMATITIS ─── */
    { id:"BOL-C17-01", capitulo:17, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap17_apiaceae",
      enunciado:"La planta de la imagen pertenece a la familia Apiaceae. Esta familia causa frecuentemente:",
      opciones:["Dermatitis seborreica","Fitofotodermatitis (dermatitis fototóxica por plantas)","Pitiriasis rosada","Urticaria colinérgica"], correcta:1,
      explicacion:"Furocumarinas + UV-A → reacción fototóxica." },

    /* ─── CAP 18 — URTICARIA ─── */
    { id:"BOL-C18-01", capitulo:18, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Qué fármaco PODRÍA AGRAVAR la urticaria, según el cap. 18?",
      opciones:["Paracetamol","Ácido acetilsalicílico","Cetirizina","Hidroxizina"], correcta:1,
      explicacion:"Cita literal del cap. 18." },

    /* ─── CAP 19 — ERITEMA MIGRATORIO / LYME ─── */
    { id:"BOL-C19-01", capitulo:19, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Característica clásica del eritema migratorio de la enfermedad de Lyme:",
      opciones:[
        "Vesiculación central con costra hemorrágica",
        "Placa anular/circular que se expande con zona central más clara (ojo de buey)",
        "Confluencia rápida en cara y tronco",
        "Pústulas estériles sobre base eritematosa"
      ], correcta:1,
      explicacion:"Diámetro final ≥ 5 cm, aspecto en ojo de buey, 7-15 días post-picadura." },

    { id:"BOL-C19-02", capitulo:19, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"Sin tratamiento, ~60% de los pacientes con enfermedad de Lyme desarrollarán artritis monoarticular/oligoarticular (típicamente rodilla).",
      respuesta:true,
      explicacion:"Texto literal del cap. 19." },

    /* ─── CAP 20 — SJS/NET ─── */
    { id:"BOL-C20-01", capitulo:20, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Porcentaje de superficie corporal con desprendimiento epidérmico que define NET:",
      opciones:["< 10 %","10-30 %","> 30 %","> 50 %"], correcta:2,
      explicacion:"NET = > 30% SC con desprendimiento epidérmico." },

    { id:"BOL-C20-02", capitulo:20, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Correlato histológico del color negruzco/gris en lesiones iniciales de SJS/NET (signo de alerta):",
      opciones:[
        "Espongiosis con eosinófilos",
        "Queratinocitos apoptósicos basales y suprabasales",
        "Vesículas subcórneas con neutrófilos",
        "Necrosis fibrinoide vascular"
      ], correcta:1,
      explicacion:"Queratinocitos apoptósicos basales/suprabasales." },

    { id:"BOL-C20-03", capitulo:20, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Latencia típica del SJS/NET tras inicio de un fármaco causante en PRIMERA exposición:",
      opciones:["2 días","7-21 días","30-60 días","Más de 90 días"], correcta:1,
      explicacion:"7-21 días en primera exposición; puede ser 2 días en reexposición." },

    /* ─── CAP 23 — VASCULITIS / OCLUSIÓN ─── */
    { id:"BOL-C23-01", capitulo:23, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Tratamiento de primera línea en enfermedad por crioaglutininas:",
      opciones:[
        "Limitar exposición al frío + controlar discrasia/linfoproliferativo subyacente",
        "Anticoagulación crónica con warfarina",
        "Corticoides sistémicos a dosis altas",
        "Trasplante hematopoyético urgente"
      ], correcta:0,
      explicacion:"Texto literal del cap. 23." },

    { id:"BOL-C23-02", capitulo:23, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"Hasta la mitad de los pacientes con criofibrinogenemia «esencial» pueden desarrollar un linfoma a largo plazo.",
      respuesta:true,
      explicacion:"Cita literal del cap. 23." },

    /* ─── CAP 26 — DERMATOSIS NEUTRÓFILAS ─── */
    { id:"BOL-C26-01", capitulo:26, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la adhesión leucocitaria, las integrinas β2 (LFA-1) se unen a:",
      opciones:["ICAM-1 endotelial","Colágeno IV","Fibronectina","Laminina 332"], correcta:0,
      explicacion:"Integrinas β2 → ICAM-1 → adhesión firme." },

    /* ─── CAP 28 — BIOLOGÍA AMPOLLOSAS ─── */
    { id:"BOL-C28-01", capitulo:28, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Las lamininas son glucoproteínas heterotriméricas formadas por subunidades:",
      opciones:["α y β solamente","α, β y γ","α, β, γ y δ","Solo α en distintas isoformas"], correcta:1,
      explicacion:"3 subunidades (α, β, γ) unidas por puentes disulfuro." },

    /* ─── CAP 29 — PÉNFIGO ─── */
    { id:"BOL-C29-01", capitulo:29, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Antígeno diana de los autoanticuerpos IgG en el pénfigo foliáceo:",
      opciones:["Desmogleína 1 (Dsg1)","Desmogleína 3 (Dsg3)","BP180 (BPAG2)","Colágeno VII"], correcta:0,
      explicacion:"Pénfigo foliáceo = anti-Dsg1; vulgar = anti-Dsg3." },

    { id:"BOL-C29-02", capitulo:29, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"En el pénfigo inducido por penicilamina y captopril, predomina el pénfigo VULGAR sobre el foliáceo (relación 4:1).",
      respuesta:false,
      explicacion:"Falso. Predomina el FOLIÁCEO (4:1)." },

    { id:"BOL-C29-03", capitulo:29, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap29_foliaceo",
      enunciado:"Paciente con erosiones múltiples y escamocostras sobre base eritematosa en tronco; vesículas frágiles; escamas «en copos de maíz». SIN afectación mucosa. Diagnóstico y mecanismo:",
      opciones:[
        "Pénfigo vulgar — anti-Dsg3",
        "Pénfigo foliáceo — anti-Dsg1",
        "Penfigoide ampolloso — anti-BP180/BP230",
        "Dermatitis herpetiforme — IgA anti-transglutaminasa"
      ], correcta:1,
      explicacion:"Lesiones superficiales sin afectación mucosa + escamas en copos de maíz = foliáceo." },

    { id:"BOL-C29-04", capitulo:29, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap29_eritematoso",
      enunciado:"Placas eritematosas con escamocostras en nariz y región malar en alas de mariposa (pénfigo eritematoso). Esta entidad solapa pénfigo foliáceo con:",
      opciones:["Acné rosácea","Lupus eritematoso","Dermatomiositis","Esclerodermia localizada"], correcta:1,
      explicacion:"Solapamiento clínico-inmunológico con LE: IgG/C3 + ANA positivos." },

    /* ─── CAP 30 — PENFIGOIDE ─── */
    { id:"BOL-C30-01", capitulo:30, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Antígenos diana clásicos del penfigoide ampolloso:",
      opciones:["Dsg1 y Dsg3","BP180 (col. XVII) y BP230","Transglutaminasa tisular","Colágeno VII"], correcta:1,
      explicacion:"BP180 (BPAG2) y BP230 (BPAG1) — hemidesmosomas." },

    /* ─── CAP 34 — MILIARIA ─── */
    { id:"BOL-C34-01", capitulo:34, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Causa de la miliaria cristalina del recién nacido:",
      opciones:[
        "Obstrucción del conducto sudoríparo en capa córnea",
        "Bloqueo en porción profunda de capa espinosa",
        "Hipersensibilidad mediada por linfocitos T al sudor",
        "Colonización por Malassezia"
      ], correcta:0,
      explicacion:"Obstrucción en capa córnea → vesículas claras «en gotas de rocío»." },

    { id:"BOL-C34-02", capitulo:34, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"La miliaria rubra suele aparecer durante la PRIMERA semana de vida.",
      respuesta:false,
      explicacion:"Falso. Aparece DESPUÉS de la primera semana." },

    /* ─── CAP 36 — ACNÉ ─── */
    { id:"BOL-C36-01", capitulo:36, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Diámetro típico de las pápulas eritematosas del acné inflamatorio:",
      opciones:["< 1 mm","1-5 mm","5-15 mm","> 20 mm"], correcta:1,
      explicacion:"Texto literal: 1-5 mm." },

    { id:"BOL-C36-02", capitulo:36, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Tratamiento óptimo del acné nodular grave para EVITAR brote inducido por tratamiento:",
      opciones:[
        "Tetraciclinas orales a dosis estándar",
        "Isotretinoína inicial a BAJAS dosis",
        "Corticoides orales a dosis altas",
        "Retinoide tópico únicamente"
      ], correcta:1,
      explicacion:"Cap. 36 (Fig. 36-7): isotretinoína inicial a bajas dosis." },

    /* ─── CAP 37 — ROSÁCEA ─── */
    { id:"BOL-C37-01", capitulo:37, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la rosácea, los ácaros foliculares se asocian a infiltrado perifolicular predominantemente:",
      opciones:["CD8+","CD4+ cooperadores","Linfocitos B","Mastocitos"], correcta:1,
      explicacion:"Infiltrado perifolicular CD4+ predominante." },

    /* ─── CAP 38 — FOLICULITIS ─── */
    { id:"BOL-C38-01", capitulo:38, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Primera línea para foliculitis eosinófila pustulosa:",
      opciones:["Dapsona oral","Indometacina oral","Minociclina","Corticoides sistémicos"], correcta:1,
      explicacion:"Indometacina oral 50 mg/día." },

    { id:"BOL-C38-02", capitulo:38, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"En la foliculitis eosinófila asociada a VIH, el recuento de CD4 suele ser < 200 células/mm³.",
      respuesta:true,
      explicacion:"Cita literal del cap. 38." },

    /* ─── CAP 40 — LE ─── */
    { id:"BOL-C40-01", capitulo:40, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Anti-ADN bicatenario (ADNbc) en LES son característicos para:",
      opciones:["Lupus cutáneo subagudo aislado","Nefritis lúpica y seguimiento de su actividad","LE neonatal","Síndrome antifosfolípido"], correcta:1,
      explicacion:"Anti-ADNbc: gran especificidad para LES — útil en nefritis y seguimiento." },

    { id:"BOL-C40-02", capitulo:40, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Anticuerpos anti-rRNP (proteínas P ribosómicas) se asocian a:",
      opciones:["Nefritis lúpica difusa","LE neuropsiquiátrico","Síndrome de Sjögren","LE neonatal"], correcta:1,
      explicacion:"Anti-rRNP: 7-15% prevalencia, hasta 40% en asiáticos; LE neuropsiquiátrico." },

    /* ─── CAP 41 — DERMATOMIOSITIS / LECS ─── */
    { id:"BOL-C41-01", capitulo:41, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"PRIMER fármaco descrito como inductor de LECS:",
      opciones:["Terbinafina","Inhibidores del TNF","Hidroclorotiazida","Inhibidores de bomba de protones"], correcta:2,
      explicacion:"Texto literal del cap. 41." },

    /* ─── CAP 42 — DERMATOMIOSITIS ─── */
    { id:"BOL-C42-01", capitulo:42, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En biopsia muscular en dermatomiositis, ¿qué músculo se debe pedir EXPRESAMENTE al cirujano?",
      opciones:["Deltoides (es el más cómodo)","Tríceps","Cuádriceps","Gastrocnemio"], correcta:1,
      explicacion:"El deltoides está «relativamente respetado hasta fases avanzadas»; pedir tríceps." },

    /* ─── CAP 44 — MORFEA ─── */
    { id:"BOL-C44-01", capitulo:44, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Cómo se denomina la morfea lineal de frente y cuero cabelludo?",
      opciones:["Morfea en placas","Morfea en coup de sabre","Esclerodermia sistémica difusa","CREST"], correcta:1,
      explicacion:"Cita literal del cap. 44." },

    { id:"BOL-C44-02", capitulo:44, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Síndrome de Parry-Romberg:",
      opciones:[
        "Esclerosis intensa y atrofia muscular",
        "Pérdida progresiva de grasa subcutánea con casi nula esclerosis (atrofia hemifacial)",
        "Calcinosis cutánea masiva",
        "Hiperpigmentación sin atrofia"
      ], correcta:1,
      explicacion:"Texto literal del cap. 44." },

    { id:"BOL-C44-03", capitulo:44, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"La morfea lineal de extremidad puede afectar aponeurosis, músculo y tendones, causando debilidad muscular y compromiso articular.",
      respuesta:true,
      explicacion:"Cita literal." },

    { id:"BOL-C44-04", capitulo:44, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap44_morfea_lineal",
      enunciado:"Banda esclerótica lineal en brazo con hiper/hipopigmentación (Fig. 44-8). DIAGNÓSTICO DIFERENCIAL principal:",
      opciones:[
        "Esclerosis sistémica difusa",
        "Melorreostosis lineal (hiperostosis lineal subyacente «en cera de vela»)",
        "Lipodistrofia adquirida",
        "Mancha café con leche atípica"
      ], correcta:1,
      explicacion:"Leyenda Fig. 44-8: la melorreostosis es el ddx clave." },

    /* ─── CAP 51 — NUTRICIONALES ─── */
    { id:"BOL-C51-01", capitulo:51, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Cuadro de desnutrición primaria descrito en cap. 51:",
      opciones:["Pelagra","Desnutrición calórico-proteínica","Kwashiorkor secundario","Eritema necrolítico migratorio"], correcta:1,
      explicacion:"Kwashiorkor/marasmo es categoría primaria." },

    /* ─── CAP 55 — GENODERMATOSIS ─── */
    { id:"BOL-C55-01", capitulo:55, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Gen mutado en el síndrome de Birt-Hogg-Dubé:",
      opciones:["ATM","FLCN (foliculina)","BLM","APC"], correcta:1,
      explicacion:"BHD — AD — FLCN." },

    { id:"BOL-C55-02", capitulo:55, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El síndrome de Gardner se debe a mutaciones del gen:",
      opciones:["APC","PTEN","BRCA1","TP53"], correcta:0,
      explicacion:"Gardner — AD — APC (poliposis adenomatosa colon)." },

    { id:"BOL-C55-03", capitulo:55, nivel:"medio", tipo:"asociacion", fuente:"bolognia",
      enunciado:"Asocie cada síndrome con su gen causante:",
      pares:[
        { item:"Ataxia-telangiectasia",   pareja:"ATM" },
        { item:"Síndrome de Bloom",        pareja:"BLM (RECQL3)" },
        { item:"Birt-Hogg-Dubé",           pareja:"FLCN" },
        { item:"Cowden (PTEN hamartoma)",  pareja:"PTEN" },
        { item:"MEN 2A/2B",                pareja:"RET" }
      ],
      explicacion:"Tabla del cap. 55." },

    { id:"BOL-C55-04", capitulo:55, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Paciente con múltiples queratoacantomas, sebaceomas y antecedente familiar de cáncer colorrectal temprano (Muir-Torre). Los genes implicados son del grupo de:",
      opciones:[
        "Genes de reparación de desajuste (MSH2, MSH6, MLH1, PMS2)",
        "Genes RAS (HRAS, KRAS)",
        "Vía Hedgehog (PTCH1)",
        "Queratinas (KRT5, KRT14)"
      ], correcta:0,
      explicacion:"Muir-Torre — MSH2, MSH6, MLH1. Solapa con Lynch." },

    /* ═════════════════════════════════════
     * PREGUNTAS MIR OFICIALES (DERMATOLOGÍA)
     * ═════════════════════════════════════ */

    /* ── MIR 2025 ── */
    { id:"MIR25-22", capitulo:43, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·22] Mujer de 58 años, dolor en punta de los dedos. Antecedentes: 3 abortos, apendicectomía, reflujo, episodios de palidez en dedos con el frío desde hace 5 años progresivamente más intensos. ¿Qué hacer en PRIMER lugar?",
      opciones:[
        "Solicitar TC torácica",
        "Valoración quirúrgica vascular",
        "Determinación de ANA y anti-centrómero",
        "Tratamiento vasodilatador con prostaglandinas iv"
      ], correcta:3,
      explicacion:"Esclerosis sistémica limitada (Raynaud + úlceras + reflujo). Ante isquemia crítica el vasodilatador es prioritario. El Ministerio dio por buena la opción 4." },

    { id:"MIR25-25", capitulo:77, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·25] Hombre de 36 años, prácticas sexuales de riesgo, lesiones cutáneas no pruriginosas 4 días. VIH negativo. Sífilis anti-treponema POSITIVA, RPR 1:32. Señale lo CORRECTO:",
      opciones:[
        "Análisis de líquido cefalorraquídeo",
        "La azitromicina oral es tratamiento alternativo eficaz",
        "Valoración clínica y serológica (RPR) a los 6 y 12 meses",
        "Si RPR positivo a los 12 meses está indicado retratar"
      ], correcta:2,
      explicacion:"Sífilis secundaria: penicilina benzatínica IM dosis única; no punción lumbar. Seguimiento serológico recomendado." },

    { id:"MIR25-36", capitulo:29, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·36] ¿Qué pareja Enfermedad–Autoanticuerpo es INCORRECTA en el contexto de paso transplacentario?",
      opciones:[
        "Pénfigo vulgar – antidesmogleína 3",
        "Bloqueo cardíaco congénito – anti-Ro y anti-La",
        "Miastenia gravis – antirreceptor de acetilcolina",
        "Lupus eritematoso neonatal – anti-Sm"
      ], correcta:3,
      explicacion:"Anti-Sm son específicos del LES, NO del LE neonatal (que se asocia a anti-Ro y anti-La)." },

    { id:"MIR25-46", capitulo:138, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·46] Hombre de 79 años (HTA, hiperuricemia, artrosis). Tras excursión sin protección solar, eritema y edema bilateral de párpados. Tratamiento: hidroclorotiazida 25 mg, amlodipino 5 mg, atorvastatina 10 mg, apixaban 5 mg. ¿Cuál es el fármaco más probable causante de fotosensibilidad?",
      opciones:["Hidroclorotiazida","Amlodipino","Atorvastatina","Apixaban"], correcta:0,
      explicacion:"Las tiazidas son inductores conocidos de fotosensibilidad." },

    { id:"MIR25-141", capitulo:67, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·141] ¿A qué proteína de superficie se une pembrolizumab?",
      opciones:["PD-1","PD-L1","CTLA-4","HER2"], correcta:0,
      explicacion:"Pembrolizumab es inhibidor de PD-1 — inmunoterapia en melanoma metastásico y otros." },

    { id:"MIR25-156", capitulo:46, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·156] Hombre de 45 años: vómitos 2-3 días, malestar abdominal, astenia 1 mes. PA 85/40 mmHg. Hiperpigmentación parcheada oral. Na 134 mEq/L. Primera sospecha:",
      opciones:["Hemocromatosis","Síndrome de Peutz-Jeghers","Enfermedad de Addison","Síndrome de Stevens-Johnson"], correcta:2,
      explicacion:"Insuficiencia suprarrenal primaria: hiperpigmentación mucosa, hipotensión, hiponatremia." },

    { id:"MIR25-160", capitulo:80, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·160] Mujer 25 años, herpes labial recurrente. Señale la opción INCORRECTA:",
      opciones:[
        "Si > 3 episodios anuales, profilaxis con valaciclovir 500 mg/12 h o 1 g/24 h durante 6 meses",
        "Lesión única leve: puede no requerir tratamiento o solo sulfato Zn/Cu",
        "Riesgo de afectación oftálmica: valaciclovir 1 g/8 h vo 7 días",
        "Importante fotoprotección — sol motiva recurrencias"
      ], correcta:0,
      explicacion:"La profilaxis se recomienda con > 6 episodios/año, no con > 3." },

    { id:"MIR25-161", capitulo:89, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·161] Hombre 50 años: erupción generalizada en tronco, fiebre, escara abdominal («mancha negra»). Cazador reciente. Señale la afirmación CIERTA:",
      opciones:[
        "Es enfermedad de declaración obligatoria",
        "El tratamiento de elección es amoxicilina 1 g/8 h × 7 días",
        "Debe derivarse a centro hospitalario",
        "En la mayoría de casos la fiebre PRECEDE al exantema y la escara"
      ], correcta:0,
      explicacion:"Fiebre botonosa mediterránea (rickettsiosis): EDO. Tratamiento: doxiciclina." },

    { id:"MIR25-175", capitulo:41, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·175] Manifestación más característica de la miopatía de la dermatomiositis:",
      opciones:["Dificultad para andar","Dificultad para subir escaleras","Dificultad para abrocharse los botones","Dolor muscular"], correcta:1,
      explicacion:"Afectación de musculatura proximal — dificultad para subir escaleras." },

    { id:"MIR25-196", capitulo:74, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·196] Niño 3 años, dermatitis atópica leve. Lesiones en cara/glúteos que pasaron de máculas a vesículas/erosiones con costras AMARILLENTAS, extensión rápida. Brote escolar. Sin fiebre. Diagnóstico:",
      opciones:["Impétigo contagioso","Molluscum contagiosum","Herpes virus","Candidiasis mucocutánea"], correcta:0,
      explicacion:"Costras amarillentas + brote escolar = impétigo." },

    { id:"MIR25-197", capitulo:67, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·197] Hombre 50 años: lesión pigmentada 8 mm en pierna, asimétrica, bordes irregulares, varios tonos, prurito ocasional. Madre con melanoma. Dermatoscopia: red irregular, puntos negros, regresión, vasos irregulares. Manejo:",
      opciones:[
        "Biopsia por punción de la parte más pigmentada",
        "Biopsia mediante escisión completa con márgenes 2 mm + histopatología",
        "Monitorización con dermatoscopia digital + control en 3 meses",
        "Terapia fotodinámica antes de biopsia"
      ], correcta:1,
      explicacion:"Sospecha de melanoma: biopsia escisional (NO parcial — alteraría el Breslow)." },

    { id:"MIR25-198", capitulo:106, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·198] Lactante 1 mes (prematura 32 sem) con 3 hemangiomas infantiles superficiales. Señale la INCORRECTA:",
      opciones:[
        "Tienen 3 fases: proliferativa, estabilidad, involutiva",
        "Son la única lesión positiva para GLUT-1",
        "Es necesario eco abdominal por riesgo de hemangiomas viscerales",
        "Si no hay compromiso funcional ni estético, opción válida es no tratar"
      ], correcta:2,
      explicacion:"Con solo 3 hemangiomas no se justifica imagen sistemática. Se hace con > 5 lesiones o si son segmentarios." },

    { id:"MIR25-199", capitulo:133, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·199] Hombre 45 años (HTA, dislipemia, hígado graso, esclerosis múltiple en fingolimod). Psoriasis BSA > 10%, PASI 14. Falló a acitretina 15 meses. Mejor opción:",
      opciones:[
        "Fototerapia",
        "Biológico anti-TNF",
        "Ciclosporina",
        "Biológico anti-IL-23"
      ], correcta:3,
      explicacion:"HTA contraindica ciclosporina; esclerosis múltiple contraindica anti-TNF. Anti-IL-23 es la mejor opción." },

    { id:"MIR25-205", capitulo:41, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·205] En miopatías inflamatorias, autoanticuerpo que alerta de neumonía intersticial AGRESIVA:",
      opciones:["Anti-TIF-1","Anti-MDA-5","Anti-Mi2","Anti-PM/SCL"], correcta:1,
      explicacion:"Anti-MDA-5: enfermedad pulmonar intersticial rápidamente progresiva. Anti-TIF-1 → neoplasia; Anti-Mi2 → buen pronóstico." },

    /* ── MIR 2026 ── */
    { id:"MIR26-09", capitulo:17, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·9] Joven tras fiesta de mojitos en piscina presenta lesiones en manos, leve prurito. ¿Cuál afirmación es FALSA (caso de fitofotodermatitis)?",
      opciones:[
        "Le preguntará si exprimió la lima de los mojitos",
        "Evolución favorable, aunque la hiperpigmentación residual puede ser persistente",
        "Prevención: evitar contacto + fotoprotección",
        "Mecanismo: hipersensibilidad tipo IV mediada por linfocitos T"
      ], correcta:3,
      explicacion:"La fitofotodermatitis es FOTOTÓXICA no inmunológica — no requiere sensibilización previa, no es hipersensibilidad IV." },

    { id:"MIR26-17", capitulo:117, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·17] Hombre 67 años, exfumador rural, dolor labial inferior, lesiones desde hace años; último mes y medio cambio aspecto. Actitud:",
      opciones:[
        "Aciclovir oral supresor para herpes labial",
        "Imiquimod tópico + fotoprotección",
        "Biopsia de labio para descartar CE invasivo",
        "Sospechar úlcera neuropática y derivar a Neurología"
      ], correcta:2,
      explicacion:"Queilitis actínica con sospecha de carcinoma epidermoide: biopsia obligada." },

    { id:"MIR26-18", capitulo:26, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·18] Mujer 62 años (HTA, DM), 2 úlceras dolorosas 6 meses en pierna, sin respuesta a antibióticos, crecimiento progresivo. Actitud:",
      opciones:[
        "Biopsia para estudio microbiológico de micobacterias/micosis profundas",
        "Cultivos + desbridamiento quirúrgico + ertapenem iv + compresión",
        "Eco-Doppler venosa + compresión",
        "Biopsia + prednisona oral 0,5-1,5 mg/kg/día"
      ], correcta:3,
      explicacion:"Pioderma gangrenoso (dermatosis neutrofílica). Diagnóstico clínico-patológico; corticoides 1ª línea. DESBRIDAMIENTO CONTRAINDICADO (patergia)." },

    { id:"MIR26-19", capitulo:30, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·19] Hombre 79 años, prurito intenso 6+ meses sin respuesta a antihistamínicos, lesiones polimorfas urticariformes/excoriadas/descamativas. Biopsia: infiltrado eosinofílico subepidérmico, eosinófilos alineados en unión dermoepidérmica. Actitud:",
      opciones:[
        "Aumentar antihistamínicos a dosis cuádruple",
        "Prednisona oral 0,5-0,75 mg/kg/día",
        "Ivermectina oral",
        "Suspender medicación y metilprednisolona/dexclorfeniramina iv"
      ], correcta:1,
      explicacion:"Penfigoide ampolloso: corticoides sistémicos 1ª línea." },

    { id:"MIR26-20", capitulo:52, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·20] Mujer 35 años (anticonceptivos). Lesiones en dorso de manos/cuello tras ingresos por dolor abdominal sin diagnóstico. Lesiones recurrentes con fotoexposición y mínimos traumatismos. Diagnóstico:",
      opciones:[
        "Porfiria aguda intermitente",
        "Porfiria variegata",
        "Porfiria cutánea tarda",
        "Déficit de ALA-deshidratasa"
      ], correcta:1,
      explicacion:"Porfiria variegata: déficit de protoporfirinógeno oxidasa (AD) — crisis neuroviscerales agudas + manifestaciones cutáneas tipo PCT." },

    { id:"MIR26-21", capitulo:85, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·21] Lactante 8 meses, eritema del pañal 2 semanas que no mejora con emolientes/cremas barrera. Tratamiento:",
      opciones:[
        "Corticoide tópico de potencia media",
        "Higiene + secado + antifúngico tópico (nistatina o imidazólico)",
        "Higiene + secado + pasta al agua + cambios más frecuentes",
        "Corticoide + antibiótico + antifúngico empíricos 10-14 días"
      ], correcta:1,
      explicacion:"Sobreinfección por Candida (eritema intenso del fondo del pliegue + lesiones satélite) — antifúngico tópico." },

    { id:"MIR26-133", capitulo:67, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·133] Varón 63 años con miastenia gravis + melanoma estadio IV BRAF V600E positivo. Tratamiento más razonable:",
      opciones:["Pembrolizumab","Nivolumab","Dabrafenib + trametinib","Nivolumab + ipilimumab"], correcta:2,
      explicacion:"Enfermedad autoinmune previa (miastenia gravis): la inmunoterapia podría exacerbarla. Terapia dirigida BRAF+MEK es la opción." },

    { id:"MIR26-135", capitulo:53, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·135] Varón 25 años con uveítis anterior + úlceras orales dolorosas recurrentes + pápula tras punción de vacuna. Diagnóstico:",
      opciones:["Sarcoidosis","Sífilis","Enfermedad de Behçet","Enfermedad de Crohn"], correcta:2,
      explicacion:"Tríada de Behçet: uveítis + úlceras orales + patergia." },

    { id:"MIR26-179", capitulo:133, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·179] Hombre 60 años (fumador 30 paq/año, ictus previo, AAS), artritis psoriásica que falló a MTX 25 mg/sem. ¿Cuál NO es la mejor opción de cambio?",
      opciones:[
        "Biológico anti-TNF",
        "Sintético inhibidor de JAK",
        "Biológico anti-IL17",
        "Biológico anti-IL12/23"
      ], correcta:1,
      explicacion:"En > 50 años con alta comorbilidad CV, los inhibidores de JAK aumentan riesgo de MACE y trombosis venosa." }

  ]
};

/* Stats helper */
window.DERMAPREP_DATA.estadisticas = (() => {
  const D = window.DERMAPREP_DATA;
  const s = { total:D.preguntas.length, facil:0, medio:0, dificil:0, porCapitulo:{}, porFuente:{} };
  D.preguntas.forEach(q => {
    s[q.nivel] = (s[q.nivel]||0)+1;
    s.porCapitulo[q.capitulo] = (s.porCapitulo[q.capitulo]||0)+1;
    s.porFuente[q.fuente] = (s.porFuente[q.fuente]||0)+1;
  });
  return s;
})();
