import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


const MenuLinks = (props) => {

    const [bg, setBg] = useState("");


    useEffect(() => {
        if(window.location.pathname == props.item.route){
            setBg(props.item.alert + 'R');
        }else{
            setBg('');
        }
    }, [window.location.pathname]);


    return(
        <Link className="text-white drop-shadow-md" to={props.item.route}>
            <div className={`w-[90%] max-w-[295px] mx-auto text-left flex px-[1rem] py-[.7rem] rounded-xl duration-200 ${bg} ${props.item.alert}`}>
                {
                    props.item?.icon ?
                    <img src={props.item.icon} className="w-[1.75rem]"/>
                    :
                    <div className="w-[1.75rem]"/>
                }
                <span className="mx-[.8rem]">{props.item.title}</span>
            </div>
        </Link>
    )

}

export default MenuLinks;