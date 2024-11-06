import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SOCIAL_MEDIA, BACKOFFICE_MENU_ELEMENTS, SYSTEM_ELEMENTS, FRONTEND_MENU_ELEMENTS, OFF_MENU_ELEMENTS } from './env';

// Layouts
import Dashboard from './Layouts/Dashboard';
import NotFound from './Layouts/NotFound';
import Frontend from './Layouts/Frontend';

// Frontend Pages
import Home from './Pages/Frontend/Home.jsx';
import ISO from './Pages/Frontend/ISO.jsx';
import ODS from './Pages/Frontend/ODS.jsx';
import RSE from './Pages/Frontend/RSE.jsx';
import Noticias from './Pages/Frontend/Noticias.jsx';
import Noticia from './Pages/Frontend/Noticia.jsx';
import Nosotros from './Pages/Frontend/Nosotros.jsx';
import Eventos from './Pages/Frontend/Eventos.jsx';
import Campanas from './Pages/Frontend/Campanas.jsx';
import Instituciones from './Pages/Frontend/Instituciones.jsx';
import Institucion from './Pages/Frontend/Institucion.jsx';
// Backoffice Pages
import LogIn from './Pages/Backoffice/LogIn.jsx';
import HomeUser from "./Pages/Backoffice/User/HomeUser.jsx";
import HomeAdmin from "./Pages/Backoffice/Admin/HomeAdmin.jsx";
import InstitucionEdit from "./Pages/Backoffice/Admin/InstitucionEdit.jsx";

import { ScrollWrapper } from "./Components/Wrappers/ScrollWrapper.jsx";

const NOTIFICATIONS = false; // Cambia a una lista de notificaciones para habilitar

const RouterApp = (props) => {
  const [user, setUser] = useState(null);
  const [protectedRoutes, setProtectedRoutes] = useState(<></>);

  const baseFrontRoutes = (route, children) => (
    <Route path={route} element={
      <Frontend 
        systemElements={SYSTEM_ELEMENTS} 
        menuElements={FRONTEND_MENU_ELEMENTS} 
        offMenuElements={OFF_MENU_ELEMENTS} 
        socialMediaElements={SOCIAL_MEDIA}
      >
        {children}
      </Frontend>
    } />
  );

  const baseDashboard = (route, children) => (
    <Route path={route} element={
      <Dashboard 
        menuElements={BACKOFFICE_MENU_ELEMENTS} 
        systemElements={SYSTEM_ELEMENTS} 
        notifications={NOTIFICATIONS}
        setIsOnLoading={props.setIsOnLoading}
        allowedMenuItems={user?.user.idUserType}
      >
        {children}
      </Dashboard>
    } />
  );

  useEffect(() => {
    if (user) {
      setProtectedRoutes(
        <>
          {baseDashboard('/dashboard', <HomeUser />)}
          {baseDashboard('/institucion_edit', <InstitucionEdit />)}
        </>
      );
    } else {
      setProtectedRoutes(<></>);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <ScrollWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LogIn logo={SYSTEM_ELEMENTS.rLogo} setUser={setUser} setIsOnMessage={props.setIsOnMessage} setIsOnLoading={props.setIsOnLoading} />} />
          
          {baseFrontRoutes('/home', <Home />)}
          {baseFrontRoutes('/ISO/:isoId', <ISO />)}
          {baseFrontRoutes('/ODS/:odsId', <ODS />)}
          {baseFrontRoutes('/RSE', <RSE />)}

          {/* Noticias y Eventos */}
          {baseFrontRoutes('/noticias', <Noticias />)}
          {baseFrontRoutes('/noticias/:newsId', <Noticia />)}
          {baseFrontRoutes('/eventos', <Eventos />)}
          {baseFrontRoutes('/eventos/:eventosId', <Eventos />)}

          {/* Otras Páginas */}
          {baseFrontRoutes('/campanas', <Campanas />)}
          {baseFrontRoutes('/nosotros', <Nosotros />)}
          {baseFrontRoutes('/campanas/:campanasId', <Campanas />)}
          {baseFrontRoutes('/instituciones', <Instituciones />)}
          {baseFrontRoutes('/instituciones/:instId', <Institucion />)}

          {/* Rutas Protegidas */}
          {protectedRoutes}
        </Routes>
      </ScrollWrapper>
    </BrowserRouter>
  );
};

export default RouterApp;
