import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const ISOS = [
    <>
        <h1 className="font-bold text-lg px-[1rem]">¿Qué son las normas ISO?</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        Las normas ISO son un conjunto de estándares con reconocimiento internacional que fueron creados con el objetivo de ayudar a las empresas a establecer unos niveles de homogeneidad en relación con la gestión, prestación de servicios y desarrollo de productos en la industria.
        <br />
        <br />
        Las iniciales ISO son el acrónimo de International Organization for Standardization, y sus orígenes se remontan 1946, como unión de otros organismos que existían previamente y cuyo objetivo era la regulación y establecimiento de estándares para la fabricación (International Federation of National Standarzing (ISA) y la United Nations Standards Coordinating Committee (UNSCC)) a la reunión inicial, que tuvo lugar en el Instituto de Ingenieros Civiles de  Londres, asistieron 64 delegados en representación de 25 países.
        <br />
        <br />
        Desde entonces y hasta la fecha se han creado más de 23.000 estándares que cubren multitud de áreas de gestión, tecnologías y procesos de producción. Se trata de una organización no gubernamental, en la que se encuentran presentes en 164 países, con 781 comités y subcomités técnicos implicados en el desarrollo de estándares, y que tienen su Secretaria Central en Ginebra, Suiza.
        </p>
    </>,
]


const ISO = (prop) => {

    let { isoId } = useParams();



    return(
        <section className="py-[3rem] flex flex-col justify-center items-center">
            {
                (parseInt(isoId) < 0 || parseInt(isoId) > ISOS.length - 1) && (<Navigate to="/404" replace={true} />)
            }
            {ISOS[parseInt(isoId)]}
        </section>
    );
}

export default ISO;