


const DateInput = (props) => {


    //TODO: Crear mi propia interfaz para el ingreso de fechas, esta solo funciona en motores V8

    return(
        <>
            <input required type={props?.type} style={props?.style} name="" id="FormdateSearch" className="px-[1rem] py-[.5rem] rounded-xl shadow-x w-[16rem] outline-none focus:opacity-100 border-2 cursor-pointer focus:border-green-500" onChange={props?.callBack} />
        </>
    );
}

export default DateInput;