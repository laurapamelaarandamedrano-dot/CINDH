// Contenido institucional de CINDH, tomado de la Carpeta Ejecutiva.
// Editar aquí actualiza todo el sitio.

export type Tono = 'vino' | 'turquesa' | 'oro' | 'lavanda';

export const SITIO = {
  nombre: 'CINDH',
  nombreCompleto: 'Centro de Investigación Interdisciplinaria en Derechos Humanos',
  lema: 'Evidencia para la dignidad. Conocimiento cercano a las personas.',
  descripcion:
    'CINDH es una asociación civil autónoma y sin fines de lucro que investiga, difunde, forma y actúa en favor de los derechos humanos en México.',
  frase: 'Los derechos humanos no son un tema entre otros: son la forma de mirar todos los temas.',
} as const;

export const NAVEGACION = [
  { ruta: '', texto: 'Inicio' },
  { ruta: 'quienes-somos/', texto: 'Quiénes somos' },
  { ruta: 'que-hacemos/', texto: 'Qué hacemos' },
  { ruta: 'principios-y-valores/', texto: 'Principios y valores' },
  { ruta: 'participa/', texto: 'Participa' },
  { ruta: 'gobierno-y-transparencia/', texto: 'Gobierno y transparencia' },
  { ruta: 'estrategia/', texto: 'Estrategia' },
] as const;

export const ETIQUETAS: ReadonlyArray<{ texto: string; tono: Tono }> = [
  { texto: 'Dignidad', tono: 'vino' },
  { texto: 'Investigación', tono: 'turquesa' },
  { texto: 'Difusión', tono: 'oro' },
  { texto: 'Acción', tono: 'lavanda' },
  { texto: 'Justicia', tono: 'vino' },
  { texto: 'Paz', tono: 'turquesa' },
  { texto: 'Democracia', tono: 'oro' },
  { texto: 'Cercanía', tono: 'lavanda' },
];

export const QUE_HACEMOS = [
  {
    titulo: 'Investigamos',
    icono: 'lupa',
    tono: 'vino',
    texto:
      'Generamos diagnósticos, estudios e informes con evidencia verificable sobre la situación de los derechos humanos.',
  },
  {
    titulo: 'Difundimos',
    icono: 'megafono',
    tono: 'turquesa',
    texto:
      'Llevamos los derechos humanos a la sociedad mediante campañas, publicaciones y materiales en lenguaje claro.',
  },
  {
    titulo: 'Formamos',
    icono: 'birrete',
    tono: 'oro',
    texto:
      'Capacitamos a personas servidoras públicas, docentes, estudiantes, organizaciones y comunidades.',
  },
  {
    titulo: 'Actuamos',
    icono: 'manos',
    tono: 'lavanda',
    texto:
      'Acompañamos a personas y comunidades en la exigencia de sus derechos y presentamos propuestas ante las instituciones responsables.',
  },
] as const satisfies ReadonlyArray<{ titulo: string; icono: string; tono: Tono; texto: string }>;

export const OBJETIVOS = [
  'Producir investigación interdisciplinaria sobre los principales desafíos de derechos humanos y hacer públicos sus resultados.',
  'Difundir los derechos humanos mediante campañas, publicaciones y materiales accesibles para toda la población.',
  'Formar a personas servidoras públicas, docentes, estudiantes, organizaciones y comunidades.',
  'Acompañar a personas y comunidades en el conocimiento y la exigencia de sus derechos.',
  'Incidir en las políticas públicas y en el debate público con propuestas técnicas sustentadas en evidencia.',
] as const;

export const VALORES: ReadonlyArray<{ nombre: string; texto: string; tono: Tono }> = [
  { nombre: 'Dignidad', texto: 'Toda persona merece respeto, sin condición ni jerarquía.', tono: 'vino' },
  { nombre: 'Rigor', texto: 'Cada afirmación se sostiene en fuentes y método.', tono: 'turquesa' },
  { nombre: 'Integridad', texto: 'Decimos lo que la evidencia muestra, aunque incomode.', tono: 'oro' },
  { nombre: 'Empatía', texto: 'Escuchamos antes de concluir y cuidamos cada testimonio.', tono: 'lavanda' },
  { nombre: 'Pluralidad', texto: 'Reconocemos la diversidad de personas y contextos.', tono: 'vino' },
  { nombre: 'Responsabilidad', texto: 'Cuidamos los efectos de nuestro trabajo en las personas.', tono: 'turquesa' },
  { nombre: 'Compromiso', texto: 'Acompañamos a las personas más allá del diagnóstico.', tono: 'oro' },
];

export const PRINCIPIOS = [
  {
    nombre: 'Enfoque de derechos humanos',
    texto:
      'Universalidad, interdependencia, indivisibilidad y progresividad, con perspectiva de género e interseccional.',
  },
  {
    nombre: 'Acción sin daño',
    texto: 'Protegemos la identidad, la seguridad y la confidencialidad de quienes participan en nuestro trabajo.',
  },
  {
    nombre: 'Consentimiento informado',
    texto: 'Nadie es entrevistado, fotografiado o citado sin su autorización.',
  },
  {
    nombre: 'Evidencia verificable',
    texto: 'Documentamos fuentes y métodos para que cualquiera pueda revisar nuestro trabajo.',
  },
  {
    nombre: 'Lenguaje claro',
    texto: 'Comunicamos de forma que cualquier persona pueda comprender y ejercer sus derechos.',
  },
] as const;

export const LINEAS: ReadonlyArray<{ nombre: string; abarca: string; tono: Tono }> = [
  {
    nombre: 'Democracia, Estado de derecho y justicia',
    abarca: 'Acceso a la justicia, debido proceso, instituciones democráticas y rendición de cuentas.',
    tono: 'vino',
  },
  {
    nombre: 'Dignidad e integridad personal',
    abarca: 'Prevención de la tortura, desaparición, violencia y reparación integral.',
    tono: 'turquesa',
  },
  {
    nombre: 'Igualdad y no discriminación',
    abarca:
      'Mujeres, niñez y adolescencia, pueblos indígenas, personas con discapacidad y grupos en situación de vulnerabilidad.',
    tono: 'oro',
  },
  {
    nombre: 'Paz, seguridad y convivencia',
    abarca: 'Seguridad ciudadana con enfoque de derechos, cultura de paz y movilidad humana.',
    tono: 'lavanda',
  },
  {
    nombre: 'Desarrollo, territorio y medio ambiente',
    abarca: 'Derechos económicos, sociales, culturales y ambientales, y desigualdad.',
    tono: 'vino',
  },
  {
    nombre: 'Tecnología y derechos emergentes',
    abarca: 'Derechos digitales, inteligencia artificial y protección de datos.',
    tono: 'turquesa',
  },
];

export const COMO_ACTUAMOS: ReadonlyArray<{ titulo: string; texto: string; tono: Tono }> = [
  {
    titulo: 'Campañas',
    texto: 'Sensibilización y difusión de derechos en medios, redes, escuelas y comunidades.',
    tono: 'vino',
  },
  {
    titulo: 'Acompañamiento',
    texto: 'Orientación a personas y comunidades para conocer sus derechos y acudir a las instancias competentes.',
    tono: 'turquesa',
  },
  {
    titulo: 'Incidencia',
    texto: 'Propuestas técnicas y recomendaciones dirigidas a instituciones y órganos legislativos.',
    tono: 'oro',
  },
  {
    titulo: 'Observación',
    texto: 'Seguimiento público al cumplimiento de obligaciones y recomendaciones en derechos humanos.',
    tono: 'lavanda',
  },
];

export const SERIES: ReadonlyArray<{ titulo: string; texto: string; tono: Tono }> = [
  { titulo: 'Informes CINDH', texto: 'Resultados de investigación y diagnósticos.', tono: 'vino' },
  { titulo: 'Documentos de Trabajo', texto: 'Análisis especializados.', tono: 'turquesa' },
  { titulo: 'Notas de Política Pública', texto: 'Recomendaciones breves basadas en evidencia.', tono: 'oro' },
];

export const ETAPAS: ReadonlyArray<{ titulo: string; texto: string; tono: Tono }> = [
  {
    titulo: 'Consolidación',
    texto: 'Constitución formal, equipo fundador, agenda de trabajo y programa de formación estable.',
    tono: 'vino',
  },
  {
    titulo: 'Presencia nacional',
    texto: 'Convenios con universidades, organismos de derechos humanos y organizaciones en distintas regiones.',
    tono: 'turquesa',
  },
  {
    titulo: 'Proyección internacional',
    texto: 'Redes académicas y de defensa de derechos humanos, y proyectos de cooperación.',
    tono: 'oro',
  },
];

export const MEMBRESIA = [
  {
    nombre: 'Quién puede participar',
    texto:
      'Personas investigadoras, defensoras de derechos humanos, promotoras comunitarias, comunicadoras, profesionistas y estudiantes de cualquier disciplina.',
  },
  {
    nombre: 'Qué significa pertenecer',
    texto:
      'Asumir el enfoque, los valores y los protocolos éticos del Centro, y contribuir activamente a su agenda de investigación, difusión y acción.',
  },
  {
    nombre: 'Cómo contribuir',
    texto:
      'Investigando, impartiendo formación, participando en campañas de difusión, acompañando procesos comunitarios o facilitando vínculos académicos e institucionales.',
  },
  {
    nombre: 'Beneficios institucionales (propuesta)',
    texto:
      'Afiliación institucional, participación en proyectos, publicación con revisión editorial, formación continua y constancia de participación. Se formalizarán en los estatutos y el reglamento interno.',
  },
] as const;

export const POLITICAS = [
  {
    nombre: 'Alianzas',
    texto:
      'CINDH podrá establecer alianzas, convenios y colaboraciones con otras instituciones nacionales o internacionales, públicas, privadas, académicas o de la sociedad civil, conforme a su objeto institucional y a los instrumentos jurídicos aplicables.',
  },
  {
    nombre: 'No partidismo',
    texto:
      'No realiza proselitismo ni apoya candidaturas. Su incidencia pública se ejerce mediante investigación, generación de evidencia, análisis, formación, propuestas, diálogo institucional y participación en debates públicos.',
  },
  {
    nombre: 'Independencia de resultados',
    texto: 'Ningún aliado o financiador puede modificar hallazgos, conclusiones ni recomendaciones.',
  },
] as const;

export const ARQUITECTURA = [
  {
    nombre: 'Naturaleza jurídica proyectada',
    texto:
      'Asociación civil sin fines de lucro, bajo la denominación Centro de Investigación Interdisciplinaria en Derechos Humanos, A.C., con el acrónimo CINDH como nombre de uso, sujeta a autorización de la Secretaría de Economía.',
  },
  {
    nombre: 'Objeto institucional preliminar',
    texto:
      'Realizar investigación interdisciplinaria y actividades de promoción, difusión, formación, acompañamiento y defensa de los derechos humanos y de sus ámbitos relacionados, sin fines de lucro, partidistas ni religiosos.',
  },
  {
    nombre: 'Finalidades y actividades',
    texto:
      'Generar evidencia confiable, difundir y promover los derechos humanos, fortalecer capacidades e incidir en políticas públicas, mediante investigaciones e informes, campañas, cursos y diplomados, acompañamiento a personas y comunidades, publicaciones y convenios.',
  },
  {
    nombre: 'Membresía formal',
    texto:
      'Asociados fundadores, con voz y voto en la Asamblea; asociados, admitidos conforme a los estatutos; y personas afiliadas, que participan en la agenda del Centro sin adquirir la calidad jurídica de asociado.',
  },
] as const;

export const ORGANOS = [
  'Consejo Directivo',
  'Dirección General',
  'Consejo Académico',
  'Comité de Ética',
  'Órgano de Vigilancia',
] as const;

export const INDEPENDENCIA = [
  {
    nombre: 'Independencia institucional',
    texto:
      'Patrimonio, órganos de gobierno, personalidad jurídica y agenda propios. No acepta recursos condicionados a conclusiones predeterminadas ni a fines partidistas o electorales.',
  },
  {
    nombre: 'Conflictos de interés',
    texto:
      'Declaración anual de intereses y deber de abstención. Quien ocupe un cargo público no interviene en proyectos que involucren a su institución.',
  },
] as const;

export const INTEGRIDAD: ReadonlyArray<{ nombre: string; texto: string; tono: Tono }> = [
  {
    nombre: 'Ética e integridad',
    texto:
      'Código de Ética e Integridad y Protocolo de Trabajo con Personas, con prevención de la revictimización y canal de denuncia confidencial.',
    tono: 'vino',
  },
  {
    nombre: 'Propiedad intelectual',
    texto: 'Registro del nombre y el acrónimo como marca; reconocimiento de autoría y preferencia por el acceso abierto.',
    tono: 'turquesa',
  },
  {
    nombre: 'Protección de datos',
    texto:
      'Consentimiento expreso, anonimización de testimonios y resguardo seguro de expedientes, conforme a la legislación mexicana aplicable.',
    tono: 'oro',
  },
  {
    nombre: 'Financiamiento y transparencia',
    texto:
      'Aportaciones de asociados, donativos, fondos académicos, cooperación internacional, convenios y servicios vinculados al objeto, con debida diligencia y publicación anual de ingresos y su destino.',
    tono: 'lavanda',
  },
  {
    nombre: 'Rendición de cuentas',
    texto:
      'Informe anual público de actividades y estados financieros, revisión del órgano de vigilancia, auditoría externa cuando el volumen de recursos lo permita y agenda anual publicada.',
    tono: 'vino',
  },
];
