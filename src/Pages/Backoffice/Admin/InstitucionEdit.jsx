import { useState } from "react";
import { VALIDATIONS } from "../../../env";
import { TextArea, TextInput } from "../../../Components/Inputs/Inputs";
import Button from "../../../Components/Inputs/Button";

import { lorem } from "../../../env";

import { INSTIT } from "../../../env";

const mockId = 1;

const InstitucionEdit = () => {

    const [formData, setFormData] = useState({});

    const onSubmit = () => {

    };

    return (
        <div className="min-h-[80vh] min-w-[100vw]">
            <div className="flex flex-col bg-gray-100 shadow-2xl rounded-xl w-[fit-content] max-w-[90vw] m-auto p-4">
                <h1 className="mx-auto text-5xl font-bold text-green-500 text-center">Editar Institución</h1>
                <form action="" className="rounded-xl flex justify-center items-center flex-col shadow-x">
                    <hr className="w-full border-green-500 border m-4"/>
                    <img src={INSTIT[mockId].icon} className="max-w-[75%] max-h-[20vh]" />
                    <Button type="button" callBack={undefined} text={'Editar Imagen'} style={{ marginTop: '1rem', marginButton: '1rem' }} />
                    <hr className="w-full border-green-500 border m-4"/>
                    <label htmlFor="" className="text-l font-semibold w-[14rem] text-left block m-auto text-center">Titulo de Institución</label>
                    <TextInput defaultValue={"Fundacion 360"} setData={value => setFormData({ ...formData, title: value })} validate={VALIDATIONS.textWithCount(1, 255, "El título de la institución")} elementStyles={{}} inputType={"text"} />
                    <div className="flex flex-col md:flex-row mt-8 gap-x-8 gap-y-4">
                        <div>
                            <label htmlFor="" className="text-l font-semibold w-[14rem] text-left block m-auto text-center">Descripción de Institución</label>
                            <TextArea defaultValue={INSTIT[mockId].desc} setData={value => setFormData({ ...formData, desc1: value })} validate={VALIDATIONS.textWithCount(10, 4096, "La descripción de la institución")} elementStyles={{}} />
                        </div>
                        <div>
                            <label htmlFor="" className="text-l font-semibold w-[14rem] text-left block m-auto text-center">Descripción de Objetivos</label>
                            <TextArea defaultValue={lorem} setData={value => setFormData({ ...formData, desc2: value })} validate={VALIDATIONS.textWithCount(10, 4096, "La descripción de los objetivos")} elementStyles={{}} />
                        </div>
                    </div>
                    <div className="w-[14rem] flex justify-center">
                        <Button callBack={onSubmit} text={'Confirmar Edición'} style={{ marginTop: '1rem', marginButton: '1rem' }} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InstitucionEdit;