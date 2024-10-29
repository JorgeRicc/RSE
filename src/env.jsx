//Icons
import gift from './Assets/Icons/2.svg';
import cammera from './Assets/Icons/3.svg';
import chat from './Assets/Icons/4.svg';
import mony from './Assets/Icons/5.svg';
import form from './Assets/Icons/6.svg';
import person from './Assets/Icons/7.svg';
import tag from './Assets/Icons/8.svg';
import camera from './Assets/Icons/9.svg';
import world from './Assets/Icons/10.svg';
import handHeard from './Assets/Icons/11.svg';
import heard from './Assets/Icons/12.svg';
import music from './Assets/Icons/13.svg';
import tiket from './Assets/Icons/14.svg';
import megaphone from './Assets/Icons/15.svg';
import clock from './Assets/Icons/16.svg';
import eje from './Assets/Icons/17.svg';
import calendar from './Assets/Icons/18.svg';
import clouds from './Assets/Icons/19.svg';
import spotlight from './Assets/Icons/20.svg';
import cart from './Assets/Icons/21.svg';
import messege from './Assets/Icons/22.svg';
import gear from './Assets/Icons/23.svg';
import phone from './Assets/Icons/24.svg';
import coffe from './Assets/Icons/25.svg';
import mountains from './Assets/Icons/26.svg';
import chebron from './Assets/Icons/28.svg';
import pencil from './Assets/Icons/29.svg';

//Social Media Icons
import facebook from './Assets/SocialM/facebook.svg';
import twitter from './Assets/SocialM/twitter.svg';
import youtube from './Assets/SocialM/youtube.svg'
import instagram from './Assets/SocialM/instagram.svg';

//System Assets
import Logo from './Assets/DEMO/r-logo.png';
import RLogo from './Assets/DEMO/f-logo.png';
import FLogo from './Assets/DEMO/r-logo.png';

import ODS from './Assets/odsIcons/ODS.png';
import ODS1 from './Assets/odsIcons/1.png';
import ODS2 from './Assets/odsIcons/2.png';
import ODS3 from './Assets/odsIcons/3.png';
import ODS4 from './Assets/odsIcons/4.png';
import ODS5 from './Assets/odsIcons/5.png';
import ODS6 from './Assets/odsIcons/6.png';
import ODS7 from './Assets/odsIcons/7.png';
import ODS8 from './Assets/odsIcons/8.png';
import ODS9 from './Assets/odsIcons/9.png';
import ODS10 from './Assets/odsIcons/10.png';
import ODS11 from './Assets/odsIcons/11.png';
import ODS12 from './Assets/odsIcons/12.png';
import ODS13 from './Assets/odsIcons/13.png';
import ODS14 from './Assets/odsIcons/14.png';
import ODS15 from './Assets/odsIcons/15.png';
import ODS16 from './Assets/odsIcons/16.png';
import ODS17 from './Assets/odsIcons/17.png';

export const ODS_ICONS = {
  ODS_0:ODS,
  ODS_1:ODS1,
  ODS_2:ODS2,
  ODS_3:ODS3,
  ODS_4:ODS4,
  ODS_5:ODS5,
  ODS_6:ODS6,
  ODS_7:ODS7,
  ODS_8:ODS8,
  ODS_9:ODS9,
  ODS_10:ODS10,
  ODS_11:ODS11,
  ODS_12:ODS12,
  ODS_13:ODS13,
  ODS_14:ODS14,
  ODS_15:ODS15,
  ODS_16:ODS16,
  ODS_17:ODS17,
};
//System Assets

const USER_TYPES = {
  OFF: -1,
  UNRRESTRICTED: 0
}

const REDIRECT_TYPES = {
  BLANK: 0,
  LINK: 1
}

const CARD_TYPES = {
  NOTICIAS: '/noticias/',
  EVENTOS: '/eventos/',
  CAMPANAS: '/campanas/',
  INSTITUCIONES: '/instituciones/'
}

//Main Config
export const SYSTEM_ELEMENTS = {
    logo: Logo,
    rLogo: RLogo,
    fLogo: FLogo,
    logoRedirect: 'https://fundacion360.com.ar',
    textXl:'DEMO'
};

//Backoffice Config
export const BACKOFFICE_MENU_ELEMENTS = [
    {
      title:'Inicio',
      route:'/dashboard',
      alert:'normal',
      icon: world,
      user_type_acces: [USER_TYPES.UNRRESTRICTED]
    },
    {
      title:'Editar Institución',
      route:'/institucion_edit',
      alert:'normal',
      icon: pencil,
      user_type_acces: [USER_TYPES.UNRRESTRICTED]
    },
];

//Frontend Config
export const OFF_MENU_ELEMENTS = [
  {
    title:'App Responsabilidad Social Empresaria (RSE)',
    url:'/RSE',
    type: REDIRECT_TYPES.LINK
  },
  {
    title:'Objetivos de desarrollo Sostenible (ODS)',
    url:'/ODS/0',
    type: REDIRECT_TYPES.LINK
  },
  {
    title:'¿Qué son las normas ISO?',
    url:'/ISO/0',
    type: REDIRECT_TYPES.LINK
  }
];
export const SOCIAL_MEDIA = [
    {
      url:'https://www.facebook.com/Fundacion360/?locale=es_LA',
      icon: facebook
    },
    {
      url:'https://twitter.com/fundacion360ok',
      icon: twitter
    },
    {
      url:'https://www.youtube.com/channel/UCqq67UCSrtse07h7HtCdwvw',
      icon: youtube
    },
    {
      url:'https://www.instagram.com/fundacion360/',
      icon: instagram
    }
];
export const FRONTEND_MENU_ELEMENTS = [
  {
    title:'Inicio',
    route:'/home'
  },
  {
    title:'Noticias',
    route:'/noticias'
  },
  {
    title:'Eventos',
    route:'/eventos'
  },
  {
    title:'Campañas',
    route:'/campanas'
  },
  {
    title:'Instituciones',
    route:'/instituciones'
  },
  {
    title:'Nosotros',
    route:'/home'
  },
  {
    title:'Ingreso',
    route:'/login'
  },
];
export const FOOTER_CONFIG = [
  {
    title:'Responsabilidad Social Empresaria (RSE) ISO 26000',
    elements: [
        {
            title:'En que consiste',
            url:'/ISO/1',
            type: REDIRECT_TYPES.LINK
        },
        {
          title:'Objetivos',
          url:'/ISO/2',
          type: REDIRECT_TYPES.LINK
        },
    ]
  },
  {
      title:'Objetivos de Desarrollo Sostenible (ODS)',
      elements: [
          {
            title:'ODS3: Salud y Bienestar',
            url:'/ODS/1',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS4: Educación de calidad',
            url:'/ODS/2',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS5: Igualdad de Género',
            url:'/ODS/3',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS7: Energía Asequible y No Contaminante',
            url:'/ODS/4',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS10: Reducción de las Desigualdades',
            url:'/ODS/5',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS12: Producción y Consumo Responsable',
            url:'/ODS/6',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS13: Acción por el Clima',
            url:'/ODS/7',
            type: REDIRECT_TYPES.LINK
          },
          {
            title:'ODS17: Alianzas Estratégicas',
            url:'/ODS/8',
            type: REDIRECT_TYPES.LINK
          }
      ]
  },
  {
    title:'Desarrollado por Fundación 360',
    elements: [
        {
            title:'Fundación 360',
            url:'https://fundacion360.com.ar/index.html',
            type: REDIRECT_TYPES.BLANK
        }
    ]
  },
];

//Iconos
export const ICONS = {
  gift:gift,
  cammera:cammera,
  chat:chat,
  mony:mony,
  form:form,
  tag:tag,
  camera:camera,
  world:world,
  handHeard:handHeard,
  heard:heard,
  music:music,
  tiket:tiket,
  megaphone:megaphone,
  clock:clock,
  eje:eje,
  calendar:calendar,
  clouds:clouds,
  spotlight:spotlight,
  cart:cart,
  messege:messege,
  gear:gear,
  phone:phone,
  mountains:mountains,
  chebron: chebron,
};

//RegExp's
export const VALIDATIONS = {
  email:{
    regEx:/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
    message: "Este campo requiere un email valido."
  },
  password:{
    regEx:/^.{4,}$/,
    message: "La contrasena ingresada es menor a 4 caracteres."
  },
  ldapUser:{
    regEx:/^[a-zA-Z0-9]{4,}$/,
    message: "El usuario debe tener al menos 4 caracteres."
  },
  systemArea:{
    regEx:/^[a-zA-Z0-9/\s/ ]{4,}$/,
    message: "El area debe tener al menos 4 caracteres."
  },
  formElements:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{4,50}$/,
    message: "Caracteres Min 4 Max 50. Solo ASCI-EX"
  },
  formSubElement:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{1,50}$/,
    message: "Caracteres Min 1 Max 50. Solo ASCI-EX"
  },
  genericText:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{1,255}$/,
    message: "Caracteres Min 1 Max 255. Solo ASCI-EX"
  },
  phoneNumber:{
    regEx:/^\(?(0[1-9]{1,4})?\)?[-. ]?[0-9]{6,14}$/,
    message: "El campo requiere un telefono valido. ej: 01145123687"
  },
  numeric:{
    regEx:/^-?\d{1,10}$/,
    message: "El campo solo admite numeros enteros, entre el 0 y el 9999999999"
  },
  formCaption:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF\n\r]{4,100000}$/,
    message: "Caracteres Min 4 Max 100000. Solo ASCI-EX"
  },
  textWithCount: (min, max, name) => ({
    regEx: new RegExp(`^[\u0020-\u007E\u00A0-\u00FF]{${min},${max}}$`),
    message: `${name || "El campo"} debe tener al menos ${min} caracter${min != 1 ? "es" : ""} y como máximo ${max}.`
  }),
};


//Dummy Data
import Puerto from "./Assets/DEMOImgs/puerto.jpg"
import sannare from "./Assets/DEMOImgs/SANNARE.jpg"

export const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export const FCARDS = [
    {
        id: 0,
        title: "El puerto se prepara para la exploración petrolera",
        preview: "El Puerto otorgó un predio de 7.000 m2 para la logística de la explotación petrolera. Se trata de un sector de playón y depósito del predio aledaño a los silos que será destinado a la logística del proyecto de explotación petrolera frente a costas del sudeste bonaerense.",
        content: <>El Puerto otorgó un predio de 7.000 m2 para la logística de la explotación petrolera. Se trata de un sector de playón y depósito del predio aledaño a los silos que será destinado a la logística del proyecto de explotación petrolera frente a costas del sudeste bonaerense.<br/><br/>Esta superficie operativa de ubicación estratégica, a metros de la dársena de ultramar, resulta relevante para el correcto desarrollo de la actividad vinculada a la búsqueda de hidrocarburos. De acuerdo a lo resuelto, este permiso de uso para esos fines será por el plazo que demande la tarea de este pozo en particular.<br /><br />Esta decisión se tomó en función del pedido realizado por Equinor Argentina BV – Sucursal Argentina y su contratista Kuehne + Nagel, empresas que tienen a su cargo el proyecto de exploración petrolera del Pozo Argerich X1, conforme título otorgado por el Estado Nacional a través de la Resolución 55 de la Secretaría de Energía de la Nación, firmado el 3 de abril de 2020.<br /><br />El permiso de uso del predio se otorgó a favor de la firma local Hipoute S.A. – TC2, la cual presentó la documentación respaldatoria para realizar la logística a pedido de Equinor Argentina BV – Sucursal Argentina y Kuehne + Nagel.</>,
        date: "16-11-2023",
        image: Puerto,
        imageAlt: "alt",
        color: "green",
        url: CARD_TYPES.NOTICIAS
    },
    {
    id: 1,
    title: "Sannare: atención sanitaria para el futuro de la salud",
    preview: "La industria de la atención médica enfrenta desafíos complejos que las organizaciones pueden abordar recurriendo a tecnologías innovadoras, como la Inteligencia Artificial. Sannare, plataforma de salud basada en IA, desarrolla los 3 principales factores que darán forma a la atención sanitaria de 2024.",
    content: <>Sannare, la plataforma con motor de triage médico con Inteligencia Artificial, analiza las problemáticas que están impactando en la atención médica y cómo las tecnologías innovadoras pueden ayudar a organizaciones a hacer frente a ese desafío.<br/><br/>“La industria de la atención médica enfrenta desafíos complejos, como la escasez de personal, el agotamiento de los médicos y la disminución de la rentabilidad, especialmente en comunidades desatendidas. Para abordar estos problemas y garantizar la sostenibilidad, las organizaciones pueden recurrir a tecnologías innovadoras, incluida la inteligencia artificial, para mejorar la atención médica  y restablecer la confianza. Esta tecnología provee soluciones tanto para aplicaciones empresariales como para el consumidor directo”, analizó Andrea Mandelbaum, CEO de Sannare, y afirmó: “En todos estos aspectos, el ecosistema de Sannare alcanza sus metas al posicionarse como la plataforma más completa del mercado para acompañar al paciente a lo largo de todas sus fases, que incluyen atención primaria, estudios médicos, urgencias, así como el monitoreo y seguimiento en tratamientos de corto, mediano y largo plazo. Con una perspectiva holística del paciente, se enfoca en preservar tanto su bienestar físico como mental”.<br/><br/><br/><br/><br/><br/><strong style={{ fontWeight: 'bold' }}>Para Andrea Mandelbaum son 3 los factores que darán forma a la atención sanitaria de 2024:</strong><br/><br/><br/><br/><strong style={{ fontWeight: 'bold' }}>Asequibilidad a la salud:</strong><br/> El aumento de la inflación médica y los costos de cobertura podría resultar en mayores gastos de bolsillo para los consumidores en 2024. Se espera un aumento en los gastos de atención médica del consumidor, por lo que la asequibilidad es una preocupación clave para ejecutivos de planes de salud. Los consumidores, centrados en la conveniencia y el precio, están influenciando la transición en el sector de la salud. <br/>“Los prestadores pueden impactar las decisiones de salud ofreciendo herramientas digitales para guiar a los consumidores en su recorrido por la atención médica, brindando opciones más asequibles y construyendo la lealtad del paciente.  Nuestra plataforma trabaja colaborando con el paciente en todos sus requerimientos de salud como triage médico, donde pueden expresar sus síntomas a la IA de Sannare  y contactarse con médicos virtuales, obtener citas presenciales, a domicilio, ambulancias, entre otros. También seleccionar los especialistas de acuerdo con sus necesidades, confirmar las citas, cambiarlas, cancelarlas, y hasta gestionar sus estudios y resultados. Además, gestionar sus requerimientos no clínicos como autorizaciones, pagos, reclamos. Todo desde un mismo lugar tanto por whatsapp, App o teléfono”, explicó Andrea Mandelbaum. “Estos servicios de salud digital colaboran con el paciente y la entidad prestadora a brindar mejores experiencias para el usuario con una atención de 24/7 sin esperas ni fisuras”.<br/><br/><strong style={{ fontWeight: 'bold' }}>Colaboración con los médicos:</strong> <br/> Más de la mitad de los ejecutivos del sistema de salud (57%) esperan que la escasez de talento y los desafíos de la fuerza laboral afecten la estrategia de su organización en 2024, según una encuesta de Deloitte.<br/>“Muchos ejecutivos de sistemas de salud están tratando de atraer y retener al personal clínico sin dejar de centrarse en reducir el agotamiento de los médicos.  Con Sannare trabajamos en 3 niveles: el paciente, el médico y el prestador. Colaboramos con el médico en la sugerencia de diagnóstico, de exámenes médicos a partir de diagnóstico clínico, coordinación de citas y preparación de estudios médicos. De esta forma, logramos reducir un 23% la duración  de las citas y mitigar considerablemente la fatiga al término de la jornada. Buscamos colaborar estrechamente con el profesional, proporcionándole el respaldo de nuestros motores de inteligencia artificial para que pueda ofrecer un servicio de alta calidad”, sostuvo la CEO de Sannare.<br/><br/><strong style={{ fontWeight: 'bold' }}>Pacientes empoderados: </strong><br/> La revolución de la salud digital ha transformado a los pacientes de receptores pasivos a participantes activos en su bienestar. Gracias a datos en tiempo real, información personalizada y conectividad, los médicos reciben los datos de los pacientes y pueden tomar decisiones informadas para mejorar resultados de salud. <br/>“Para garantizar que la salud digital beneficie a todos, es crucial priorizar el acceso equitativo, privacidad de datos y consideraciones éticas. La integración de IA y aprendizaje automático de la plataforma Sannare contribuye a mejorar la predicción de riesgo,  genera tratamientos personalizados y gestión de la salud, marcando una nueva modalidad en la atención al paciente en la era digital”, afirmó Mandelbaum.<br/><br/><br/>Acerca de Sannare: Es un equipo multidisciplinario compuesto por médicos, enfermeras, especialistas en experiencia del cliente, ingenieros y científicos de inteligencia artificial de nivel mundial para crear la plataforma más innovadora del mercado. Los mueve la vocación de colaborar en una salud médica más accesible aportando nuestros conocimientos de tecnología. Crearon y desarrollaron soluciones que permitan a los pacientes y proveedores contar con información avanzada para la toma de decisiones. Miden constantemente los resultados y se anticipan a las necesidades de sus clientes. Para más información puede ingresar en www.sannare.com</>,
    date: "16-01-2024",
    image: SANNARE,
    imageAlt: "alt",
    color: "green",
    url: CARD_TYPES.NOTICIAS
    }
]// Eventos
export const FEVENTS = [
  {
      id: 0,
      title: "Conferencia de Innovación Tecnológica",
      preview: "Evento dedicado a las nuevas tendencias en tecnología y su impacto en la sociedad.",
      content: <>Un encuentro donde expertos de distintas áreas presentan las últimas innovaciones tecnológicas y debaten sobre el futuro del sector. La conferencia incluye una variedad de temas como inteligencia artificial, robótica, y ciberseguridad, entre otros.</>,
      date: "01-12-2023",
      image: exporobotica,
      imageAlt: "Conferencia de Innovación",
      color: "blue",
      url: CARD_TYPES.EVENTOS
  },
  {
      id: 1,
      title: "Feria de Emprendimiento Social",
      preview: "Oportunidad para conocer proyectos de impacto social impulsados por jóvenes emprendedores.",
      content: <>Esta feria reúne a emprendedores sociales que buscan mejorar sus comunidades a través de iniciativas innovadoras. Los asistentes podrán conocer y apoyar diversos proyectos, así como participar en talleres de emprendimiento.</>,
      date: "20-01-2024",
      image: exporobotica,
      imageAlt: "Feria de Emprendimiento",
      color: "green",
      url: CARD_TYPES.EVENTOS
  }
];

// campañas agregado recientemente
export const FCAMP = [
  {
      id: 0,
      title: " curso Competencias digitales Centro Comunitario Integral Nuestra Señora de Luján ",
      preview: " rchicos del Centro Comunitario Integral Nuestra Señora de Luján ya terminaron su curso de COMPETENCIAS DIGITALES NIVEL INICIAL desarrollado durante el ciclo lectivo 2023.",
      content: <>Los chicos del Centro Comunitario Integral Nuestra Señora de Luján ya terminaron su curso de COMPETENCIAS DIGITALES NIVEL INICIAL desarrollado durante el ciclo lectivo 2023. Durante este año los chicos pudieron obtener conocimientos basicos de competencias digitales, como word excel, paint, busqueda en internet, etc. Las cuales les seran utiles para su futuro.</>,
      date: "16-11-2023",
      image: hermanamarta,
      imageAlt: "alt",
      color: "green",
      url: CARD_TYPES.CAMPANAS
  },
  {
  id: 1,
  title: " Expo Robotica 2023",
  preview: "Los días 9, 1110 y 11 de octubre se desarrollaron las jornadas REM 2023.",
  content: <>Los días 9, 1110 y 11 de octubre se desarrollaron las jornadas REM 2023, en el marco del Programa Despertar Vocaciones TIC que organiza la Secretaría de Desarrollo Productivo e Innovación junto con la
  Secretaría de Educación Municipal y la Subsecretaría de Gobierno Digital.
  Las mismas se llevaron a cabo en el Hall Central del Palacio Municipal.
  En ella se demostraron micro experiencias educativas híbridas con elementos de robótica y domótica de:
  • Movilidad Urbana Sustentable
  (MUS)
  • Robótica Educativa Modular
  • Educación 4.0
  • Impresión 3D
  • Colaboratorio Robótica - Domótica.
  Gracias a todos los que nos acompañaron.</>,
  date: "16-01-2024",
  image: exporobotica,
  imageAlt: "alt",
  color: "green",
  url: CARD_TYPES.CAMPANAS
  },
  {
    id: 2,
    title: " Taller de Robotica y programación en Fundación Pupi",
    preview: "El equipo de Fundación360 ha impartido talleres de robótica y programación a jóvenes de entre 14 y 18 años de edad, de la 📍“Fundación Pupi”...",
    content: <>En el día de ayer, el equipo de Fundación360 ha impartido talleres de robótica y programación a jóvenes de entre 14 y 18 años de edad, de la 📍“Fundación Pupi”, brindando oportunidades de aprendizaje y desarrollo en tecnología que sin duda beneficiarán a estos jóvenes en su futuro.
    • Gracias por recibirnos fundacionpupi</>,
    date: "22-02-2024",
    image: pupi,
    imageAlt: "alt",
    color: "green",
    url: CARD_TYPES.CAMPANAS
    }
]
import exporobotica from "./Assets/DEMOImgs/exporobotica.png"
import hermanamarta from "./Assets/DEMOImgs/hermanamarta.png"
import pupi from "./Assets/DEMOImgs/pupi.png"
//Dummy Data
import SANNARE from "./Assets/DEMOImgs/SANNARE.jpg"

export const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


import dummylogo1 from './Assets/Images/Lorem-logo-1.png'
import dummylogo2 from './Assets/Images/Lorem-logo-2.png'

export const INSTIT = [
  {
    id:0,
    name: 'Fundacion 360',
    icon: Logo,
    desc:"Fundación 360 se erige como un faro de inspiración para el público joven, guiándolos hacia el fascinante mundo de las tecnologías de la información y la comunicación (TIC). A través de cursos y eventos dinámicos, nuestra fundación se dedica apasionadamente a fomentar vocaciones en el ámbito de las TIC. Buscamos no solo transmitir conocimientos prácticos, sino también encender la chispa de la curiosidad y la creatividad. En Fundación 360, creemos que al nutrir las habilidades digitales desde una edad temprana, estamos construyendo puentes hacia un futuro donde la innovación y la tecnología son accesibles para todos. Únete a nosotros en este emocionante viaje de descubrimiento y crecimiento en el vasto universo de las TIC.",
    highlights: [ODS_ICONS.ODS_2, ODS_ICONS.ODS_1, ODS_ICONS.ODS_3],
  },
  {
    id:1,
    name: 'La anonima 360',
    icon: dummylogo1,
    desc: lorem,
    highlights: [ODS_ICONS.ODS_3, ODS_ICONS.ODS_4, ODS_ICONS.ODS_5],
  },
  {
    id:2,
    name: 'Fundacion FRA',
    desc: lorem + lorem + lorem + lorem,
    highlights: [ODS_ICONS.ODS_2],
  },
  {
    id:3,
    icon: dummylogo2,
    name: 'ASDFG',
    desc: lorem,
    highlights: [ODS_ICONS.ODS_16, ODS_ICONS.ODS_17],
  },
]