import { useEffect, useState } from "react";


const DropDown = (props) => {

    const [isOpen, setIsOpen] = useState(false);


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


    return(

        <div className="flex flex-row items-start justify-center z-10" style={{width: props.boxStyles.width}}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {props?.elementHeader}
            </button>
        {
            isOpen ?
            <div className="bg-slate-400 absolute shadow-xl rounded-xl fade-in-image flex flex-col justify-start items-center py-[.5rem]" style={props.boxStyles}>
                {
                    props?.elements?.map((item) => item)
                }
            </div>
            :
            <></>
        }
        </div>

    );
}

export default DropDown;