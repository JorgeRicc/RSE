import { useState } from "react"



export const TextInput = (props) => {

    const [onError, setOnError] = useState(false);
    const [color, setErrorColor] = useState("")

    const onChangeHandler = (e) => {

        if(props?.noCheck){
            props.setData(e.target.value);
        }else{
            let rsp = props.validate.regEx.test(e.target.value);

            if(!rsp){
                setOnError(props.validate.message);
                setErrorColor("errorColor");
                props.setData(props?.defaultValue);
            }else{
                setOnError(false);
                setErrorColor("");
                props.setData(e.target.value);
            }
        }
        
    }

    const onBlurHandler = (e) => {
        if(!onError){
            props.setData(e.target.value);
            setOnError(false);
            setErrorColor("");
        }else{
            props.setData(props?.defaultValue);
            setErrorColor("errorColor");
        }
    }


    return(
        <div className="flex flex-col">
            {
                props?.disabled ?
                <input defaultValue={props?.defaultValue} name={props?.name} id={props?.id} type={props?.inputType} style={{...props?.elementStyles}} placeholder={props?.placeholder} onChange={onChangeHandler} onBlur={onBlurHandler} className={`shadow-x w-[16rem] outline-none rounded-xl border-2 text-center p-[.1rem] opacity-75 duration-200 focus:opacity-100 focus:border-green-500 ${color}`} disabled/>
                :
                <input defaultValue={props?.defaultValue} name={props?.name} id={props?.id} type={props?.inputType} style={{...props?.elementStyles}} placeholder={props?.placeholder} onChange={onChangeHandler} onBlur={onBlurHandler} className={`shadow-x w-[16rem] outline-none rounded-xl border-2 text-center p-[.1rem] opacity-75 duration-200 focus:opacity-100 focus:border-green-500 ${color}`} required={props?.required}/>
            }
            {
                onError ?
                <span className="text-red-500 text-[11px] max-w-[15rem] absolute mt-[2rem]">*{onError}</span>
                :
                <></>
            }
        </div>
    )
}

export const TextArea = (props) => {
    const [onError, setOnError] = useState(false);
    const [color, setErrorColor] = useState("")

    const onChangeHandler = (e) => {

        if(props?.noCheck){
            props.setData(e.target.value);
        }else{
            let rsp = props.validate.regEx.test(e.target.value);

            if(!rsp){
                setOnError(props.validate.message);
                setErrorColor("errorColor");
                props.setData(props?.defaultValue);
            }else{
                setOnError(false);
                setErrorColor("");
                props.setData(e.target.value);
            }
        }
        
    }

    const onBlurHandler = (e) => {
        if(!onError){
            props.setData(e.target.value);
            setOnError(false);
            setErrorColor("");
        }else{
            props.setData(props?.defaultValue);
            setErrorColor("errorColor");
        }
    }


    return(
        <div className="flex flex-col">
            {
                props?.disabled ?
                <textarea defaultValue={props?.defaultValue} name={props?.name} id={props?.id} type={props?.inputType} style={{...props?.elementStyles}} placeholder={props?.placeholder} onChange={onChangeHandler} onBlur={onBlurHandler} className={`shadow-x w-[16rem] min-h-[15rem] outline-none rounded-xl border-2 text-left p-[.5rem] opacity-75 duration-200 focus:opacity-100 focus:border-green-500 ${color}`} disabled/>
                :
                <textarea defaultValue={props?.defaultValue} name={props?.name} id={props?.id} type={props?.inputType} style={{...props?.elementStyles}} placeholder={props?.placeholder} onChange={onChangeHandler} onBlur={onBlurHandler} className={`shadow-x w-[16rem] min-h-[15rem] outline-none rounded-xl border-2 text-left p-[.5rem] opacity-75 duration-200 focus:opacity-100 focus:border-green-500 ${color}`} required={props?.required}/>
            }
            {
                onError ?
                <span className="text-red-500 text-[11px] max-w-[15rem] mt-[0rem]">*{onError}</span>
                :
                <></>
            }
        </div>
    )
}
