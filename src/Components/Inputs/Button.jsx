

const Button = (props) => {


    return(
        <>
            <button id={props?.id} style={props?.style || {}} className="text-white text-l font-semibold bg-green-500 w-fit py-1 px-4 rounded-xl shadow-xl opacity-90 duration-500 hover:opacity-100" onClick={props.callBack}>{props.text}</button>
        </>
    );
}

export default Button;