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
    // ───────── VOLUMEN 2 — Cap. 56-110 PROCESADOS desde PDF ─────────
    { num:56, titulo:"Trastornos del colágeno hereditarios",                 seccion:9,  presente:true  },
    { num:57, titulo:"Ictiosis y trastornos de la queratinización",          seccion:9,  presente:true  },
    { num:58, titulo:"Trastornos eritrodérmicos hereditarios",               seccion:9,  presente:true  },
    { num:59, titulo:"Anomalías ectodérmicas",                               seccion:9,  presente:true  },
    { num:60, titulo:"Inmunodeficiencias primarias",                         seccion:9,  presente:true  },
    { num:61, titulo:"Síndromes neurocutáneos",                              seccion:9,  presente:true  },
    // ───────── SECCIÓN 10 — Pigmentarios ─────────
    { num:62, titulo:"Mosaicismo y lesiones lineales",                       seccion:10, presente:true  },
    { num:63, titulo:"Dermopatías metabólicas",                              seccion:10, presente:true  },
    { num:64, titulo:"Trastornos del desarrollo de la piel",                 seccion:10, presente:true  },
    { num:65, titulo:"Biología de los melanocitos",                          seccion:10, presente:true  },
    { num:66, titulo:"Trastornos de hipopigmentación (incluido vitíligo)",   seccion:10, presente:true  },
    { num:67, titulo:"Trastornos de hiperpigmentación",                      seccion:10, presente:true  },
    { num:68, titulo:"Nevos melanocíticos",                                  seccion:10, presente:true  },
    { num:69, titulo:"Melanoma cutáneo",                                     seccion:10, presente:true  },
    // ───────── SECCIÓN 11 — Pelo, uñas, mucosas ─────────
    { num:70, titulo:"Biología del pelo",                                    seccion:11, presente:true  },
    { num:71, titulo:"Alopecias",                                            seccion:11, presente:true  },
    { num:72, titulo:"Hipertricosis e hirsutismo",                           seccion:11, presente:true  },
    { num:73, titulo:"Trastornos de la uña",                                 seccion:11, presente:true  },
    { num:74, titulo:"Enfermedades de las mucosas orales y genitales",       seccion:11, presente:true  },
    // ───────── SECCIÓN 12 — Infecciones ─────────
    { num:75, titulo:"Infecciones bacterianas",                              seccion:12, presente:true  },
    { num:76, titulo:"Infecciones micobacterianas (incl. lepra)",            seccion:12, presente:true  },
    { num:77, titulo:"Enfermedades fúngicas (micosis)",                      seccion:12, presente:true  },
    { num:78, titulo:"Rickettsiosis, ehrlichiosis y enf. de Lyme",           seccion:12, presente:true  },
    { num:79, titulo:"Treponematosis (sífilis y endémicas)",                 seccion:12, presente:true  },
    { num:80, titulo:"Virus del herpes humanos",                             seccion:12, presente:true  },
    { num:81, titulo:"Otras infecciones víricas (parvovirus B19 y otros)",   seccion:12, presente:true  },
    { num:82, titulo:"Verrugas (infección por VPH)",                         seccion:12, presente:true  },
    { num:83, titulo:"Manifestaciones cutáneas del VIH",                     seccion:12, presente:true  },
    { num:84, titulo:"Leishmaniasis y otras infecciones por protozoos",      seccion:12, presente:true  },
    { num:85, titulo:"Otras infestaciones parasitarias",                     seccion:12, presente:true  },
    { num:86, titulo:"Infestaciones por insectos: escabiosis y otras",       seccion:12, presente:true  },
    // ───────── SECCIÓN 13 — Factores físicos ─────────
    { num:87, titulo:"Trastornos fotodermatológicos",                        seccion:13, presente:true  },
    { num:88, titulo:"Dermopatías ambientales y deportivas",                 seccion:13, presente:true  },
    { num:89, titulo:"Trastornos facticios y patomimia",                     seccion:13, presente:true  },
    { num:90, titulo:"Signos cutáneos de malos tratos",                      seccion:13, presente:true  },
    { num:91, titulo:"Trastornos psicocutáneos",                             seccion:13, presente:true  },
    // ───────── SECCIÓN 14 — Langerhans/Linfomas ─────────
    { num:92, titulo:"Histiocitosis y otros trastornos histiocíticos",       seccion:14, presente:true  },
    { num:93, titulo:"Mastocitosis cutánea",                                 seccion:14, presente:true  },
    { num:94, titulo:"Linfomas y leucemias cutáneos",                        seccion:14, presente:true  },
    // ───────── SECCIÓN 15 — Conjuntivos ─────────
    { num:95, titulo:"Atrofias del tejido conjuntivo",                       seccion:15, presente:true  },
    { num:96, titulo:"Trastornos perforantes",                               seccion:15, presente:true  },
    { num:97, titulo:"Seudoxantoma elástico y otras elastopatías",           seccion:15, presente:true  },
    { num:98, titulo:"Hipertrofias dérmicas (cicatrices y queloides)",       seccion:15, presente:true  },
    { num:99, titulo:"Trastornos misceláneos del tejido conjuntivo",         seccion:15, presente:true  },
    // ───────── SECCIÓN 16 — Grasa subcutánea ─────────
    { num:100,titulo:"Paniculitis",                                          seccion:16, presente:true  },
    { num:101,titulo:"Lipodistrofias",                                       seccion:16, presente:true  },
    { num:102,titulo:"Otros trastornos del tejido subcutáneo",               seccion:16, presente:true  },
    // ───────── SECCIÓN 17 — Vasculares ─────────
    { num:103,titulo:"Hemangiomas infantiles",                               seccion:17, presente:true  },
    { num:104,titulo:"Malformaciones vasculares",                            seccion:17, presente:true  },
    { num:105,titulo:"Otros tumores y trastornos vasculares",                seccion:17, presente:true  },
    { num:106,titulo:"Insuficiencia venosa, livedo y úlceras vasculares",    seccion:17, presente:true  },
    { num:107,titulo:"Principios de biología tumoral (CBC, CE)",             seccion:17, presente:true  },
    { num:108,titulo:"Carcinoma basocelular",                                seccion:17, presente:true  },
    { num:109,titulo:"Carcinoma epidermoide / escamoso",                     seccion:17, presente:true  },
    { num:110,titulo:"Queratosis actínica y otros precancerosos",            seccion:17, presente:true  },
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
    "cap44_morfea_lineal": { src:"images/fig_44_morfea_lineal.jpg",          caption:"Figura 44-8 — Morfea lineal de una extremidad: banda esclerótica con hiper/hipopigmentación." },

    /* ──── VOL 2 ──── */
    "cap62_mosaicismo":    { src:"images/fig_62_pigmentacion.jpg",           caption:"Figura del cap. 62 — Mosaicismo cutáneo: lesión hiperpigmentada con patrón segmentario; histología con melanocitos abundantes." },
    "cap66_leucodermia":   { src:"images/fig_66_leucodermia_lineal.jpg",     caption:"Diagrama del cap. 66 — Diagnóstico diferencial de la leucodermia lineal." },
    "cap67_demarcacion":   { src:"images/fig_67_lineas_demarcacion.jpg",     caption:"Figura del cap. 67 — Líneas de demarcación pigmentaria (grupos A-H)." },
    "cap67_hiperpig":      { src:"images/fig_67_hiperpigmentacion.jpg",      caption:"Capítulo 67 — Hiperpigmentación postinflamatoria." },
    "cap77_koh":           { src:"images/fig_77_hongos_koh.jpg",             caption:"Figura 77-5 — Preparaciones de hidróxido de potasio (KOH). A. Tiña versicolor: levaduras y formas miceliales cortas. B. Dermatofito (Trichophyton tonsurans). D. Levaduras y seudohifas de candidiasis." },
    "cap80_herpes":        { src:"images/fig_80_lesiones_herpeticas.jpg",    caption:"Figura del cap. 80 — Lesiones herpéticas: erosiones agrupadas con costras hemáticas en zonas características." },
    "cap87_hidroa":        { src:"images/fig_87_hidroa_vaccin.jpg",          caption:"Figura del cap. 87 — Hidroa vacciniforme: vesículas, costras y cicatrices varioliformes en zonas fotoexpuestas (cara)." },
    "cap88_radioscopia":   { src:"images/fig_88_radioscopia.jpg",            caption:"Figura 88-5 — Dermatitis por radiación radioscópica: lesiones secundarias a procedimientos cardíacos repetidos." },
    "cap89_mucosa":        { src:"images/fig_89_mucosa.jpg",                 caption:"Figura del cap. 89 — Hallazgos orales en patomimia (autolesión) o malos tratos." },
    "cap90_inmersion":     { src:"images/fig_90_inmersion.jpg",              caption:"Figura 90-5 — Quemadura por inmersión en agua caliente. Obsérvense las líneas de demarcación, bien definidas y simétricas (signo de quemadura no accidental)." },
    "cap98_queloides":     { src:"images/fig_98_queloides.jpg",              caption:"Figura 98-1 — Queloides. Localizaciones frecuentes: tronco superior y cuello. Se aprecia extensión a piel adyacente normal en patrón en garra." },
    "cap104_clapo":        { src:"images/fig_104_clapo.jpg",                 caption:"Figura 104-11 — Síndrome CLAPO. A. Malformación capilar en labio inferior y mentón con malformación linfática cervical. B. Malformación linfática microquística en lengua." },

    /* ──── DermNet (imágenes enlazadas, no descargadas, bajo CC BY-NC-ND 4.0) ──── */
    /* Cada imagen mantiene la marca de agua y enlace a DermNet por requerimiento de licencia */
    "dermnet_gpp_1": {
      src:"https://dermnetnz.org/assets/Uploads/gen-pustular-psoriasis-01.jpg",
      caption:"Psoriasis pustulosa generalizada (von Zumbusch). Imagen © DermNet New Zealand · <a href='https://dermnetnz.org/topics/generalised-pustular-psoriasis' target='_blank' rel='noopener'>dermnetnz.org/topics/generalised-pustular-psoriasis</a> · Uso bajo licencia CC BY-NC-ND 4.0",
      external:true
    },
    "dermnet_gpp_2": {
      src:"https://dermnetnz.org/assets/Uploads/gen-pustular-psoriasis-08.jpg",
      caption:"Psoriasis pustulosa generalizada — confluencia en lagos de pus. Imagen © DermNet New Zealand · <a href='https://dermnetnz.org/topics/generalised-pustular-psoriasis' target='_blank' rel='noopener'>dermnetnz.org/topics/generalised-pustular-psoriasis</a> · CC BY-NC-ND 4.0",
      external:true
    },
    "dermnet_gpp_3": {
      src:"https://dermnetnz.org/assets/collection/Generalised-pustular-psoriasis/generalised-pustular-psoriasis-0002.jpg",
      caption:"Psoriasis pustulosa en piel de color (oscura) — el eritema puede ser difícil de detectar y subestimarse. Imagen © DermNet New Zealand · <a href='https://dermnetnz.org/topics/generalised-pustular-psoriasis' target='_blank' rel='noopener'>dermnetnz.org</a> · CC BY-NC-ND 4.0",
      external:true
    },
    "dermnet_gpp_4": {
      src:"https://dermnetnz.org/assets/collection/Generalised-pustular-psoriasis/generalised-pustular-psoriasis-0006.jpg",
      caption:"Pústulas superficiales en GPP — pústulas estériles no foliculares de 2-3 mm. Imagen © DermNet New Zealand · <a href='https://dermnetnz.org/topics/generalised-pustular-psoriasis' target='_blank' rel='noopener'>dermnetnz.org</a> · CC BY-NC-ND 4.0",
      external:true
    }
  },

  /* ════════════════════════════════════════════════════
   *  TEMARIO OFICIAL (orden y enfoque de estudio)
   *  Cada tema mapea uno o varios capítulos del Bolognia
   * ════════════════════════════════════════════════════ */
  temario: [
    { id:1,  nombre:"Principios básicos de dermatología",                          capitulos:[0]   },
    { id:2,  nombre:"Anatomía y fisiología de la piel",                            capitulos:[1]   },
    { id:3,  nombre:"Desarrollo y mantenimiento de la piel",                       capitulos:[2]   },
    { id:4,  nombre:"Inmunología de la piel",                                      capitulos:[4]   },
    { id:5,  nombre:"Prurito y disestesia",                                        capitulos:[7]   },
    { id:6,  nombre:"Enfermedades psicocutáneas",                                  capitulos:[89, 91] },
    { id:7,  nombre:"Psoriasis (incl. pustulosa generalizada)",                    capitulos:[8]   },
    { id:8,  nombre:"Otros trastornos papuloescamosos / Pitiriasis",               capitulos:[9, 10] },
    { id:9,  nombre:"Eritrodermia",                                                capitulos:[8, 12] },
    { id:10, nombre:"Liquen plano y dermatosis liquenoides",                       capitulos:[11]  },
    { id:11, nombre:"Dermatitis atópica",                                          capitulos:[12]  },
    { id:12, nombre:"Otras erupciones eccematosas",                                capitulos:[13]  },
    { id:13, nombre:"Dermatitis de contacto alérgica",                             capitulos:[14]  },
    { id:14, nombre:"Dermatitis de contacto irritativa",                           capitulos:[15]  },
    { id:15, nombre:"Fitodermatosis",                                              capitulos:[17]  },
    { id:16, nombre:"Urticaria y angioedema",                                      capitulos:[18]  },
    { id:17, nombre:"Eritemas figurados",                                          capitulos:[19]  },
    { id:18, nombre:"Eritema multiforme, SSJ y NET",                               capitulos:[20]  },
    { id:19, nombre:"Erupciones medicamentosas",                                   capitulos:[20]  },
    { id:20, nombre:"Púrpura: mecanismos y dx diferencial",                        capitulos:[22]  },
    { id:21, nombre:"Vasculitis cutáneas",                                         capitulos:[23]  },
    { id:22, nombre:"Dermatosis neutrofílicas (Sweet, pioderma, Behçet)",          capitulos:[26]  },
    { id:23, nombre:"Dermatosis del embarazo",                                     capitulos:[27]  },
    { id:24, nombre:"Biología de la membrana basal",                               capitulos:[28]  },
    { id:25, nombre:"Pénfigo",                                                     capitulos:[29]  },
    { id:26, nombre:"Penfigoide ampolloso",                                        capitulos:[30]  },
    { id:27, nombre:"Dermatitis herpetiforme y enf. por IgA lineal",               capitulos:[31]  },
    { id:28, nombre:"Estructura de glándulas ecrinas, apocrinas y sebáceas",       capitulos:[34]  },
    { id:29, nombre:"Acné vulgar",                                                 capitulos:[36]  },
    { id:30, nombre:"Rosácea y trastornos asociados",                              capitulos:[37]  },
    { id:31, nombre:"Foliculitis y otros trastornos foliculares",                  capitulos:[38]  },
    { id:32, nombre:"Lupus eritematoso",                                           capitulos:[40]  },
    { id:33, nombre:"Dermatomiositis",                                             capitulos:[41]  },
    { id:34, nombre:"Esclerosis sistémica",                                        capitulos:[42]  },
    { id:35, nombre:"Morfea y liquen escleroso",                                   capitulos:[44]  },
    { id:36, nombre:"Manif. cutáneas de enfermedad sistémica",                     capitulos:[53]  },
    { id:37, nombre:"Biología de los queratinocitos",                              capitulos:[56]  },
    { id:38, nombre:"Darier y Hailey-Hailey",                                      capitulos:[59]  },
    { id:39, nombre:"Biología de los melanocitos",                                 capitulos:[65]  },
    { id:40, nombre:"Vitíligo y trastornos de hipopigmentación",                   capitulos:[66]  },
    { id:41, nombre:"Trastornos de hiperpigmentación",                             capitulos:[67]  },
    { id:42, nombre:"Biología de pelo y uñas",                                     capitulos:[70]  },
    { id:43, nombre:"Alopecias",                                                   capitulos:[71]  },
    { id:44, nombre:"Trastornos ungueales",                                        capitulos:[73]  },
    { id:45, nombre:"Enfermedad oral",                                             capitulos:[74]  },
    { id:46, nombre:"Infecciones bacterianas",                                     capitulos:[75]  },
    { id:47, nombre:"Micobacterias (lepra, TBC cutánea, no TBC)",                  capitulos:[76]  },
    { id:48, nombre:"Enfermedades fúngicas (superficiales, profundas, sistémicas)", capitulos:[77]  },
    { id:49, nombre:"Manif. cutáneas de VIH",                                      capitulos:[83]  },
    { id:50, nombre:"Virus del papiloma humano (VPH)",                             capitulos:[82]  },
    { id:51, nombre:"Virus del herpes humanos",                                    capitulos:[80]  },
    { id:52, nombre:"Otras enfermedades víricas (sarampión, rubéola, B19, etc.)",  capitulos:[81]  },
    { id:53, nombre:"ETS (sífilis, gonorrea, chancroide, LGV)",                    capitulos:[79]  },
    { id:54, nombre:"Protozoarios y helmintos (leishmaniasis, etc.)",              capitulos:[84]  },
    { id:55, nombre:"Infestaciones (escabiosis, pediculosis, miasis)",             capitulos:[86]  },
    { id:56, nombre:"Granulomas no infecciosos",                                   capitulos:[99]  },
    { id:57, nombre:"Biología de la matriz extracelular",                          capitulos:[95]  },
    { id:58, nombre:"Hipertrofias dérmicas (cicatrices y queloides)",              capitulos:[98]  },
    { id:59, nombre:"Paniculitis (eritema nudoso, eritema indurado)",              capitulos:[100, 21] },
    { id:60, nombre:"Úlceras",                                                     capitulos:[106] },
    { id:61, nombre:"Hemangiomas infantiles",                                      capitulos:[103] },
    { id:62, nombre:"Malformaciones vasculares",                                   capitulos:[104] },
    { id:63, nombre:"Proliferaciones y tumores epidérmicos benignos",              capitulos:[109] },
    { id:64, nombre:"Quistes cutáneos",                                            capitulos:[109] },
    { id:65, nombre:"Neoplasias melanocíticas benignas",                           capitulos:[68]  },
    { id:66, nombre:"Melanoma",                                                    capitulos:[69]  },
    { id:67, nombre:"Linfoma cutáneo de células T",                                capitulos:[94]  },
    { id:68, nombre:"Lesiones epiteliales precancerosas",                          capitulos:[110] },
    { id:69, nombre:"Carcinoma espinocelular / epidermoide",                       capitulos:[109] },
    { id:70, nombre:"Carcinoma basocelular",                                       capitulos:[108] },
    { id:71, nombre:"Principios de biología tumoral (CBC/CE)",                     capitulos:[107] }
  ],

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

    { id:"MIR25-25", capitulo:79, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
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

    { id:"MIR25-46", capitulo:87, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·46] Hombre de 79 años (HTA, hiperuricemia, artrosis). Tras excursión sin protección solar, eritema y edema bilateral de párpados. Tratamiento: hidroclorotiazida 25 mg, amlodipino 5 mg, atorvastatina 10 mg, apixaban 5 mg. ¿Cuál es el fármaco más probable causante de fotosensibilidad?",
      opciones:["Hidroclorotiazida","Amlodipino","Atorvastatina","Apixaban"], correcta:0,
      explicacion:"Las tiazidas son inductores conocidos de fotosensibilidad." },

    { id:"MIR25-141", capitulo:69, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2025",
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

    { id:"MIR25-161", capitulo:78, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
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

    { id:"MIR25-196", capitulo:75, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·196] Niño 3 años, dermatitis atópica leve. Lesiones en cara/glúteos que pasaron de máculas a vesículas/erosiones con costras AMARILLENTAS, extensión rápida. Brote escolar. Sin fiebre. Diagnóstico:",
      opciones:["Impétigo contagioso","Molluscum contagiosum","Herpes virus","Candidiasis mucocutánea"], correcta:0,
      explicacion:"Costras amarillentas + brote escolar = impétigo." },

    { id:"MIR25-197", capitulo:69, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·197] Hombre 50 años: lesión pigmentada 8 mm en pierna, asimétrica, bordes irregulares, varios tonos, prurito ocasional. Madre con melanoma. Dermatoscopia: red irregular, puntos negros, regresión, vasos irregulares. Manejo:",
      opciones:[
        "Biopsia por punción de la parte más pigmentada",
        "Biopsia mediante escisión completa con márgenes 2 mm + histopatología",
        "Monitorización con dermatoscopia digital + control en 3 meses",
        "Terapia fotodinámica antes de biopsia"
      ], correcta:1,
      explicacion:"Sospecha de melanoma: biopsia escisional (NO parcial — alteraría el Breslow)." },

    { id:"MIR25-198", capitulo:103, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2025",
      enunciado:"[MIR 2025·198] Lactante 1 mes (prematura 32 sem) con 3 hemangiomas infantiles superficiales. Señale la INCORRECTA:",
      opciones:[
        "Tienen 3 fases: proliferativa, estabilidad, involutiva",
        "Son la única lesión positiva para GLUT-1",
        "Es necesario eco abdominal por riesgo de hemangiomas viscerales",
        "Si no hay compromiso funcional ni estético, opción válida es no tratar"
      ], correcta:2,
      explicacion:"Con solo 3 hemangiomas no se justifica imagen sistemática. Se hace con > 5 lesiones o si son segmentarios." },

    { id:"MIR25-199", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2025",
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

    { id:"MIR26-21", capitulo:77, nivel:"facil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·21] Lactante 8 meses, eritema del pañal 2 semanas que no mejora con emolientes/cremas barrera. Tratamiento:",
      opciones:[
        "Corticoide tópico de potencia media",
        "Higiene + secado + antifúngico tópico (nistatina o imidazólico)",
        "Higiene + secado + pasta al agua + cambios más frecuentes",
        "Corticoide + antibiótico + antifúngico empíricos 10-14 días"
      ], correcta:1,
      explicacion:"Sobreinfección por Candida (eritema intenso del fondo del pliegue + lesiones satélite) — antifúngico tópico." },

    { id:"MIR26-133", capitulo:69, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·133] Varón 63 años con miastenia gravis + melanoma estadio IV BRAF V600E positivo. Tratamiento más razonable:",
      opciones:["Pembrolizumab","Nivolumab","Dabrafenib + trametinib","Nivolumab + ipilimumab"], correcta:2,
      explicacion:"Enfermedad autoinmune previa (miastenia gravis): la inmunoterapia podría exacerbarla. Terapia dirigida BRAF+MEK es la opción." },

    { id:"MIR26-135", capitulo:53, nivel:"medio", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·135] Varón 25 años con uveítis anterior + úlceras orales dolorosas recurrentes + pápula tras punción de vacuna. Diagnóstico:",
      opciones:["Sarcoidosis","Sífilis","Enfermedad de Behçet","Enfermedad de Crohn"], correcta:2,
      explicacion:"Tríada de Behçet: uveítis + úlceras orales + patergia." },

    { id:"MIR26-179", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"mir-2026",
      enunciado:"[MIR 2026·179] Hombre 60 años (fumador 30 paq/año, ictus previo, AAS), artritis psoriásica que falló a MTX 25 mg/sem. ¿Cuál NO es la mejor opción de cambio?",
      opciones:[
        "Biológico anti-TNF",
        "Sintético inhibidor de JAK",
        "Biológico anti-IL17",
        "Biológico anti-IL12/23"
      ], correcta:1,
      explicacion:"En > 50 años con alta comorbilidad CV, los inhibidores de JAK aumentan riesgo de MACE y trombosis venosa." },

    /* ═══════════════════════════════════════════════════════
     *   PREGUNTAS DEL VOLUMEN 2 (capítulos 56-110)
     * ═══════════════════════════════════════════════════════ */

    /* ─── CAP 62 — MOSAICISMO Y LESIONES LINEALES ─── */
    { id:"BOL-C62-01", capitulo:62, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Según la tabla 62-3, las lesiones cutáneas en mosaico que afectan a melanoblastos siguen típicamente un patrón:",
      opciones:[
        "Dermatómico",
        "Líneas de Blaschko, en bloque o filoide",
        "Segmentario muscular",
        "Difuso simétrico"
      ], correcta:1,
      explicacion:"Los melanoblastos migran como células únicas y producen pigmentación siguiendo líneas de Blaschko, en bloque o patrón filoide." },

    { id:"BOL-C62-02", capitulo:62, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"El mosaicismo de tipo 2 ocurre cuando un individuo con una mutación heterocigótica de la línea germinal en un trastorno autosómico dominante desarrolla una mutación poscigótica en el otro alelo («segundo impacto»), causando una región con carga genética doble.",
      respuesta:true,
      explicacion:"Texto literal del cap. 62. Se ha demostrado a nivel molecular en Hailey-Hailey, Darier, PTEN hamartoma, NF1 y síndrome del nevo basocelular." },

    { id:"BOL-C62-03", capitulo:62, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Mecanismo opuesto al «segundo impacto» que produce un área respetada (sin enfermedad) en un paciente con genodermatosis:",
      opciones:[
        "Pérdida de heterocigosidad",
        "Mosaicismo revertido (mutación «de retorno»)",
        "Recombinación somática primaria",
        "Conversión génica letal"
      ], correcta:1,
      explicacion:"El mosaicismo revertido produce un área respetada por restauración del marco de lectura o segunda mutación que silencia el alelo mutante." },

    /* ─── CAP 66 — TRASTORNOS DE HIPOPIGMENTACIÓN ─── */
    { id:"BOL-C66-01", capitulo:66, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap66_leucodermia",
      enunciado:"En el algoritmo de leucodermia lineal del cap. 66, un paciente presenta una banda hipopigmentada CON hallazgos sistémicos asociados. El diagnóstico más probable es:",
      opciones:[
        "Vitíligo segmentario",
        "Trastorno de pigmentación segmentario",
        "Hipomelanosis de Ito",
        "Portador de Menkes"
      ], correcta:2,
      explicacion:"Algoritmo del cap. 66: hipopigmentación lineal nevoide CON hallazgos sistémicos positivos → hipomelanosis de Ito." },

    { id:"BOL-C66-02", capitulo:66, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap66_leucodermia",
      enunciado:"Niña con bandas lineales blancas en tórax y abdomen, con atrofia cribiforme, telangiectasias y grasa sustitutiva de la dermis a la biopsia. Diagnóstico:",
      opciones:[
        "Hipomelanosis de Ito",
        "Síndrome de Goltz (hipoplasia dérmica focal)",
        "Incontinencia pigmentaria",
        "Liquen escleroso"
      ], correcta:1,
      explicacion:"Algoritmo de leucodermia lineal cap. 66: atrofia cribiforme + telangiectasias + grasa sustitutiva = síndrome de Goltz." },

    /* ─── CAP 67 — TRASTORNOS DE HIPERPIGMENTACIÓN ─── */
    { id:"BOL-C67-01", capitulo:67, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Trastorno asociado a hiperpigmentación postinflamatoria con predilección por la cara, especialmente frecuente en niños:",
      opciones:["Acné vulgar","Impétigo","Picaduras de insectos","Liquen simple crónico"], correcta:1,
      explicacion:"Tabla 67-1: el impétigo tiene predilección por la cara y es especialmente frecuente en niños." },

    { id:"BOL-C67-02", capitulo:67, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre el eritema discrómico persistente (EDP, dermatosis ceniciosa) según el cap. 67:",
      opciones:[
        "Es muy frecuente en personas de piel clara, casi inexistente en piel oscura",
        "Las máculas grises-azuladas siguen las líneas de división de la piel (igual que la pitiriasis rosada)",
        "Su evolución habitual es la regresión espontánea en 2-3 meses",
        "Su tratamiento de elección son los corticoides tópicos potentes"
      ], correcta:1,
      explicacion:"Texto del cap. 67: «el eje longitudinal puede seguir las líneas de división de la piel (igual que la pitiriasis rosada); menos frecuente en personas de piel clara»." },

    { id:"BOL-C67-03", capitulo:67, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El eritema flagelado se asocia característicamente a:",
      opciones:[
        "Uso de bleomicina, ingestión de setas shiitake, dermatomiositis o enfermedad de Still",
        "Infección por VEB",
        "Exposición a tatuajes con cobalto",
        "Crioterapia repetida"
      ], correcta:0,
      explicacion:"Tabla 67-1 (texto literal): el eritema flagelado se asocia al uso de bleomicina, ingestión de setas shiitake, dermatomiositis y enfermedad de Still." },

    { id:"BOL-C67-04", capitulo:67, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap67_demarcacion",
      enunciado:"Mujer joven consulta por cambios pigmentarios en la cara externa de los brazos con limitación neta a la cara antero-medial. Considerando las líneas de demarcación pigmentaria de la imagen, esta distribución corresponde al:",
      opciones:[
        "Grupo A (cara externa de brazos)",
        "Grupo B (parte posterior de muslos)",
        "Grupo C (banda esternal vertical)",
        "Grupo D (banda paravertebral posterior)"
      ], correcta:0,
      explicacion:"Las líneas de Voigt-Futcher del Grupo A delimitan la pigmentación entre cara externa hiperpigmentada y antero-medial más clara del brazo." },

    /* ─── CAP 69 — MELANOMA CUTÁNEO ─── */
    { id:"BOL-C69-01", capitulo:69, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la regla ABCDE del melanoma, ¿qué representa la «E»?",
      opciones:["Eritema perilesional","Evolución (cambios temporales)","Erosión central","Edad de aparición"], correcta:1,
      explicacion:"Regla ABCDE: Asimetría, Bordes irregulares, Color heterogéneo, Diámetro > 6 mm, Evolución (cambios temporales)." },

    { id:"BOL-C69-02", capitulo:69, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El factor pronóstico aislado MÁS importante en el melanoma cutáneo primario localizado es:",
      opciones:[
        "Diámetro clínico de la lesión",
        "Grosor de Breslow",
        "Ulceración macroscópica",
        "Localización anatómica"
      ], correcta:1,
      explicacion:"El grosor de Breslow es el factor pronóstico aislado más potente en melanoma cutáneo localizado." },

    /* ─── CAP 71 — ALOPECIAS ─── */
    { id:"BOL-C71-01", capitulo:71, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Hallazgo tricoscópico característico de la alopecia areata:",
      opciones:[
        "Pelos en signo de admiración (cabos cortos peládicos)",
        "Pelos en sacacorchos",
        "Pelos en coma",
        "Pelos en zigzag"
      ], correcta:0,
      explicacion:"Los pelos en signo de admiración (peládicos) son característicos de la alopecia areata activa." },

    { id:"BOL-C71-02", capitulo:71, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"La alopecia frontal fibrosante (AFF) es una variante clínica del liquen plano pilar, considerada una alopecia cicatricial linfocítica.",
      respuesta:true,
      explicacion:"La AFF se clasifica como variante del liquen plano pilar y es una alopecia cicatricial linfocítica del cuero cabelludo." },

    /* ─── CAP 74 — MUCOSAS ─── */
    { id:"BOL-C74-01", capitulo:74, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Las manchas de Fordyce son:",
      opciones:[
        "Pápulas blanco-amarillentas en mucosa oral o labial debidas a glándulas sebáceas ectópicas",
        "Lesiones premalignas que requieren biopsia inmediata",
        "Quistes mucosos de retención",
        "Lesiones vasculares por VPH"
      ], correcta:0,
      explicacion:"Manchas de Fordyce: glándulas sebáceas ectópicas en mucosa oral/genital. Variante anatómica benigna." },

    /* ─── CAP 76 — INFECCIONES MICOBACTERIANAS / LEPRA ─── */
    { id:"BOL-C76-01", capitulo:76, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Según el cap. 76, ¿cuál es el período de incubación habitual de la lepra (Mycobacterium leprae)?",
      opciones:["1-7 días","2-4 semanas","De unos meses a > 30 años","Siempre mayor de 50 años"], correcta:2,
      explicacion:"Texto del cap. 76: «El período de incubación varía dentro de amplios márgenes, desde unos meses a > 30 días, aunque puede ser de 4-10 años»." },

    { id:"BOL-C76-02", capitulo:76, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre M. leprae (cap. 76):",
      opciones:[
        "Crece bien en medios de cultivo bacteriológicos estándar",
        "Es un microorganismo intracelular obligado, no cultivado in vitro hasta la fecha",
        "Requiere temperatura corporal central (37°C) para crecer",
        "Se transmite principalmente por vectores artrópodos"
      ], correcta:1,
      explicacion:"Texto literal: M. leprae es intracelular obligado, no cultivable, con preferencia por temperaturas de ~35°C (zonas más frías: nariz, lóbulos, testículos)." },

    { id:"BOL-C76-03", capitulo:76, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre la transmisión y susceptibilidad a la lepra:",
      opciones:[
        "El riesgo de contagio domiciliario es < 1%",
        "Personas con HLA-DR2 y HLA-DR3 tienden a forma TUBERCULOIDE; HLA-DQ1 a forma LEPROMATOSA",
        "Personas con HLA-DR2 y HLA-DR3 tienden a forma LEPROMATOSA",
        "No existe predisposición genética conocida"
      ], correcta:1,
      explicacion:"Texto del cap. 76: HLA-DR2 y HLA-DR3 → mayor probabilidad de forma tuberculoide; HLA-DQ1 → forma lepromatosa." },

    /* ─── CAP 77 — ENFERMEDADES FÚNGICAS ─── */
    { id:"BOL-C77-01", capitulo:77, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap77_koh",
      enunciado:"Observe el examen directo con KOH (Fig. 77-5). El patrón mostrado en el panel A —grupos de levaduras y formas miceliales cortas en raspado de piel— es típico de:",
      opciones:[
        "Tiña (pitiriasis) versicolor",
        "Dermatofitosis por T. rubrum",
        "Candidiasis cutánea",
        "Esporotricosis"
      ], correcta:0,
      explicacion:"Leyenda Fig. 77-5A: «raspados de piel superficial con tiña (pitiriasis) versicolor que muestran grupos de levaduras y formas miceliales cortas»." },

    { id:"BOL-C77-02", capitulo:77, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Según el cap. 77 (tabla 77-5), ¿qué fármaco YA NO se recomienda como tratamiento sistémico de la pitiriasis versicolor por su riesgo de hepatotoxicidad grave, prolongación del QT e interacciones?",
      opciones:["Fluconazol","Itraconazol","Ketoconazol oral","Terbinafina"], correcta:2,
      explicacion:"Nota del cap. 77 (tabla 77-5): «El ketoconazol ya no está indicado para el tratamiento de las infecciones fúngicas superficiales por el riesgo de hepatotoxicidad grave, prolongación del segmento QT e interacciones farmacológicas importantes»." },

    { id:"BOL-C77-03", capitulo:77, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Dosis oral de fluconazol recomendada para tratamiento inicial de la pitiriasis versicolor (cap. 77):",
      opciones:["100 mg/día × 5 días","200 mg/día × 5-7 días","400 mg/día × 14 días","50 mg/día × 30 días"], correcta:1,
      explicacion:"Tabla 77-5: fluconazol 200 mg/día oral × 5-7 días (o 300 mg/semana × 2-3 semanas, o 400 mg en monodosis)." },

    /* ─── CAP 80 — VIRUS DEL HERPES HUMANOS ─── */
    { id:"BOL-C80-01", capitulo:80, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"¿Cuál es el lugar de latencia del virus de la varicela-zóster (VVZ)?",
      opciones:["Linfocitos B","Células epiteliales","Neuronas de ganglios sensitivos","Macrófagos"], correcta:2,
      explicacion:"Tabla 80-1: VVZ (Alfaherpesvirinae) → infección lítica en células epiteliales; LATENTE en neuronas (ganglios sensitivos)." },

    { id:"BOL-C80-02", capitulo:80, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El virus del herpes humano 8 (VHH-8) se asocia clásicamente a:",
      opciones:[
        "Mononucleosis infecciosa",
        "Sarcoma de Kaposi",
        "Exantema súbito (roséola infantil)",
        "Eritema infeccioso"
      ], correcta:1,
      explicacion:"Tabla 80-1: VHH-8 (Gammaherpesvirinae) — sarcoma de Kaposi, angiomatosis bacilar, equimosis, hemangioma, angiosarcoma." },

    { id:"BOL-C80-03", capitulo:80, nivel:"medio", tipo:"asociacion", fuente:"bolognia",
      enunciado:"Asocie cada virus del herpes humano con su asociación clínica clásica:",
      pares:[
        { item:"VHH-1 (VHS-1)",                           pareja:"Herpes orolabial" },
        { item:"VHH-3 (VVZ)",                             pareja:"Varicela y herpes zóster" },
        { item:"VHH-4 (VEB)",                             pareja:"Mononucleosis infecciosa; DRESS por reactivación" },
        { item:"VHH-6",                                   pareja:"Exantema súbito / roséola infantil" },
        { item:"VHH-8",                                   pareja:"Sarcoma de Kaposi" }
      ],
      explicacion:"Tabla 80-1 — Los ocho virus del herpes humanos con su clasificación y diagnósticos diferenciales." },

    { id:"BOL-C80-04", capitulo:80, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia", imagen:"cap80_herpes",
      enunciado:"En el herpes simple, los desencadenantes habituales de reactivación clínica incluyen: estrés emocional, luz ultravioleta, fiebre, menstruación, inmunodepresión, intervenciones quirúrgicas o dentales y otras lesiones tisulares locales.",
      respuesta:true,
      explicacion:"Texto literal del cap. 80: enumera estos desencadenantes habituales de reactivación del VHS." },

    /* ─── CAP 81 — OTRAS INFECCIONES VÍRICAS (B19) ─── */
    { id:"BOL-C81-01", capitulo:81, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre el eritema infeccioso por parvovirus B19 (cap. 81), señale lo CORRECTO:",
      opciones:[
        "Predomina entre 4-10 años, con eritema macular intenso en mejillas («cara abofeteada») que respeta puente nasal y región peribucal",
        "Es siempre asintomático y solo afecta a adultos",
        "Produce vesículas confluentes en cara y tronco",
        "Su patrón cutáneo característico es purpúrico petequial generalizado"
      ], correcta:0,
      explicacion:"Texto del cap. 81: eritema infeccioso predominante 4-10 años, eritema macular rojo intenso en mejillas con preservación del puente nasal y región peribucal; luego patrón reticulado en encaje en extremidades." },

    { id:"BOL-C81-02", capitulo:81, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El síndrome papulopurpúrico «en guantes y calcetines» (SPPGC) descrito en el cap. 81 se asocia clásicamente a infección aguda por:",
      opciones:["Virus de Epstein-Barr","Citomegalovirus","Parvovirus B19","Adenovirus"], correcta:2,
      explicacion:"Texto literal: SPPGC fue descrito por primera vez en 1990 y posteriormente se constató su asociación a infección aguda por B19 (aunque también se han descrito otras etiologías como Coxsackie B6, VHH-6 y VEB)." },

    /* ─── CAP 87 — TRASTORNOS FOTODERMATOLÓGICOS ─── */
    { id:"BOL-C87-01", capitulo:87, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Según la clasificación de fotodermatosis (tabla 87-1 del cap. 87), ¿cuál de las siguientes NO es una fotodermatosis idiopática posiblemente mediada inmunitariamente?",
      opciones:[
        "Erupción polimorfa lumínica",
        "Prurigo actínico",
        "Hidroa vacciniforme",
        "Porfiria cutánea tarda"
      ], correcta:3,
      explicacion:"Tabla 87-2: las idiopáticas mediadas inmunitariamente incluyen EPL, prurigo actínico, hidroa vacciniforme, dermatitis actínica crónica y urticaria solar. La PCT pertenece a las endógenas (porfirias cutáneas)." },

    { id:"BOL-C87-02", capitulo:87, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Paciente con erupción papulovesiculosa pruriginosa que aparece a las pocas horas de exposición al sol y dura varios días/semanas. Según el algoritmo del cap. 87:",
      opciones:[
        "Lupus eritematoso cutáneo",
        "Erupción polimorfa lumínica (EPL)",
        "Urticaria solar",
        "Dermatitis actínica crónica"
      ], correcta:1,
      explicacion:"Figura 87-1 del cap. 87: pápulas/papulovesículas pruriginosas de aparición a las pocas horas, duración de días a semanas → EPL." },

    { id:"BOL-C87-03", capitulo:87, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap87_hidroa",
      enunciado:"Observe la imagen (Fig. del cap. 87). Niña con vesículas dolorosas y costras en cara que evolucionan a cicatrices varioliformes deprimidas, recidivantes con exposición solar desde la primera infancia. Diagnóstico:",
      opciones:[
        "Erupción polimorfa lumínica grave",
        "Hidroa vacciniforme",
        "Acné necrótico",
        "Varicela atípica"
      ], correcta:1,
      explicacion:"Hidroa vacciniforme: fotodermatosis idiopática rara de la infancia con vesículas en zonas fotoexpuestas que dejan cicatrices varioliformes («en sacabocados»)." },

    /* ─── CAP 88 — DERMOPATÍAS AMBIENTALES Y DEPORTIVAS ─── */
    { id:"BOL-C88-01", capitulo:88, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre la histología del eritema ab igne (cap. 88, fig. 88-4):",
      opciones:[
        "Necrosis fibrinoide vascular masiva con vasculitis leucocitoclástica",
        "Vasos sanguíneos de la dermis superficial muy dilatados, hiperqueratosis, infiltrado inflamatorio escaso, epidermis más delgada con queratinocitos apoptósicos y células atípicas",
        "Espongiosis con eosinófilos en epidermis",
        "Granulomas no caseificantes en dermis profunda"
      ], correcta:1,
      explicacion:"Texto literal de la leyenda de fig. 88-4." },

    { id:"BOL-C88-02", capitulo:88, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia", imagen:"cap88_radioscopia",
      enunciado:"La dermatitis por radiación radioscópica (post-procedimientos cardiovasculares con fluoroscopia repetida) aparece típicamente en una localización característica: la parte superior izquierda de la espalda (sobre la arteria coronaria intervenida).",
      respuesta:true,
      explicacion:"Texto literal del cap. 88: «La parte superior izquierda de la espalda es una localización muy característica en pacientes sometidos a varios intentos de revascularización de la arteria coronaria»." },

    { id:"BOL-C88-03", capitulo:88, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Factor de riesgo para quemaduras durante la resonancia magnética según la tabla 88-5:",
      opciones:[
        "Edad > 65 años",
        "Diabetes mellitus",
        "Tatuajes (con metales en pigmentos)",
        "Hipertensión arterial"
      ], correcta:2,
      explicacion:"Tabla 88-5: derivaciones de ECG, cables de monitorización, piercings metálicos, TATUAJES, parches transdérmicos, prendas con costuras metálicas." },

    /* ─── CAP 90 — SIGNOS CUTÁNEOS DE MALOS TRATOS ─── */
    { id:"BOL-C90-01", capitulo:90, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap90_inmersion",
      enunciado:"Quemadura en miembros inferiores con líneas de demarcación BIEN DEFINIDAS y SIMÉTRICAS en patrón de calcetín o guante. Esta presentación debe hacer sospechar:",
      opciones:[
        "Quemadura accidental por derrame",
        "Quemadura no accidental por inmersión forzada",
        "Quemadura química",
        "Quemadura solar"
      ], correcta:1,
      explicacion:"Texto del cap. 90 (fig. 90-5): líneas de demarcación bien definidas y simétricas tras inmersión en agua caliente, signo de quemadura no accidental." },

    { id:"BOL-C90-02", capitulo:90, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"En las quemaduras no accidentales en niños, el adulto responsable suele afirmar que no ha presenciado el incidente, y suele haber un retraso entre el momento de producirse la lesión y el de acudir al médico.",
      respuesta:true,
      explicacion:"Texto literal del cap. 90." },

    { id:"BOL-C90-03", capitulo:90, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El síndrome de Munchausen por poderes (cap. 90):",
      opciones:[
        "Es una variante de patomimia en adultos",
        "Forma de maltrato infantil donde un progenitor induce o finge enfermedad en el niño para obtener beneficio psicológico; ~9% presenta manifestaciones cutáneas",
        "Trastorno hereditario autosómico recesivo",
        "Reacción cutánea idiopática a fármacos psiquiátricos"
      ], correcta:1,
      explicacion:"Texto del cap. 90: «El trastorno facticio impuesto a otro (Munchausen por poderes) es una forma poco frecuente de maltrato... aproximadamente el 9% de los casos presentan manifestaciones cutáneas»." },

    /* ─── CAP 98 — HIPERTROFIAS DÉRMICAS (QUELOIDES) ─── */
    { id:"BOL-C98-01", capitulo:98, nivel:"medio", tipo:"asociacion", fuente:"bolognia", imagen:"cap98_queloides",
      enunciado:"Asocie cada característica con su tipo de cicatriz (tabla 98-1):",
      pares:[
        { item:"Confinada a la herida",                       pareja:"Cicatriz hipertrófica" },
        { item:"Se extiende más allá de los límites de la herida (patrón en garra)",  pareja:"Queloide" },
        { item:"Resolución espontánea posible y gradual",      pareja:"Cicatriz hipertrófica" },
        { item:"Respuesta al tratamiento: mala",               pareja:"Queloide" }
      ],
      explicacion:"Tabla 98-1: las hipertróficas se confinan a la herida y pueden resolverse; los queloides se extienden, no resuelven y responden mal al tratamiento." },

    { id:"BOL-C98-02", capitulo:98, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap98_queloides",
      enunciado:"Localizaciones más frecuentes de los queloides (cap. 98):",
      opciones:[
        "Palmas y plantas",
        "Tronco superior y cuello (también lóbulo de la oreja, región central del tórax)",
        "Cuero cabelludo exclusivamente",
        "Mucosas oral y genital"
      ], correcta:1,
      explicacion:"Texto del cap. 98 + leyenda Fig. 98-1: tronco superior, cuello, lóbulo de la oreja, región central del tórax." },

    { id:"BOL-C98-03", capitulo:98, nivel:"medio", tipo:"verdadero_falso", fuente:"bolognia",
      enunciado:"A diferencia de las cicatrices hipertróficas (que aparecen inmediatamente tras la lesión y suelen aplanarse en 1-2 años), los queloides tienen inicio retardado y pueden aparecer hasta los 28 años después de la herida, y suelen NO remitir con el tiempo.",
      respuesta:true,
      explicacion:"Tabla 98-1 + texto: inicio retardado, intervalo hasta 28 años, no remiten espontáneamente." },

    /* ─── CAP 103 — HEMANGIOMAS INFANTILES ─── */
    { id:"BOL-C103-01", capitulo:103, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Marcador inmunohistoquímico característico de los hemangiomas infantiles (HI) que los DIFERENCIA de las malformaciones vasculares (tabla 103-1):",
      opciones:[
        "CD31",
        "GLUT-1 (positivo en HI, negativo en malformaciones)",
        "S-100",
        "CD34"
      ], correcta:1,
      explicacion:"Tabla 103-1: HI POSITIVO para GLUT-1, antígeno Lewis Y, merosina, FcγRII, WT1. Malformaciones vasculares NEGATIVAS para todos." },

    { id:"BOL-C103-02", capitulo:103, nivel:"medio", tipo:"asociacion", fuente:"bolognia",
      enunciado:"Asocie cada característica con hemangioma infantil (HI) o malformación vascular (MV):",
      pares:[
        { item:"Presente al nacimiento, expansión proporcional al crecimiento", pareja:"Malformación vascular" },
        { item:"Generalmente ausente al nacimiento; proliferación rápida e involución espontánea",      pareja:"Hemangioma infantil" },
        { item:"Más frecuente en niñas (2-5:1), prematuros y bajo peso al nacer", pareja:"Hemangioma infantil" },
        { item:"Persiste sin involución en la edad adulta",                      pareja:"Malformación vascular" }
      ],
      explicacion:"Tabla 103-1: diferencias clínicas, epidemiológicas e histológicas entre HI y MV." },

    { id:"BOL-C103-03", capitulo:103, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Tratamiento sistémico de primera línea en hemangiomas infantiles complicados según el cap. 103:",
      opciones:["Corticoides orales","Propranolol oral","Vincristina","Interferón α"], correcta:1,
      explicacion:"El propranolol oral es desde 2008 el tratamiento sistémico de primera línea en HI complicados (compromiso funcional, ulceración o riesgo de secuela estética)." },

    /* ─── CAP 104 — MALFORMACIONES VASCULARES ─── */
    { id:"BOL-C104-01", capitulo:104, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia", imagen:"cap104_clapo",
      enunciado:"Paciente joven con malformación capilar en labio inferior + malformación linfática en lengua + sobrecrecimiento facial. Diagnóstico (Fig. 104-11):",
      opciones:[
        "Síndrome de Sturge-Weber",
        "Síndrome CLAPO",
        "Síndrome de Klippel-Trenaunay",
        "Telangiectasia hemorrágica hereditaria"
      ], correcta:1,
      explicacion:"Fig. 104-11: síndrome CLAPO — Capillary malformation of the lower lip, Lymphatic malformation of the tongue, Asymmetry, Partial/generalized overgrowth." },

    { id:"BOL-C104-02", capitulo:104, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"La telangiectasia hemorrágica hereditaria (enfermedad de Osler-Weber-Rendu) se hereda de forma:",
      opciones:["Autosómica recesiva","Autosómica dominante","Recesiva ligada al X","Mitocondrial"], correcta:1,
      explicacion:"Texto del cap. 104: «La THH es un trastorno autosómico dominante que se caracteriza por MAV viscerales y telangiectasias mucocutáneas». Mutaciones en ENG (THH1) o ACVRL1/ALK1 (THH2)." },

    { id:"BOL-C104-03", capitulo:104, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En la THH, las MAV viscerales asintomáticas que se recomienda cribar (especialmente en THH1 y mujeres) por riesgo de complicaciones potencialmente mortales son las:",
      opciones:[
        "Renales (hipertensión renovascular)",
        "Pulmonares (hipoxemia, hemorragia, embolias cerebrales paradójicas)",
        "Esplénicas (rotura)",
        "Pancreáticas (pancreatitis hemorrágica)"
      ], correcta:1,
      explicacion:"Texto del cap. 104: «Las MAV pulmonares pueden provocar hipoxemia, hemorragia y abscesos cerebrales o accidentes cerebrovasculares causados por embolias paradójicas. Se recomienda la embolización transcatéter»." },

    /* ─── CAP 107 — BIOLOGÍA TUMORAL (CBC/CE) ─── */
    { id:"BOL-C107-01", capitulo:107, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"En el ciclo celular descrito en el cap. 107, el factor clave de la transición G₁→S es la fosforilación de:",
      opciones:["p53","p21","Rb (proteína del retinoblastoma)","Myc"], correcta:2,
      explicacion:"Texto del cap. 107: «El factor clave es el grado de fosforilación de Rb. Si Rb está insuficientemente fosforilada, se bloquea la proliferación y la célula se detiene en G₁»." },

    { id:"BOL-C107-02", capitulo:107, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"El locus CDKN2A (INK4A) codifica DOS proteínas diferentes (p16 y p14ARF) gracias a:",
      opciones:[
        "Splicing alternativo simple",
        "Marcos de lectura abiertos diferentes (ARNm con codón de inicio distinto)",
        "Glicosilación diferencial postraduccional",
        "Duplicación génica clásica"
      ], correcta:1,
      explicacion:"Texto literal: «CDKN2A tiene una característica extraordinaria al desplazar el codón del marco de lectura (de ahí el término marco de lectura alternativo [ARF]), y estos dos ARNm se regulan de forma independiente»." },

    { id:"BOL-C107-03", capitulo:107, nivel:"dificil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Sobre la genética del melanoma familiar según el cap. 107:",
      opciones:[
        "Las mutaciones en CDK4 son comunes (>30% de casos)",
        "Las mutaciones en CDKN2A explican algunos casos familiares; las mutaciones en CDK4 son inusuales y se han descrito solo unas pocas familias con melanoma familiar por mutaciones de CDK4",
        "TP53 es el gen más frecuentemente mutado en melanoma familiar",
        "Solo PTCH1 explica el melanoma familiar"
      ], correcta:1,
      explicacion:"Texto del cap. 107: «las mutaciones activadoras de las CDK son inusuales; por ejemplo, solo se han descrito unas pocas familias con melanoma familiar con mutaciones en CDK4»." },

    /* ─── CAP 108 — CARCINOMA BASOCELULAR (CBC) ─── */
    { id:"BOL-C108-01", capitulo:108, nivel:"facil", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"La vía de señalización característicamente activada en el carcinoma basocelular esporádico y en el síndrome del nevo basocelular (Gorlin) es:",
      opciones:["Wnt/β-catenina","Hedgehog (PTCH1 / SMO)","Notch","BRAF/MAPK"], correcta:1,
      explicacion:"La vía Hedgehog (mutaciones en PTCH1 o SMO) es la alteración fundamental en CBC y síndrome de Gorlin. Por ello vismodegib (inhibidor de SMO) es eficaz en CBC avanzado." },

    /* ─── CAP 109 — CARCINOMA EPIDERMOIDE ─── */
    { id:"BOL-C109-01", capitulo:109, nivel:"medio", tipo:"opcion_multiple", fuente:"bolognia",
      enunciado:"Localización del carcinoma epidermoide cutáneo con mayor riesgo de metástasis:",
      opciones:[
        "Antebrazo en zonas fotoexpuestas",
        "Labio inferior y oreja",
        "Tronco posterior",
        "Cuero cabelludo en áreas pilosas"
      ], correcta:1,
      explicacion:"Las localizaciones de alto riesgo metastásico para CE incluyen labio (especialmente inferior), oreja y mucosas, además de los CE sobre cicatrices, úlceras crónicas o en inmunodeprimidos." },

    /* ═══════════════════════════════════════════════════════
     *   PSORIASIS PUSTULOSA GENERALIZADA (von Zumbusch) — GPP
     *   Fuentes combinadas: Bolognia cap. 8 + DermNet (dermnetnz.org)
     * ═══════════════════════════════════════════════════════ */

    { id:"DRM-GPP-01", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"dermnet", imagen:"dermnet_gpp_1",
      enunciado:"Observe la imagen. Esta presentación cutánea con eritema confluente generalizado y pústulas superficiales recibe el nombre histórico de:",
      opciones:[
        "Psoriasis de von Zumbusch",
        "Psoriasis de Köbner",
        "Psoriasis de Auspitz",
        "Psoriasis de Munro"
      ], correcta:0,
      explicacion:"La GPP también se conoce como psoriasis aguda generalizada de von Zumbusch (DermNet, 2024)." },

    { id:"DRM-GPP-02", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Edad de presentación más frecuente de la psoriasis pustulosa generalizada (GPP) en adultos:",
      opciones:["10-20 años","20-30 años","40-50 años","> 70 años"], correcta:2,
      explicacion:"La GPP puede aparecer a cualquier edad, pero es más común entre los 40-50 años en adultos; es rara en niños." },

    { id:"DRM-GPP-03", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"La GPP que afecta a una mujer embarazada recibe el nombre clínico de:",
      opciones:[
        "Eritema gestationis",
        "Impétigo herpetiforme",
        "Prurigo gravídico",
        "Pénfigo gestacional"
      ], correcta:1,
      explicacion:"La GPP del embarazo se denomina impétigo herpetiforme y se asocia a aumento de morbilidad materna y fetal." },

    { id:"DRM-GPP-04", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Mutación genética asociada característicamente a la GPP que NO se acompaña de psoriasis en placas:",
      opciones:[
        "Mutaciones en CARD14",
        "Mutaciones homocigóticas/heterocigóticas compuestas en IL36RN",
        "Mutaciones en HLA-Cw6",
        "Mutaciones en NOD2"
      ], correcta:1,
      explicacion:"Las mutaciones bialélicas en IL36RN (antagonista del receptor de IL-36) se asocian a GPP no acompañada de psoriasis en placas. CARD14 se asocia más a GPP con psoriasis en placas concomitante." },

    { id:"DRM-GPP-05", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Desencadenante farmacológico clásico de la GPP a tener muy presente en la anamnesis:",
      opciones:[
        "Inicio de antihistamínicos H1",
        "Retirada brusca de corticoides sistémicos o ciclosporina",
        "Inicio de paracetamol",
        "Inicio de vitamina D oral"
      ], correcta:1,
      explicacion:"La suspensión abrupta de corticoides sistémicos o ciclosporina es un desencadenante clásico de la GPP (efecto rebote). Otros fármacos: AINE, terbinafina, hidroxicloroquina, paradoja con anti-TNFα." },

    { id:"DRM-GPP-06", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Característica histopatológica DISTINTIVA de la GPP en la biopsia cutánea:",
      opciones:[
        "Microabscesos eosinofílicos de Pautrier",
        "Pústulas espongiformes subcorneales de Kogoj",
        "Granulomas no caseificantes",
        "Vasculitis leucocitoclástica"
      ], correcta:1,
      explicacion:"Las pústulas espongiformes de Kogoj (subcorneales, neutrofílicas) son el hallazgo histopatológico distintivo de la GPP. Los microabscesos de Munro también son característicos." },

    { id:"DRM-GPP-07", capitulo:8, nivel:"medio", tipo:"verdadero_falso", fuente:"dermnet", imagen:"dermnet_gpp_4",
      enunciado:"La GPP se caracteriza por brotes recurrentes de pústulas estériles no foliculares de 2-3 mm que aparecen en 2-3 horas sobre piel eritematosa dolorosa, y que confluyen formando «lagos» de pus.",
      respuesta:true,
      explicacion:"Texto literal de DermNet: «within 2-3 hours, 2-3 mm sterile non-follicular pustules appear, which then converge to form lakes of pus»." },

    { id:"DRM-GPP-08", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"dermnet", imagen:"dermnet_gpp_2",
      enunciado:"Mujer de 45 años, hospitalizada por brote súbito de pústulas confluentes generalizadas (como en la imagen), fiebre 39 °C, leucocitosis, PCR elevada e hipocalcemia. Tres semanas antes suspendió corticoide oral por su cuenta. El diagnóstico más probable y el manejo INICIAL óptimo son:",
      opciones:[
        "PEGA — suspender el último fármaco introducido + soporte ambulatorio",
        "Síndrome de Sweet — colchicina oral + alta hospitalaria",
        "GPP (von Zumbusch) — hospitalización con fluidoterapia, soporte de electrolitos y tratamiento sistémico (acitretina, ciclosporina, biológico o spesolimab)",
        "NET — IgIV + suspender corticoides progresivamente"
      ], correcta:2,
      explicacion:"Brote agudo de GPP tras retirada brusca de corticoides. Requiere hospitalización y a veces UCI. Tratamiento sistémico de elección: acitretina, ciclosporina, MTX o biológicos (anti-IL36 spesolimab, anti-TNF, anti-IL17, anti-IL23)." },

    { id:"DRM-GPP-09", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Biológico recientemente aprobado específicamente para los brotes de GPP, dirigido contra la interleucina 36:",
      opciones:["Adalimumab","Secukinumab","Spesolimab","Guselkumab"], correcta:2,
      explicacion:"Spesolimab es un anticuerpo monoclonal anti-receptor de IL-36, aprobado específicamente para los brotes agudos de GPP. Imsidolimab (también anti-IL36) está en investigación." },

    { id:"DRM-GPP-10", capitulo:8, nivel:"medio", tipo:"asociacion", fuente:"dermnet",
      enunciado:"Asocie cada diana terapéutica con el biológico empleado en la GPP:",
      pares:[
        { item:"TNFα",            pareja:"Adalimumab, infliximab, etanercept" },
        { item:"IL-17",            pareja:"Secukinumab, ixekizumab, brodalumab" },
        { item:"IL-23",            pareja:"Guselkumab, risankizumab" },
        { item:"IL-12/23 (p40)",   pareja:"Ustekinumab" },
        { item:"Receptor de IL-36", pareja:"Spesolimab" }
      ],
      explicacion:"Clasificación de las dianas terapéuticas biológicas usadas en GPP (DermNet, 2024)." },

    { id:"DRM-GPP-11", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Hallazgo MUCOSO característico que puede acompañar a un brote de GPP:",
      opciones:[
        "Estrías de Wickham linguales",
        "Lengua geográfica o lengua fisurada / queilitis",
        "Manchas de Koplik",
        "Petequias palatinas"
      ], correcta:1,
      explicacion:"Manifestaciones mucosas extracutáneas de la GPP: queilitis, lengua geográfica, lengua fisurada (DermNet)." },

    { id:"DRM-GPP-12", capitulo:8, nivel:"facil", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Causa de muerte más frecuente durante un brote agudo grave de GPP:",
      opciones:[
        "Hemorragia cerebral",
        "Insuficiencia cardiorrespiratoria durante la fase eruptiva aguda",
        "Embolismo pulmonar masivo",
        "Hipertermia maligna"
      ], correcta:1,
      explicacion:"DermNet: «La muerte puede resultar de insuficiencia cardiorrespiratoria durante la fase eruptiva aguda... Pacientes mayores son especialmente de alto riesgo». Tasa de mortalidad descrita 3-7%." },

    { id:"DRM-GPP-13", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"En el diagnóstico diferencial principal de la GPP destaca, por similitud clínica y necesidad de descartarla siempre:",
      opciones:[
        "Pénfigo vulgar",
        "Pustulosis exantemática generalizada aguda (PEGA / AGEP)",
        "Pénfigo paraneoplásico",
        "Lupus eritematoso cutáneo subagudo"
      ], correcta:1,
      explicacion:"DermNet menciona como ddx clave la PEGA (acute generalised exanthematous pustulosis). La presencia de eosinófilos en biopsia inclina a PEGA; antecedente farmacológico reciente también orienta a PEGA." },

    { id:"DRM-GPP-14", capitulo:8, nivel:"medio", tipo:"verdadero_falso", fuente:"dermnet",
      enunciado:"Según los criterios diagnósticos japoneses de 2018, el diagnóstico definitivo de GPP requiere los CUATRO siguientes: síntomas sistémicos (fiebre, fatiga), eritrodermia/eritema extenso con pústulas estériles múltiples que pueden confluir, pústulas subcorneales neutrofílicas con espongiosis de Kogoj en histología, y recurrencia de estos hallazgos.",
      respuesta:true,
      explicacion:"Criterios diagnósticos japoneses (Fujita et al., 2018) recogidos por DermNet." },

    { id:"DRM-GPP-15", capitulo:8, nivel:"dificil", tipo:"opcion_multiple", fuente:"dermnet",
      enunciado:"Reacción paradójica descrita en el contexto de tratamiento con inhibidores del TNFα y ustekinumab, en la que algunos pacientes desarrollan psoriasis pustulosa o GPP de novo:",
      opciones:[
        "Síndrome del intestino corto",
        "Psoriasis paradójica",
        "Lupus inducido por fármacos",
        "Síndrome de Stevens-Johnson"
      ], correcta:1,
      explicacion:"La psoriasis paradójica (incluyendo GPP) puede aparecer en pacientes tratados con anti-TNFα o ustekinumab, particularmente si se usan para enfermedades como artritis reumatoide o enfermedad de Crohn." },

    { id:"DRM-GPP-16", capitulo:8, nivel:"medio", tipo:"opcion_multiple", fuente:"dermnet", imagen:"dermnet_gpp_3",
      enunciado:"En la imagen se observa un brote de GPP en piel oscura (piel de color). ¿Qué consideración clínica es CIERTA en este contexto, según DermNet?",
      opciones:[
        "La GPP no afecta a personas con piel oscura",
        "El eritema puede infraestimarse en piel oscura, lo que puede llevar a subestimar la gravedad de la inflamación",
        "La presentación es siempre más leve que en piel clara",
        "Las pústulas son menos numerosas en piel oscura"
      ], correcta:1,
      explicacion:"DermNet enfatiza: «Erythema can be under-recognised in skin of colour, and therefore the severity of inflammation can be underestimated». Buscar pústulas, descamación y patrón es clave en estos pacientes." }

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

