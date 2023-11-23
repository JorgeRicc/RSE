import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import TopBar from "../Components/Bars/TopBar";
import LeftMenu from "../Components/Menus/LeftMenu";



const Dashboard = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOnLogin, setIsOnLogin] = useState(false);



    const listener = () => {
        setIsOpen(false);
        document.removeEventListener("click", listener);
    }

    useEffect(() => {
        if(isOpen === true){
            setTimeout(() => {
                document.addEventListener("click", listener)
            }, 100)
        }
    }, [isOpen]);


    useEffect(() => {
        setTimeout(props.setIsOnLoading(false), 200);
    }, []);

    return(
        <>
            {
                isOnLogin &&  (<Navigate to="/backoffice/login" replace={false} />)
            }
            <TopBar setIsOpen={setIsOpen} isOpen={isOpen} elements={props.systemElements} notifications={props?.notifications}/>
            <LeftMenu isOpen={isOpen} elements={props.menuElements} allowedMenuItems={props?.allowedMenuItems}/>
            {props?.children}
        </>
    );
}

export default Dashboard;