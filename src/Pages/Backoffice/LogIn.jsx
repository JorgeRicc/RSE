import { useEffect, useState } from "react";
import { TextInput } from "../../Components/Inputs/Inputs";
import { VALIDATIONS } from "../../env";
import { Navigate } from "react-router-dom";
import Button from '../../Components/Inputs/Button';

import { redirect } from "react-router-dom";


const LogIn = (props) => {

    const [formData, setFormData] = useState({});
    const [isUserData, setIsUserData] = useState(false);


    const onSubmmit = async (e) => {
        e.preventDefault();
        setIsUserData(true);
    }


    return(
        <>
        {
            isUserData && (<Navigate to="/dashboard" replace={false} />)
        }
        <section className="flex justify-center items-center">
            <div className="bg-green-500 shadow-xl rounded-xl flex justify-between pr-10 mt-[20vh] shadow-x flex-col-750 pad-y-750">
                <form action="" className="bg-white px-10 py-10 rounded-xl flex justify-center items-center flex-col shadow-x">
                    <label htmlFor="" className="text-l font-semibold w-[14rem] text-left">Usuario</label>
                    <TextInput setData={value => setFormData({...formData, user_mane: value})} validate={VALIDATIONS.ldapUser} elementStyles={{}} inputType={"text"}/>
                    <br />
                    <label htmlFor="" className="text-l font-semibold w-[14rem] text-left">Contrasena</label>
                    <TextInput setData={value => setFormData({...formData, password: value})} validate={VALIDATIONS.password} elementStyles={{}} inputType={"password"}/>
                    <div className="w-[14rem] flex justify-end">
                    <Button callBack={onSubmmit} text={'Ingresar'} style={{marginTop:'1rem', marginButton:'1rem'}}/>
                    </div>
                </form>
                <div className="flex justify-center items-center pad-y-750">
                    {
                        props?.logo ?
                        <img src={props.logo} className="w-[10rem] ml-[1rem]"/>
                        :
                        <></>
                    }
                </div>
            </div>
        </section>
        </>
    );
}

export default LogIn;