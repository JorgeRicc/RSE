import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../env";

import RMenuLinks from "../Menus/RMenuLinks";

const FTopBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [chebronOpen, setChebronOpen] = useState("");
    const [pathName, setPathName] = useState(window.location.pathname);

    const listenerChebron = () => {
        setChebronOpen("");
        document.removeEventListener("click", listenerChebron);
    }

    useEffect(() => {
        if(chebronOpen == "chebronOpen"){
            setTimeout(() => {
                document.addEventListener("click", listenerChebron)
            }, 100)
        }
    }, [chebronOpen])

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
    }, [isOpen])

    useEffect(() => {
        setPathName(window.location.pathname)
    }, [window.location.pathname]);


    return(
        <header>
            <div className="flex flex-row justify-between items-center">
                <a href={props?.logoRedirect} target="_blank">
                    <img src={props?.logo} className="max-w-[14rem] py-3 px-2 ml-4" />
                </a>
                <menu className="px-4 text-sm text-gray-900 font-semibold flex flex-row rsp-none-750">
                    {
                        props?.offMenuElements.map((item, index) => {
                            
                            switch(item.type)
                            {
                                case(0):{
                                    return(
                                        <a className="px-2 duration-200 opacity-80 hover:opacity-100" href={item.url} target="_blank" key={index}>{item.title}</a>
                                    );
                                }
                                case(1):{
                                    return(
                                        <Link className="px-2 duration-200 opacity-80 hover:opacity-100" to={item.url} replace={false} key={index}>{item.title}</Link>
                                    );
                                }
                            }
                        })
                    }
                    {
                        props?.socialMediaElements.map((item, index) =>{
                            return(
                                <a className="px-2 opacity-80 duration-200 hover:opacity-100" href={item.url} target="_blank" key={index}>
                                    <img src={item.icon} className="max-w-[1rem]" />
                                </a>
                            )
                        })
                    }
                </menu>
                <button onClick={() => setChebronOpen("chebronOpen")} className="rsp-yes-750">
                    <img src={ICONS.chebron} className="w-[1.3rem] opacity-80 mr-4" />
                </button>
            </div>
            <div className={`w-[100%] flex flex-col justify-center items-center overflow-hidden duration-700 h-auto max-h-[0vh] ${chebronOpen}`}>
                {
                    props?.offMenuElements.map((item, index) => {
                        switch(item.type){
                            case(0):{
                                return(
                                    <a className="px-2 duration-200 opacity-80 hover:opacity-100 font-semibold my-2" href={item.url} target="_blank" key={index}>{item.title}</a>
                                );
                            }
                            case(1):{
                                return(
                                    <Link className="px-2 duration-200 opacity-80 hover:opacity-100 font-semibold my-2" to={item.url} replace={false} key={index}>{item.title}</Link>
                                );
                            }
                        }
                    })
                }
                <div className="w-[100vw] flex flex-row justify-evenly items-center my-5">
                    {
                        props?.socialMediaElements.map((item, index) =>{
                            return(
                                <a className="px-2 opacity-80 duration-200 hover:opacity-100" href={item.url} target="_blank" key={index}>
                                    <img src={item.icon} className="max-w-[1rem]" />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-screen min-h-[4.5rem] mt-2 bg-green-500 shadow-xl">
                <menu className="text-white flex justify-center items-center ml-12 rsp-none-750">
                    {
                        props?.menuElements.map((item, index) => {
                            let opacity;
                            if(pathName === item.route){
                                opacity = "100";
                            }else{
                                opacity = "80"
                            }

                            return(
                                <Link to={item.route} key={index} className={`px-3 opacity-${opacity} duration-200 hover:opacity-100`} style={{fontFamily:'Museo-Sans-900'}}>{item.title}</Link>
                            );
                        })
                    }
                </menu>
                {
                    props?.menuElements.length > 0 ?
                    <div className="space-y-2 cursor-pointer rsp-yes-750 w-[100vw] flex justify-center items-center flex-row" onClick={() => setIsOpen(!isOpen)}>
                        <span className="block h-[3px] w-12 animate-pulse duration-75 bg-white mx-auto"></span>
                        <span className="block h-[3px] w-12 animate-pulse duration-100 bg-white mx-auto"></span>
                        <span className="block h-[3px] w-12 animate-pulse duration-200 bg-white mx-auto"></span>
                    </div>
                    :
                    <div className="text-white text-xl flex justify-center items-center ml-3 rsp-yes-750">
                        <span to={'/'} className="" style={{fontFamily:'Museo-Sans-900'}}>{props?.barTitle}</span>
                    </div>
                }
                <div className="text-white text-xl flex justify-center items-center mr-12 rsp-none-750">
                    <span to={'/'} className="" style={{fontFamily:'Museo-Sans-900'}}>{props?.barTitle}</span>
                </div>
            </div>
            <RMenuLinks isOpen={isOpen ? "" : "fMenuOff"} menuElements={props?.menuElements}/>
        </header>
    );
}

export default FTopBar;