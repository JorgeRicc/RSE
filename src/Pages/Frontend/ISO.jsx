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
    <>
        <h1 className="font-bold text-lg px-[1rem]">ISO 26000</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        La norma ISO 26000 desarrolla la responsabilidad social corporativa. Esta cuestión tiene una importancia cada vez mayor en la gestión de los procesos y la marca de las organizaciones, siendo su impacto muy relevante para entidades de todos los sectores.
        <br />
        <br />
        Según la ISO 26000, la responsabilidad social corporativa es “La responsabilidad de una organización, en relación con los impactos de sus decisiones y actividades en la sociedad y el medio ambiente, a través de un comportamiento transparente y ético que:
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Contribuya al desarrollo sostenible, incluyendo la salud y el bienestar de la sociedad.
        </div>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Tenga en cuenta las expectativas de las partes interesadas.
        </div>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Cumpla con la ley aplicable y sea consistente con las normas internacionales de comportamiento.
        </div>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Esté integrado en toda la organización y se lleve a la práctica en sus relaciones.
        </div>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Permita satisfacer, mediante el desarrollo sostenible, las necesidades de la sociedad viviendo dentro de los límites ecológicos del planeta y sin poner en peligro la capacidad de las generaciones futuras para satisfacer sus necesidades”.
        </div>
        </p>
    </>,
    <>
        <h1 className="font-bold text-lg px-[1rem]">Los objetivos de ISO 26000</h1>
        <p className="py-[1rem] text-center px-[.8rem]">
        La norma ISO 26000 es un estándar internacional que a diferencia de otras normas ISO, no es certificable, y no contiene requerimientos formales. Es una guía que cada organización considerará de forma voluntaria.
        <br />
        <br />
        <strong>Su objetivo es:</strong>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Ofrecer buenas prácticas y recomendaciones.
        </div>
        <br />
        <br />
        <div className="text-left">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Facilitar una guía que permita:
            <div className="text-left ml-[1rem] mt-[.5rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] ml-[.5rem] bg-green-400 absolute"/>&nbsp;&nbsp;&nbsp;&nbsp;
                Detectar oportunidades de mejora en materia de responsabilidad social corporativa.
            </div>
            <div className="text-left ml-[1rem] mt-[.5rem]">
                <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] ml-[.5rem] bg-green-400 absolute"/>&nbsp;&nbsp;&nbsp;&nbsp;
                Evaluar o medir la responsabilidad social corporativa de las entidades.
            </div>
        </div>
        <div className="text-left mt-[1rem]">
            <div className="h-[.6rem] w-[.6rem] rounded-xl mt-[.2rem] bg-green-500 absolute"/>&nbsp;&nbsp;
            Fomentar la responsabilidad social corporativa, teniendo en cuenta a los grupos de interés, de forma que se contribuya al desarrollo ambiental, social y económico sostenible en los productos, servicios o procesos de la entidad.
        </div>
        <br />
        <br />
        Esta norma hace referencia también a otros estándares relacionados, como son los GRI Standards, la declaración de Derechos Humanos de las Naciones Unidas o las diferentes guías de la OECD y trata, entre otras, cuestiones relativas a derechos humanos, relaciones de trabajo, medioambiente o la influencia de la entidad en la sociedad.
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