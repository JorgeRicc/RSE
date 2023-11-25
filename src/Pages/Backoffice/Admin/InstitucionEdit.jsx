import { useState } from "react";
import { VALIDATIONS } from "../../../env";
import { TextArea, TextInput } from "../../../Components/Inputs/Inputs";
import Button from "../../../Components/Inputs/Button";
import TripleDots from "../../../Components/Icons/TripleDots";

import { lorem } from "../../../env";
import { INSTIT } from "../../../env";

const mockId = 0;

const mockInstit = INSTIT[mockId];

const InstitucionEdit = () => {

    const [formData, setFormData] = useState({});

    const onSubmit = () => {

    };

    return (
        <div className="min-h-[80vh] min-w-[100vw]">
            <div className="flex flex-col bg-gray-100 shadow-2xl rounded-xl w-[fit-content] max-w-[90vw] m-auto p-4">
                <h1 className="mx-auto text-5xl font-bold text-green-500 text-center">Editar Institución</h1>
                <form action="" className="rounded-xl flex justify-center items-center flex-col shadow-x">
                    <hr className="w-full border-green-500 border m-4" />
                    <img src={mockInstit.icon} className="max-w-[75%] max-h-[20vh]" />
                    <Button type="button" callBack={undefined} text={'Editar Imagen'} style={{ marginTop: '1rem', marginButton: '1rem' }} />
                    <hr className="w-full border-green-500 border m-4" />
                    <label htmlFor="" className="text-l font-semibold w-[14rem] text-left block m-auto text-center">Titulo de Institución</label>
                    <TextInput defaultValue={mockInstit.name} setData={value => setFormData({ ...formData, title: value })} validate={VALIDATIONS.textWithCount(1, 255, "El título de la institución")} elementStyles={{}} inputType={"text"} />
                    <div className="flex flex-col md:flex-row mt-8 gap-x-8 gap-y-4">
                        <div>
                            <label htmlFor="" className="text-l font-semibold w-[14rem] text-left block m-auto text-center">Descripción de Institución</label>
                            <TextArea defaultValue={mockInstit.desc} setData={value => setFormData({ ...formData, desc1: value })} validate={VALIDATIONS.textWithCount(10, 4096, "La descripción de la institución")} elementStyles={{}} />
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
            <br />
            <h2 className="mx-auto text-3xl font-bold text-green-700 text-center">Vista Previa</h2>
            <div className="rounded-xl p-4 bg-gray-100 hover:bg-white transition-all cursor-pointer shadow-2xl my-[1rem] w-[95vw] lg:w-[80vw] py-[1rem] m-auto">
                <div className="flex lg:hidden gap-4 justify-center items-center left-0">
                    {mockInstit.highlights?.map(icon =>
                        <img src={icon} alt="" className='rounded-md justify-self-start max-w-[20vw] max-h-[15vh]' />
                    )}
                </div>
                <div className="flex relative gap-4 pt-2 lg:p-4 justify-center items-center">
                    <div className="hidden lg:flex absolute gap-2 justify-center items-center left-0">
                        {mockInstit.highlights?.map(icon =>
                            <img src={icon} alt="" className='rounded-md justify-self-start max-w-[10vw] max-h-[10vh]' />
                        )}
                    </div>
                    {
                        mockInstit.icon ?
                            <img src={mockInstit.icon} alt={mockInstit.name} className='max-h-[10vh] lg:max-h-[9vh]' /> :
                            <h3 className="flex justify-center items-center text-center font-semibold justify-self-center lg:min-h-[9vh]">{mockInstit.name}</h3>
                    }
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="max-h-[4lh] overflow-hidden">{formData.desc1 || mockInstit.desc}</p>
                <TripleDots />
            </div>
        </div>
    );
}

export default InstitucionEdit;