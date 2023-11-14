import Button from "../Inputs/Button";


const CheckModal = (props) => {

    const clickHandler = (result) => {
        props.item.callBack(result);
        props.setIsOnCheck(false);
    }

    return(
        <div className="w-[100vw] h-[100vh] bg-black bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
            <div className="min-w-[20rem] min-h-[20rem] w-[50vw] h-20vh bg-white rounded-xl shadow-xl flex flex-col justify-evenly items-center">
                <h1 className="text-2xl font-bold px-[3rem] text-center">{props.item.title}</h1>
                <span className="font-semibold px-[2rem] text-center">{props.item.message}</span>
                <div className="flex flex-row-reverse justify-evenly items-center flex-col-750">
                    <Button callBack={() => clickHandler(true)} text={'Aceptar'} style={{padding:'.5rem 1rem', fontSize:'17px', margin:'12px'}}/>
                    <Button callBack={() => clickHandler(false)} text={'Cancelar'} style={{padding:'.5rem 1rem', fontSize:'17px', backgroundColor:'red', margin:'12px'}}/>
                </div>
            </div>
        </div>
    );
};
export default CheckModal;