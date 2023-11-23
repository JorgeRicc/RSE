
import { useState } from "react";
import { INSTIT } from "../../env";
import { Navigate } from "react-router-dom";


const Instituciones = () => {

    const [idSelected, setIdSelected] = useState(-1);


    return(
        <section className="min-h-[50vh] py-[1rem] flex flex-col items-center">
            {
                idSelected != -1 && (<Navigate to={`/instituciones/${idSelected}`} replace={true} />)
            }
            {
                INSTIT.map((item, index) => {
                    return(
                        <div key={index} className="rounded-sm transition-all cursor-pointer shadow-xl my-[.5rem] w-[95vw] py-[.3rem]" onClick={() => setIdSelected(item.id)}>
                            <h3 className="text-center font-semibold">{item.name}</h3>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Instituciones;