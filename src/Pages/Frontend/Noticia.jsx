import { useState } from "react";
import { FCARDS } from "../../env";
import { Navigate, useParams } from "react-router-dom";



const Noticia = () => {

    const [notFound, setNotFound] = useState(false);

    let { newsId } = useParams();
    newsId = parseInt(newsId);

    return(
        <>
            {
                notFound && (<Navigate to="/404" replace={true} />)
            }
            <section className="py-[1rem] flex flex-col justify-center items-center">
                <h3 className="text-sm font-semibold my-[1rem]">{FCARDS[newsId].date}</h3>
                <h1 className="font-bold text-lg text-center px-[1rem]">{FCARDS[newsId]?.title}</h1>
                <img src={FCARDS[newsId].image} alt="alt" className="rounded-sm py-[.5rem]"/>
                <p className="py-[1rem] text-center px-[.8rem]">
                    {FCARDS[newsId].content}
                </p>
            </section>
        </>
    );
};

export default Noticia;