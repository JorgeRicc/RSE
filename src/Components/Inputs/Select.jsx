



const Select = (props) => {
    return(
        <select value={props?.value} id={props?.id} name={props?.name} onChange={props.callBack} className="shadow-x w-[16rem] outline-none rounded-xl border-2 text-center p-[.1rem] opacity-75 duration-200 focus:opacity-100 focus:border-green-500 hover:cursor-pointer">
            {props?.options()}
        </select>
    )
} 

export default Select;