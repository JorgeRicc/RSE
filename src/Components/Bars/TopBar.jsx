import DropDown from "../Menus/DropDown";
import bell from '../../Assets/Icons/27.svg';
import { Link } from "react-router-dom";


const TopBar = (props) => {

    
    let notifications = [];
    if(props?.notifications?.length > 0){
        props.notifications.forEach((item, index) => {
            notifications.push(
                <Link key={index} className={`flex flex-col text-white font-semibold w-[95%]  py-[1rem] px-[.5rem] duration-100 rounded-xl drop-shadow-md ${item.alert}`} to={item.url}>
                    <div className="flex">
                        <div className={`${item.alert}R w-[.7rem] h-[.7rem] mx-[.5rem] rounded-[50%]`}></div>
                        <span className="text-s">{item.title}</span>
                    </div>
                    <span className="text-xs">{item.body}</span>
                </Link>
            )
        });

    }


    return(
        <header className="w-[95vw] m-auto my-[1rem] px-[2vw] h-14 bg-green-500 shadow-xl flex justify-between items-center rounded-xl">
            <div className="space-y-2 cursor-pointer" onClick={() => props.setIsOpen(!props.isOpen)}>
                <span className="block h-[3px] w-8 animate-pulse duration-75 bg-white"></span>
                <span className="block h-[3px] w-8 animate-pulse duration-100 bg-white"></span>
                <span className="block h-[3px] w-8 animate-pulse duration-200 bg-white"></span>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    notifications.length !== 0 && (
                        <DropDown 
                            elementHeader={<img src={bell} className="max-h-[2.1rem]"/>} 
                            elements={notifications}
                            boxStyles={{width:'18rem', minHeight:'6rem', maxHeight:'20rem', overflowY:'scroll', marginTop:'4rem', scrollbarWidth:'0px'}}
                        />  
                    )
                }
                
            </div>
            <div className="flex flex-row justify-center items-center">
                <span className="text-white font-semibold text-lg mx-[1rem] rsp-none-750">{props.elements?.textXl}</span>
                <img src={props.elements?.logo} className="max-h-[3rem] rsp-none-750"/>
                <img src={props.elements?.rLogo} className="w-[4rem] mr-[4rem] absolute rsp-yes-750"/>
            </div>
        </header>
    )
}

export default TopBar;