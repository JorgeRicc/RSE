import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SOCIAL_MEDIA, BACKOFFICE_MENU_ELEMENTS, SYSTEM_ELEMENTS, FRONTEND_MENU_ELEMENTS, OFF_MENU_ELEMENTS } from './env';

//Layouts
import Dashboard from './Layouts/Dashboard';
import NotFound from './Layouts/NotFound';
import Frontend from './Layouts/Frontend';

//Frontend
import Home from './Pages/Frontend/Home.jsx';
import ISO from './Pages/Frontend/ISO.jsx';
import ODS from './Pages/Frontend/ODS.jsx';
import RSE from './Pages/Frontend/RSE.jsx';
import Noticias from './Pages/Frontend/Noticias.jsx';
import Noticia from './Pages/Frontend/Noticia.jsx';
import Instituciones from './Pages/Frontend/Instituciones.jsx';
import Institucion from './Pages/Frontend/Institucion.jsx';
//Backoffice
import LogIn from './Pages/Backoffice/LogIn.jsx';
//User
import HomeUser from "./Pages/Backoffice/User/HomeUser.jsx";
//Admin
import HomeAdmin from "./Pages/Backoffice/Admin/HomeAdmin.jsx";
import CardDetail from "./Pages/Frontend/CardDetail.jsx";
import { ScrollWrapper } from "./Components/Wrappers/ScrollWrapper.jsx";

//DUMMY DATA BACKOFFICE-NOTIFICATIONS
/*
const NOTIFICATIONS = [
  {
    title:'test 1',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...', //Ojo con el tamano maximo de caracteres. Cortenla
    url: '/backoffice/dashboard/notification',
    alert: 'normal'
  },
  {
    title:'test 2',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...', //Ojo con el tamano maximo de caracteres. Cortenla
    url: '/backoffice/dashboard/notification',
    alert: 'safe'
  },
  {
    title:'test 3',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...', //Ojo con el tamano maximo de caracteres. Cortenla
    url: '/backoffice/dashboard/notification',
    alert: 'alert'
  },
  {
    title:'test 4',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...', //Ojo con el tamano maximo de caracteres. Cortenla
    url: '/backoffice/dashboard/notification',
    alert: 'danger'
  }
];
*/
//DUMMY DATA BACKOFFICE-NOTIFICATIONS
const NOTIFICATIONS = false;



const RouterApp = (props) => {
  const [user, setUser] = useState(null);
  const [protectedRoutes, setProtectedRoutes] = useState(<></>);

  const baseFrontRoutes = (route, children) => {
    return (
      <Route path={route} element={<Frontend systemElements={SYSTEM_ELEMENTS} menuElements={FRONTEND_MENU_ELEMENTS} offMenuElements={OFF_MENU_ELEMENTS} socialMediaElements={SOCIAL_MEDIA} children={children} />} />
    );
  }

  const baseDashboard = (route, children) => {
    return (
      <Route path={route} element={<Dashboard menuElements={BACKOFFICE_MENU_ELEMENTS} systemElements={SYSTEM_ELEMENTS} notifications={NOTIFICATIONS} setIsOnLoading={props.setIsOnLoading} allowedMenuItems={user?.user.idUserType} children={children} />} />
    )
  }

  useEffect(() => {
    if (true) {
      setProtectedRoutes(
        <>
          {baseDashboard('/dashboard', <HomeUser />)}
        </>
      );
    } else {
      setProtectedRoutes(<></>);
    }
  }, [user])


  return (
    <>
      <BrowserRouter>
        <ScrollWrapper>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LogIn logo={SYSTEM_ELEMENTS.rLogo} setUser={setUser} setIsOnMessage={props.setIsOnMessage} setIsOnLoading={props.setIsOnLoading} />} />
            {baseFrontRoutes('/home', <Home />)}
            {baseFrontRoutes('/ISO/:isoId', <ISO />)}
            {baseFrontRoutes('/ODS/:odsId', <ODS />)}
            {baseFrontRoutes('/RSE', <RSE />)}
            {baseFrontRoutes('/noticias', <Noticias />)}
            {baseFrontRoutes('/noticias/:newsId', <Noticia />)}
            {baseFrontRoutes('/instituciones', <Instituciones />)}
            {baseFrontRoutes('/instituciones/:instId', <Institucion />)}
            {protectedRoutes}
          </Routes>
        </ScrollWrapper>
      </BrowserRouter>
    </>

  );
}

export default RouterApp;