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

//Social Media Icons
import facebook from './Assets/SocialM/facebook.svg';
import twitter from './Assets/SocialM/twitter.svg';
import youtube from './Assets/SocialM/youtube.svg'
import instagram from './Assets/SocialM/instagram.svg';

//System Assets
import Logo from './Assets/DEMO/r-logo.png';
import RLogo from './Assets/DEMO/r-logo.png';
import FLogo from './Assets/DEMO/f-logo.png';

const USER_TYPES = {
  OFF: -1,
  UNRRESTRICTED: 0,
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
      title:'Ejemplo',
      route:'ruta',
      alert:'normal',
      icon: world,
      user_type_acces: [USER_TYPES.UNRRESTRICTED]
    }
];

//Frontend Config
export const OFF_MENU_ELEMENTS = [
  {
    title:'ELEMENTO',
    url:''
  }
];
export const SOCIAL_MEDIA = [
    {
      url:'',
      icon: facebook
    },
    {
      url:'',
      icon: twitter
    },
    {
      url:'',
      icon: youtube
    },
    {
      url:'',
      icon: instagram
    }
];
export const FRONTEND_MENU_ELEMENTS = [
  {
    title:'Inicio',
    route:'/home'
  },
  {
    title:'Elemento',
    route:'/ruta'
  }
];
export const FOOTER_CONFIG = [
  {
      title:'ACCESOS DIRECTOS',
      elements: [
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
          {
            title:'Elemento del footer p1',
            url:'https://google.com'
          },
      ]
  },
  {
      title:'',
      elements: [
          {
              title:'Elemento del footer p2',
              url:'https://google.com'
          }
      ]
  },
  {
      title:'Elementos p3',
      elements: [
          {
              title:'Telefono',
              url:'tel:2236777544'
          },
          {
              title:'Telefono',
              url:'tel:2236777544'
          },
          {
              title:'Telefono',
              url:'tel:2236777544'
          }
      ]
  }
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
  }
};