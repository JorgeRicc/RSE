import { useEffect } from "react";
import { Link } from "react-router-dom";


const RMenuLinks = (props) => {


    return(
        <menu className={`z-10 rsp-yes-750 overflow-y-scroll flex flex-col justify-start items-start absolute max-h-[24rem] w-[100vw] duration-500 rounded-b-xl bg-green-600 pb-4 ${props.isOpen}`} style={{...props?.menuStyle, height:'18rem'}}>
            {
                props?.menuElements.map((item, index) => {
                    return(
                        <div key={index} className="w-[80%] flex justify-center items-center m-auto text-center h-[4rem] text-white text-xl font-semibold opacity-85 border-b-green-500 border-b-[2px]">
                            <Link to={item.route}>{item.title}</Link>
                        </div>
                    );
                })
            }
        </menu>
    );
}

export default RMenuLinks;